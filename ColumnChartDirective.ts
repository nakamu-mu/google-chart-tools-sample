namespace app.directive {
  "use strict";

  export class ColumnChartDirective implements ng.IDirective {

    public restrict: string;
    public replace: boolean;
    public scope: any;
    public controller: any;
    public controllerAs: string;
    public link: (
      scope: ng.IScope,
      element: ng.IAugmentedJQuery,
      attrs: ng.IAttributes,
      ctrl: app.controller.ColumnChartController) => void;

    constructor() {
      this.init();
    }

    public static Factory(): ng.IDirectiveFactory {
      let directive = () => {
        return new ColumnChartDirective();
      };
      directive.$inject = [];
      return directive;
    }

    private init() {
      this.restrict = "A";
      this.replace = false;
      this.scope = {
      };
      this.controller = ["ColumnChartService", app.controller.ColumnChartController];
      this.controllerAs = "columnChartController";
      this.link = (
        scope: ng.IScope,
        element: ng.IAugmentedJQuery,
        attrs: ng.IAttributes,
        ctrl: app.controller.ColumnChartController) => {
          ctrl.draw(element[0]);
      };
    }
  }
}
