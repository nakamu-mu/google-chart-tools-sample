/// <reference path="./typings/angularjs/angular.d.ts" />
/// <reference path="./typings/google.visualization/google.visualization.d.ts"/>
/// <reference path="./ColumnChartService.ts" />
/// <reference path="./ColumnChartDirective.ts" />
/// <reference path="./ColumnChartController.ts" />

"use strict";

google.load("visualization", "1", {
  packages: ["corechart"]
});

angular.module("app", [])
.service("ColumnChartService", app.service.ColumnChartService)
.directive("columnChart", app.directive.ColumnChartDirective.Factory());
