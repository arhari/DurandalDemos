/// <reference path="../../../../../Scripts/typings/Q/Q.d.ts" />
/// <reference path="../../../../../Scripts/typings/knockout/knockout.d.ts" />

import ViewModelBase = require('ViewModelBase');

class ContractList extends ViewModelBase {
	initialize(): Q.Promise<any> {
		return this._loadContractList();
	}

	private _loadContractList(): Q.Promise<any> {
		return this.proxy.getContracts()
			.then(result => {
				this.model = result;
				this.debug('Contract list data loaded.');
			})
			.fail(reason => {
				alert(reason);
			});
	}
}

export = ContractList;