/**
 * Created by Z.cr on 2018-2-1.
 * 数据源格式 DATA: any = [{id: 1, text: "文本1"}, {id: 2, text: "文本2"}];
 * 数据源格式 DATA: any = [{id: "id-1", text: "文本1"}, {id: "id-2", text: "文本2"}];
 *
 * 基本用例:
 * <key-combobox #combobox_ck="ngModel" name="test" [(ngModel)]="test" [data]="DATA" [required]="true"></key-combobox>
 */

import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { KeyComboboxOption } from "./combobox-option";
import { Utils } from "../../../utils/utils";
import { IdCounter } from "../../../utils/id-counter";

@Component({
    selector: "key-combobox",
    templateUrl: "./combobox.component.html",
    /**
     * provider 创建出 service
     * useExisting 创建别名标记
     * NG_VALUE_ACCESSOR 用于提供一个 ControlValueAccessor 表单控件
     * forwardRef 允许引用尚未定义的引用
     */
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => KeyComboboxComponent), multi: true }
    ]
})
export class KeyComboboxComponent implements OnInit, ControlValueAccessor {

    // 值发生改变时，触发该事件
    @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

    // 点击刷新按钮，触发该事件
    @Output() refreshChange: EventEmitter<any> = new EventEmitter();

    // input 元素的 id 属性
    @Input() id: string = IdCounter.newId("key-combobox");

    // input 元素的 name 属性
    @Input() name: string;

    // 数据源 - id标识，默认为 id
    @Input() idField: string = "id";

    // 数据源 - 名称标识，默认为 text
    @Input() textField: string = "text";

    // 数据源 - 图片url标识，默认为 url
    @Input() urlField: string = "url";

    // 数据源 - 分组标识，默认为 null
    @Input() groupField: string = null;

    // input 元素的必填属性，默认为 false
    @Input() required: boolean = false;

    // input 元素的只读属性，默认为 false
    @Input() readonly: boolean = false;

    // input 元素的提示属性，默认为 ""
    @Input() placeholder: any = "";

    // 是否显示刷新按钮，默认为 false
    @Input() hasRefreshBtn: boolean = false;

    // 是否显示图片
    @Input() hasPicture: boolean = false;

    // 图片宽度
    @Input() pictureWidth: any = "50px";

    // 图片高度
    @Input() pictureHeight: any = "50px";

    // 下拉列表框数据源
    @Input()
    set data(data: Array<any>) {
        this.dataState = true;
        if (!data) {
            this.options = this.dataOptions = [];
        } else {
            let dataSource: KeyComboboxOption[] = data.map((item: any) => (
                typeof item === "string" ? new KeyComboboxOption(item) : new KeyComboboxOption({
                    id: item[this.idField],
                    text: item[this.textField],
                    url: item[this.urlField],
                    group: item[this.groupField]
                })));
            // 分组标识为不为空时，才进行数据排序
            if (this.groupField) {
                this.options = this.dataOptions = dataSource.sort((a, b) => {
                    if (a.group == b.group) {
                        return 0;
                    }
                    if (a.group > b.group) {
                        return 1;
                    }
                    if (a.group < b.group) {
                        return -1;
                    }
                });
            } else {
                this.options = this.dataOptions = dataSource;
            }
            // 如果已经存在值时，尝试选择该值对应的项
            if (this.value) {
                let option = this.findOptionById(this.value);
                if (option) {
                    this.updateInputValue(option.text);
                    this.updateUrlValue(option.url);
                    this.activeOption = option;
                } else {
                    this.idValue = null;
                    this.activeOption = null;
                }
            }
        }
    }

    // 设置下拉列表框选项（id）
    @Input()
    set value(value: any) {
        if (this.value == value) {
            return;
        } else {
            this.idValue = value;
            let option = this.findOptionById(value);
            if (option) {
                this.activeOption = option;
                this.updateInputValue(option.text);
                this.updateUrlValue(option.url);
            } else {
                this.activeOption = null;
                this.updateInputValue(null);
                this.updateUrlValue(null);
            }
            this.onChange.emit(this.value);
            this.onModalChange(this.value);
        }
    }

