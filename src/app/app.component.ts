import { AfterViewInit, Component } from '@angular/core';
import * as $ from 'jquery';
import ScrollModel from './common/scroll.model';
import ElementStateModel from './common/element-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  elements: { [key: string]: ElementStateModel; } = {};
  contentMargin = 40;
  scrollJudgeOffset = 100;
  scrollAnimateDuration = 300;

  ngAfterViewInit (): void {
    setTimeout(() => {
      this.elements = {};
      const body = $('body');
      const elementList = body.find('div[class=\'content\']');
      const offsetTop = body.offset().top;
      let state;
      let scrollModel;
      for (let i = 0; i < elementList.length; i++) {
        const e = elementList[i];
        if (!!e.id) {
          scrollModel = ScrollModel.buildFromElement($(`#${e.id}`));
          const active = this.isScrollTo(scrollModel);
          state = new ElementStateModel(active, false);
          this.elements[e.id] = state;
        }
      }
    });
  }

  onScrolled (scrollModel: ScrollModel, elementId: string) {
    if (this.isScrollTo(scrollModel)) {
      this.setActive(elementId);
    }
  }

  private setActive (elementId: string) {
    if (!this.elements[elementId]) {
      this.elements[elementId] = new ElementStateModel(true, false);
    } else {
      this.elements[elementId].active = true;
    }
    for (const id in this.elements) {
      if (id !== elementId) {
        this.elements[id].active = false;
      }
    }
  }

  private isScrollTo (scrollModel: ScrollModel) {
    const realOffsetTop = scrollModel.offsetTop - this.contentMargin;
    return scrollModel.scrollTop <= realOffsetTop &&
      scrollModel.scrollTop >= (realOffsetTop - this.scrollJudgeOffset);
  }

  scrollToComponent (id: string) {
    this.setManualScrollState(true);
    this.setActive(id);
    setTimeout(() => {
      this.setManualScrollState(false);
    }, this.scrollAnimateDuration);
    $('body').animate({
      scrollTop: $(`#${id}`).offset().top - this.contentMargin
    }, {duration: this.scrollAnimateDuration, easing: 'swing'});
  }

  isActive (id: string) {
    return !!this.elements[id] && this.elements[id].active;
  }

  private setManualScrollState (isManual: boolean) {
    for (const id in this.elements) {
      if (this.elements.hasOwnProperty(id)) {
        this.elements[id].manualScrolling = isManual;
      }
    }
  }
}
