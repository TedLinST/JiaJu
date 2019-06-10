/*
 * @Author: ZengChuangRong 
 * @Date: 2018-09-06 15:45:46 
 * @Last Modified by: ZengChuangRong
 * @Last Modified time: 2018-09-27 16:34:16
 */

import { IdCounter } from "../../utils/id-counter";

export class KeyTreeNode {

  // 节点ID
  public nodeId: string = IdCounter.newId("ck-treenode");

  // 父级节点
  public parent: KeyTreeNode;

  // 子级节点数组 （待确定，是否只有直接子级节点）
  public children: KeyTreeNode[] = [];

  /**
   * 节点展开
   */
  public _expanded: boolean = true;
  set expanded(expanded: boolean) {
    this._expanded = expanded;
  }

  get expanded() {
    return this._expanded;
  }

  get level(): number {
    if (this.parent) {
      return this.parent.level + 1;
    } else {
      return 1;
    }
  }

  /**
   * 判断节点是否有子级
   * 有则返回 false
   * 没有则返回 true
   * @returns {boolean}
   */
  get leaf(): boolean {
    if (this.children.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  constructor(public data: any, public id: any, public pid: any) {
  }

  /**
   *
   * @returns {boolean}
   */
  public isHidden(): boolean {
    if (this.parent) {
      if (this.parent.expanded) {
        return this.parent.isHidden();
      } else {
        return true;
      }
    }
  }

  /**
   * 切换节点的展开与收拢
   */
  public toggle() {
    this.expanded = !this.expanded;
  }

  /**
   * 根据 key 关键字获取节点以及所有父级节点的数据
   * @param key
   * @returns {string}
   */
  public getFullValueByKey(key: string): string {
    if (this.parent) {
      return this.parent.getFullValueByKey(key) + " - [" + this.data[key] + "]";
    } else {
      return "[" + this.data[key] + "]";
    }
  }

  /**
   * 展开节点，并且其所有父级节点也同时展开
   */
  public show() {
    if (this.parent) {
      this.parent.show();
    }
    this.expanded = true;
  }

}