    get value() {
        return this.idValue;
    }

    // img 元素
    @ViewChild("img")
    imgEl: ElementRef;

    // input 元素
    @ViewChild("input")
    inputEl: ElementRef;

    // 下拉列表框 元素
    @ViewChild("menuUl")
    menuUl: ElementRef;

    // 数据源状态，默认为 false
    dataState: boolean = false;

    // 下拉列表框选项
    options: KeyComboboxOption[];

    // 下拉列表框选项
    dataOptions: KeyComboboxOption[];

    // 当前下拉列表框选项
    activeOption: KeyComboboxOption;

    // 当前下拉列表框选项的 url 值
    urlValue: string = null;

    // 当前下拉列表框选项的值
    textValue: string = null;

    // 当前下拉列表框选项的 id 值
    idValue: any = null;

    // 显示下拉列表框菜单
    showMenu: boolean = false;

    // 禁止重复执行 KeyPress 事件方法
    suppressKeyPressRepeat: boolean = false;

    // 模型change函数
    onModalChange: Function = Function.prototype;

    // 模型touched函数
    onModelTouched: Function = Function.prototype;

    ngOnInit() {
        this.clickedOutside = this.clickedOutside.bind(this);
    }

    /**
     * 注册一个回调函数，设置 input 元素接收到 change 事件后，调用的函数
     * 这是在初始化时，由 forms API 调用，以便当值从视图传播时（视图 - >模型），它可以更新表单模型
     * @param fn
     */
    registerOnChange(fn: Function): void {
        this.onModalChange = fn;
    }

    /**
     * 注册一个回调函数，设置 input 元素接收到 touched 事件后，调用的函数
     * 这是在初始化时，由 forms API 调用，以便可以在失去焦点后更新表单模型
     * @param fn
     */
    registerOnTouched(fn: Function): void {
        this.onModelTouched = fn;
    }

    /**
     * 为 input 元素写入一个新值
     * 该方法用于将模型中的新值写入视图或 DOM 属性中，由 forms API 调用
     * @param value
     */
    writeValue(value: any): void {
        this.value = value;
    }

    /**
     * 获取 id
     * @returns {string}
     */
    getId() {
        return this.id;
    }

    /**
     * 获取 required
     * @returns {boolean}
     */
    getRequired() {
        return this.required;
    }

    /**
     * 根据 id 查找
     * @param id
     * @returns {any}
     */
    findById(id: any) {
        let o = this.findOptionById(id);
        if (o) {
            return o.data;
        } else {
            return null;
        }
    }

    /**
     * 根据 id 设置
     * @param id
     */
    selectById(id: any) {
        if (this.dataState) {
            this.selectOption(this.findOptionById(id));
        }
    }

    /**
     * 根据 id 查找下拉列表框的选项
     * @param id
     */
    findOptionById(id: any): KeyComboboxOption {
        return this.dataOptions.find((value) => {
            if (value.id == id) {
                return true;
            }
        });
    }

    /**
     * 更新 input 输入框的值
     * @param text
     */
    updateInputValue(text: string) {
        if (this.textValue != text) {
            this.textValue = text;
        } else {
            this.inputEl.nativeElement.value = text;
        }
    }

    /**
     * 更新 input 输入框的 url 值
     * @param url 
     */
    updateUrlValue(url: string) {
        if (this.urlValue != url) {
            this.urlValue = url;
        } else {
            setTimeout(() => {
                if (this.imgEl) {
                    if (undefined == url) {
                        this.imgEl.nativeElement.src = "";
                    } else {
                        this.imgEl.nativeElement.src = url;
                    }
                } else {
                    this.urlValue = "";
                }
            }, 300);
        }
    }

    /**
     * input 元素获取焦点时，显示下拉列表框菜单
     */
    showOptions() {
        if (this.showMenu) {
            return;
        }
        this.showMenu = true;
        if (this.dataOptions.length > 0) {
            this.options = this.dataOptions;
        }
    }

    /**
     * 隐藏下拉列表框菜单
     */
    hideOptions() {
        this.showMenu = false;
    }

