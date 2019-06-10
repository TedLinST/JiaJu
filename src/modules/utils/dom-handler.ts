/**
 * Created by Z.cr on 2018-1-30.
 */

export class DomHandler {

    /**
     * 添加单个class样式
     * @param element
     * @param className
     */
    public static addClass(element: any, className: string): void {
        if (element.classList) {
            element.classList.add(className);
        } else {
            element.className += " " + className;
        }

    }

    /**
     * 添加多个class样式
     * @param element
     * @param className class之间用空格隔开
     */
    public static addMultipleClasses(element: any, className: string): void {
        if (element.classList) {
            let styles: string[] = className.split(" ");
            for (let value of styles) {
                element.classList.add(value);
            }
        } else {
            let styles: string[] = className.split(" ");
            for (let value of styles) {
                element.className += " " + value;
            }
        }
    }

    /**
     * 移除class样式
     * @param element
     * @param className
     */
    public static removeClass(element: any, className: string): void {
        if (element.classList) {
            element.classList.remove(className);
        } else {
            element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }

    /**
     * 判断是否存在某个class样式
     * @param element
     * @param className 必须精准
     * @returns {boolean}
     */
    public static hasClass(element: any, className: string): boolean {
        if (element.classList) {
            return element.classList.contains(className);
        } else {
            return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
        }
    }

    /**
     * 获取 element 同级的兄弟姐妹
     * @param element
     * @returns {any} 同级的element
     */
    public static siblings(element: any): any {
        return Array.prototype.filter.call(element.parentNode.children, function (child: any) {
            return child !== element;
        });
    }

    /**
     * 查找 element 下级中的所有 selector 对象
     * @param element
     * @param selector
     * @returns 一个集合(NodeList)
     */
    public static find(element: any, selector: string): any[] {
        return element.querySelectorAll(selector);
    }

    /**
     * 查找 element 下级中的一个 selector 对象
     * @param element
     * @param selector
     * @returns 一个对象
     */
    public static findSingle(element: any, selector: string): any {
        return element.querySelector(selector);
    }

    /**
     * 获取 element 在同级中下标位置
     * @param element
     * @returns {number}
     */
    public static index(element: any): number {
        let children = element.parentNode.childNodes;
        let num = 0;
        for (let i = 0; i < children.length; i++) {
            if (children[i] == element) {
                return num;
            }
            if (children[i].nodeType == 1) {
                num++;
            }
        }
        return -1;
    }

    public static relativePosition(element: any, target: any): void {
        let elementDimensions = element.offsetParent ? {
            width: element.outerWidth,
            height: element.outerHeight
        } : this.getHiddenElementDimensions(element);
        let targetHeight = target.offsetHeight;
        let targetWidth = target.offsetWidth;
        let targetOffset = target.getBoundingClientRect();
        let top: number;
        let left: number;

        if ((targetOffset.top + targetHeight + elementDimensions.height) > window.innerHeight) {
            top = -1 * (elementDimensions.height);
        } else {
            top = targetHeight;
        }

        if ((targetOffset.left + elementDimensions.width) > window.innerWidth) {
            left = targetWidth - elementDimensions.width;
        } else {
            left = 0;
        }
        element.style.top = top + "px";
        element.style.left = left + "px";
    }

    public static getHiddenElementOuterHeight(element: any): number {
        element.style.visibility = "hidden";
        element.style.display = "block";
        let elementHeight = element.offsetHeight;
        element.style.display = "none";
        element.style.visibility = "visible";
        return elementHeight;
    }

    public static getHiddenElementOuterWidth(element: any): number {
        element.style.visibility = "hidden";
        element.style.display = "block";
        let elementWidth = element.offsetWidth;
        element.style.display = "none";
        element.style.visibility = "visible";
        return elementWidth;
    }

    public static getHiddenElementDimensions(element: any): any {
        let dimensions: any = {};
        element.style.visibility = "hidden";
        element.style.display = "block";
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = "none";
        element.style.visibility = "visible";

        return dimensions;
    }

    /* public static fadeIn(element: any, duration: number): void {
        element.style.opacity = 0;
        let last = +new Date();
        let tick = function () {
            element.style.opacity = +element.style.opacity + (new Date().getTime() - last) / duration;
            last = +new Date();

            if (+element.style.opacity < 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
        };

        tick();
    } */

    public static fadeOut(element: any, ms: number) {
        let opacity = 1, interval = 50, duration = ms, gap = interval / duration;
        let fading = setInterval(() => {
            opacity = opacity - gap;
            element.style.opacity = opacity;

            if (opacity <= 0) {
                clearInterval(fading);
            }
        }, interval);
    }

    public static getOuterWidth(el: any, margin?: boolean) {
        let width = el.offsetWidth;

        if (margin) {
            let style = getComputedStyle(el);
            width += parseInt(style.paddingLeft) + parseInt(style.paddingRight);
        }

        return width;
    }

    public static getHorizontalMargin(el: any) {
        let style = getComputedStyle(el);
        return parseInt(style.marginLeft) + parseInt(style.marginRight);
    }

    public static innerWidth(el: any) {
        let width = el.offsetWidth;
        let style = getComputedStyle(el);

        width += parseInt(style.paddingLeft) + parseInt(style.paddingRight);
        return width;
    }

    public static width(el: any) {
        let width = el.offsetWidth;
        let style = getComputedStyle(el);

        width -= parseInt(style.paddingLeft) + parseInt(style.paddingRight);
        return width;
    }

    public static getOuterHeight(el: any, margin?: boolean) {
        let height = el.offsetHeight;

        if (margin) {
            let style = getComputedStyle(el);
            height += parseInt(style.marginTop) + parseInt(style.marginBottom);
        }

        return height;
    }

    public static getHeight(el: any): number {
        let height = el.offsetHeight;
        let style = getComputedStyle(el);

        height -= parseInt(style.paddingTop) + parseInt(style.paddingBottom) 
            + parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth);

        return height;
    }


