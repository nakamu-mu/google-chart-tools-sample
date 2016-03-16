var app;
(function (app) {
    var service;
    (function (service) {
        "use strict";
        var ColumnChartService = (function () {
            function ColumnChartService() {
                this.options = {
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
                this.createData();
            }
            ColumnChartService.prototype.getOptions = function () {
                return this.options;
            };
            ColumnChartService.prototype.getData = function () {
                return this.data;
            };
            ColumnChartService.prototype.createData = function () {
                this.data = new google.visualization.DataTable();
                this.data.addColumn("timeofday", "Time of Day");
                this.data.addColumn("number", "Motivation Level");
                this.data.addColumn("number", "Energy Level");
                this.data.addRows([
                    [{ v: [8, 0, 0], f: "8 am" }, 1, .25],
                    [{ v: [9, 0, 0], f: "9 am" }, 2, .5],
                    [{ v: [10, 0, 0], f: "10 am" }, 3, 1],
                    [{ v: [11, 0, 0], f: "11 am" }, 4, 2.25],
                    [{ v: [12, 0, 0], f: "12 pm" }, 5, 2.25],
                    [{ v: [13, 0, 0], f: "1 pm" }, 6, 3],
                    [{ v: [14, 0, 0], f: "2 pm" }, 7, 4],
                    [{ v: [15, 0, 0], f: "3 pm" }, 8, 5.25],
                    [{ v: [16, 0, 0], f: "4 pm" }, 9, 7.5],
                    [{ v: [17, 0, 0], f: "5 pm" }, 10, 10],
                ]);
            };
            return ColumnChartService;
        })();
        service.ColumnChartService = ColumnChartService;
    })(service = app.service || (app.service = {}));
})(app || (app = {}));
var app;
(function (app) {
    var directive;
    (function (directive_1) {
        "use strict";
        var ColumnChartDirective = (function () {
            function ColumnChartDirective() {
                this.init();
            }
            ColumnChartDirective.Factory = function () {
                var directive = function () {
                    return new ColumnChartDirective();
                };
                directive.$inject = [];
                return directive;
            };
            ColumnChartDirective.prototype.init = function () {
                this.restrict = "A";
                this.replace = false;
                this.scope = {};
                this.controller = ["ColumnChartService", app.controller.ColumnChartController];
                this.controllerAs = "columnChartController";
                this.link = function (scope, element, attrs, ctrl) {
                    ctrl.draw(element[0]);
                };
            };
            return ColumnChartDirective;
        })();
        directive_1.ColumnChartDirective = ColumnChartDirective;
    })(directive = app.directive || (app.directive = {}));
})(app || (app = {}));
var app;
(function (app) {
    var controller;
    (function (controller) {
        "use strict";
        var ColumnChartController = (function () {
            function ColumnChartController(columnChartService) {
                this.columnChartService = columnChartService;
            }
            ColumnChartController.prototype.draw = function (element) {
                new google.visualization.ColumnChart(element).draw(this.columnChartService.getData(), this.columnChartService.getOptions());
            };
            return ColumnChartController;
        })();
        controller.ColumnChartController = ColumnChartController;
    })(controller = app.controller || (app.controller = {}));
})(app || (app = {}));
"use strict";
google.load("visualization", "1", {
    packages: ["corechart"]
});
angular.module("app", [])
    .service("ColumnChartService", app.service.ColumnChartService)
    .directive("columnChart", app.directive.ColumnChartDirective.Factory());