    /**
     * 设置选项（id 和 值）
     * @param option
     */
    selectOption(option: KeyComboboxOption) {
        if (option) {
            this.value = option.id;
            this.updateInputValue(option.text);
            this.updateUrlValue(option.url);
        } else {
            this.value = null;
            this.updateInputValue(null);
            this.updateUrlValue(null);
        }
    }

    /**
     * 设置当前下拉列表框的选项
     */
    selectActiveOption() {
        if (this.activeOption) {
            this.selectOption(this.activeOption);
        } else {
            this.reselect();
        }
    }

    /**
     * 筛选符合条件的下拉列表框的选项
     * @param text
     * @returns {KeyComboboxOption[]}
     */
    updateOptions(text: string) {
        if (!this.isShowMenu()) {
            return;
        }
        if (text && text.length > 0) {
            let regExp = new RegExp(Utils.escapeRegexp(text), "ig");
            this.options = this.dataOptions.filter((option: KeyComboboxOption) => {
                return option.text.match(regExp) && true;
            });
        } else {
            this.options = this.dataOptions;
        }
        return this.options;
    }

    /**
     * 重新设置下拉列表框的选项
     */
    reselect() {
        if (this.value) {
            for (let i = 0, len = this.dataOptions.length; i < len; i++) {
                if (this.dataOptions[i].id == this.value) {
                    this.selectOption(this.dataOptions[i]);
                }
            }
        } else {
            this.selectOption(null);
        }
    }

    /**
     * 点击下拉列表框的选项
     * @param option
     */
    clickOption(option: KeyComboboxOption) {
        this.selectOption(option);
        this.inputEl.nativeElement.focus();
    }

    /**
     * 将值转变成布尔类型
     * @param v
     * @returns {boolean}
     */
    toBoolean(v: any): boolean {
        return Utils.toBoolean(v);
    }

    /**
     * 生成组选项，显示在相对应的选项上面
     * @param options
     * @returns {KeyComboboxOption[]}
     */
    toGroupOption(options: KeyComboboxOption[]) {
        if (this.groupField && options.length > 0) {
            let option: KeyComboboxOption;
            // 取决于上面设置 data ，有分组时，已经对 data 进行排序了
            let currentGroup = "";
            let dummyOptions: KeyComboboxOption[] = [];
            for (let i = 0, len = options.length; i < len; i++) {
                option = options[i];
                if (currentGroup != option.group) {
                    currentGroup = option.group;
                    dummyOptions.push(new KeyComboboxOption({
                        text: option.group,
                        dummy: true
                    }));
                }
                dummyOptions.push(option);
            }
            return dummyOptions;
        } else {
            return options;
        }
    }

    /**
     * 是否显示下拉列表框菜单
     * @returns {any}
     */
    isShowMenu(): boolean {
        return this.showMenu;
    }

    /**
     * 赋值当前下拉列表框选项
     * @param option
     */
    active(option: KeyComboboxOption) {
        this.activeOption = option;
    }

    /**
     * 判断是否为当前下拉列表框选中的选项
     * @param option
     * @returns {any|boolean}
     */
    isActive(option: KeyComboboxOption) {
        return this.activeOption && this.activeOption.id === option.id;
    }

