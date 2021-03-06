/*

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

*/
component entityname="SlatwallAccountPaymentApplied" table="SwAccountPaymentApplied" persistent="true" accessors="true" extends="HibachiEntity" hb_serviceName="accountService" {
	
	// Persistent Properties
	property name="accountPaymentAppliedID" ormtype="string" length="32" fieldtype="id" generator="uuid" unsavedvalue="" default="";
	property name="amount" ormtype="big_decimal" notnull="true" hb_formatType="currency";
	
	// Calculated Properties

	// Related Object Properties (many-to-one)
	property name="accountPayment" cfc="AccountPayment" fieldtype="many-to-one" fkcolumn="accountPaymentID" hb_optionsNullRBKey="define.select";
	property name="orderPayment" cfc="OrderPayment" fieldtype="many-to-one" fkcolumn="orderPaymentID" hb_optionsNullRBKey="define.select";
	property name="accountPaymentType" cfc="Type" fieldtype="many-to-one" fkcolumn="accountPaymentTypeID" hb_optionsSmartListData="f:parentType.systemCode=accountPaymentType";
	
	// Related Object Properties (one-to-many)
	
	// Related Object Properties (many-to-many - owner)

	// Related Object Properties (many-to-many - inverse)
	
	// Remote Properties
	property name="remoteID" ormtype="string";
	
	// Audit Properties
	property name="createdDateTime" hb_populateEnabled="false" ormtype="timestamp";
	property name="createdByAccountID" hb_populateEnabled="false" ormtype="string";
	property name="modifiedDateTime" hb_populateEnabled="false" ormtype="timestamp";
	property name="modifiedByAccountID" hb_populateEnabled="false" ormtype="string";
	
	// Non-Persistent Properties
	
	// Deprecated Properties


	// ==================== START: Logical Methods =========================
	
	// ====================  END: Logical Methods ==========================
	
	// ============ START: Non-Persistent Property Methods =================
	
	// ============  END:  Non-Persistent Property Methods =================
		
	// ============= START: Bidirectional Helper Methods ===================
	
	// Account Payment (many-to-one)    
	public void function setAccountPayment(required any accountPayment) {    
		variables.accountPayment = arguments.accountPayment;    
		if(isNew() or !arguments.accountPayment.hasAppliedAccountPayment( this )) {    
			arrayAppend(arguments.accountPayment.getAppliedAccountPayments(), this);    
		}    
	}    
	public void function removeAccountPayment(any accountPayment) {    
		if(!structKeyExists(arguments, "accountPayment")) {    
			arguments.accountPayment = variables.accountPayment;    
		}    
		var index = arrayFind(arguments.accountPayment.getAppliedAccountPayments(), this);    
		if(index > 0) {    
			arrayDeleteAt(arguments.accountPayment.getAppliedAccountPayments(), index);    
		}    
		structDelete(variables, "accountPayment");    
	}
	
	// Order Payment (many-to-one)    
	public void function setOrderPayment(required any orderPayment) {    
		variables.orderPayment = arguments.orderPayment;    
		if(isNew() or !arguments.orderPayment.hasAppliedAccountPayment( this )) {    
			arrayAppend(arguments.orderPayment.getAppliedAccountPayments(), this);    
		}    
	}    
	public void function removeOrderPayment(any orderPayment) {    
		if(!structKeyExists(arguments, "orderPayment")) {    
			arguments.orderPayment = variables.orderPayment;    
		}    
		var index = arrayFind(arguments.orderPayment.getAppliedAccountPayments(), this);    
		if(index > 0) {    
			arrayDeleteAt(arguments.orderPayment.getAppliedAccountPayments(), index);    
		}    
		structDelete(variables, "orderPayment");    
	}	
	
	// =============  END:  Bidirectional Helper Methods ===================

	// =============== START: Custom Validation Methods ====================
	
	// ===============  END: Custom Validation Methods =====================
	
	// =============== START: Custom Formatting Methods ====================
	
	// ===============  END: Custom Formatting Methods =====================
	
	// ============== START: Overridden Implicit Getters ===================
	
	public any function getAccountPaymentType() {
		if(!isNull(variables.accountPaymentType)) {
			return variables.accountPaymentType; 
		}
		return getAccountPayment().getAccountPaymentType();
	}
	
	// ==============  END: Overridden Implicit Getters ====================
	
	// ============= START: Overridden Smart List Getters ==================
	
	// =============  END: Overridden Smart List Getters ===================

	// ================== START: Overridden Methods ========================
	
	public string function getSimpleRepresentationPropertyName() {
		return "accountPaymentAppliedID";
	}
	public any function getSimpleRepresentation() {
		return getFormattedValue('accountPaymentAppliedID');
	}
	
	// ==================  END:  Overridden Methods ========================
	
	// =================== START: ORM Event Hooks  =========================
	
	// ===================  END:  ORM Event Hooks  =========================
	
	// ================== START: Deprecated Methods ========================
	
	// ==================  END:  Deprecated Methods ========================
	
}