<!---

    Slatwall - An Open Source eCommerce Platform
    Copyright (C) ten24, LLC

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

    Linking this program statically or dynamically with other modules is
    making a combined work based on this program.  Thus, the terms and
    conditions of the GNU General Public License cover the whole
    combination.

    As a special exception, the copyright holders of this program give you
    permission to combine this program with independent modules and your
    custom code, regardless of the license terms of these independent
    modules, and to copy and distribute the resulting program under terms
    of your choice, provided that you follow these specific guidelines:

	- You also meet the terms and conditions of the license of each
	  independent module
	- You must not alter the default display of the Slatwall name or logo from
	  any part of the application
	- Your custom code must not alter or create any files inside Slatwall,
	  except in the following directories:
		/integrationServices/

	You may copy and distribute the modified version of this program that meets
	the above guidelines as a combined work under the terms of GPL for this program,
	provided that you include the source code of that other code when and as the
	GNU GPL requires distribution of source code.

    If you modify this program, you may extend this exception to your version
    of the program, but you are not obligated to do so.

Notes:

--->
<cfimport prefix="swa" taglib="../../../tags" />
<cfimport prefix="hb" taglib="../../../org/Hibachi/HibachiTags" />



<cfparam name="rc.orderItemSmartList" type="any" />

<cfset rc.orderItemSmartList.addOrder("order.orderOpenDateTime|DESC") />

<cfif not len(rc.orderItemSmartList.getFilters("order.orderStatusType.typeName")) >

	<cfset local.defaultStatusFilter = "">
	<cfset local.orderStatusTypeCodes = ['ostNew','ostProcessing','ostOnHold','ostClosed','ostCanceled'] />

	<cfloop array="#local.orderStatusTypeCodes#" index="local.orderstatus">
		<cfset local.orderstatusOptions =  $.slatwall.getService('typeService').getTypeOptionsBySystemCode(local.orderstatus) />
		<cfloop array="#local.orderstatusOptions#" index="local.orderstatusOption">
			<cfset local.defaultStatusFilter = listAppend(local.defaultStatusFilter, local.orderstatusOption.getTypeName()) />
		</cfloop>
	</cfloop>

	<cfset rc.orderItemSmartList.addFilter('order.orderStatusType.typeName', local.defaultStatusFilter) />
</cfif>

<cfoutput>
	<hb:HibachiEntityActionBar type="listing" object="#rc.orderItemSmartList#" showCreate="false" />

    <cfset orderitemCollectionList = getHibachiScope().getService('orderService').getorderItemCollectionList()>
	<cfset serchableDisplayProperties = "order.account.firstName,order.account.lastName,order.orderNumber,order.orderStatusType.typeName,order.orderOpenDateTime,sku.product.calculatedTitle,price,quantity,extendedPrice"/>
	<cfset orderitemCollectionList.setDisplayProperties( serchableDisplayProperties, {
		isVisible=true,
		isSearchable=true,
		isDeletable=true
	})/>
	
	<cfset orderitemCollectionList.addDisplayProperty( displayProperty='orderItemID', columnConfig={
		isVisible=false,
		isSearchable=false,
		isDeletable=false
	})/>

    <hb:HibachiListingDisplay 
    		collectionList="#orderitemCollectionList#"
    		usingPersonalCollection="true"
		personalCollectionKey='#request.context.entityactiondetails.itemname#'
    		recordEditAction="admin:entity.edit#lcase(orderitemCollectionList.getCollectionObject())#"
    		recordDetailAction="admin:entity.detail#lcase(orderitemCollectionList.getCollectionObject())#"
    	>
    </hb:HibachiListingDisplay>

</cfoutput>