    public static equals(obj1: any, obj2: any): boolean {
        if (obj1 == null || obj2 == null) {
            return false;
        }

        if (obj1 == obj2) {
            return true;
        }

        for (let p in obj1) {
            if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) {
                return false;
            }

            switch (typeof (obj1[p])) {
                case "object":
                    if (!this.equals(obj1[p], obj2[p])) {
                        return false;
                    }
                    break;

                case "function":
                    if (typeof (obj2[p]) == "undefined" || (p != "compare" && obj1[p].toString() != obj2[p].toString())) {
                        return false;
                    }
                    break;

                default:
                    if (obj1[p] != obj2[p]) {
                        return false;
                    }
            }
        }

        for (let p in obj2) {
            if (typeof (obj1[p]) == "undefined") {
                return false;
            }
        }

        return false;
    }

    /**
     * 获取一个对象的基本参数（clientWidth、clientHeight）
     * @param element
     * @returns {any} 一个对象的基本参数
     */
    public static getElementBasicParams(element: any): any {
        if (element != null) {

            // 获取对象可见内容的宽度，不包括滚动条，不包括边框
            let clientWidth: number;
            if (element.clientWidth != null) {
                clientWidth = element.clientWidth;
            }

            // 获取对象可见内容的高度，不包括滚动条，不包括边框
            let clientHeight: number;
            if (element.clientHeight != null) {
                clientHeight = element.clientHeight;
            }

            // 获取对象的border宽度
            let clientLeft: number;
            if (element.clientLeft != null) {
                clientLeft = element.clientLeft;
            }

            // 获取对象的border高度
            let clientTop: number;
            if (element.clientTop != null) {
                clientTop = element.clientTop;
            }

            // 获取对象的宽度(width+padding+border)
            let offsetWidth: number;
            if (element.offsetWidth != null) {
                offsetWidth = element.offsetWidth;
            }

            // 获取对象的高度(height+padding+border)
            let offsetHeight: number;
            if (element.offsetHeight != null) {
                offsetHeight = element.offsetHeight;
            }

            // 获取对象到其上级层左边的距离，不能对其进行赋值.设置对象到其上级层左边的距离请用style.left属性
            let offsetLeft: number;
            if (element.offsetLeft != null) {
                offsetLeft = element.offsetLeft;
            }

            // 获取对象到其上级层顶部边的距离，不能对其进行赋值.设置对象到其上级层顶部边的距离请用style.top属性
            let offsetTop: number;
            if (element.offsetTop != null) {
                offsetTop = element.offsetTop;
            }

            // 获取对象的滚动宽度(也就是对象的实际宽度)
            let scrollWidth: number;
            if (element.scrollWidth != null) {
                scrollWidth = element.scrollWidth;
            }

            // 获取对象的滚动高度(也就是对象的实际高度)
            let scrollHeight: number;
            if (element.scrollHeight != null) {
                scrollHeight = element.scrollHeight;
            }

            // 获取位于对象左边界和对象中目前可见内容的最左端之间的距离(width+padding为一体)(也就是对象左边被隐藏的部分)(谷歌浏览器不支持
            let scrollLeft: number;
            if (element.scrollLeft != null) {
                scrollLeft = element.scrollLeft;
            }

            // 获取位于对象最顶端和对象中可见内容的最顶端之间的距离；(height+padding为一体)(也就是对象顶端被隐藏的部分)(谷歌浏览器不支持
            let scrollTop: number;
            if (element.scrollTop != null) {
                scrollTop = element.scrollTop;
            }

            return {
                clientWidth: clientWidth,
                clientHeight: clientHeight,
                clientLeft: clientLeft,
                clientTop: clientTop,
                offsetWidth: offsetWidth,
                offsetHeight: offsetHeight,
                offsetLeft: offsetLeft,
                offsetTop: offsetTop,
                scrollWidth: scrollWidth,
                scrollHeight: scrollHeight,
                scrollLeft: scrollLeft,
                scrollTop: scrollTop
            };
        } else {
            return null;
        }
    }
}
