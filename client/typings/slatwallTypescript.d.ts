//{
/// <reference path="../../admin/client/ts/controllers/alertcontroller.ts" />
/// <reference path="../../admin/client/ts/controllers/collections.ts" />
/// <reference path="../../admin/client/ts/controllers/collectionstabcontroller.ts" />
/// <reference path="../../admin/client/ts/controllers/confirmationcontroller.ts" />
/// <reference path="../../admin/client/ts/controllers/create-bundle-controller.ts" />
/// <reference path="../../admin/client/ts/controllers/createcollection.ts" />
/// <reference path="../../admin/client/ts/controllers/globalsearch.ts" />
/// <reference path="../../admin/client/ts/controllers/otherwisecontroller.ts" />
/// <reference path="../../admin/client/ts/controllers/pagedialog.ts" />
/// <reference path="../../admin/client/ts/controllers/preprocessaccount_addaccountpayment.ts" />
/// <reference path="../../admin/client/ts/controllers/preprocessorderitem_addorderitemgiftrecipient.ts" />
/// <reference path="../../admin/client/ts/controllers/routercontroller.ts" />
/// <reference path="../../admin/client/ts/model/alert.ts" />
/// <reference path="../../admin/client/ts/model/collectionConfig.ts" />
/// <reference path="../../admin/client/ts/model/giftRecipient.ts" />
/// <reference path="../../admin/client/ts/model/pagedialog.ts" />
/// <reference path="../../admin/client/ts/modules/loggingmodule.ts" />
/// <reference path="../../admin/client/ts/modules/ngslatwall.ts" />
/// <reference path="../../admin/client/ts/modules/ngslatwallmodel.ts" />
/// <reference path="../../admin/client/ts/modules/slatwalladmin.ts" />
/// <reference path="../../admin/client/ts/services/alertservice.ts" />
/// <reference path="../../admin/client/ts/services/baseservice.ts" />
/// <reference path="../../admin/client/ts/services/collectionservice.ts" />
/// <reference path="../../admin/client/ts/services/dialogservice.ts" />
/// <reference path="../../admin/client/ts/services/exceptionhandler.ts" />
/// <reference path="../../admin/client/ts/services/formservice.ts" />
/// <reference path="../../admin/client/ts/services/metadataservice.ts" />
/// <reference path="../../admin/client/ts/services/observerservice.ts" />
/// <reference path="../../admin/client/ts/services/paginationservice.ts" />
/// <reference path="../../admin/client/ts/services/productbundleservice.ts" />
/// <reference path="../../admin/client/ts/services/selectionservice.ts" />
/// <reference path="../../admin/client/ts/services/slatwallInterceptor.ts" />
/// <reference path="../../admin/client/ts/services/utilityservice.ts" />
/// <reference path="../../admin/client/ts/services/workflowconditionservice.ts" />
/// <reference path="../../admin/client/ts/directives/common/swclickoutside.ts" />
/// <reference path="../../admin/client/ts/directives/common/swcolumnsorter.ts" />
/// <reference path="../../admin/client/ts/directives/common/swconfirm.ts" />
/// <reference path="../../admin/client/ts/directives/common/swdirective.ts" />
/// <reference path="../../admin/client/ts/directives/common/swexportaction.ts" />
/// <reference path="../../admin/client/ts/directives/common/swfindhref.ts" />
/// <reference path="../../admin/client/ts/directives/common/swheaderwithtabs.ts" />
/// <reference path="../../admin/client/ts/directives/common/swhref.ts" />
/// <reference path="../../admin/client/ts/directives/common/swloading.ts" />
/// <reference path="../../admin/client/ts/directives/common/swoptions.ts" />
/// <reference path="../../admin/client/ts/directives/common/swpaginationbar.ts" />
/// <reference path="../../admin/client/ts/directives/common/swpropertydisplay.ts" />
/// <reference path="../../admin/client/ts/directives/common/swrbkey.ts" />
/// <reference path="../../admin/client/ts/directives/common/swresizedimage.ts" />
/// <reference path="../../admin/client/ts/directives/common/swscrolltrigger.ts" />
/// <reference path="../../admin/client/ts/directives/common/swselection.ts" />
/// <reference path="../../admin/client/ts/directives/common/swsortable.ts" />
/// <reference path="../../admin/client/ts/directives/collection/swaddfilterbuttons.ts" />
/// <reference path="../../admin/client/ts/directives/collection/swcollection.ts" />
/// <reference path="../../admin/client/ts/directives/collection/swcollectiontable.ts" />
/// <reference path="../../admin/client/ts/directives/collection/swcolumnitem.ts" />
/// <reference path="../../admin/client/ts/directives/collection/swconditioncriteria.ts" />
/// <reference path="../../admin/client/ts/directives/collection/swcriteria.ts" />
/// <reference path="../../admin/client/ts/directives/collection/swcriteriaboolean.ts" />
/// <reference path="../../admin/client/ts/directives/collection/swcriteriadate.ts" />
/// <reference path="../../admin/client/ts/directives/collection/swcriteriamanytomany.ts" />
/// <reference path="../../admin/client/ts/directives/collection/swcriteriamanytoone.ts" />
/// <reference path="../../admin/client/ts/directives/collection/swcriterianumber.ts" />
/// <reference path="../../admin/client/ts/directives/collection/swcriteriaonetomany.ts" />
/// <reference path="../../admin/client/ts/directives/collection/swcriteriastring.ts" />
/// <reference path="../../admin/client/ts/directives/collection/swdisplayitem.ts" />
/// <reference path="../../admin/client/ts/directives/collection/swdisplayoptions.ts" />
/// <reference path="../../admin/client/ts/directives/collection/sweditfilteritem.ts" />
/// <reference path="../../admin/client/ts/directives/collection/swfiltergroupitem.ts" />
/// <reference path="../../admin/client/ts/directives/collection/swfiltergroups.ts" />
/// <reference path="../../admin/client/ts/directives/collection/swfilteritem.ts" />
/// <reference path="../../admin/client/ts/directives/content/swcontentbasic.ts" />
/// <reference path="../../admin/client/ts/directives/content/swcontenteditor.ts" />
/// <reference path="../../admin/client/ts/directives/content/swcontentlist.ts" />
/// <reference path="../../admin/client/ts/directives/content/swcontentnode.ts" />
/// <reference path="../../admin/client/ts/directives/orderitem/swchildorderitem.ts" />
/// <reference path="../../admin/client/ts/directives/orderitem/swoishippinglabelstamp.ts" />
/// <reference path="../../admin/client/ts/directives/orderitem/sworderitem.ts" />
/// <reference path="../../admin/client/ts/directives/orderitem/sworderitemdetailstamp.ts" />
/// <reference path="../../admin/client/ts/directives/orderitem/sworderitems.ts" />
/// <reference path="../../admin/client/ts/directives/productBundleGroup/swproductbundlegroup.ts" />
/// <reference path="../../admin/client/ts/directives/productBundleGroup/swproductbundlegroups.ts" />
/// <reference path="../../admin/client/ts/directives/productBundleGroup/swproductbundlegrouptype.ts" />
/// <reference path="../../admin/client/ts/directives/giftrecipient/sworderitemgiftrecipientrow.ts" />
/// <reference path="../../admin/client/ts/directives/workflow/swadmincreatesuperuser.ts" />
/// <reference path="../../admin/client/ts/directives/workflow/swworkflowbasic.ts" />
/// <reference path="../../admin/client/ts/directives/workflow/swworkflowcondition.ts" />
/// <reference path="../../admin/client/ts/directives/workflow/swworkflowconditiongroupitem.ts" />
/// <reference path="../../admin/client/ts/directives/workflow/swworkflowconditiongroups.ts" />
/// <reference path="../../admin/client/ts/directives/workflow/swworkflowtask.ts" />
/// <reference path="../../admin/client/ts/directives/workflow/swworkflowtaskactions.ts" />
/// <reference path="../../admin/client/ts/directives/workflow/swworkflowtasks.ts" />
/// <reference path="../../admin/client/ts/directives/workflow/swworkflowtrigger.ts" />
/// <reference path="../../admin/client/ts/directives/workflow/swworkflowtriggers.ts" />
/// <reference path="../../admin/client/ts/directives/common/entity/swdetail.ts" />
/// <reference path="../../admin/client/ts/directives/common/entity/swlist.ts" />
/// <reference path="../../admin/client/ts/directives/common/form/swform.ts" />
/// <reference path="../../admin/client/ts/directives/common/form/swformfield.ts" />
/// <reference path="../../admin/client/ts/directives/common/form/swformfieldjson.ts" />
/// <reference path="../../admin/client/ts/directives/common/form/swformfieldnumber.ts" />
/// <reference path="../../admin/client/ts/directives/common/form/swformfieldpassword.ts" />
/// <reference path="../../admin/client/ts/directives/common/form/swformfieldradio.ts" />
/// <reference path="../../admin/client/ts/directives/common/form/swformfieldsearchselect.ts" />
/// <reference path="../../admin/client/ts/directives/common/form/swformfieldselect.ts" />
/// <reference path="../../admin/client/ts/directives/common/form/swformfieldtext.ts" />
/// <reference path="../../admin/client/ts/directives/common/form/swformregistrar.ts" />
/// <reference path="../../admin/client/ts/directives/common/form/swinput.ts" />
/// <reference path="../../admin/client/ts/directives/common/validation/swvalidate.ts" />
/// <reference path="../../admin/client/ts/directives/common/validation/swvalidationdatatype.ts" />
/// <reference path="../../admin/client/ts/directives/common/validation/swvalidationeq.ts" />
/// <reference path="../../admin/client/ts/directives/common/validation/swvalidationgte.ts" />
/// <reference path="../../admin/client/ts/directives/common/validation/swvalidationlte.ts" />
/// <reference path="../../admin/client/ts/directives/common/validation/swvalidationmaxlength.ts" />
/// <reference path="../../admin/client/ts/directives/common/validation/swvalidationmaxvalue.ts" />
/// <reference path="../../admin/client/ts/directives/common/validation/swvalidationminlength.ts" />
/// <reference path="../../admin/client/ts/directives/common/validation/swvalidationminvalue.ts" />
/// <reference path="../../admin/client/ts/directives/common/validation/swvalidationneq.ts" />
/// <reference path="../../admin/client/ts/directives/common/validation/swvalidationnumeric.ts" />
/// <reference path="../../admin/client/ts/directives/common/validation/swvalidationregex.ts" />
/// <reference path="../../admin/client/ts/directives/common/validation/swvalidationrequired.ts" />
/// <reference path="../../admin/client/ts/directives/common/validation/swvalidationunique.ts" />
/// <reference path="../../admin/client/ts/directives/common/validation/swvalidationuniqueornull.ts" />
//}
