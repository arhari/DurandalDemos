/// <reference path="Api.d.ts" />
define(["require", "exports"], function(require, exports) {
    var WebApi = (function () {
        function WebApi() {
            this.contract_dashboard_search = 'Contract/Dashboard/GetContracts';
            this.contract_summary_get = 'Contract/Summary/GetContract';
            this.contract_summary_getFlows = '';
            this.tasks_get = '';
        }
        return WebApi;
    })();

    
    return WebApi;
});
//# sourceMappingURL=WebApi.js.map
