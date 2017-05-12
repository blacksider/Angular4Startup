import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import * as $ from 'jquery';
import ScrollModel from '../common/scroll.model';
import ElementStateModel from '../common/element-state.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnInit {
  @Input()
  state: ElementStateModel;
  @Output()
  scrolls: EventEmitter<ScrollModel> = new EventEmitter<ScrollModel>();

  constructor () {
  }

  ngOnInit () {
  }

  @HostListener('window:scroll', [])
  onWindowScroll () {
    if (!!this.state && !this.state.manualScrolling) {
      const element = $('#alertContent');
      const scroll = ScrollModel.buildFromElement(element);
      this.scrolls.emit(scroll);
    }
  }
}
