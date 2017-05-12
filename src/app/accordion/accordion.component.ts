import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import ScrollModel from '../common/scroll.model';
import * as $ from 'jquery';
import ElementStateModel from '../common/element-state.model';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.less']
})
export class AccordionComponent implements OnInit {
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
      const element = $('#accordionContent');
      const scroll = ScrollModel.buildFromElement(element);
      this.scrolls.emit(scroll);
    }
  }
}
