import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import ScrollModel from '../common/scroll.model';
import * as $ from 'jquery';
import ElementStateModel from '../common/element-state.model';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.less']
})
export class CollapseComponent implements OnInit {
  @Input()
  state: ElementStateModel;
  @Output()
  scrolls: EventEmitter<ScrollModel> = new EventEmitter<ScrollModel>();
  isCollapsed = false;

  constructor () {
  }

  ngOnInit () {
  }

  @HostListener('window:scroll', [])
  onWindowScroll () {
    if (!!this.state && !this.state.manualScrolling) {
      const element = $('#collapseContent');
      const scroll = ScrollModel.buildFromElement(element);
      this.scrolls.emit(scroll);
    }
  }
}
