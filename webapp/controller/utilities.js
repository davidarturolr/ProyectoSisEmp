sap.ui.define([
	"./utilities"
], function() {
	"use strict";

	// class providing static utility methods to retrieve entity default values.

	return {
		getDefaultValuesForPage4: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"Rating": 0,
				"Reviewer": "",
				"ReviewDate": "Jun 13, 2024",
				"___FK_4d9b4038bbbaa7261af341b7_00025": "",
				"___FK_4d9b4038bbbaa7261af341b7_00027": "",
				"Price": 0,
				"Unit": "",
				"PriceUnit": "COP",
				"___FK_c921bd878f3b6f651b1112ee_00005": ""
			};
		},
		getDefaultValuesForPage3: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"Name": null,
				"Category": "",
				"Currency": "COP",
				"StockLevel": "",
				"StockLevelCC": "",
				"PriceRange": "",
				"___FK_4d9b4038bbbaa7261af341b7_00023": "",
				"___FK_d94837b6c46bcf681b10ecb2_00007": ""
			};
		}
	};
});
