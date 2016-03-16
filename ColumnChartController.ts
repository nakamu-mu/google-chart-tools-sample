namespace app.controller {
  "use strict";

  export class ColumnChartController {
    constructor(private columnChartService: app.service.ColumnChartService) {
    }

    public draw(element: Element) {
      new google.visualization.ColumnChart(element).draw(
        this.columnChartService.getData(), this.columnChartService.getOptions());
    }
  }

}
