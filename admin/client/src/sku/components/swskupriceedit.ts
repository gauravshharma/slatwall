/// <reference path='../../../typings/slatwallTypescript.d.ts' />
/// <reference path='../../../typings/tsd.d.ts' />
class SWSkuPriceEditController{
    
    public skuId:string;
    public skuPriceId:string;
    public minQuantity:string;
    public maxQuantity:string;
    public skuCode:string;
    public price:string; 
    public currencyCode:string;
    public bundledSkuSkuId:string; 
    public bundledSkuCurrencyCode:string;
    public bundledSkuPrice:string;
    public formName:string; 
   
    public currencyFilter:any; 

    public sku:any; 
    public skuPrice:any;
    
    public collectionConfig:any; 

    public showSwitchTabContextButton:boolean; 
    public switchTabContextEventName:string; 
    public tabToSwitchTo:string; 
    
    //@ngInject
    constructor(
        private observerService,
        private utilityService, 
        private $hibachi,
        private $filter
    ){
        this.currencyFilter = this.$filter('swcurrency');
        this.formName = this.utilityService.createID(32);
        if(angular.isUndefined(this.skuId) && angular.isDefined(this.bundledSkuSkuId)){
            this.skuId = this.bundledSkuSkuId;
        }
        if(angular.isUndefined(this.currencyCode) && angular.isDefined(this.bundledSkuCurrencyCode)){
            this.currencyCode = this.bundledSkuCurrencyCode;
        }
        if(angular.isUndefined(this.price) && angular.isDefined(this.bundledSkuPrice)){
            this.price = this.bundledSkuPrice;
        }
        if(angular.isUndefined(this.skuId) 
            && angular.isUndefined(this.sku)
            && angular.isUndefined(this.skuPriceId)
            && angular.isUndefined(this.skuPrice)
        ){
            throw("You must provide either a skuID or a skuPriceID or a sku or a skuPrice to SWSkuPriceSingleEditController");
        } else {
            
            if(angular.isDefined(this.skuId) && angular.isUndefined(this.sku)){
                var skuData = {
                    skuID : this.skuId,
                    skuCode : this.skuCode,
                    currencyCode : this.currencyCode,
                    price : this.currencyFilter(this.price, this.currencyCode, 2, false)
                }
                this.sku = this.$hibachi.populateEntity("Sku", skuData); 
            }

            if(angular.isDefined(this.skuPriceId) && angular.isUndefined(this.skuPrice)){
                var skuPriceData = { 
                    skuPriceId:this.skuPriceId,
                    minQuantity:this.minQuantity,
                    maxQuantity:this.maxQuantity,
                    price: this.currencyFilter(this.price, this.currencyCode, 2, false)
                }
                this.skuPrice = this.$hibachi.populateEntity("SkuPrice", skuPriceData); 
            }
        }
    }    

    public switchTabContext = () => {
        this.observerService.notify(this.switchTabContextEventName, this.tabToSwitchTo);
    }
}

class SWSkuPriceEdit implements ng.IDirective{
    public templateUrl;
    public restrict = 'EA';
    public scope = {}; 
    public bindToController = {
        skuId:"@",
        skuPriceId:"@",
        skuCode:"@",
        price:"@",
        bundledSkuSkuId:"@",
        bundledSkuCurrencyCode:"@", 
        bundledSkuPrice:"@",       
        currencyCode:"@",
        sku:"=?",
        skuPrice:"=?"
    };
    public controller = SWSkuPriceEditController;
    public controllerAs="swSkuPriceEdit";
   
   
    public static Factory(){
        var directive = (
            scopeService,
            skuPartialsPath,
			slatwallPathBuilder
        )=> new SWSkuPriceEdit(
            scopeService,
            skuPartialsPath,
			slatwallPathBuilder
        );
        directive.$inject = [
            'scopeService',
            'skuPartialsPath',
			'slatwallPathBuilder'
        ];
        return directive;
    }
    constructor(
        private scopeService, 
		skuPartialsPath,
	    slatwallPathBuilder
    ){
        this.templateUrl = slatwallPathBuilder.buildPartialsPath(skuPartialsPath)+"skupriceedit.html";
    }

    public link:ng.IDirectiveLinkFn = (scope, element: ng.IAugmentedJQuery, attrs:ng.IAttributes, formController:any, transcludeFn:ng.ITranscludeFunction) =>{
        var tabGroupScope = this.scopeService.locateParentScope(scope,"swTabGroup");
        var tabContentScope = this.scopeService.locateParentScope(scope,"swTabContent"); 
        if(angular.isDefined(tabContentScope)){
            console.log("tab content scope",tabContentScope);
            if(angular.isDefined(tabGroupScope) && tabContentScope["swTabContent"].name == "Basic"){
                scope.swSkuPriceEdit.switchTabContextEventName = tabGroupScope["swTabGroup"].switchTabEventName;
                scope.swSkuPriceEdit.tabToSwitchTo = tabGroupScope["swTabGroup"].getTabByName("Pricing");
                scope.swSkuPriceEdit.showSwitchTabContextButton = true; 
            } else { 
                scope.swSkuPriceEdit.showSwitchTabContextButton = false; 
            }
        }
        
	}
}
export{
    SWSkuPriceEdit,
    SWSkuPriceEditController
}