    /**
     * 是否显示删除按钮（必填时、显示下拉列表框时不显示出来）
     * @returns {boolean}
     */
    hasDeleteBtn(): boolean {
        if (!Utils.toBoolean(this.required) && Utils.toBoolean(this.value) && !this.isShowMenu()) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * input 元素每插入一个字符，触发 keypress 事件
     * @param event
     */
    onKeyPress(event: KeyboardEvent) {
        if (this.suppressKeyPressRepeat) {
            return;
        }
        this.move(event);
    }

    /**
     * input 元素,用户按下一个键盘按键时触发 onKeyDown 事件
     * @param event
     */
    onKeyDown(event: KeyboardEvent) {
        switch (event.keyCode) {
            case 9: // tab
            case 13: // enter
            case 27: // escape
            case 38: // up arrow
            case 40: // down arrow
                this.suppressKeyPressRepeat = true;
                break;
            default:
                this.suppressKeyPressRepeat = false;
        }
        this.move(event);
    }

    /**
     * input 元素,键盘按键被松开时触发 onKeyUp 事件
     * @param event
     */
    onKeyUp(event: any) {
        switch (event.keyCode) {
            case 40: // down arrow
            case 39: // right arrow
            case 38: // up arrow
            case 37: // left arrow
            case 36: // home
            case 35: // end
            case 16: // shift
            case 17: // ctrl
            case 18: // alt
            case 9: // tab
                break;
            case 13: // enter
                if (!this.showMenu) {
                    return;
                }
                this.selectActiveOption();
                this.hideOptions();
                event.target.blur();
                break;
            case 27: // escape
                if (!this.showMenu) {
                    return;
                }
                this.reselect();
                this.hideOptions();
                event.target.blur();
                break;
            default:
                this.updateOptions(event.target.value);
                this.activeOption = this.options[0];
        }
        event.stopPropagation();
        event.preventDefault();
    }

    /**
     * 移动到相对应的下拉列表框选项处
     * @param event
     */
    move(event: KeyboardEvent) {
        if (!this.showMenu) {
            return;
        }
        switch (event.keyCode) {
            case 9: // tab
            case 13: // enter
            case 27: // escape
                // 阻止 input 元素发生默认的行为
                event.preventDefault();
                break;
            case 38: // up arrow
                event.preventDefault();
                this.prev();
                break;
            case 40: // down arrow
                event.preventDefault();
                this.next();
                break;
            default:
                break;
        }
        // 终止事件在传播过程的捕获、目标处理或起泡阶段进一步传播
        event.stopPropagation();
    }

    /**
     * 向上移动一个选项，并且将移动后的选项赋值给当前选项
     */
    prev() {
        let index = this.getActiveIndex();
        if (index <= 0) {
            // 取最后一个选项
            this.active(this.options[this.options.length - 1]);
        } else {
            this.active(this.options[index - 1]);
        }
        setTimeout(() => {
            this.scroll();
        }, 50);
    }

    /**
     * 向下移动一个选项，并且将移动后的选项赋值给当前选项
     */
    next() {
        let index = this.getActiveIndex();
        if (index >= this.options.length - 1) {
            // 取第一个选项
            this.active(this.options[0]);
        } else {
            this.active(this.options[index + 1]);
        }
        setTimeout(() => {
            this.scroll();
        }, 50);
    }

    /**
     * 调整当前选项在下拉列表框元素的可视化区域位置
     */
    scroll() {
        // 从下拉列表框元素中查找 css 选择器为（active）的第一个元素（当前选项元素）
        let activeEl = this.menuUl.nativeElement.querySelector(".active");
        if (activeEl) {
            let ul = this.menuUl.nativeElement;
            let top = ul.scrollTop;
            let bottom = ul.scrollTop + ul.offsetHeight - activeEl.offsetHeight;
            let activeTop = activeEl.offsetTop;
            if (top <= activeTop && activeTop <= bottom) {
                // 在下拉列表框元素可视化区域
                return;
            } else if (top > activeTop) {
                // 在下拉列表框元素可视化区域上面，则滚动到下拉列表框元素可视化区域
                ul.scrollTop = activeTop - activeEl.offsetHeight * 2;
            } else if (activeTop > bottom) {
                // 在下拉列表框元素可视化区域下面，则滚动到下拉列表框元素可视化区域
                ul.scrollTop = activeTop - ul.offsetHeight + activeEl.offsetHeight * 2;
            }
        }
    }

    /**
     * 获取当前选项的下标
     * @returns {number}
     */
    getActiveIndex() {
        return this.options.findIndex((option: KeyComboboxOption) => {
            if (this.activeOption && this.activeOption.id == option.id) {
                return true;
            }
        });
    }

    /**
     * 点击 inputDiv 元素之外时，要执行的方法
     * @param event
     */
    clickedOutside(event: any): void {
        if (this.showMenu) {
            this.showMenu = false;
            this.reselect();
        }
    }

    /**
     * 点击刷新，触发刷新回调事件
     */
    refresh() {
        if (this.hasRefreshBtn) {
            this.refreshChange.emit(true);
        }
    }

}
