'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.autocomplete.min', 'kendo.virtuallist.min'], function (_export, _context) {
  "use strict";

  var inject, customElement, children, ViewResources, WidgetBase, generateBindables, constants, delayed, _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, AutoComplete;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      children = _aureliaTemplating.children;
      ViewResources = _aureliaTemplating.ViewResources;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
      delayed = _commonDecorators.delayed;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_kendoAutocompleteMin) {}, function (_kendoVirtuallistMin) {}],
    execute: function () {
      _export('AutoComplete', AutoComplete = (_dec = customElement(constants.elementPrefix + 'autocomplete'), _dec2 = generateBindables('kendoAutoComplete'), _dec3 = inject(Element, WidgetBase, ViewResources), _dec4 = children(constants.elementPrefix + 'template'), _dec5 = delayed(), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
        function AutoComplete(element, widgetBase, viewResources) {
          _classCallCheck(this, AutoComplete);

          _initDefineProp(this, 'templates', _descriptor, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoAutoComplete').linkViewModel(this).useViewResources(viewResources).useValueBinding().bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
        }

        AutoComplete.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        AutoComplete.prototype.attached = function attached() {
          var inputs = this.element.querySelectorAll('input');
          if (inputs.length > 0) {
            this.target = inputs[0];
          } else {
            this.target = document.createElement('input');
            this.element.appendChild(this.target);
          }

          if (!this.kNoInit) {
            this.recreate();
          }
        };

        AutoComplete.prototype.recreate = function recreate() {
          this.widgetBase.useTemplates(this, 'kendoAutoComplete', this.templates);

          this.kWidget = this.widgetBase.createWidget({
            rootElement: this.element,
            element: this.target,
            parentCtx: this.$parent
          });
        };

        AutoComplete.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        AutoComplete.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return AutoComplete;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'templates', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      }), _applyDecoratedDescriptor(_class2.prototype, 'attached', [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'attached'), _class2.prototype)), _class2)) || _class) || _class) || _class));

      _export('AutoComplete', AutoComplete);
    }
  };
});
//# sourceMappingURL=../dist/dev/autocomplete/autocomplete.js.map
