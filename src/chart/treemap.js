import {inject} from 'aurelia-dependency-injection';
import {customElement} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {PDF} from '../pdf/pdf'; //eslint-disable-line no-unused-vars

@customElement(`${constants.elementPrefix}treemap`)
@generateBindables('kendoTreeMap')
@inject(Element, WidgetBase)
export class TreeMap {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoTreeMap')
                        .useElement(this.element)
                        .linkViewModel(this);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}
