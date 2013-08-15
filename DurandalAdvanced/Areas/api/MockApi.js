define(["require", "exports"], function(require, exports) {
    /// <reference path="Api.d.ts" />
    var template_Contracts = [
        {
            'Id|1-100': 1,
            'Program': '@LOREM',
            'Product': '@LOREM',
            'CalcDate': '@DATE_YYYY-@DATE_MM-@DATE_DD',
            'Amount': '@NUMBER@NUMBER@NUMBER@NUMBER@NUMBER.@NUMBER@NUMBER'
        }
    ];

    var template_Contract_Flows = [
        {
            'Id|1-100': 1,
            'Name': '@LOREM',
            'CalcDate': '@DATE_YYYY-@DATE_MM-@DATE_DD',
            'Amount': '@NUMBER@NUMBER@NUMBER@NUMBER@NUMBER.@NUMBER@NUMBER',
            'Tax1': '@NUMBER@NUMBER@NUMBER.@NUMBER@NUMBER'
        }
    ];

    var template_Contract_Tasks = [
        {
            'Id|1-100': 1,
            'Name': '@LOREM',
            'TodoItems|3-6': [
                {
                    'Id|1-100': 1,
                    'IsCompleted|0-1': false,
                    'IsMandatory|0-1': false,
                    'Title': '@LOREM',
                    'Description': '@LOREM_IPSUM',
                    'AssignedTo': '@LOREM'
                }
            ]
        }
    ];

    var MockApi = (function () {
        function MockApi() {
            this.contract_dashboard_search = {
                'data|5-10': template_Contracts
            };
            this.contract_summary_get = {
                'data': template_Contracts[0]
            };
            this.contract_summary_getFlows = {
                'data|10-15': template_Contract_Flows
            };
            this.tasks_get = {
                'data|1-3': template_Contract_Tasks
            };
        }
        return MockApi;
    })();

    
    return MockApi;
});
//# sourceMappingURL=MockApi.js.map
