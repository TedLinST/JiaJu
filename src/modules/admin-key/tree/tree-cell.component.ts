import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { KeyTreeComponent } from './tree.component';

@Component({
  selector: 'key-tree-cell',
  templateUrl: './tree-cell.component.html'
})
export class KeyTreeCellComponent implements OnChanges {

  // ck-tree 组件
  @Input() tree: KeyTreeComponent;

  // 节点数据
  @Input() row: any;

  // 节点下标
  @Input() index: number;

  // 显示字段值
  @Input() value: any;

  context: Object;

  // 当被绑定输入属性的值发生变化时调用
  ngOnChanges(changes: SimpleChanges) {
    if (this.tree.displayTpl) {
      this.context = {
        "\$implicit": this.value,
        "row": this.row,
        "index": this.index
      };
    }
  }

}
