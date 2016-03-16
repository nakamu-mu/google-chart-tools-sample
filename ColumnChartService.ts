namespace app.service {
  "use strict";

  export class ColumnChartService {

    private data: google.visualization.DataTable;

    private options: any = {
      title: "Motivation and Energy Level Throughout the Day",
      focusTarget: "category",
      hAxis: {
        title: "Time of Day",
        format: "h:mm a",
        viewWindow: {
          min: [7, 30, 0],
          max: [17, 30, 0]
        },
        textStyle: {
          fontSize: 14,
          color: "#053061",
          bold: true,
          italic: false
        },
        titleTextStyle: {
          fontSize: 18,
          color: "#053061",
          bold: true,
          italic: false
        }
      },
      vAxis: {
        title: "Rating (scale of 1-10)",
        textStyle: {
          fontSize: 18,
          color: "#67001f",
          bold: false,
          italic: false
        },
        titleTextStyle: {
          fontSize: 18,
          color: "#67001f",
          bold: true,
          italic: false
        }
      }
    };

    constructor() {
      this.createData();
    }

    public getOptions(): any {
      return this.options;
    }

    public getData(): any {
      return this.data;
    }

    private createData() {
      this.data = new google.visualization.DataTable();
      this.data.addColumn("timeofday", "Time of Day");
      this.data.addColumn("number", "Motivation Level");
      this.data.addColumn("number", "Energy Level");

      this.data.addRows([
        [{v: [8, 0, 0], f: "8 am"}, 1, .25],
        [{v: [9, 0, 0], f: "9 am"}, 2, .5],
        [{v: [10, 0, 0], f: "10 am"}, 3, 1],
        [{v: [11, 0, 0], f: "11 am"}, 4, 2.25],
        [{v: [12, 0, 0], f: "12 pm"}, 5, 2.25],
        [{v: [13, 0, 0], f: "1 pm"}, 6, 3],
        [{v: [14, 0, 0], f: "2 pm"}, 7, 4],
        [{v: [15, 0, 0], f: "3 pm"}, 8, 5.25],
        [{v: [16, 0, 0], f: "4 pm"}, 9, 7.5],
        [{v: [17, 0, 0], f: "5 pm"}, 10, 10],
      ]);
    }
  }
}
