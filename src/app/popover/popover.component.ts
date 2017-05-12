import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import ScrollModel from '../common/scroll.model';
import * as $ from 'jquery';
import ElementStateModel from '../common/element-state.model';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.less']
})
export class PopoverComponent implements OnInit {
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
      const element = $('#popoverContent');
      const scroll = ScrollModel.buildFromElement(element);
      this.scrolls.emit(scroll);
    }
  }
}
