define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Diagram = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Diagram = exports.Diagram = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'diagram'), _dec2 = (0, _decorators.generateBindables)('kendoDiagram'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Diagram(element, widgetBase) {
      _classCallCheck(this, Diagram);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoDiagram').useElement(this.element).linkViewModel(this);
    }

    Diagram.prototype.bind = function bind(ctx, overrideCtx) {
      this.widgetBase.useParentCtx(overrideCtx);
    };

    Diagram.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    Diagram.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.recreate();
    };

    Diagram.prototype.destroy = function destroy() {
      this.widgetBase.destroy(this.kWidget);
    };

    Diagram.prototype.detached = function detached() {
      this.destroy();
    };

    return Diagram;
  }()) || _class) || _class) || _class);
});