import {
  Component, Output, EventEmitter,
  Input, HostBinding, ContentChild, TemplateRef,
  ViewChild, ElementRef, IterableDiffers
} from '@angular/core';
import { KeyTreeNode } from './tree-node';


@Component({
  selector: 'key-tree',
  templateUrl: './tree.component.html'
})
export class KeyTreeComponent {

  // 行选择发生改变，触发该事件
  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();

  // 行点击，触发该事件
  @Output() rowClick: EventEmitter<any> = new EventEmitter<any>();

  // 行选中，触发该事件
  @Output() rowSelect: EventEmitter<any> = new EventEmitter<any>();

  // 数据源
  @Input() data: any[] = [];

  // id标识字段
  @Input() idField: string = "id";

  // 值显示字段
  @Input() displayField: string = "value";

  // 链接字段
  @Input() hrefField: string;

  // 父级树组件
  @Input() parentTree: KeyTreeComponent;

  // 只能选中子级的行，默认为 false
  @Input() selectLeaf: boolean = false;

  // @Input() header: string;

  // 点击行则展开子级，默认为false
  @Input() autoExpended: boolean = false;

  // key-tree 控件添加 tree-position 样式，默认为 true
  @HostBinding("class.tree-position")
  @Input() position: boolean = true;

  // 获取该组件下 的 TemplateRef 组件
  @ContentChild(TemplateRef)
  tpl: TemplateRef<any>;

  // treeUI 的ElementRef对象
  @ViewChild("treeUI")
  treeUI: ElementRef;

  // 变化差异对象
  differ: any;

  // 当前树组件
  tree: KeyTreeComponent = this;

  /**
   * 当前选中节点
   */
  _selection: any;
  set selection(selection: any) {
    if (this.hasParentTree()) {
      this.parentTree.selection = selection;
    } else {
      this._selection = selection;
    }
  }

  get selection() {
    if (this.hasParentTree()) {
      return this.parentTree.selection;
    } else {
      return this._selection;
    }
  }

  /**
   * 获取当前组件的顶级ck-tree控件下的直接TemplateRef组件
   * @returns {TemplateRef<any>}
   */
  get displayTpl(): TemplateRef<any> {
    if (this.hasParentTree()) {
      return this.parentTree.displayTpl;
    } else {
      return this.tpl;
    }
  }

  constructor(private differs: IterableDiffers) {
    /**
     * 说明
     * IterableDiffers:用于跟踪可迭代对象变化差异
     *
     */
    this.differ = differs.find([]).create(null);
    // handleRowClick声明绑定this
    this.handleRowClick = this.handleRowClick.bind(this);
  }

  /**
   * 判断是否存在父级节点
   * @returns {boolean}
   */
  hasParentTree(): boolean {
    return !!this.parentTree;
  }

  /**
   * 设置节点为选中，并且使节点能够在界面可视化区域上显示
   * @param node
   */
  selectionAndScroll(node: KeyTreeNode) {
    if (node == null) {
      this.selection = null;
      return;
    }
    this.selection = node;
    node.show();
    this.scroll(node);
  }

  /**
   * 行点击事件
   * @param event
   * @param node
   */
  handleRowClick(event: any, node: KeyTreeNode) {
    this.rowClick.emit({ event: event, component: this, value: node });
    if (this.hasParentTree()) {
      this.parentTree.handleRowClick(event, node);
    } else {
      if (!node.leaf && this.autoExpended) {
        node.toggle();
        // 当节点行点击能够自动展开子级节点，并且selectLeaf为true时，则不选中当前点击的行节点
        if (this.selectLeaf) {
          return;
        }
      }
      if (this.selection !== node) {
        this.selection = node;
        this.selectionChange.emit({ event: event, component: this, value: node });
        this.rowSelect.emit({ event: event, component: this, value: node });
      }
    }
  }

  /**
   * 行节点是否被选中
   * @param node
   * @returns {boolean}
   */
  isSelected(node: KeyTreeNode) {
    if (this.selection) {
      return this.selection.nodeId == node.nodeId;
    } else {
      return false;
    }
  }

  /**
   * 获取节点中显示字段的值
   * @param node
   * @returns {any}
   */
  getDisplayValue(node: KeyTreeNode) {
    if (this.displayField) {
      return node.data[this.displayField];
    } else {
      return "";
    }
  }

  /**
   * 获取节点中的链接值
   * @param node
   * @returns {any}
   */
  getHrefValue(node: KeyTreeNode) {
    if (this.hrefField) {
      let href = node.data[this.hrefField] || "";
      return "#" + href;
    } else {
      return "#";
    }
  }

  /**
   * 滚动treeUI，使节点能够在界面可视化区域上显示
   * @param node
   */
  scroll(node: KeyTreeNode) {
    let activeEl = this.treeUI.nativeElement.querySelector("#" + node.nodeId);
    if (activeEl) {
      let nodeEl = activeEl.parentElement;
      let div = this.treeUI.nativeElement.parentElement;
      let top = div.scrollTop;
      let bottom = div.scrollTop + div.offsetHeight - nodeEl.offsetHeight;
      let activeTop = nodeEl.offsetTop;
      if (top <= activeTop && activeTop <= bottom) {
        return;
      } else if (top > activeTop) {
        div.scrollTop = activeTop - nodeEl.offsetHeight * 2;
      } else if (activeTop > bottom) {
        div.scrollTop = activeTop - div.offsetHeight + nodeEl.offsetHeight * 2;
      }
    }
  }
}
