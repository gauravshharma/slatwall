/// <reference path='../../../typings/hibachiTypescript.d.ts' />
/// <reference path='../../../typings/tsd.d.ts' />


class SWTypeaheadInputFieldController {
    
    public fieldName; 
    public entityName;
    public typeaheadCollectionConfig; 
    public modelValue; 
    public displayList = []; 
    public filters = [];
    public propertiesToLoad; 
    public placeholderRbKey;
    public propertyToSave;
    
    // @ngInject
	constructor(private $scope, 
                private $q, 
                private $transclude, 
                private $hibachi, 
                private $timeout:ng.ITimeoutService, 
                private utilityService, 
                private collectionConfigService
    ){
        
        if(angular.isUndefined(this.entityName)){
            throw("The typeahead input field directive requires an entity name.");
        }
        if(angular.isUndefined(this.propertyToSave)){
            throw("You must select a property to save for the input field directive")
        }
               
        this.typeaheadCollectionConfig = collectionConfigService.newCollectionConfig(this.entityName); 
        
        //populate the display list
        this.$transclude($scope,()=>{});
        
        if(this.displayList.length){
            this.typeaheadCollectionConfig.addDisplayProperty(this.utilityService.arrayToList(this.displayList));
        }
        
        if(angular.isDefined(this.propertiesToLoad)){
            this.typeaheadCollectionConfig.addDisplayProperty(this.propertiesToLoad);
        }
        
        angular.forEach(this.filters, (filter)=>{
                this.typeaheadCollectionConfig.addFilter(filter.propertyIdentifier, filter.comparisonValue, filter.comparisonOperator, filter.logicalOperator, filter.hidden);
        }); 
    }
    
    public addFunction = (value:any) => {
        this.modelValue = value[this.propertyToSave]; 
    }

}

class SWTypeaheadInputField implements ng.IDirective{

	public templateUrl;
    public transclude=true; 
	public restrict = "EA";
	public scope = {};
    public priority = 100;

	public bindToController = {
        fieldName:"@",
        entityName:"@",
        propertiesToLoad:"@?",
        placeholderRbKey:"@?",
        propertyToSave:"@"
	};
	public controller=SWTypeaheadInputFieldController;
	public controllerAs="swTypeaheadInputField";

    // @ngInject
	constructor(private corePartialsPath,hibachiPathBuilder){
		this.templateUrl = hibachiPathBuilder.buildPartialsPath(corePartialsPath) + "typeaheadinputfield.html";
	}

	public static Factory(){
		var directive:ng.IDirectiveFactory = (
			corePartialsPath
            ,hibachiPathBuilder

		)=> new SWTypeaheadInputField(
            corePartialsPath
            ,hibachiPathBuilder
		);
		directive.$inject = ["corePartialsPath",'hibachiPathBuilder'];
		return directive;
	}
}
export{
	SWTypeaheadInputField,
	SWTypeaheadInputFieldController
}
