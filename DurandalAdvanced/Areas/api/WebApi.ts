/// <reference path="Api.d.ts" />

class WebApi implements IApi {
	contract_dashboard_search = 'Contract/Dashboard/GetContracts';
	contract_summary_get = 'Contract/Summary/GetContract';
	contract_summary_getFlows = '';
	tasks_get = '';
}

export = WebApi;