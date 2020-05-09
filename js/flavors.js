(function(){
"use strict";
angular.module('flavorSelect', []).controller('ctrl', function() {
	this.setTab = function(setTab) {
		this.tab = setTab;
	};
	
	this.isSelected = function(checkTab) {
		return this.tab === checkTab;
	};
	
	this.notSelected = function(checkTab) {
		return !(this.isSelected(checkTab));
	};
	
	this.getTab = function() {
		return this.tab;
	};
	
	this.setIsDefault = function() {
		this.isDefault = true;
	};
	
	this.getIsDefault = function() {
		return this.isDefault;
	};
});
})();