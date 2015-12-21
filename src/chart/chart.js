import {customElement, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.dataviz.chart.min';
import 'kendo-ui/js/kendo.dataviz.chart.polar.min';
import 'kendo-ui/js/kendo.dataviz.chart.funnel.min';

@customElement('au-kendo-chart')
@inject(Element)
export class Chart extends WidgetBase {

  @bindable options = {};

  @bindable autoBind = true;
  @bindable axisDefaults;
  @bindable categoryAxis;
  @bindable chartArea;
  @bindable dataSource;
  @bindable legend;
  @bindable panes;
  @bindable pannable = false;
  @bindable pdf;
  @bindable plotArea;
  @bindable renderAs;
  @bindable series;
  @bindable seriesColors;
  @bindable seriesDefaults;
  @bindable theme;
  @bindable title;
  @bindable tooltip;
  @bindable transitions = true;
  @bindable valueAxis;
  @bindable width = '100%';
  @bindable height = 400;
  @bindable xAxis;
  @bindable yAxis;
  @bindable zoomable = false;

  constructor(element) {
    super('kendoChart', element);
  }

  attached() {
    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  getOptions() {
    return {
      autoBind: this.autoBind,
      axisDefaults: this.axisDefaults,
      categoryAxis: this.categoryAxis,
      chartArea: this.chartArea,
      dataSource: this.dataSource,
      height: this.height,
      legend: this.legend,
      panes: this.panes,
      pannable: this.pannable,
      pdf: this.pdf,
      plotArea: this.plotArea,
      renderAs: this.renderAs,
      series: this.series,
      seriesColors: this.seriesColors,
      seriesDefaults: this.seriesDefaults,
      theme: this.theme,
      title: this.title,
      tooltip: this.tooltip,
      transitions: this.transitions,
      valueAxis: this.valueAxis,
      width: this.width,
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      zoomable: this.zoomable
    };
  }

  exportImage(options) {
    if (this.widget) {
      return this.widget.exportImage(options);
    }
  }

  exportPDF(options) {
    if (this.widget) {
      return this.widget.exportPDF(options);
    }
  }

  exportSVG(options) {
    if (this.widget) {
      return this.widget.exportSVG(options);
    }
  }

  getAxis(name) {
    if (this.widget) {
      return this.widget.getAxis(name);
    }
  }

  redraw() {
    if (this.widget) {
      return this.widget.redraw();
    }
  }

  refresh() {
    if (this.widget) {
      return this.widget.refresh();
    }
  }

  resize() {
    if (this.widget) {
      return this.widget.resize();
    }
  }

  saveAsPDF() {
    if (this.widget) {
      return this.widget.saveAsPDF();
    }
  }

  setDataSource(dataSource) {
    if (this.widget) {
      return this.widget.setDataSource(dataSource);
    }
  }

  detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  }
}
