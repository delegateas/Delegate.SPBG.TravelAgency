
declare module DG.Microsoft.Dynamics.CRM {
	interface crmbaseentitySingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.crmbaseentity> {
	}
	interface crmbaseentity extends Microsoft.OData.Client.BaseEntityType {
	}
	interface accountleadsSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.accountleads> {
	}
	interface accountleads extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		accountleadid: System.Guid;
		leadid: System.Guid;
		accountid: System.Guid;
		versionnumber: number;
	}
	interface accountSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.account> {
		accountleads_association: DG.Microsoft.Dynamics.CRM.lead[];
		listaccount_association: DG.Microsoft.Dynamics.CRM.list[];
		account_entitlement_Customer: DG.Microsoft.Dynamics.CRM.entitlement[];
		account_entitlement_Account: DG.Microsoft.Dynamics.CRM.entitlement[];
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		Account_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		Account_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		lead_customer_accounts: DG.Microsoft.Dynamics.CRM.lead[];
		Account_Email_SendersAccount: DG.Microsoft.Dynamics.CRM.email[];
		Account_Email_EmailSender: DG.Microsoft.Dynamics.CRM.email[];
		contract_billingcustomer_accounts: DG.Microsoft.Dynamics.CRM.contract[];
		Account_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		Account_SharepointDocumentLocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		preferredserviceid: DG.Microsoft.Dynamics.CRM.serviceSingle;
		account_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		account_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		account_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		Account_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		masterid: DG.Microsoft.Dynamics.CRM.accountSingle;
		account_master_account: DG.Microsoft.Dynamics.CRM.account[];
		preferredequipmentid: DG.Microsoft.Dynamics.CRM.equipmentSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		Account_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		Account_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		preferredsystemuserid: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		CreatedAccount_BulkOperationLogs2: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Account_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		Account_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		primarycontactid: DG.Microsoft.Dynamics.CRM.contactSingle;
		Account_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		SocialActivity_PostAuthorAccount_accounts: DG.Microsoft.Dynamics.CRM.socialactivity[];
		opportunity_customer_accounts: DG.Microsoft.Dynamics.CRM.opportunity[];
		SourceAccount_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		Account_CustomerAddress: DG.Microsoft.Dynamics.CRM.customeraddress[];
		originatingleadid: DG.Microsoft.Dynamics.CRM.leadSingle;
		Account_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		opportunity_parent_account: DG.Microsoft.Dynamics.CRM.opportunity[];
		Account_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		quote_customer_accounts: DG.Microsoft.Dynamics.CRM.quote[];
		SocialActivity_PostAuthor_accounts: DG.Microsoft.Dynamics.CRM.socialactivity[];
		territoryid: DG.Microsoft.Dynamics.CRM.territorySingle;
		contact_customer_accounts: DG.Microsoft.Dynamics.CRM.contact[];
		incident_customer_accounts: DG.Microsoft.Dynamics.CRM.incident[];
		invoice_customer_accounts: DG.Microsoft.Dynamics.CRM.invoice[];
		Account_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		contractlineitem_customer_accounts: DG.Microsoft.Dynamics.CRM.contractdetail[];
		Account_Emails: DG.Microsoft.Dynamics.CRM.email[];
		parentaccountid: DG.Microsoft.Dynamics.CRM.accountSingle;
		account_parent_account: DG.Microsoft.Dynamics.CRM.account[];
		Socialprofile_customer_accounts: DG.Microsoft.Dynamics.CRM.socialprofile[];
		Account_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		account_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		account_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		defaultpricelevelid: DG.Microsoft.Dynamics.CRM.pricelevelSingle;
		lead_parent_account: DG.Microsoft.Dynamics.CRM.lead[];
		contract_customer_accounts: DG.Microsoft.Dynamics.CRM.contract[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Account_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		order_customer_accounts: DG.Microsoft.Dynamics.CRM.salesorder[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface account extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		openrevenue: number;
		territorycode: number;
		lastusedincampaign: Date;
		address1_name: string;
		address1_telephone2: string;
		overriddencreatedon: Date;
		entityimageid: System.Guid;
		ownershipcode: number;
		customersizecode: number;
		_primarycontactid_value: System.Guid;
		creditlimit: number;
		emailaddress2: string;
		versionnumber: number;
		address1_county: string;
		entityimage_timestamp: number;
		telephone3: string;
		openrevenue_date: Date;
		donotbulkpostalmail: boolean;
		address1_freighttermscode: number;
		address2_line1: string;
		aging90: number;
		donotpostalmail: boolean;
		_createdbyexternalparty_value: System.Guid;
		telephone2: string;
		_owningbusinessunit_value: System.Guid;
		primarysatoriid: string;
		shippingmethodcode: number;
		address1_addressid: System.Guid;
		address2_telephone1: string;
		address1_fax: string;
		_ownerid_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		preferredcontactmethodcode: number;
		address2_city: string;
		address2_latitude: number;
		address2_composite: string;
		creditlimit_base: number;
		aging90_base: number;
		address2_postalcode: string;
		address2_name: string;
		merged: boolean;
		preferredappointmentdaycode: number;
		_owningteam_value: System.Guid;
		address2_line3: string;
		address2_county: string;
		aging30: number;
		donotbulkemail: boolean;
		_originatingleadid_value: System.Guid;
		emailaddress3: string;
		_modifiedbyexternalparty_value: System.Guid;
		paymenttermscode: number;
		websiteurl: string;
		revenue: number;
		address1_shippingmethodcode: number;
		description: string;
		tickersymbol: string;
		statuscode: number;
		sic: string;
		marketcap: number;
		_parentaccountid_value: System.Guid;
		_owninguser_value: System.Guid;
		address2_addressid: System.Guid;
		_preferredsystemuserid_value: System.Guid;
		address2_longitude: number;
		_defaultpricelevelid_value: System.Guid;
		openrevenue_state: number;
		address1_primarycontactname: string;
		accountcategorycode: number;
		statecode: number;
		marketcap_base: number;
		donotfax: boolean;
		address2_telephone3: string;
		address2_postofficebox: string;
		address2_upszone: string;
		_preferredserviceid_value: System.Guid;
		address1_upszone: string;
		stageid: System.Guid;
		utcconversiontimezonecode: number;
		donotemail: boolean;
		aging60: number;
		customertypecode: number;
		telephone1: string;
		opendeals_state: number;
		address1_postofficebox: string;
		_modifiedby_value: System.Guid;
		yominame: string;
		address2_country: string;
		donotsendmm: boolean;
		address1_postalcode: string;
		traversedpath: string;
		_transactioncurrencyid_value: System.Guid;
		fax: string;
		numberofemployees: number;
		opendeals_date: Date;
		address2_freighttermscode: number;
		accountratingcode: number;
		address1_longitude: number;
		participatesinworkflow: boolean;
		revenue_base: number;
		creditonhold: boolean;
		address1_telephone1: string;
		createdon: Date;
		name: string;
		exchangerate: number;
		address2_addresstypecode: number;
		address1_stateorprovince: string;
		address2_shippingmethodcode: number;
		address2_line2: string;
		entityimage: number[];
		primarytwitterid: string;
		accountnumber: string;
		address1_line1: string;
		_territoryid_value: System.Guid;
		address1_composite: string;
		ftpsiteurl: string;
		donotphone: boolean;
		accountclassificationcode: number;
		_preferredequipmentid_value: System.Guid;
		entityimage_url: string;
		processid: System.Guid;
		address2_telephone2: string;
		address1_addresstypecode: number;
		address1_utcoffset: number;
		address2_fax: string;
		businesstypecode: number;
		aging60_base: number;
		address1_country: string;
		_modifiedonbehalfby_value: System.Guid;
		stockexchange: string;
		_createdby_value: System.Guid;
		address1_line3: string;
		accountid: System.Guid;
		aging30_base: number;
		openrevenue_base: number;
		sharesoutstanding: number;
		address1_city: string;
		address2_primarycontactname: string;
		address1_latitude: number;
		modifiedon: Date;
		_masterid_value: System.Guid;
		address2_utcoffset: number;
		address1_line2: string;
		emailaddress1: string;
		timezoneruleversionnumber: number;
		opendeals: number;
		address2_stateorprovince: string;
		preferredappointmenttimecode: number;
		importsequencenumber: number;
		industrycode: number;
		address1_telephone3: string;
		accountleads_association: DG.Microsoft.Dynamics.CRM.lead[];
		listaccount_association: DG.Microsoft.Dynamics.CRM.list[];
		account_entitlement_Customer: DG.Microsoft.Dynamics.CRM.entitlement[];
		account_entitlement_Account: DG.Microsoft.Dynamics.CRM.entitlement[];
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		Account_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		Account_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		lead_customer_accounts: DG.Microsoft.Dynamics.CRM.lead[];
		Account_Email_SendersAccount: DG.Microsoft.Dynamics.CRM.email[];
		Account_Email_EmailSender: DG.Microsoft.Dynamics.CRM.email[];
		contract_billingcustomer_accounts: DG.Microsoft.Dynamics.CRM.contract[];
		Account_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		Account_SharepointDocumentLocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		preferredserviceid: DG.Microsoft.Dynamics.CRM.service;
		account_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		account_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		account_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		Account_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		masterid: DG.Microsoft.Dynamics.CRM.account;
		account_master_account: DG.Microsoft.Dynamics.CRM.account[];
		preferredequipmentid: DG.Microsoft.Dynamics.CRM.equipment;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		Account_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		Account_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		preferredsystemuserid: DG.Microsoft.Dynamics.CRM.systemuser;
		CreatedAccount_BulkOperationLogs2: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		Account_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		Account_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		primarycontactid: DG.Microsoft.Dynamics.CRM.contact;
		Account_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		SocialActivity_PostAuthorAccount_accounts: DG.Microsoft.Dynamics.CRM.socialactivity[];
		opportunity_customer_accounts: DG.Microsoft.Dynamics.CRM.opportunity[];
		SourceAccount_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		Account_CustomerAddress: DG.Microsoft.Dynamics.CRM.customeraddress[];
		originatingleadid: DG.Microsoft.Dynamics.CRM.lead;
		Account_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		opportunity_parent_account: DG.Microsoft.Dynamics.CRM.opportunity[];
		Account_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		quote_customer_accounts: DG.Microsoft.Dynamics.CRM.quote[];
		SocialActivity_PostAuthor_accounts: DG.Microsoft.Dynamics.CRM.socialactivity[];
		territoryid: DG.Microsoft.Dynamics.CRM.territory;
		contact_customer_accounts: DG.Microsoft.Dynamics.CRM.contact[];
		incident_customer_accounts: DG.Microsoft.Dynamics.CRM.incident[];
		invoice_customer_accounts: DG.Microsoft.Dynamics.CRM.invoice[];
		Account_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		contractlineitem_customer_accounts: DG.Microsoft.Dynamics.CRM.contractdetail[];
		Account_Emails: DG.Microsoft.Dynamics.CRM.email[];
		parentaccountid: DG.Microsoft.Dynamics.CRM.account;
		account_parent_account: DG.Microsoft.Dynamics.CRM.account[];
		Socialprofile_customer_accounts: DG.Microsoft.Dynamics.CRM.socialprofile[];
		Account_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		account_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		account_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		defaultpricelevelid: DG.Microsoft.Dynamics.CRM.pricelevel;
		lead_parent_account: DG.Microsoft.Dynamics.CRM.lead[];
		contract_customer_accounts: DG.Microsoft.Dynamics.CRM.contract[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		Account_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		order_customer_accounts: DG.Microsoft.Dynamics.CRM.salesorder[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface lead extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		address1_name: string;
		subject: string;
		address1_county: string;
		address1_line1: string;
		address1_telephone2: string;
		lastname: string;
		description: string;
		address1_city: string;
		address1_telephone1: string;
		utcconversiontimezonecode: number;
		address2_country: string;
		processid: System.Guid;
		address2_postofficebox: string;
		modifiedon: Date;
		address2_city: string;
		budgetamount_base: number;
		estimatedvalue: number;
		lastusedincampaign: Date;
		budgetstatus: number;
		_modifiedby_value: System.Guid;
		address1_line3: string;
		address1_addresstypecode: number;
		donotbulkemail: boolean;
		statecode: number;
		estimatedclosedate: Microsoft.OData.Edm.Library.Date;
		address2_addresstypecode: number;
		leadsourcecode: number;
		salesstage: number;
		initialcommunication: number;
		estimatedamount_base: number;
		budgetamount: number;
		industrycode: number;
		telephone3: string;
		address1_country: string;
		middlename: string;
		exchangerate: number;
		overriddencreatedon: Date;
		mobilephone: string;
		fax: string;
		participatesinworkflow: boolean;
		createdon: Date;
		yomilastname: string;
		_accountid_value: System.Guid;
		sic: string;
		entityimageid: System.Guid;
		address1_composite: string;
		need: number;
		address1_upszone: string;
		_createdonbehalfby_value: System.Guid;
		address1_postalcode: string;
		_parentcontactid_value: System.Guid;
		entityimage: number[];
		yomifirstname: string;
		address1_stateorprovince: string;
		_owningteam_value: System.Guid;
		purchaseprocess: number;
		address1_postofficebox: string;
		entityimage_url: string;
		donotfax: boolean;
		versionnumber: number;
		address2_county: string;
		_ownerid_value: System.Guid;
		_originatingcaseid_value: System.Guid;
		_contactid_value: System.Guid;
		telephone2: string;
		address2_line3: string;
		address2_line1: string;
		salutation: string;
		numberofemployees: number;
		companyname: string;
		fullname: string;
		_qualifyingopportunityid_value: System.Guid;
		address2_longitude: number;
		firstname: string;
		address1_latitude: number;
		schedulefollowup_qualify: Date;
		address2_latitude: number;
		address1_line2: string;
		decisionmaker: boolean;
		_masterid_value: System.Guid;
		address2_fax: string;
		address2_telephone1: string;
		address2_shippingmethodcode: number;
		address1_telephone3: string;
		purchasetimeframe: number;
		preferredcontactmethodcode: number;
		address2_line2: string;
		address2_upszone: string;
		websiteurl: string;
		address2_postalcode: string;
		address1_shippingmethodcode: number;
		schedulefollowup_prospect: Date;
		leadqualitycode: number;
		address2_addressid: System.Guid;
		pager: string;
		donotsendmm: boolean;
		address2_name: string;
		emailaddress1: string;
		stageid: System.Guid;
		prioritycode: number;
		_createdby_value: System.Guid;
		address1_addressid: System.Guid;
		address2_telephone2: string;
		entityimage_timestamp: number;
		traversedpath: string;
		_campaignid_value: System.Guid;
		address1_fax: string;
		donotemail: boolean;
		yomimiddlename: string;
		timezoneruleversionnumber: number;
		salesstagecode: number;
		emailaddress2: string;
		emailaddress3: string;
		leadid: System.Guid;
		statuscode: number;
		_relatedobjectid_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		address1_utcoffset: number;
		_transactioncurrencyid_value: System.Guid;
		qualificationcomments: string;
		_owninguser_value: System.Guid;
		revenue: number;
		merged: boolean;
		_customerid_value: System.Guid;
		donotphone: boolean;
		address2_stateorprovince: string;
		evaluatefit: boolean;
		estimatedamount: number;
		address1_longitude: number;
		yomifullname: string;
		donotpostalmail: boolean;
		address2_utcoffset: number;
		address2_composite: string;
		yomicompanyname: string;
		telephone1: string;
		address2_telephone3: string;
		_parentaccountid_value: System.Guid;
		_owningbusinessunit_value: System.Guid;
		jobtitle: string;
		confirminterest: boolean;
		importsequencenumber: number;
		revenue_base: number;
		leadcompetitors_association: DG.Microsoft.Dynamics.CRM.competitor[];
		accountleads_association: DG.Microsoft.Dynamics.CRM.account[];
		listlead_association: DG.Microsoft.Dynamics.CRM.list[];
		leadproduct_association: DG.Microsoft.Dynamics.CRM.product[];
		contactleads_association: DG.Microsoft.Dynamics.CRM.contact[];
		lead_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		originatingcaseid: DG.Microsoft.Dynamics.CRM.incident;
		Lead_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		Lead_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		customerid_account: DG.Microsoft.Dynamics.CRM.account;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		opportunity_originating_lead: DG.Microsoft.Dynamics.CRM.opportunity[];
		lead_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		lead_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		Lead_Emails: DG.Microsoft.Dynamics.CRM.email[];
		Lead_Email_EmailSender: DG.Microsoft.Dynamics.CRM.email[];
		Lead_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		masterid: DG.Microsoft.Dynamics.CRM.lead;
		lead_master_lead: DG.Microsoft.Dynamics.CRM.lead[];
		Lead_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Lead_SharepointDocumentLocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		Lead_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		customerid_contact: DG.Microsoft.Dynamics.CRM.contact;
		Lead_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		contact_originating_lead: DG.Microsoft.Dynamics.CRM.contact[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		Lead_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		lead_addresses: DG.Microsoft.Dynamics.CRM.leadaddress[];
		account_originating_lead: DG.Microsoft.Dynamics.CRM.account[];
		Lead_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		CreatedLead_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		Lead_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		Lead_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		relatedobjectid: DG.Microsoft.Dynamics.CRM.campaignresponse;
		lead_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		Lead_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		parentcontactid: DG.Microsoft.Dynamics.CRM.contact;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		qualifyingopportunityid: DG.Microsoft.Dynamics.CRM.opportunity;
		Lead_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		lead_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		campaignid: DG.Microsoft.Dynamics.CRM.campaign;
		parentaccountid: DG.Microsoft.Dynamics.CRM.account;
		Lead_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		Lead_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		SourceLead_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
	}
	interface competitor extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		tickersymbol: string;
		address2_addresstypecode: number;
		address2_addressid: System.Guid;
		address2_shippingmethodcode: number;
		address1_postalcode: string;
		address2_latitude: number;
		address2_upszone: string;
		address1_fax: string;
		opportunities: string;
		reportedrevenue: number;
		address1_telephone1: string;
		address1_stateorprovince: string;
		competitorid: System.Guid;
		address1_name: string;
		_createdby_value: System.Guid;
		address1_country: string;
		_modifiedonbehalfby_value: System.Guid;
		address2_postalcode: string;
		stageid: System.Guid;
		address2_name: string;
		weaknesses: string;
		strengths: string;
		overriddencreatedon: Date;
		address1_telephone3: string;
		address2_country: string;
		entityimage: number[];
		address1_line1: string;
		name: string;
		utcconversiontimezonecode: number;
		winpercentage: number;
		address2_county: string;
		reportingyear: number;
		address1_city: string;
		entityimageid: System.Guid;
		address1_upszone: string;
		address1_shippingmethodcode: number;
		address1_line3: string;
		reportingquarter: number;
		address2_telephone1: string;
		entityimage_timestamp: number;
		address2_city: string;
		address2_line2: string;
		importsequencenumber: number;
		address1_addresstypecode: number;
		createdon: Date;
		address2_utcoffset: number;
		processid: System.Guid;
		websiteurl: string;
		modifiedon: Date;
		exchangerate: number;
		_transactioncurrencyid_value: System.Guid;
		traversedpath: string;
		referenceinfourl: string;
		address1_postofficebox: string;
		address2_line3: string;
		address1_latitude: number;
		address1_telephone2: string;
		threats: string;
		reportedrevenue_base: number;
		address2_telephone2: string;
		address2_telephone3: string;
		address1_addressid: System.Guid;
		stockexchange: string;
		address1_composite: string;
		address1_county: string;
		keyproduct: string;
		address2_longitude: number;
		address2_fax: string;
		timezoneruleversionnumber: number;
		address1_line2: string;
		address1_utcoffset: number;
		address2_stateorprovince: string;
		entityimage_url: string;
		_organizationid_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		address2_line1: string;
		address2_postofficebox: string;
		versionnumber: number;
		overview: string;
		address2_composite: string;
		yominame: string;
		_modifiedby_value: System.Guid;
		address1_longitude: number;
		leadcompetitors_association: DG.Microsoft.Dynamics.CRM.lead[];
		competitorsalesliterature_association: DG.Microsoft.Dynamics.CRM.salesliterature[];
		competitorproduct_association: DG.Microsoft.Dynamics.CRM.product[];
		opportunitycompetitors_association: DG.Microsoft.Dynamics.CRM.opportunity[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		Competitor_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		competitor_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		Competitor_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		competitor_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		competitor_addresses: DG.Microsoft.Dynamics.CRM.competitoraddress[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		Competitor_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		competitor_opportunity_activities: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		Competitor_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		Competitor_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		competitor_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		competitor_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
	}
	interface salesliterature extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		entityimageid: System.Guid;
		keywords: string;
		_employeecontactid_value: System.Guid;
		iscustomerviewable: boolean;
		description: string;
		_modifiedby_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		_subjectid_value: System.Guid;
		entityimage_timestamp: number;
		hasattachments: boolean;
		timezoneruleversionnumber: number;
		stageid: System.Guid;
		utcconversiontimezonecode: number;
		versionnumber: number;
		processid: System.Guid;
		expirationdate: Date;
		entityimage: number[];
		_modifiedonbehalfby_value: System.Guid;
		overriddencreatedon: Date;
		name: string;
		traversedpath: string;
		_createdby_value: System.Guid;
		createdon: Date;
		literaturetypecode: number;
		modifiedon: Date;
		salesliteratureid: System.Guid;
		entityimage_url: string;
		_transactioncurrencyid_value: System.Guid;
		importsequencenumber: number;
		exchangerate: number;
		_organizationid_value: System.Guid;
		campaignsalesliterature_association: DG.Microsoft.Dynamics.CRM.campaign[];
		competitorsalesliterature_association: DG.Microsoft.Dynamics.CRM.competitor[];
		campaignactivitysalesliterature_association: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		productsalesliterature_association: DG.Microsoft.Dynamics.CRM.product[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		sales_literature_items: DG.Microsoft.Dynamics.CRM.salesliteratureitem[];
		subjectid: DG.Microsoft.Dynamics.CRM.subject;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		employeecontactid: DG.Microsoft.Dynamics.CRM.systemuser;
		SalesLiterature_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		SalesLiterature_SharepointDocumentLocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		SalesLiterature_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface campaign extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_ownerid_value: System.Guid;
		campaignid: System.Guid;
		entityimage_timestamp: number;
		promotioncodename: string;
		_modifiedonbehalfby_value: System.Guid;
		versionnumber: number;
		istemplate: boolean;
		actualstart: Date;
		totalcampaignactivityactualcost_base: number;
		name: string;
		statecode: number;
		traversedpath: string;
		actualend: Date;
		createdon: Date;
		_createdby_value: System.Guid;
		_pricelistid_value: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		utcconversiontimezonecode: number;
		_modifiedby_value: System.Guid;
		proposedstart: Date;
		typecode: number;
		entityimageid: System.Guid;
		budgetedcost_base: number;
		_owningbusinessunit_value: System.Guid;
		description: string;
		proposedend: Date;
		totalcampaignactivityactualcost: number;
		totalactualcost: number;
		timezoneruleversionnumber: number;
		codename: string;
		entityimage_url: string;
		_owningteam_value: System.Guid;
		objective: string;
		message: string;
		othercost_base: number;
		expectedrevenue_base: number;
		entityimage: number[];
		totalactualcost_base: number;
		exchangerate: number;
		modifiedon: Date;
		_owninguser_value: System.Guid;
		budgetedcost: number;
		expectedresponse: number;
		statuscode: number;
		overriddencreatedon: Date;
		stageid: System.Guid;
		expectedrevenue: number;
		processid: System.Guid;
		importsequencenumber: number;
		othercost: number;
		_createdonbehalfby_value: System.Guid;
		campaignlist_association: DG.Microsoft.Dynamics.CRM.list[];
		campaigncampaign_association: DG.Microsoft.Dynamics.CRM.campaign[];
		campaigncampaign_association_referenced: DG.Microsoft.Dynamics.CRM.campaign[];
		campaignsalesliterature_association: DG.Microsoft.Dynamics.CRM.salesliterature[];
		campaignproduct_association: DG.Microsoft.Dynamics.CRM.product[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		campaign_opportunities: DG.Microsoft.Dynamics.CRM.opportunity[];
		Campaign_CampaignActivities: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		Campaign_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		Campaign_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		Campaign_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		Campaign_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		campaign_orders: DG.Microsoft.Dynamics.CRM.salesorder[];
		Campaign_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		Campaign_CampaignResponses: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		campaign_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		Campaign_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		Campaign_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		Campaign_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		Campaign_Emails: DG.Microsoft.Dynamics.CRM.email[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		Campaign_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		Campaign_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		Campaign_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		Campaign_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		campaign_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		Campaign_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		campaign_leads: DG.Microsoft.Dynamics.CRM.lead[];
		pricelistid: DG.Microsoft.Dynamics.CRM.pricelevel;
		campaign_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		campaign_quotes: DG.Microsoft.Dynamics.CRM.quote[];
	}
	interface list extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		type: boolean;
		_owningbusinessunit_value: System.Guid;
		membertype: number;
		listname: string;
		createdfromcode: number;
		processid: System.Guid;
		traversedpath: string;
		query: string;
		createdon: Date;
		utcconversiontimezonecode: number;
		_modifiedonbehalfby_value: System.Guid;
		_owninguser_value: System.Guid;
		_modifiedby_value: System.Guid;
		statuscode: number;
		statecode: number;
		_createdby_value: System.Guid;
		_ownerid_value: System.Guid;
		exchangerate: number;
		lockstatus: boolean;
		lastusedon: Date;
		stageid: System.Guid;
		donotsendonoptout: boolean;
		_owningteam_value: System.Guid;
		cost: number;
		modifiedon: Date;
		listid: System.Guid;
		cost_base: number;
		timezoneruleversionnumber: number;
		_createdonbehalfby_value: System.Guid;
		membercount: number;
		importsequencenumber: number;
		description: string;
		overriddencreatedon: Date;
		purpose: string;
		_transactioncurrencyid_value: System.Guid;
		source: string;
		ignoreinactivelistmembers: boolean;
		versionnumber: number;
		campaignlist_association: DG.Microsoft.Dynamics.CRM.campaign[];
		listlead_association: DG.Microsoft.Dynamics.CRM.lead[];
		listcontact_association: DG.Microsoft.Dynamics.CRM.contact[];
		listaccount_association: DG.Microsoft.Dynamics.CRM.account[];
		campaignactivitylist_association: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		List_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		list_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		List_BulkOperations: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		List_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		list_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		List_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		List_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		List_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface contact extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		spousesname: string;
		emailaddress3: string;
		address3_telephone3: string;
		entityimage_timestamp: number;
		address2_shippingmethodcode: number;
		_preferredserviceid_value: System.Guid;
		address3_shippingmethodcode: number;
		versionnumber: number;
		annualincome: number;
		address2_line2: string;
		stageid: System.Guid;
		telephone3: string;
		preferredappointmentdaycode: number;
		address3_city: string;
		_createdby_value: System.Guid;
		address2_line1: string;
		lastusedincampaign: Date;
		address3_freighttermscode: number;
		address3_telephone2: string;
		pager: string;
		employeeid: string;
		territorycode: number;
		_parentcustomerid_value: System.Guid;
		birthdate: Microsoft.OData.Edm.Library.Date;
		numberofchildren: number;
		address2_latitude: number;
		address2_postalcode: string;
		home2: string;
		address1_latitude: number;
		_owninguser_value: System.Guid;
		assistantphone: string;
		_masterid_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		subscriptionid: System.Guid;
		address3_county: string;
		mobilephone: string;
		customertypecode: number;
		address3_addresstypecode: number;
		address1_freighttermscode: number;
		address1_longitude: number;
		address1_addresstypecode: number;
		statuscode: number;
		yomifullname: string;
		aging90_base: number;
		_accountid_value: System.Guid;
		address3_postalcode: string;
		address1_upszone: string;
		address3_primarycontactname: string;
		familystatuscode: number;
		address3_addressid: System.Guid;
		firstname: string;
		_createdbyexternalparty_value: System.Guid;
		department: string;
		_originatingleadid_value: System.Guid;
		aging60: number;
		traversedpath: string;
		statecode: number;
		address2_freighttermscode: number;
		address1_name: string;
		yomimiddlename: string;
		description: string;
		address3_utcoffset: number;
		participatesinworkflow: boolean;
		address1_telephone3: string;
		managername: string;
		_owningteam_value: System.Guid;
		address2_telephone1: string;
		gendercode: number;
		_ownerid_value: System.Guid;
		address2_addresstypecode: number;
		address1_composite: string;
		address1_utcoffset: number;
		websiteurl: string;
		aging60_base: number;
		address3_line1: string;
		address1_county: string;
		_owningbusinessunit_value: System.Guid;
		jobtitle: string;
		entityimageid: System.Guid;
		processid: System.Guid;
		address1_telephone2: string;
		timezoneruleversionnumber: number;
		address1_fax: string;
		address2_postofficebox: string;
		emailaddress2: string;
		address1_line2: string;
		address3_line2: string;
		donotpostalmail: boolean;
		address2_utcoffset: number;
		exchangerate: number;
		createdon: Date;
		importsequencenumber: number;
		address2_line3: string;
		managerphone: string;
		address2_addressid: System.Guid;
		overriddencreatedon: Date;
		company: string;
		address1_telephone1: string;
		address3_composite: string;
		address3_fax: string;
		childrensnames: string;
		preferredcontactmethodcode: number;
		address2_fax: string;
		yomilastname: string;
		aging90: number;
		donotbulkpostalmail: boolean;
		emailaddress1: string;
		donotbulkemail: boolean;
		customersizecode: number;
		address1_city: string;
		fullname: string;
		preferredappointmenttimecode: number;
		address3_latitude: number;
		_transactioncurrencyid_value: System.Guid;
		entityimage: number[];
		_modifiedbyexternalparty_value: System.Guid;
		paymenttermscode: number;
		address3_name: string;
		aging30: number;
		leadsourcecode: number;
		merged: boolean;
		address2_telephone3: string;
		address1_shippingmethodcode: number;
		_modifiedby_value: System.Guid;
		ftpsiteurl: string;
		_preferredsystemuserid_value: System.Guid;
		address2_telephone2: string;
		address1_addressid: System.Guid;
		address3_stateorprovince: string;
		address3_telephone1: string;
		nickname: string;
		address1_postofficebox: string;
		_preferredequipmentid_value: System.Guid;
		assistantname: string;
		address2_country: string;
		modifiedon: Date;
		externaluseridentifier: string;
		address2_name: string;
		creditonhold: boolean;
		address3_longitude: number;
		accountrolecode: number;
		address3_country: string;
		donotphone: boolean;
		address3_upszone: string;
		contactid: System.Guid;
		donotfax: boolean;
		aging30_base: number;
		_modifiedonbehalfby_value: System.Guid;
		salutation: string;
		suffix: string;
		address1_primarycontactname: string;
		business2: string;
		utcconversiontimezonecode: number;
		governmentid: string;
		address2_primarycontactname: string;
		address2_stateorprovince: string;
		donotsendmm: boolean;
		annualincome_base: number;
		address1_country: string;
		lastname: string;
		address2_city: string;
		donotemail: boolean;
		address3_postofficebox: string;
		address2_longitude: number;
		address1_stateorprovince: string;
		yomifirstname: string;
		telephone1: string;
		address1_line1: string;
		address2_composite: string;
		address2_county: string;
		shippingmethodcode: number;
		creditlimit: number;
		anniversary: Microsoft.OData.Edm.Library.Date;
		telephone2: string;
		_parentcontactid_value: System.Guid;
		educationcode: number;
		haschildrencode: number;
		isbackofficecustomer: boolean;
		fax: string;
		entityimage_url: string;
		address1_line3: string;
		creditlimit_base: number;
		address2_upszone: string;
		_defaultpricelevelid_value: System.Guid;
		middlename: string;
		address1_postalcode: string;
		address3_line3: string;
		callback: string;
		contactquotes_association: DG.Microsoft.Dynamics.CRM.quote[];
		listcontact_association: DG.Microsoft.Dynamics.CRM.list[];
		contactinvoices_association: DG.Microsoft.Dynamics.CRM.invoice[];
		contactorders_association: DG.Microsoft.Dynamics.CRM.salesorder[];
		servicecontractcontacts_association: DG.Microsoft.Dynamics.CRM.contract[];
		contactleads_association: DG.Microsoft.Dynamics.CRM.lead[];
		contact_entitlement_ContactId: DG.Microsoft.Dynamics.CRM.entitlement[];
		contact_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		opportunity_parent_contact: DG.Microsoft.Dynamics.CRM.opportunity[];
		Contact_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		Contact_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		contact_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		contact_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		socialactivity_postauthor_contacts: DG.Microsoft.Dynamics.CRM.socialactivity[];
		invoice_customer_contacts: DG.Microsoft.Dynamics.CRM.invoice[];
		quote_customer_contacts: DG.Microsoft.Dynamics.CRM.quote[];
		CreatedContact_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		Contact_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		Contact_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		entitlementcontacts_association: DG.Microsoft.Dynamics.CRM.entitlement[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		lead_customer_contacts: DG.Microsoft.Dynamics.CRM.lead[];
		Contact_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		masterid: DG.Microsoft.Dynamics.CRM.contact;
		contact_master_contact: DG.Microsoft.Dynamics.CRM.contact[];
		originatingleadid: DG.Microsoft.Dynamics.CRM.lead;
		Contact_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		Contact_Email_EmailSender: DG.Microsoft.Dynamics.CRM.email[];
		account_primary_contact: DG.Microsoft.Dynamics.CRM.account[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		contract_customer_contacts: DG.Microsoft.Dynamics.CRM.contract[];
		contract_billingcustomer_contacts: DG.Microsoft.Dynamics.CRM.contract[];
		contact_entitlement_Customer: DG.Microsoft.Dynamics.CRM.entitlement[];
		socialactivity_postauthoraccount_contacts: DG.Microsoft.Dynamics.CRM.socialactivity[];
		Socialprofile_customer_contacts: DG.Microsoft.Dynamics.CRM.socialprofile[];
		Contact_CustomerAddress: DG.Microsoft.Dynamics.CRM.customeraddress[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		incident_customer_contacts: DG.Microsoft.Dynamics.CRM.incident[];
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		parentcustomerid_account: DG.Microsoft.Dynamics.CRM.account;
		Contact_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		order_customer_contacts: DG.Microsoft.Dynamics.CRM.salesorder[];
		preferredsystemuserid: DG.Microsoft.Dynamics.CRM.systemuser;
		Contact_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		contact_as_primary_contact: DG.Microsoft.Dynamics.CRM.incident[];
		preferredserviceid: DG.Microsoft.Dynamics.CRM.service;
		contact_as_responsible_contact: DG.Microsoft.Dynamics.CRM.incident[];
		Contact_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		lead_parent_contact: DG.Microsoft.Dynamics.CRM.lead[];
		preferredequipmentid: DG.Microsoft.Dynamics.CRM.equipment;
		Contact_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		SourceContact_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		Contact_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		Contact_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		parentcustomerid_contact: DG.Microsoft.Dynamics.CRM.contact;
		contact_customer_contacts: DG.Microsoft.Dynamics.CRM.contact[];
		contact_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		Contact_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		contractlineitem_customer_contacts: DG.Microsoft.Dynamics.CRM.contractdetail[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		Contact_Emails: DG.Microsoft.Dynamics.CRM.email[];
		opportunity_customer_contacts: DG.Microsoft.Dynamics.CRM.opportunity[];
		defaultpricelevelid: DG.Microsoft.Dynamics.CRM.pricelevel;
		contact_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		Contact_Letters: DG.Microsoft.Dynamics.CRM.letter[];
	}
	interface quote extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		statuscode: number;
		billto_stateorprovince: string;
		processid: System.Guid;
		stageid: System.Guid;
		quotenumber: string;
		billto_composite: string;
		billto_line1: string;
		_modifiedonbehalfby_value: System.Guid;
		timezoneruleversionnumber: number;
		_createdonbehalfby_value: System.Guid;
		billto_fax: string;
		shipto_addressid: System.Guid;
		shipto_composite: string;
		shipto_country: string;
		_transactioncurrencyid_value: System.Guid;
		totallineitemamount: number;
		requestdeliveryby: Date;
		_owninguser_value: System.Guid;
		_customerid_value: System.Guid;
		billto_contactname: string;
		utcconversiontimezonecode: number;
		_pricelevelid_value: System.Guid;
		shipto_name: string;
		totalamount: number;
		_contactid_value: System.Guid;
		freightamount: number;
		billto_telephone: string;
		totallineitemamount_base: number;
		description: string;
		totaldiscountamount: number;
		_accountid_value: System.Guid;
		_opportunityid_value: System.Guid;
		shipto_line1: string;
		billto_addressid: System.Guid;
		modifiedon: Date;
		effectiveto: Date;
		shipto_city: string;
		billto_name: string;
		expireson: Microsoft.OData.Edm.Library.Date;
		totalamountlessfreight: number;
		willcall: boolean;
		closedon: Microsoft.OData.Edm.Library.Date;
		createdon: Date;
		freightamount_base: number;
		totaltax: number;
		shipto_telephone: string;
		totaltax_base: number;
		statecode: number;
		traversedpath: string;
		billto_postalcode: string;
		billto_city: string;
		_ownerid_value: System.Guid;
		pricingerrorcode: number;
		quoteid: System.Guid;
		totalamountlessfreight_base: number;
		discountpercentage: number;
		shipto_freighttermscode: number;
		discountamount: number;
		shipto_line3: string;
		billto_line3: string;
		billto_line2: string;
		effectivefrom: Date;
		importsequencenumber: number;
		shipto_contactname: string;
		_createdby_value: System.Guid;
		revisionnumber: number;
		_owningteam_value: System.Guid;
		discountamount_base: number;
		shipto_stateorprovince: string;
		shipto_postalcode: string;
		totalamount_base: number;
		_owningbusinessunit_value: System.Guid;
		versionnumber: number;
		_modifiedby_value: System.Guid;
		totallineitemdiscountamount_base: number;
		totallineitemdiscountamount: number;
		overriddencreatedon: Date;
		shipto_line2: string;
		paymenttermscode: number;
		shipto_fax: string;
		exchangerate: number;
		name: string;
		totaldiscountamount_base: number;
		_campaignid_value: System.Guid;
		shippingmethodcode: number;
		billto_country: string;
		freighttermscode: number;
		contactquotes_association: DG.Microsoft.Dynamics.CRM.contact[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		Quote_SharepointDocumentLocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		Quote_QuoteClose: DG.Microsoft.Dynamics.CRM.quoteclose[];
		customerid_contact: DG.Microsoft.Dynamics.CRM.contact;
		quote_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		quote_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		Quote_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		Quote_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		Quote_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		Quote_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		Quote_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		quote_orders: DG.Microsoft.Dynamics.CRM.salesorder[];
		Quote_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		pricelevelid: DG.Microsoft.Dynamics.CRM.pricelevel;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		Quote_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		customerid_account: DG.Microsoft.Dynamics.CRM.account;
		quote_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		Quote_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		Quote_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		Quote_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Quote_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		Quote_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		quote_details: DG.Microsoft.Dynamics.CRM.quotedetail[];
		Quote_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		opportunityid: DG.Microsoft.Dynamics.CRM.opportunity;
		Quote_Emails: DG.Microsoft.Dynamics.CRM.email[];
		campaignid: DG.Microsoft.Dynamics.CRM.campaign;
		Quote_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
	}
	interface systemuser extends DG.Microsoft.Dynamics.CRM.principal {
		_queueid_value: System.Guid;
		_createdby_value: System.Guid;
		preferredaddresscode: number;
		nickname: string;
		stageid: System.Guid;
		isemailaddressapprovedbyo365admin: boolean;
		address1_latitude: number;
		address2_stateorprovince: string;
		address1_county: string;
		versionnumber: number;
		address2_country: string;
		address2_postofficebox: string;
		preferredphonecode: number;
		yammeruserid: string;
		title: string;
		setupuser: boolean;
		firstname: string;
		employeeid: string;
		_territoryid_value: System.Guid;
		jobtitle: string;
		skills: string;
		internalemailaddress: string;
		isintegrationuser: boolean;
		address2_composite: string;
		address1_postalcode: string;
		entityimage: number[];
		address2_addressid: System.Guid;
		windowsliveid: string;
		address1_line3: string;
		disabledreason: string;
		address2_utcoffset: number;
		address1_line2: string;
		address1_city: string;
		personalemailaddress: string;
		userlicensetype: number;
		address1_telephone2: string;
		_createdonbehalfby_value: System.Guid;
		_businessunitid_value: System.Guid;
		address1_longitude: number;
		sharepointemailaddress: string;
		organizationid: System.Guid;
		yomifirstname: string;
		exchangerate: number;
		address1_shippingmethodcode: number;
		yomimiddlename: string;
		address2_line2: string;
		defaultfilterspopulated: boolean;
		address1_line1: string;
		address1_telephone1: string;
		defaultodbfoldername: string;
		systemuserid: System.Guid;
		traversedpath: string;
		address1_country: string;
		caltype: number;
		yomilastname: string;
		address2_latitude: number;
		mobilephone: string;
		address2_fax: string;
		lastname: string;
		address1_composite: string;
		accessmode: number;
		entityimage_timestamp: number;
		yomifullname: string;
		photourl: string;
		_siteid_value: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		isdisabled: boolean;
		domainname: string;
		passportlo: number;
		_mobileofflineprofileid_value: System.Guid;
		address1_name: string;
		address2_telephone2: string;
		emailrouteraccessapproval: number;
		_parentsystemuserid_value: System.Guid;
		fullname: string;
		address2_longitude: number;
		salutation: string;
		yammeremailaddress: string;
		address2_city: string;
		middlename: string;
		entityimageid: System.Guid;
		address1_addresstypecode: number;
		address2_county: string;
		address2_line1: string;
		address2_upszone: string;
		address1_utcoffset: number;
		_positionid_value: System.Guid;
		address2_shippingmethodcode: number;
		passporthi: number;
		invitestatuscode: number;
		address1_telephone3: string;
		address2_postalcode: string;
		address2_telephone1: string;
		entityimage_url: string;
		islicensed: boolean;
		processid: System.Guid;
		governmentid: string;
		_modifiedonbehalfby_value: System.Guid;
		address2_line3: string;
		issyncwithdirectory: boolean;
		utcconversiontimezonecode: number;
		modifiedon: Date;
		_modifiedby_value: System.Guid;
		homephone: string;
		preferredemailcode: number;
		address2_name: string;
		overriddencreatedon: Date;
		address1_upszone: string;
		importsequencenumber: number;
		address1_addressid: System.Guid;
		outgoingemaildeliverymethod: number;
		mobilealertemail: string;
		_calendarid_value: System.Guid;
		address2_addresstypecode: number;
		address1_fax: string;
		createdon: Date;
		address2_telephone3: string;
		address1_postofficebox: string;
		incomingemaildeliverymethod: number;
		_defaultmailbox_value: System.Guid;
		address1_stateorprovince: string;
		displayinserviceviews: boolean;
		timezoneruleversionnumber: number;
		systemuserroles_association: DG.Microsoft.Dynamics.CRM.role[];
		teammembership_association: DG.Microsoft.Dynamics.CRM.team[];
		user_exchangesyncidmapping: DG.Microsoft.Dynamics.CRM.exchangesyncidmapping[];
		lk_theme_createdby: DG.Microsoft.Dynamics.CRM.theme[];
		lk_theme_createdonbehalfby: DG.Microsoft.Dynamics.CRM.theme[];
		lk_theme_modifiedby: DG.Microsoft.Dynamics.CRM.theme[];
		lk_theme_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.theme[];
		lk_ProductSubstitute_createdby: DG.Microsoft.Dynamics.CRM.productsubstitute[];
		lk_ProductSubstitute_createdonbehalfby: DG.Microsoft.Dynamics.CRM.productsubstitute[];
		lk_ProductSubstitute_modifiedby: DG.Microsoft.Dynamics.CRM.productsubstitute[];
		lk_ProductSubstitute_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.productsubstitute[];
		lk_knowledgearticle_createdby: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		lk_knowledgearticle_createdonbehalfby: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		lk_knowledgearticle_modifiedby: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		lk_knowledgearticle_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		user_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		user_sharepointsite: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		user_sharepointdocumentlocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		lk_entitlement_createdby: DG.Microsoft.Dynamics.CRM.entitlement[];
		lk_entitlement_createdonbehalfby: DG.Microsoft.Dynamics.CRM.entitlement[];
		lk_entitlement_modifiedby: DG.Microsoft.Dynamics.CRM.entitlement[];
		lk_entitlement_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.entitlement[];
		user_entitlement: DG.Microsoft.Dynamics.CRM.entitlement[];
		lk_entitlementchannel_createdby: DG.Microsoft.Dynamics.CRM.entitlementchannel[];
		lk_entitlementchannel_createdonbehalfby: DG.Microsoft.Dynamics.CRM.entitlementchannel[];
		lk_entitlementchannel_modifiedby: DG.Microsoft.Dynamics.CRM.entitlementchannel[];
		lk_entitlementchannel_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.entitlementchannel[];
		lk_entitlementtemplate_createdby: DG.Microsoft.Dynamics.CRM.entitlementtemplate[];
		lk_entitlementtemplate_createdonbehalfby: DG.Microsoft.Dynamics.CRM.entitlementtemplate[];
		lk_entitlementtemplate_modifiedby: DG.Microsoft.Dynamics.CRM.entitlementtemplate[];
		lk_entitlementtemplate_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.entitlementtemplate[];
		lk_goal_createdby: DG.Microsoft.Dynamics.CRM.goal[];
		lk_goal_createdonbehalfby: DG.Microsoft.Dynamics.CRM.goal[];
		lk_goal_modifiedby: DG.Microsoft.Dynamics.CRM.goal[];
		lk_goal_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.goal[];
		user_goal: DG.Microsoft.Dynamics.CRM.goal[];
		user_goal_goalowner: DG.Microsoft.Dynamics.CRM.goal[];
		lk_metric_createdby: DG.Microsoft.Dynamics.CRM.metric[];
		lk_metric_createdonbehalfby: DG.Microsoft.Dynamics.CRM.metric[];
		lk_metric_modifiedby: DG.Microsoft.Dynamics.CRM.metric[];
		lk_metric_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.metric[];
		lk_goalrollupquery_createdby: DG.Microsoft.Dynamics.CRM.goalrollupquery[];
		lk_goalrollupquery_createdonbehalfby: DG.Microsoft.Dynamics.CRM.goalrollupquery[];
		lk_goalrollupquery_modifiedby: DG.Microsoft.Dynamics.CRM.goalrollupquery[];
		lk_goalrollupquery_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.goalrollupquery[];
		lk_emailserverprofile_createdonbehalfby: DG.Microsoft.Dynamics.CRM.emailserverprofile[];
		lk_emailserverprofile_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.emailserverprofile[];
		lk_mailbox_createdby: DG.Microsoft.Dynamics.CRM.mailbox[];
		lk_mailbox_createdonbehalfby: DG.Microsoft.Dynamics.CRM.mailbox[];
		lk_mailbox_modifiedby: DG.Microsoft.Dynamics.CRM.mailbox[];
		lk_mailbox_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.mailbox[];
		user_mailbox: DG.Microsoft.Dynamics.CRM.mailbox[];
		mailbox_regarding_systemuser: DG.Microsoft.Dynamics.CRM.mailbox[];
		defaultmailbox: DG.Microsoft.Dynamics.CRM.mailbox;
		lk_post_createdby: DG.Microsoft.Dynamics.CRM.post[];
		lk_post_createdonbehalfby: DG.Microsoft.Dynamics.CRM.post[];
		lk_post_modifiedby: DG.Microsoft.Dynamics.CRM.post[];
		lk_post_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.post[];
		lk_position_createdby: DG.Microsoft.Dynamics.CRM.position[];
		lk_position_createdonbehalfby: DG.Microsoft.Dynamics.CRM.position[];
		lk_position_modifiedby: DG.Microsoft.Dynamics.CRM.position[];
		lk_position_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.position[];
		positionid: DG.Microsoft.Dynamics.CRM.position;
		lk_solution_createdby: DG.Microsoft.Dynamics.CRM.solution[];
		lk_solution_modifiedby: DG.Microsoft.Dynamics.CRM.solution[];
		lk_publisher_createdby: DG.Microsoft.Dynamics.CRM.publisher[];
		lk_publisher_modifiedby: DG.Microsoft.Dynamics.CRM.publisher[];
		lk_officegraphdocument_createdonbehalfby: DG.Microsoft.Dynamics.CRM.officegraphdocument[];
		lk_officegraphdocument_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.officegraphdocument[];
		lk_similarityrule_createdonbehalfby: DG.Microsoft.Dynamics.CRM.similarityrule[];
		lk_similarityrule_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.similarityrule[];
		lk_KnowledgeBaseRecord_createdby: DG.Microsoft.Dynamics.CRM.knowledgebaserecord[];
		lk_KnowledgeBaseRecord_createdonbehalfby: DG.Microsoft.Dynamics.CRM.knowledgebaserecord[];
		lk_KnowledgeBaseRecord_modifiedby: DG.Microsoft.Dynamics.CRM.knowledgebaserecord[];
		lk_KnowledgeBaseRecord_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.knowledgebaserecord[];
		lk_monthlyfiscalcalendar_modifiedby: DG.Microsoft.Dynamics.CRM.monthlyfiscalcalendar[];
		lk_quoteclose_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.quoteclose[];
		lk_slakpiinstancebase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.slakpiinstance[];
		lk_mobileofflineprofileitemassocaition_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitemassociation[];
		lk_userqueryvisualizationbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.userqueryvisualization[];
		lk_equipment_modifiedby: DG.Microsoft.Dynamics.CRM.equipment[];
		SystemUser_Campaigns: DG.Microsoft.Dynamics.CRM.campaign[];
		lk_quotedetailbase_createdby: DG.Microsoft.Dynamics.CRM.quotedetail[];
		SystemUser_SyncError: DG.Microsoft.Dynamics.CRM.syncerror[];
		SystemUser_ImportData: DG.Microsoft.Dynamics.CRM.importdata[];
		lk_salesorderbase_modifiedby: DG.Microsoft.Dynamics.CRM.salesorder[];
		lk_fieldsecurityprofile_createdonbehalfby: DG.Microsoft.Dynamics.CRM.fieldsecurityprofile[];
		lk_importbase_createdby: DG.Microsoft.Dynamics.CRM.import[];
		lk_slaitembase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.slaitem[];
		lk_invoicedetailbase_modifiedby: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		createdby_sdkmessage: DG.Microsoft.Dynamics.CRM.sdkmessage[];
		lk_knowledgearticleincident_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.knowledgearticleincident[];
		lk_duplicaterule_createdonbehalfby: DG.Microsoft.Dynamics.CRM.duplicaterule[];
		system_user_quotes: DG.Microsoft.Dynamics.CRM.quote[];
		lk_territory_createdonbehalfby: DG.Microsoft.Dynamics.CRM.territory[];
		lk_discounttype_createdonbehalfby: DG.Microsoft.Dynamics.CRM.discounttype[];
		lk_knowledgearticleincident_createdonbehalfby: DG.Microsoft.Dynamics.CRM.knowledgearticleincident[];
		lk_monthlyfiscalcalendar_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.monthlyfiscalcalendar[];
		lk_incidentbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.incident[];
		lk_contracttemplatebase_createdby: DG.Microsoft.Dynamics.CRM.contracttemplate[];
		lk_kbarticletemplatebase_createdby: DG.Microsoft.Dynamics.CRM.kbarticletemplate[];
		lk_knowledgesearchmodel_createdby: DG.Microsoft.Dynamics.CRM.knowledgesearchmodel[];
		lk_savedquerybase_modifiedby: DG.Microsoft.Dynamics.CRM.savedquery[];
		lk_teamtemplate_createdby: DG.Microsoft.Dynamics.CRM.teamtemplate[];
		lk_accountbase_createdby: DG.Microsoft.Dynamics.CRM.account[];
		lk_salesliteratureitembase_createdby: DG.Microsoft.Dynamics.CRM.salesliteratureitem[];
		lk_invoicedetail_createdonbehalfby: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		lk_opportunityproductbase_createdby: DG.Microsoft.Dynamics.CRM.opportunityproduct[];
		lk_discounttypebase_createdby: DG.Microsoft.Dynamics.CRM.discounttype[];
		createdby_pluginassembly: DG.Microsoft.Dynamics.CRM.pluginassembly[];
		lk_kbarticle_createdonbehalfby: DG.Microsoft.Dynamics.CRM.kbarticle[];
		user_userform: DG.Microsoft.Dynamics.CRM.userform[];
		lk_organization_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.organization[];
		lk_listmember_createdonbehalfby: DG.Microsoft.Dynamics.CRM.listmember[];
		lk_knowledgesearchmodel_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.knowledgesearchmodel[];
		system_user_service_contracts: DG.Microsoft.Dynamics.CRM.contract[];
		lk_solutionbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.solution[];
		lk_BulkOperation_createdby: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		lk_timezonerule_createdby: DG.Microsoft.Dynamics.CRM.timezonerule[];
		lk_productpricelevel_createdonbehalfby: DG.Microsoft.Dynamics.CRM.productpricelevel[];
		modifiedby_connection: DG.Microsoft.Dynamics.CRM.connection[];
		systemuser_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		lk_report_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.report[];
		lk_tracelog_createdby: DG.Microsoft.Dynamics.CRM.tracelog[];
		lk_contractdetail_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.contractdetail[];
		lk_calendar_createdonbehalfby: DG.Microsoft.Dynamics.CRM.calendar[];
		lk_activitypointer_createdby: DG.Microsoft.Dynamics.CRM.activitypointer[];
		lk_queueitembase_createdby: DG.Microsoft.Dynamics.CRM.queueitem[];
		lk_annotationbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.annotation[];
		lk_lead_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.lead[];
		lk_slakpiinstancebase_createdby: DG.Microsoft.Dynamics.CRM.slakpiinstance[];
		lk_constraintbasedgroup_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.constraintbasedgroup[];
		lk_invoicedetail_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		lk_role_createdonbehalfby: DG.Microsoft.Dynamics.CRM.role[];
		lk_orderclose_createdonbehalfby: DG.Microsoft.Dynamics.CRM.orderclose[];
		lk_socialactivitybase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.socialactivity[];
		user_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		lk_customeraddress_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.customeraddress[];
		lk_businessunitbase_modifiedby: DG.Microsoft.Dynamics.CRM.businessunit[];
		modifiedby_plugintype: DG.Microsoft.Dynamics.CRM.plugintype[];
		lk_contracttemplate_createdonbehalfby: DG.Microsoft.Dynamics.CRM.contracttemplate[];
		lk_timezonelocalizedname_createdonbehalfby: DG.Microsoft.Dynamics.CRM.timezonelocalizedname[];
		lk_sdkmessageprocessingstepimage_createdonbehalfby: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepimage[];
		createdby_connection: DG.Microsoft.Dynamics.CRM.connection[];
		lk_savedqueryvisualizationbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.savedqueryvisualization[];
		lk_importdatabase_modifiedby: DG.Microsoft.Dynamics.CRM.importdata[];
		lk_recommendationmodel_createdonbehalfby: DG.Microsoft.Dynamics.CRM.recommendationmodel[];
		workflow_createdonbehalfby: DG.Microsoft.Dynamics.CRM.workflow[];
		lk_slabase_createdby: DG.Microsoft.Dynamics.CRM.sla[];
		systemuser_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		modifiedby_connection_role: DG.Microsoft.Dynamics.CRM.connectionrole[];
		lk_competitorbase_modifiedby: DG.Microsoft.Dynamics.CRM.competitor[];
		lk_serviceendpointbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.serviceendpoint[];
		lk_invoicebase_modifiedby: DG.Microsoft.Dynamics.CRM.invoice[];
		modifiedby_sdkmessageprocessingstepimage: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepimage[];
		lk_importentitymapping_modifiedby: DG.Microsoft.Dynamics.CRM.importentitymapping[];
		lk_competitorbase_createdby: DG.Microsoft.Dynamics.CRM.competitor[];
		lk_slabase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.sla[];
		lk_sitebase_createdby: DG.Microsoft.Dynamics.CRM.site[];
		lk_accountbase_modifiedby: DG.Microsoft.Dynamics.CRM.account[];
		lk_PostFollow_createdby: DG.Microsoft.Dynamics.CRM.postfollow[];
		systemuser_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		systemuser_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		lk_postcomment_createdby: DG.Microsoft.Dynamics.CRM.postcomment[];
		user_owner_postfollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		lk_postfollow_createdonbehalfby: DG.Microsoft.Dynamics.CRM.postfollow[];
		lk_postcomment_createdonbehalfby: DG.Microsoft.Dynamics.CRM.postcomment[];
		lk_postlike_createdonbehalfby: DG.Microsoft.Dynamics.CRM.postlike[];
		lk_postlike_createdby: DG.Microsoft.Dynamics.CRM.postlike[];
		lk_calendar_modifiedby: DG.Microsoft.Dynamics.CRM.calendar[];
		lk_sharepointdocumentlocationbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		lk_quarterlyfiscalcalendar_createdonbehalfby: DG.Microsoft.Dynamics.CRM.quarterlyfiscalcalendar[];
		lk_timezonedefinition_modifiedby: DG.Microsoft.Dynamics.CRM.timezonedefinition[];
		lk_site_createdonbehalfby: DG.Microsoft.Dynamics.CRM.site[];
		lk_salesorderdetail_createdonbehalfby: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		lk_templatebase_createdby: DG.Microsoft.Dynamics.CRM.template[];
		lk_plugintracelogbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.plugintracelog[];
		lk_workflowlog_createdonbehalfby: DG.Microsoft.Dynamics.CRM.workflowlog[];
		lk_userqueryvisualizationbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.userqueryvisualization[];
		lk_bulkdeleteoperationbase_modifiedby: DG.Microsoft.Dynamics.CRM.bulkdeleteoperation[];
		lk_entitlementtemplatechannel_createdby: DG.Microsoft.Dynamics.CRM.entitlementtemplatechannel[];
		lk_sharepointsitebase_modifiedby: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		lk_report_createdonbehalfby: DG.Microsoft.Dynamics.CRM.report[];
		lk_competitoraddressbase_createdby: DG.Microsoft.Dynamics.CRM.competitoraddress[];
		createdby_plugintracelog: DG.Microsoft.Dynamics.CRM.plugintracelog[];
		lk_monthlyfiscalcalendar_salespersonid: DG.Microsoft.Dynamics.CRM.monthlyfiscalcalendar[];
		lk_tracelog_modifiedby: DG.Microsoft.Dynamics.CRM.tracelog[];
		lk_duplicaterule_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.duplicaterule[];
		lk_resourcespec_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.resourcespec[];
		lk_savedquery_createdonbehalfby: DG.Microsoft.Dynamics.CRM.savedquery[];
		lk_mobileofflineprofileitemassocaition_modifiedby: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitemassociation[];
		lk_queueitembase_modifiedby: DG.Microsoft.Dynamics.CRM.queueitem[];
		lk_rolebase_modifiedby: DG.Microsoft.Dynamics.CRM.role[];
		lk_knowledgesearchmodel_createdonbehalfby: DG.Microsoft.Dynamics.CRM.knowledgesearchmodel[];
		lk_sdkmessageprocessingstep_createdonbehalfby: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		lk_uombase_createdby: DG.Microsoft.Dynamics.CRM.uom[];
		lk_recommendationmodelversion_createdby: DG.Microsoft.Dynamics.CRM.recommendationmodelversion[];
		system_user_invoicedetail: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		lk_importjobbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.importjob[];
		createdby_sdkmessageprocessingstepimage: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepimage[];
		system_user_orders: DG.Microsoft.Dynamics.CRM.salesorder[];
		lk_businessunit_createdonbehalfby: DG.Microsoft.Dynamics.CRM.businessunit[];
		lk_customcontrol_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.customcontrol[];
		lk_recommendationmodelversion_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.recommendationmodelversion[];
		createdby_serviceendpoint: DG.Microsoft.Dynamics.CRM.serviceendpoint[];
		lk_socialactivitybase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.socialactivity[];
		lk_discounttype_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.discounttype[];
		lk_letter_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.letter[];
		lk_timezonerule_createdonbehalfby: DG.Microsoft.Dynamics.CRM.timezonerule[];
		lk_personaldocumenttemplatebase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.personaldocumenttemplate[];
		lk_uomschedulebase_modifiedby: DG.Microsoft.Dynamics.CRM.uomschedule[];
		lk_teamtemplate_createdonbehalfby: DG.Microsoft.Dynamics.CRM.teamtemplate[];
		SystemUser_ImportLogs: DG.Microsoft.Dynamics.CRM.importlog[];
		lk_recommendationmodel_modifiedby: DG.Microsoft.Dynamics.CRM.recommendationmodel[];
		lk_teamtemplate_modifiedby: DG.Microsoft.Dynamics.CRM.teamtemplate[];
		lk_incidentresolution_createdonbehalfby: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		lk_timezonedefinition_createdonbehalfby: DG.Microsoft.Dynamics.CRM.timezonedefinition[];
		lk_reportcategory_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.reportcategory[];
		webresource_modifiedby: DG.Microsoft.Dynamics.CRM.webresource[];
		lk_reportcategorybase_createdby: DG.Microsoft.Dynamics.CRM.reportcategory[];
		lk_serviceappointment_createdonbehalfby: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		lk_entitlementtemplatechannel_modifiedby: DG.Microsoft.Dynamics.CRM.entitlementtemplatechannel[];
		lk_userquery_modifiedby: DG.Microsoft.Dynamics.CRM.userquery[];
		lk_list_createdonbehalfby: DG.Microsoft.Dynamics.CRM.list[];
		lk_customcontrol_createdby: DG.Microsoft.Dynamics.CRM.customcontrol[];
		lk_quote_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.quote[];
		lk_resourcespec_createdonbehalfby: DG.Microsoft.Dynamics.CRM.resourcespec[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		lk_systemuser_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser[];
		lk_importlogbase_createdby: DG.Microsoft.Dynamics.CRM.importlog[];
		lk_azureserviceconnection_modifiedby: DG.Microsoft.Dynamics.CRM.azureserviceconnection[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		lk_systemuserbase_createdby: DG.Microsoft.Dynamics.CRM.systemuser[];
		lk_sharepointdocumentlocationbase_modifiedby: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		lk_queueitembase_workerid: DG.Microsoft.Dynamics.CRM.queueitem[];
		lk_solutioncomponentbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.solutioncomponent[];
		lk_productbase_createdby: DG.Microsoft.Dynamics.CRM.product[];
		systemuserprofiles_association: DG.Microsoft.Dynamics.CRM.fieldsecurityprofile[];
		lk_semiannualfiscalcalendar_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.semiannualfiscalcalendar[];
		lk_publisherbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.publisher[];
		lk_constraintbasedgroup_createdby: DG.Microsoft.Dynamics.CRM.constraintbasedgroup[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		lk_importlog_createdonbehalfby: DG.Microsoft.Dynamics.CRM.importlog[];
		lk_importdata_createdonbehalfby: DG.Microsoft.Dynamics.CRM.importdata[];
		lk_competitoraddressbase_modifiedby: DG.Microsoft.Dynamics.CRM.competitoraddress[];
		system_user_territories: DG.Microsoft.Dynamics.CRM.territory[];
		lk_azureserviceconnection_createdonbehalfby: DG.Microsoft.Dynamics.CRM.azureserviceconnection[];
		lk_letter_createdonbehalfby: DG.Microsoft.Dynamics.CRM.letter[];
		opportunity_owning_user: DG.Microsoft.Dynamics.CRM.opportunity[];
		lk_campaignactivity_createdby: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		modifiedby_serviceendpoint: DG.Microsoft.Dynamics.CRM.serviceendpoint[];
		lk_listmember_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.listmember[];
		lk_annualfiscalcalendar_modifiedby: DG.Microsoft.Dynamics.CRM.annualfiscalcalendar[];
		lk_importmap_createdonbehalfby: DG.Microsoft.Dynamics.CRM.importmap[];
		lk_knowledgearticleincident_createdby: DG.Microsoft.Dynamics.CRM.knowledgearticleincident[];
		lk_knowledgearticleviews_createdonbehalfby: DG.Microsoft.Dynamics.CRM.knowledgearticleviews[];
		lk_mobileofflineprofileitem_createdonbehalfby: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitem[];
		lk_annotationbase_createdby: DG.Microsoft.Dynamics.CRM.annotation[];
		lk_listmember_modifiedby: DG.Microsoft.Dynamics.CRM.listmember[];
		lk_plugintype_createdonbehalfby: DG.Microsoft.Dynamics.CRM.plugintype[];
		lk_lead_createdonbehalfby: DG.Microsoft.Dynamics.CRM.lead[];
		lk_campaign_createdby: DG.Microsoft.Dynamics.CRM.campaign[];
		lk_pricelevel_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.pricelevel[];
		createdby_connection_role: DG.Microsoft.Dynamics.CRM.connectionrole[];
		lk_customeraddressbase_createdby: DG.Microsoft.Dynamics.CRM.customeraddress[];
		lk_timezonedefinition_createdby: DG.Microsoft.Dynamics.CRM.timezonedefinition[];
		lk_documenttemplatebase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.documenttemplate[];
		lk_contractdetail_createdonbehalfby: DG.Microsoft.Dynamics.CRM.contractdetail[];
		lk_competitoraddress_createdonbehalfby: DG.Microsoft.Dynamics.CRM.competitoraddress[];
		lk_recurringappointmentmaster_createdonbehalfby: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		lk_personaldocumenttemplatebase_createdby: DG.Microsoft.Dynamics.CRM.personaldocumenttemplate[];
		lk_semiannualfiscalcalendar_createdonbehalfby: DG.Microsoft.Dynamics.CRM.semiannualfiscalcalendar[];
		SystemUser_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		lk_recurringappointmentmaster_createdby: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		lk_sitebase_modifiedby: DG.Microsoft.Dynamics.CRM.site[];
		system_user_service_appointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		lk_sharepointsitebase_createdby: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		lk_phonecall_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.phonecall[];
		lk_kbarticlecommentbase_createdby: DG.Microsoft.Dynamics.CRM.kbarticlecomment[];
		lk_quarterlyfiscalcalendar_modifiedby: DG.Microsoft.Dynamics.CRM.quarterlyfiscalcalendar[];
		lk_solutioncomponentbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.solutioncomponent[];
		lk_role_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.role[];
		lk_territorybase_createdby: DG.Microsoft.Dynamics.CRM.territory[];
		lk_duplicaterulebase_modifiedby: DG.Microsoft.Dynamics.CRM.duplicaterule[];
		lk_subjectbase_createdby: DG.Microsoft.Dynamics.CRM.subject[];
		lk_contact_createdonbehalfby: DG.Microsoft.Dynamics.CRM.contact[];
		lk_semiannualfiscalcalendar_createdby: DG.Microsoft.Dynamics.CRM.semiannualfiscalcalendar[];
		lk_SocialProfile_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.socialprofile[];
		lk_quoteclose_createdonbehalfby: DG.Microsoft.Dynamics.CRM.quoteclose[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		lk_systemuserbase_modifiedby: DG.Microsoft.Dynamics.CRM.systemuser[];
		lk_knowledgearticleviews_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.knowledgearticleviews[];
		systemuser_resources: DG.Microsoft.Dynamics.CRM.resource[];
		lk_uomschedulebase_createdby: DG.Microsoft.Dynamics.CRM.uomschedule[];
		lk_territory_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.territory[];
		lk_importentitymapping_createdby: DG.Microsoft.Dynamics.CRM.importentitymapping[];
		lk_kbarticlecomment_createdonbehalfby: DG.Microsoft.Dynamics.CRM.kbarticlecomment[];
		lk_team_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.team[];
		lk_pricelevel_createdonbehalfby: DG.Microsoft.Dynamics.CRM.pricelevel[];
		lk_teamtemplate_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.teamtemplate[];
		lk_fax_createdby: DG.Microsoft.Dynamics.CRM.fax[];
		lk_publisheraddressbase_createdby: DG.Microsoft.Dynamics.CRM.publisheraddress[];
		lk_topicmodelexecutionhistory_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.topicmodelexecutionhistory[];
		lk_templatebase_modifiedby: DG.Microsoft.Dynamics.CRM.template[];
		lk_opportunityproductbase_modifiedby: DG.Microsoft.Dynamics.CRM.opportunityproduct[];
		user_activity: DG.Microsoft.Dynamics.CRM.activitypointer[];
		lk_MobileOfflineProfile_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.mobileofflineprofile[];
		lk_fax_createdonbehalfby: DG.Microsoft.Dynamics.CRM.fax[];
		SystemUser_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		organizationid_organization: DG.Microsoft.Dynamics.CRM.organization;
		lk_customeraddress_createdonbehalfby: DG.Microsoft.Dynamics.CRM.customeraddress[];
		lk_calendarrule_modifiedby: DG.Microsoft.Dynamics.CRM.calendarrule[];
		system_user_accounts: DG.Microsoft.Dynamics.CRM.account[];
		lk_savedqueryvisualizationbase_createdby: DG.Microsoft.Dynamics.CRM.savedqueryvisualization[];
		lk_salesorder_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.salesorder[];
		lk_connectionbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.connection[];
		impersonatinguserid_sdkmessageprocessingstep: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		lk_userquery_createdonbehalfby: DG.Microsoft.Dynamics.CRM.userquery[];
		lk_opportunity_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.opportunity[];
		lk_accountbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.account[];
		lk_publisheraddressbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.publisheraddress[];
		lk_userqueryvisualization_modifiedby: DG.Microsoft.Dynamics.CRM.userqueryvisualization[];
		lk_connectionrolebase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.connectionrole[];
		lk_calendar_createdby: DG.Microsoft.Dynamics.CRM.calendar[];
		user_list: DG.Microsoft.Dynamics.CRM.list[];
		lead_owning_user: DG.Microsoft.Dynamics.CRM.lead[];
		lk_territorybase_modifiedby: DG.Microsoft.Dynamics.CRM.territory[];
		annotation_owning_user: DG.Microsoft.Dynamics.CRM.annotation[];
		lk_campaign_modifiedby: DG.Microsoft.Dynamics.CRM.campaign[];
		calendarid: DG.Microsoft.Dynamics.CRM.calendar;
		lk_tracelog_createdonbehalfby: DG.Microsoft.Dynamics.CRM.tracelog[];
		lk_asyncoperation_createdby: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		lk_service_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.service[];
		SystemUser_Imports: DG.Microsoft.Dynamics.CRM.import[];
		system_user_invoices: DG.Microsoft.Dynamics.CRM.invoice[];
		lk_transactioncurrency_createdonbehalfby: DG.Microsoft.Dynamics.CRM.transactioncurrency[];
		system_user_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		lk_emailserverprofile_createdby: DG.Microsoft.Dynamics.CRM.emailserverprofile[];
		lk_slaitembase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.slaitem[];
		lk_businessunitnewsarticlebase_createdby: DG.Microsoft.Dynamics.CRM.businessunitnewsarticle[];
		lk_pluginassembly_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.pluginassembly[];
		lk_topicmodel_createdby: DG.Microsoft.Dynamics.CRM.topicmodel[];
		lk_contact_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.contact[];
		lk_list_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.list[];
		lk_subjectbase_modifiedby: DG.Microsoft.Dynamics.CRM.subject[];
		lk_knowledgesearchmodel_modifiedby: DG.Microsoft.Dynamics.CRM.knowledgesearchmodel[];
		lk_phonecall_createdby: DG.Microsoft.Dynamics.CRM.phonecall[];
		lk_campaign_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.campaign[];
		lk_quarterlyfiscalcalendar_createdby: DG.Microsoft.Dynamics.CRM.quarterlyfiscalcalendar[];
		lk_tracelog_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.tracelog[];
		lk_subject_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.subject[];
		lk_customcontrolresource_createdby: DG.Microsoft.Dynamics.CRM.customcontrolresource[];
		lk_fixedmonthlyfiscalcalendar_createdonbehalfby: DG.Microsoft.Dynamics.CRM.fixedmonthlyfiscalcalendar[];
		modifiedby_sdkmessagefilter: DG.Microsoft.Dynamics.CRM.sdkmessagefilter[];
		lk_quotedetail_createdonbehalfby: DG.Microsoft.Dynamics.CRM.quotedetail[];
		lk_sharepointsitebase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		lk_reportcategory_createdonbehalfby: DG.Microsoft.Dynamics.CRM.reportcategory[];
		lk_service_modifiedby: DG.Microsoft.Dynamics.CRM.service[];
		lk_salesliteraturebase_modifiedby: DG.Microsoft.Dynamics.CRM.salesliterature[];
		lk_templatebase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.template[];
		user_email: DG.Microsoft.Dynamics.CRM.email[];
		user_fax: DG.Microsoft.Dynamics.CRM.fax[];
		lk_contactbase_createdby: DG.Microsoft.Dynamics.CRM.contact[];
		lk_timezonelocalizedname_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.timezonelocalizedname[];
		lk_email_modifiedby: DG.Microsoft.Dynamics.CRM.email[];
		lk_phonecall_createdonbehalfby: DG.Microsoft.Dynamics.CRM.phonecall[];
		lk_leadbase_modifiedby: DG.Microsoft.Dynamics.CRM.lead[];
		lk_businessunitbase_createdby: DG.Microsoft.Dynamics.CRM.businessunit[];
		constraintbasedgroup_systemuser: DG.Microsoft.Dynamics.CRM.constraintbasedgroup[];
		system_user_sales_literature: DG.Microsoft.Dynamics.CRM.salesliterature[];
		lk_ProductAssociation_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.productassociation[];
		lk_discount_createdonbehalfby: DG.Microsoft.Dynamics.CRM.discount[];
		lk_slakpiinstancebase_modifiedby: DG.Microsoft.Dynamics.CRM.slakpiinstance[];
		queue_primary_user: DG.Microsoft.Dynamics.CRM.queue[];
		lk_importjobbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.importjob[];
		SystemUser_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		lk_organization_createdonbehalfby: DG.Microsoft.Dynamics.CRM.organization[];
		lk_calendarrule_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.calendarrule[];
		lk_importjobbase_createdby: DG.Microsoft.Dynamics.CRM.importjob[];
		lk_orderclose_modifiedby: DG.Microsoft.Dynamics.CRM.orderclose[];
		lk_uomschedule_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.uomschedule[];
		SystemUser_ImportFiles: DG.Microsoft.Dynamics.CRM.importfile[];
		lk_importfilebase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.importfile[];
		socialProfile_owning_user: DG.Microsoft.Dynamics.CRM.socialprofile[];
		lk_orderclose_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.orderclose[];
		lk_invoice_createdonbehalfby: DG.Microsoft.Dynamics.CRM.invoice[];
		lk_campaignactivity_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		lk_businessunit_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.businessunit[];
		lk_appointment_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.appointment[];
		lk_sdkmessageprocessingstepimage_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepimage[];
		lk_kbarticletemplate_createdonbehalfby: DG.Microsoft.Dynamics.CRM.kbarticletemplate[];
		lk_azureserviceconnection_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.azureserviceconnection[];
		lk_documenttemplatebase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.documenttemplate[];
		lk_sdkmessageprocessingstep_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		lk_contracttemplate_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.contracttemplate[];
		lk_campaignresponse_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		lk_salesliteratureitem_createdonbehalfby: DG.Microsoft.Dynamics.CRM.salesliteratureitem[];
		lk_monthlyfiscalcalendar_createdby: DG.Microsoft.Dynamics.CRM.monthlyfiscalcalendar[];
		lk_syncerrorbase_modifiedby: DG.Microsoft.Dynamics.CRM.syncerror[];
		lk_salesliteratureitem_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.salesliteratureitem[];
		lk_uomschedule_createdonbehalfby: DG.Microsoft.Dynamics.CRM.uomschedule[];
		lk_reportbase_createdby: DG.Microsoft.Dynamics.CRM.report[];
		lk_documenttemplatebase_createdby: DG.Microsoft.Dynamics.CRM.documenttemplate[];
		lk_subject_createdonbehalfby: DG.Microsoft.Dynamics.CRM.subject[];
		lk_contractdetailbase_createdby: DG.Microsoft.Dynamics.CRM.contractdetail[];
		lk_recurringappointmentmaster_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		lk_listmember_createdby: DG.Microsoft.Dynamics.CRM.listmember[];
		lk_reportbase_modifiedby: DG.Microsoft.Dynamics.CRM.report[];
		user_incidentresolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		lk_userformbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.userform[];
		lk_bulkdeleteoperationbase_createdby: DG.Microsoft.Dynamics.CRM.bulkdeleteoperation[];
		lk_quotebase_createdby: DG.Microsoft.Dynamics.CRM.quote[];
		lk_slabase_modifiedby: DG.Microsoft.Dynamics.CRM.sla[];
		lk_personaldocumenttemplatebase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.personaldocumenttemplate[];
		lk_activitypointer_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.activitypointer[];
		lk_socialactivity_createdby: DG.Microsoft.Dynamics.CRM.socialactivity[];
		lk_resourcespec_createdby: DG.Microsoft.Dynamics.CRM.resourcespec[];
		lk_fax_modifiedby: DG.Microsoft.Dynamics.CRM.fax[];
		lk_product_createdonbehalfby: DG.Microsoft.Dynamics.CRM.product[];
		lk_userformbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.userform[];
		modifiedby_sdkmessageprocessingstep: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		lk_recommendationmodelversion_modifiedby: DG.Microsoft.Dynamics.CRM.recommendationmodelversion[];
		createdby_plugintype: DG.Microsoft.Dynamics.CRM.plugintype[];
		lk_sdkmessage_createdonbehalfby: DG.Microsoft.Dynamics.CRM.sdkmessage[];
		lk_customcontroldefaultconfig_createdonbehalfby: DG.Microsoft.Dynamics.CRM.customcontroldefaultconfig[];
		lk_pluginassembly_createdonbehalfby: DG.Microsoft.Dynamics.CRM.pluginassembly[];
		createdby_sdkmessagefilter: DG.Microsoft.Dynamics.CRM.sdkmessagefilter[];
		lk_knowledgearticleviews_modifiedby: DG.Microsoft.Dynamics.CRM.knowledgearticleviews[];
		lk_connectionrolebase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.connectionrole[];
		lk_workflowlog_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.workflowlog[];
		lk_orderclose_createdby: DG.Microsoft.Dynamics.CRM.orderclose[];
		lk_usersettingsbase_modifiedby: DG.Microsoft.Dynamics.CRM.usersettings[];
		lk_sharepointdocumentlocationbase_createdby: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		lk_list_modifiedby: DG.Microsoft.Dynamics.CRM.list[];
		lk_fax_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.fax[];
		user_opportunityclose: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		lk_asyncoperation_modifiedby: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		lk_savedquery_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.savedquery[];
		lk_workflowlog_modifiedby: DG.Microsoft.Dynamics.CRM.workflowlog[];
		lk_webwizard_createdonbehalfby: DG.Microsoft.Dynamics.CRM.webwizard[];
		lk_resourcespec_modifiedby: DG.Microsoft.Dynamics.CRM.resourcespec[];
		lk_webwizard_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.webwizard[];
		lk_incidentresolution_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		lk_azureserviceconnection_createdby: DG.Microsoft.Dynamics.CRM.azureserviceconnection[];
		lk_appointment_modifiedby: DG.Microsoft.Dynamics.CRM.appointment[];
		lk_organizationbase_createdby: DG.Microsoft.Dynamics.CRM.organization[];
		lk_timezonelocalizedname_modifiedby: DG.Microsoft.Dynamics.CRM.timezonelocalizedname[];
		lk_invoice_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.invoice[];
		equipment_systemuser: DG.Microsoft.Dynamics.CRM.equipment[];
		lk_activitypointer_createdonbehalfby: DG.Microsoft.Dynamics.CRM.activitypointer[];
		lk_productpricelevel_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.productpricelevel[];
		user_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		lk_duplicaterulecondition_createdonbehalfby: DG.Microsoft.Dynamics.CRM.duplicaterulecondition[];
		lk_service_createdby: DG.Microsoft.Dynamics.CRM.service[];
		lk_mailmergetemplate_createdonbehalfby: DG.Microsoft.Dynamics.CRM.mailmergetemplate[];
		lk_importdata_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.importdata[];
		lk_salesliteraturebase_createdby: DG.Microsoft.Dynamics.CRM.salesliterature[];
		lk_semiannualfiscalcalendar_salespersonid: DG.Microsoft.Dynamics.CRM.semiannualfiscalcalendar[];
		lk_contract_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.contract[];
		lk_connectionbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.connection[];
		lk_MobileOfflineProfile_createdby: DG.Microsoft.Dynamics.CRM.mobileofflineprofile[];
		lk_syncerrorbase_createdby: DG.Microsoft.Dynamics.CRM.syncerror[];
		lk_documenttemplatebase_modifiedby: DG.Microsoft.Dynamics.CRM.documenttemplate[];
		lk_task_modifiedby: DG.Microsoft.Dynamics.CRM.task[];
		lk_kbarticlebase_createdby: DG.Microsoft.Dynamics.CRM.kbarticle[];
		lk_task_createdby: DG.Microsoft.Dynamics.CRM.task[];
		lk_timezonedefinition_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.timezonedefinition[];
		lk_topicmodelexecutionhistory_createdby: DG.Microsoft.Dynamics.CRM.topicmodelexecutionhistory[];
		lk_duplicaterulecondition_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.duplicaterulecondition[];
		lk_contractbase_modifiedby: DG.Microsoft.Dynamics.CRM.contract[];
		lk_campaignactivity_createdonbehalfby: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		lk_opportunityclose_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		lk_uom_createdonbehalfby: DG.Microsoft.Dynamics.CRM.uom[];
		lk_asyncoperation_createdonbehalfby: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		user_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		lk_competitoraddress_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.competitoraddress[];
		lk_activitypointer_modifiedby: DG.Microsoft.Dynamics.CRM.activitypointer[];
		lk_queuebase_createdby: DG.Microsoft.Dynamics.CRM.queue[];
		user_settings: DG.Microsoft.Dynamics.CRM.usersettings[];
		lk_pricelevelbase_createdby: DG.Microsoft.Dynamics.CRM.pricelevel[];
		lk_campaign_createdonbehalfby: DG.Microsoft.Dynamics.CRM.campaign[];
		lk_queueitem_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.queueitem[];
		lk_annotationbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.annotation[];
		lk_timezonelocalizedname_createdby: DG.Microsoft.Dynamics.CRM.timezonelocalizedname[];
		lk_import_createdonbehalfby: DG.Microsoft.Dynamics.CRM.import[];
		lk_mailmergetemplate_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.mailmergetemplate[];
		lk_customcontroldefaultconfig_modifiedby: DG.Microsoft.Dynamics.CRM.customcontroldefaultconfig[];
		lk_customcontrol_createdonbehalfby: DG.Microsoft.Dynamics.CRM.customcontrol[];
		lk_usersettings_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.usersettings[];
		lk_MobileOfflineProfile_modifiedby: DG.Microsoft.Dynamics.CRM.mobileofflineprofile[];
		lk_competitor_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.competitor[];
		lk_plugintype_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.plugintype[];
		lk_uom_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.uom[];
		user_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		lk_savedqueryvisualizationbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.savedqueryvisualization[];
		lk_kbarticlecomment_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.kbarticlecomment[];
		siteid: DG.Microsoft.Dynamics.CRM.site;
		lk_rolebase_createdby: DG.Microsoft.Dynamics.CRM.role[];
		lk_leadbase_createdby: DG.Microsoft.Dynamics.CRM.lead[];
		lk_bulkdeleteoperation_createdonbehalfby: DG.Microsoft.Dynamics.CRM.bulkdeleteoperation[];
		lk_knowledgearticleviews_createdby: DG.Microsoft.Dynamics.CRM.knowledgearticleviews[];
		lk_salesorder_createdonbehalfby: DG.Microsoft.Dynamics.CRM.salesorder[];
		lk_customeraddressbase_modifiedby: DG.Microsoft.Dynamics.CRM.customeraddress[];
		lk_quotebase_modifiedby: DG.Microsoft.Dynamics.CRM.quote[];
		lk_email_createdonbehalfby: DG.Microsoft.Dynamics.CRM.email[];
		lk_contract_createdonbehalfby: DG.Microsoft.Dynamics.CRM.contract[];
		lk_discountbase_createdby: DG.Microsoft.Dynamics.CRM.discount[];
		lk_quarterlyfiscalcalendar_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.quarterlyfiscalcalendar[];
		user_orderclose: DG.Microsoft.Dynamics.CRM.orderclose[];
		lk_incidentbase_createdby: DG.Microsoft.Dynamics.CRM.incident[];
		lk_pricelevelbase_modifiedby: DG.Microsoft.Dynamics.CRM.pricelevel[];
		lk_ProductAssociate_createdby: DG.Microsoft.Dynamics.CRM.productassociation[];
		lk_importfilebase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.importfile[];
		lk_opportunitybase_modifiedby: DG.Microsoft.Dynamics.CRM.opportunity[];
		lk_quotedetail_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.quotedetail[];
		lk_sdkmessagefilter_createdonbehalfby: DG.Microsoft.Dynamics.CRM.sdkmessagefilter[];
		lk_annotationbase_modifiedby: DG.Microsoft.Dynamics.CRM.annotation[];
		lk_queue_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.queue[];
		lk_sharepointdocumentlocationbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		lk_salesliterature_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.salesliterature[];
		lk_socialactivity_modifiedby: DG.Microsoft.Dynamics.CRM.socialactivity[];
		lk_calendar_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.calendar[];
		system_user_contacts: DG.Microsoft.Dynamics.CRM.contact[];
		lk_equipment_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.equipment[];
		lk_webresourcebase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.webresource[];
		lk_fixedmonthlyfiscalcalendar_createdby: DG.Microsoft.Dynamics.CRM.fixedmonthlyfiscalcalendar[];
		lk_fieldsecurityprofile_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.fieldsecurityprofile[];
		createdby_sdkmessageprocessingstepsecureconfig: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepsecureconfig[];
		lk_webwizard_modifiedby: DG.Microsoft.Dynamics.CRM.webwizard[];
		lk_teambase_modifiedby: DG.Microsoft.Dynamics.CRM.team[];
		lk_service_createdonbehalfby: DG.Microsoft.Dynamics.CRM.service[];
		lk_annualfiscalcalendar_createdby: DG.Microsoft.Dynamics.CRM.annualfiscalcalendar[];
		lk_opportunitybase_createdby: DG.Microsoft.Dynamics.CRM.opportunity[];
		system_user_incidents: DG.Microsoft.Dynamics.CRM.incident[];
		lk_customcontroldefaultconfig_createdby: DG.Microsoft.Dynamics.CRM.customcontroldefaultconfig[];
		lk_opportunity_createdonbehalfby: DG.Microsoft.Dynamics.CRM.opportunity[];
		lk_mobileofflineprofileitem_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitem[];
		lk_salesorderdetailbase_createdby: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		lk_annualfiscalcalendar_createdonbehalfby: DG.Microsoft.Dynamics.CRM.annualfiscalcalendar[];
		queuemembership_association: DG.Microsoft.Dynamics.CRM.queue[];
		lk_solutionbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.solution[];
		lk_sharepointsitebase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		lk_opportunityproduct_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.opportunityproduct[];
		lk_BulkOperation_createdonbehalfby: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		lk_syncerrorbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.syncerror[];
		lk_constraintbasedgroup_modifiedby: DG.Microsoft.Dynamics.CRM.constraintbasedgroup[];
		lk_customcontrolresource_modifiedby: DG.Microsoft.Dynamics.CRM.customcontrolresource[];
		modifiedby_pluginassembly: DG.Microsoft.Dynamics.CRM.pluginassembly[];
		knowledgearticle_primaryauthorid: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		lk_topicmodelexecutionhistory_modifiedby: DG.Microsoft.Dynamics.CRM.topicmodelexecutionhistory[];
		lk_entitlementtemplatechannel_createdonbehalfby: DG.Microsoft.Dynamics.CRM.entitlementtemplatechannel[];
		lk_publisheraddressbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.publisheraddress[];
		lk_transactioncurrencybase_modifiedby: DG.Microsoft.Dynamics.CRM.transactioncurrency[];
		contact_owning_user: DG.Microsoft.Dynamics.CRM.contact[];
		lk_appointment_createdonbehalfby: DG.Microsoft.Dynamics.CRM.appointment[];
		lk_MobileOfflineProfileItemAssociation_createdby: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitemassociation[];
		lk_quarterlyfiscalcalendar_salespersonid: DG.Microsoft.Dynamics.CRM.quarterlyfiscalcalendar[];
		lk_incidentresolution_modifiedby: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		system_user_salesorderdetail: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		lk_constraintbasedgroup_createdonbehalfby: DG.Microsoft.Dynamics.CRM.constraintbasedgroup[];
		lk_importlogbase_modifiedby: DG.Microsoft.Dynamics.CRM.importlog[];
		lk_opportunityclose_createdby: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		lk_businessunitnewsarticlebase_modifiedby: DG.Microsoft.Dynamics.CRM.businessunitnewsarticle[];
		lk_opportunityproduct_createdonbehalfby: DG.Microsoft.Dynamics.CRM.opportunityproduct[];
		lk_uombase_modifiedby: DG.Microsoft.Dynamics.CRM.uom[];
		lk_campaignresponse_createdby: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		lk_BulkOperation_modifiedby: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		lk_customcontrolresource_createdonbehalfby: DG.Microsoft.Dynamics.CRM.customcontrolresource[];
		lk_importmap_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.importmap[];
		modifiedby_sdkmessageprocessingstepsecureconfig: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepsecureconfig[];
		lk_reportcategorybase_modifiedby: DG.Microsoft.Dynamics.CRM.reportcategory[];
		lk_incidentbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.incident[];
		lk_task_createdonbehalfby: DG.Microsoft.Dynamics.CRM.task[];
		lk_entitlementtemplatechannel_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.entitlementtemplatechannel[];
		user_letter: DG.Microsoft.Dynamics.CRM.letter[];
		lk_serviceappointment_createdby: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		lk_teambase_createdby: DG.Microsoft.Dynamics.CRM.team[];
		lk_slabase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.sla[];
		lk_leadaddressbase_modifiedby: DG.Microsoft.Dynamics.CRM.leadaddress[];
		lk_topicmodel_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.topicmodel[];
		lk_ProductAssociation_modifiedby: DG.Microsoft.Dynamics.CRM.productassociation[];
		lk_topicmodel_modifiedby: DG.Microsoft.Dynamics.CRM.topicmodel[];
		lk_topicmodel_createdonbehalfby: DG.Microsoft.Dynamics.CRM.topicmodel[];
		lk_usersettings_createdonbehalfby: DG.Microsoft.Dynamics.CRM.usersettings[];
		lk_calendarrule_createdby: DG.Microsoft.Dynamics.CRM.calendarrule[];
		lk_importentitymapping_createdonbehalfby: DG.Microsoft.Dynamics.CRM.importentitymapping[];
		lk_contracttemplatebase_modifiedby: DG.Microsoft.Dynamics.CRM.contracttemplate[];
		lk_customcontrolresource_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.customcontrolresource[];
		lk_mobileofflineprofileitem_modifiedby: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitem[];
		parentsystemuserid: DG.Microsoft.Dynamics.CRM.systemuser;
		user_parent_user: DG.Microsoft.Dynamics.CRM.systemuser[];
		lk_personaldocumenttemplatebase_modifiedby: DG.Microsoft.Dynamics.CRM.personaldocumenttemplate[];
		ImportFile_SystemUser: DG.Microsoft.Dynamics.CRM.importfile[];
		lk_savedquerybase_createdby: DG.Microsoft.Dynamics.CRM.savedquery[];
		SystemUser_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		lk_leadaddress_createdonbehalfby: DG.Microsoft.Dynamics.CRM.leadaddress[];
		lk_salesorderdetail_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		lk_email_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.email[];
		user_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		lk_fixedmonthlyfiscalcalendar_modifiedby: DG.Microsoft.Dynamics.CRM.fixedmonthlyfiscalcalendar[];
		lk_businessunitnewsarticle_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.businessunitnewsarticle[];
		lk_phonecall_modifiedby: DG.Microsoft.Dynamics.CRM.phonecall[];
		lk_annualfiscalcalendar_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.annualfiscalcalendar[];
		lk_kbarticletemplate_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.kbarticletemplate[];
		lk_organizationbase_modifiedby: DG.Microsoft.Dynamics.CRM.organization[];
		createdby_sdkmessageprocessingstep: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		user_quoteclose: DG.Microsoft.Dynamics.CRM.quoteclose[];
		lk_syncerrorbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.syncerror[];
		lk_salesliterature_createdonbehalfby: DG.Microsoft.Dynamics.CRM.salesliterature[];
		lk_appointment_createdby: DG.Microsoft.Dynamics.CRM.appointment[];
		lk_sdkmessageprocessingstepsecureconfig_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepsecureconfig[];
		lk_contractbase_createdby: DG.Microsoft.Dynamics.CRM.contract[];
		lk_importjobbase_modifiedby: DG.Microsoft.Dynamics.CRM.importjob[];
		mobileofflineprofileid: DG.Microsoft.Dynamics.CRM.mobileofflineprofile;
		lk_mailmergetemplatebase_modifiedby: DG.Microsoft.Dynamics.CRM.mailmergetemplate[];
		lk_import_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.import[];
		lk_leadaddressbase_createdby: DG.Microsoft.Dynamics.CRM.leadaddress[];
		lk_monthlyfiscalcalendar_createdonbehalfby: DG.Microsoft.Dynamics.CRM.monthlyfiscalcalendar[];
		queueid: DG.Microsoft.Dynamics.CRM.queue;
		lk_site_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.site[];
		lk_userquery_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.userquery[];
		lk_timezonerule_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.timezonerule[];
		lk_contractdetailbase_modifiedby: DG.Microsoft.Dynamics.CRM.contractdetail[];
		user_userqueryvisualizations: DG.Microsoft.Dynamics.CRM.userqueryvisualization[];
		lk_userform_createdby: DG.Microsoft.Dynamics.CRM.userform[];
		lk_discounttypebase_modifiedby: DG.Microsoft.Dynamics.CRM.discounttype[];
		user_task: DG.Microsoft.Dynamics.CRM.task[];
		lk_invoicedetailbase_createdby: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		lk_quotedetailbase_modifiedby: DG.Microsoft.Dynamics.CRM.quotedetail[];
		lk_MobileOfflineProfile_createdonbehalfby: DG.Microsoft.Dynamics.CRM.mobileofflineprofile[];
		lk_webwizard_createdby: DG.Microsoft.Dynamics.CRM.webwizard[];
		lk_mailmergetemplatebase_createdby: DG.Microsoft.Dynamics.CRM.mailmergetemplate[];
		lk_calendarrule_createdonbehalfby: DG.Microsoft.Dynamics.CRM.calendarrule[];
		lk_recommendationmodelversion_createdonbehalfby: DG.Microsoft.Dynamics.CRM.recommendationmodelversion[];
		lk_email_createdby: DG.Microsoft.Dynamics.CRM.email[];
		lk_queue_createdonbehalfby: DG.Microsoft.Dynamics.CRM.queue[];
		lk_userquery_createdby: DG.Microsoft.Dynamics.CRM.userquery[];
		lk_queuebase_modifiedby: DG.Microsoft.Dynamics.CRM.queue[];
		modifiedby_sdkmessage: DG.Microsoft.Dynamics.CRM.sdkmessage[];
		lk_productpricelevelbase_modifiedby: DG.Microsoft.Dynamics.CRM.productpricelevel[];
		lk_fieldsecurityprofile_modifiedby: DG.Microsoft.Dynamics.CRM.fieldsecurityprofile[];
		lk_incidentbase_modifiedby: DG.Microsoft.Dynamics.CRM.incident[];
		lk_customcontroldefaultconfig_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.customcontroldefaultconfig[];
		lk_opportunityclose_modifiedby: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		lk_asyncoperation_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		lk_publisherbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.publisher[];
		SystemUser_Email_EmailSender: DG.Microsoft.Dynamics.CRM.email[];
		lk_recurringappointmentmaster_modifiedby: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		lk_knowledgearticleincident_modifiedby: DG.Microsoft.Dynamics.CRM.knowledgearticleincident[];
		SystemUser_ImportMaps: DG.Microsoft.Dynamics.CRM.importmap[];
		workflow_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.workflow[];
		lk_serviceappointment_modifiedby: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		lk_slaitembase_modifiedby: DG.Microsoft.Dynamics.CRM.slaitem[];
		lk_mobileofflineprofileitemassociation_createdonbehalfby: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitemassociation[];
		lk_topicmodelexecutionhistory_createdonbehalfby: DG.Microsoft.Dynamics.CRM.topicmodelexecutionhistory[];
		lk_annualfiscalcalendar_salespersonid: DG.Microsoft.Dynamics.CRM.annualfiscalcalendar[];
		lk_serviceappointment_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		lk_opportunityclose_createdonbehalfby: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		lk_emailserverprofile_modifiedby: DG.Microsoft.Dynamics.CRM.emailserverprofile[];
		lk_slakpiinstancebase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.slakpiinstance[];
		lk_duplicateruleconditionbase_modifiedby: DG.Microsoft.Dynamics.CRM.duplicaterulecondition[];
		system_user_email_templates: DG.Microsoft.Dynamics.CRM.template[];
		lk_campaignactivity_modifiedby: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		lk_letter_modifiedby: DG.Microsoft.Dynamics.CRM.letter[];
		workflow_createdby: DG.Microsoft.Dynamics.CRM.workflow[];
		lk_publisheraddressbase_modifiedby: DG.Microsoft.Dynamics.CRM.publisheraddress[];
		lk_task_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.task[];
		lk_userform_modifiedby: DG.Microsoft.Dynamics.CRM.userform[];
		lk_invoicebase_createdby: DG.Microsoft.Dynamics.CRM.invoice[];
		lk_importdatabase_createdby: DG.Microsoft.Dynamics.CRM.importdata[];
		user_slabase: DG.Microsoft.Dynamics.CRM.sla[];
		lk_importfilebase_modifiedby: DG.Microsoft.Dynamics.CRM.importfile[];
		lk_team_createdonbehalfby: DG.Microsoft.Dynamics.CRM.team[];
		lk_quote_createdonbehalfby: DG.Microsoft.Dynamics.CRM.quote[];
		lk_leadaddress_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.leadaddress[];
		lk_templatebase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.template[];
		lk_slaitembase_createdby: DG.Microsoft.Dynamics.CRM.slaitem[];
		businessunitid: DG.Microsoft.Dynamics.CRM.businessunit;
		lk_importmapbase_modifiedby: DG.Microsoft.Dynamics.CRM.importmap[];
		lk_usersettingsbase_createdby: DG.Microsoft.Dynamics.CRM.usersettings[];
		lk_salesorderdetailbase_modifiedby: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		lk_webresourcebase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.webresource[];
		webresource_createdby: DG.Microsoft.Dynamics.CRM.webresource[];
		system_user_quotedetail: DG.Microsoft.Dynamics.CRM.quotedetail[];
		user_accounts: DG.Microsoft.Dynamics.CRM.account[];
		lk_recommendationmodel_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.recommendationmodel[];
		lk_kbarticlebase_modifiedby: DG.Microsoft.Dynamics.CRM.kbarticle[];
		lk_equipment_createdby: DG.Microsoft.Dynamics.CRM.equipment[];
		lk_workflowlog_createdby: DG.Microsoft.Dynamics.CRM.workflowlog[];
		lk_bulkdeleteoperation_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.bulkdeleteoperation[];
		lk_quoteclose_createdby: DG.Microsoft.Dynamics.CRM.quoteclose[];
		lk_productbase_modifiedby: DG.Microsoft.Dynamics.CRM.product[];
		lk_userqueryvisualization_createdby: DG.Microsoft.Dynamics.CRM.userqueryvisualization[];
		lk_importfilebase_createdby: DG.Microsoft.Dynamics.CRM.importfile[];
		lk_discount_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.discount[];
		lk_contactbase_modifiedby: DG.Microsoft.Dynamics.CRM.contact[];
		lk_quoteclose_modifiedby: DG.Microsoft.Dynamics.CRM.quoteclose[];
		lk_MobileOfflineProfileItem_createdby: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitem[];
		workflow_modifiedby: DG.Microsoft.Dynamics.CRM.workflow[];
		lk_campaignresponse_createdonbehalfby: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		lk_sdkmessagefilter_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.sdkmessagefilter[];
		SystemUser_DuplicateRules: DG.Microsoft.Dynamics.CRM.duplicaterule[];
		lk_fixedmonthlyfiscalcalendar_salespersonid: DG.Microsoft.Dynamics.CRM.fixedmonthlyfiscalcalendar[];
		lk_ProductAssociation_createdonbehalfby: DG.Microsoft.Dynamics.CRM.productassociation[];
		lk_BulkOperation_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		lk_kbarticletemplatebase_modifiedby: DG.Microsoft.Dynamics.CRM.kbarticletemplate[];
		lk_savedqueryvisualizationbase_modifiedby: DG.Microsoft.Dynamics.CRM.savedqueryvisualization[];
		lk_semiannualfiscalcalendar_modifiedby: DG.Microsoft.Dynamics.CRM.semiannualfiscalcalendar[];
		lk_letter_createdby: DG.Microsoft.Dynamics.CRM.letter[];
		lk_businessunitnewsarticle_createdonbehalfby: DG.Microsoft.Dynamics.CRM.businessunitnewsarticle[];
		lk_discountbase_modifiedby: DG.Microsoft.Dynamics.CRM.discount[];
		lk_list_createdby: DG.Microsoft.Dynamics.CRM.list[];
		lk_timezonerule_modifiedby: DG.Microsoft.Dynamics.CRM.timezonerule[];
		lk_serviceendpointbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.serviceendpoint[];
		lk_kbarticle_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.kbarticle[];
		lk_salesorderbase_createdby: DG.Microsoft.Dynamics.CRM.salesorder[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		lk_systemuser_createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser[];
		lk_SocialProfile_createdonbehalfby: DG.Microsoft.Dynamics.CRM.socialprofile[];
		system_user_workflow: DG.Microsoft.Dynamics.CRM.workflow[];
		lk_importbase_modifiedby: DG.Microsoft.Dynamics.CRM.import[];
		lk_recommendationmodel_createdby: DG.Microsoft.Dynamics.CRM.recommendationmodel[];
		lk_salesliteratureitembase_modifiedby: DG.Microsoft.Dynamics.CRM.salesliteratureitem[];
		lk_teambase_administratorid: DG.Microsoft.Dynamics.CRM.team[];
		lk_fieldsecurityprofile_createdby: DG.Microsoft.Dynamics.CRM.fieldsecurityprofile[];
		lk_fixedmonthlyfiscalcalendar_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.fixedmonthlyfiscalcalendar[];
		lk_sdkmessageprocessingstepsecureconfig_createdonbehalfby: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepsecureconfig[];
		lk_competitor_createdonbehalfby: DG.Microsoft.Dynamics.CRM.competitor[];
		lk_incidentresolution_createdby: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		lk_importmapbase_createdby: DG.Microsoft.Dynamics.CRM.importmap[];
		lk_transactioncurrency_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.transactioncurrency[];
		user_userquery: DG.Microsoft.Dynamics.CRM.userquery[];
		system_user_asyncoperation: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		lk_campaignresponse_modifiedby: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		lk_equipment_createdonbehalfby: DG.Microsoft.Dynamics.CRM.equipment[];
		territoryid: DG.Microsoft.Dynamics.CRM.territory;
		lk_duplicateruleconditionbase_createdby: DG.Microsoft.Dynamics.CRM.duplicaterulecondition[];
		lk_productpricelevelbase_createdby: DG.Microsoft.Dynamics.CRM.productpricelevel[];
		lk_importentitymapping_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.importentitymapping[];
		lk_accountbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.account[];
		lk_customcontrol_modifiedby: DG.Microsoft.Dynamics.CRM.customcontrol[];
		lk_duplicaterulebase_createdby: DG.Microsoft.Dynamics.CRM.duplicaterule[];
		lk_queueitem_createdonbehalfby: DG.Microsoft.Dynamics.CRM.queueitem[];
		lk_transactioncurrencybase_createdby: DG.Microsoft.Dynamics.CRM.transactioncurrency[];
		lk_importlog_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.importlog[];
		lk_sdkmessage_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.sdkmessage[];
		lk_kbarticlecommentbase_modifiedby: DG.Microsoft.Dynamics.CRM.kbarticlecomment[];
		user_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		lk_product_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.product[];
		user_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		lk_dg_booking_createdby: DG.Microsoft.Dynamics.CRM.dg_booking[];
		lk_dg_booking_createdonbehalfby: DG.Microsoft.Dynamics.CRM.dg_booking[];
		lk_dg_booking_modifiedby: DG.Microsoft.Dynamics.CRM.dg_booking[];
		lk_dg_booking_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.dg_booking[];
		user_dg_booking: DG.Microsoft.Dynamics.CRM.dg_booking[];
		lk_dg_plane_createdby: DG.Microsoft.Dynamics.CRM.dg_plane[];
		lk_dg_plane_createdonbehalfby: DG.Microsoft.Dynamics.CRM.dg_plane[];
		lk_dg_plane_modifiedby: DG.Microsoft.Dynamics.CRM.dg_plane[];
		lk_dg_plane_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.dg_plane[];
		user_dg_plane: DG.Microsoft.Dynamics.CRM.dg_plane[];
		lk_dg_hotel_createdby: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		lk_dg_hotel_createdonbehalfby: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		lk_dg_hotel_modifiedby: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		lk_dg_hotel_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		user_dg_hotel: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		lk_dg_car_createdby: DG.Microsoft.Dynamics.CRM.dg_car[];
		lk_dg_car_createdonbehalfby: DG.Microsoft.Dynamics.CRM.dg_car[];
		lk_dg_car_modifiedby: DG.Microsoft.Dynamics.CRM.dg_car[];
		lk_dg_car_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.dg_car[];
		user_dg_car: DG.Microsoft.Dynamics.CRM.dg_car[];
		lk_dg_country_createdby: DG.Microsoft.Dynamics.CRM.dg_country[];
		lk_dg_country_createdonbehalfby: DG.Microsoft.Dynamics.CRM.dg_country[];
		lk_dg_country_modifiedby: DG.Microsoft.Dynamics.CRM.dg_country[];
		lk_dg_country_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.dg_country[];
	}
	interface principal extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		ownerid: System.Guid;
		owner_exchangesyncidmapping: DG.Microsoft.Dynamics.CRM.exchangesyncidmapping[];
		owner_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		owner_sharepointsite: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		owner_sharepointdocumentlocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		owner_entitlement: DG.Microsoft.Dynamics.CRM.entitlement[];
		owner_goal: DG.Microsoft.Dynamics.CRM.goal[];
		owner_mailbox: DG.Microsoft.Dynamics.CRM.mailbox[];
		owner_personaldocumenttemplates: DG.Microsoft.Dynamics.CRM.personaldocumenttemplate[];
		owner_accounts: DG.Microsoft.Dynamics.CRM.account[];
		owner_goalrollupquery: DG.Microsoft.Dynamics.CRM.goalrollupquery[];
		owner_salesorders: DG.Microsoft.Dynamics.CRM.salesorder[];
		owner_postfollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		owner_workflows: DG.Microsoft.Dynamics.CRM.workflow[];
		owner_lists: DG.Microsoft.Dynamics.CRM.list[];
		owner_userquerys: DG.Microsoft.Dynamics.CRM.userquery[];
		owner_importmaps: DG.Microsoft.Dynamics.CRM.importmap[];
		owner_mailmergetemplates: DG.Microsoft.Dynamics.CRM.mailmergetemplate[];
		owner_opportunitys: DG.Microsoft.Dynamics.CRM.opportunity[];
		owner_duplicaterules: DG.Microsoft.Dynamics.CRM.duplicaterule[];
		owner_reports: DG.Microsoft.Dynamics.CRM.report[];
		owner_activitypointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		owner_principalentitymap: DG.Microsoft.Dynamics.CRM.principalentitymap[];
		owner_importdatas: DG.Microsoft.Dynamics.CRM.importdata[];
		owner_queues: DG.Microsoft.Dynamics.CRM.queue[];
		owner_userqueryvisualizations: DG.Microsoft.Dynamics.CRM.userqueryvisualization[];
		owner_campaigns: DG.Microsoft.Dynamics.CRM.campaign[];
		owner_quotes: DG.Microsoft.Dynamics.CRM.quote[];
		owner_invoices: DG.Microsoft.Dynamics.CRM.invoice[];
		owner_annotations: DG.Microsoft.Dynamics.CRM.annotation[];
		owner_userform: DG.Microsoft.Dynamics.CRM.userform[];
		owner_asyncoperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		owner_SocialProfile: DG.Microsoft.Dynamics.CRM.socialprofile[];
		owner_slas: DG.Microsoft.Dynamics.CRM.sla[];
		slakpiinstance_owner: DG.Microsoft.Dynamics.CRM.slakpiinstance[];
		owner_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofile[];
		owner_incidents: DG.Microsoft.Dynamics.CRM.incident[];
		owner_templates: DG.Microsoft.Dynamics.CRM.template[];
		owner_contacts: DG.Microsoft.Dynamics.CRM.contact[];
		owner_imports: DG.Microsoft.Dynamics.CRM.import[];
		owner_leads: DG.Microsoft.Dynamics.CRM.lead[];
		owner_connections: DG.Microsoft.Dynamics.CRM.connection[];
		owner_importfiles: DG.Microsoft.Dynamics.CRM.importfile[];
		owner_importlogs: DG.Microsoft.Dynamics.CRM.importlog[];
		owner_SyncError: DG.Microsoft.Dynamics.CRM.syncerror[];
		owner_contracts: DG.Microsoft.Dynamics.CRM.contract[];
		owner_dg_booking: DG.Microsoft.Dynamics.CRM.dg_booking[];
		owner_dg_plane: DG.Microsoft.Dynamics.CRM.dg_plane[];
		owner_dg_hotel: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		owner_dg_car: DG.Microsoft.Dynamics.CRM.dg_car[];
	}
	interface exchangesyncidmapping extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		objecttypecode: number;
		modifiedon: Date;
		lastsyncerroroccurredon: Date;
		objectid: System.Guid;
		_owninguser_value: System.Guid;
		tocrmchangetype: number;
		retries: number;
		isdeletedinexchange: boolean;
		versionnumber: number;
		lastsyncerrorcode: number;
		_owningbusinessunit_value: System.Guid;
		_ownerid_value: System.Guid;
		isunlinkedincrm: boolean;
		_owningteam_value: System.Guid;
		exchangesyncidmappingid: System.Guid;
		fromcrmchangetype: number;
		userdecision: number;
		exchangeentryid: string;
		lastsyncerror: string;
		createdon: Date;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
	}
	interface team extends DG.Microsoft.Dynamics.CRM.principal {
		_transactioncurrencyid_value: System.Guid;
		versionnumber: number;
		yominame: string;
		_teamtemplateid_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		traversedpath: string;
		organizationid: System.Guid;
		name: string;
		exchangerate: number;
		importsequencenumber: number;
		systemmanaged: boolean;
		isdefault: boolean;
		description: string;
		_createdby_value: System.Guid;
		emailaddress: string;
		processid: System.Guid;
		_businessunitid_value: System.Guid;
		_queueid_value: System.Guid;
		_regardingobjectid_value: System.Guid;
		modifiedon: Date;
		teamtype: number;
		stageid: System.Guid;
		overriddencreatedon: Date;
		createdon: Date;
		_modifiedby_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		_administratorid_value: System.Guid;
		teamid: System.Guid;
		teammembership_association: DG.Microsoft.Dynamics.CRM.systemuser[];
		team_exchangesyncidmapping: DG.Microsoft.Dynamics.CRM.exchangesyncidmapping[];
		team_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		team_sharepointsite: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		team_sharepointdocumentlocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		team_entitlement: DG.Microsoft.Dynamics.CRM.entitlement[];
		team_goal: DG.Microsoft.Dynamics.CRM.goal[];
		team_goalrollupquery: DG.Microsoft.Dynamics.CRM.goalrollupquery[];
		team_mailbox: DG.Microsoft.Dynamics.CRM.mailbox[];
		associatedteamtemplateid: DG.Microsoft.Dynamics.CRM.teamtemplate;
		team_DuplicateRules: DG.Microsoft.Dynamics.CRM.duplicaterule[];
		team_Imports: DG.Microsoft.Dynamics.CRM.import[];
		team_opportunities: DG.Microsoft.Dynamics.CRM.opportunity[];
		OwningTeam_postfollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		team_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		team_workflowlog: DG.Microsoft.Dynamics.CRM.workflowlog[];
		team_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		team_service_contracts: DG.Microsoft.Dynamics.CRM.contract[];
		team_userform: DG.Microsoft.Dynamics.CRM.userform[];
		team_Campaigns: DG.Microsoft.Dynamics.CRM.campaign[];
		team_quotes: DG.Microsoft.Dynamics.CRM.quote[];
		Team_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		team_SyncError: DG.Microsoft.Dynamics.CRM.syncerror[];
		lead_owning_team: DG.Microsoft.Dynamics.CRM.lead[];
		queueid: DG.Microsoft.Dynamics.CRM.queue;
		team_list: DG.Microsoft.Dynamics.CRM.list[];
		team_incidents: DG.Microsoft.Dynamics.CRM.incident[];
		Team_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		team_task: DG.Microsoft.Dynamics.CRM.task[];
		team_userquery: DG.Microsoft.Dynamics.CRM.userquery[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		team_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		team_userqueryvisualizations: DG.Microsoft.Dynamics.CRM.userqueryvisualization[];
		team_ImportMaps: DG.Microsoft.Dynamics.CRM.importmap[];
		team_fax: DG.Microsoft.Dynamics.CRM.fax[];
		team_queueitembase_workerid: DG.Microsoft.Dynamics.CRM.queueitem[];
		team_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		businessunitid: DG.Microsoft.Dynamics.CRM.businessunit;
		ImportFile_Team: DG.Microsoft.Dynamics.CRM.importfile[];
		team_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		team_email_templates: DG.Microsoft.Dynamics.CRM.template[];
		team_workflow: DG.Microsoft.Dynamics.CRM.workflow[];
		Team_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		organizationid_organization: DG.Microsoft.Dynamics.CRM.organization;
		team_email: DG.Microsoft.Dynamics.CRM.email[];
		team_letter: DG.Microsoft.Dynamics.CRM.letter[];
		team_ImportFiles: DG.Microsoft.Dynamics.CRM.importfile[];
		team_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		team_ImportData: DG.Microsoft.Dynamics.CRM.importdata[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		team_resource_specs: DG.Microsoft.Dynamics.CRM.resourcespec[];
		team_asyncoperation: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		team_contacts: DG.Microsoft.Dynamics.CRM.contact[];
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunity;
		team_resource_groups: DG.Microsoft.Dynamics.CRM.resourcegroup[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		team_invoices: DG.Microsoft.Dynamics.CRM.invoice[];
		team_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofile[];
		team_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		team_annotations: DG.Microsoft.Dynamics.CRM.annotation[];
		team_ImportLogs: DG.Microsoft.Dynamics.CRM.importlog[];
		team_orderclose: DG.Microsoft.Dynamics.CRM.orderclose[];
		team_slaBase: DG.Microsoft.Dynamics.CRM.sla[];
		teamprofiles_association: DG.Microsoft.Dynamics.CRM.fieldsecurityprofile[];
		team_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		team_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		team_incidentresolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		teamroles_association: DG.Microsoft.Dynamics.CRM.role[];
		team_accounts: DG.Microsoft.Dynamics.CRM.account[];
		team_service_appointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		team_quoteclose: DG.Microsoft.Dynamics.CRM.quoteclose[];
		team_activity: DG.Microsoft.Dynamics.CRM.activitypointer[];
		team_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		team_orders: DG.Microsoft.Dynamics.CRM.salesorder[];
		team_opportunityclose: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		administratorid: DG.Microsoft.Dynamics.CRM.systemuser;
		Team_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		team_goal_goalowner: DG.Microsoft.Dynamics.CRM.goal[];
		team_dg_booking: DG.Microsoft.Dynamics.CRM.dg_booking[];
		team_dg_plane: DG.Microsoft.Dynamics.CRM.dg_plane[];
		team_dg_hotel: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		team_dg_car: DG.Microsoft.Dynamics.CRM.dg_car[];
	}
	interface knowledgearticle extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_owningbusinessunit_value: System.Guid;
		exchangerate: number;
		publishon: Date;
		expirationstateid: number;
		description: string;
		importsequencenumber: number;
		expiredreviewoptions: number;
		isprimary: boolean;
		publishstatusid: number;
		setproductassociations: boolean;
		isrootarticle: boolean;
		traversedpath: string;
		expirationdate: Date;
		_languagelocaleid_value: System.Guid;
		versionnumber: number;
		_previousarticlecontentid_value: System.Guid;
		processid: System.Guid;
		_rootarticleid_value: System.Guid;
		scheduledstatusid: number;
		islatestversion: boolean;
		title: string;
		_ownerid_value: System.Guid;
		knowledgearticleviews: number;
		timezoneruleversionnumber: number;
		statecode: number;
		_modifiedby_value: System.Guid;
		overriddencreatedon: Date;
		_owninguser_value: System.Guid;
		_owningteam_value: System.Guid;
		articlepublicnumber: string;
		keywords: string;
		knowledgearticleviews_state: number;
		modifiedon: Date;
		knowledgearticleid: System.Guid;
		_primaryauthorid_value: System.Guid;
		_parentarticlecontentid_value: System.Guid;
		_subjectid_value: System.Guid;
		knowledgearticleviews_date: Date;
		_transactioncurrencyid_value: System.Guid;
		statuscode: number;
		minorversionnumber: number;
		_createdby_value: System.Guid;
		majorversionnumber: number;
		content: string;
		utcconversiontimezonecode: number;
		_modifiedonbehalfby_value: System.Guid;
		review: number;
		updatecontent: boolean;
		expirationstatusid: number;
		createdon: Date;
		readyforreview: boolean;
		stageid: System.Guid;
		_createdonbehalfby_value: System.Guid;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		knowledgearticle_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		knowledgearticle_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		knowledgearticle_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		knowledgearticle_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		knowledgearticle_SharePointDocumentLocations: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		knowledgearticle_QueueItems: DG.Microsoft.Dynamics.CRM.queueitem[];
		knowledgearticle_Annotations: DG.Microsoft.Dynamics.CRM.annotation[];
		knowledgearticle_Teams: DG.Microsoft.Dynamics.CRM.team[];
		knowledgearticle_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		knowledgearticle_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		languagelocaleid: DG.Microsoft.Dynamics.CRM.languagelocale;
		KnowledgeArticle_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		KnowledgeArticle_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		KnowledgeArticle_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		KnowledgeArticle_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		KnowledgeArticle_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		PreviousArticleContentId: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		knowledgearticle_previousarticle_contentid: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		RootArticleId: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		knowledgearticle_rootarticle_id: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		knowledgearticle_views: DG.Microsoft.Dynamics.CRM.knowledgearticleviews[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		KnowledgeArticle_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		incident_knowledgearticles: DG.Microsoft.Dynamics.CRM.knowledgearticleincident[];
		ParentArticleContentId: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		knowledgearticle_parentarticle_contentid: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		knowledgearticle_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		KnowledgeArticle_Emails: DG.Microsoft.Dynamics.CRM.email[];
		KnowledgeArticle_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		primaryauthorid: DG.Microsoft.Dynamics.CRM.systemuser;
		KnowledgeArticle_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		KnowledgeArticle_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		knowledgearticle_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		knowledgearticle_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		subjectid: DG.Microsoft.Dynamics.CRM.subject;
	}
	interface businessunit extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		address1_line2: string;
		address1_stateorprovince: string;
		address1_addresstypecode: number;
		_organizationid_value: System.Guid;
		address2_addresstypecode: number;
		_modifiedonbehalfby_value: System.Guid;
		address2_addressid: System.Guid;
		creditlimit: number;
		exchangerate: number;
		emailaddress: string;
		_modifiedby_value: System.Guid;
		stockexchange: string;
		address1_telephone1: string;
		address2_shippingmethodcode: number;
		address2_country: string;
		address2_name: string;
		versionnumber: number;
		createdon: Date;
		tickersymbol: string;
		address2_utcoffset: number;
		address2_latitude: number;
		name: string;
		_parentbusinessunitid_value: System.Guid;
		address2_fax: string;
		importsequencenumber: number;
		picture: string;
		address1_county: string;
		address2_line1: string;
		_createdonbehalfby_value: System.Guid;
		address2_telephone2: string;
		divisionname: string;
		websiteurl: string;
		address2_telephone1: string;
		address2_postofficebox: string;
		fileasname: string;
		address1_telephone3: string;
		address1_line1: string;
		address2_line3: string;
		address1_city: string;
		modifiedon: Date;
		businessunitid: System.Guid;
		utcoffset: number;
		address2_longitude: number;
		address1_shippingmethodcode: number;
		address1_latitude: number;
		inheritancemask: number;
		costcenter: string;
		address1_utcoffset: number;
		address2_line2: string;
		address1_fax: string;
		address1_name: string;
		address1_line3: string;
		address2_telephone3: string;
		address1_longitude: number;
		address2_upszone: string;
		_calendarid_value: System.Guid;
		address2_county: string;
		address2_city: string;
		address1_postofficebox: string;
		workflowsuspended: boolean;
		address1_postalcode: string;
		_createdby_value: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		address1_telephone2: string;
		address1_upszone: string;
		address2_stateorprovince: string;
		overriddencreatedon: Date;
		address2_postalcode: string;
		address1_country: string;
		description: string;
		isdisabled: boolean;
		address1_addressid: System.Guid;
		disabledreason: string;
		ftpsiteurl: string;
		business_unit_exchangesyncidmapping: DG.Microsoft.Dynamics.CRM.exchangesyncidmapping[];
		business_unit_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		business_unit_sharepointdocumentlocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		business_unit_entitlement: DG.Microsoft.Dynamics.CRM.entitlement[];
		business_unit_goal: DG.Microsoft.Dynamics.CRM.goal[];
		business_unit_mailbox: DG.Microsoft.Dynamics.CRM.mailbox[];
		business_unit_leads: DG.Microsoft.Dynamics.CRM.lead[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		BulkDeleteOperation_BusinessUnit: DG.Microsoft.Dynamics.CRM.bulkdeleteoperation[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		business_unit_workflow: DG.Microsoft.Dynamics.CRM.workflow[];
		BusinessUnit_SyncError: DG.Microsoft.Dynamics.CRM.syncerror[];
		business_unit_PostRegarding: DG.Microsoft.Dynamics.CRM.postregarding[];
		business_unit_postfollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		BusinessUnit_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		business_unit_queues: DG.Microsoft.Dynamics.CRM.queue[];
		business_unit_fax_activities: DG.Microsoft.Dynamics.CRM.fax[];
		business_unit_calendars: DG.Microsoft.Dynamics.CRM.calendar[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		business_unit_invoices: DG.Microsoft.Dynamics.CRM.invoice[];
		business_unit_quotes: DG.Microsoft.Dynamics.CRM.quote[];
		BusinessUnit_ImportLogs: DG.Microsoft.Dynamics.CRM.importlog[];
		business_unit_annotations: DG.Microsoft.Dynamics.CRM.annotation[];
		calendarid: DG.Microsoft.Dynamics.CRM.calendar;
		business_unit_opportunities: DG.Microsoft.Dynamics.CRM.opportunity[];
		business_unit_recurringappointmentmaster_activities: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		business_unit_templates: DG.Microsoft.Dynamics.CRM.template[];
		business_unit_accounts: DG.Microsoft.Dynamics.CRM.account[];
		business_unit_resource_specs: DG.Microsoft.Dynamics.CRM.resourcespec[];
		business_unit_orders: DG.Microsoft.Dynamics.CRM.salesorder[];
		business_unit_order_close_activities: DG.Microsoft.Dynamics.CRM.orderclose[];
		business_unit_socialprofiles: DG.Microsoft.Dynamics.CRM.socialprofile[];
		business_unit_appointment_activities: DG.Microsoft.Dynamics.CRM.appointment[];
		business_unit_letter_activities: DG.Microsoft.Dynamics.CRM.letter[];
		business_unit_task_activities: DG.Microsoft.Dynamics.CRM.task[];
		business_unit_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer[];
		business_unit_list: DG.Microsoft.Dynamics.CRM.list[];
		business_unit_queues2: DG.Microsoft.Dynamics.CRM.queue[];
		business_unit_asyncoperation: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		business_unit_email_activities: DG.Microsoft.Dynamics.CRM.email[];
		business_unit_roles: DG.Microsoft.Dynamics.CRM.role[];
		business_unit_resource_groups: DG.Microsoft.Dynamics.CRM.resourcegroup[];
		business_unit_teams: DG.Microsoft.Dynamics.CRM.team[];
		business_unit_equipment: DG.Microsoft.Dynamics.CRM.equipment[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		business_unit_userqueryvisualizations: DG.Microsoft.Dynamics.CRM.userqueryvisualization[];
		business_unit_slakpiinstance: DG.Microsoft.Dynamics.CRM.slakpiinstance[];
		BusinessUnit_DuplicateRules: DG.Microsoft.Dynamics.CRM.duplicaterule[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		BusinessUnit_Campaigns: DG.Microsoft.Dynamics.CRM.campaign[];
		BusinessUnit_ImportData: DG.Microsoft.Dynamics.CRM.importdata[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		business_unit_phone_call_activities: DG.Microsoft.Dynamics.CRM.phonecall[];
		business_unit_service_contracts: DG.Microsoft.Dynamics.CRM.contract[];
		business_unit_incidents: DG.Microsoft.Dynamics.CRM.incident[];
		business_unit_contacts: DG.Microsoft.Dynamics.CRM.contact[];
		business_unit_sharepointsites: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		business_unit_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofile[];
		business_unit_mailmergetemplates: DG.Microsoft.Dynamics.CRM.mailmergetemplate[];
		business_unit_BulkOperation_activities: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		business_unit_workflowlogs: DG.Microsoft.Dynamics.CRM.workflowlog[];
		business_unit_resources: DG.Microsoft.Dynamics.CRM.resource[];
		BusinessUnit_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		business_unit_quote_close_activities: DG.Microsoft.Dynamics.CRM.quoteclose[];
		business_unit_connections: DG.Microsoft.Dynamics.CRM.connection[];
		business_unit_personaldocumenttemplates: DG.Microsoft.Dynamics.CRM.personaldocumenttemplate[];
		business_unit_campaignresponse_activities: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		BusinessUnit_ImportFiles: DG.Microsoft.Dynamics.CRM.importfile[];
		business_unit_reports: DG.Microsoft.Dynamics.CRM.report[];
		business_unit_user_settings: DG.Microsoft.Dynamics.CRM.usersettings[];
		business_unit_incident_resolution_activities: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		business_unit_constraint_based_groups: DG.Microsoft.Dynamics.CRM.constraintbasedgroup[];
		BusinessUnit_Imports: DG.Microsoft.Dynamics.CRM.import[];
		business_unit_system_users: DG.Microsoft.Dynamics.CRM.systemuser[];
		business_unit_slabase: DG.Microsoft.Dynamics.CRM.sla[];
		business_unit_userform: DG.Microsoft.Dynamics.CRM.userform[];
		business_unit_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		business_unit_goalrollupquery: DG.Microsoft.Dynamics.CRM.goalrollupquery[];
		business_unit_userquery: DG.Microsoft.Dynamics.CRM.userquery[];
		business_unit_service_appointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		BusinessUnit_ImportMaps: DG.Microsoft.Dynamics.CRM.importmap[];
		business_unit_campaignactivity_activities: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		business_unit_opportunity_close_activities: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		parentbusinessunitid: DG.Microsoft.Dynamics.CRM.businessunit;
		business_unit_parent_business_unit: DG.Microsoft.Dynamics.CRM.businessunit[];
		business_unit_dg_booking: DG.Microsoft.Dynamics.CRM.dg_booking[];
		business_unit_dg_plane: DG.Microsoft.Dynamics.CRM.dg_plane[];
		business_unit_dg_hotel: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		business_unit_dg_car: DG.Microsoft.Dynamics.CRM.dg_car[];
	}
	interface sharepointdocumentlocation extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		importsequencenumber: number;
		description: string;
		_ownerid_value: System.Guid;
		createdon: Date;
		_owningbusinessunit_value: System.Guid;
		modifiedon: Date;
		_transactioncurrencyid_value: System.Guid;
		_owninguser_value: System.Guid;
		absoluteurl: string;
		name: string;
		_createdby_value: System.Guid;
		locationtype: number;
		_modifiedonbehalfby_value: System.Guid;
		_regardingobjectid_value: System.Guid;
		_parentsiteorlocation_value: System.Guid;
		versionnumber: number;
		timezoneruleversionnumber: number;
		exchangerate: number;
		statecode: number;
		_owningteam_value: System.Guid;
		sitecollectionid: System.Guid;
		utcconversiontimezonecode: number;
		overriddencreatedon: Date;
		relativeurl: string;
		userid: System.Guid;
		_modifiedby_value: System.Guid;
		sharepointdocumentlocationid: System.Guid;
		servicetype: number;
		_createdonbehalfby_value: System.Guid;
		statuscode: number;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.account;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quote;
		regardingobjectid_product: DG.Microsoft.Dynamics.CRM.product;
		parentsiteorlocation_sharepointdocumentlocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation;
		sharepointdocumentlocation_parent_sharepointdocumentlocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.lead;
		SharePointDocumentLocation_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_salesliterature: DG.Microsoft.Dynamics.CRM.salesliterature;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunity;
		parentsiteorlocation_sharepointsite: DG.Microsoft.Dynamics.CRM.sharepointsite;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_kbarticle: DG.Microsoft.Dynamics.CRM.kbarticle;
		SharePointDocumentLocation_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		SharePointDocumentLocation_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
	}
	interface product extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_modifiedbyexternalparty_value: System.Guid;
		description: string;
		productstructure: number;
		productnumber: string;
		_subjectid_value: System.Guid;
		vendorname: string;
		entityimage: number[];
		quantityonhand: number;
		_createdonbehalfby_value: System.Guid;
		validtodate: Microsoft.OData.Edm.Library.Date;
		_modifiedonbehalfby_value: System.Guid;
		validfromdate: Microsoft.OData.Edm.Library.Date;
		vendorpartnumber: string;
		statecode: number;
		exchangerate: number;
		modifiedon: Date;
		productid: System.Guid;
		vendorid: string;
		utcconversiontimezonecode: number;
		quantitydecimal: number;
		_createdbyexternalparty_value: System.Guid;
		statuscode: number;
		producttypecode: number;
		entityimage_timestamp: number;
		producturl: string;
		_modifiedby_value: System.Guid;
		traversedpath: string;
		currentcost: number;
		price: number;
		_parentproductid_value: System.Guid;
		_createdby_value: System.Guid;
		createdon: Date;
		isstockitem: boolean;
		overriddencreatedon: Date;
		name: string;
		stockweight: number;
		suppliername: string;
		price_base: number;
		currentcost_base: number;
		_defaultuomid_value: System.Guid;
		_organizationid_value: System.Guid;
		entityimageid: System.Guid;
		entityimage_url: string;
		standardcost: number;
		importsequencenumber: number;
		dmtimportstate: number;
		iskit: boolean;
		stageid: System.Guid;
		stockvolume: number;
		size: string;
		hierarchypath: string;
		versionnumber: number;
		_pricelevelid_value: System.Guid;
		_defaultuomscheduleid_value: System.Guid;
		standardcost_base: number;
		processid: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		timezoneruleversionnumber: number;
		campaignproduct_association: DG.Microsoft.Dynamics.CRM.campaign[];
		leadproduct_association: DG.Microsoft.Dynamics.CRM.lead[];
		competitorproduct_association: DG.Microsoft.Dynamics.CRM.competitor[];
		productsalesliterature_association: DG.Microsoft.Dynamics.CRM.salesliterature[];
		Product_ProductAssociation_AssocProd: DG.Microsoft.Dynamics.CRM.productassociation[];
		product_ProductSubstitute_productid: DG.Microsoft.Dynamics.CRM.productsubstitute[];
		product_ProductSubstitute_substitutedproductid: DG.Microsoft.Dynamics.CRM.productsubstitute[];
		product_entitlement_association: DG.Microsoft.Dynamics.CRM.entitlement[];
		opportunity_products: DG.Microsoft.Dynamics.CRM.opportunityproduct[];
		Product_SharepointDocumentLocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		product_incidents: DG.Microsoft.Dynamics.CRM.incident[];
		product_quote_details: DG.Microsoft.Dynamics.CRM.quotedetail[];
		defaultuomscheduleid: DG.Microsoft.Dynamics.CRM.uomschedule;
		Product_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		product_entitlementtemplate_association: DG.Microsoft.Dynamics.CRM.entitlementtemplate[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		product_invoice_details: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		Product_ProductAssociation_Prod: DG.Microsoft.Dynamics.CRM.productassociation[];
		defaultuomid: DG.Microsoft.Dynamics.CRM.uom;
		product_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		pricelevelid: DG.Microsoft.Dynamics.CRM.pricelevel;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		Product_RecommendationCache_ItemId: DG.Microsoft.Dynamics.CRM.recommendationcache[];
		product_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		Product_RecommendationCache_RecommendedItemId: DG.Microsoft.Dynamics.CRM.recommendationcache[];
		Product_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		parentproductid: DG.Microsoft.Dynamics.CRM.product;
		product_parent_product: DG.Microsoft.Dynamics.CRM.product[];
		product_contract_line_items: DG.Microsoft.Dynamics.CRM.contractdetail[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		product_order_details: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		product_price_levels: DG.Microsoft.Dynamics.CRM.productpricelevel[];
		subjectid: DG.Microsoft.Dynamics.CRM.subject;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		Product_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface productassociation extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_uomid_value: System.Guid;
		modifiedon: Date;
		productisrequired: number;
		productassociationid: System.Guid;
		overriddencreatedon: Date;
		dmtimportstate: number;
		statuscode: number;
		exchangerate: number;
		_associatedproduct_value: System.Guid;
		statecode: number;
		versionnumber: number;
		createdon: Date;
		_createdonbehalfby_value: System.Guid;
		_createdby_value: System.Guid;
		quantity: number;
		_organizationid_value: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		propertycustomizationstatus: number;
		_modifiedonbehalfby_value: System.Guid;
		_modifiedby_value: System.Guid;
		_productid_value: System.Guid;
		importsequencenumber: number;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		associatedproduct: DG.Microsoft.Dynamics.CRM.product;
		productAssociation_invoice_details: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		productid: DG.Microsoft.Dynamics.CRM.product;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		productAssociation_salesorder_details: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		ProductAssociation_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		uomid: DG.Microsoft.Dynamics.CRM.uom;
		productAssociation_quote_details: DG.Microsoft.Dynamics.CRM.quotedetail[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		productAssociation_opportunity_product: DG.Microsoft.Dynamics.CRM.opportunityproduct[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface organization extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		isauditenabled: boolean;
		timeformatstring: string;
		reportinggroupid: System.Guid;
		usereadform: boolean;
		allowaddressbooksyncs: boolean;
		dateformatcode: number;
		fiscalyearperiodconnect: string;
		useinbuiltrulefordefaultpricelistselection: boolean;
		mobileofflinesyncinterval: number;
		currencydecimalprecision: number;
		isappmode: boolean;
		autoapplydefaultoncasecreate: boolean;
		officeappsautodeploymentenabled: boolean;
		incomingemailexchangeemailretrievalbatchsize: number;
		sqlaccessgroupid: System.Guid;
		currentinvoicenumber: number;
		emailcorrelationenabled: boolean;
		cascadestatusupdate: boolean;
		goalrollupexpirytime: number;
		kbprefix: string;
		autoapplydefaultoncaseupdate: boolean;
		isassignedtaskssyncenabled: boolean;
		isautosaveenabled: boolean;
		currencydisplayoption: number;
		currentparsedtablenumber: number;
		isdisabled: boolean;
		orgdborgsettings: string;
		fiscalyearformatprefix: number;
		entityimage: number[];
		picture: string;
		displaynavigationtour: boolean;
		initialversion: string;
		generatealertsforwarnings: boolean;
		isfulltextsearchenabled: boolean;
		allowmarketingemailexecution: boolean;
		maximumactivebusinessprocessflowsallowedperentity: number;
		businessclosurecalendarid: System.Guid;
		sortid: number;
		currencyformatcode: number;
		enablepricingoncreate: boolean;
		longdateformatcode: number;
		currencysymbol: string;
		_basecurrencyid_value: System.Guid;
		organizationid: System.Guid;
		enforcereadonlyplugins: boolean;
		cortanaproactiveexperienceenabled: boolean;
		allowusersseeappdownloadmessage: boolean;
		isuseraccessauditenabled: boolean;
		maxsupportedinternetexplorerversion: number;
		nexttrackingnumber: number;
		contractprefix: string;
		isdelegateaccessenabled: boolean;
		tagpollingperiod: number;
		expiresubscriptionsindays: number;
		yammernetworkpermalink: string;
		basecurrencyprecision: number;
		discountcalculationmethod: number;
		fiscalperiodtype: number;
		webresourcehash: string;
		requireapprovalforuseremail: boolean;
		currentkbnumber: number;
		decimalsymbol: string;
		recurrenceexpansionsynchcreatemax: number;
		isdefaultcountrycodecheckenabled: boolean;
		invoiceprefix: string;
		isappointmentattachmentsyncenabled: boolean;
		calendartype: number;
		localeid: number;
		taskbasedflowenabled: boolean;
		sampledataimportid: System.Guid;
		allowoutlookscheduledsyncs: boolean;
		dayssincerecordlastmodifiedmaxvalue: number;
		useskypeprotocol: boolean;
		maxrecordsforexporttoexcel: number;
		defaultthemedata: string;
		mobileofflineminlicenseprod: number;
		isduplicatedetectionenabledforimport: boolean;
		weekstartdaycode: number;
		numbergroupformat: string;
		maxfolderbasedtrackingmappings: number;
		fiscalyearformatyear: number;
		numberseparator: string;
		officegraphdelveurl: string;
		parsedtableprefix: string;
		goalrollupfrequency: number;
		quoteprefix: string;
		entityimage_url: string;
		showweeknumber: boolean;
		currentbulkoperationnumber: number;
		externalpartycorrelationkeys: string;
		parsedtablecolumnprefix: string;
		emailconnectionchannel: number;
		currentcontractnumber: number;
		ismobileofflineenabled: boolean;
		minaddressbooksyncinterval: number;
		sqlaccessgroupname: string;
		uniquespecifierlength: number;
		_createdby_value: System.Guid;
		plugintracelogsetting: number;
		socialinsightsenabled: boolean;
		name: string;
		pastexpansionwindow: number;
		negativecurrencyformatcode: number;
		privreportinggroupname: string;
		recurrenceexpansionjobbatchinterval: number;
		mailboxintermittentissueminrange: number;
		enablesmartmatching: boolean;
		hashdeltasubjectcount: number;
		socialinsightsinstance: string;
		trackingprefix: string;
		usepositionhierarchy: boolean;
		trackingtokenidbase: number;
		basecurrencysymbol: string;
		kmsettings: string;
		maxappointmentdurationdays: number;
		allowwebexcelexport: boolean;
		privacystatementurl: string;
		integrationuserid: System.Guid;
		currentimportsequencenumber: number;
		yearstartweekcode: number;
		tokenkey: string;
		timeformatcode: number;
		enablebingmapsintegration: boolean;
		isexternalsearchindexenabled: boolean;
		defaultemailsettings: string;
		versionnumber: number;
		fiscalperiodformat: string;
		timezoneruleversionnumber: number;
		fiscalyearformatsuffix: number;
		schemanameprefix: string;
		currentordernumber: number;
		maxdepthforhierarchicalsecuritymodel: number;
		amdesignator: string;
		globalhelpurlenabled: boolean;
		yammergroupid: number;
		modifiedon: Date;
		maxverboseloggingsynccycles: number;
		timeseparator: string;
		currentcampaignnumber: number;
		mailboxpermanentissueminrange: number;
		showkbarticledeprecationnotification: boolean;
		grantaccesstonetworkservice: boolean;
		_defaultemailserverprofileid_value: System.Guid;
		defaultrecurrenceendrangetype: number;
		isduplicatedetectionenabledforofflinesync: boolean;
		minofflinesyncinterval: number;
		oobpricecalculationenabled: boolean;
		isfiscalperiodmonthbased: boolean;
		currentquotenumber: number;
		trackingtokeniddigits: number;
		ismailboxforcedunlockingenabled: boolean;
		createproductswithoutparentinactivestate: boolean;
		isduplicatedetectionenabledforonlinecreateupdate: boolean;
		hashfilterkeywords: string;
		delegatedadminuserid: System.Guid;
		orderprefix: string;
		createdon: Date;
		dateformatstring: string;
		rendersecureiframeforemail: boolean;
		globalappendurlparametersenabled: boolean;
		externalpartyentitysettings: string;
		fiscalyearformat: string;
		getstartedpanecontentenabled: boolean;
		maximumtrackingnumber: number;
		mobileofflineminlicensetrial: number;
		kaprefix: string;
		socialinsightstermsaccepted: boolean;
		currentkanumber: number;
		privilegeusergroupid: System.Guid;
		_defaultmobileofflineprofileid_value: System.Guid;
		suppresssla: boolean;
		generatealertsforerrors: boolean;
		disabledreason: string;
		yammeroauthaccesstokenexpired: boolean;
		autoapplysla: boolean;
		isofficegraphenabled: boolean;
		futureexpansionwindow: number;
		campaignprefix: string;
		dateseparator: string;
		supportuserid: System.Guid;
		maxverboseloggingmailbox: number;
		tagmaxaggressivecycles: number;
		ishierarchicalsecuritymodelenabled: boolean;
		sharetopreviousowneronassign: boolean;
		bingmapsapikey: string;
		_modifiedby_value: System.Guid;
		pmdesignator: string;
		isemailserverprofilecontentfilteringenabled: boolean;
		negativeformatcode: number;
		isduplicatedetectionenabled: boolean;
		featureset: string;
		signupoutlookdownloadfwlink: string;
		maxrecordsforlookupfilters: number;
		entityimage_timestamp: number;
		maxproductsinbundle: number;
		fiscalyeardisplaycode: number;
		pricingdecimalprecision: number;
		disablesocialcare: boolean;
		requireapprovalforqueueemail: boolean;
		sqmenabled: boolean;
		allowunresolvedpartiesonemailsend: boolean;
		bulkoperationprefix: string;
		isfolderbasedtrackingenabled: boolean;
		entityimageid: System.Guid;
		hashmaxcount: number;
		azureschedulerjobcollectionname: string;
		isonedriveenabled: boolean;
		systemuserid: System.Guid;
		maximumdynamicpropertiesallowed: number;
		ismailboxinactivebackoffenabled: boolean;
		issopintegrationenabled: boolean;
		reportscripterrors: number;
		caseprefix: string;
		slapausestates: string;
		expirechangetrackingindays: number;
		allowclientmessagebarad: boolean;
		pinpointlanguagecode: number;
		quickfindrecordlimitenabled: boolean;
		ispresenceenabled: boolean;
		_modifiedonbehalfby_value: System.Guid;
		iscontactmailingaddresssyncenabled: boolean;
		uselegacyrendering: boolean;
		highcontrastthemedata: string;
		defaultcountrycode: string;
		sharepointdeploymenttype: number;
		numberformat: string;
		allowentityonlyaudit: boolean;
		minoutlooksyncinterval: number;
		allowautounsubscribeacknowledgement: boolean;
		allowofflinescheduledsyncs: boolean;
		globalhelpurl: string;
		hashminaddresscount: number;
		allowautoresponsecreation: boolean;
		generatealertsforinformation: boolean;
		recurrenceexpansionjobbatchsize: number;
		tokenexpiry: number;
		_createdonbehalfby_value: System.Guid;
		yammerpostmethod: number;
		currentcasenumber: number;
		privreportinggroupid: System.Guid;
		recurrencedefaultnumberofoccurrences: number;
		emailsendpollingperiod: number;
		blockedattachments: string;
		useraccessauditinginterval: number;
		fiscalcalendarstart: Date;
		fiscalperiodformatperiod: number;
		utcconversiontimezonecode: number;
		reportinggroupname: string;
		restrictstatusupdate: boolean;
		allowuserformmodepreference: boolean;
		usergroupid: System.Guid;
		fullnameconventioncode: number;
		notifymailboxownerofemailserverlevelalerts: boolean;
		ignoreinternalemail: boolean;
		languagecode: number;
		maxuploadfilesize: number;
		_acknowledgementtemplateid_value: System.Guid;
		allowautounsubscribe: boolean;
		v3calloutconfighash: string;
		organization_ProductAssociation: DG.Microsoft.Dynamics.CRM.productassociation[];
		organization_theme: DG.Microsoft.Dynamics.CRM.theme[];
		organization_metric: DG.Microsoft.Dynamics.CRM.metric[];
		organization_position: DG.Microsoft.Dynamics.CRM.position[];
		organization_sites: DG.Microsoft.Dynamics.CRM.site[];
		organization_officegraphdocument: DG.Microsoft.Dynamics.CRM.officegraphdocument[];
		organization_KnowledgeBaseRecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecord[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organization_resource_groups: DG.Microsoft.Dynamics.CRM.resourcegroup[];
		organization_ProductSubstitute: DG.Microsoft.Dynamics.CRM.productsubstitute[];
		organization_resource_specs: DG.Microsoft.Dynamics.CRM.resourcespec[];
		organization_sdkmessagefilter: DG.Microsoft.Dynamics.CRM.sdkmessagefilter[];
		webresource_organization: DG.Microsoft.Dynamics.CRM.webresource[];
		organization_post: DG.Microsoft.Dynamics.CRM.post[];
		organization_PostComment: DG.Microsoft.Dynamics.CRM.postcomment[];
		organization_postlike: DG.Microsoft.Dynamics.CRM.postlike[];
		organization_importjob: DG.Microsoft.Dynamics.CRM.importjob[];
		organization_queues: DG.Microsoft.Dynamics.CRM.queue[];
		businessclosurecalendarid_calendar: DG.Microsoft.Dynamics.CRM.calendar;
		organization_pluginassembly: DG.Microsoft.Dynamics.CRM.pluginassembly[];
		organization_textanalyticsentitymapping: DG.Microsoft.Dynamics.CRM.textanalyticsentitymapping[];
		lk_fieldsecurityprofile_organizationid: DG.Microsoft.Dynamics.CRM.fieldsecurityprofile[];
		organization_recommendationmodelversionhistory: DG.Microsoft.Dynamics.CRM.recommendationmodelversionhistory[];
		organization_similarityrule: DG.Microsoft.Dynamics.CRM.similarityrule[];
		organization_services: DG.Microsoft.Dynamics.CRM.service[];
		entitlementtemplatechannel_organization: DG.Microsoft.Dynamics.CRM.entitlementtemplatechannel[];
		organization_contract_templates: DG.Microsoft.Dynamics.CRM.contracttemplate[];
		organization_saved_query_visualizations: DG.Microsoft.Dynamics.CRM.savedqueryvisualization[];
		organization_system_users: DG.Microsoft.Dynamics.CRM.systemuser[];
		organization_recommendationmodelversion: DG.Microsoft.Dynamics.CRM.recommendationmodelversion[];
		organization_publisher: DG.Microsoft.Dynamics.CRM.publisher[];
		organization_plugintype: DG.Microsoft.Dynamics.CRM.plugintype[];
		lk_dataperformance_organizationid: DG.Microsoft.Dynamics.CRM.dataperformance[];
		organization_serviceendpoint: DG.Microsoft.Dynamics.CRM.serviceendpoint[];
		organization_sdkmessageprocessingstep: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		basecurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		Organization_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		entitlementtemplate_organization: DG.Microsoft.Dynamics.CRM.entitlementtemplate[];
		organization_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofile[];
		organization_saved_queries: DG.Microsoft.Dynamics.CRM.savedquery[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organization_teams: DG.Microsoft.Dynamics.CRM.team[];
		defaultmobileofflineprofileid: DG.Microsoft.Dynamics.CRM.mobileofflineprofile;
		lk_documenttemplatebase_organization: DG.Microsoft.Dynamics.CRM.documenttemplate[];
		organization_resources: DG.Microsoft.Dynamics.CRM.resource[];
		organization_queueitems: DG.Microsoft.Dynamics.CRM.queueitem[];
		organization_complexcontrols: DG.Microsoft.Dynamics.CRM.complexcontrol[];
		organization_solution: DG.Microsoft.Dynamics.CRM.solution[];
		organization_business_units: DG.Microsoft.Dynamics.CRM.businessunit[];
		organization_topicmodelexecutionhistory: DG.Microsoft.Dynamics.CRM.topicmodelexecutionhistory[];
		MobileOfflineProfile_organization: DG.Microsoft.Dynamics.CRM.mobileofflineprofile[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		organization_equipment: DG.Microsoft.Dynamics.CRM.equipment[];
		organization_discount_types: DG.Microsoft.Dynamics.CRM.discounttype[];
		organization_sales_literature: DG.Microsoft.Dynamics.CRM.salesliterature[];
		organization_sdkmessageprocessingstepimage: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepimage[];
		customcontrol_organization: DG.Microsoft.Dynamics.CRM.customcontrol[];
		organization_sdkmessageprocessingstepsecureconfig: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepsecureconfig[];
		organization_roles: DG.Microsoft.Dynamics.CRM.role[];
		MobileOfflineProfileItemAssociation_organization: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitemassociation[];
		organization_competitors: DG.Microsoft.Dynamics.CRM.competitor[];
		organization_recommendationmodelmapping: DG.Microsoft.Dynamics.CRM.recommendationmodelmapping[];
		Organization_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		organization_topicmodelconfiguration: DG.Microsoft.Dynamics.CRM.topicmodelconfiguration[];
		organization_tracelog: DG.Microsoft.Dynamics.CRM.tracelog[];
		organization_territories: DG.Microsoft.Dynamics.CRM.territory[];
		organization_systemforms: DG.Microsoft.Dynamics.CRM.systemform[];
		organization_uof_schedules: DG.Microsoft.Dynamics.CRM.uomschedule[];
		organization_business_unit_news_articles: DG.Microsoft.Dynamics.CRM.businessunitnewsarticle[];
		organization_kb_articles: DG.Microsoft.Dynamics.CRM.kbarticle[];
		organization_topicmodel: DG.Microsoft.Dynamics.CRM.topicmodel[];
		organization_sdkmessage: DG.Microsoft.Dynamics.CRM.sdkmessage[];
		MobileOfflineProfileItem_organization: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitem[];
		defaultemailserverprofileid: DG.Microsoft.Dynamics.CRM.emailserverprofile;
		organization_kb_article_templates: DG.Microsoft.Dynamics.CRM.kbarticletemplate[];
		customcontrolresource_organization: DG.Microsoft.Dynamics.CRM.customcontrolresource[];
		organization_mailbox: DG.Microsoft.Dynamics.CRM.mailbox[];
		organization_calendars: DG.Microsoft.Dynamics.CRM.calendar[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		organization_azureserviceconnection: DG.Microsoft.Dynamics.CRM.azureserviceconnection[];
		organization_webwizard: DG.Microsoft.Dynamics.CRM.webwizard[];
		organization_connection_roles: DG.Microsoft.Dynamics.CRM.connectionrole[];
		customcontroldefaultconfig_organization: DG.Microsoft.Dynamics.CRM.customcontroldefaultconfig[];
		organization_knowledgesearchmodel: DG.Microsoft.Dynamics.CRM.knowledgesearchmodel[];
		organization_transactioncurrencies: DG.Microsoft.Dynamics.CRM.transactioncurrency[];
		organization_price_levels: DG.Microsoft.Dynamics.CRM.pricelevel[];
		acknowledgementtemplateid: DG.Microsoft.Dynamics.CRM.template;
		entitlementchannel_organization: DG.Microsoft.Dynamics.CRM.entitlementchannel[];
		organization_constraint_based_groups: DG.Microsoft.Dynamics.CRM.constraintbasedgroup[];
		organization_recommendationmodel: DG.Microsoft.Dynamics.CRM.recommendationmodel[];
		languagelocale_organization: DG.Microsoft.Dynamics.CRM.languagelocale[];
		organization_products: DG.Microsoft.Dynamics.CRM.product[];
		organization_subjects: DG.Microsoft.Dynamics.CRM.subject[];
		organization_dg_country: DG.Microsoft.Dynamics.CRM.dg_country[];
	}
	interface theme extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		headercolor: string;
		name: string;
		controlborder: string;
		globallinkcolor: string;
		navbarbackgroundcolor: string;
		_modifiedby_value: System.Guid;
		timezoneruleversionnumber: number;
		backgroundcolor: string;
		_logoid_value: System.Guid;
		_organizationid_value: System.Guid;
		isdefaulttheme: boolean;
		exchangerate: number;
		importsequencenumber: number;
		overriddencreatedon: Date;
		processcontrolcolor: string;
		_transactioncurrencyid_value: System.Guid;
		type: boolean;
		hoverlinkeffect: string;
		utcconversiontimezonecode: number;
		defaultentitycolor: string;
		logotooltip: string;
		_createdonbehalfby_value: System.Guid;
		themeid: System.Guid;
		defaultcustomentitycolor: string;
		createdon: Date;
		selectedlinkeffect: string;
		navbarshelfcolor: string;
		statecode: number;
		modifiedon: Date;
		versionnumber: number;
		_createdby_value: System.Guid;
		controlshade: string;
		_modifiedonbehalfby_value: System.Guid;
		statuscode: number;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		theme_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		theme_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		logoimage: DG.Microsoft.Dynamics.CRM.webresource;
	}
	interface asyncoperation extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		createdon: Date;
		statecode: number;
		_owningextensionid_value: System.Guid;
		operationtype: number;
		subtype: number;
		message: string;
		dependencytoken: string;
		correlationupdatedtime: Date;
		depth: number;
		name: string;
		_createdonbehalfby_value: System.Guid;
		executiontimespan: number;
		modifiedon: Date;
		_workflowactivationid_value: System.Guid;
		_ownerid_value: System.Guid;
		postponeuntil: Date;
		_modifiedby_value: System.Guid;
		_owningteam_value: System.Guid;
		completedon: Date;
		primaryentitytype: string;
		_regardingobjectid_value: System.Guid;
		data: string;
		recurrencepattern: string;
		timezoneruleversionnumber: number;
		sequence: number;
		_createdby_value: System.Guid;
		correlationid: System.Guid;
		_owninguser_value: System.Guid;
		workflowstagename: string;
		_owningbusinessunit_value: System.Guid;
		recurrencestarttime: Date;
		errorcode: number;
		hostid: string;
		messagename: string;
		_modifiedonbehalfby_value: System.Guid;
		utcconversiontimezonecode: number;
		statuscode: number;
		requestid: System.Guid;
		friendlymessage: string;
		iswaitingforevent: boolean;
		retrycount: number;
		startedon: Date;
		asyncoperationid: System.Guid;
		regardingobjectid_theme: DG.Microsoft.Dynamics.CRM.theme;
		regardingobjectid_productsubstitute: DG.Microsoft.Dynamics.CRM.productsubstitute;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlement;
		regardingobjectid_entitlementchannel: DG.Microsoft.Dynamics.CRM.entitlementchannel;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplate;
		regardingobjectid_post: DG.Microsoft.Dynamics.CRM.post;
		regardingobjectid_position: DG.Microsoft.Dynamics.CRM.position;
		regardingobjectid_similarityrule: DG.Microsoft.Dynamics.CRM.similarityrule;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecord;
		regardingobjectid_productpricelevel: DG.Microsoft.Dynamics.CRM.productpricelevel;
		regardingobjectid_report: DG.Microsoft.Dynamics.CRM.report;
		AsyncOperation_Emails: DG.Microsoft.Dynamics.CRM.email[];
		regardingobjectid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster;
		regardingobjectid_incidentresolution: DG.Microsoft.Dynamics.CRM.incidentresolution;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunity;
		regardingobjectid_privilege: DG.Microsoft.Dynamics.CRM.privilege;
		AsyncOperation_BulkDeleteOperation: DG.Microsoft.Dynamics.CRM.bulkdeleteoperation[];
		regardingobjectid_goalrollupquery: DG.Microsoft.Dynamics.CRM.goalrollupquery;
		regardingobjectid_discounttype: DG.Microsoft.Dynamics.CRM.discounttype;
		AsyncOperation_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		regardingobjectid_postfollow: DG.Microsoft.Dynamics.CRM.postfollow;
		regardingobjectid_businessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		regardingobjectid_annualfiscalcalendar: DG.Microsoft.Dynamics.CRM.annualfiscalcalendar;
		regardingobjectid_equipment: DG.Microsoft.Dynamics.CRM.equipment;
		regardingobjectid_discount: DG.Microsoft.Dynamics.CRM.discount;
		workflowactivationid: DG.Microsoft.Dynamics.CRM.workflow;
		regardingobjectid_monthlyfiscalcalendar: DG.Microsoft.Dynamics.CRM.monthlyfiscalcalendar;
		regardingobjectid_mailbox: DG.Microsoft.Dynamics.CRM.mailbox;
		regardingobjectid_importfile: DG.Microsoft.Dynamics.CRM.importfile;
		lk_workflowlog_asyncoperation_childworkflow: DG.Microsoft.Dynamics.CRM.workflowlog[];
		regardingobjectid_importdata: DG.Microsoft.Dynamics.CRM.importdata;
		regardingobjectid_email: DG.Microsoft.Dynamics.CRM.email;
		regardingobjectid_team: DG.Microsoft.Dynamics.CRM.team;
		AsyncOperation_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		regardingobjectid_opportunityclose: DG.Microsoft.Dynamics.CRM.opportunityclose;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.lead;
		regardingobjectid_kbarticletemplate: DG.Microsoft.Dynamics.CRM.kbarticletemplate;
		regardingobjectid_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofile;
		regardingobjectid_userform: DG.Microsoft.Dynamics.CRM.userform;
		regardingobjectid_transactioncurrency: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		regardingobjectid_socialprofile: DG.Microsoft.Dynamics.CRM.socialprofile;
		regardingobjectid_opportunityproduct: DG.Microsoft.Dynamics.CRM.opportunityproduct;
		regardingobjectid_importmap: DG.Microsoft.Dynamics.CRM.importmap;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.account;
		regardingobjectid_phonecall: DG.Microsoft.Dynamics.CRM.phonecall;
		regardingobjectid_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity;
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorder;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contract;
		regardingobjectid_queueitem: DG.Microsoft.Dynamics.CRM.queueitem;
		regardingobjectid_quarterlyfiscalcalendar: DG.Microsoft.Dynamics.CRM.quarterlyfiscalcalendar;
		regardingobjectid_queue: DG.Microsoft.Dynamics.CRM.queue;
		regardingobjectid_template: DG.Microsoft.Dynamics.CRM.template;
		regardingobjectid_serviceappointment: DG.Microsoft.Dynamics.CRM.serviceappointment;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_kbarticle: DG.Microsoft.Dynamics.CRM.kbarticle;
		regardingobjectid_systemform: DG.Microsoft.Dynamics.CRM.systemform;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		regardingobjectid_organization: DG.Microsoft.Dynamics.CRM.organization;
		regardingobjectid_connectionrole: DG.Microsoft.Dynamics.CRM.connectionrole;
		regardingobjectid_site: DG.Microsoft.Dynamics.CRM.site;
		regardingobjectid_kbarticlecomment: DG.Microsoft.Dynamics.CRM.kbarticlecomment;
		regardingobjectid_appointment: DG.Microsoft.Dynamics.CRM.appointment;
		regardingobjectid_systemuser: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_mailmergetemplate: DG.Microsoft.Dynamics.CRM.mailmergetemplate;
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaign;
		regardingobjectid_quoteclose: DG.Microsoft.Dynamics.CRM.quoteclose;
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incident;
		regardingobjectid_calendar: DG.Microsoft.Dynamics.CRM.calendar;
		regardingobjectid_productassociation: DG.Microsoft.Dynamics.CRM.productassociation;
		regardingobjectid_contracttemplate: DG.Microsoft.Dynamics.CRM.contracttemplate;
		regardingobjectid_connection: DG.Microsoft.Dynamics.CRM.connection;
		regardingobjectid_metric: DG.Microsoft.Dynamics.CRM.metric;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_role: DG.Microsoft.Dynamics.CRM.role;
		regardingobjectid_resource: DG.Microsoft.Dynamics.CRM.resource;
		regardingobjectid_salesorderdetail: DG.Microsoft.Dynamics.CRM.salesorderdetail;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		regardingobjectid_subject: DG.Microsoft.Dynamics.CRM.subject;
		regardingobjectid_uomschedule: DG.Microsoft.Dynamics.CRM.uomschedule;
		regardingobjectid_savedquery: DG.Microsoft.Dynamics.CRM.savedquery;
		regardingobjectid_sla: DG.Microsoft.Dynamics.CRM.sla;
		regardingobjectid_activitymimeattachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment;
		regardingobjectid_letter: DG.Microsoft.Dynamics.CRM.letter;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		regardingobjectid_product: DG.Microsoft.Dynamics.CRM.product;
		regardingobjectid_invoicedetail: DG.Microsoft.Dynamics.CRM.invoicedetail;
		regardingobjectid_list: DG.Microsoft.Dynamics.CRM.list;
		regardingobjectid_competitor: DG.Microsoft.Dynamics.CRM.competitor;
		regardingobjectid_orderclose: DG.Microsoft.Dynamics.CRM.orderclose;
		regardingobjectid_quotedetail: DG.Microsoft.Dynamics.CRM.quotedetail;
		regardingobjectid_annotation: DG.Microsoft.Dynamics.CRM.annotation;
		regardingobjectid_userquery: DG.Microsoft.Dynamics.CRM.userquery;
		lk_workflowlog_asyncoperations: DG.Microsoft.Dynamics.CRM.workflowlog[];
		regardingobjectid_task: DG.Microsoft.Dynamics.CRM.task;
		regardingobjectid_contractdetail: DG.Microsoft.Dynamics.CRM.contractdetail;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contact;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quote;
		regardingobjectid_sharepointsite: DG.Microsoft.Dynamics.CRM.sharepointsite;
		regardingobjectid_salesliterature: DG.Microsoft.Dynamics.CRM.salesliterature;
		owningextensionid: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep;
		regardingobjectid_businessunitnewsarticle: DG.Microsoft.Dynamics.CRM.businessunitnewsarticle;
		regardingobjectid_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse;
		regardingobjectid_goal: DG.Microsoft.Dynamics.CRM.goal;
		regardingobjectid_importlog: DG.Microsoft.Dynamics.CRM.importlog;
		regardingobjectid_semiannualfiscalcalendar: DG.Microsoft.Dynamics.CRM.semiannualfiscalcalendar;
		regardingobjectid_territory: DG.Microsoft.Dynamics.CRM.territory;
		regardingobjectid_fixedmonthlyfiscalcalendar: DG.Microsoft.Dynamics.CRM.fixedmonthlyfiscalcalendar;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperation;
		regardingobjectid_customeraddress: DG.Microsoft.Dynamics.CRM.customeraddress;
		regardingobjectid_service: DG.Microsoft.Dynamics.CRM.service;
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoice;
		regardingobjectid_uom: DG.Microsoft.Dynamics.CRM.uom;
		regardingobjectid_fax: DG.Microsoft.Dynamics.CRM.fax;
		regardingobjectid_bulkoperationlog: DG.Microsoft.Dynamics.CRM.bulkoperationlog;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity;
		regardingobjectid_resourcespec: DG.Microsoft.Dynamics.CRM.resourcespec;
		regardingobjectid_salesliteratureitem: DG.Microsoft.Dynamics.CRM.salesliteratureitem;
		regardingobjectid_sharepointdocumentlocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation;
		regardingobjectid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		regardingobjectid_pricelevel: DG.Microsoft.Dynamics.CRM.pricelevel;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_constraintbasedgroup: DG.Microsoft.Dynamics.CRM.constraintbasedgroup;
		regardingobjectid_import: DG.Microsoft.Dynamics.CRM.import;
		regardingobjectid_resourcegroup: DG.Microsoft.Dynamics.CRM.resourcegroup;
		regardingobjectid_dg_booking: DG.Microsoft.Dynamics.CRM.dg_booking;
		regardingobjectid_dg_plane: DG.Microsoft.Dynamics.CRM.dg_plane;
		regardingobjectid_dg_hotel: DG.Microsoft.Dynamics.CRM.dg_hotel;
		regardingobjectid_dg_car: DG.Microsoft.Dynamics.CRM.dg_car;
		regardingobjectid_dg_country: DG.Microsoft.Dynamics.CRM.dg_country;
	}
	interface productsubstitute extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		salesrelationshiptype: number;
		_transactioncurrencyid_value: System.Guid;
		exchangerate: number;
		_createdonbehalfby_value: System.Guid;
		_organizationid_value: System.Guid;
		statecode: number;
		_productid_value: System.Guid;
		versionnumber: number;
		statuscode: number;
		_modifiedonbehalfby_value: System.Guid;
		_createdby_value: System.Guid;
		importsequencenumber: number;
		direction: number;
		createdon: Date;
		modifiedon: Date;
		productsubstituteid: System.Guid;
		_modifiedby_value: System.Guid;
		_substitutedproductid_value: System.Guid;
		overriddencreatedon: Date;
		utcconversiontimezonecode: number;
		timezoneruleversionnumber: number;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		ProductSubstitute_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		ProductSubstitute_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		productid: DG.Microsoft.Dynamics.CRM.product;
		substitutedproductid: DG.Microsoft.Dynamics.CRM.product;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
	}
	interface bulkdeletefailure extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		owninguser: System.Guid;
		_bulkdeleteoperationid_value: System.Guid;
		_asyncoperationid_value: System.Guid;
		owningbusinessunit: System.Guid;
		errornumber: number;
		errordescription: string;
		bulkdeletefailureid: System.Guid;
		_ownerid_value: System.Guid;
		orderedqueryindex: number;
		_regardingobjectid_value: System.Guid;
		regardingobjectid_theme: DG.Microsoft.Dynamics.CRM.theme;
		regardingobjectid_productsubstitute: DG.Microsoft.Dynamics.CRM.productsubstitute;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlement;
		regardingobjectid_entitlementchannel: DG.Microsoft.Dynamics.CRM.entitlementchannel;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplate;
		regardingobjectid_post: DG.Microsoft.Dynamics.CRM.post;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecord;
		regardingobjectid_customeraddress: DG.Microsoft.Dynamics.CRM.customeraddress;
		regardingobjectid_annualfiscalcalendar: DG.Microsoft.Dynamics.CRM.annualfiscalcalendar;
		regardingobjectid_fax: DG.Microsoft.Dynamics.CRM.fax;
		regardingobjectid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster;
		regardingobjectid_queue: DG.Microsoft.Dynamics.CRM.queue;
		regardingobjectid_contractdetail: DG.Microsoft.Dynamics.CRM.contractdetail;
		regardingobjectid_calendar: DG.Microsoft.Dynamics.CRM.calendar;
		regardingobjectid_quotedetail: DG.Microsoft.Dynamics.CRM.quotedetail;
		regardingobjectid_serviceappointment: DG.Microsoft.Dynamics.CRM.serviceappointment;
		regardingobjectid_invoicedetail: DG.Microsoft.Dynamics.CRM.invoicedetail;
		regardingobjectid_kbarticlecomment: DG.Microsoft.Dynamics.CRM.kbarticlecomment;
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaign;
		regardingobjectid_product: DG.Microsoft.Dynamics.CRM.product;
		regardingobjectid_annotation: DG.Microsoft.Dynamics.CRM.annotation;
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorder;
		regardingobjectid_letter: DG.Microsoft.Dynamics.CRM.letter;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperation;
		regardingobjectid_privilege: DG.Microsoft.Dynamics.CRM.privilege;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quote;
		regardingobjectid_phonecall: DG.Microsoft.Dynamics.CRM.phonecall;
		regardingobjectid_fixedmonthlyfiscalcalendar: DG.Microsoft.Dynamics.CRM.fixedmonthlyfiscalcalendar;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.lead;
		regardingobjectid_bulkoperationlog: DG.Microsoft.Dynamics.CRM.bulkoperationlog;
		regardingobjectid_businessunitnewsarticle: DG.Microsoft.Dynamics.CRM.businessunitnewsarticle;
		regardingobjectid_systemuser: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_kbarticle: DG.Microsoft.Dynamics.CRM.kbarticle;
		regardingobjectid_template: DG.Microsoft.Dynamics.CRM.template;
		regardingobjectid_resource: DG.Microsoft.Dynamics.CRM.resource;
		regardingobjectid_incidentresolution: DG.Microsoft.Dynamics.CRM.incidentresolution;
		regardingobjectid_quarterlyfiscalcalendar: DG.Microsoft.Dynamics.CRM.quarterlyfiscalcalendar;
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoice;
		regardingobjectid_semiannualfiscalcalendar: DG.Microsoft.Dynamics.CRM.semiannualfiscalcalendar;
		regardingobjectid_importfile: DG.Microsoft.Dynamics.CRM.importfile;
		regardingobjectid_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse;
		regardingobjectid_systemform: DG.Microsoft.Dynamics.CRM.systemform;
		regardingobjectid_discounttype: DG.Microsoft.Dynamics.CRM.discounttype;
		regardingobjectid_salesliterature: DG.Microsoft.Dynamics.CRM.salesliterature;
		regardingobjectid_site: DG.Microsoft.Dynamics.CRM.site;
		regardingobjectid_territory: DG.Microsoft.Dynamics.CRM.territory;
		regardingobjectid_uomschedule: DG.Microsoft.Dynamics.CRM.uomschedule;
		regardingobjectid_resourcegroup: DG.Microsoft.Dynamics.CRM.resourcegroup;
		regardingobjectid_importlog: DG.Microsoft.Dynamics.CRM.importlog;
		regardingobjectid_role: DG.Microsoft.Dynamics.CRM.role;
		regardingobjectid_quoteclose: DG.Microsoft.Dynamics.CRM.quoteclose;
		regardingobjectid_userform: DG.Microsoft.Dynamics.CRM.userform;
		regardingobjectid_equipment: DG.Microsoft.Dynamics.CRM.equipment;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.account;
		regardingobjectid_orderclose: DG.Microsoft.Dynamics.CRM.orderclose;
		regardingobjectid_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity;
		regardingobjectid_email: DG.Microsoft.Dynamics.CRM.email;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunity;
		regardingobjectid_resourcespec: DG.Microsoft.Dynamics.CRM.resourcespec;
		regardingobjectid_savedquery: DG.Microsoft.Dynamics.CRM.savedquery;
		regardingobjectid_userquery: DG.Microsoft.Dynamics.CRM.userquery;
		regardingobjectid_appointment: DG.Microsoft.Dynamics.CRM.appointment;
		regardingobjectid_organization: DG.Microsoft.Dynamics.CRM.organization;
		regardingobjectid_service: DG.Microsoft.Dynamics.CRM.service;
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incident;
		regardingobjectid_businessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		regardingobjectid_opportunityclose: DG.Microsoft.Dynamics.CRM.opportunityclose;
		regardingobjectid_monthlyfiscalcalendar: DG.Microsoft.Dynamics.CRM.monthlyfiscalcalendar;
		regardingobjectid_activitymimeattachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment;
		regardingobjectid_contracttemplate: DG.Microsoft.Dynamics.CRM.contracttemplate;
		regardingobjectid_kbarticletemplate: DG.Microsoft.Dynamics.CRM.kbarticletemplate;
		regardingobjectid_opportunityproduct: DG.Microsoft.Dynamics.CRM.opportunityproduct;
		regardingobjectid_productpricelevel: DG.Microsoft.Dynamics.CRM.productpricelevel;
		regardingobjectid_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofile;
		regardingobjectid_sla: DG.Microsoft.Dynamics.CRM.sla;
		bulkdeleteoperationid: DG.Microsoft.Dynamics.CRM.bulkdeleteoperation;
		regardingobjectid_salesliteratureitem: DG.Microsoft.Dynamics.CRM.salesliteratureitem;
		regardingobjectid_uom: DG.Microsoft.Dynamics.CRM.uom;
		regardingobjectid_import: DG.Microsoft.Dynamics.CRM.import;
		regardingobjectid_pricelevel: DG.Microsoft.Dynamics.CRM.pricelevel;
		regardingobjectid_importmap: DG.Microsoft.Dynamics.CRM.importmap;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contract;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity;
		regardingobjectid_competitor: DG.Microsoft.Dynamics.CRM.competitor;
		regardingobjectid_importdata: DG.Microsoft.Dynamics.CRM.importdata;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contact;
		regardingobjectid_discount: DG.Microsoft.Dynamics.CRM.discount;
		regardingobjectid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		regardingobjectid_list: DG.Microsoft.Dynamics.CRM.list;
		regardingobjectid_salesorderdetail: DG.Microsoft.Dynamics.CRM.salesorderdetail;
		regardingobjectid_task: DG.Microsoft.Dynamics.CRM.task;
		regardingobjectid_team: DG.Microsoft.Dynamics.CRM.team;
		regardingobjectid_queueitem: DG.Microsoft.Dynamics.CRM.queueitem;
		regardingobjectid_constraintbasedgroup: DG.Microsoft.Dynamics.CRM.constraintbasedgroup;
		regardingobjectid_subject: DG.Microsoft.Dynamics.CRM.subject;
		regardingobjectid_dg_booking: DG.Microsoft.Dynamics.CRM.dg_booking;
		regardingobjectid_dg_plane: DG.Microsoft.Dynamics.CRM.dg_plane;
		regardingobjectid_dg_hotel: DG.Microsoft.Dynamics.CRM.dg_hotel;
		regardingobjectid_dg_car: DG.Microsoft.Dynamics.CRM.dg_car;
		regardingobjectid_dg_country: DG.Microsoft.Dynamics.CRM.dg_country;
	}
	interface entitlement extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		decreaseremainingon: number;
		startdate: Date;
		statecode: number;
		kbaccesslevel: number;
		entitlementid: System.Guid;
		modifiedon: Date;
		versionnumber: number;
		importsequencenumber: number;
		enddate: Date;
		_customerid_value: System.Guid;
		restrictcasecreation: boolean;
		isdefault: boolean;
		_owningteam_value: System.Guid;
		exchangerate: number;
		allocationtypecode: number;
		_accountid_value: System.Guid;
		remainingterms: number;
		_contactid_value: System.Guid;
		processid: System.Guid;
		description: string;
		_transactioncurrencyid_value: System.Guid;
		_owningbusinessunit_value: System.Guid;
		_slaid_value: System.Guid;
		createdon: Date;
		_owninguser_value: System.Guid;
		statuscode: number;
		overriddencreatedon: Date;
		totalterms: number;
		_ownerid_value: System.Guid;
		stageid: System.Guid;
		utcconversiontimezonecode: number;
		_modifiedonbehalfby_value: System.Guid;
		traversedpath: string;
		_entitlementtemplateid_value: System.Guid;
		_createdby_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		timezoneruleversionnumber: number;
		_modifiedby_value: System.Guid;
		name: string;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		entitlement_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		entitlement_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		entitlement_Emails: DG.Microsoft.Dynamics.CRM.email[];
		entitlement_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		entitlement_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		entitlement_PhoneCalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		entitlement_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		entitlement_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		entitlement_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		entitlement_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		entitlement_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		entitlement_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		entitlement_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		entitlement_Annotations: DG.Microsoft.Dynamics.CRM.annotation[];
		entitlement_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		entitlement_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		customerid_account: DG.Microsoft.Dynamics.CRM.account;
		entitlement_entitlementchannel_EntitlementId: DG.Microsoft.Dynamics.CRM.entitlementchannel[];
		product_entitlement_association: DG.Microsoft.Dynamics.CRM.product[];
		entitlementtemplateid: DG.Microsoft.Dynamics.CRM.entitlementtemplate;
		accountid: DG.Microsoft.Dynamics.CRM.account;
		contactid: DG.Microsoft.Dynamics.CRM.contact;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		entitlement_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		slaid: DG.Microsoft.Dynamics.CRM.sla;
		entitlementcontacts_association: DG.Microsoft.Dynamics.CRM.contact[];
		customerid_contact: DG.Microsoft.Dynamics.CRM.contact;
		entitlement_cases: DG.Microsoft.Dynamics.CRM.incident[];
	}
	interface activitypointer extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_ownerid_value: System.Guid;
		createdon: Date;
		statuscode: number;
		versionnumber: number;
		modifiedon: Date;
		_regardingobjectid_value: System.Guid;
		scheduledstart: Date;
		processid: System.Guid;
		isbilled: boolean;
		_transactioncurrencyid_value: System.Guid;
		_sendermailboxid_value: System.Guid;
		scheduleddurationminutes: number;
		activityadditionalparams: string;
		_owningbusinessunit_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		scheduledend: Date;
		postponeactivityprocessinguntil: Date;
		_createdby_value: System.Guid;
		deliveryprioritycode: number;
		_owningteam_value: System.Guid;
		ismapiprivate: boolean;
		_owninguser_value: System.Guid;
		actualend: Date;
		actualdurationminutes: number;
		_serviceid_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		seriesid: System.Guid;
		activityid: System.Guid;
		description: string;
		leftvoicemail: boolean;
		isworkflowcreated: boolean;
		senton: Date;
		community: number;
		_modifiedby_value: System.Guid;
		prioritycode: number;
		statecode: number;
		activitytypecode: string;
		utcconversiontimezonecode: number;
		actualstart: Date;
		instancetypecode: number;
		subject: string;
		deliverylastattemptedon: Date;
		timezoneruleversionnumber: number;
		stageid: System.Guid;
		isregularactivity: boolean;
		exchangerate: number;
		traversedpath: string;
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlement;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplate;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecord;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.account;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contract;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contact;
		CreatedActivity_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		activity_pointer_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		activity_pointer_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		activity_pointer_email: DG.Microsoft.Dynamics.CRM.email[];
		sendermailboxid: DG.Microsoft.Dynamics.CRM.mailbox;
		activity_pointer_quote_close: DG.Microsoft.Dynamics.CRM.quoteclose[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		ActivityPointer_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorder;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunity;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		activity_pointer_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		ActivityPointer_CampaignActivityItems: DG.Microsoft.Dynamics.CRM.campaignactivityitem[];
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoice;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quote;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.lead;
		activity_pointer_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		activity_pointer_service_appointment: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		activity_pointer_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		activity_pointer_fax: DG.Microsoft.Dynamics.CRM.fax[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		activity_pointer_BulkOperation_logs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperation;
		serviceid: DG.Microsoft.Dynamics.CRM.service;
		activity_pointer_task: DG.Microsoft.Dynamics.CRM.task[];
		activity_pointer_opportunity_close: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incident;
		activity_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		activity_pointer_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		activity_pointer_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		activity_pointer_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		activity_pointer_order_close: DG.Microsoft.Dynamics.CRM.orderclose[];
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaign;
		activity_pointer_incident_resolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		activity_pointer_letter: DG.Microsoft.Dynamics.CRM.letter[];
		activitypointer_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity;
		ActivityPointer_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		activitypointer_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		ActivityPointer_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		activitypointer_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
	}
	interface entitlementtemplate extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		restrictcasecreation: boolean;
		entitlementtemplateid: System.Guid;
		exchangerate: number;
		modifiedon: Date;
		_transactioncurrencyid_value: System.Guid;
		importsequencenumber: number;
		_createdby_value: System.Guid;
		_organizationid_value: System.Guid;
		startdate: Date;
		decreaseremainingon: number;
		enddate: Date;
		_createdonbehalfby_value: System.Guid;
		allocationtypecode: number;
		_modifiedby_value: System.Guid;
		utcconversiontimezonecode: number;
		_slaid_value: System.Guid;
		versionnumber: number;
		timezoneruleversionnumber: number;
		description: string;
		_modifiedonbehalfby_value: System.Guid;
		createdon: Date;
		overriddencreatedon: Date;
		totalterms: number;
		kbaccesslevel: number;
		name: string;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		entitlementtemplate_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		entitlementtemplate_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		entitlementtemplate_Emails: DG.Microsoft.Dynamics.CRM.email[];
		entitlementtemplate_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		entitlementtemplate_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		entitlementtemplate_PhoneCalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		entitlementtemplate_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		entitlementtemplate_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		entitlementtemplate_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		entitlementtemplate_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		entitlementtemplate_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		entitlementtemplate_Annotations: DG.Microsoft.Dynamics.CRM.annotation[];
		entitlementtemplate_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		entitlementtemplate_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		entitlementtemplateid_RelationShip: DG.Microsoft.Dynamics.CRM.entitlement[];
		product_entitlementtemplate_association: DG.Microsoft.Dynamics.CRM.product[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		slaid: DG.Microsoft.Dynamics.CRM.sla;
		entitlementtemplate_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		entitlementtemplate_entitlementchannel_entitlementtemplateid: DG.Microsoft.Dynamics.CRM.entitlementtemplatechannel[];
	}
	interface appointment extends DG.Microsoft.Dynamics.CRM.activitypointer {
		overriddencreatedon: Date;
		importsequencenumber: number;
		subscriptionid: System.Guid;
		modifiedfieldsmask: string;
		globalobjectid: string;
		attachmenterrors: number;
		outlookownerapptid: number;
		isalldayevent: boolean;
		subcategory: string;
		originalstartdate: Date;
		category: string;
		location: string;
		regardingobjectid_entitlement_appointment: DG.Microsoft.Dynamics.CRM.entitlement;
		regardingobjectid_entitlementtemplate_appointment: DG.Microsoft.Dynamics.CRM.entitlementtemplate;
		appointment_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		appointment_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		regardingobjectid_knowledgebaserecord_appointment: DG.Microsoft.Dynamics.CRM.knowledgebaserecord;
		Appointment_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_invoice_appointment: DG.Microsoft.Dynamics.CRM.invoice;
		Appointment_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		regardingobjectid_incident_appointment: DG.Microsoft.Dynamics.CRM.incident;
		seriesid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster;
		owningbusinessunit_appointment: DG.Microsoft.Dynamics.CRM.businessunit;
		Appointment_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		regardingobjectid_campaign_appointment: DG.Microsoft.Dynamics.CRM.campaign;
		appointment_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		regardingobjectid_quote_appointment: DG.Microsoft.Dynamics.CRM.quote;
		regardingobjectid_contract_appointment: DG.Microsoft.Dynamics.CRM.contract;
		Appointment_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedonbehalfby_appointment: DG.Microsoft.Dynamics.CRM.systemuser;
		Appointment_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		appointment_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		modifiedby_appointment: DG.Microsoft.Dynamics.CRM.systemuser;
		appointment_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		Appointment_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		regardingobjectid_lead_appointment: DG.Microsoft.Dynamics.CRM.lead;
		appointment_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		regardingobjectid_opportunity_appointment: DG.Microsoft.Dynamics.CRM.opportunity;
		regardingobjectid_contact_appointment: DG.Microsoft.Dynamics.CRM.contact;
		createdonbehalfby_appointment: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_knowledgearticle_appointment: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		serviceid_appointment: DG.Microsoft.Dynamics.CRM.service;
		regardingobjectid_account_appointment: DG.Microsoft.Dynamics.CRM.account;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		transactioncurrencyid_appointment: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		createdby_appointment: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_salesorder_appointment: DG.Microsoft.Dynamics.CRM.salesorder;
		regardingobjectid_bulkoperation_appointment: DG.Microsoft.Dynamics.CRM.bulkoperation;
		regardingobjectid_campaignactivity_appointment: DG.Microsoft.Dynamics.CRM.campaignactivity;
		owningteam_appointment: DG.Microsoft.Dynamics.CRM.team;
		appointment_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		owninguser_appointment: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface postregarding extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		postregardingid: System.Guid;
		_regardingobjectid_value: System.Guid;
		_regardingobjectowningbusinessunit_value: System.Guid;
		latestmanualpostmodifiedon: Date;
		_regardingobjectownerid_value: System.Guid;
		latestautopostmodifiedon: Date;
		regardingobjecttypecodeforsharing: string;
		regardingobjectid_task: DG.Microsoft.Dynamics.CRM.task;
		regardingobjectid_appointment: DG.Microsoft.Dynamics.CRM.appointment;
		regardingobjectid_phonecall: DG.Microsoft.Dynamics.CRM.phonecall;
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incident;
		regardingobjectid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster;
		post_PostRegardings: DG.Microsoft.Dynamics.CRM.post[];
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.account;
		regardingobjectid_systemuser: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectowningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contact;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunity;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.lead;
		regardingobjectid_team: DG.Microsoft.Dynamics.CRM.team;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		regardingobjectid_queue: DG.Microsoft.Dynamics.CRM.queue;
		regardingobjectid_competitor: DG.Microsoft.Dynamics.CRM.competitor;
	}
	interface task extends DG.Microsoft.Dynamics.CRM.activitypointer {
		importsequencenumber: number;
		category: string;
		subscriptionid: System.Guid;
		overriddencreatedon: Date;
		percentcomplete: number;
		subcategory: string;
		crmtaskassigneduniqueid: System.Guid;
		regardingobjectid_entitlement_task: DG.Microsoft.Dynamics.CRM.entitlement;
		regardingobjectid_entitlementtemplate_task: DG.Microsoft.Dynamics.CRM.entitlementtemplate;
		task_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		task_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		regardingobjectid_knowledgebaserecord_task: DG.Microsoft.Dynamics.CRM.knowledgebaserecord;
		task_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		Task_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		regardingobjectid_lead_task: DG.Microsoft.Dynamics.CRM.lead;
		Task_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		regardingobjectid_contact_task: DG.Microsoft.Dynamics.CRM.contact;
		owningteam_task: DG.Microsoft.Dynamics.CRM.team;
		regardingobjectid_quote_task: DG.Microsoft.Dynamics.CRM.quote;
		regardingobjectid_opportunity_task: DG.Microsoft.Dynamics.CRM.opportunity;
		owningbusinessunit_task: DG.Microsoft.Dynamics.CRM.businessunit;
		task_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		transactioncurrencyid_task: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		serviceid_task: DG.Microsoft.Dynamics.CRM.service;
		regardingobjectid_campaign_task: DG.Microsoft.Dynamics.CRM.campaign;
		task_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		regardingobjectid_invoice_task: DG.Microsoft.Dynamics.CRM.invoice;
		regardingobjectid_account_task: DG.Microsoft.Dynamics.CRM.account;
		Task_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		modifiedby_task: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby_task: DG.Microsoft.Dynamics.CRM.systemuser;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		Task_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		regardingobjectid_knowledgearticle_task: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		createdonbehalfby_task: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_campaignactivity_task: DG.Microsoft.Dynamics.CRM.campaignactivity;
		regardingobjectid_contract_task: DG.Microsoft.Dynamics.CRM.contract;
		regardingobjectid_salesorder_task: DG.Microsoft.Dynamics.CRM.salesorder;
		owninguser_task: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby_task: DG.Microsoft.Dynamics.CRM.systemuser;
		Task_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_incident_task: DG.Microsoft.Dynamics.CRM.incident;
		Task_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
	}
	interface postfollow extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_owningteam_value: System.Guid;
		postfollowid: System.Guid;
		_owninguser_value: System.Guid;
		_regardingobjectid_value: System.Guid;
		utcconversiontimezonecode: number;
		timezoneruleversionnumber: number;
		_ownerid_value: System.Guid;
		_createdby_value: System.Guid;
		createdon: Date;
		_owningbusinessunit_value: System.Guid;
		yammerpoststate: number;
		_createdonbehalfby_value: System.Guid;
		regardingobjectid_task: DG.Microsoft.Dynamics.CRM.task;
		regardingobjectid_appointment: DG.Microsoft.Dynamics.CRM.appointment;
		regardingobjectid_phonecall: DG.Microsoft.Dynamics.CRM.phonecall;
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incident;
		regardingobjectid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.account;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contact;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.lead;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunity;
		regardingobjectid_systemuser: DG.Microsoft.Dynamics.CRM.systemuser;
		PostFollow_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_queue: DG.Microsoft.Dynamics.CRM.queue;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		regardingobjectid_competitor: DG.Microsoft.Dynamics.CRM.competitor;
	}
	interface phonecall extends DG.Microsoft.Dynamics.CRM.activitypointer {
		importsequencenumber: number;
		phonenumber: string;
		category: string;
		overriddencreatedon: Date;
		subscriptionid: System.Guid;
		directioncode: boolean;
		subcategory: string;
		regardingobjectid_entitlement_phonecall: DG.Microsoft.Dynamics.CRM.entitlement;
		regardingobjectid_entitlementtemplate_phonecall: DG.Microsoft.Dynamics.CRM.entitlementtemplate;
		phonecall_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		phonecall_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		regardingobjectid_knowledgebaserecord_phonecall: DG.Microsoft.Dynamics.CRM.knowledgebaserecord;
		regardingobjectid_lead_phonecall: DG.Microsoft.Dynamics.CRM.lead;
		regardingobjectid_opportunity_phonecall: DG.Microsoft.Dynamics.CRM.opportunity;
		transactioncurrencyid_phonecall: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		regardingobjectid_contact_phonecall: DG.Microsoft.Dynamics.CRM.contact;
		phonecall_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		serviceid_phonecall: DG.Microsoft.Dynamics.CRM.service;
		PhoneCall_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		modifiedonbehalfby_phonecall: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_bulkoperation_phonecall: DG.Microsoft.Dynamics.CRM.bulkoperation;
		PhoneCall_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		regardingobjectid_account_phonecall: DG.Microsoft.Dynamics.CRM.account;
		regardingobjectid_invoice_phonecall: DG.Microsoft.Dynamics.CRM.invoice;
		createdby_phonecall: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby_phonecall: DG.Microsoft.Dynamics.CRM.systemuser;
		phonecall_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		regardingobjectid_incident_phonecall: DG.Microsoft.Dynamics.CRM.incident;
		owningbusinessunit_phonecall: DG.Microsoft.Dynamics.CRM.businessunit;
		PhoneCall_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		regardingobjectid_knowledgearticle_phonecall: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		PhoneCall_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		phonecall_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		regardingobjectid_contract_phonecall: DG.Microsoft.Dynamics.CRM.contract;
		regardingobjectid_salesorder_phonecall: DG.Microsoft.Dynamics.CRM.salesorder;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		modifiedby_phonecall: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam_phonecall: DG.Microsoft.Dynamics.CRM.team;
		PhoneCall_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_campaign_phonecall: DG.Microsoft.Dynamics.CRM.campaign;
		regardingobjectid_campaignactivity_phonecall: DG.Microsoft.Dynamics.CRM.campaignactivity;
		PhoneCall_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		regardingobjectid_quote_phonecall: DG.Microsoft.Dynamics.CRM.quote;
		phonecall_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owninguser_phonecall: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface knowledgebaserecord extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_createdby_value: System.Guid;
		title: string;
		exchangerate: number;
		publicurl: string;
		_modifiedby_value: System.Guid;
		_organizationid_value: System.Guid;
		privateurl: string;
		modifiedon: Date;
		knowledgebaserecordid: System.Guid;
		createdon: Date;
		_modifiedonbehalfby_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		versionnumber: number;
		uniqueid: string;
		timezoneruleversionnumber: number;
		_transactioncurrencyid_value: System.Guid;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		KnowledgeBaseRecord_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		KnowledgeBaseRecord_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		KnowledgeBaseRecord_Emails: DG.Microsoft.Dynamics.CRM.email[];
		KnowledgeBaseRecord_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		KnowledgeBaseRecord_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		KnowledgeBaseRecord_PhoneCalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		KnowledgeBaseRecord_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		KnowledgeBaseRecord_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		KnowledgeBaseRecord_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		KnowledgeBaseRecord_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		KnowledgeBaseRecord_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		KnowledgeBaseRecord_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		KnowledgeBaseRecord_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		KnowledgeBaseRecord_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		KnowledgeBaseRecord_Annotations: DG.Microsoft.Dynamics.CRM.annotation[];
		KnowledgeBaseRecord_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		KnowledgeBaseRecord_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		KnowledgeBaseRecord_Incident: DG.Microsoft.Dynamics.CRM.incident[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
	}
	interface email extends DG.Microsoft.Dynamics.CRM.activitypointer {
		compressed: boolean;
		_parentactivityid_value: System.Guid;
		correlationmethod: number;
		notifications: number;
		postponeemailprocessinguntil: Date;
		sender: string;
		torecipients: string;
		overriddencreatedon: Date;
		submittedby: string;
		inreplyto: string;
		readreceiptrequested: boolean;
		isunsafe: number;
		importsequencenumber: number;
		messageid: string;
		deliveryreceiptrequested: boolean;
		category: string;
		directioncode: boolean;
		mimetype: string;
		deliveryattempts: number;
		conversationindex: string;
		subcategory: string;
		_emailsender_value: System.Guid;
		attachmentcount: number;
		trackingtoken: string;
		_sendersaccount_value: System.Guid;
		regardingobjectid_entitlement_email: DG.Microsoft.Dynamics.CRM.entitlement;
		regardingobjectid_entitlementtemplate_email: DG.Microsoft.Dynamics.CRM.entitlementtemplate;
		regardingobjectid_knowledgebaserecord_email: DG.Microsoft.Dynamics.CRM.knowledgebaserecord;
		regardingobjectid_bulkoperation_email: DG.Microsoft.Dynamics.CRM.bulkoperation;
		transactioncurrencyid_email: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		regardingobjectid_asyncoperation: DG.Microsoft.Dynamics.CRM.asyncoperation;
		sendersaccount: DG.Microsoft.Dynamics.CRM.account;
		emailsender_account: DG.Microsoft.Dynamics.CRM.account;
		regardingobjectid_lead_email: DG.Microsoft.Dynamics.CRM.lead;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		regardingobjectid_salesorder_email: DG.Microsoft.Dynamics.CRM.salesorder;
		emailsender_lead: DG.Microsoft.Dynamics.CRM.lead;
		Email_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		regardingobjectid_opportunity_email: DG.Microsoft.Dynamics.CRM.opportunity;
		Email_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		email_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		sendermailboxid_email: DG.Microsoft.Dynamics.CRM.mailbox;
		email_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		email_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		regardingobjectid_invoice_email: DG.Microsoft.Dynamics.CRM.invoice;
		owningbusinessunit_email: DG.Microsoft.Dynamics.CRM.businessunit;
		emailsender_contact: DG.Microsoft.Dynamics.CRM.contact;
		owninguser_email: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby_email: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_incident_email: DG.Microsoft.Dynamics.CRM.incident;
		owningteam_email: DG.Microsoft.Dynamics.CRM.team;
		regardingobjectid_campaign_email: DG.Microsoft.Dynamics.CRM.campaign;
		emailsender_queue: DG.Microsoft.Dynamics.CRM.queue;
		Email_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		Email_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdonbehalfby_email: DG.Microsoft.Dynamics.CRM.systemuser;
		email_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		regardingobjectid_knowledgearticle_email: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		emailsender_equipment: DG.Microsoft.Dynamics.CRM.equipment;
		regardingobjectid_campaignactivity_email: DG.Microsoft.Dynamics.CRM.campaignactivity;
		Email_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		serviceid_email: DG.Microsoft.Dynamics.CRM.service;
		modifiedonbehalfby_email: DG.Microsoft.Dynamics.CRM.systemuser;
		email_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		regardingobjectid_account_email: DG.Microsoft.Dynamics.CRM.account;
		createdby_email: DG.Microsoft.Dynamics.CRM.systemuser;
		emailsender_systemuser: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_contract_email: DG.Microsoft.Dynamics.CRM.contract;
		regardingobjectid_contact_email: DG.Microsoft.Dynamics.CRM.contact;
		Email_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		parentactivityid: DG.Microsoft.Dynamics.CRM.email;
		email_email_parentactivityid: DG.Microsoft.Dynamics.CRM.email[];
		regardingobjectid_quote_email: DG.Microsoft.Dynamics.CRM.quote;
	}
	interface bulkoperation extends DG.Microsoft.Dynamics.CRM.activitypointer {
		successcount: number;
		targetedrecordtypecode: number;
		bulkoperationnumber: string;
		errornumber: number;
		parameters: string;
		failurecount: number;
		createdrecordtypecode: number;
		operationtypecode: number;
		targetmemberscount: number;
		BulkOperation_Email: DG.Microsoft.Dynamics.CRM.email[];
		createdby_bulkoperation: DG.Microsoft.Dynamics.CRM.systemuser;
		BulkOperation_SocialActivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		BulkOperation_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		BulkOperation_Phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		BulkOperation_logs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		regardingobjectid_list: DG.Microsoft.Dynamics.CRM.list;
		BulkOperation_CampaignResponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		owninguser_bulkoperation: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_campaignactivity_bulkoperation: DG.Microsoft.Dynamics.CRM.campaignactivity;
		bulkoperation_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		owningbusinessunit_bulkoperation: DG.Microsoft.Dynamics.CRM.businessunit;
		BulkOperation_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		BulkOperation_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		BulkOperation_Letter: DG.Microsoft.Dynamics.CRM.letter[];
		createdonbehalfby_bulkoperation: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby_bulkoperation: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam_bulkoperation: DG.Microsoft.Dynamics.CRM.team;
		BulkOperation_Appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		BulkOperation_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		BulkOperation_RecurringAppointmentMaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		modifiedonbehalfby_bulkoperation: DG.Microsoft.Dynamics.CRM.systemuser;
		BulkOperation_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
	}
	interface socialactivity extends DG.Microsoft.Dynamics.CRM.activitypointer {
		posttoprofileid: string;
		socialadditionalparams: string;
		overriddencreatedon: Date;
		_postauthor_value: System.Guid;
		threadid: string;
		postmessagetype: number;
		directioncode: boolean;
		sentimentvalue: number;
		_postfromprofileid_value: System.Guid;
		posturl: string;
		postid: string;
		_postauthoraccount_value: System.Guid;
		postedon: Date;
		importsequencenumber: number;
		inresponseto: string;
		regardingobjectid_knowledgebaserecord_socialactivity: DG.Microsoft.Dynamics.CRM.knowledgebaserecord;
		socialactivity_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		regardingobjectid_entitlement_socialactivity: DG.Microsoft.Dynamics.CRM.entitlement;
		modifiedonbehalfby_socialactivity: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_incident_socialactivity: DG.Microsoft.Dynamics.CRM.incident;
		regardingobjectid_contact_socialactivity: DG.Microsoft.Dynamics.CRM.contact;
		regardingobjectid_asyncoperation: DG.Microsoft.Dynamics.CRM.asyncoperation;
		postauthor_contact: DG.Microsoft.Dynamics.CRM.contact;
		regardingobjectid_bulkoperation_socialactivity: DG.Microsoft.Dynamics.CRM.bulkoperation;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		createdonbehalfby_socialactivity: DG.Microsoft.Dynamics.CRM.systemuser;
		transactioncurrencyid_socialactivity: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		regardingobjectid_salesorder_socialactivity: DG.Microsoft.Dynamics.CRM.salesorder;
		SocialActivity_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		regardingobjectid_knowledgearticle_socialactivity: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		socialactivity_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		regardingobjectid_quote_socialactivity: DG.Microsoft.Dynamics.CRM.quote;
		owningteam_socialactivity: DG.Microsoft.Dynamics.CRM.team;
		regardingobjectid_account_socialactivity: DG.Microsoft.Dynamics.CRM.account;
		postauthoraccount_account: DG.Microsoft.Dynamics.CRM.account;
		serviceid_socialactivity: DG.Microsoft.Dynamics.CRM.service;
		regardingobjectid_entitlementtemplate_socialactivity: DG.Microsoft.Dynamics.CRM.entitlementtemplate;
		postauthoraccount_contact: DG.Microsoft.Dynamics.CRM.contact;
		createdby_socialactivity: DG.Microsoft.Dynamics.CRM.systemuser;
		SocialActivity_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		postfromprofileid: DG.Microsoft.Dynamics.CRM.socialprofile;
		postauthor_account: DG.Microsoft.Dynamics.CRM.account;
		regardingobjectid_lead_socialactivity: DG.Microsoft.Dynamics.CRM.lead;
		regardingobjectid_contract_socialactivity: DG.Microsoft.Dynamics.CRM.contract;
		modifiedby_socialactivity: DG.Microsoft.Dynamics.CRM.systemuser;
		socialactivity_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		SocialActivity_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		SocialActivity_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		owninguser_socialactivity: DG.Microsoft.Dynamics.CRM.systemuser;
		SocialActivity_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		SocialActivity_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_invoice_socialactivity: DG.Microsoft.Dynamics.CRM.invoice;
		owningbusinessunit_socialactivity: DG.Microsoft.Dynamics.CRM.businessunit;
		regardingobjectid_opportunity_socialactivity: DG.Microsoft.Dynamics.CRM.opportunity;
	}
	interface connection extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		record1objecttypecode: number;
		_transactioncurrencyid_value: System.Guid;
		statecode: number;
		_modifiedonbehalfby_value: System.Guid;
		_record1roleid_value: System.Guid;
		effectiveend: Date;
		entityimage_url: string;
		_modifiedby_value: System.Guid;
		name: string;
		exchangerate: number;
		_owningteam_value: System.Guid;
		importsequencenumber: number;
		_record2roleid_value: System.Guid;
		_createdby_value: System.Guid;
		record2objecttypecode: number;
		_ownerid_value: System.Guid;
		_owninguser_value: System.Guid;
		_record1id_value: System.Guid;
		effectivestart: Date;
		modifiedon: Date;
		description: string;
		versionnumber: number;
		entityimageid: System.Guid;
		entityimage_timestamp: number;
		_createdonbehalfby_value: System.Guid;
		overriddencreatedon: Date;
		entityimage: number[];
		statuscode: number;
		_owningbusinessunit_value: System.Guid;
		_relatedconnectionid_value: System.Guid;
		_record2id_value: System.Guid;
		ismaster: boolean;
		connectionid: System.Guid;
		createdon: Date;
		record1id_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		record2id_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		record1id_entitlement: DG.Microsoft.Dynamics.CRM.entitlement;
		record2id_entitlement: DG.Microsoft.Dynamics.CRM.entitlement;
		record1id_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecord;
		record2id_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecord;
		record1id_contact: DG.Microsoft.Dynamics.CRM.contact;
		record2id_lead: DG.Microsoft.Dynamics.CRM.lead;
		record2id_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity;
		record2id_task: DG.Microsoft.Dynamics.CRM.task;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		record1id_systemuser: DG.Microsoft.Dynamics.CRM.systemuser;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		record2id_account: DG.Microsoft.Dynamics.CRM.account;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		record1id_territory: DG.Microsoft.Dynamics.CRM.territory;
		record2id_systemuser: DG.Microsoft.Dynamics.CRM.systemuser;
		record2id_team: DG.Microsoft.Dynamics.CRM.team;
		record1id_invoice: DG.Microsoft.Dynamics.CRM.invoice;
		record1id_quote: DG.Microsoft.Dynamics.CRM.quote;
		record2id_territory: DG.Microsoft.Dynamics.CRM.territory;
		record1id_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity;
		record2id_quote: DG.Microsoft.Dynamics.CRM.quote;
		record2id_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity;
		record2id_incident: DG.Microsoft.Dynamics.CRM.incident;
		record2id_letter: DG.Microsoft.Dynamics.CRM.letter;
		record1id_contract: DG.Microsoft.Dynamics.CRM.contract;
		record2id_resourcegroup: DG.Microsoft.Dynamics.CRM.resourcegroup;
		record2id_contract: DG.Microsoft.Dynamics.CRM.contract;
		record2id_serviceappointment: DG.Microsoft.Dynamics.CRM.serviceappointment;
		record1id_email: DG.Microsoft.Dynamics.CRM.email;
		record1id_resourcegroup: DG.Microsoft.Dynamics.CRM.resourcegroup;
		record2id_list: DG.Microsoft.Dynamics.CRM.list;
		record1id_socialprofile: DG.Microsoft.Dynamics.CRM.socialprofile;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		record2id_pricelevel: DG.Microsoft.Dynamics.CRM.pricelevel;
		record1id_task: DG.Microsoft.Dynamics.CRM.task;
		record1id_campaign: DG.Microsoft.Dynamics.CRM.campaign;
		record2id_salesorder: DG.Microsoft.Dynamics.CRM.salesorder;
		record2id_email: DG.Microsoft.Dynamics.CRM.email;
		record1id_serviceappointment: DG.Microsoft.Dynamics.CRM.serviceappointment;
		record2id_competitor: DG.Microsoft.Dynamics.CRM.competitor;
		record2id_socialprofile: DG.Microsoft.Dynamics.CRM.socialprofile;
		record2id_product: DG.Microsoft.Dynamics.CRM.product;
		record1id_team: DG.Microsoft.Dynamics.CRM.team;
		record2roleid: DG.Microsoft.Dynamics.CRM.connectionrole;
		record2id_goal: DG.Microsoft.Dynamics.CRM.goal;
		record1id_position: DG.Microsoft.Dynamics.CRM.position;
		record1id_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster;
		record2id_constraintbasedgroup: DG.Microsoft.Dynamics.CRM.constraintbasedgroup;
		record1id_competitor: DG.Microsoft.Dynamics.CRM.competitor;
		record2id_opportunity: DG.Microsoft.Dynamics.CRM.opportunity;
		Connection_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		record1id_appointment: DG.Microsoft.Dynamics.CRM.appointment;
		record1id_list: DG.Microsoft.Dynamics.CRM.list;
		record1id_incident: DG.Microsoft.Dynamics.CRM.incident;
		record2id_fax: DG.Microsoft.Dynamics.CRM.fax;
		record1id_equipment: DG.Microsoft.Dynamics.CRM.equipment;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		record2id_invoice: DG.Microsoft.Dynamics.CRM.invoice;
		record1id_product: DG.Microsoft.Dynamics.CRM.product;
		relatedconnectionid: DG.Microsoft.Dynamics.CRM.connection;
		connection_related_connection: DG.Microsoft.Dynamics.CRM.connection[];
		record2id_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster;
		record1id_phonecall: DG.Microsoft.Dynamics.CRM.phonecall;
		record1id_opportunity: DG.Microsoft.Dynamics.CRM.opportunity;
		record2id_appointment: DG.Microsoft.Dynamics.CRM.appointment;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		record1id_goal: DG.Microsoft.Dynamics.CRM.goal;
		record1id_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity;
		record1id_fax: DG.Microsoft.Dynamics.CRM.fax;
		record2id_position: DG.Microsoft.Dynamics.CRM.position;
		record1roleid: DG.Microsoft.Dynamics.CRM.connectionrole;
		record1id_letter: DG.Microsoft.Dynamics.CRM.letter;
		record2id_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		record1id_account: DG.Microsoft.Dynamics.CRM.account;
		record1id_lead: DG.Microsoft.Dynamics.CRM.lead;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		record1id_constraintbasedgroup: DG.Microsoft.Dynamics.CRM.constraintbasedgroup;
		record2id_contact: DG.Microsoft.Dynamics.CRM.contact;
		record2id_equipment: DG.Microsoft.Dynamics.CRM.equipment;
		record1id_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		record2id_campaign: DG.Microsoft.Dynamics.CRM.campaign;
		record1id_salesorder: DG.Microsoft.Dynamics.CRM.salesorder;
		record2id_phonecall: DG.Microsoft.Dynamics.CRM.phonecall;
		record1id_pricelevel: DG.Microsoft.Dynamics.CRM.pricelevel;
	}
	interface transactioncurrency extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		overriddencreatedon: Date;
		currencyname: string;
		isocurrencycode: string;
		_createdonbehalfby_value: System.Guid;
		_organizationid_value: System.Guid;
		createdon: Date;
		_createdby_value: System.Guid;
		entityimage_timestamp: number;
		entityimage: number[];
		currencyprecision: number;
		entityimage_url: string;
		_modifiedonbehalfby_value: System.Guid;
		transactioncurrencyid: System.Guid;
		importsequencenumber: number;
		exchangerate: number;
		entityimageid: System.Guid;
		modifiedon: Date;
		statecode: number;
		versionnumber: number;
		currencysymbol: string;
		_modifiedby_value: System.Guid;
		statuscode: number;
		TransactionCurrency_Goal: DG.Microsoft.Dynamics.CRM.goal[];
		TransactionCurrency_Entitlement: DG.Microsoft.Dynamics.CRM.entitlement[];
		TransactionCurrency_Email: DG.Microsoft.Dynamics.CRM.email[];
		transactioncurrency_opportunityproduct: DG.Microsoft.Dynamics.CRM.opportunityproduct[];
		TransactionCurrency_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		TransactionCurrency_BusinessUnit: DG.Microsoft.Dynamics.CRM.businessunit[];
		TransactionCurrency_Connection: DG.Microsoft.Dynamics.CRM.connection[];
		TransactionCurrency_Incident: DG.Microsoft.Dynamics.CRM.incident[];
		transactioncurrency_productpricelevel: DG.Microsoft.Dynamics.CRM.productpricelevel[];
		TransactionCurrency_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		transactioncurrency_campaign: DG.Microsoft.Dynamics.CRM.campaign[];
		transactioncurrency_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		transactioncurrency_annualfiscalcalendar: DG.Microsoft.Dynamics.CRM.annualfiscalcalendar[];
		TransactionCurrency_PhoneCall: DG.Microsoft.Dynamics.CRM.phonecall[];
		TransactionCurrency_SalesLiterature: DG.Microsoft.Dynamics.CRM.salesliterature[];
		transactioncurrency_invoice: DG.Microsoft.Dynamics.CRM.invoice[];
		transactioncurrency_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		TransactionCurrency_MailMergeTemplate: DG.Microsoft.Dynamics.CRM.mailmergetemplate[];
		TransactionCurrency_ActivityPointer: DG.Microsoft.Dynamics.CRM.activitypointer[];
		transactioncurrency_salesorder: DG.Microsoft.Dynamics.CRM.salesorder[];
		TransactionCurrency_SystemUser: DG.Microsoft.Dynamics.CRM.systemuser[];
		TransactionCurrency_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		TransactionCurrency_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplate[];
		transactioncurrency_monthlyfiscalcalendar: DG.Microsoft.Dynamics.CRM.monthlyfiscalcalendar[];
		transactioncurrency_fixedmonthlyfiscalcalendar: DG.Microsoft.Dynamics.CRM.fixedmonthlyfiscalcalendar[];
		transactioncurrency_contract: DG.Microsoft.Dynamics.CRM.contract[];
		transactioncurrency_account: DG.Microsoft.Dynamics.CRM.account[];
		transactioncurrency_ProductAssociation: DG.Microsoft.Dynamics.CRM.productassociation[];
		transactioncurrency_quarterlyfiscalcalendar: DG.Microsoft.Dynamics.CRM.quarterlyfiscalcalendar[];
		TransactionCurrency_KnowledgeBaseRecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecord[];
		transactioncurrency_knowledgearticleviews: DG.Microsoft.Dynamics.CRM.knowledgearticleviews[];
		transactioncurrency_quote: DG.Microsoft.Dynamics.CRM.quote[];
		TransactionCurrency_CustomerAddress: DG.Microsoft.Dynamics.CRM.customeraddress[];
		TransactionCurrency_Fax: DG.Microsoft.Dynamics.CRM.fax[];
		transactioncurrency_position: DG.Microsoft.Dynamics.CRM.position[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		TransactionCurrency_Task: DG.Microsoft.Dynamics.CRM.task[];
		basecurrency_organization: DG.Microsoft.Dynamics.CRM.organization[];
		transactioncurrency_quotedetail: DG.Microsoft.Dynamics.CRM.quotedetail[];
		transactioncurrency_competitor: DG.Microsoft.Dynamics.CRM.competitor[];
		transactioncurrency_contractdetail: DG.Microsoft.Dynamics.CRM.contractdetail[];
		transactioncurrency_discount: DG.Microsoft.Dynamics.CRM.discount[];
		transactioncurrency_list: DG.Microsoft.Dynamics.CRM.list[];
		transactioncurrency_ProductSubstitute: DG.Microsoft.Dynamics.CRM.productsubstitute[];
		TransactionCurrency_SimilarityRule: DG.Microsoft.Dynamics.CRM.similarityrule[];
		transactioncurrency_opportunityclose: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		TransactionCurrency_entitlementtemplatechannel: DG.Microsoft.Dynamics.CRM.entitlementtemplatechannel[];
		TransactionCurrency_Team: DG.Microsoft.Dynamics.CRM.team[];
		TransactionCurrency_SLA: DG.Microsoft.Dynamics.CRM.sla[];
		TransactionCurrency_RecurringAppointmentMaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		TransactionCurrency_Equipment: DG.Microsoft.Dynamics.CRM.equipment[];
		transactioncurrency_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		TransactionCurrency_Theme: DG.Microsoft.Dynamics.CRM.theme[];
		transactioncurrency_knowledgearticleincident: DG.Microsoft.Dynamics.CRM.knowledgearticleincident[];
		TransactionCurrency_Letter: DG.Microsoft.Dynamics.CRM.letter[];
		TransactionCurrency_entitlementchannel: DG.Microsoft.Dynamics.CRM.entitlementchannel[];
		transactioncurrency_invoicedetail: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		transactioncurrency_pricelevel: DG.Microsoft.Dynamics.CRM.pricelevel[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		TransactionCurrency_CampaignResponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		transactioncurrency_lead: DG.Microsoft.Dynamics.CRM.lead[];
		TransactionCurrency_Queue: DG.Microsoft.Dynamics.CRM.queue[];
		transactioncurrency_SocialProfile: DG.Microsoft.Dynamics.CRM.socialprofile[];
		transactioncurrency_opportunity: DG.Microsoft.Dynamics.CRM.opportunity[];
		transactioncurrency_contact: DG.Microsoft.Dynamics.CRM.contact[];
		TransactionCurrency_Appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		transactioncurrency_salesorderdetail: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		transactioncurrency_product: DG.Microsoft.Dynamics.CRM.product[];
		TransactionCurrency_ServiceAppointment: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		TransactionCurrency_SharePointSite: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		transactioncurrency_discounttype: DG.Microsoft.Dynamics.CRM.discounttype[];
		TransactionCurrency_SharePointDocumentLocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		TransactionCurrency_SLAItem: DG.Microsoft.Dynamics.CRM.slaitem[];
		TransactionCurrency_KbArticle: DG.Microsoft.Dynamics.CRM.kbarticle[];
		TransactionCurrency_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		TransactionCurrency_ReportCategory: DG.Microsoft.Dynamics.CRM.reportcategory[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		transactioncurrency_semiannualfiscalcalendar: DG.Microsoft.Dynamics.CRM.semiannualfiscalcalendar[];
		transactioncurrency_usersettings: DG.Microsoft.Dynamics.CRM.usersettings[];
		TransactionCurrency_Territory: DG.Microsoft.Dynamics.CRM.territory[];
		TransactionCurrency_slakpiinstance: DG.Microsoft.Dynamics.CRM.slakpiinstance[];
		TransactionCurrency_officegraphdocument: DG.Microsoft.Dynamics.CRM.officegraphdocument[];
		TransactionCurrency_LeadAddress: DG.Microsoft.Dynamics.CRM.leadaddress[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface goal extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		computedtargetasoftodaypercentageachieved: number;
		stretchtargetstring: string;
		amountdatatype: number;
		_owningbusinessunit_value: System.Guid;
		createdon: Date;
		_rollupqueryinprogressintegerid_value: System.Guid;
		_createdby_value: System.Guid;
		inprogressinteger: number;
		rolluponlyfromchildgoals: boolean;
		overriddencreatedon: Date;
		lastrolledupdate: Date;
		targetmoney_base: number;
		_rollupqueryactualintegerid_value: System.Guid;
		utcconversiontimezonecode: number;
		_modifiedby_value: System.Guid;
		isoverridden: boolean;
		title: string;
		goalenddate: Date;
		_owningteam_value: System.Guid;
		_rollupqueryactualdecimalid_value: System.Guid;
		_goalownerid_value: System.Guid;
		inprogressdecimal: number;
		consideronlygoalownersrecords: boolean;
		_rollupquerycustomintegerid_value: System.Guid;
		_rollupqueryactualmoneyid_value: System.Guid;
		entityimageid: System.Guid;
		targetdecimal: number;
		computedtargetasoftodaymoney: number;
		isoverride: boolean;
		isamount: boolean;
		_modifiedonbehalfby_value: System.Guid;
		computedtargetasoftodayinteger: number;
		entityimage: number[];
		treeid: System.Guid;
		versionnumber: number;
		entityimage_timestamp: number;
		_ownerid_value: System.Guid;
		percentage: number;
		actualstring: string;
		customrollupfieldmoney_base: number;
		stretchtargetinteger: number;
		actualmoney_base: number;
		targetmoney: number;
		computedtargetasoftodaymoney_base: number;
		entityimage_url: string;
		targetinteger: number;
		actualmoney: number;
		inprogressstring: string;
		goalstartdate: Date;
		inprogressmoney_base: number;
		targetstring: string;
		fiscalperiod: number;
		statuscode: number;
		statecode: number;
		customrollupfieldmoney: number;
		goalid: System.Guid;
		_rollupquerycustommoneyid_value: System.Guid;
		_owninguser_value: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		_rollupqueryinprogressdecimalid_value: System.Guid;
		exchangerate: number;
		stretchtargetmoney: number;
		importsequencenumber: number;
		_createdonbehalfby_value: System.Guid;
		modifiedon: Date;
		_goalwitherrorid_value: System.Guid;
		actualdecimal: number;
		isfiscalperiodgoal: boolean;
		customrollupfieldstring: string;
		_rollupqueryinprogressmoneyid_value: System.Guid;
		_rollupquerycustomdecimalid_value: System.Guid;
		_metricid_value: System.Guid;
		actualinteger: number;
		computedtargetasoftodaydecimal: number;
		customrollupfielddecimal: number;
		fiscalyear: number;
		stretchtargetmoney_base: number;
		stretchtargetdecimal: number;
		timezoneruleversionnumber: number;
		inprogressmoney: number;
		depth: number;
		rolluperrorcode: number;
		_parentgoalid_value: System.Guid;
		customrollupfieldinteger: number;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		rollupqueryactualintegerid: DG.Microsoft.Dynamics.CRM.goalrollupquery;
		rollupqueryactualmoneyid: DG.Microsoft.Dynamics.CRM.goalrollupquery;
		rollupqueryactualdecimalid: DG.Microsoft.Dynamics.CRM.goalrollupquery;
		rollupquerycustomintegerid: DG.Microsoft.Dynamics.CRM.goalrollupquery;
		rollupquerycustommoneyid: DG.Microsoft.Dynamics.CRM.goalrollupquery;
		rollupquerycustomdecimalid: DG.Microsoft.Dynamics.CRM.goalrollupquery;
		rollupqueryinprogressintegerid: DG.Microsoft.Dynamics.CRM.goalrollupquery;
		rollupqueryinprogressmoneyid: DG.Microsoft.Dynamics.CRM.goalrollupquery;
		rollupqueryinprogressdecimalid: DG.Microsoft.Dynamics.CRM.goalrollupquery;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		goalownerid_systemuser: DG.Microsoft.Dynamics.CRM.systemuser;
		parentgoalid: DG.Microsoft.Dynamics.CRM.goal;
		goal_parent_goal: DG.Microsoft.Dynamics.CRM.goal[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		metricid: DG.Microsoft.Dynamics.CRM.metric;
		Goal_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		goalwitherrorid: DG.Microsoft.Dynamics.CRM.goal;
		Goal_RollupError_Goal: DG.Microsoft.Dynamics.CRM.goal[];
		goal_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		Goal_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		goal_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		Goal_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Goal_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		goalownerid_team: DG.Microsoft.Dynamics.CRM.team;
	}
	interface goalrollupquery extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_owningbusinessunit_value: System.Guid;
		_createdby_value: System.Guid;
		fetchxml: string;
		utcconversiontimezonecode: number;
		overriddencreatedon: Date;
		_modifiedby_value: System.Guid;
		modifiedon: Date;
		goalrollupqueryid: System.Guid;
		queryentitytype: string;
		timezoneruleversionnumber: number;
		_owninguser_value: System.Guid;
		versionnumber: number;
		statecode: number;
		importsequencenumber: number;
		_owningteam_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		name: string;
		createdon: Date;
		_modifiedonbehalfby_value: System.Guid;
		_ownerid_value: System.Guid;
		statuscode: number;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		goalrollupquery_actualint: DG.Microsoft.Dynamics.CRM.goal[];
		goal_rollupquery_actualmoney: DG.Microsoft.Dynamics.CRM.goal[];
		goal_rollupquery_actualdecimal: DG.Microsoft.Dynamics.CRM.goal[];
		goal_rollupquery_customint: DG.Microsoft.Dynamics.CRM.goal[];
		goal_rollupquery_custommoney: DG.Microsoft.Dynamics.CRM.goal[];
		goal_rollupquery_customdecimal: DG.Microsoft.Dynamics.CRM.goal[];
		goal_rollupquery_inprogressint: DG.Microsoft.Dynamics.CRM.goal[];
		goal_rollupquery_inprogressmoney: DG.Microsoft.Dynamics.CRM.goal[];
		goal_rollupquery_inprogressdecimal: DG.Microsoft.Dynamics.CRM.goal[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		GoalRollupQuery_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		goalrollupquery_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		GoalRollupQuery_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
	}
	interface duplicaterecord extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		duplicateid: System.Guid;
		_baserecordid_value: System.Guid;
		_duplicateruleid_value: System.Guid;
		_asyncoperationid_value: System.Guid;
		_duplicaterecordid_value: System.Guid;
		owninguser: System.Guid;
		owningbusinessunit: System.Guid;
		createdon: Date;
		_ownerid_value: System.Guid;
		duplicaterecordid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		baserecordid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		duplicaterecordid_entitlement: DG.Microsoft.Dynamics.CRM.entitlement;
		baserecordid_entitlement: DG.Microsoft.Dynamics.CRM.entitlement;
		duplicaterecordid_entitlementchannel: DG.Microsoft.Dynamics.CRM.entitlementchannel;
		baserecordid_entitlementchannel: DG.Microsoft.Dynamics.CRM.entitlementchannel;
		duplicaterecordid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplate;
		baserecordid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplate;
		duplicaterecordid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecord;
		baserecordid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecord;
		baserecordid_goalrollupquery: DG.Microsoft.Dynamics.CRM.goalrollupquery;
		duplicaterecordid_publisher: DG.Microsoft.Dynamics.CRM.publisher;
		baserecordid_transactioncurrency: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		baserecordid_campaign: DG.Microsoft.Dynamics.CRM.campaign;
		baserecordid_lead: DG.Microsoft.Dynamics.CRM.lead;
		baserecordid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster;
		duplicaterecordid_goal: DG.Microsoft.Dynamics.CRM.goal;
		duplicaterecordid_transactioncurrency: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		baserecordid_competitor: DG.Microsoft.Dynamics.CRM.competitor;
		baserecordid_equipment: DG.Microsoft.Dynamics.CRM.equipment;
		baserecordid_task: DG.Microsoft.Dynamics.CRM.task;
		duplicaterecordid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster;
		asyncoperationid: DG.Microsoft.Dynamics.CRM.asyncoperation;
		duplicaterecordid_task: DG.Microsoft.Dynamics.CRM.task;
		duplicaterecordid_equipment: DG.Microsoft.Dynamics.CRM.equipment;
		baserecordid_email: DG.Microsoft.Dynamics.CRM.email;
		baserecordid_socialprofile: DG.Microsoft.Dynamics.CRM.socialprofile;
		baserecordid_team: DG.Microsoft.Dynamics.CRM.team;
		baserecordid_systemuser: DG.Microsoft.Dynamics.CRM.systemuser;
		baserecordid_account: DG.Microsoft.Dynamics.CRM.account;
		baserecordid_appointment: DG.Microsoft.Dynamics.CRM.appointment;
		baserecordid_opportunity: DG.Microsoft.Dynamics.CRM.opportunity;
		duplicaterecordid_campaign: DG.Microsoft.Dynamics.CRM.campaign;
		baserecordid_sharepointdocumentlocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation;
		duplicaterecordid_fax: DG.Microsoft.Dynamics.CRM.fax;
		duplicaterecordid_territory: DG.Microsoft.Dynamics.CRM.territory;
		baserecordid_list: DG.Microsoft.Dynamics.CRM.list;
		baserecordid_publisher: DG.Microsoft.Dynamics.CRM.publisher;
		duplicaterecordid_sharepointsite: DG.Microsoft.Dynamics.CRM.sharepointsite;
		duplicaterecordid_kbarticle: DG.Microsoft.Dynamics.CRM.kbarticle;
		duplicaterecordid_team: DG.Microsoft.Dynamics.CRM.team;
		duplicaterecordid_appointment: DG.Microsoft.Dynamics.CRM.appointment;
		baserecordid_contract: DG.Microsoft.Dynamics.CRM.contract;
		duplicaterecordid_incident: DG.Microsoft.Dynamics.CRM.incident;
		duplicaterecordid_opportunity: DG.Microsoft.Dynamics.CRM.opportunity;
		duplicaterecordid_quote: DG.Microsoft.Dynamics.CRM.quote;
		duplicaterecordid_phonecall: DG.Microsoft.Dynamics.CRM.phonecall;
		baserecordid_resourcegroup: DG.Microsoft.Dynamics.CRM.resourcegroup;
		baserecordid_territory: DG.Microsoft.Dynamics.CRM.territory;
		duplicaterecordid_goalrollupquery: DG.Microsoft.Dynamics.CRM.goalrollupquery;
		baserecordid_sharepointsite: DG.Microsoft.Dynamics.CRM.sharepointsite;
		baserecordid_phonecall: DG.Microsoft.Dynamics.CRM.phonecall;
		duplicaterecordid_contact: DG.Microsoft.Dynamics.CRM.contact;
		duplicaterecordid_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse;
		baserecordid_kbarticle: DG.Microsoft.Dynamics.CRM.kbarticle;
		baserecordid_service: DG.Microsoft.Dynamics.CRM.service;
		duplicaterecordid_email: DG.Microsoft.Dynamics.CRM.email;
		duplicaterecordid_competitor: DG.Microsoft.Dynamics.CRM.competitor;
		baserecordid_letter: DG.Microsoft.Dynamics.CRM.letter;
		baserecordid_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity;
		duplicaterecordid_systemuser: DG.Microsoft.Dynamics.CRM.systemuser;
		duplicaterecordid_lead: DG.Microsoft.Dynamics.CRM.lead;
		duplicaterecordid_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity;
		duplicaterecordid_sharepointdocumentlocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation;
		duplicaterecordid_socialprofile: DG.Microsoft.Dynamics.CRM.socialprofile;
		baserecordid_goal: DG.Microsoft.Dynamics.CRM.goal;
		duplicaterecordid_account: DG.Microsoft.Dynamics.CRM.account;
		duplicaterecordid_list: DG.Microsoft.Dynamics.CRM.list;
		duplicaterecordid_resourcegroup: DG.Microsoft.Dynamics.CRM.resourcegroup;
		baserecordid_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse;
		duplicaterecordid_contract: DG.Microsoft.Dynamics.CRM.contract;
		duplicaterecordid_service: DG.Microsoft.Dynamics.CRM.service;
		baserecordid_fax: DG.Microsoft.Dynamics.CRM.fax;
		duplicaterecordid_queue: DG.Microsoft.Dynamics.CRM.queue;
		duplicateruleid: DG.Microsoft.Dynamics.CRM.duplicaterule;
		baserecordid_contact: DG.Microsoft.Dynamics.CRM.contact;
		baserecordid_incident: DG.Microsoft.Dynamics.CRM.incident;
		duplicaterecordid_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofile;
		baserecordid_queue: DG.Microsoft.Dynamics.CRM.queue;
		baserecordid_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofile;
		duplicaterecordid_letter: DG.Microsoft.Dynamics.CRM.letter;
		baserecordid_quote: DG.Microsoft.Dynamics.CRM.quote;
	}
	interface entitlementchannel extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_owninguser_value: System.Guid;
		versionnumber: number;
		overriddencreatedon: Date;
		name: string;
		_organizationid_value: System.Guid;
		importsequencenumber: number;
		_createdonbehalfby_value: System.Guid;
		createdon: Date;
		modifiedon: Date;
		channel: number;
		_transactioncurrencyid_value: System.Guid;
		utcconversiontimezonecode: number;
		_createdby_value: System.Guid;
		_modifiedby_value: System.Guid;
		_entitlementid_value: System.Guid;
		remainingterms: number;
		_ownerid_value: System.Guid;
		timezoneruleversionnumber: number;
		totalterms: number;
		_modifiedonbehalfby_value: System.Guid;
		entitlementchannelid: System.Guid;
		_owningbusinessunit_value: System.Guid;
		exchangerate: number;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		entitlementchannel_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		entitlementchannel_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		entitlementchannel_Annotations: DG.Microsoft.Dynamics.CRM.annotation[];
		entitlementchannel_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		entitlementchannel_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		entitlementid: DG.Microsoft.Dynamics.CRM.entitlement;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
	}
	interface annotation extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		modifiedon: Date;
		importsequencenumber: number;
		filesize: number;
		overriddencreatedon: Date;
		objecttypecode: string;
		mimetype: string;
		_modifiedby_value: System.Guid;
		documentbody: string;
		documentbody_binary: number[];
		_owningteam_value: System.Guid;
		versionnumber: number;
		filename: string;
		notetext: string;
		_owninguser_value: System.Guid;
		createdon: Date;
		stepid: string;
		annotationid: System.Guid;
		langid: string;
		isdocument: boolean;
		_owningbusinessunit_value: System.Guid;
		_ownerid_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		_objectid_value: System.Guid;
		subject: string;
		_modifiedonbehalfby_value: System.Guid;
		_createdby_value: System.Guid;
		objectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		objectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlement;
		objectid_entitlementchannel: DG.Microsoft.Dynamics.CRM.entitlementchannel;
		objectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplate;
		objectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecord;
		objectid_account: DG.Microsoft.Dynamics.CRM.account;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		objectid_list: DG.Microsoft.Dynamics.CRM.list;
		objectid_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse;
		objectid_kbarticle: DG.Microsoft.Dynamics.CRM.kbarticle;
		objectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity;
		objectid_appointment: DG.Microsoft.Dynamics.CRM.appointment;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		Annotation_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		objectid_sla: DG.Microsoft.Dynamics.CRM.sla;
		objectid_calendar: DG.Microsoft.Dynamics.CRM.calendar;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		objectid_fax: DG.Microsoft.Dynamics.CRM.fax;
		objectid_incidentresolution: DG.Microsoft.Dynamics.CRM.incidentresolution;
		objectid_contact: DG.Microsoft.Dynamics.CRM.contact;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		objectid_letter: DG.Microsoft.Dynamics.CRM.letter;
		objectid_service: DG.Microsoft.Dynamics.CRM.service;
		objectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorder;
		objectid_quoteclose: DG.Microsoft.Dynamics.CRM.quoteclose;
		objectid_competitor: DG.Microsoft.Dynamics.CRM.competitor;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		objectid_contract: DG.Microsoft.Dynamics.CRM.contract;
		objectid_goal: DG.Microsoft.Dynamics.CRM.goal;
		objectid_task: DG.Microsoft.Dynamics.CRM.task;
		objectid_email: DG.Microsoft.Dynamics.CRM.email;
		objectid_orderclose: DG.Microsoft.Dynamics.CRM.orderclose;
		objectid_workflow: DG.Microsoft.Dynamics.CRM.workflow;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		objectid_incident: DG.Microsoft.Dynamics.CRM.incident;
		objectid_equipment: DG.Microsoft.Dynamics.CRM.equipment;
		objectid_contractdetail: DG.Microsoft.Dynamics.CRM.contractdetail;
		objectid_campaign: DG.Microsoft.Dynamics.CRM.campaign;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		Annotation_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		objectid_lead: DG.Microsoft.Dynamics.CRM.lead;
		objectid_mailbox: DG.Microsoft.Dynamics.CRM.mailbox;
		objectid_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity;
		objectid_resourcespec: DG.Microsoft.Dynamics.CRM.resourcespec;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		objectid_duplicaterule: DG.Microsoft.Dynamics.CRM.duplicaterule;
		objectid_serviceappointment: DG.Microsoft.Dynamics.CRM.serviceappointment;
		objectid_quote: DG.Microsoft.Dynamics.CRM.quote;
		objectid_invoice: DG.Microsoft.Dynamics.CRM.invoice;
		objectid_phonecall: DG.Microsoft.Dynamics.CRM.phonecall;
		objectid_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofile;
		objectid_opportunityclose: DG.Microsoft.Dynamics.CRM.opportunityclose;
		objectid_product: DG.Microsoft.Dynamics.CRM.product;
		objectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunity;
		objectid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster;
	}
	interface campaignresponse extends DG.Microsoft.Dynamics.CRM.activitypointer {
		firstname: string;
		lastname: string;
		receivedon: Date;
		yomifirstname: string;
		overriddencreatedon: Date;
		responsecode: number;
		yomilastname: string;
		companyname: string;
		promotioncodename: string;
		category: string;
		telephone: string;
		channeltypecode: number;
		_originatingactivityid_value: System.Guid;
		fax: string;
		importsequencenumber: number;
		emailaddress: string;
		yomicompanyname: string;
		subcategory: string;
		originatingactivityid_fax: DG.Microsoft.Dynamics.CRM.fax;
		CampaignResponse_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		originatingactivityid_letter: DG.Microsoft.Dynamics.CRM.letter;
		originatingactivityid_phonecall: DG.Microsoft.Dynamics.CRM.phonecall;
		regardingobjectid_campaign_campaignresponse: DG.Microsoft.Dynamics.CRM.campaign;
		CampaignResponse_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		regardingobjectid_bulkoperation_campaignresponse: DG.Microsoft.Dynamics.CRM.bulkoperation;
		modifiedonbehalfby_campaignresponse: DG.Microsoft.Dynamics.CRM.systemuser;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		campaignresponse_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		owningteam_campaignresponse: DG.Microsoft.Dynamics.CRM.team;
		owninguser_campaignresponse: DG.Microsoft.Dynamics.CRM.systemuser;
		CampaignResponse_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		originatingactivityid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster;
		originatingactivityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		CampaignResponse_Lead: DG.Microsoft.Dynamics.CRM.lead[];
		CampaignResponse_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		owningbusinessunit_campaignresponse: DG.Microsoft.Dynamics.CRM.businessunit;
		createdby_campaignresponse: DG.Microsoft.Dynamics.CRM.systemuser;
		transactioncurrencyid_campaignresponse: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		CampaignResponse_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		originatingactivityid_email: DG.Microsoft.Dynamics.CRM.email;
		CampaignResponse_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		createdonbehalfby_campaignresponse: DG.Microsoft.Dynamics.CRM.systemuser;
		originatingactivityid_appointment: DG.Microsoft.Dynamics.CRM.appointment;
		modifiedby_campaignresponse: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface fax extends DG.Microsoft.Dynamics.CRM.activitypointer {
		subscriptionid: System.Guid;
		overriddencreatedon: Date;
		faxnumber: string;
		importsequencenumber: number;
		category: string;
		billingcode: string;
		directioncode: boolean;
		numberofpages: number;
		coverpagename: string;
		subcategory: string;
		tsid: string;
		regardingobjectid_entitlement_fax: DG.Microsoft.Dynamics.CRM.entitlement;
		regardingobjectid_entitlementtemplate_fax: DG.Microsoft.Dynamics.CRM.entitlementtemplate;
		regardingobjectid_knowledgebaserecord_fax: DG.Microsoft.Dynamics.CRM.knowledgebaserecord;
		Fax_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		fax_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		regardingobjectid_opportunity_fax: DG.Microsoft.Dynamics.CRM.opportunity;
		owningbusinessunit_fax: DG.Microsoft.Dynamics.CRM.businessunit;
		regardingobjectid_account_fax: DG.Microsoft.Dynamics.CRM.account;
		Fax_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		serviceid_fax: DG.Microsoft.Dynamics.CRM.service;
		createdby_fax: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby_fax: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_lead_fax: DG.Microsoft.Dynamics.CRM.lead;
		transactioncurrencyid_fax: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		owningteam_fax: DG.Microsoft.Dynamics.CRM.team;
		Fax_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		regardingobjectid_knowledgearticle_fax: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		owninguser_fax: DG.Microsoft.Dynamics.CRM.systemuser;
		Fax_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		fax_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		modifiedby_fax: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby_fax: DG.Microsoft.Dynamics.CRM.systemuser;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		fax_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		regardingobjectid_campaignactivity_fax: DG.Microsoft.Dynamics.CRM.campaignactivity;
		regardingobjectid_bulkoperation_fax: DG.Microsoft.Dynamics.CRM.bulkoperation;
		regardingobjectid_invoice_fax: DG.Microsoft.Dynamics.CRM.invoice;
		regardingobjectid_contact_fax: DG.Microsoft.Dynamics.CRM.contact;
		regardingobjectid_quote_fax: DG.Microsoft.Dynamics.CRM.quote;
		regardingobjectid_campaign_fax: DG.Microsoft.Dynamics.CRM.campaign;
		fax_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		regardingobjectid_contract_fax: DG.Microsoft.Dynamics.CRM.contract;
		Fax_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		regardingobjectid_salesorder_fax: DG.Microsoft.Dynamics.CRM.salesorder;
		regardingobjectid_incident_fax: DG.Microsoft.Dynamics.CRM.incident;
		Fax_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
	}
	interface opportunity extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		schedulefollowup_prospect: Date;
		totaltax: number;
		versionnumber: number;
		identifycustomercontacts: boolean;
		description: string;
		actualvalue: number;
		completefinalproposal: boolean;
		_parentaccountid_value: System.Guid;
		presentproposal: boolean;
		resolvefeedback: boolean;
		_ownerid_value: System.Guid;
		freightamount: number;
		identifypursuitteam: boolean;
		modifiedon: Date;
		totalamountlessfreight: number;
		timezoneruleversionnumber: number;
		utcconversiontimezonecode: number;
		captureproposalfeedback: boolean;
		freightamount_base: number;
		traversedpath: string;
		salesstage: number;
		actualclosedate: Microsoft.OData.Edm.Library.Date;
		presentfinalproposal: boolean;
		actualvalue_base: number;
		totallineitemamount: number;
		developproposal: boolean;
		stepname: string;
		statuscode: number;
		totaltax_base: number;
		quotecomments: string;
		totallineitemdiscountamount_base: number;
		salesstagecode: number;
		_owningteam_value: System.Guid;
		discountamount: number;
		opportunityratingcode: number;
		_pricelevelid_value: System.Guid;
		budgetamount: number;
		totallineitemdiscountamount: number;
		closeprobability: number;
		budgetstatus: number;
		totaldiscountamount: number;
		totalamountlessfreight_base: number;
		estimatedvalue_base: number;
		exchangerate: number;
		createdon: Date;
		estimatedclosedate: Microsoft.OData.Edm.Library.Date;
		_transactioncurrencyid_value: System.Guid;
		_createdby_value: System.Guid;
		need: number;
		participatesinworkflow: boolean;
		totaldiscountamount_base: number;
		stageid: System.Guid;
		totallineitemamount_base: number;
		_customerid_value: System.Guid;
		_contactid_value: System.Guid;
		importsequencenumber: number;
		_modifiedonbehalfby_value: System.Guid;
		_originatingleadid_value: System.Guid;
		purchaseprocess: number;
		stepid: System.Guid;
		pricingerrorcode: number;
		discountpercentage: number;
		proposedsolution: string;
		schedulefollowup_qualify: Date;
		customerneed: string;
		overriddencreatedon: Date;
		completeinternalreview: boolean;
		_accountid_value: System.Guid;
		finaldecisiondate: Microsoft.OData.Edm.Library.Date;
		decisionmaker: boolean;
		pursuitdecision: boolean;
		estimatedvalue: number;
		prioritycode: number;
		_campaignid_value: System.Guid;
		confirminterest: boolean;
		totalamount: number;
		_owningbusinessunit_value: System.Guid;
		_parentcontactid_value: System.Guid;
		discountamount_base: number;
		processid: System.Guid;
		purchasetimeframe: number;
		budgetamount_base: number;
		isrevenuesystemcalculated: boolean;
		totalamount_base: number;
		statecode: number;
		qualificationcomments: string;
		_createdonbehalfby_value: System.Guid;
		evaluatefit: boolean;
		currentsituation: string;
		_modifiedby_value: System.Guid;
		identifycompetitors: boolean;
		sendthankyounote: boolean;
		opportunityid: System.Guid;
		customerpainpoints: string;
		filedebrief: boolean;
		_owninguser_value: System.Guid;
		scheduleproposalmeeting: Date;
		initialcommunication: number;
		name: string;
		timeline: number;
		opportunitycompetitors_association: DG.Microsoft.Dynamics.CRM.competitor[];
		campaignid: DG.Microsoft.Dynamics.CRM.campaign;
		parentcontactid: DG.Microsoft.Dynamics.CRM.contact;
		Opportunity_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		Opportunity_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		originatingleadid: DG.Microsoft.Dynamics.CRM.lead;
		opportunity_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		opportunity_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		Opportunity_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		product_opportunities: DG.Microsoft.Dynamics.CRM.opportunityproduct[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		Opportunity_Emails: DG.Microsoft.Dynamics.CRM.email[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		Opportunity_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		Opportunity_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		Opportunity_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		customerid_account: DG.Microsoft.Dynamics.CRM.account;
		opportunity_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		Opportunity_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		parentaccountid: DG.Microsoft.Dynamics.CRM.account;
		opportunity_invoices: DG.Microsoft.Dynamics.CRM.invoice[];
		Opportunity_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		Opportunity_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		Opportunity_SharepointDocumentLocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		opportunity_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		Opportunity_OpportunityClose: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		opportunity_Teams: DG.Microsoft.Dynamics.CRM.team[];
		CreatedOpportunity_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		Opportunity_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		Opportunity_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		Opportunity_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		lead_qualifying_opportunity: DG.Microsoft.Dynamics.CRM.lead[];
		opportunity_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		pricelevelid: DG.Microsoft.Dynamics.CRM.pricelevel;
		opportunity_sales_orders: DG.Microsoft.Dynamics.CRM.salesorder[];
		Opportunity_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		customerid_contact: DG.Microsoft.Dynamics.CRM.contact;
		opportunity_quotes: DG.Microsoft.Dynamics.CRM.quote[];
		Opportunity_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
	}
	interface opportunityproduct extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_modifiedby_value: System.Guid;
		isproductoverridden: boolean;
		priceperunit: number;
		_createdonbehalfby_value: System.Guid;
		tax_base: number;
		quantity: number;
		productdescription: string;
		ispriceoverridden: boolean;
		description: string;
		_transactioncurrencyid_value: System.Guid;
		baseamount_base: number;
		lineitemnumber: number;
		manualdiscountamount: number;
		extendedamount: number;
		priceperunit_base: number;
		producttypecode: number;
		opportunitystatecode: number;
		createdon: Date;
		parentbundleid: System.Guid;
		pricingerrorcode: number;
		volumediscountamount: number;
		baseamount: number;
		overriddencreatedon: Date;
		opportunityproductid: System.Guid;
		_uomid_value: System.Guid;
		entityimage_url: string;
		entityimage: number[];
		owninguser: System.Guid;
		_opportunityid_value: System.Guid;
		manualdiscountamount_base: number;
		modifiedon: Date;
		versionnumber: number;
		entityimageid: System.Guid;
		_productid_value: System.Guid;
		timezoneruleversionnumber: number;
		importsequencenumber: number;
		productassociationid: System.Guid;
		owningbusinessunit: System.Guid;
		entityimage_timestamp: number;
		_modifiedonbehalfby_value: System.Guid;
		propertyconfigurationstatus: number;
		tax: number;
		volumediscountamount_base: number;
		extendedamount_base: number;
		exchangerate: number;
		utcconversiontimezonecode: number;
		_ownerid_value: System.Guid;
		sequencenumber: number;
		_createdby_value: System.Guid;
		productid: DG.Microsoft.Dynamics.CRM.product;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		opportunityid: DG.Microsoft.Dynamics.CRM.opportunity;
		OpportunityProduct_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		productassociationid_productassociation: DG.Microsoft.Dynamics.CRM.productassociation;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		uomid: DG.Microsoft.Dynamics.CRM.uom;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		OpportunityProduct_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		parentbundleid_opportunityproduct: DG.Microsoft.Dynamics.CRM.opportunityproduct;
		opportunityproduct_parent_opportunityproduct: DG.Microsoft.Dynamics.CRM.opportunityproduct[];
	}
	interface uom extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_modifiedonbehalfby_value: System.Guid;
		_modifiedbyexternalparty_value: System.Guid;
		name: string;
		_uomscheduleid_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		_modifiedby_value: System.Guid;
		overriddencreatedon: Date;
		modifiedon: Date;
		uomid: System.Guid;
		createdon: Date;
		quantity: number;
		_baseuom_value: System.Guid;
		versionnumber: number;
		organizationid: System.Guid;
		importsequencenumber: number;
		_createdbyexternalparty_value: System.Guid;
		isschedulebaseuom: boolean;
		_createdby_value: System.Guid;
		unit_of_measurement_product_price_levels: DG.Microsoft.Dynamics.CRM.productpricelevel[];
		unit_of_measurement_invoice_details: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		uomscheduleid: DG.Microsoft.Dynamics.CRM.uomschedule;
		unit_of_measurement_quote_details: DG.Microsoft.Dynamics.CRM.quotedetail[];
		unit_of_measurement_products: DG.Microsoft.Dynamics.CRM.product[];
		unit_of_measurement_order_details: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		baseuom: DG.Microsoft.Dynamics.CRM.uom;
		unit_of_measurement_base_unit: DG.Microsoft.Dynamics.CRM.uom[];
		unit_of_measurement_productassociation: DG.Microsoft.Dynamics.CRM.productassociation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		unit_of_measurement_contract_line_items: DG.Microsoft.Dynamics.CRM.contractdetail[];
		unit_of_measurement_opportunity_products: DG.Microsoft.Dynamics.CRM.opportunityproduct[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		UoM_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		UoM_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
	}
	interface productpricelevel extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		quantitysellingcode: number;
		processid: System.Guid;
		stageid: System.Guid;
		roundingoptioncode: number;
		exchangerate: number;
		_uomid_value: System.Guid;
		productnumber: string;
		overriddencreatedon: Date;
		versionnumber: number;
		productpricelevelid: System.Guid;
		pricingmethodcode: number;
		modifiedon: Date;
		_discounttypeid_value: System.Guid;
		_uomscheduleid_value: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		organizationid: System.Guid;
		amount: number;
		_createdby_value: System.Guid;
		_productid_value: System.Guid;
		roundingpolicycode: number;
		importsequencenumber: number;
		_modifiedby_value: System.Guid;
		createdon: Date;
		_createdonbehalfby_value: System.Guid;
		amount_base: number;
		_modifiedonbehalfby_value: System.Guid;
		_pricelevelid_value: System.Guid;
		percentage: number;
		roundingoptionamount: number;
		roundingoptionamount_base: number;
		traversedpath: string;
		uomid: DG.Microsoft.Dynamics.CRM.uom;
		ProductPriceLevel_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		ProductPriceLevel_RecommendationCache_AdditionalDataRecordId: DG.Microsoft.Dynamics.CRM.recommendationcache[];
		pricelevelid: DG.Microsoft.Dynamics.CRM.pricelevel;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		ProductPriceLevel_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		productid: DG.Microsoft.Dynamics.CRM.product;
		discounttypeid: DG.Microsoft.Dynamics.CRM.discounttype;
		uomscheduleid: DG.Microsoft.Dynamics.CRM.uomschedule;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface recommendationcache extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_recommendeditemid_value: System.Guid;
		isrecommendationactive: boolean;
		recommendationtype: number;
		_additionaldatarecordid_value: System.Guid;
		_itemid_value: System.Guid;
		recommendationsource: number;
		_recommendationmodelid_value: System.Guid;
		recommendationrating: number;
		RecommendationCacheid: System.Guid;
		additionaldatarecordid: DG.Microsoft.Dynamics.CRM.productpricelevel;
		recommendationmodelid: DG.Microsoft.Dynamics.CRM.recommendationmodel;
		itemid: DG.Microsoft.Dynamics.CRM.product;
		recommendeditemid: DG.Microsoft.Dynamics.CRM.product;
	}
	interface recommendationmodel extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		statuscode: number;
		_modifiedonbehalfby_value: System.Guid;
		ismanaged: boolean;
		maxrecommendations: number;
		productcatalogname: string;
		productcatalogcrossselllinkrating: number;
		description: string;
		componentstate: number;
		recommendationmodelid: System.Guid;
		overwritetime: Date;
		cataloglastsynchronizationstatus: number;
		minrecommendationrating: number;
		recommendationmodelversioncount: number;
		_azureserviceconnectionid_value: System.Guid;
		productcatalogaccessorylinkrating: number;
		solutionid: System.Guid;
		basketdatalastsynchronizationstatus: number;
		_createdby_value: System.Guid;
		cataloglastsynchronizedon: Date;
		recommendationmodelidunique: System.Guid;
		_createdonbehalfby_value: System.Guid;
		_recommendationmodelversionid_value: System.Guid;
		createdon: Date;
		statecode: number;
		modifiedon: Date;
		validuntil: Date;
		maximumversions: number;
		name: string;
		azuremodelid: string;
		basketdatalastsynchronizedon: Date;
		_organizationid_value: System.Guid;
		_modifiedby_value: System.Guid;
		azureserviceconnectionid: DG.Microsoft.Dynamics.CRM.azureserviceconnection;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		recommendationmodel_recommendationmodelversion: DG.Microsoft.Dynamics.CRM.recommendationmodelversion[];
		recommendationmodel_recommendationmodelmapping: DG.Microsoft.Dynamics.CRM.recommendationmodelmapping[];
		RecommendationModel_RecommendationCache: DG.Microsoft.Dynamics.CRM.recommendationcache[];
		recommendationmodelversionid: DG.Microsoft.Dynamics.CRM.recommendationmodelversion;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface azureserviceconnection extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		azureserviceconnectionid: System.Guid;
		_organizationid_value: System.Guid;
		lastconnectionstatuscode: number;
		_modifiedonbehalfby_value: System.Guid;
		description: string;
		modifiedon: Date;
		lastconnectiontime: Date;
		statecode: number;
		_createdby_value: System.Guid;
		name: string;
		accountkey: string;
		serviceuri: string;
		createdon: Date;
		connectiontype: number;
		statuscode: number;
		_createdonbehalfby_value: System.Guid;
		_modifiedby_value: System.Guid;
		azureserviceconnection_knowledgesearchmodel: DG.Microsoft.Dynamics.CRM.knowledgesearchmodel[];
		azureserviceconnection_recommendationmodel: DG.Microsoft.Dynamics.CRM.recommendationmodel[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		azureserviceconnection_topicmodel: DG.Microsoft.Dynamics.CRM.topicmodel[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
	}
	interface knowledgesearchmodel extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		name: string;
		_modifiedonbehalfby_value: System.Guid;
		ngramsize: number;
		_azureserviceconnectionid_value: System.Guid;
		modifiedon: Date;
		_organizationid_value: System.Guid;
		entity: string;
		_modifiedby_value: System.Guid;
		knowledgesearchmodelidunique: System.Guid;
		description: string;
		fetchxmllist: string;
		maxkeywords: number;
		statuscode: number;
		createdon: Date;
		ismanaged: boolean;
		_createdby_value: System.Guid;
		knowledgesearchmodelid: System.Guid;
		_createdonbehalfby_value: System.Guid;
		overwritetime: Date;
		solutionid: System.Guid;
		sourceentity: string;
		componentstate: number;
		statecode: number;
		azureserviceconnectionid: DG.Microsoft.Dynamics.CRM.azureserviceconnection;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		knowledgesearchmodel_textanalyticsentitymapping: DG.Microsoft.Dynamics.CRM.textanalyticsentitymapping[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
	}
	interface textanalyticsentitymapping extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		field: string;
		entitydisplayname: string;
		_topicmodelconfigurationid_value: System.Guid;
		entitypicklist: number;
		relationshipname: string;
		_knowledgesearchmodelid_value: System.Guid;
		overwritetime: Date;
		textanalyticsentitymappingidunique: System.Guid;
		ismanaged: boolean;
		modeltype: number;
		entity: string;
		_organizationid_value: System.Guid;
		fielddisplayname: string;
		solutionid: System.Guid;
		textanalyticsentitymappingid: System.Guid;
		fieldpicklist: number;
		componentstate: number;
		_similarityruleid_value: System.Guid;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		knowledgesearchmodelid: DG.Microsoft.Dynamics.CRM.knowledgesearchmodel;
		topicmodelconfigurationid: DG.Microsoft.Dynamics.CRM.topicmodelconfiguration;
		similarityruleid: DG.Microsoft.Dynamics.CRM.similarityrule;
	}
	interface topicmodelconfiguration extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		topicmodelconfigurationidunique: System.Guid;
		_topicmodelid_value: System.Guid;
		timefilterduration: number;
		overwritetime: Date;
		ngramsize: number;
		description: string;
		_organizationid_value: System.Guid;
		fetchxmllist: string;
		timefilter: number;
		name: string;
		solutionid: System.Guid;
		componentstate: number;
		datafilter: string;
		topicmodelconfigurationid: System.Guid;
		ismanaged: boolean;
		minrelevancescore: number;
		stopwords: string;
		sourceentity: string;
		topicmodelid: DG.Microsoft.Dynamics.CRM.topicmodel;
		topicmodelconfiguration_textanalyticsentitymapping: DG.Microsoft.Dynamics.CRM.textanalyticsentitymapping[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		topicmodelconfiguration_topicmodelexecutionhistory: DG.Microsoft.Dynamics.CRM.topicmodelexecutionhistory[];
		topicmodelconfiguration_topicmodel: DG.Microsoft.Dynamics.CRM.topicmodel[];
	}
	interface topicmodel extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		modifiedon: Date;
		_azureserviceconnectionid_value: System.Guid;
		azureschedulerjobname: string;
		avgnumberoftopics: number;
		topicslastcreatedon: Date;
		_organizationid_value: System.Guid;
		maxtopics: number;
		_createdonbehalfby_value: System.Guid;
		statuscode: number;
		sourceentity: string;
		topicmodelid: System.Guid;
		endtime: Date;
		_createdby_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		azureschedulertestjobname: string;
		statecode: number;
		azureschedulerondemandjobname: string;
		buildrecurrence: string;
		starttime: Date;
		name: string;
		_modifiedby_value: System.Guid;
		_configurationused_value: System.Guid;
		totaltopicsfound: number;
		description: string;
		maxnumberoftopics: number;
		createdon: Date;
		topicmodel_topicmodelconfiguration: DG.Microsoft.Dynamics.CRM.topicmodelconfiguration[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		azureserviceconnectionid: DG.Microsoft.Dynamics.CRM.azureserviceconnection;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		topicmodelconfigurationid: DG.Microsoft.Dynamics.CRM.topicmodelconfiguration;
		topicmodel_topicmodelexecutionhistory: DG.Microsoft.Dynamics.CRM.topicmodelexecutionhistory[];
	}
	interface topicmodelexecutionhistory extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		recordcorrelationid: string;
		maxtopics: number;
		_createdby_value: System.Guid;
		modifiedon: Date;
		_modifiedby_value: System.Guid;
		numberoftopicsfound: number;
		starttime: Date;
		_createdonbehalfby_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		fetchxmllist: string;
		istestexecution: boolean;
		azuresyncerrormessage: string;
		_topicmodelconfigurationid_value: System.Guid;
		_topicmodelid_value: System.Guid;
		topicmodelexecutionhistoryid: System.Guid;
		recordsprocessed: number;
		status: number;
		statusreason: number;
		_organizationid_value: System.Guid;
		totaltime: number;
		createdon: Date;
		topicmodelexecutionhistory_topichistory: DG.Microsoft.Dynamics.CRM.topichistory[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		topicmodelconfigurationid: DG.Microsoft.Dynamics.CRM.topicmodelconfiguration;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		topicmodelid: DG.Microsoft.Dynamics.CRM.topicmodel;
	}
	interface topichistory extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		weight: number;
		_topicmodelexecutionhistoryid_value: System.Guid;
		keyphrase: string;
		topichistoryid: System.Guid;
		topicmodelexecutionhistoryid: DG.Microsoft.Dynamics.CRM.topicmodelexecutionhistory;
	}
	interface similarityrule extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		overriddencreatedon: Date;
		_modifiedonbehalfby_value: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		solutionid: System.Guid;
		statuscode: number;
		createdon: Date;
		_organizationid_value: System.Guid;
		name: string;
		similarityruleid: System.Guid;
		_createdonbehalfby_value: System.Guid;
		matchingentityname: string;
		timezoneruleversionnumber: number;
		componentstate: number;
		statecode: number;
		introducedversion: string;
		fetchxmllist: string;
		activerulefetchxml: string;
		maxkeywords: number;
		utcconversiontimezonecode: number;
		baseentitytypecode: number;
		importsequencenumber: number;
		overwritetime: Date;
		similarityruleidunique: System.Guid;
		exchangerate: number;
		ngramsize: number;
		description: string;
		baseentityname: string;
		modifiedon: Date;
		versionnumber: number;
		matchingentitytypecode: number;
		excludeinactiverecords: boolean;
		ruleconditionxml: string;
		ismanaged: boolean;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		similarityrule_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		similarityrule_textanalyticsentitymapping: DG.Microsoft.Dynamics.CRM.textanalyticsentitymapping[];
	}
	interface recommendationmodelversion extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		statuscode: number;
		recommendationmodelversionid: System.Guid;
		_createdonbehalfby_value: System.Guid;
		name: string;
		_modifiedonbehalfby_value: System.Guid;
		modifiedon: Date;
		percentilerank: number;
		azurebuildid: string;
		_organizationid_value: System.Guid;
		basketdatasynchronizationstatus: number;
		catalogcoverage: number;
		createdon: Date;
		azuremodelbuildstatus: number;
		_modifiedby_value: System.Guid;
		_createdby_value: System.Guid;
		duration: number;
		catalogsynchronizationstatus: number;
		logicapprunid: string;
		buildstartedon: Date;
		buildendedon: Date;
		description: string;
		_recommendationmodelid_value: System.Guid;
		recommendationmodelversion_recommendationmodelversionhistory: DG.Microsoft.Dynamics.CRM.recommendationmodelversionhistory[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		recommendationmodelid: DG.Microsoft.Dynamics.CRM.recommendationmodel;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		recommendationmodelversion_recommendationmodel: DG.Microsoft.Dynamics.CRM.recommendationmodel[];
		recommendationmodelversion_recommendationmodelmapping: DG.Microsoft.Dynamics.CRM.recommendationmodelmapping[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface recommendationmodelversionhistory extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		errorcount: number;
		duration: number;
		recommendationmodelversionhistoryid: System.Guid;
		workflowstep: number;
		endtime: Date;
		azuresyncerrormessage: string;
		_recommendationmodelversionid_value: System.Guid;
		workflowstepstatus: number;
		_organizationid_value: System.Guid;
		numberrecordssynchronized: number;
		starttime: Date;
		recommendationmodelversionid: DG.Microsoft.Dynamics.CRM.recommendationmodelversion;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
	}
	interface recommendationmodelmapping extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		accountfielddisplayname: string;
		filterxml: string;
		solutionid: System.Guid;
		componentstate: number;
		transactionfield: string;
		accountfieldpicklist: number;
		errorcount: number;
		entity: string;
		_supportedmapid_value: System.Guid;
		recommendationmodelmappingid: System.Guid;
		productfield: string;
		overwritetime: Date;
		productlineitemrelationshippicklist: number;
		_recommendationmodelversionid_value: System.Guid;
		ismanaged: boolean;
		productfielddisplayname: string;
		_organizationid_value: System.Guid;
		_recommendationmodelid_value: System.Guid;
		datafilter: string;
		productfieldpicklist: number;
		accountfield: string;
		entitypicklist: number;
		recommendationmodelmappingidunique: System.Guid;
		productlineitemrelationshipdisplayname: string;
		synchronizedcount: number;
		entitydisplayname: string;
		timerangefilter: string;
		mappingtype: number;
		productlineitemrelationship: string;
		recommendationmodelid: DG.Microsoft.Dynamics.CRM.recommendationmodel;
		recommendationmodelmappingid_recommendationmodelmapping: DG.Microsoft.Dynamics.CRM.recommendationmodelmapping;
		recommendationmodelmapping_recommendationmodelmapping_supportedmapid: DG.Microsoft.Dynamics.CRM.recommendationmodelmapping[];
		recommendationmodelversionid: DG.Microsoft.Dynamics.CRM.recommendationmodelversion;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
	}
	interface pricelevel extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_transactioncurrencyid_value: System.Guid;
		paymentmethodcode: number;
		_createdonbehalfby_value: System.Guid;
		freighttermscode: number;
		versionnumber: number;
		description: string;
		exchangerate: number;
		overriddencreatedon: Date;
		_modifiedby_value: System.Guid;
		statecode: number;
		timezoneruleversionnumber: number;
		createdon: Date;
		_organizationid_value: System.Guid;
		name: string;
		begindate: Date;
		enddate: Date;
		statuscode: number;
		_modifiedonbehalfby_value: System.Guid;
		pricelevelid: System.Guid;
		shippingmethodcode: number;
		utcconversiontimezonecode: number;
		modifiedon: Date;
		importsequencenumber: number;
		_createdby_value: System.Guid;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		pricelevel_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		price_level_products: DG.Microsoft.Dynamics.CRM.product[];
		price_level_quotes: DG.Microsoft.Dynamics.CRM.quote[];
		price_level_product_price_levels: DG.Microsoft.Dynamics.CRM.productpricelevel[];
		price_level_orders: DG.Microsoft.Dynamics.CRM.salesorder[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		price_level_opportunties: DG.Microsoft.Dynamics.CRM.opportunity[];
		price_level_invoices: DG.Microsoft.Dynamics.CRM.invoice[];
		PriceLevel_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		price_level_accounts: DG.Microsoft.Dynamics.CRM.account[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		PriceList_Campaigns: DG.Microsoft.Dynamics.CRM.campaign[];
		price_level_contacts: DG.Microsoft.Dynamics.CRM.contact[];
		PriceLevel_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		pricelevel_connections1: DG.Microsoft.Dynamics.CRM.connection[];
	}
	interface salesorder extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		paymenttermscode: number;
		_accountid_value: System.Guid;
		datefulfilled: Date;
		shipto_postalcode: string;
		billto_fax: string;
		billto_line2: string;
		entityimage_url: string;
		_transactioncurrencyid_value: System.Guid;
		freightamount: number;
		billto_name: string;
		_modifiedby_value: System.Guid;
		billto_line1: string;
		shipto_name: string;
		shipto_addressid: System.Guid;
		statuscode: number;
		shipto_city: string;
		freighttermscode: number;
		entityimage: number[];
		utcconversiontimezonecode: number;
		totaltax_base: number;
		_quoteid_value: System.Guid;
		entityimageid: System.Guid;
		totallineitemamount: number;
		stageid: System.Guid;
		_owningteam_value: System.Guid;
		ispricelocked: boolean;
		timezoneruleversionnumber: number;
		billto_stateorprovince: string;
		totaldiscountamount_base: number;
		_campaignid_value: System.Guid;
		shipto_stateorprovince: string;
		shipto_line3: string;
		exchangerate: number;
		totalamount: number;
		shipto_fax: string;
		billto_city: string;
		lastbackofficesubmit: Date;
		salesorderid: System.Guid;
		totaldiscountamount: number;
		freightamount_base: number;
		billto_line3: string;
		pricingerrorcode: number;
		_customerid_value: System.Guid;
		billto_postalcode: string;
		_owninguser_value: System.Guid;
		traversedpath: string;
		shipto_country: string;
		totaltax: number;
		discountpercentage: number;
		shipto_telephone: string;
		discountamount: number;
		processid: System.Guid;
		billto_contactname: string;
		requestdeliveryby: Date;
		importsequencenumber: number;
		billto_addressid: System.Guid;
		billto_telephone: string;
		shippingmethodcode: number;
		versionnumber: number;
		prioritycode: number;
		_contactid_value: System.Guid;
		shipto_line1: string;
		_opportunityid_value: System.Guid;
		billto_country: string;
		createdon: Date;
		_createdonbehalfby_value: System.Guid;
		name: string;
		totallineitemdiscountamount_base: number;
		description: string;
		_pricelevelid_value: System.Guid;
		_owningbusinessunit_value: System.Guid;
		modifiedon: Date;
		entityimage_timestamp: number;
		totalamountlessfreight: number;
		totallineitemdiscountamount: number;
		billto_composite: string;
		shipto_composite: string;
		totalamountlessfreight_base: number;
		totalamount_base: number;
		statecode: number;
		submitdate: Date;
		_createdby_value: System.Guid;
		discountamount_base: number;
		ordernumber: string;
		overriddencreatedon: Date;
		submitstatusdescription: string;
		willcall: boolean;
		shipto_freighttermscode: number;
		shipto_line2: string;
		shipto_contactname: string;
		_ownerid_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		totallineitemamount_base: number;
		submitstatus: number;
		contactorders_association: DG.Microsoft.Dynamics.CRM.contact[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		SalesOrder_Emails: DG.Microsoft.Dynamics.CRM.email[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		SalesOrder_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		SalesOrder_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		campaignid: DG.Microsoft.Dynamics.CRM.campaign;
		SalesOrder_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		SalesOrder_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		SalesOrder_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		quoteid: DG.Microsoft.Dynamics.CRM.quote;
		salesorder_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		salesorder_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		SalesOrder_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		order_details: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		SalesOrder_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		pricelevelid: DG.Microsoft.Dynamics.CRM.pricelevel;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		customerid_contact: DG.Microsoft.Dynamics.CRM.contact;
		SalesOrder_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		SalesOrder_OrderClose: DG.Microsoft.Dynamics.CRM.orderclose[];
		SalesOrder_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		SalesOrder_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		opportunityid: DG.Microsoft.Dynamics.CRM.opportunity;
		SalesOrder_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		SalesOrder_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		salesorder_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		customerid_account: DG.Microsoft.Dynamics.CRM.account;
		order_invoices: DG.Microsoft.Dynamics.CRM.invoice[];
	}
	interface serviceappointment extends DG.Microsoft.Dynamics.CRM.activitypointer {
		importsequencenumber: number;
		subcategory: string;
		isalldayevent: boolean;
		category: string;
		location: string;
		overriddencreatedon: Date;
		subscriptionid: System.Guid;
		_siteid_value: System.Guid;
		regardingobjectid_entitlement_serviceappointment: DG.Microsoft.Dynamics.CRM.entitlement;
		regardingobjectid_entitlementtemplate_serviceappointment: DG.Microsoft.Dynamics.CRM.entitlementtemplate;
		regardingobjectid_knowledgebaserecord_serviceappointment: DG.Microsoft.Dynamics.CRM.knowledgebaserecord;
		regardingobjectid_account_serviceappointment: DG.Microsoft.Dynamics.CRM.account;
		serviceappointment_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		serviceid_serviceappointment: DG.Microsoft.Dynamics.CRM.service;
		ServiceAppointment_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdonbehalfby_serviceappointment: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_incident_serviceappointment: DG.Microsoft.Dynamics.CRM.incident;
		serviceappointment_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owninguser_serviceappointment: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_salesorder_serviceappointment: DG.Microsoft.Dynamics.CRM.salesorder;
		ServiceAppointment_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		regardingobjectid_contact_serviceappointment: DG.Microsoft.Dynamics.CRM.contact;
		serviceappointment_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		regardingobjectid_contract_serviceappointment: DG.Microsoft.Dynamics.CRM.contract;
		regardingobjectid_campaign_serviceappointment: DG.Microsoft.Dynamics.CRM.campaign;
		ServiceAppointment_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_opportunity_serviceappointment: DG.Microsoft.Dynamics.CRM.opportunity;
		regardingobjectid_quote_serviceappointment: DG.Microsoft.Dynamics.CRM.quote;
		regardingobjectid_knowledgearticle_serviceappointment: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		siteid: DG.Microsoft.Dynamics.CRM.site;
		createdby_serviceappointment: DG.Microsoft.Dynamics.CRM.systemuser;
		transactioncurrencyid_serviceappointment: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		ServiceAppointment_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		modifiedby_serviceappointment: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam_serviceappointment: DG.Microsoft.Dynamics.CRM.team;
		modifiedonbehalfby_serviceappointment: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_invoice_serviceappointment: DG.Microsoft.Dynamics.CRM.invoice;
		owningbusinessunit_serviceappointment: DG.Microsoft.Dynamics.CRM.businessunit;
		regardingobjectid_lead_serviceappointment: DG.Microsoft.Dynamics.CRM.lead;
	}
	interface activityparty extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		donotemail: boolean;
		scheduledend: Date;
		_partyid_value: System.Guid;
		_activityid_value: System.Guid;
		exchangeentryid: string;
		activitypartyid: System.Guid;
		donotpostalmail: boolean;
		versionnumber: number;
		participationtypemask: number;
		scheduledstart: Date;
		_ownerid_value: System.Guid;
		effort: number;
		instancetypecode: number;
		donotphone: boolean;
		ispartydeleted: boolean;
		addressusedemailcolumnnumber: number;
		donotfax: boolean;
		addressused: string;
		_resourcespecid_value: System.Guid;
		partyid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity;
		partyid_incident: DG.Microsoft.Dynamics.CRM.incident;
		activityid_serviceappointment: DG.Microsoft.Dynamics.CRM.serviceappointment;
		activityid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster;
		partyid_invoice: DG.Microsoft.Dynamics.CRM.invoice;
		partyid_contract: DG.Microsoft.Dynamics.CRM.contract;
		activityid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity;
		activityid_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity;
		activityid_appointment: DG.Microsoft.Dynamics.CRM.appointment;
		partyid_queue: DG.Microsoft.Dynamics.CRM.queue;
		partyid_systemuser: DG.Microsoft.Dynamics.CRM.systemuser;
		activityid_fax: DG.Microsoft.Dynamics.CRM.fax;
		partyid_salesorder: DG.Microsoft.Dynamics.CRM.salesorder;
		activityid_phonecall: DG.Microsoft.Dynamics.CRM.phonecall;
		activityid_task: DG.Microsoft.Dynamics.CRM.task;
		activityid_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse;
		activityid_quoteclose: DG.Microsoft.Dynamics.CRM.quoteclose;
		resourcespecid: DG.Microsoft.Dynamics.CRM.resourcespec;
		activityid_letter: DG.Microsoft.Dynamics.CRM.letter;
		activityid_orderclose: DG.Microsoft.Dynamics.CRM.orderclose;
		partyid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperation;
		partyid_quote: DG.Microsoft.Dynamics.CRM.quote;
		activityid_email: DG.Microsoft.Dynamics.CRM.email;
		partyid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		partyid_lead: DG.Microsoft.Dynamics.CRM.lead;
		activityid_opportunityclose: DG.Microsoft.Dynamics.CRM.opportunityclose;
		partyid_equipment: DG.Microsoft.Dynamics.CRM.equipment;
		partyid_opportunity: DG.Microsoft.Dynamics.CRM.opportunity;
		partyid_campaign: DG.Microsoft.Dynamics.CRM.campaign;
		partyid_account: DG.Microsoft.Dynamics.CRM.account;
		activityid_incidentresolution: DG.Microsoft.Dynamics.CRM.incidentresolution;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		partyid_contact: DG.Microsoft.Dynamics.CRM.contact;
	}
	interface campaignactivity extends DG.Microsoft.Dynamics.CRM.activitypointer {
		actualcost_base: number;
		donotsendonoptout: boolean;
		importsequencenumber: number;
		budgetedcost_base: number;
		actualcost: number;
		ignoreinactivelistmembers: boolean;
		typecode: number;
		subcategory: string;
		overriddencreatedon: Date;
		excludeifcontactedinxdays: number;
		category: string;
		budgetedcost: number;
		channeltypecode: number;
		campaignactivitylist_association: DG.Microsoft.Dynamics.CRM.list[];
		campaignactivitysalesliterature_association: DG.Microsoft.Dynamics.CRM.salesliterature[];
		campaignactivity_activityparties: DG.Microsoft.Dynamics.CRM.activityparty[];
		regardingobjectid_campaign_campaignactivity: DG.Microsoft.Dynamics.CRM.campaign;
		transactioncurrencyid_campaignactivity: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		CampaignActivity_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		CampaignActivity_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		campaignactivity_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		campaignactivity_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		createdby_campaignactivity: DG.Microsoft.Dynamics.CRM.systemuser;
		campaignactivity_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		modifiedonbehalfby_campaignactivity: DG.Microsoft.Dynamics.CRM.systemuser;
		CampaignActivity_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		CampaignActivity_BulkOperations: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		CampaignActivity_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		createdonbehalfby_campaignactivity: DG.Microsoft.Dynamics.CRM.systemuser;
		owninguser_campaignactivity: DG.Microsoft.Dynamics.CRM.systemuser;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		CampaignActivity_Emails: DG.Microsoft.Dynamics.CRM.email[];
		CampaignActivity_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		owningteam_campaignactivity: DG.Microsoft.Dynamics.CRM.team;
		CampaignActivity_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		CampaignActivity_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		CampaignActivity_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		modifiedby_campaignactivity: DG.Microsoft.Dynamics.CRM.systemuser;
		CampaignActivity_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		CampaignActivity_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		owningbusinessunit_campaignactivity: DG.Microsoft.Dynamics.CRM.businessunit;
		CampaignActivity_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
	}
	interface queueitem extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_workerid_value: System.Guid;
		_createdby_value: System.Guid;
		_modifiedby_value: System.Guid;
		importsequencenumber: number;
		workeridmodifiedon: Date;
		_modifiedonbehalfby_value: System.Guid;
		exchangerate: number;
		utcconversiontimezonecode: number;
		_queueid_value: System.Guid;
		statecode: number;
		enteredon: Date;
		_owningbusinessunit_value: System.Guid;
		overriddencreatedon: Date;
		versionnumber: number;
		_ownerid_value: System.Guid;
		objecttypecode: number;
		queueitemid: System.Guid;
		statuscode: number;
		_objectid_value: System.Guid;
		_owninguser_value: System.Guid;
		timezoneruleversionnumber: number;
		_createdonbehalfby_value: System.Guid;
		title: string;
		_transactioncurrencyid_value: System.Guid;
		modifiedon: Date;
		_organizationid_value: System.Guid;
		createdon: Date;
		objectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		objectid_appointment: DG.Microsoft.Dynamics.CRM.appointment;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		objectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity;
		workerid_systemuser: DG.Microsoft.Dynamics.CRM.systemuser;
		objectid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		queueid: DG.Microsoft.Dynamics.CRM.queue;
		objectid_incident: DG.Microsoft.Dynamics.CRM.incident;
		QueueItem_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		workerid_team: DG.Microsoft.Dynamics.CRM.team;
		objectid_fax: DG.Microsoft.Dynamics.CRM.fax;
		objectid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		objectid_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse;
		objectid_serviceappointment: DG.Microsoft.Dynamics.CRM.serviceappointment;
		objectid_letter: DG.Microsoft.Dynamics.CRM.letter;
		objectid_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity;
		objectid_phonecall: DG.Microsoft.Dynamics.CRM.phonecall;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		objectid_task: DG.Microsoft.Dynamics.CRM.task;
		QueueItem_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		objectid_email: DG.Microsoft.Dynamics.CRM.email;
		objectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperation;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface queue extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		queueid: System.Guid;
		emailrouteraccessapproval: number;
		statuscode: number;
		_owninguser_value: System.Guid;
		_owningteam_value: System.Guid;
		_ownerid_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		importsequencenumber: number;
		emailaddress: string;
		ignoreunsolicitedemail: boolean;
		isemailaddressapprovedbyo365admin: boolean;
		_organizationid_value: System.Guid;
		_createdby_value: System.Guid;
		overriddencreatedon: Date;
		statecode: number;
		numberofitems: number;
		incomingemailfilteringmethod: number;
		queuetypecode: number;
		incomingemaildeliverymethod: number;
		entityimageid: System.Guid;
		_defaultmailbox_value: System.Guid;
		outgoingemaildeliverymethod: number;
		_modifiedby_value: System.Guid;
		modifiedon: Date;
		numberofmembers: number;
		exchangerate: number;
		name: string;
		entityimage: number[];
		description: string;
		versionnumber: number;
		_modifiedonbehalfby_value: System.Guid;
		entityimage_url: string;
		createdon: Date;
		_owningbusinessunit_value: System.Guid;
		entityimage_timestamp: number;
		queueviewtype: number;
		defaultmailbox: DG.Microsoft.Dynamics.CRM.mailbox;
		Queue_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		businessunitid: DG.Microsoft.Dynamics.CRM.businessunit;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		queue_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		mailbox_regarding_queue: DG.Microsoft.Dynamics.CRM.mailbox[];
		queue_team: DG.Microsoft.Dynamics.CRM.team[];
		queue_entries: DG.Microsoft.Dynamics.CRM.queueitem[];
		queue_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		Queue_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		primaryuserid: DG.Microsoft.Dynamics.CRM.systemuser;
		Queue_Email_EmailSender: DG.Microsoft.Dynamics.CRM.email[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		queuemembership_association: DG.Microsoft.Dynamics.CRM.systemuser[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		queue_system_user: DG.Microsoft.Dynamics.CRM.systemuser[];
		queue_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		Queue_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		Queue_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
	}
	interface mailbox extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		testemailconfigurationretrycount: number;
		isactsyncorgflagset: boolean;
		lastmailboxforcedunlockoccurredon: Date;
		isforwardmailbox: boolean;
		_emailserverprofile_value: System.Guid;
		isemailaddressapprovedbyo365admin: boolean;
		orgmarkedasprimaryforexchangesync: boolean;
		actdeliverymethod: number;
		mailboxprocessingcontext: number;
		outgoingemaildeliverymethod: number;
		entityimageid: System.Guid;
		incomingemaildeliverymethod: number;
		lastsyncerror: string;
		noactcount: number;
		mailboxid: System.Guid;
		timezoneruleversionnumber: number;
		forcedunlockcount: number;
		lastsuccessfulsynccompletedon: Date;
		lastautodiscoveredon: Date;
		_owninguser_value: System.Guid;
		enabledforoutgoingemail: boolean;
		_modifiedby_value: System.Guid;
		entityimage: number[];
		createdon: Date;
		versionnumber: number;
		_organizationid_value: System.Guid;
		lastduration: number;
		testemailconfigurationscheduled: boolean;
		itemsfailedforlastsync: number;
		officeappsdeploymenterror: string;
		enabledforact: boolean;
		outgoingemailstatus: number;
		lastsyncerrorcount: number;
		emailaddress: string;
		utcconversiontimezonecode: number;
		lastsyncerroroccurredon: Date;
		processanddeleteemails: boolean;
		itemsprocessedforlastsync: number;
		entityimage_timestamp: number;
		folderhierarchy: string;
		officeappsdeploymentcompleteon: Date;
		processinglastattemptedon: Date;
		username: string;
		officeappsdeploymentscheduled: boolean;
		_modifiedonbehalfby_value: System.Guid;
		officeappsdeploymentstatus: number;
		postponesendinguntil: Date;
		postponetestemailconfigurationuntil: Date;
		actstatus: number;
		statuscode: number;
		lastsyncstartedon: Date;
		processedtimes: number;
		lastsyncerrorcode: number;
		ispasswordset: boolean;
		_createdby_value: System.Guid;
		_owningteam_value: System.Guid;
		_ownerid_value: System.Guid;
		lastsyncerrormachinename: string;
		ewsurl: string;
		modifiedon: Date;
		_createdonbehalfby_value: System.Guid;
		postponeofficeappsdeploymentuntil: Date;
		postponemailboxprocessinguntil: Date;
		processemailreceivedafter: Date;
		receivingpostponeduntil: Date;
		emailrouteraccessapproval: number;
		noemailcount: number;
		incomingemailstatus: number;
		processingstatecode: number;
		password: string;
		enabledforincomingemail: boolean;
		name: string;
		_owningbusinessunit_value: System.Guid;
		isserviceaccount: boolean;
		statecode: number;
		testmailboxaccesscompletedon: Date;
		exchangesyncstatexml: string;
		entityimage_url: string;
		_regardingobjectid_value: System.Guid;
		undeliverablefolder: string;
		allowemailconnectortousecredentials: boolean;
		averagetotalduration: number;
		verboseloggingenabled: number;
		receivingpostponeduntilforact: Date;
		hostid: string;
		transientfailurecount: number;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		regardingobjectid: DG.Microsoft.Dynamics.CRM.systemuser;
		emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofile;
		systemuser_defaultmailbox_mailbox: DG.Microsoft.Dynamics.CRM.systemuser[];
		queue_defaultmailbox_mailbox: DG.Microsoft.Dynamics.CRM.queue[];
		tracelog_Mailbox: DG.Microsoft.Dynamics.CRM.tracelog[];
		activitypointer_sendermailboxid_mailbox: DG.Microsoft.Dynamics.CRM.activitypointer[];
		mailbox_asyncoperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		regardingobjectid_queue: DG.Microsoft.Dynamics.CRM.queue;
		email_sendermailboxid_mailbox: DG.Microsoft.Dynamics.CRM.email[];
		Mailbox_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
	}
	interface emailserverprofile extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		outgoingusessl: boolean;
		incomingserverlocation: string;
		outgoingusername: string;
		statuscode: number;
		incomingusername: string;
		outgoingportnumber: number;
		outgoingpassword: string;
		incomingauthenticationprotocol: number;
		timeoutmailboxconnection: boolean;
		entityimage: number[];
		moveundeliveredemails: boolean;
		_createdby_value: System.Guid;
		utcconversiontimezonecode: number;
		isoutgoingpasswordset: boolean;
		_ownerid_value: System.Guid;
		_incomingpartnerapplication_value: System.Guid;
		outgoingauthenticationprotocol: number;
		_outgoingpartnerapplication_value: System.Guid;
		lasttestexecutionstatus: number;
		minpollingintervalinminutes: number;
		owneremailaddress: string;
		incomingcredentialretrieval: number;
		lastteststarttime: Date;
		incomingportnumber: number;
		createdon: Date;
		timeoutmailboxconnectionafteramount: number;
		emailserverprofileid: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		outgoinguseimpersonation: boolean;
		lasttesttotalexecutiontime: number;
		maxconcurrentconnections: number;
		name: string;
		_organizationid_value: System.Guid;
		timezoneruleversionnumber: number;
		description: string;
		useautodiscover: boolean;
		_owninguser_value: System.Guid;
		sendemailalert: boolean;
		entityimage_url: string;
		outgoingautograntdelegateaccess: boolean;
		incominguseimpersonation: boolean;
		_modifiedby_value: System.Guid;
		isincomingpasswordset: boolean;
		_createdonbehalfby_value: System.Guid;
		incomingpassword: string;
		entityimageid: System.Guid;
		statecode: number;
		usesamesettingsforoutgoingconnections: boolean;
		processemailsreceivedafter: Date;
		exchangeversion: number;
		lasttestrequest: string;
		incomingusessl: boolean;
		lasttestvalidationstatus: number;
		_owningteam_value: System.Guid;
		emailservertypename: string;
		lasttestresponse: string;
		servertype: number;
		modifiedon: Date;
		entityimage_timestamp: number;
		outgoingserverlocation: string;
		_owningbusinessunit_value: System.Guid;
		encodingcodepage: string;
		outgoingcredentialretrieval: number;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		emailserverprofile_mailbox: DG.Microsoft.Dynamics.CRM.mailbox[];
		emailserverprofile_asyncoperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		emailserverprofile_bulkdeletefailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		EmailServerProfile_Organization: DG.Microsoft.Dynamics.CRM.organization[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		tracelog_EmailServerProfile: DG.Microsoft.Dynamics.CRM.tracelog[];
		EmailServerProfile_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		emailserverprofile_duplicatematchingrecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		emailserverprofile_duplicatebaserecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
	}
	interface tracelog extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		tracelogid: System.Guid;
		level: number;
		_regardingobjectid_value: System.Guid;
		traceparameterxml: string;
		_regardingobjectownerid_value: System.Guid;
		text: string;
		tracedetailxml: string;
		_regardingobjectowningbusinessunit_value: System.Guid;
		errordetails: string;
		_modifiedonbehalfby_value: System.Guid;
		machinename: string;
		_createdby_value: System.Guid;
		timezoneruleversionnumber: number;
		traceactionxml: string;
		_organizationid_value: System.Guid;
		modifiedon: Date;
		tracestatus: boolean;
		collationlevel: number;
		utcconversiontimezonecode: number;
		errortypedisplay: string;
		tracecode: number;
		isunique: boolean;
		_parenttracelogid_value: System.Guid;
		traceparameterhash: number;
		_createdonbehalfby_value: System.Guid;
		_modifiedby_value: System.Guid;
		createdon: Date;
		canbedeleted: boolean;
		regardingobjectid_mailbox: DG.Microsoft.Dynamics.CRM.mailbox;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		parenttracelogid: DG.Microsoft.Dynamics.CRM.tracelog;
		tracelog_parent_tracelog: DG.Microsoft.Dynamics.CRM.tracelog[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		regardingobjectid_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofile;
	}
	interface incident extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		sentimentvalue: number;
		onholdtime: number;
		traversedpath: string;
		_transactioncurrencyid_value: System.Guid;
		exchangerate: number;
		incidentstagecode: number;
		_createdby_value: System.Guid;
		casetypecode: number;
		title: string;
		numberofchildincidents: number;
		_owninguser_value: System.Guid;
		_slainvokedid_value: System.Guid;
		followuptaskcreated: boolean;
		firstresponseslastatus: number;
		modifiedon: Date;
		_contactid_value: System.Guid;
		statecode: number;
		messagetypecode: number;
		entityimage_timestamp: number;
		merged: boolean;
		overriddencreatedon: Date;
		_createdbyexternalparty_value: System.Guid;
		customercontacted: boolean;
		createdon: Date;
		_resolvebykpiid_value: System.Guid;
		_owningteam_value: System.Guid;
		_existingcase_value: System.Guid;
		customersatisfactioncode: number;
		_firstresponsebykpiid_value: System.Guid;
		_primarycontactid_value: System.Guid;
		_kbarticleid_value: System.Guid;
		_subjectid_value: System.Guid;
		utcconversiontimezonecode: number;
		isdecrementing: boolean;
		stageid: System.Guid;
		entityimage: number[];
		followupby: Date;
		statuscode: number;
		_accountid_value: System.Guid;
		actualserviceunits: number;
		escalatedon: Date;
		checkemail: boolean;
		resolveby: Date;
		_masterid_value: System.Guid;
		incidentid: System.Guid;
		_entitlementid_value: System.Guid;
		importsequencenumber: number;
		servicestage: number;
		decremententitlementterm: boolean;
		routecase: boolean;
		influencescore: number;
		responseby: Date;
		_modifiedbyexternalparty_value: System.Guid;
		_modifiedby_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		_productid_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		caseorigincode: number;
		timezoneruleversionnumber: number;
		firstresponsesent: boolean;
		processid: System.Guid;
		productserialnumber: string;
		entityimageid: System.Guid;
		_contractid_value: System.Guid;
		contractservicelevelcode: number;
		isescalated: boolean;
		severitycode: number;
		lastonholdtime: Date;
		ticketnumber: string;
		_contractdetailid_value: System.Guid;
		_parentcaseid_value: System.Guid;
		blockedprofile: boolean;
		billedserviceunits: number;
		_socialprofileid_value: System.Guid;
		_ownerid_value: System.Guid;
		_owningbusinessunit_value: System.Guid;
		description: string;
		_slaid_value: System.Guid;
		activitiescomplete: boolean;
		resolvebyslastatus: number;
		versionnumber: number;
		_customerid_value: System.Guid;
		entityimage_url: string;
		prioritycode: number;
		incident_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		incident_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		masterid: DG.Microsoft.Dynamics.CRM.incident;
		incident_master_incident: DG.Microsoft.Dynamics.CRM.incident[];
		OriginatingCase_Lead: DG.Microsoft.Dynamics.CRM.lead[];
		parentcaseid: DG.Microsoft.Dynamics.CRM.incident;
		incident_parent_incident: DG.Microsoft.Dynamics.CRM.incident[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		incident_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		slainvokedid_sla: DG.Microsoft.Dynamics.CRM.sla;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		Incident_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		firstresponsebykpiid: DG.Microsoft.Dynamics.CRM.slakpiinstance;
		slaid_sla: DG.Microsoft.Dynamics.CRM.sla;
		productid: DG.Microsoft.Dynamics.CRM.product;
		slakpiinstance_incident: DG.Microsoft.Dynamics.CRM.slakpiinstance[];
		Incident_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		incident_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		Incident_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		contractdetailid: DG.Microsoft.Dynamics.CRM.contractdetail;
		existingcase: DG.Microsoft.Dynamics.CRM.incident;
		incident_existingcase: DG.Microsoft.Dynamics.CRM.incident[];
		Incident_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		KnowledgeBaseRecord_Incident: DG.Microsoft.Dynamics.CRM.knowledgebaserecord[];
		incident_topic: DG.Microsoft.Dynamics.CRM.topic[];
		Incident_IncidentResolutions: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		Incident_Emails: DG.Microsoft.Dynamics.CRM.email[];
		Incident_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Incident_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		Incident_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		incident_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		customerid_contact: DG.Microsoft.Dynamics.CRM.contact;
		subjectid: DG.Microsoft.Dynamics.CRM.subject;
		entitlementid: DG.Microsoft.Dynamics.CRM.entitlement;
		Incident_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		Incident_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		socialprofileid: DG.Microsoft.Dynamics.CRM.socialprofile;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		Incident_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		Incident_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		customerid_account: DG.Microsoft.Dynamics.CRM.account;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		resolvebykpiid: DG.Microsoft.Dynamics.CRM.slakpiinstance;
		primarycontactid: DG.Microsoft.Dynamics.CRM.contact;
		responsiblecontactid: DG.Microsoft.Dynamics.CRM.contact;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		Incident_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		Incident_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		contractid: DG.Microsoft.Dynamics.CRM.contract;
		knowledgearticle_incidents: DG.Microsoft.Dynamics.CRM.knowledgearticleincident[];
		Incident_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		Incident_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		kbarticleid: DG.Microsoft.Dynamics.CRM.kbarticle;
	}
	interface sla extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		isdefault: boolean;
		_modifiedonbehalfby_value: System.Guid;
		changedattributelist: string;
		_businesshoursid_value: System.Guid;
		_owningbusinessunit_value: System.Guid;
		overwritetime: Date;
		ismanaged: boolean;
		slaid: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		modifiedon: Date;
		objecttypecode: number;
		_modifiedby_value: System.Guid;
		slatype: number;
		versionnumber: number;
		_createdonbehalfby_value: System.Guid;
		applicablefrompicklist: number;
		statecode: number;
		_owninguser_value: System.Guid;
		applicablefrom: string;
		name: string;
		description: string;
		_workflowid_value: System.Guid;
		_owningteam_value: System.Guid;
		slaidunique: System.Guid;
		statuscode: number;
		solutionid: System.Guid;
		allowpauseresume: boolean;
		exchangerate: number;
		createdon: Date;
		_ownerid_value: System.Guid;
		_createdby_value: System.Guid;
		componentstate: number;
		workflowid: DG.Microsoft.Dynamics.CRM.workflow;
		sla_cases: DG.Microsoft.Dynamics.CRM.incident[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		businesshoursid: DG.Microsoft.Dynamics.CRM.calendar;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		manualsla_cases: DG.Microsoft.Dynamics.CRM.incident[];
		sla_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		sla_entitlement: DG.Microsoft.Dynamics.CRM.entitlement[];
		sla_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplate[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		slabase_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		slabase_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		sla_slaitem_slaId: DG.Microsoft.Dynamics.CRM.slaitem[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
	}
	interface workflow extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		entityimage: number[];
		triggeronupdateattributelist: string;
		businessprocesstype: number;
		_plugintypeid_value: System.Guid;
		processorder: number;
		name: string;
		triggeroncreate: boolean;
		mode: number;
		rank: number;
		ismanaged: boolean;
		processroleassignment: string;
		formid: System.Guid;
		asyncautodelete: boolean;
		_modifiedby_value: System.Guid;
		workflowidunique: System.Guid;
		overwritetime: Date;
		_modifiedonbehalfby_value: System.Guid;
		xaml: string;
		modifiedon: Date;
		deletestage: number;
		_activeworkflowid_value: System.Guid;
		solutionid: System.Guid;
		createstage: number;
		_owningteam_value: System.Guid;
		_createdby_value: System.Guid;
		subprocess: boolean;
		primaryentity: string;
		statecode: number;
		_owninguser_value: System.Guid;
		iscrmuiworkflow: boolean;
		runas: number;
		rendererobjecttypecode: string;
		_createdonbehalfby_value: System.Guid;
		statuscode: number;
		_parentworkflowid_value: System.Guid;
		_ownerid_value: System.Guid;
		entityimage_timestamp: number;
		category: number;
		type: number;
		triggerondelete: boolean;
		updatestage: number;
		_owningbusinessunit_value: System.Guid;
		introducedversion: string;
		workflowid: System.Guid;
		ondemand: boolean;
		clientdata: string;
		scope: number;
		inputparameters: string;
		createdon: Date;
		syncworkflowlogonfailure: boolean;
		entityimageid: System.Guid;
		iscustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		componentstate: number;
		languagecode: number;
		entityimage_url: string;
		istransacted: boolean;
		uniquename: string;
		versionnumber: number;
		description: string;
		_sdkmessageid_value: System.Guid;
		slabase_workflowid: DG.Microsoft.Dynamics.CRM.sla[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		lk_asyncoperation_workflowactivationid: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		parentworkflowid: DG.Microsoft.Dynamics.CRM.workflow;
		workflow_parent_workflow: DG.Microsoft.Dynamics.CRM.workflow[];
		slaitembase_workflowid: DG.Microsoft.Dynamics.CRM.slaitem[];
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		Workflow_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		activeworkflowid: DG.Microsoft.Dynamics.CRM.workflow;
		workflow_active_workflow: DG.Microsoft.Dynamics.CRM.workflow[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface BooleanManagedProperty {
		Value: boolean;
		CanBeChanged: boolean;
		ManagedPropertyLogicalName: string;
	}
	interface slaitem extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_createdby_value: System.Guid;
		_ownerid_value: System.Guid;
		failureafter: number;
		_modifiedby_value: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		warnafter: number;
		description: string;
		ismanaged: boolean;
		_owninguser_value: System.Guid;
		sequencenumber: number;
		_slaid_value: System.Guid;
		componentstate: number;
		solutionid: System.Guid;
		_createdonbehalfby_value: System.Guid;
		_owningbusinessunit_value: System.Guid;
		_workflowid_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		modifiedon: Date;
		applicablewhenxml: string;
		createdon: Date;
		name: string;
		versionnumber: number;
		slaitemidunique: System.Guid;
		relatedfield: string;
		exchangerate: number;
		overwritetime: Date;
		successconditionsxml: string;
		slaitemid: System.Guid;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		workflowid: DG.Microsoft.Dynamics.CRM.workflow;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		slaid: DG.Microsoft.Dynamics.CRM.sla;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface calendar extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_modifiedby_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		_businessunitid_value: System.Guid;
		isshared: boolean;
		primaryuserid: System.Guid;
		description: string;
		createdon: Date;
		_createdonbehalfby_value: System.Guid;
		modifiedon: Date;
		_holidayschedulecalendarid_value: System.Guid;
		type: number;
		versionnumber: number;
		name: string;
		calendarid: System.Guid;
		_createdby_value: System.Guid;
		_organizationid_value: System.Guid;
		calendar_calendar_rules: DG.Microsoft.Dynamics.CRM.calendarrule[];
		calendar_equipment: DG.Microsoft.Dynamics.CRM.equipment[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		Calendar_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		slabase_businesshoursid: DG.Microsoft.Dynamics.CRM.sla[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		calendar_organization: DG.Microsoft.Dynamics.CRM.organization[];
		businessunitid: DG.Microsoft.Dynamics.CRM.businessunit;
		BusinessUnit_Calendar: DG.Microsoft.Dynamics.CRM.businessunit[];
		Calendar_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		holidayschedulecalendarid: DG.Microsoft.Dynamics.CRM.calendar;
		calendar_customercalendar_holidaycalendar: DG.Microsoft.Dynamics.CRM.calendar[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		calendar_system_users: DG.Microsoft.Dynamics.CRM.systemuser[];
		calendar_services: DG.Microsoft.Dynamics.CRM.service[];
		Calendar_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		inner_calendar_calendar_rules: DG.Microsoft.Dynamics.CRM.calendarrule[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
	}
	interface calendarrule extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		effectiveintervalend: Date;
		ismodified: boolean;
		offset: number;
		_createdonbehalfby_value: System.Guid;
		_serviceid_value: System.Guid;
		versionnumber: number;
		createdon: Date;
		name: string;
		_createdby_value: System.Guid;
		groupdesignator: string;
		duration: number;
		extentcode: number;
		description: string;
		effort: number;
		starttime: Date;
		_modifiedonbehalfby_value: System.Guid;
		timecode: number;
		modifiedon: Date;
		_calendarid_value: System.Guid;
		endtime: Date;
		isvaried: boolean;
		_modifiedby_value: System.Guid;
		calendarruleid: System.Guid;
		timezonecode: number;
		subcode: number;
		pattern: string;
		businessunitid: System.Guid;
		_innercalendarid_value: System.Guid;
		issimple: boolean;
		effectiveintervalstart: Date;
		rank: number;
		isselected: boolean;
		organizationid: System.Guid;
		calendarid: DG.Microsoft.Dynamics.CRM.calendar;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		innercalendarid: DG.Microsoft.Dynamics.CRM.calendar;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		serviceid: DG.Microsoft.Dynamics.CRM.service;
	}
	interface service extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_organizationid_value: System.Guid;
		granularity: string;
		isschedulable: boolean;
		_createdby_value: System.Guid;
		_resourcespecid_value: System.Guid;
		initialstatuscode: number;
		anchoroffset: number;
		isvisible: boolean;
		serviceid: System.Guid;
		calendarid: System.Guid;
		_createdonbehalfby_value: System.Guid;
		overriddencreatedon: Date;
		duration: number;
		_modifiedby_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		importsequencenumber: number;
		_strategyid_value: System.Guid;
		name: string;
		createdon: Date;
		modifiedon: Date;
		versionnumber: number;
		showresources: boolean;
		description: string;
		strategyid: DG.Microsoft.Dynamics.CRM.plugintype;
		service_incidentresolutions: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		service_accounts: DG.Microsoft.Dynamics.CRM.account[];
		service_service_appointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		service_quoteclose: DG.Microsoft.Dynamics.CRM.quoteclose[];
		service_opportunityclose: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		service_phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		service_recurringappointmentmasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		service_faxes: DG.Microsoft.Dynamics.CRM.fax[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		Service_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		service_tasks: DG.Microsoft.Dynamics.CRM.task[];
		service_socialactivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		calendarid_calendar: DG.Microsoft.Dynamics.CRM.calendar;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		service_orderclose: DG.Microsoft.Dynamics.CRM.orderclose[];
		service_letters: DG.Microsoft.Dynamics.CRM.letter[];
		service_activity_pointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		Service_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		service_contacts: DG.Microsoft.Dynamics.CRM.contact[];
		service_appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		Service_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		service_emails: DG.Microsoft.Dynamics.CRM.email[];
		service_calendar_rules: DG.Microsoft.Dynamics.CRM.calendarrule[];
		resourcespecid: DG.Microsoft.Dynamics.CRM.resourcespec;
		Service_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Service_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
	}
	interface plugintype extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		name: string;
		assemblyname: string;
		_createdby_value: System.Guid;
		friendlyname: string;
		_modifiedby_value: System.Guid;
		publickeytoken: string;
		_createdonbehalfby_value: System.Guid;
		version: string;
		_pluginassemblyid_value: System.Guid;
		culture: string;
		plugintypeid: System.Guid;
		versionnumber: number;
		customworkflowactivityinfo: string;
		createdon: Date;
		major: number;
		workflowactivitygroupname: string;
		componentstate: number;
		typename: string;
		minor: number;
		plugintypeidunique: System.Guid;
		modifiedon: Date;
		_modifiedonbehalfby_value: System.Guid;
		customizationlevel: number;
		description: string;
		overwritetime: Date;
		ismanaged: boolean;
		_organizationid_value: System.Guid;
		isworkflowactivity: boolean;
		solutionid: System.Guid;
		plugin_type_service: DG.Microsoft.Dynamics.CRM.service[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		pluginassemblyid: DG.Microsoft.Dynamics.CRM.pluginassembly;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		plugintypeid_sdkmessageprocessingstep: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		plugintype_sdkmessageprocessingstep: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface pluginassembly extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		ishidden: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		sourcetype: number;
		_organizationid_value: System.Guid;
		sourcehash: string;
		introducedversion: string;
		name: string;
		publickeytoken: string;
		_createdby_value: System.Guid;
		customizationlevel: number;
		createdon: Date;
		_createdonbehalfby_value: System.Guid;
		version: string;
		description: string;
		solutionid: System.Guid;
		ismanaged: boolean;
		culture: string;
		pluginassemblyidunique: System.Guid;
		versionnumber: number;
		overwritetime: Date;
		_modifiedonbehalfby_value: System.Guid;
		pluginassemblyid: System.Guid;
		major: number;
		componentstate: number;
		_modifiedby_value: System.Guid;
		path: string;
		modifiedon: Date;
		minor: number;
		content: string;
		content_binary: number[];
		isolationmode: number;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		pluginassembly_plugintype: DG.Microsoft.Dynamics.CRM.plugintype[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface sdkmessageprocessingstep extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_modifiedonbehalfby_value: System.Guid;
		_organizationid_value: System.Guid;
		sdkmessageprocessingstepid: System.Guid;
		_sdkmessagefilterid_value: System.Guid;
		introducedversion: string;
		_sdkmessageid_value: System.Guid;
		componentstate: number;
		configuration: string;
		customizationlevel: number;
		statecode: number;
		mode: number;
		_createdonbehalfby_value: System.Guid;
		overwritetime: Date;
		_modifiedby_value: System.Guid;
		solutionid: System.Guid;
		asyncautodelete: boolean;
		createdon: Date;
		canusereadonlyconnection: boolean;
		ishidden: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		_sdkmessageprocessingstepsecureconfigid_value: System.Guid;
		name: string;
		modifiedon: Date;
		stage: number;
		filteringattributes: string;
		versionnumber: number;
		supporteddeployment: number;
		ismanaged: boolean;
		sdkmessageprocessingstepidunique: System.Guid;
		_eventhandler_value: System.Guid;
		rank: number;
		_impersonatinguserid_value: System.Guid;
		statuscode: number;
		_createdby_value: System.Guid;
		iscustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		description: string;
		sdkmessageprocessingstepsecureconfigid: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepsecureconfig;
		sdkmessageid: DG.Microsoft.Dynamics.CRM.sdkmessage;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		sdkmessagefilterid: DG.Microsoft.Dynamics.CRM.sdkmessagefilter;
		impersonatinguserid: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		plugintypeid: DG.Microsoft.Dynamics.CRM.plugintype;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		eventhandler_plugintype: DG.Microsoft.Dynamics.CRM.plugintype;
		SdkMessageProcessingStep_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		sdkmessageprocessingstepid_sdkmessageprocessingstepimage: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepimage[];
		eventhandler_serviceendpoint: DG.Microsoft.Dynamics.CRM.serviceendpoint;
	}
	interface sdkmessageprocessingstepsecureconfig extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		customizationlevel: number;
		_createdonbehalfby_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		sdkmessageprocessingstepsecureconfigidunique: System.Guid;
		_modifiedby_value: System.Guid;
		secureconfig: string;
		_organizationid_value: System.Guid;
		sdkmessageprocessingstepsecureconfigid: System.Guid;
		_createdby_value: System.Guid;
		modifiedon: Date;
		createdon: Date;
		sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface sdkmessage extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		autotransact: boolean;
		workflowsdkstepenabled: boolean;
		versionnumber: number;
		_organizationid_value: System.Guid;
		isreadonly: boolean;
		customizationlevel: number;
		availability: number;
		createdon: Date;
		categoryname: string;
		isactive: boolean;
		modifiedon: Date;
		_createdby_value: System.Guid;
		sdkmessageid: System.Guid;
		name: string;
		_modifiedonbehalfby_value: System.Guid;
		isprivate: boolean;
		isvalidforexecuteasync: boolean;
		sdkmessageidunique: System.Guid;
		_createdonbehalfby_value: System.Guid;
		_modifiedby_value: System.Guid;
		template: boolean;
		throttlesettings: string;
		expand: boolean;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		sdkmessageid_sdkmessageprocessingstep: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		sdkmessageid_sdkmessagefilter: DG.Microsoft.Dynamics.CRM.sdkmessagefilter[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface sdkmessagefilter extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_organizationid_value: System.Guid;
		createdon: Date;
		availability: number;
		_modifiedby_value: System.Guid;
		_sdkmessageid_value: System.Guid;
		customizationlevel: number;
		_modifiedonbehalfby_value: System.Guid;
		isvisible: boolean;
		_createdonbehalfby_value: System.Guid;
		modifiedon: Date;
		iscustomprocessingstepallowed: boolean;
		primaryobjecttypecode: string;
		versionnumber: number;
		workflowsdkstepenabled: boolean;
		secondaryobjecttypecode: string;
		sdkmessagefilteridunique: System.Guid;
		sdkmessagefilterid: System.Guid;
		_createdby_value: System.Guid;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		sdkmessagefilterid_sdkmessageprocessingstep: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		sdkmessageid: DG.Microsoft.Dynamics.CRM.sdkmessage;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface sdkmessageprocessingstepimage extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		sdkmessageprocessingstepimageid: System.Guid;
		_sdkmessageprocessingstepid_value: System.Guid;
		_createdby_value: System.Guid;
		customizationlevel: number;
		description: string;
		messagepropertyname: string;
		relatedattributename: string;
		componentstate: number;
		iscustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		sdkmessageprocessingstepimageidunique: System.Guid;
		introducedversion: string;
		ismanaged: boolean;
		entityalias: string;
		_modifiedonbehalfby_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		imagetype: number;
		versionnumber: number;
		createdon: Date;
		name: string;
		_modifiedby_value: System.Guid;
		overwritetime: Date;
		solutionid: System.Guid;
		modifiedon: Date;
		_organizationid_value: System.Guid;
		attributes: string;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		sdkmessageprocessingstepid: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep;
	}
	interface serviceendpoint extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		connectionmode: number;
		ismanaged: boolean;
		solutionid: System.Guid;
		introducedversion: string;
		iscustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		_modifiedonbehalfby_value: System.Guid;
		modifiedon: Date;
		serviceendpointidunique: System.Guid;
		path: string;
		description: string;
		_modifiedby_value: System.Guid;
		_organizationid_value: System.Guid;
		contract: number;
		_createdby_value: System.Guid;
		serviceendpointid: System.Guid;
		name: string;
		solutionnamespace: string;
		overwritetime: Date;
		userclaim: number;
		createdon: Date;
		_createdonbehalfby_value: System.Guid;
		componentstate: number;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		serviceendpoint_sdkmessageprocessingstep: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface incidentresolution extends DG.Microsoft.Dynamics.CRM.activitypointer {
		subcategory: string;
		_modifiedbyexternalparty_value: System.Guid;
		category: string;
		importsequencenumber: number;
		_incidentid_value: System.Guid;
		timespent: number;
		overriddencreatedon: Date;
		_createdbyexternalparty_value: System.Guid;
		serviceid_incidentresolution: DG.Microsoft.Dynamics.CRM.service;
		IncidentResolution_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		createdonbehalfby_incidentresolution: DG.Microsoft.Dynamics.CRM.systemuser;
		IncidentResolution_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		IncidentResolution_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		incidentid: DG.Microsoft.Dynamics.CRM.incident;
		owninguser_incidentresolution: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby_incidentresolution: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby_incidentresolution: DG.Microsoft.Dynamics.CRM.systemuser;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		owningbusinessunit_incidentresolution: DG.Microsoft.Dynamics.CRM.businessunit;
		owningteam_incidentresolution: DG.Microsoft.Dynamics.CRM.team;
		incidentresolution_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		createdby_incidentresolution: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface quoteclose extends DG.Microsoft.Dynamics.CRM.activitypointer {
		quotenumber: string;
		importsequencenumber: number;
		category: string;
		overriddencreatedon: Date;
		subcategory: string;
		revision: number;
		_quoteid_value: System.Guid;
		modifiedonbehalfby_quoteclose: DG.Microsoft.Dynamics.CRM.systemuser;
		serviceid_quoteclose: DG.Microsoft.Dynamics.CRM.service;
		quoteid: DG.Microsoft.Dynamics.CRM.quote;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		createdonbehalfby_quoteclose: DG.Microsoft.Dynamics.CRM.systemuser;
		QuoteClose_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		QuoteClose_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		quoteclose_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		QuoteClose_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		owningbusinessunit_quoteclose: DG.Microsoft.Dynamics.CRM.businessunit;
		owninguser_quoteclose: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam_quoteclose: DG.Microsoft.Dynamics.CRM.team;
		createdby_quoteclose: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby_quoteclose: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface opportunityclose extends DG.Microsoft.Dynamics.CRM.activitypointer {
		overriddencreatedon: Date;
		_opportunityid_value: System.Guid;
		subcategory: string;
		importsequencenumber: number;
		category: string;
		actualrevenue_base: number;
		_competitorid_value: System.Guid;
		actualrevenue: number;
		serviceid_opportunityclose: DG.Microsoft.Dynamics.CRM.service;
		OpportunityClose_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		owninguser_opportunityclose: DG.Microsoft.Dynamics.CRM.systemuser;
		transactioncurrencyid_opportunityclose: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		modifiedonbehalfby_opportunityclose: DG.Microsoft.Dynamics.CRM.systemuser;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		opportunityid: DG.Microsoft.Dynamics.CRM.opportunity;
		OpportunityClose_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdby_opportunityclose: DG.Microsoft.Dynamics.CRM.systemuser;
		competitorid: DG.Microsoft.Dynamics.CRM.competitor;
		opportunityclose_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		modifiedby_opportunityclose: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby_opportunityclose: DG.Microsoft.Dynamics.CRM.systemuser;
		OpportunityClose_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		owningteam_opportunityclose: DG.Microsoft.Dynamics.CRM.team;
		owningbusinessunit_opportunityclose: DG.Microsoft.Dynamics.CRM.businessunit;
	}
	interface recurringappointmentmaster extends DG.Microsoft.Dynamics.CRM.activitypointer {
		occurrences: number;
		importsequencenumber: number;
		category: string;
		effectiveenddate: Date;
		_ruleid_value: System.Guid;
		isregenerate: boolean;
		isnthmonthly: boolean;
		endtime: Date;
		daysofweekmask: number;
		outlookownerapptid: number;
		subscriptionid: System.Guid;
		isalldayevent: boolean;
		patternenddate: Date;
		starttime: Date;
		globalobjectid: string;
		patternstartdate: Date;
		overriddencreatedon: Date;
		instance: number;
		patternendtype: number;
		deletedexceptionslist: string;
		nextexpansioninstancedate: Date;
		monthofyear: number;
		lastexpandedinstancedate: Date;
		duration: number;
		isweekdaypattern: boolean;
		firstdayofweek: number;
		isnthyearly: boolean;
		seriesstatus: boolean;
		subcategory: string;
		dayofmonth: number;
		expansionstatecode: number;
		effectivestartdate: Date;
		recurrencepatterntype: number;
		_groupid_value: System.Guid;
		location: string;
		interval: number;
		regardingobjectid_entitlement_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.entitlement;
		regardingobjectid_entitlementtemplate_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.entitlementtemplate;
		recurringappointmentmaster_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		recurringappointmentmaster_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		regardingobjectid_knowledgebaserecord_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.knowledgebaserecord;
		RecurringAppointmentMaster_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		RecurringAppointmentMaster_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		RecurringAppointmentMaster_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		owninguser_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.team;
		regardingobjectid_contract_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.contract;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		recurringappointmentmaster_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		RecurringAppointmentMaster_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		owningbusinessunit_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.businessunit;
		regardingobjectid_campaign_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.campaign;
		regardingobjectid_invoice_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.invoice;
		serviceid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.service;
		createdonbehalfby_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_knowledgearticle_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		recurringappointmentmaster_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		regardingobjectid_account_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.account;
		RecurringAppointmentMaster_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		recurringappointmentmaster_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		modifiedonbehalfby_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_lead_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.lead;
		regardingobjectid_opportunity_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.opportunity;
		transactioncurrencyid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		recurringappointmentmaster_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		recurringappointmentmaster_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		regardingobjectid_incident_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.incident;
		regardingobjectid_salesorder_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.salesorder;
		regardingobjectid_quote_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.quote;
		regardingobjectid_contact_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.contact;
		modifiedby_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_bulkoperation_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.bulkoperation;
		regardingobjectid_campaignactivity_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.campaignactivity;
		RecurringAppointmentMaster_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
	}
	interface contract extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_createdonbehalfby_value: System.Guid;
		_owningteam_value: System.Guid;
		_billingaccountid_value: System.Guid;
		contracttemplateabbreviation: string;
		netprice: number;
		exchangerate: number;
		entityimage_url: string;
		entityimage_timestamp: number;
		totalprice_base: number;
		_billtoaddress_value: System.Guid;
		billingstarton: Date;
		_serviceaddress_value: System.Guid;
		modifiedon: Date;
		statuscode: number;
		totalprice: number;
		versionnumber: number;
		_billingcontactid_value: System.Guid;
		billingendon: Date;
		createdon: Date;
		_contracttemplateid_value: System.Guid;
		entityimage: number[];
		contractservicelevelcode: number;
		totaldiscount: number;
		timezoneruleversionnumber: number;
		statecode: number;
		effectivitycalendar: string;
		contractlanguage: string;
		entityimageid: System.Guid;
		_billingcustomerid_value: System.Guid;
		_owningbusinessunit_value: System.Guid;
		importsequencenumber: number;
		contractnumber: string;
		title: string;
		allotmenttypecode: number;
		overriddencreatedon: Date;
		_modifiedby_value: System.Guid;
		utcconversiontimezonecode: number;
		contractid: System.Guid;
		_customerid_value: System.Guid;
		netprice_base: number;
		_accountid_value: System.Guid;
		activeon: Date;
		billingfrequencycode: number;
		_createdby_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		_originatingcontract_value: System.Guid;
		_contactid_value: System.Guid;
		usediscountaspercentage: boolean;
		_owninguser_value: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		expireson: Date;
		cancelon: Date;
		duration: number;
		totaldiscount_base: number;
		_ownerid_value: System.Guid;
		servicecontractcontacts_association: DG.Microsoft.Dynamics.CRM.contact[];
		billingcustomerid_account: DG.Microsoft.Dynamics.CRM.account;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		Contract_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		serviceaddress: DG.Microsoft.Dynamics.CRM.customeraddress;
		Contract_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		contract_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		contract_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		contract_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		Contract_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Contract_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		customerid_contact: DG.Microsoft.Dynamics.CRM.contact;
		billingcustomerid_contact: DG.Microsoft.Dynamics.CRM.contact;
		Contract_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		Contract_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		Contract_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		contract_line_items: DG.Microsoft.Dynamics.CRM.contractdetail[];
		originatingcontract: DG.Microsoft.Dynamics.CRM.contract;
		contract_originating_contract: DG.Microsoft.Dynamics.CRM.contract[];
		Contract_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		Contract_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		billtoaddress: DG.Microsoft.Dynamics.CRM.customeraddress;
		Contract_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		Contract_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		Contract_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		Contract_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		Contract_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		Contract_Emails: DG.Microsoft.Dynamics.CRM.email[];
		customerid_account: DG.Microsoft.Dynamics.CRM.account;
		contract_cases: DG.Microsoft.Dynamics.CRM.incident[];
		contracttemplateid: DG.Microsoft.Dynamics.CRM.contracttemplate;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
	}
	interface customeraddress extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_modifiedby_value: System.Guid;
		addresstypecode: number;
		freighttermscode: number;
		stateorprovince: string;
		line3: string;
		line2: string;
		modifiedon: Date;
		telephone3: string;
		addressnumber: number;
		postofficebox: string;
		telephone1: string;
		utcoffset: number;
		_owninguser_value: System.Guid;
		importsequencenumber: number;
		fax: string;
		line1: string;
		utcconversiontimezonecode: number;
		_parentid_value: System.Guid;
		telephone2: string;
		exchangerate: number;
		country: string;
		county: string;
		longitude: number;
		objecttypecode: string;
		_createdby_value: System.Guid;
		primarycontactname: string;
		_createdonbehalfby_value: System.Guid;
		timezoneruleversionnumber: number;
		versionnumber: number;
		shippingmethodcode: number;
		city: string;
		customeraddressid: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		createdon: Date;
		_owningbusinessunit_value: System.Guid;
		upszone: string;
		composite: string;
		_transactioncurrencyid_value: System.Guid;
		postalcode: string;
		latitude: number;
		_ownerid_value: System.Guid;
		overriddencreatedon: Date;
		name: string;
		CustomerAddress_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		customer_address_contracts_as_service_address: DG.Microsoft.Dynamics.CRM.contract[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		parentid_account: DG.Microsoft.Dynamics.CRM.account;
		customer_address_contract_line_items: DG.Microsoft.Dynamics.CRM.contractdetail[];
		parentid_contact: DG.Microsoft.Dynamics.CRM.contact;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		customer_address_contracts_as_billing_address: DG.Microsoft.Dynamics.CRM.contract[];
		CustomerAddress_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
	}
	interface contractdetail extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		expireson: Date;
		price_base: number;
		rate_base: number;
		net_base: number;
		allotmentsused: number;
		statecode: number;
		owningbusinessunit: System.Guid;
		versionnumber: number;
		_customerid_value: System.Guid;
		discount_base: number;
		timezoneruleversionnumber: number;
		_createdby_value: System.Guid;
		servicecontractunitscode: number;
		_modifiedonbehalfby_value: System.Guid;
		importsequencenumber: number;
		effectivitycalendar: string;
		utcconversiontimezonecode: number;
		_uomid_value: System.Guid;
		owninguser: System.Guid;
		title: string;
		_productid_value: System.Guid;
		modifiedon: Date;
		_uomscheduleid_value: System.Guid;
		discountpercentage: number;
		_serviceaddress_value: System.Guid;
		contractstatecode: number;
		initialquantity: number;
		overriddencreatedon: Date;
		rate: number;
		net: number;
		_contractid_value: System.Guid;
		allotmentsoverage: number;
		contractdetailid: System.Guid;
		createdon: Date;
		_transactioncurrencyid_value: System.Guid;
		allotmentsremaining: number;
		discount: number;
		totalallotments: number;
		price: number;
		_contactid_value: System.Guid;
		activeon: Date;
		_accountid_value: System.Guid;
		productserialnumber: string;
		exchangerate: number;
		_ownerid_value: System.Guid;
		statuscode: number;
		lineitemorder: number;
		_modifiedby_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		ContractDetail_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		uomscheduleid: DG.Microsoft.Dynamics.CRM.uomschedule;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		contract_detail_cases: DG.Microsoft.Dynamics.CRM.incident[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		serviceaddress: DG.Microsoft.Dynamics.CRM.customeraddress;
		contractid: DG.Microsoft.Dynamics.CRM.contract;
		ContractDetail_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		ContractDetail_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		uomid: DG.Microsoft.Dynamics.CRM.uom;
		customerid_account: DG.Microsoft.Dynamics.CRM.account;
		productid: DG.Microsoft.Dynamics.CRM.product;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		customerid_contact: DG.Microsoft.Dynamics.CRM.contact;
	}
	interface uomschedule extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		modifiedon: Date;
		name: string;
		_modifiedbyexternalparty_value: System.Guid;
		baseuomname: string;
		description: string;
		versionnumber: number;
		createdon: Date;
		_createdby_value: System.Guid;
		_organizationid_value: System.Guid;
		_createdbyexternalparty_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		statuscode: number;
		_modifiedonbehalfby_value: System.Guid;
		_modifiedby_value: System.Guid;
		overriddencreatedon: Date;
		statecode: number;
		uomscheduleid: System.Guid;
		importsequencenumber: number;
		contract_detail_unit_of_measure_schedule: DG.Microsoft.Dynamics.CRM.contractdetail[];
		unit_of_measurement_schedule_products: DG.Microsoft.Dynamics.CRM.product[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		unit_of_measure_schedule_conversions: DG.Microsoft.Dynamics.CRM.uom[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		UoMSchedule_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		UoMSchedule_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		unit_of_measure_schedule_product_price_level: DG.Microsoft.Dynamics.CRM.productpricelevel[];
	}
	interface letter extends DG.Microsoft.Dynamics.CRM.activitypointer {
		category: string;
		overriddencreatedon: Date;
		address: string;
		directioncode: boolean;
		importsequencenumber: number;
		subcategory: string;
		subscriptionid: System.Guid;
		regardingobjectid_entitlement_letter: DG.Microsoft.Dynamics.CRM.entitlement;
		regardingobjectid_entitlementtemplate_letter: DG.Microsoft.Dynamics.CRM.entitlementtemplate;
		regardingobjectid_knowledgebaserecord_letter: DG.Microsoft.Dynamics.CRM.knowledgebaserecord;
		letter_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		regardingobjectid_campaign_letter: DG.Microsoft.Dynamics.CRM.campaign;
		modifiedonbehalfby_letter: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby_letter: DG.Microsoft.Dynamics.CRM.systemuser;
		letter_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		Letter_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		regardingobjectid_quote_letter: DG.Microsoft.Dynamics.CRM.quote;
		regardingobjectid_knowledgearticle_letter: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		owningbusinessunit_letter: DG.Microsoft.Dynamics.CRM.businessunit;
		Letter_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		regardingobjectid_invoice_letter: DG.Microsoft.Dynamics.CRM.invoice;
		regardingobjectid_salesorder_letter: DG.Microsoft.Dynamics.CRM.salesorder;
		owningteam_letter: DG.Microsoft.Dynamics.CRM.team;
		regardingobjectid_campaignactivity_letter: DG.Microsoft.Dynamics.CRM.campaignactivity;
		letter_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		serviceid_letter: DG.Microsoft.Dynamics.CRM.service;
		Letter_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		regardingobjectid_contract_letter: DG.Microsoft.Dynamics.CRM.contract;
		transactioncurrencyid_letter: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		regardingobjectid_bulkoperation_letter: DG.Microsoft.Dynamics.CRM.bulkoperation;
		letter_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		owninguser_letter: DG.Microsoft.Dynamics.CRM.systemuser;
		Letter_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		regardingobjectid_opportunity_letter: DG.Microsoft.Dynamics.CRM.opportunity;
		Letter_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		regardingobjectid_incident_letter: DG.Microsoft.Dynamics.CRM.incident;
		modifiedby_letter: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid_lead_letter: DG.Microsoft.Dynamics.CRM.lead;
		createdby_letter: DG.Microsoft.Dynamics.CRM.systemuser;
		Letter_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		regardingobjectid_account_letter: DG.Microsoft.Dynamics.CRM.account;
		regardingobjectid_contact_letter: DG.Microsoft.Dynamics.CRM.contact;
	}
	interface invoice extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		name: string;
		statuscode: number;
		ispricelocked: boolean;
		discountamount_base: number;
		shipto_fax: string;
		entityimageid: System.Guid;
		description: string;
		discountpercentage: number;
		_modifiedby_value: System.Guid;
		_createdby_value: System.Guid;
		freightamount: number;
		shipto_city: string;
		createdon: Date;
		shipto_postalcode: string;
		shipto_line2: string;
		totallineitemdiscountamount: number;
		_owningbusinessunit_value: System.Guid;
		totallineitemamount_base: number;
		statecode: number;
		_modifiedonbehalfby_value: System.Guid;
		billto_postalcode: string;
		shipto_composite: string;
		shipto_stateorprovince: string;
		importsequencenumber: number;
		shipto_line1: string;
		billto_stateorprovince: string;
		entityimage_url: string;
		totalamount_base: number;
		exchangerate: number;
		_opportunityid_value: System.Guid;
		_accountid_value: System.Guid;
		shipto_telephone: string;
		billto_line3: string;
		discountamount: number;
		billto_telephone: string;
		prioritycode: number;
		billto_composite: string;
		_salesorderid_value: System.Guid;
		freightamount_base: number;
		traversedpath: string;
		shipto_country: string;
		_contactid_value: System.Guid;
		_pricelevelid_value: System.Guid;
		modifiedon: Date;
		billto_line2: string;
		shipto_line3: string;
		totaldiscountamount: number;
		timezoneruleversionnumber: number;
		totallineitemdiscountamount_base: number;
		versionnumber: number;
		paymenttermscode: number;
		totalamount: number;
		_owningteam_value: System.Guid;
		totalamountlessfreight: number;
		totaltax_base: number;
		shipto_name: string;
		willcall: boolean;
		invoicenumber: string;
		billto_fax: string;
		billto_country: string;
		_createdonbehalfby_value: System.Guid;
		stageid: System.Guid;
		processid: System.Guid;
		overriddencreatedon: Date;
		_ownerid_value: System.Guid;
		invoiceid: System.Guid;
		utcconversiontimezonecode: number;
		_transactioncurrencyid_value: System.Guid;
		datedelivered: Date;
		billto_name: string;
		totalamountlessfreight_base: number;
		entityimage: number[];
		_owninguser_value: System.Guid;
		lastbackofficesubmit: Date;
		billto_city: string;
		shipto_freighttermscode: number;
		totaldiscountamount_base: number;
		pricingerrorcode: number;
		shippingmethodcode: number;
		totallineitemamount: number;
		_customerid_value: System.Guid;
		billto_line1: string;
		entityimage_timestamp: number;
		totaltax: number;
		duedate: Microsoft.OData.Edm.Library.Date;
		contactinvoices_association: DG.Microsoft.Dynamics.CRM.contact[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		customerid_contact: DG.Microsoft.Dynamics.CRM.contact;
		Invoice_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		invoice_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		invoice_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		Invoice_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		Invoice_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		Invoice_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		Invoice_Emails: DG.Microsoft.Dynamics.CRM.email[];
		Invoice_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		Invoice_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		Invoice_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		opportunityid: DG.Microsoft.Dynamics.CRM.opportunity;
		invoice_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		invoice_details: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		Invoice_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		customerid_account: DG.Microsoft.Dynamics.CRM.account;
		pricelevelid: DG.Microsoft.Dynamics.CRM.pricelevel;
		Invoice_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		Invoice_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		Invoice_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		Invoice_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		salesorderid: DG.Microsoft.Dynamics.CRM.salesorder;
	}
	interface invoicedetail extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		ispriceoverridden: boolean;
		priceperunit: number;
		_modifiedonbehalfby_value: System.Guid;
		_salesrepid_value: System.Guid;
		shipto_telephone: string;
		volumediscountamount: number;
		sequencenumber: number;
		shipto_country: string;
		versionnumber: number;
		isproductoverridden: boolean;
		extendedamount_base: number;
		invoiceispricelocked: boolean;
		_productid_value: System.Guid;
		tax_base: number;
		_uomid_value: System.Guid;
		extendedamount: number;
		owningbusinessunit: System.Guid;
		_createdby_value: System.Guid;
		volumediscountamount_base: number;
		lineitemnumber: number;
		parentbundleid: System.Guid;
		manualdiscountamount_base: number;
		shipto_stateorprovince: string;
		baseamount: number;
		productassociationid: System.Guid;
		actualdeliveryon: Date;
		priceperunit_base: number;
		iscopied: boolean;
		quantitybackordered: number;
		manualdiscountamount: number;
		invoicedetailid: System.Guid;
		owninguser: System.Guid;
		shipto_city: string;
		invoicestatecode: number;
		_createdonbehalfby_value: System.Guid;
		description: string;
		propertyconfigurationstatus: number;
		modifiedon: Date;
		shipto_name: string;
		createdon: Date;
		_transactioncurrencyid_value: System.Guid;
		shipto_freighttermscode: number;
		importsequencenumber: number;
		producttypecode: number;
		overriddencreatedon: Date;
		shipto_line2: string;
		pricingerrorcode: number;
		shippingtrackingnumber: string;
		shipto_postalcode: string;
		willcall: boolean;
		utcconversiontimezonecode: number;
		productdescription: string;
		timezoneruleversionnumber: number;
		shipto_line1: string;
		shipto_line3: string;
		_invoiceid_value: System.Guid;
		tax: number;
		baseamount_base: number;
		_modifiedby_value: System.Guid;
		quantitycancelled: number;
		exchangerate: number;
		quantityshipped: number;
		_ownerid_value: System.Guid;
		quantity: number;
		shipto_fax: string;
		productassociationid_productassociation: DG.Microsoft.Dynamics.CRM.productassociation;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		InvoiceDetail_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		uomid: DG.Microsoft.Dynamics.CRM.uom;
		salesrepid: DG.Microsoft.Dynamics.CRM.systemuser;
		productid: DG.Microsoft.Dynamics.CRM.product;
		InvoiceDetail_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		invoiceid: DG.Microsoft.Dynamics.CRM.invoice;
		parentbundleid_invoicedetail: DG.Microsoft.Dynamics.CRM.invoicedetail;
		invoicedetail_parent_invoicedetail: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface contracttemplate extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		createdon: Date;
		contractservicelevelcode: number;
		componentstate: number;
		introducedversion: string;
		iscustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		billingfrequencycode: number;
		solutionid: System.Guid;
		versionnumber: number;
		modifiedon: Date;
		_modifiedonbehalfby_value: System.Guid;
		_createdby_value: System.Guid;
		contracttemplateid: System.Guid;
		_modifiedby_value: System.Guid;
		ismanaged: boolean;
		abbreviation: string;
		description: string;
		overwritetime: Date;
		_organizationid_value: System.Guid;
		overriddencreatedon: Date;
		importsequencenumber: number;
		usediscountaspercentage: boolean;
		_createdonbehalfby_value: System.Guid;
		effectivitycalendar: string;
		contracttemplateidunique: System.Guid;
		name: string;
		allotmenttypecode: number;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		ContractTemplate_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		ContractTemplate_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		contract_template_contracts: DG.Microsoft.Dynamics.CRM.contract[];
	}
	interface orderclose extends DG.Microsoft.Dynamics.CRM.activitypointer {
		importsequencenumber: number;
		overriddencreatedon: Date;
		revision: number;
		category: string;
		_salesorderid_value: System.Guid;
		subcategory: string;
		ordernumber: string;
		createdonbehalfby_orderclose: DG.Microsoft.Dynamics.CRM.systemuser;
		owningbusinessunit_orderclose: DG.Microsoft.Dynamics.CRM.businessunit;
		modifiedby_orderclose: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby_orderclose: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby_orderclose: DG.Microsoft.Dynamics.CRM.systemuser;
		OrderClose_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		serviceid_orderclose: DG.Microsoft.Dynamics.CRM.service;
		OrderClose_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		orderclose_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		owninguser_orderclose: DG.Microsoft.Dynamics.CRM.systemuser;
		OrderClose_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		salesorderid: DG.Microsoft.Dynamics.CRM.salesorder;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		owningteam_orderclose: DG.Microsoft.Dynamics.CRM.team;
	}
	interface resourcespec extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		requiredcount: number;
		_organizationid_value: System.Guid;
		modifiedon: Date;
		createdon: Date;
		constraints: string;
		description: string;
		resourcespecid: System.Guid;
		versionnumber: number;
		samesite: boolean;
		objectiveexpression: string;
		objecttypecode: string;
		_businessunitid_value: System.Guid;
		name: string;
		_modifiedonbehalfby_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		effortrequired: number;
		_modifiedby_value: System.Guid;
		groupobjectid: System.Guid;
		_createdby_value: System.Guid;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		groupobjectid_constraintbasedgroup: DG.Microsoft.Dynamics.CRM.constraintbasedgroup;
		businessunitid: DG.Microsoft.Dynamics.CRM.businessunit;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		ActivityPartyResourceSpec: DG.Microsoft.Dynamics.CRM.activityparty[];
		ResourceSpec_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		groupobjectid_team: DG.Microsoft.Dynamics.CRM.team;
		resourcespec_resources: DG.Microsoft.Dynamics.CRM.resource[];
		ResourceSpec_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		resource_spec_services: DG.Microsoft.Dynamics.CRM.service[];
		ResourceSpec_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
	}
	interface constraintbasedgroup extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_createdonbehalfby_value: System.Guid;
		modifiedon: Date;
		_modifiedonbehalfby_value: System.Guid;
		versionnumber: number;
		description: string;
		_createdby_value: System.Guid;
		grouptypecode: number;
		_organizationid_value: System.Guid;
		name: string;
		constraintbasedgroupid: System.Guid;
		createdon: Date;
		_businessunitid_value: System.Guid;
		_modifiedby_value: System.Guid;
		constraints: string;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		constraint_based_group_resource_specs: DG.Microsoft.Dynamics.CRM.resourcespec[];
		businessunitid_systemuser: DG.Microsoft.Dynamics.CRM.systemuser;
		constraintbasedgroup_resource_groups: DG.Microsoft.Dynamics.CRM.resourcegroup[];
		constraintbasedgroup_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		businessunitid_businessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		constraintbasedgroup_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		ConstraintBasedGroup_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		ConstraintBasedGroup_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
	}
	interface resourcegroup extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		resourcegroupid: System.Guid;
		name: string;
		_organizationid_value: System.Guid;
		versionnumber: number;
		_businessunitid_value: System.Guid;
		objecttypecode: string;
		grouptypecode: number;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		resourcegroup_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		resourcegroup_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		businessunitid: DG.Microsoft.Dynamics.CRM.businessunit;
		resourcegroupid_constraintbasedgroup: DG.Microsoft.Dynamics.CRM.constraintbasedgroup;
		ResourceGroup_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		ResourceGroup_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		resourcegroupid_team: DG.Microsoft.Dynamics.CRM.team;
		ResourceGroup_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		ResourceGroup_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
	}
	interface resource extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		isdisabled: boolean;
		entityimageid: System.Guid;
		entityimage_timestamp: number;
		versionnumber: number;
		objecttypecode: string;
		_organizationid_value: System.Guid;
		_businessunitid_value: System.Guid;
		entityimage: number[];
		_siteid_value: System.Guid;
		name: string;
		calendarid: System.Guid;
		entityimage_url: string;
		resourceid: System.Guid;
		displayinserviceviews: boolean;
		resourceid_systemuser: DG.Microsoft.Dynamics.CRM.systemuser;
		Resource_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		Resource_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		resourceid_equipment: DG.Microsoft.Dynamics.CRM.equipment;
		businessunitid: DG.Microsoft.Dynamics.CRM.businessunit;
		resourceid_resourcespec: DG.Microsoft.Dynamics.CRM.resourcespec;
		siteid: DG.Microsoft.Dynamics.CRM.site;
	}
	interface equipment extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_businessunitid_value: System.Guid;
		timezoneruleversionnumber: number;
		_transactioncurrencyid_value: System.Guid;
		isdisabled: boolean;
		skills: string;
		_siteid_value: System.Guid;
		timezonecode: number;
		utcconversiontimezonecode: number;
		displayinserviceviews: boolean;
		emailaddress: string;
		createdon: Date;
		description: string;
		overriddencreatedon: Date;
		_modifiedonbehalfby_value: System.Guid;
		name: string;
		_organizationid_value: System.Guid;
		versionnumber: number;
		importsequencenumber: number;
		_modifiedby_value: System.Guid;
		_createdby_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		exchangerate: number;
		modifiedon: Date;
		_calendarid_value: System.Guid;
		equipmentid: System.Guid;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		calendarid: DG.Microsoft.Dynamics.CRM.calendar;
		Equipment_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Equipment_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		Equipment_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		equipment_accounts: DG.Microsoft.Dynamics.CRM.account[];
		businessunitid_businessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		businessunitid_systemuser: DG.Microsoft.Dynamics.CRM.systemuser;
		Equipment_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		equipment_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		siteid: DG.Microsoft.Dynamics.CRM.site;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		Equipment_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		equipment_resources: DG.Microsoft.Dynamics.CRM.resource[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		Equipment_Email_EmailSender: DG.Microsoft.Dynamics.CRM.email[];
		equipment_contacts: DG.Microsoft.Dynamics.CRM.contact[];
		equipment_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		equipment_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface site extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_modifiedonbehalfby_value: System.Guid;
		address1_upszone: string;
		address2_telephone1: string;
		address2_shippingmethodcode: number;
		address1_name: string;
		address2_upszone: string;
		emailaddress: string;
		address2_latitude: number;
		address1_longitude: number;
		organizationid: System.Guid;
		_createdonbehalfby_value: System.Guid;
		address1_stateorprovince: string;
		address1_telephone3: string;
		address1_shippingmethodcode: number;
		name: string;
		siteid: System.Guid;
		overriddencreatedon: Date;
		address2_city: string;
		_createdby_value: System.Guid;
		address1_postalcode: string;
		versionnumber: number;
		address1_line2: string;
		address1_postofficebox: string;
		modifiedon: Date;
		address2_country: string;
		address1_utcoffset: number;
		address2_county: string;
		importsequencenumber: number;
		timezonecode: number;
		address2_line1: string;
		address1_telephone1: string;
		address2_stateorprovince: string;
		address1_addresstypecode: number;
		address1_city: string;
		address2_postalcode: string;
		address2_line3: string;
		address1_latitude: number;
		address2_telephone3: string;
		address2_longitude: number;
		address2_line2: string;
		address2_name: string;
		_modifiedby_value: System.Guid;
		address2_utcoffset: number;
		address1_country: string;
		address1_line3: string;
		address2_postofficebox: string;
		address2_telephone2: string;
		createdon: Date;
		address1_addressid: System.Guid;
		address1_line1: string;
		address2_addresstypecode: number;
		address2_fax: string;
		address1_county: string;
		address1_telephone2: string;
		address2_addressid: System.Guid;
		address1_fax: string;
		organizationid_organization: DG.Microsoft.Dynamics.CRM.organization;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		Site_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Site_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		site_equipment: DG.Microsoft.Dynamics.CRM.equipment[];
		site_system_users: DG.Microsoft.Dynamics.CRM.systemuser[];
		site_service_appointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		site_resources: DG.Microsoft.Dynamics.CRM.resource[];
	}
	interface slakpiinstance extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		slakpiinstanceid: System.Guid;
		status: number;
		versionnumber: number;
		_transactioncurrencyid_value: System.Guid;
		description: string;
		warningtime: Date;
		exchangerate: number;
		_owninguser_value: System.Guid;
		_owningteam_value: System.Guid;
		succeededon: Date;
		_modifiedonbehalfby_value: System.Guid;
		computedfailuretime: Date;
		warningtimereached: number;
		_regarding_value: System.Guid;
		_owningbusinessunit_value: System.Guid;
		failuretime: Date;
		_modifiedby_value: System.Guid;
		createdon: Date;
		_ownerid_value: System.Guid;
		modifiedon: Date;
		name: string;
		computedwarningtime: Date;
		_createdonbehalfby_value: System.Guid;
		_createdby_value: System.Guid;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		slakpiinstance_incident_firstresponsebykpi: DG.Microsoft.Dynamics.CRM.incident[];
		regarding: DG.Microsoft.Dynamics.CRM.incident;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		slakpiinstance_incident_resolvebykpi: DG.Microsoft.Dynamics.CRM.incident[];
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
	}
	interface topic extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		score: number;
		topicid: System.Guid;
		_incidentid_value: System.Guid;
		keyphrase: string;
		incidentid: DG.Microsoft.Dynamics.CRM.incident;
	}
	interface subject extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_createdby_value: System.Guid;
		overriddencreatedon: Date;
		createdon: Date;
		versionnumber: number;
		_modifiedby_value: System.Guid;
		description: string;
		featuremask: number;
		modifiedon: Date;
		_organizationid_value: System.Guid;
		_createdbyexternalparty_value: System.Guid;
		_parentsubject_value: System.Guid;
		_modifiedbyexternalparty_value: System.Guid;
		title: string;
		subjectid: System.Guid;
		_createdonbehalfby_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		importsequencenumber: number;
		subject_sales_literature: DG.Microsoft.Dynamics.CRM.salesliterature[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		parentsubject: DG.Microsoft.Dynamics.CRM.subject;
		subject_parent_subject: DG.Microsoft.Dynamics.CRM.subject[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		subject_incidents: DG.Microsoft.Dynamics.CRM.incident[];
		Subject_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		subject_kb_articles: DG.Microsoft.Dynamics.CRM.kbarticle[];
		subject_products: DG.Microsoft.Dynamics.CRM.product[];
		subject_knowledgearticles: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		Subject_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
	}
	interface kbarticle extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		entityimage_url: string;
		importsequencenumber: number;
		_transactioncurrencyid_value: System.Guid;
		_organizationid_value: System.Guid;
		_kbarticletemplateid_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		entityimage_timestamp: number;
		title: string;
		entityimageid: System.Guid;
		versionnumber: number;
		_subjectid_value: System.Guid;
		exchangerate: number;
		keywords: string;
		statuscode: number;
		number: string;
		modifiedon: Date;
		kbarticleid: System.Guid;
		comments: string;
		content: string;
		_createdby_value: System.Guid;
		entityimage: number[];
		_modifiedonbehalfby_value: System.Guid;
		createdon: Date;
		languagecode: number;
		articlexml: string;
		overriddencreatedon: Date;
		statecode: number;
		_modifiedby_value: System.Guid;
		description: string;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		KbArticle_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		KbArticle_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		KbArticle_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		KbArticle_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		kbarticletemplateid: DG.Microsoft.Dynamics.CRM.kbarticletemplate;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		KbArticle_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		KbArticle_SharepointDocumentLocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		kbarticle_comments: DG.Microsoft.Dynamics.CRM.kbarticlecomment[];
		subjectid: DG.Microsoft.Dynamics.CRM.subject;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		kbarticle_incidents: DG.Microsoft.Dynamics.CRM.incident[];
	}
	interface kbarticletemplate extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		componentstate: number;
		overriddencreatedon: Date;
		_createdonbehalfby_value: System.Guid;
		iscustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		description: string;
		introducedversion: string;
		_modifiedby_value: System.Guid;
		modifiedon: Date;
		overwritetime: Date;
		solutionid: System.Guid;
		structurexml: string;
		_modifiedonbehalfby_value: System.Guid;
		versionnumber: number;
		title: string;
		createdon: Date;
		importsequencenumber: number;
		kbarticletemplateidunique: System.Guid;
		languagecode: number;
		kbarticletemplateid: System.Guid;
		isactive: boolean;
		formatxml: string;
		ismanaged: boolean;
		_organizationid_value: System.Guid;
		_createdby_value: System.Guid;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		KbArticleTemplate_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		kb_article_template_kb_articles: DG.Microsoft.Dynamics.CRM.kbarticle[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		KbArticleTemplate_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface kbarticlecomment extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		createdon: Date;
		modifiedon: Date;
		_modifiedby_value: System.Guid;
		organizationid: System.Guid;
		_kbarticleid_value: System.Guid;
		kbarticlecommentid: System.Guid;
		commenttext: string;
		_modifiedonbehalfby_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		title: string;
		versionnumber: number;
		_createdby_value: System.Guid;
		KbArticleComment_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		KbArticleComment_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		kbarticleid: DG.Microsoft.Dynamics.CRM.kbarticle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface socialprofile extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		utcconversiontimezonecode: number;
		uniqueprofileid: string;
		modifiedon: Date;
		influencescore: number;
		statecode: number;
		exchangerate: number;
		importsequencenumber: number;
		blocked: boolean;
		overriddencreatedon: Date;
		_modifiedby_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		statuscode: number;
		_modifiedonbehalfby_value: System.Guid;
		_owninguser_value: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		_ownerid_value: System.Guid;
		profilefullname: string;
		profilename: string;
		socialprofileid: System.Guid;
		_owningbusinessunit_value: System.Guid;
		community: number;
		_createdby_value: System.Guid;
		profilelink: string;
		timezoneruleversionnumber: number;
		_owningteam_value: System.Guid;
		createdon: Date;
		_customerid_value: System.Guid;
		versionnumber: number;
		SocialProfile_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		SocialProfile_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		socialprofile_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		socialprofile_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		customerid_contact: DG.Microsoft.Dynamics.CRM.contact;
		Socialprofile_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		socialprofile_cases: DG.Microsoft.Dynamics.CRM.incident[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		SocialProfile_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		customerid_account: DG.Microsoft.Dynamics.CRM.account;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface knowledgearticleincident extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		owninguser: System.Guid;
		_knowledgearticleid_value: System.Guid;
		importsequencenumber: number;
		exchangerate: number;
		knowledgeusage: number;
		_createdby_value: System.Guid;
		utcconversiontimezonecode: number;
		_transactioncurrencyid_value: System.Guid;
		overriddencreatedon: Date;
		createdon: Date;
		issenttocustomer: boolean;
		versionnumber: number;
		statuscode: number;
		_ownerid_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		_incidentid_value: System.Guid;
		statecode: number;
		knowledgearticleincidentid: System.Guid;
		modifiedon: Date;
		owningbusinessunit: System.Guid;
		timezoneruleversionnumber: number;
		_modifiedby_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		knowledgearticleid: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		incidentid: DG.Microsoft.Dynamics.CRM.incident;
	}
	interface salesorderdetail extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		owningbusinessunit: System.Guid;
		shipto_city: string;
		lineitemnumber: number;
		quantity: number;
		isproductoverridden: boolean;
		pricingerrorcode: number;
		parentbundleid: System.Guid;
		shipto_country: string;
		productdescription: string;
		shipto_contactname: string;
		shipto_freighttermscode: number;
		importsequencenumber: number;
		owninguser: System.Guid;
		manualdiscountamount_base: number;
		_productid_value: System.Guid;
		iscopied: boolean;
		shipto_line1: string;
		description: string;
		createdon: Date;
		_modifiedonbehalfby_value: System.Guid;
		propertyconfigurationstatus: number;
		extendedamount: number;
		modifiedon: Date;
		quantityshipped: number;
		salesorderispricelocked: boolean;
		_uomid_value: System.Guid;
		utcconversiontimezonecode: number;
		producttypecode: number;
		salesorderdetailid: System.Guid;
		ispriceoverridden: boolean;
		volumediscountamount_base: number;
		baseamount_base: number;
		tax: number;
		baseamount: number;
		shipto_line3: string;
		productassociationid: System.Guid;
		shipto_line2: string;
		sequencenumber: number;
		shipto_addressid: System.Guid;
		_modifiedby_value: System.Guid;
		quantitycancelled: number;
		_salesrepid_value: System.Guid;
		_salesorderid_value: System.Guid;
		exchangerate: number;
		shipto_fax: string;
		shipto_stateorprovince: string;
		shipto_telephone: string;
		_createdonbehalfby_value: System.Guid;
		priceperunit_base: number;
		requestdeliveryby: Date;
		quantitybackordered: number;
		overriddencreatedon: Date;
		shipto_name: string;
		extendedamount_base: number;
		manualdiscountamount: number;
		shipto_postalcode: string;
		priceperunit: number;
		timezoneruleversionnumber: number;
		salesorderstatecode: number;
		versionnumber: number;
		willcall: boolean;
		tax_base: number;
		volumediscountamount: number;
		_ownerid_value: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		_createdby_value: System.Guid;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		parentbundleid_salesorderdetail: DG.Microsoft.Dynamics.CRM.salesorderdetail;
		salesorderdetail_parent_salesorderdetail: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		uomid: DG.Microsoft.Dynamics.CRM.uom;
		productassociationid_productassociation: DG.Microsoft.Dynamics.CRM.productassociation;
		salesorderid: DG.Microsoft.Dynamics.CRM.salesorder;
		SalesOrderDetail_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		salesrepid: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		productid: DG.Microsoft.Dynamics.CRM.product;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		SalesOrderDetail_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
	}
	interface discounttype extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		isamounttype: boolean;
		_modifiedby_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		statecode: number;
		createdon: Date;
		_createdby_value: System.Guid;
		versionnumber: number;
		modifiedon: Date;
		name: string;
		_modifiedonbehalfby_value: System.Guid;
		discounttypeid: System.Guid;
		statuscode: number;
		description: string;
		_organizationid_value: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		overriddencreatedon: Date;
		importsequencenumber: number;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		DiscountType_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		DiscountType_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		discount_type_discounts: DG.Microsoft.Dynamics.CRM.discount[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		discount_type_product_price_levels: DG.Microsoft.Dynamics.CRM.productpricelevel[];
	}
	interface discount extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		amount: number;
		importsequencenumber: number;
		_modifiedby_value: System.Guid;
		isamounttype: boolean;
		_modifiedonbehalfby_value: System.Guid;
		organizationid: System.Guid;
		amount_base: number;
		highquantity: number;
		createdon: Date;
		exchangerate: number;
		discountid: System.Guid;
		_createdonbehalfby_value: System.Guid;
		modifiedon: Date;
		percentage: number;
		lowquantity: number;
		_discounttypeid_value: System.Guid;
		_createdby_value: System.Guid;
		overriddencreatedon: Date;
		versionnumber: number;
		_transactioncurrencyid_value: System.Guid;
		Discount_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		discounttypeid: DG.Microsoft.Dynamics.CRM.discounttype;
		Discount_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface quotedetail extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		createdon: Date;
		quotedetailid: System.Guid;
		pricingerrorcode: number;
		owningbusinessunit: System.Guid;
		extendedamount: number;
		description: string;
		isproductoverridden: boolean;
		volumediscountamount: number;
		willcall: boolean;
		quantity: number;
		shipto_freighttermscode: number;
		overriddencreatedon: Date;
		utcconversiontimezonecode: number;
		tax: number;
		_createdby_value: System.Guid;
		shipto_line1: string;
		modifiedon: Date;
		ispriceoverridden: boolean;
		_productid_value: System.Guid;
		shipto_telephone: string;
		shipto_addressid: System.Guid;
		shipto_fax: string;
		shipto_stateorprovince: string;
		versionnumber: number;
		volumediscountamount_base: number;
		parentbundleid: System.Guid;
		priceperunit_base: number;
		_modifiedby_value: System.Guid;
		producttypecode: number;
		shipto_line2: string;
		baseamount_base: number;
		priceperunit: number;
		_createdonbehalfby_value: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		importsequencenumber: number;
		sequencenumber: number;
		_uomid_value: System.Guid;
		shipto_country: string;
		lineitemnumber: number;
		_quoteid_value: System.Guid;
		productdescription: string;
		shipto_line3: string;
		shipto_name: string;
		exchangerate: number;
		timezoneruleversionnumber: number;
		_salesrepid_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		baseamount: number;
		manualdiscountamount_base: number;
		tax_base: number;
		shipto_contactname: string;
		productassociationid: System.Guid;
		manualdiscountamount: number;
		owninguser: System.Guid;
		shipto_postalcode: string;
		_ownerid_value: System.Guid;
		shipto_city: string;
		quotestatecode: number;
		extendedamount_base: number;
		propertyconfigurationstatus: number;
		requestdeliveryby: Date;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		QuoteDetail_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		productid: DG.Microsoft.Dynamics.CRM.product;
		uomid: DG.Microsoft.Dynamics.CRM.uom;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		productassociationid_productassociation: DG.Microsoft.Dynamics.CRM.productassociation;
		parentbundleid_quotedetail: DG.Microsoft.Dynamics.CRM.quotedetail;
		quotedetail_parent_quotedetail: DG.Microsoft.Dynamics.CRM.quotedetail[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		QuoteDetail_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		quoteid: DG.Microsoft.Dynamics.CRM.quote;
		salesrepid: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface bulkoperationlog extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		additionalinfo: string;
		owningbusinessunit: System.Guid;
		owninguser: System.Guid;
		errornumber: number;
		bulkoperationlogid: System.Guid;
		_bulkoperationid_value: System.Guid;
		_regardingobjectid_value: System.Guid;
		_createdobjectid_value: System.Guid;
		_ownerid_value: System.Guid;
		createdobjectid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		createdobjectid_contact: DG.Microsoft.Dynamics.CRM.contact;
		BulkOperationLog_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		bulkoperationid: DG.Microsoft.Dynamics.CRM.bulkoperation;
		createdobjectid_account: DG.Microsoft.Dynamics.CRM.account;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.account;
		bulkoperationid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		createdobjectid_lead: DG.Microsoft.Dynamics.CRM.lead;
		createdobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunity;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contact;
		BulkOperationLog_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.lead;
	}
	interface duplicaterule extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_ownerid_value: System.Guid;
		statuscode: number;
		iscasesensitive: boolean;
		matchingentitytypecode: number;
		modifiedon: Date;
		baseentityname: string;
		timezoneruleversionnumber: number;
		duplicateruleid: System.Guid;
		baseentitytypecode: number;
		_createdonbehalfby_value: System.Guid;
		_modifiedby_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		matchingentitymatchcodetable: string;
		utcconversiontimezonecode: number;
		excludeinactiverecords: boolean;
		_owninguser_value: System.Guid;
		statecode: number;
		name: string;
		matchingentityname: string;
		_owningbusinessunit_value: System.Guid;
		_owningteam_value: System.Guid;
		_createdby_value: System.Guid;
		createdon: Date;
		description: string;
		baseentitymatchcodetable: string;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		DuplicateRule_DuplicateRuleConditions: DG.Microsoft.Dynamics.CRM.duplicaterulecondition[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		DuplicateRule_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		DuplicateRule_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface duplicaterulecondition extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_createdby_value: System.Guid;
		_ownerid_value: System.Guid;
		_modifiedby_value: System.Guid;
		baseattributename: string;
		_modifiedonbehalfby_value: System.Guid;
		matchingattributename: string;
		_regardingobjectid_value: System.Guid;
		owninguser: System.Guid;
		modifiedon: Date;
		createdon: Date;
		_createdonbehalfby_value: System.Guid;
		ignoreblankvalues: boolean;
		operatorparam: number;
		owningbusinessunit: System.Guid;
		duplicateruleconditionid: System.Guid;
		operatorcode: number;
		regardingobjectid: DG.Microsoft.Dynamics.CRM.duplicaterule;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface publisher extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		address1_telephone1: string;
		address2_addressid: System.Guid;
		customizationprefix: string;
		address2_postalcode: string;
		address1_city: string;
		address2_fax: string;
		entityimage_timestamp: number;
		address1_stateorprovince: string;
		address2_county: string;
		address2_telephone3: string;
		createdon: Date;
		address1_addresstypecode: number;
		address1_addressid: System.Guid;
		versionnumber: number;
		customizationoptionvalueprefix: number;
		isreadonly: boolean;
		address2_shippingmethodcode: number;
		address1_name: string;
		modifiedon: Date;
		publisherid: System.Guid;
		address2_line1: string;
		address1_postofficebox: string;
		address1_upszone: string;
		address2_telephone1: string;
		address1_country: string;
		friendlyname: string;
		address2_city: string;
		description: string;
		address2_longitude: number;
		address1_telephone3: string;
		address1_shippingmethodcode: number;
		address2_line3: string;
		pinpointpublisherdefaultlocale: string;
		entityimageid: System.Guid;
		address1_line1: string;
		_organizationid_value: System.Guid;
		address1_latitude: number;
		_createdonbehalfby_value: System.Guid;
		address2_postofficebox: string;
		_createdby_value: System.Guid;
		uniquename: string;
		address1_line3: string;
		pinpointpublisherid: number;
		supportingwebsiteurl: string;
		entityimage_url: string;
		address1_utcoffset: number;
		_modifiedonbehalfby_value: System.Guid;
		address2_addresstypecode: number;
		_modifiedby_value: System.Guid;
		address1_postalcode: string;
		address1_county: string;
		address1_telephone2: string;
		address2_country: string;
		address2_telephone2: string;
		address1_fax: string;
		address2_utcoffset: number;
		address2_latitude: number;
		address2_stateorprovince: string;
		emailaddress: string;
		address1_longitude: number;
		address2_upszone: string;
		entityimage: number[];
		address2_line2: string;
		address1_line2: string;
		address2_name: string;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		Publisher_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		Publisher_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		publisher_solution: DG.Microsoft.Dynamics.CRM.solution[];
		Publisher_PublisherAddress: DG.Microsoft.Dynamics.CRM.publisheraddress[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface solution extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		createdon: Date;
		pinpointsolutiondefaultlocale: string;
		_configurationpageid_value: System.Guid;
		_publisherid_value: System.Guid;
		_modifiedby_value: System.Guid;
		versionnumber: number;
		description: string;
		isvisible: boolean;
		_parentsolutionid_value: System.Guid;
		pinpointpublisherid: number;
		_createdonbehalfby_value: System.Guid;
		pinpointsolutionid: number;
		_modifiedonbehalfby_value: System.Guid;
		solutionpackageversion: string;
		_createdby_value: System.Guid;
		installedon: Date;
		solutionid: System.Guid;
		modifiedon: Date;
		uniquename: string;
		friendlyname: string;
		pinpointassetid: string;
		_organizationid_value: System.Guid;
		ismanaged: boolean;
		version: string;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		configurationpageid: DG.Microsoft.Dynamics.CRM.webresource;
		solution_solutioncomponent: DG.Microsoft.Dynamics.CRM.solutioncomponent[];
		publisherid: DG.Microsoft.Dynamics.CRM.publisher;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		parentsolutionid: DG.Microsoft.Dynamics.CRM.solution;
		solution_parent_solution: DG.Microsoft.Dynamics.CRM.solution[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface webresource extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		modifiedon: Date;
		webresourceid: System.Guid;
		silverlightversion: string;
		_modifiedby_value: System.Guid;
		webresourcetype: number;
		canbedeleted: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		_createdonbehalfby_value: System.Guid;
		overwritetime: Date;
		webresourceidunique: System.Guid;
		iscustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		_modifiedonbehalfby_value: System.Guid;
		_createdby_value: System.Guid;
		isenabledformobileclient: boolean;
		name: string;
		description: string;
		introducedversion: string;
		versionnumber: number;
		ishidden: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		componentstate: number;
		createdon: Date;
		_organizationid_value: System.Guid;
		solutionid: System.Guid;
		content: string;
		content_binary: number[];
		displayname: string;
		languagecode: number;
		ismanaged: boolean;
		solution_configuration_webresource: DG.Microsoft.Dynamics.CRM.solution[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		webresource_userqueryvisualizations: DG.Microsoft.Dynamics.CRM.userqueryvisualization[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		webresource_savedqueryvisualizations: DG.Microsoft.Dynamics.CRM.savedqueryvisualization[];
		lk_theme_logoid: DG.Microsoft.Dynamics.CRM.theme[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface userqueryvisualization extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_webresourceid_value: System.Guid;
		createdon: Date;
		_owningteam_value: System.Guid;
		primaryentitytypecode: string;
		_modifiedby_value: System.Guid;
		datadescription: string;
		isdefault: boolean;
		userqueryvisualizationid: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		_ownerid_value: System.Guid;
		name: string;
		presentationdescription: string;
		_createdby_value: System.Guid;
		_owninguser_value: System.Guid;
		description: string;
		_createdonbehalfby_value: System.Guid;
		modifiedon: Date;
		_owningbusinessunit_value: System.Guid;
		versionnumber: number;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		webresourceid: DG.Microsoft.Dynamics.CRM.webresource;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface savedqueryvisualization extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		createdon: Date;
		primaryentitytypecode: string;
		description: string;
		_webresourceid_value: System.Guid;
		versionnumber: number;
		presentationdescription: string;
		savedqueryvisualizationidunique: System.Guid;
		solutionid: System.Guid;
		isdefault: boolean;
		introducedversion: string;
		_modifiedonbehalfby_value: System.Guid;
		componentstate: number;
		iscustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		type: number;
		_organizationid_value: System.Guid;
		name: string;
		datadescription: string;
		ismanaged: boolean;
		_modifiedby_value: System.Guid;
		modifiedon: Date;
		_createdby_value: System.Guid;
		canbedeleted: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		savedqueryvisualizationid: System.Guid;
		_createdonbehalfby_value: System.Guid;
		overwritetime: Date;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		webresourceid: DG.Microsoft.Dynamics.CRM.webresource;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface solutioncomponent extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		modifiedon: Date;
		createdon: Date;
		componenttype: number;
		rootcomponentbehavior: number;
		versionnumber: number;
		_modifiedonbehalfby_value: System.Guid;
		ismetadata: boolean;
		rootsolutioncomponentid: System.Guid;
		_createdonbehalfby_value: System.Guid;
		_createdby_value: System.Guid;
		_solutionid_value: System.Guid;
		_modifiedby_value: System.Guid;
		solutioncomponentid: System.Guid;
		objectid: System.Guid;
		solutionid: DG.Microsoft.Dynamics.CRM.solution;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		rootsolutioncomponentid_solutioncomponent: DG.Microsoft.Dynamics.CRM.solutioncomponent;
		solutioncomponent_parent_solutioncomponent: DG.Microsoft.Dynamics.CRM.solutioncomponent[];
	}
	interface publisheraddress extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		line2: string;
		name: string;
		fax: string;
		versionnumber: number;
		timezoneruleversionnumber: number;
		postofficebox: string;
		_modifiedby_value: System.Guid;
		freighttermscode: number;
		longitude: number;
		postalcode: string;
		addresstypecode: number;
		modifiedon: Date;
		country: string;
		shippingmethodcode: number;
		upszone: string;
		telephone2: string;
		addressnumber: number;
		_createdby_value: System.Guid;
		createdon: Date;
		telephone3: string;
		line1: string;
		utcoffset: number;
		primarycontactname: string;
		_modifiedonbehalfby_value: System.Guid;
		county: string;
		utcconversiontimezonecode: number;
		_parentid_value: System.Guid;
		city: string;
		publisheraddressid: System.Guid;
		importsequencenumber: number;
		_createdonbehalfby_value: System.Guid;
		line3: string;
		telephone1: string;
		latitude: number;
		stateorprovince: string;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		parentid: DG.Microsoft.Dynamics.CRM.publisher;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface territory extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		exchangerate: number;
		_managerid_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		createdon: Date;
		overriddencreatedon: Date;
		modifiedon: Date;
		_modifiedonbehalfby_value: System.Guid;
		description: string;
		entityimageid: System.Guid;
		_createdby_value: System.Guid;
		entityimage: number[];
		_organizationid_value: System.Guid;
		_modifiedby_value: System.Guid;
		name: string;
		entityimage_url: string;
		versionnumber: number;
		territoryid: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		entityimage_timestamp: number;
		importsequencenumber: number;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		territory_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		territory_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		managerid: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		Territory_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		Territory_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		Territory_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		territory_accounts: DG.Microsoft.Dynamics.CRM.account[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		Territory_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		territory_system_users: DG.Microsoft.Dynamics.CRM.systemuser[];
	}
	interface sharepointsite extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		userid: System.Guid;
		statecode: number;
		validationstatus: number;
		_modifiedonbehalfby_value: System.Guid;
		absoluteurl: string;
		modifiedon: Date;
		sitecollectionid: System.Guid;
		_modifiedby_value: System.Guid;
		exchangerate: number;
		_createdonbehalfby_value: System.Guid;
		statuscode: number;
		isgridpresent: boolean;
		_parentsite_value: System.Guid;
		validationstatuserrorcode: number;
		servicetype: number;
		_createdby_value: System.Guid;
		_owningteam_value: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		timezoneruleversionnumber: number;
		relativeurl: string;
		createdon: Date;
		_owningbusinessunit_value: System.Guid;
		description: string;
		lastvalidated: Date;
		isdefault: boolean;
		utcconversiontimezonecode: number;
		ispowerbisite: boolean;
		overriddencreatedon: Date;
		versionnumber: number;
		sharepointsiteid: System.Guid;
		importsequencenumber: number;
		folderstructureentity: string;
		name: string;
		_owninguser_value: System.Guid;
		_ownerid_value: System.Guid;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		SharePointSite_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		parentsite: DG.Microsoft.Dynamics.CRM.sharepointsite;
		sharepointsite_parentsite_sharepointsite: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		SharePointSite_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		sharepointdocumentlocation_parent_sharepointsite: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		SharePointSite_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
	}
	interface metric extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_createdonbehalfby_value: System.Guid;
		timezoneruleversionnumber: number;
		statuscode: number;
		isamount: boolean;
		utcconversiontimezonecode: number;
		importsequencenumber: number;
		_organizationid_value: System.Guid;
		_modifiedby_value: System.Guid;
		isstretchtracked: boolean;
		amountdatatype: number;
		name: string;
		versionnumber: number;
		description: string;
		createdon: Date;
		overriddencreatedon: Date;
		_modifiedonbehalfby_value: System.Guid;
		metricid: System.Guid;
		statecode: number;
		modifiedon: Date;
		_createdby_value: System.Guid;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		metric_goal: DG.Microsoft.Dynamics.CRM.goal[];
		metric_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
	}
	interface annualfiscalcalendar extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		userfiscalcalendarid: System.Guid;
		modifiedon: Date;
		fiscalperiodtype: number;
		effectiveon: Date;
		_modifiedonbehalfby_value: System.Guid;
		_businessunitid_value: System.Guid;
		exchangerate: number;
		_salespersonid_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		utcconversiontimezonecode: number;
		_modifiedby_value: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		createdon: Date;
		annual_base: number;
		annual: number;
		timezoneruleversionnumber: number;
		_createdby_value: System.Guid;
		AnnualFiscalCalendar_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		AnnualFiscalCalendar_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		salespersonid: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface mailmergetemplate extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		timezoneruleversionnumber: number;
		componentstate: number;
		languagecode: number;
		_modifiedonbehalfby_value: System.Guid;
		_owningbusinessunit_value: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		ismanaged: boolean;
		filesize: number;
		mailmergetemplateidunique: System.Guid;
		_owningteam_value: System.Guid;
		statuscode: number;
		versionnumber: number;
		mimetype: string;
		mailmergetype: number;
		iscustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		_owninguser_value: System.Guid;
		_modifiedby_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		body: string;
		modifiedon: Date;
		filename: string;
		documentformat: number;
		overwritetime: Date;
		statecode: number;
		solutionid: System.Guid;
		exchangerate: number;
		introducedversion: string;
		ispersonal: boolean;
		description: string;
		mailmergetemplateid: System.Guid;
		utcconversiontimezonecode: number;
		createdon: Date;
		defaultfilter: string;
		name: string;
		_ownerid_value: System.Guid;
		_createdby_value: System.Guid;
		templatetypecode: string;
		parameterxml: string;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		MailMergeTemplate_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface monthlyfiscalcalendar extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		month8: number;
		month12_base: number;
		month10_base: number;
		exchangerate: number;
		_createdonbehalfby_value: System.Guid;
		month6_base: number;
		month9_base: number;
		_salespersonid_value: System.Guid;
		month9: number;
		fiscalperiodtype: number;
		month4_base: number;
		_createdby_value: System.Guid;
		month3_base: number;
		month12: number;
		userfiscalcalendarid: System.Guid;
		_businessunitid_value: System.Guid;
		utcconversiontimezonecode: number;
		month11_base: number;
		month2: number;
		_modifiedby_value: System.Guid;
		month5: number;
		month7: number;
		month1: number;
		month6: number;
		modifiedon: Date;
		timezoneruleversionnumber: number;
		month11: number;
		createdon: Date;
		effectiveon: Date;
		month8_base: number;
		month7_base: number;
		month10: number;
		month5_base: number;
		month2_base: number;
		month3: number;
		month1_base: number;
		_modifiedonbehalfby_value: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		month4: number;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		salespersonid: DG.Microsoft.Dynamics.CRM.systemuser;
		MonthlyFiscalCalendar_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		MonthlyFiscalCalendar_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface fixedmonthlyfiscalcalendar extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_modifiedonbehalfby_value: System.Guid;
		period10: number;
		period5_base: number;
		createdon: Date;
		userfiscalcalendarid: System.Guid;
		_businessunitid_value: System.Guid;
		period13_base: number;
		period11_base: number;
		_salespersonid_value: System.Guid;
		period11: number;
		period12: number;
		_transactioncurrencyid_value: System.Guid;
		period9_base: number;
		modifiedon: Date;
		period13: number;
		period5: number;
		period2: number;
		utcconversiontimezonecode: number;
		period2_base: number;
		period1: number;
		period8_base: number;
		period7: number;
		period3_base: number;
		exchangerate: number;
		period8: number;
		period9: number;
		period3: number;
		period4_base: number;
		fiscalperiodtype: number;
		period1_base: number;
		_createdonbehalfby_value: System.Guid;
		effectiveon: Date;
		period10_base: number;
		_createdby_value: System.Guid;
		period6: number;
		period4: number;
		_modifiedby_value: System.Guid;
		timezoneruleversionnumber: number;
		period12_base: number;
		period6_base: number;
		period7_base: number;
		FixedMonthlyFiscalCalendar_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		FixedMonthlyFiscalCalendar_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		salespersonid: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface quarterlyfiscalcalendar extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		fiscalperiodtype: number;
		quarter4: number;
		_createdby_value: System.Guid;
		timezoneruleversionnumber: number;
		quarter1: number;
		createdon: Date;
		_modifiedby_value: System.Guid;
		_transactioncurrencyid_value: System.Guid;
		quarter3: number;
		_salespersonid_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		userfiscalcalendarid: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		quarter2: number;
		exchangerate: number;
		quarter4_base: number;
		_businessunitid_value: System.Guid;
		quarter2_base: number;
		quarter1_base: number;
		effectiveon: Date;
		utcconversiontimezonecode: number;
		modifiedon: Date;
		quarter3_base: number;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		QuarterlyFiscalCalendar_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		QuarterlyFiscalCalendar_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		salespersonid: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface knowledgearticleviews extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_createdby_value: System.Guid;
		timezoneruleversionnumber: number;
		_modifiedonbehalfby_value: System.Guid;
		utcconversiontimezonecode: number;
		statuscode: number;
		overriddencreatedon: Date;
		_createdonbehalfby_value: System.Guid;
		location: number;
		statecode: number;
		exchangerate: number;
		knowledgearticleview: number;
		_transactioncurrencyid_value: System.Guid;
		_ownerid_value: System.Guid;
		viewdate: Date;
		importsequencenumber: number;
		modifiedon: Date;
		createdon: Date;
		versionnumber: number;
		_knowledgearticleid_value: System.Guid;
		owninguser: System.Guid;
		knowledgearticleviewsid: System.Guid;
		owningbusinessunit: System.Guid;
		_modifiedby_value: System.Guid;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		knowledgearticleid: DG.Microsoft.Dynamics.CRM.knowledgearticle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface position extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		timezoneruleversionnumber: number;
		_parentpositionid_value: System.Guid;
		exchangerate: number;
		_modifiedby_value: System.Guid;
		createdon: Date;
		_organizationid_value: System.Guid;
		modifiedon: Date;
		statecode: number;
		utcconversiontimezonecode: number;
		name: string;
		positionid: System.Guid;
		_createdonbehalfby_value: System.Guid;
		importsequencenumber: number;
		_modifiedonbehalfby_value: System.Guid;
		_createdby_value: System.Guid;
		statuscode: number;
		versionnumber: number;
		description: string;
		overriddencreatedon: Date;
		_transactioncurrencyid_value: System.Guid;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		position_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		position_users: DG.Microsoft.Dynamics.CRM.systemuser[];
		parentpositionid: DG.Microsoft.Dynamics.CRM.position;
		position_parent_position: DG.Microsoft.Dynamics.CRM.position[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		position_connection1: DG.Microsoft.Dynamics.CRM.connection[];
		position_connection2: DG.Microsoft.Dynamics.CRM.connection[];
	}
	interface entitlementtemplatechannel extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_entitlementtemplateid_value: System.Guid;
		entitlementtemplatechannelid: System.Guid;
		importsequencenumber: number;
		utcconversiontimezonecode: number;
		_modifiedby_value: System.Guid;
		timezoneruleversionnumber: number;
		_transactioncurrencyid_value: System.Guid;
		versionnumber: number;
		exchangerate: number;
		overriddencreatedon: Date;
		name: string;
		_modifiedonbehalfby_value: System.Guid;
		totalterms: number;
		modifiedon: Date;
		channel: number;
		_createdonbehalfby_value: System.Guid;
		_createdby_value: System.Guid;
		createdon: Date;
		_organizationid_value: System.Guid;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		entitlementtemplateid: DG.Microsoft.Dynamics.CRM.entitlementtemplate;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface reportcategory extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		componentstate: number;
		importsequencenumber: number;
		utcconversiontimezonecode: number;
		_createdby_value: System.Guid;
		iscustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		_createdonbehalfby_value: System.Guid;
		versionnumber: number;
		overwritetime: Date;
		reportcategoryidunique: System.Guid;
		createdon: Date;
		_modifiedonbehalfby_value: System.Guid;
		exchangerate: number;
		reportcategoryid: System.Guid;
		modifiedon: Date;
		_modifiedby_value: System.Guid;
		timezoneruleversionnumber: number;
		owningbusinessunit: System.Guid;
		ismanaged: boolean;
		_transactioncurrencyid_value: System.Guid;
		_ownerid_value: System.Guid;
		solutionid: System.Guid;
		categorycode: number;
		_reportid_value: System.Guid;
		owninguser: System.Guid;
		reportid: DG.Microsoft.Dynamics.CRM.report;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
	}
	interface report extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		signaturelcid: number;
		isscheduledreport: boolean;
		customreportxml: string;
		solutionid: System.Guid;
		filename: string;
		reportnameonsrs: string;
		_owningteam_value: System.Guid;
		languagecode: number;
		signaturemajorversion: number;
		_owninguser_value: System.Guid;
		createdon: Date;
		introducedversion: string;
		versionnumber: number;
		ispersonal: boolean;
		_createdonbehalfby_value: System.Guid;
		overwritetime: Date;
		_modifiedonbehalfby_value: System.Guid;
		bodyurl: string;
		originalbodytext: string;
		signatureminorversion: number;
		bodytext: string;
		iscustomreport: boolean;
		modifiedon: Date;
		defaultfilter: string;
		name: string;
		reportid: System.Guid;
		utcconversiontimezonecode: number;
		componentstate: number;
		signaturedate: Date;
		_ownerid_value: System.Guid;
		iscustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		mimetype: string;
		_parentreportid_value: System.Guid;
		_createdby_value: System.Guid;
		queryinfo: string;
		reporttypecode: number;
		reportidunique: System.Guid;
		signatureid: System.Guid;
		schedulexml: string;
		description: string;
		filesize: number;
		timezoneruleversionnumber: number;
		bodybinary: string;
		bodybinary_binary: number[];
		_modifiedby_value: System.Guid;
		_owningbusinessunit_value: System.Guid;
		ismanaged: boolean;
		createdinmajorversion: number;
		Report_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		report_reportcategories: DG.Microsoft.Dynamics.CRM.reportcategory[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		parentreportid: DG.Microsoft.Dynamics.CRM.report;
		report_parent_report: DG.Microsoft.Dynamics.CRM.report[];
	}
	interface semiannualfiscalcalendar extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		fiscalperiodtype: number;
		_businessunitid_value: System.Guid;
		firsthalf: number;
		timezoneruleversionnumber: number;
		secondhalf: number;
		_modifiedby_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		firsthalf_base: number;
		_transactioncurrencyid_value: System.Guid;
		secondhalf_base: number;
		userfiscalcalendarid: System.Guid;
		importsequencenumber: number;
		exchangerate: number;
		modifiedon: Date;
		_createdonbehalfby_value: System.Guid;
		effectiveon: Date;
		_salespersonid_value: System.Guid;
		createdon: Date;
		utcconversiontimezonecode: number;
		_createdby_value: System.Guid;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		SemiAnnualFiscalCalendar_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		salespersonid: DG.Microsoft.Dynamics.CRM.systemuser;
		SemiAnnualFiscalCalendar_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface usersettings extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		numberseparator: string;
		timezonedaylightbias: number;
		homepagelayout: string;
		_modifiedonbehalfby_value: System.Guid;
		homepagearea: string;
		longdateformatcode: number;
		reportscripterrors: number;
		outlooksyncinterval: number;
		timezonecode: number;
		usecrmformforcontact: boolean;
		versionnumber: number;
		getstartedpanecontentenabled: boolean;
		dateseparator: string;
		_createdonbehalfby_value: System.Guid;
		usecrmformfortask: boolean;
		amdesignator: string;
		timezonestandarddayofweek: number;
		defaultcalendarview: number;
		advancedfindstartupmode: number;
		personalizationsettings: string;
		defaultcountrycode: string;
		negativeformatcode: number;
		negativecurrencyformatcode: number;
		localeid: number;
		decimalsymbol: string;
		numbergroupformat: string;
		_modifiedby_value: System.Guid;
		userprofile: string;
		_createdby_value: System.Guid;
		homepagesubarea: string;
		helplanguageid: number;
		addressbooksyncinterval: number;
		timezonebias: number;
		autocreatecontactonpromote: number;
		usecrmformforappointment: boolean;
		dateformatstring: string;
		trackingtokenid: number;
		issendasallowed: boolean;
		isdefaultcountrycodecheckenabled: boolean;
		timezonedaylightdayofweek: number;
		fullnameconventioncode: number;
		lastalertsviewedtime: Date;
		timezonestandardbias: number;
		dateformatcode: number;
		timezonestandardmonth: number;
		timezonestandardsecond: number;
		timezonestandardminute: number;
		timezonedaylighthour: number;
		isduplicatedetectionenabledwhengoingonline: boolean;
		businessunitid: System.Guid;
		paginglimit: number;
		timezonestandardday: number;
		createdon: Date;
		systemuserid: System.Guid;
		uilanguageid: number;
		pmdesignator: string;
		currencysymbol: string;
		timezonedaylightminute: number;
		incomingemailfilteringmethod: number;
		usecrmformforemail: boolean;
		isguidedhelpenabled: boolean;
		currencyformatcode: number;
		timezonedaylightday: number;
		nexttrackingnumber: number;
		timezonedaylightsecond: number;
		entityformmode: number;
		datavalidationmodeforexporttoexcel: number;
		visualizationpanelayout: number;
		synccontactcompany: boolean;
		showweeknumber: boolean;
		timezonestandardyear: number;
		timeformatstring: string;
		timeformatcode: number;
		ignoreunsolicitedemail: boolean;
		timezonedaylightmonth: number;
		calendartype: number;
		timeseparator: string;
		workdaystarttime: string;
		_transactioncurrencyid_value: System.Guid;
		timezonestandardhour: number;
		isappsforcrmalertdismissed: boolean;
		workdaystoptime: string;
		offlinesyncinterval: number;
		timezonedaylightyear: number;
		modifiedon: Date;
		defaultdashboardid: System.Guid;
		useimagestrips: boolean;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		systemuserid_systemuser: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		businessunitid_businessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface officegraphdocument extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		previewimageurl: string;
		modifiedtime: Date;
		fileextension: string;
		readurl: string;
		_organizationid_value: System.Guid;
		utcconversiontimezonecode: number;
		officegraphdocumentid: System.Guid;
		exchangerate: number;
		createdtime: Date;
		weblocationurl: string;
		secondaryfileextension: string;
		rank: number;
		modifiedby: string;
		documentlastmodifiedon: Date;
		authornames: string;
		siteurl: string;
		title: string;
		createdby: string;
		documentlastmodifiedby: string;
		_modifiedonbehalfby_value: System.Guid;
		documentpreviewmetadata: string;
		querytype: number;
		documentid: string;
		viewcount: number;
		sitetitle: string;
		_transactioncurrencyid_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		filetype: string;
		versionnumber: number;
		timezoneruleversionnumber: number;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
	}
	interface leadaddress extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_parentid_value: System.Guid;
		upszone: string;
		exchangerate: number;
		createdon: Date;
		line1: string;
		stateorprovince: string;
		_modifiedby_value: System.Guid;
		name: string;
		versionnumber: number;
		addressnumber: number;
		modifiedon: Date;
		country: string;
		telephone2: string;
		line2: string;
		_createdonbehalfby_value: System.Guid;
		latitude: number;
		postofficebox: string;
		_createdby_value: System.Guid;
		telephone3: string;
		telephone1: string;
		fax: string;
		composite: string;
		leadaddressid: System.Guid;
		line3: string;
		addresstypecode: number;
		shippingmethodcode: number;
		county: string;
		_transactioncurrencyid_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		longitude: number;
		city: string;
		postalcode: string;
		utcoffset: number;
		parentid: DG.Microsoft.Dynamics.CRM.lead;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrency;
	}
	interface connectionrole extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		name: string;
		statecode: number;
		versionnumber: number;
		introducedversion: string;
		description: string;
		_createdonbehalfby_value: System.Guid;
		statuscode: number;
		_organizationid_value: System.Guid;
		iscustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		modifiedon: Date;
		category: number;
		ismanaged: boolean;
		connectionroleid: System.Guid;
		importsequencenumber: number;
		_modifiedonbehalfby_value: System.Guid;
		solutionid: System.Guid;
		_modifiedby_value: System.Guid;
		createdon: Date;
		connectionroleidunique: System.Guid;
		componentstate: number;
		overwritetime: Date;
		_createdby_value: System.Guid;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		Connection_Role_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		connection_role_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		connection_role_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		connectionroleassociation_association: DG.Microsoft.Dynamics.CRM.connectionrole[];
		connectionroleassociation_association_referenced: DG.Microsoft.Dynamics.CRM.connectionrole[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
	}
	interface activitymimeattachment extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		objecttypecode: string;
		activitymimeattachmentid: System.Guid;
		_objectid_value: System.Guid;
		filename: string;
		componentstate: number;
		overwritetime: Date;
		versionnumber: number;
		body: string;
		body_binary: number[];
		attachmentcontentid: string;
		filesize: number;
		_ownerid_value: System.Guid;
		_owninguser_value: System.Guid;
		attachmentnumber: number;
		solutionid: System.Guid;
		mimetype: string;
		_attachmentid_value: System.Guid;
		subject: string;
		_owningbusinessunit_value: System.Guid;
		activitymimeattachmentidunique: System.Guid;
		ismanaged: boolean;
		objectid_email: DG.Microsoft.Dynamics.CRM.email;
		objectid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer;
		objectid_template: DG.Microsoft.Dynamics.CRM.template;
		attachmentid: DG.Microsoft.Dynamics.CRM.attachment;
		objectid_appointment: DG.Microsoft.Dynamics.CRM.appointment;
		ActivityMimeAttachment_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		ActivityMimeAttachment_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
	}
	interface template extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		presentationxml: string;
		_owningteam_value: System.Guid;
		subjectpresentationxml: string;
		generationtypecode: number;
		_createdby_value: System.Guid;
		mimetype: string;
		modifiedon: Date;
		_owninguser_value: System.Guid;
		_ownerid_value: System.Guid;
		importsequencenumber: number;
		_owningbusinessunit_value: System.Guid;
		description: string;
		templateidunique: System.Guid;
		body: string;
		solutionid: System.Guid;
		_modifiedby_value: System.Guid;
		templatetypecode: string;
		iscustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		ispersonal: boolean;
		componentstate: number;
		templateid: System.Guid;
		ismanaged: boolean;
		title: string;
		createdon: Date;
		overwritetime: Date;
		subject: string;
		introducedversion: string;
		_modifiedonbehalfby_value: System.Guid;
		languagecode: number;
		versionnumber: number;
		_createdonbehalfby_value: System.Guid;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		Template_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Template_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		template_activity_mime_attachments: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		Template_Organization: DG.Microsoft.Dynamics.CRM.organization[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface attachment extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		mimetype: string;
		filename: string;
		attachmentid: System.Guid;
		body: string;
		body_binary: number[];
		filesize: number;
		subject: string;
		versionnumber: number;
		attachment_activity_mime_attachments: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
	}
	interface post extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		modifiedon: Date;
		createdon: Date;
		_createdonbehalfby_value: System.Guid;
		_regardingobjectowningbusinessunit_value: System.Guid;
		_modifiedby_value: System.Guid;
		text: string;
		_modifiedonbehalfby_value: System.Guid;
		utcconversiontimezonecode: number;
		timezoneruleversionnumber: number;
		_regardingobjectid_value: System.Guid;
		_regardingobjectownerid_value: System.Guid;
		_createdby_value: System.Guid;
		source: number;
		_organizationid_value: System.Guid;
		postid: System.Guid;
		type: number;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		post_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		post_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		postregardingid: DG.Microsoft.Dynamics.CRM.postregarding;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		Post_Comments: DG.Microsoft.Dynamics.CRM.postcomment[];
		Post_Likes: DG.Microsoft.Dynamics.CRM.postlike[];
	}
	interface postcomment extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		postcommentid: System.Guid;
		_createdonbehalfby_value: System.Guid;
		_createdby_value: System.Guid;
		timezoneruleversionnumber: number;
		utcconversiontimezonecode: number;
		_organizationid_value: System.Guid;
		text: string;
		createdon: Date;
		_postid_value: System.Guid;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		postid: DG.Microsoft.Dynamics.CRM.post;
	}
	interface postlike extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		postlikeid: System.Guid;
		timezoneruleversionnumber: number;
		_createdonbehalfby_value: System.Guid;
		utcconversiontimezonecode: number;
		_createdby_value: System.Guid;
		_organizationid_value: System.Guid;
		createdon: Date;
		_postid_value: System.Guid;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		postid: DG.Microsoft.Dynamics.CRM.post;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
	}
	interface campaignactivityitem extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		owningbusinessunit: System.Guid;
		_ownerid_value: System.Guid;
		itemid: System.Guid;
		versionnumber: number;
		owninguser: System.Guid;
		_campaignactivityid_value: System.Guid;
		itemobjecttypecode: string;
		campaignactivityitemid: System.Guid;
		campaignactivityid: DG.Microsoft.Dynamics.CRM.activitypointer;
	}
	interface privilege extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		accessright: number;
		canbebasic: boolean;
		versionnumber: number;
		name: string;
		privilegeid: System.Guid;
		canbeentityreference: boolean;
		canbeglobal: boolean;
		canbeparententityreference: boolean;
		canbelocal: boolean;
		canbedeep: boolean;
		roletemplateprivileges_association: DG.Microsoft.Dynamics.CRM.roletemplate[];
		roleprivileges_association: DG.Microsoft.Dynamics.CRM.role[];
		Privilege_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Privilege_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
	}
	interface roletemplate extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		name: string;
		roletemplateid: System.Guid;
		roletemplateprivileges_association: DG.Microsoft.Dynamics.CRM.privilege[];
		role_template_roles: DG.Microsoft.Dynamics.CRM.role[];
	}
	interface role extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_parentrootroleid_value: System.Guid;
		importsequencenumber: number;
		overriddencreatedon: Date;
		_roletemplateid_value: System.Guid;
		createdon: Date;
		roleidunique: System.Guid;
		ismanaged: boolean;
		_modifiedby_value: System.Guid;
		modifiedon: Date;
		organizationid: System.Guid;
		solutionid: System.Guid;
		name: string;
		componentstate: number;
		roleid: System.Guid;
		_createdby_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		versionnumber: number;
		iscustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		_businessunitid_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		_parentroleid_value: System.Guid;
		overwritetime: Date;
		systemuserroles_association: DG.Microsoft.Dynamics.CRM.systemuser[];
		roleprivileges_association: DG.Microsoft.Dynamics.CRM.privilege[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		parentroleid: DG.Microsoft.Dynamics.CRM.role;
		role_parent_role: DG.Microsoft.Dynamics.CRM.role[];
		businessunitid: DG.Microsoft.Dynamics.CRM.businessunit;
		roletemplateid: DG.Microsoft.Dynamics.CRM.roletemplate;
		Role_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Role_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		organizationid_organization: DG.Microsoft.Dynamics.CRM.organization;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		teamroles_association: DG.Microsoft.Dynamics.CRM.team[];
		parentrootroleid: DG.Microsoft.Dynamics.CRM.role;
		role_parent_root_role: DG.Microsoft.Dynamics.CRM.role[];
	}
	interface businessunitnewsarticle extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		modifiedon: Date;
		activeuntil: Date;
		_modifiedonbehalfby_value: System.Guid;
		_modifiedby_value: System.Guid;
		importsequencenumber: number;
		newsarticle: string;
		overriddencreatedon: Date;
		timezoneruleversionnumber: number;
		articletypecode: number;
		activeon: Date;
		_createdby_value: System.Guid;
		_organizationid_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		articleurl: string;
		businessunitnewsarticleid: System.Guid;
		createdon: Date;
		articletitle: string;
		showonhomepage: boolean;
		utcconversiontimezonecode: number;
		versionnumber: number;
		BusinessUnitNewsArticle_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		BusinessUnitNewsArticle_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface importfile extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		totalcount: number;
		targetentityname: string;
		parsedtablename: string;
		completedon: Date;
		additionalheaderrow: string;
		isfirstrowheader: boolean;
		_modifiedby_value: System.Guid;
		statuscode: number;
		statecode: number;
		content: string;
		source: string;
		fielddelimitercode: number;
		importfileid: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		partialfailurecount: number;
		_importmapid_value: System.Guid;
		size: string;
		timezoneruleversionnumber: number;
		parsedtablecolumnprefix: string;
		_createdby_value: System.Guid;
		_owningbusinessunit_value: System.Guid;
		usesystemmap: boolean;
		_owninguser_value: System.Guid;
		datadelimitercode: number;
		sourceentityname: string;
		_importid_value: System.Guid;
		enableduplicatedetection: boolean;
		_createdonbehalfby_value: System.Guid;
		createdon: Date;
		filetypecode: number;
		failurecount: number;
		relatedentitycolumns: string;
		processingstatus: number;
		utcconversiontimezonecode: number;
		modifiedon: Date;
		name: string;
		_ownerid_value: System.Guid;
		headerrow: string;
		_owningteam_value: System.Guid;
		processcode: number;
		successcount: number;
		parsedtablecolumnsnumber: number;
		progresscounter: number;
		_recordsownerid_value: System.Guid;
		ImportFile_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		ImportFile_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		recordsownerid_team: DG.Microsoft.Dynamics.CRM.team;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		ImportFile_ImportData: DG.Microsoft.Dynamics.CRM.importdata[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		importid: DG.Microsoft.Dynamics.CRM.import;
		recordsownerid_systemuser: DG.Microsoft.Dynamics.CRM.systemuser;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		ImportLog_ImportFile: DG.Microsoft.Dynamics.CRM.importlog[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		importmapid: DG.Microsoft.Dynamics.CRM.importmap;
	}
	interface importdata extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_owningteam_value: System.Guid;
		modifiedon: Date;
		haserror: boolean;
		errortype: number;
		_importfileid_value: System.Guid;
		linenumber: number;
		statuscode: number;
		statecode: number;
		_ownerid_value: System.Guid;
		importdataid: System.Guid;
		createdon: Date;
		data: string;
		_owninguser_value: System.Guid;
		recordid: System.Guid;
		_createdonbehalfby_value: System.Guid;
		_owningbusinessunit_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		_modifiedby_value: System.Guid;
		_createdby_value: System.Guid;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		ImportData_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		importfileid: DG.Microsoft.Dynamics.CRM.importfile;
		ImportLog_ImportData: DG.Microsoft.Dynamics.CRM.importlog[];
		ImportData_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface importlog extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_createdby_value: System.Guid;
		linenumber: number;
		_modifiedonbehalfby_value: System.Guid;
		errornumber: number;
		_owninguser_value: System.Guid;
		statecode: number;
		errordescription: string;
		additionalinfo: string;
		_owningbusinessunit_value: System.Guid;
		_modifiedby_value: System.Guid;
		sequencenumber: number;
		headercolumn: string;
		_owningteam_value: System.Guid;
		_importfileid_value: System.Guid;
		logphasecode: number;
		createdon: Date;
		_createdonbehalfby_value: System.Guid;
		modifiedon: Date;
		importlogid: System.Guid;
		_ownerid_value: System.Guid;
		columnvalue: string;
		statuscode: number;
		_importdataid_value: System.Guid;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		ImportLog_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		importdataid: DG.Microsoft.Dynamics.CRM.importdata;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		ImportLog_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		importfileid: DG.Microsoft.Dynamics.CRM.importfile;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface import extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		importid: System.Guid;
		_createdby_value: System.Guid;
		emailaddress: string;
		_ownerid_value: System.Guid;
		modifiedon: Date;
		modecode: number;
		statecode: number;
		_modifiedby_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		name: string;
		_owninguser_value: System.Guid;
		statuscode: number;
		createdon: Date;
		_modifiedonbehalfby_value: System.Guid;
		_owningteam_value: System.Guid;
		sendnotification: boolean;
		sequence: number;
		_owningbusinessunit_value: System.Guid;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		Import_ImportFile: DG.Microsoft.Dynamics.CRM.importfile[];
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		Import_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		Import_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
	}
	interface importmap extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_owningbusinessunit_value: System.Guid;
		source: string;
		sourcetype: number;
		entitiesperfile: number;
		isvalidforimport: boolean;
		targetuseridentifierforsourcecrmuserlink: string;
		sourceuseridentifierforsourcedatasourceuserlink: string;
		importmapid: System.Guid;
		_ownerid_value: System.Guid;
		iswizardcreated: boolean;
		targetentity: number;
		_modifiedby_value: System.Guid;
		_owningteam_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		mapcustomizations: string;
		description: string;
		statuscode: number;
		name: string;
		sourceuseridentifierforsourcecrmuserlink: string;
		statecode: number;
		_createdby_value: System.Guid;
		createdon: Date;
		importmaptype: number;
		_owninguser_value: System.Guid;
		modifiedon: Date;
		_modifiedonbehalfby_value: System.Guid;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		ImportMap_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		ImportEntityMapping_ImportMap: DG.Microsoft.Dynamics.CRM.importentitymapping[];
		ImportMap_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		ImportMap_ImportFile: DG.Microsoft.Dynamics.CRM.importfile[];
	}
	interface importentitymapping extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		dedupe: number;
		processcode: number;
		importentitymappingid: System.Guid;
		sourceentityname: string;
		statuscode: number;
		_modifiedonbehalfby_value: System.Guid;
		targetentityname: string;
		statecode: number;
		_createdonbehalfby_value: System.Guid;
		_createdby_value: System.Guid;
		modifiedon: Date;
		createdon: Date;
		_importmapid_value: System.Guid;
		_modifiedby_value: System.Guid;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		importmapid: DG.Microsoft.Dynamics.CRM.importmap;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface systemform extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		formid: System.Guid;
		istabletenabled: boolean;
		type: number;
		introducedversion: string;
		objecttypecode: string;
		versionnumber: number;
		description: string;
		formidunique: System.Guid;
		version: number;
		_ancestorformid_value: System.Guid;
		formxml: string;
		solutionid: System.Guid;
		isdefault: boolean;
		isdesktopenabled: boolean;
		canbedeleted: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		publishedon: Date;
		isairmerged: boolean;
		formactivationstate: number;
		overwritetime: Date;
		componentstate: number;
		ismanaged: boolean;
		iscustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		name: string;
		uniquename: string;
		_organizationid_value: System.Guid;
		formpresentation: number;
		SystemForm_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		SystemForm_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		ancestorformid: DG.Microsoft.Dynamics.CRM.systemform;
		form_ancestor_form: DG.Microsoft.Dynamics.CRM.systemform[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
	}
	interface userform extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		userformid: System.Guid;
		formxml: string;
		_ownerid_value: System.Guid;
		objecttypecode: string;
		_createdonbehalfby_value: System.Guid;
		_owningteam_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		type: number;
		_createdby_value: System.Guid;
		_modifiedby_value: System.Guid;
		modifiedon: Date;
		istabletenabled: boolean;
		description: string;
		name: string;
		createdon: Date;
		versionnumber: number;
		_owninguser_value: System.Guid;
		_owningbusinessunit_value: System.Guid;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		UserForm_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		UserForm_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
	}
	interface savedquery extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		organizationtaborder: number;
		statecode: number;
		_createdby_value: System.Guid;
		isuserdefined: boolean;
		columnsetxml: string;
		canbedeleted: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		querytype: number;
		conditionalformatting: string;
		_modifiedby_value: System.Guid;
		queryapi: string;
		advancedgroupby: string;
		returnedtypecode: string;
		isquickfindquery: boolean;
		_organizationid_value: System.Guid;
		solutionid: System.Guid;
		name: string;
		iscustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		createdon: Date;
		layoutxml: string;
		fetchxml: string;
		description: string;
		versionnumber: number;
		componentstate: number;
		_modifiedonbehalfby_value: System.Guid;
		savedqueryid: System.Guid;
		overwritetime: Date;
		introducedversion: string;
		iscustom: boolean;
		statuscode: number;
		queryappusage: number;
		savedqueryidunique: System.Guid;
		_createdonbehalfby_value: System.Guid;
		modifiedon: Date;
		isdefault: boolean;
		ismanaged: boolean;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		SavedQuery_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		SavedQuery_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		lk_mobileofflineprofileitem_savedquery: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitem[];
	}
	interface mobileofflineprofileitem extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		recordsownedbymyteam: boolean;
		canbefollowed: boolean;
		viewquery: string;
		entityobjecttypecode: number;
		stageid: System.Guid;
		_createdby_value: System.Guid;
		versionnumber: number;
		getrelatedentityrecords: boolean;
		mobileofflineprofileitemid: System.Guid;
		introducedversion: string;
		isvisibleingrid: boolean;
		_regardingobjectid_value: System.Guid;
		componentstate: number;
		ismanaged: boolean;
		overwritetime: Date;
		selectedentitymetadata: string;
		recorddistributioncriteria: number;
		_modifiedby_value: System.Guid;
		traversedpath: string;
		_modifiedonbehalfby_value: System.Guid;
		recordsownedbymybusinessunit: boolean;
		mobileofflineprofileitemidunique: System.Guid;
		publishedon: Date;
		_createdonbehalfby_value: System.Guid;
		selectedentitytypecode: string;
		relationshipdata: string;
		createdon: Date;
		modifiedon: Date;
		name: string;
		_organizationid_value: System.Guid;
		processid: System.Guid;
		isvalidated: boolean;
		solutionid: System.Guid;
		recordsownedbyme: boolean;
		_profileitemrule_value: System.Guid;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		regardingobjectid: DG.Microsoft.Dynamics.CRM.mobileofflineprofile;
		MobileOfflineProfileItem_MobileOfflineProfileItemAssociation: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitemassociation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		profileitemrule: DG.Microsoft.Dynamics.CRM.savedquery;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface mobileofflineprofile extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		selectedentitymetadata: string;
		mobileofflineprofileid: System.Guid;
		modifiedon: Date;
		ismanaged: boolean;
		stageid: System.Guid;
		solutionid: System.Guid;
		_modifiedby_value: System.Guid;
		name: string;
		processid: System.Guid;
		overwritetime: Date;
		mobileofflineprofileidunique: System.Guid;
		_createdonbehalfby_value: System.Guid;
		componentstate: number;
		description: string;
		createdon: Date;
		_createdby_value: System.Guid;
		_organizationid_value: System.Guid;
		traversedpath: string;
		publishedon: Date;
		isvalidated: boolean;
		versionnumber: number;
		introducedversion: string;
		_modifiedonbehalfby_value: System.Guid;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		DefaultMobileOfflineProfile_Organization: DG.Microsoft.Dynamics.CRM.organization[];
		MobileOfflineProfile_MobileOfflineProfileItem: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitem[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		MobileOfflineProfile_SystemUser: DG.Microsoft.Dynamics.CRM.systemuser[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface mobileofflineprofileitemassociation extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		mobileofflineprofileitemassociationidunique: System.Guid;
		_createdby_value: System.Guid;
		createdon: Date;
		stageid: System.Guid;
		isvalidated: boolean;
		modifiedon: Date;
		versionnumber: number;
		relationshipdisplayname: string;
		_mobileofflineprofileitemid_value: System.Guid;
		relationshipname: string;
		_organizationid_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		relationshipid: System.Guid;
		relationshipdata: string;
		_modifiedonbehalfby_value: System.Guid;
		name: string;
		mobileofflineprofileitemassociationid: System.Guid;
		introducedversion: string;
		selectedrelationshipsschema: number;
		_modifiedby_value: System.Guid;
		processid: System.Guid;
		overwritetime: Date;
		componentstate: number;
		publishedon: Date;
		traversedpath: string;
		solutionid: System.Guid;
		ismanaged: boolean;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		regardingobjectid: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitem;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface userquery extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		modifiedon: Date;
		statecode: number;
		fetchxml: string;
		_modifiedby_value: System.Guid;
		advancedgroupby: string;
		columnsetxml: string;
		_owningteam_value: System.Guid;
		layoutxml: string;
		_createdonbehalfby_value: System.Guid;
		conditionalformatting: string;
		userqueryid: System.Guid;
		querytype: number;
		returnedtypecode: string;
		createdon: Date;
		_owningbusinessunit_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		description: string;
		versionnumber: number;
		_owninguser_value: System.Guid;
		_parentqueryid_value: System.Guid;
		name: string;
		_createdby_value: System.Guid;
		statuscode: number;
		_ownerid_value: System.Guid;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		UserQuery_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		UserQuery_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface bulkdeleteoperation extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		successcount: number;
		_createdby_value: System.Guid;
		_modifiedby_value: System.Guid;
		_owningbusinessunit_value: System.Guid;
		statuscode: number;
		isrecurring: boolean;
		createdon: Date;
		processingqeindex: number;
		failurecount: number;
		nextrun: Date;
		_owninguser_value: System.Guid;
		orderedquerysetxml: string;
		_ownerid_value: System.Guid;
		timezoneruleversionnumber: number;
		modifiedon: Date;
		utcconversiontimezonecode: number;
		name: string;
		bulkdeleteoperationid: System.Guid;
		_asyncoperationid_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		statecode: number;
		_createdonbehalfby_value: System.Guid;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		asyncoperationid: DG.Microsoft.Dynamics.CRM.asyncoperation;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		BulkDeleteOperation_BulkDeleteFailure: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface salesliteratureitem extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_salesliteratureid_value: System.Guid;
		iscustomerviewable: boolean;
		overriddencreatedon: Date;
		_createdonbehalfby_value: System.Guid;
		versionnumber: number;
		_modifiedby_value: System.Guid;
		filetypecode: number;
		modifiedon: Date;
		title: string;
		_createdby_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		organizationid: System.Guid;
		mimetype: string;
		createdon: Date;
		authorname: string;
		salesliteratureitemid: System.Guid;
		abstract: string;
		keywords: string;
		documentbody: string;
		documentbody_binary: number[];
		filename: string;
		attacheddocumenturl: string;
		filesize: number;
		importsequencenumber: number;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		salesliteratureid: DG.Microsoft.Dynamics.CRM.salesliterature;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		SalesLiteratureItem_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		SalesLiteratureItem_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
	}
	interface dg_booking extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_createdonbehalfby_value: System.Guid;
		_owningbusinessunit_value: System.Guid;
		utcconversiontimezonecode: number;
		createdon: Date;
		overriddencreatedon: Date;
		modifiedon: Date;
		statecode: number;
		_ownerid_value: System.Guid;
		importsequencenumber: number;
		_owningteam_value: System.Guid;
		_dg_car_value: System.Guid;
		_modifiedby_value: System.Guid;
		_createdby_value: System.Guid;
		timezoneruleversionnumber: number;
		dg_name: string;
		_modifiedonbehalfby_value: System.Guid;
		statuscode: number;
		_owninguser_value: System.Guid;
		versionnumber: number;
		dg_bookingid: System.Guid;
		_dg_plane_value: System.Guid;
		_dg_hotel_value: System.Guid;
		createdbyname: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfbyname: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedbyname: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfbyname: DG.Microsoft.Dynamics.CRM.systemuser;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		dg_booking_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		dg_booking_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		dg_Plane: DG.Microsoft.Dynamics.CRM.dg_plane;
		dg_Hotel: DG.Microsoft.Dynamics.CRM.dg_hotel;
		dg_Car: DG.Microsoft.Dynamics.CRM.dg_car;
		dg_dg_booking_dg_plane_Booking: DG.Microsoft.Dynamics.CRM.dg_plane[];
		dg_dg_booking_dg_hotel_Booking: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		dg_dg_booking_dg_car_Booking: DG.Microsoft.Dynamics.CRM.dg_car[];
	}
	interface dg_plane extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_dg_country_value: System.Guid;
		_owninguser_value: System.Guid;
		_dg_booking_value: System.Guid;
		timezoneruleversionnumber: number;
		dg_return: Date;
		_createdby_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		_modifiedby_value: System.Guid;
		_owningteam_value: System.Guid;
		utcconversiontimezonecode: number;
		dg_name: string;
		modifiedon: Date;
		_modifiedonbehalfby_value: System.Guid;
		statecode: number;
		createdon: Date;
		statuscode: number;
		overriddencreatedon: Date;
		_owningbusinessunit_value: System.Guid;
		versionnumber: number;
		_ownerid_value: System.Guid;
		importsequencenumber: number;
		dg_planeid: System.Guid;
		dg_outbound: Date;
		createdbyname: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfbyname: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedbyname: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfbyname: DG.Microsoft.Dynamics.CRM.systemuser;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		dg_plane_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		dg_plane_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		dg_dg_plane_dg_booking_Plane: DG.Microsoft.Dynamics.CRM.dg_booking[];
		dg_Booking: DG.Microsoft.Dynamics.CRM.dg_booking;
		dg_Country: DG.Microsoft.Dynamics.CRM.dg_country;
	}
	interface dg_country extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_modifiedonbehalfby_value: System.Guid;
		utcconversiontimezonecode: number;
		statuscode: number;
		importsequencenumber: number;
		_organizationid_value: System.Guid;
		dg_iso3166code: string;
		overriddencreatedon: Date;
		dg_name: string;
		dg_countryid: System.Guid;
		_createdonbehalfby_value: System.Guid;
		createdon: Date;
		statecode: number;
		_modifiedby_value: System.Guid;
		_createdby_value: System.Guid;
		versionnumber: number;
		timezoneruleversionnumber: number;
		modifiedon: Date;
		createdbyname: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfbyname: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedbyname: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfbyname: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		dg_country_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		dg_country_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		dg_dg_country_dg_plane_Country: DG.Microsoft.Dynamics.CRM.dg_plane[];
		dg_dg_country_dg_hotel_Country: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		dg_dg_country_dg_car_Country: DG.Microsoft.Dynamics.CRM.dg_car[];
	}
	interface dg_hotel extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		modifiedon: Date;
		dg_hotelid: System.Guid;
		_owninguser_value: System.Guid;
		overriddencreatedon: Date;
		_createdby_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		utcconversiontimezonecode: number;
		importsequencenumber: number;
		statecode: number;
		dg_arrival: Date;
		_modifiedby_value: System.Guid;
		versionnumber: number;
		dg_departure: Date;
		_createdonbehalfby_value: System.Guid;
		createdon: Date;
		_dg_country_value: System.Guid;
		_owningbusinessunit_value: System.Guid;
		timezoneruleversionnumber: number;
		_dg_booking_value: System.Guid;
		_owningteam_value: System.Guid;
		statuscode: number;
		_ownerid_value: System.Guid;
		dg_name: string;
		createdbyname: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfbyname: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedbyname: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfbyname: DG.Microsoft.Dynamics.CRM.systemuser;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		dg_hotel_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		dg_hotel_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		dg_dg_hotel_dg_booking_Hotel: DG.Microsoft.Dynamics.CRM.dg_booking[];
		dg_Booking: DG.Microsoft.Dynamics.CRM.dg_booking;
		dg_Country: DG.Microsoft.Dynamics.CRM.dg_country;
	}
	interface dg_car extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_modifiedonbehalfby_value: System.Guid;
		createdon: Date;
		statuscode: number;
		dg_name: string;
		importsequencenumber: number;
		_owningbusinessunit_value: System.Guid;
		dg_rentto: Date;
		overriddencreatedon: Date;
		_dg_country_value: System.Guid;
		_ownerid_value: System.Guid;
		_createdby_value: System.Guid;
		statecode: number;
		dg_carid: System.Guid;
		_createdonbehalfby_value: System.Guid;
		timezoneruleversionnumber: number;
		_modifiedby_value: System.Guid;
		dg_rentfrom: Date;
		modifiedon: Date;
		versionnumber: number;
		_owninguser_value: System.Guid;
		_dg_booking_value: System.Guid;
		utcconversiontimezonecode: number;
		_owningteam_value: System.Guid;
		createdbyname: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfbyname: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedbyname: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfbyname: DG.Microsoft.Dynamics.CRM.systemuser;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuser;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		dg_car_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		dg_car_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		dg_dg_car_dg_booking_Car: DG.Microsoft.Dynamics.CRM.dg_booking[];
		dg_Booking: DG.Microsoft.Dynamics.CRM.dg_booking;
		dg_Country: DG.Microsoft.Dynamics.CRM.dg_country;
	}
	interface workflowlog extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		stepname: string;
		_childworkflowinstanceid_value: System.Guid;
		_ownerid_value: System.Guid;
		message: string;
		activityname: string;
		_owningbusinessunit_value: System.Guid;
		interactionactivityresult: string;
		_owninguser_value: System.Guid;
		_createdby_value: System.Guid;
		completedon: Date;
		workflowlogid: System.Guid;
		stagename: string;
		_modifiedby_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		status: number;
		_modifiedonbehalfby_value: System.Guid;
		_owningteam_value: System.Guid;
		description: string;
		_regardingobjectid_value: System.Guid;
		modifiedon: Date;
		createdon: Date;
		_asyncoperationid_value: System.Guid;
		errorcode: number;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		childworkflowinstanceid_asyncoperation: DG.Microsoft.Dynamics.CRM.asyncoperation;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		asyncoperationid_asyncoperation: DG.Microsoft.Dynamics.CRM.asyncoperation;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface importjob extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		importjobid: System.Guid;
		_organizationid_value: System.Guid;
		data: string;
		utcconversiontimezonecode: number;
		solutionname: string;
		completedon: Date;
		timezoneruleversionnumber: number;
		modifiedon: Date;
		name: string;
		startedon: Date;
		progress: number;
		_modifiedonbehalfby_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		_modifiedby_value: System.Guid;
		_createdby_value: System.Guid;
		createdon: Date;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface fieldsecurityprofile extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_modifiedby_value: System.Guid;
		versionnumber: number;
		name: string;
		_modifiedonbehalfby_value: System.Guid;
		overwritetime: Date;
		createdon: Date;
		modifiedon: Date;
		componentstate: number;
		description: string;
		ismanaged: boolean;
		solutionid: System.Guid;
		_organizationid_value: System.Guid;
		fieldsecurityprofileidunique: System.Guid;
		fieldsecurityprofileid: System.Guid;
		_createdby_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		systemuserprofiles_association: DG.Microsoft.Dynamics.CRM.systemuser[];
		lk_fieldpermission_fieldsecurityprofileid: DG.Microsoft.Dynamics.CRM.fieldpermission[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		teamprofiles_association: DG.Microsoft.Dynamics.CRM.team[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface fieldpermission extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		attributelogicalname: string;
		fieldpermissionid: System.Guid;
		cancreate: number;
		componentstate: number;
		overwritetime: Date;
		canupdate: number;
		_organizationid_value: System.Guid;
		fieldpermissionidunique: System.Guid;
		solutionid: System.Guid;
		_fieldsecurityprofileid_value: System.Guid;
		versionnumber: number;
		entityname: string;
		ismanaged: boolean;
		canread: number;
		fieldsecurityprofileid: DG.Microsoft.Dynamics.CRM.fieldsecurityprofile;
	}
	interface dataperformance extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_organizationid_value: System.Guid;
		count: number;
		optimizationstorage: number;
		optimizationavailable: boolean;
		dataperformanceid: System.Guid;
		component: string;
		weight: number;
		entity: string;
		optimizationimpact: number;
		solution: string;
		mintime: number;
		mediantime: number;
		maxtime: number;
		lastoptimizationdate: Date;
		operation: string;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
	}
	interface documenttemplate extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		documenttype: number;
		modifiedon: Date;
		name: string;
		_modifiedonbehalfby_value: System.Guid;
		_createdby_value: System.Guid;
		associatedentitytypecode: string;
		documenttemplateid: System.Guid;
		clientdata: string;
		versionnumber: number;
		description: string;
		createdon: Date;
		_organizationid_value: System.Guid;
		status: boolean;
		content: string;
		_modifiedby_value: System.Guid;
		languagecode: number;
		_createdonbehalfby_value: System.Guid;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface complexcontrol extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		versionnumber: number;
		complexcontrolxml: string;
		complexcontrolid: System.Guid;
		_organizationid_value: System.Guid;
		type: number;
		complexcontrolidunique: System.Guid;
		version: number;
		name: string;
		description: string;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
	}
	interface customcontrol extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		createdon: Date;
		introducedversion: string;
		overwritetime: Date;
		ismanaged: boolean;
		_modifiedby_value: System.Guid;
		customcontrolidunique: System.Guid;
		_createdonbehalfby_value: System.Guid;
		compatibledatatypes: string;
		_modifiedonbehalfby_value: System.Guid;
		customcontrolid: System.Guid;
		version: string;
		solutionid: System.Guid;
		componentstate: number;
		versionnumber: number;
		_createdby_value: System.Guid;
		modifiedon: Date;
		manifest: string;
		_organizationid_value: System.Guid;
		name: string;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		customcontrol_resource_id: DG.Microsoft.Dynamics.CRM.customcontrolresource[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface customcontrolresource extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_modifiedby_value: System.Guid;
		webresourceid: System.Guid;
		version: string;
		name: string;
		modifiedon: Date;
		_createdby_value: System.Guid;
		versionnumber: number;
		customcontrolresourceid: System.Guid;
		_createdonbehalfby_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		createdon: Date;
		_organizationid_value: System.Guid;
		customcontrolid: System.Guid;
		versionrequirement: string;
		customcontrolid_customcontrol: DG.Microsoft.Dynamics.CRM.customcontrol;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
	}
	interface webwizard extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		wizardpageheight: number;
		_modifiedonbehalfby_value: System.Guid;
		versionnumber: number;
		_organizationid_value: System.Guid;
		accessprivileges: string;
		startpagesequencenumber: number;
		webwizardid: System.Guid;
		_modifiedby_value: System.Guid;
		createdon: Date;
		modifiedon: Date;
		_createdonbehalfby_value: System.Guid;
		wizardpagewidth: number;
		_createdby_value: System.Guid;
		isstaticpagesequence: boolean;
		name: string;
		titleresourcestring: string;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface customcontroldefaultconfig extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_createdby_value: System.Guid;
		primaryentitytypecode: string;
		introducedversion: string;
		createdon: Date;
		customcontroldefaultconfigidunique: System.Guid;
		componentstate: number;
		versionnumber: number;
		_organizationid_value: System.Guid;
		overwritetime: Date;
		modifiedon: Date;
		solutionid: System.Guid;
		controldescriptionxml: string;
		_modifiedby_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		ismanaged: boolean;
		_modifiedonbehalfby_value: System.Guid;
		customcontroldefaultconfigid: System.Guid;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface languagelocale extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		region: string;
		languagelocaleid: System.Guid;
		language: string;
		code: string;
		versionnumber: number;
		statecode: number;
		statuscode: number;
		_organizationid_value: System.Guid;
		name: string;
		localeid: number;
		knowledgearticle_languagelocaleid: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		organizationid: DG.Microsoft.Dynamics.CRM.organization;
	}
	interface syncerror extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		errordetail: string;
		_createdby_value: System.Guid;
		createdon: Date;
		_owninguser_value: System.Guid;
		_regardingobjectid_value: System.Guid;
		_modifiedby_value: System.Guid;
		action: string;
		modifiedon: Date;
		errortime: Date;
		syncerrorid: System.Guid;
		name: string;
		errormessage: string;
		_modifiedonbehalfby_value: System.Guid;
		_owningteam_value: System.Guid;
		actiondata: string;
		_createdonbehalfby_value: System.Guid;
		_ownerid_value: System.Guid;
		_owningbusinessunit_value: System.Guid;
		regardingobjectid_systemuser: DG.Microsoft.Dynamics.CRM.systemuser;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		owningteam: DG.Microsoft.Dynamics.CRM.team;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
	}
	interface personaldocumenttemplate extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		personaldocumenttemplateid: System.Guid;
		_owningbusinessunit_value: System.Guid;
		_owningteam_value: System.Guid;
		status: boolean;
		clientdata: string;
		languagecode: number;
		associatedentitytypecode: string;
		_modifiedby_value: System.Guid;
		modifiedon: Date;
		_createdby_value: System.Guid;
		_ownerid_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		description: string;
		_owninguser_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		name: string;
		documenttype: number;
		versionnumber: number;
		createdon: Date;
		content: string;
		ownerid: DG.Microsoft.Dynamics.CRM.principal;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunit;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface teamtemplate extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		description: string;
		objecttypecode: number;
		_modifiedby_value: System.Guid;
		modifiedon: Date;
		teamtemplatename: string;
		teamtemplateid: System.Guid;
		_createdby_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		defaultaccessrightsmask: number;
		createdon: Date;
		issystem: boolean;
		teamtemplate_Teams: DG.Microsoft.Dynamics.CRM.team[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface principalentitymap extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		objecttypecode: string;
		principalid: System.Guid;
		principalentitymapid: System.Guid;
		versionnumber: number;
		principalid_owner: DG.Microsoft.Dynamics.CRM.principal;
	}
	interface listmember extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		createdon: Date;
		_listid_value: System.Guid;
		owningbusinessunit: System.Guid;
		owninguser: System.Guid;
		_createdby_value: System.Guid;
		entitytype: string;
		_createdonbehalfby_value: System.Guid;
		versionnumber: number;
		listmemberid: System.Guid;
		_entityid_value: System.Guid;
		modifiedon: Date;
		_ownerid_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		_modifiedby_value: System.Guid;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface timezonerule extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		standardmonth: number;
		standardhour: number;
		createdon: Date;
		standardsecond: number;
		versionnumber: number;
		timezoneruleid: System.Guid;
		daylightsecond: number;
		bias: number;
		standardyear: number;
		daylightminute: number;
		modifiedon: Date;
		standardday: number;
		standardbias: number;
		daylightmonth: number;
		standardminute: number;
		_createdby_value: System.Guid;
		_timezonedefinitionid_value: System.Guid;
		standarddayofweek: number;
		_modifiedby_value: System.Guid;
		daylighthour: number;
		_createdonbehalfby_value: System.Guid;
		effectivedatetime: Date;
		_organizationid_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		daylightdayofweek: number;
		daylightbias: number;
		timezoneruleversionnumber: number;
		daylightyear: number;
		daylightday: number;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		timezonedefinitionid: DG.Microsoft.Dynamics.CRM.timezonedefinition;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface timezonedefinition extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		userinterfacename: string;
		timezonedefinitionid: System.Guid;
		versionnumber: number;
		_modifiedonbehalfby_value: System.Guid;
		_organizationid_value: System.Guid;
		bias: number;
		_createdonbehalfby_value: System.Guid;
		createdon: Date;
		timezonecode: number;
		_modifiedby_value: System.Guid;
		_createdby_value: System.Guid;
		standardname: string;
		retiredorder: number;
		modifiedon: Date;
		daylightname: string;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		lk_timezonelocalizedname_timezonedefinitionid: DG.Microsoft.Dynamics.CRM.timezonelocalizedname[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		lk_timezonerule_timezonedefinitionid: DG.Microsoft.Dynamics.CRM.timezonerule[];
	}
	interface timezonelocalizedname extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		userinterfacename: string;
		timezonelocalizednameid: System.Guid;
		createdon: Date;
		standardname: string;
		_timezonedefinitionid_value: System.Guid;
		_createdonbehalfby_value: System.Guid;
		_createdby_value: System.Guid;
		_modifiedonbehalfby_value: System.Guid;
		modifiedon: Date;
		_modifiedby_value: System.Guid;
		versionnumber: number;
		_organizationid_value: System.Guid;
		daylightname: string;
		cultureid: number;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		timezonedefinitionid: DG.Microsoft.Dynamics.CRM.timezonedefinition;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface plugintracelog extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		performanceconstructorduration: number;
		operationtype: number;
		primaryentity: string;
		secureconfiguration: string;
		configuration: string;
		exceptiondetails: string;
		plugintracelogid: System.Guid;
		pluginstepid: System.Guid;
		mode: number;
		messageblock: string;
		_createdby_value: System.Guid;
		typename: string;
		createdon: Date;
		_createdonbehalfby_value: System.Guid;
		profile: string;
		organizationid: System.Guid;
		performanceconstructorstarttime: Date;
		performanceexecutionstarttime: Date;
		depth: number;
		issystemcreated: boolean;
		requestid: System.Guid;
		correlationid: System.Guid;
		persistencekey: System.Guid;
		performanceexecutionduration: number;
		messagename: string;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface competitoraddress extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		stateorprovince: string;
		utcoffset: number;
		composite: string;
		upszone: string;
		addresstypecode: number;
		_modifiedonbehalfby_value: System.Guid;
		modifiedon: Date;
		postalcode: string;
		latitude: number;
		versionnumber: number;
		telephone1: string;
		name: string;
		telephone2: string;
		county: string;
		addressnumber: number;
		city: string;
		longitude: number;
		telephone3: string;
		country: string;
		_createdby_value: System.Guid;
		createdon: Date;
		fax: string;
		_parentid_value: System.Guid;
		line1: string;
		line3: string;
		line2: string;
		_createdonbehalfby_value: System.Guid;
		competitoraddressid: System.Guid;
		_modifiedby_value: System.Guid;
		shippingmethodcode: number;
		postofficebox: string;
		createdby: DG.Microsoft.Dynamics.CRM.systemuser;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuser;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
		parentid: DG.Microsoft.Dynamics.CRM.competitor;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser;
	}
	interface principalSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.principal> {
		owner_exchangesyncidmapping: DG.Microsoft.Dynamics.CRM.exchangesyncidmapping[];
		owner_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		owner_sharepointsite: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		owner_sharepointdocumentlocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		owner_entitlement: DG.Microsoft.Dynamics.CRM.entitlement[];
		owner_goal: DG.Microsoft.Dynamics.CRM.goal[];
		owner_mailbox: DG.Microsoft.Dynamics.CRM.mailbox[];
		owner_personaldocumenttemplates: DG.Microsoft.Dynamics.CRM.personaldocumenttemplate[];
		owner_accounts: DG.Microsoft.Dynamics.CRM.account[];
		owner_goalrollupquery: DG.Microsoft.Dynamics.CRM.goalrollupquery[];
		owner_salesorders: DG.Microsoft.Dynamics.CRM.salesorder[];
		owner_postfollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		owner_workflows: DG.Microsoft.Dynamics.CRM.workflow[];
		owner_lists: DG.Microsoft.Dynamics.CRM.list[];
		owner_userquerys: DG.Microsoft.Dynamics.CRM.userquery[];
		owner_importmaps: DG.Microsoft.Dynamics.CRM.importmap[];
		owner_mailmergetemplates: DG.Microsoft.Dynamics.CRM.mailmergetemplate[];
		owner_opportunitys: DG.Microsoft.Dynamics.CRM.opportunity[];
		owner_duplicaterules: DG.Microsoft.Dynamics.CRM.duplicaterule[];
		owner_reports: DG.Microsoft.Dynamics.CRM.report[];
		owner_activitypointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		owner_principalentitymap: DG.Microsoft.Dynamics.CRM.principalentitymap[];
		owner_importdatas: DG.Microsoft.Dynamics.CRM.importdata[];
		owner_queues: DG.Microsoft.Dynamics.CRM.queue[];
		owner_userqueryvisualizations: DG.Microsoft.Dynamics.CRM.userqueryvisualization[];
		owner_campaigns: DG.Microsoft.Dynamics.CRM.campaign[];
		owner_quotes: DG.Microsoft.Dynamics.CRM.quote[];
		owner_invoices: DG.Microsoft.Dynamics.CRM.invoice[];
		owner_annotations: DG.Microsoft.Dynamics.CRM.annotation[];
		owner_userform: DG.Microsoft.Dynamics.CRM.userform[];
		owner_asyncoperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		owner_SocialProfile: DG.Microsoft.Dynamics.CRM.socialprofile[];
		owner_slas: DG.Microsoft.Dynamics.CRM.sla[];
		slakpiinstance_owner: DG.Microsoft.Dynamics.CRM.slakpiinstance[];
		owner_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofile[];
		owner_incidents: DG.Microsoft.Dynamics.CRM.incident[];
		owner_templates: DG.Microsoft.Dynamics.CRM.template[];
		owner_contacts: DG.Microsoft.Dynamics.CRM.contact[];
		owner_imports: DG.Microsoft.Dynamics.CRM.import[];
		owner_leads: DG.Microsoft.Dynamics.CRM.lead[];
		owner_connections: DG.Microsoft.Dynamics.CRM.connection[];
		owner_importfiles: DG.Microsoft.Dynamics.CRM.importfile[];
		owner_importlogs: DG.Microsoft.Dynamics.CRM.importlog[];
		owner_SyncError: DG.Microsoft.Dynamics.CRM.syncerror[];
		owner_contracts: DG.Microsoft.Dynamics.CRM.contract[];
		owner_dg_booking: DG.Microsoft.Dynamics.CRM.dg_booking[];
		owner_dg_plane: DG.Microsoft.Dynamics.CRM.dg_plane[];
		owner_dg_hotel: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		owner_dg_car: DG.Microsoft.Dynamics.CRM.dg_car[];
	}
	interface systemuserSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.systemuser> {
		systemuserroles_association: DG.Microsoft.Dynamics.CRM.role[];
		teammembership_association: DG.Microsoft.Dynamics.CRM.team[];
		user_exchangesyncidmapping: DG.Microsoft.Dynamics.CRM.exchangesyncidmapping[];
		lk_theme_createdby: DG.Microsoft.Dynamics.CRM.theme[];
		lk_theme_createdonbehalfby: DG.Microsoft.Dynamics.CRM.theme[];
		lk_theme_modifiedby: DG.Microsoft.Dynamics.CRM.theme[];
		lk_theme_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.theme[];
		lk_ProductSubstitute_createdby: DG.Microsoft.Dynamics.CRM.productsubstitute[];
		lk_ProductSubstitute_createdonbehalfby: DG.Microsoft.Dynamics.CRM.productsubstitute[];
		lk_ProductSubstitute_modifiedby: DG.Microsoft.Dynamics.CRM.productsubstitute[];
		lk_ProductSubstitute_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.productsubstitute[];
		lk_knowledgearticle_createdby: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		lk_knowledgearticle_createdonbehalfby: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		lk_knowledgearticle_modifiedby: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		lk_knowledgearticle_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		user_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		user_sharepointsite: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		user_sharepointdocumentlocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		lk_entitlement_createdby: DG.Microsoft.Dynamics.CRM.entitlement[];
		lk_entitlement_createdonbehalfby: DG.Microsoft.Dynamics.CRM.entitlement[];
		lk_entitlement_modifiedby: DG.Microsoft.Dynamics.CRM.entitlement[];
		lk_entitlement_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.entitlement[];
		user_entitlement: DG.Microsoft.Dynamics.CRM.entitlement[];
		lk_entitlementchannel_createdby: DG.Microsoft.Dynamics.CRM.entitlementchannel[];
		lk_entitlementchannel_createdonbehalfby: DG.Microsoft.Dynamics.CRM.entitlementchannel[];
		lk_entitlementchannel_modifiedby: DG.Microsoft.Dynamics.CRM.entitlementchannel[];
		lk_entitlementchannel_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.entitlementchannel[];
		lk_entitlementtemplate_createdby: DG.Microsoft.Dynamics.CRM.entitlementtemplate[];
		lk_entitlementtemplate_createdonbehalfby: DG.Microsoft.Dynamics.CRM.entitlementtemplate[];
		lk_entitlementtemplate_modifiedby: DG.Microsoft.Dynamics.CRM.entitlementtemplate[];
		lk_entitlementtemplate_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.entitlementtemplate[];
		lk_goal_createdby: DG.Microsoft.Dynamics.CRM.goal[];
		lk_goal_createdonbehalfby: DG.Microsoft.Dynamics.CRM.goal[];
		lk_goal_modifiedby: DG.Microsoft.Dynamics.CRM.goal[];
		lk_goal_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.goal[];
		user_goal: DG.Microsoft.Dynamics.CRM.goal[];
		user_goal_goalowner: DG.Microsoft.Dynamics.CRM.goal[];
		lk_metric_createdby: DG.Microsoft.Dynamics.CRM.metric[];
		lk_metric_createdonbehalfby: DG.Microsoft.Dynamics.CRM.metric[];
		lk_metric_modifiedby: DG.Microsoft.Dynamics.CRM.metric[];
		lk_metric_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.metric[];
		lk_goalrollupquery_createdby: DG.Microsoft.Dynamics.CRM.goalrollupquery[];
		lk_goalrollupquery_createdonbehalfby: DG.Microsoft.Dynamics.CRM.goalrollupquery[];
		lk_goalrollupquery_modifiedby: DG.Microsoft.Dynamics.CRM.goalrollupquery[];
		lk_goalrollupquery_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.goalrollupquery[];
		lk_emailserverprofile_createdonbehalfby: DG.Microsoft.Dynamics.CRM.emailserverprofile[];
		lk_emailserverprofile_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.emailserverprofile[];
		lk_mailbox_createdby: DG.Microsoft.Dynamics.CRM.mailbox[];
		lk_mailbox_createdonbehalfby: DG.Microsoft.Dynamics.CRM.mailbox[];
		lk_mailbox_modifiedby: DG.Microsoft.Dynamics.CRM.mailbox[];
		lk_mailbox_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.mailbox[];
		user_mailbox: DG.Microsoft.Dynamics.CRM.mailbox[];
		mailbox_regarding_systemuser: DG.Microsoft.Dynamics.CRM.mailbox[];
		defaultmailbox: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		lk_post_createdby: DG.Microsoft.Dynamics.CRM.post[];
		lk_post_createdonbehalfby: DG.Microsoft.Dynamics.CRM.post[];
		lk_post_modifiedby: DG.Microsoft.Dynamics.CRM.post[];
		lk_post_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.post[];
		lk_position_createdby: DG.Microsoft.Dynamics.CRM.position[];
		lk_position_createdonbehalfby: DG.Microsoft.Dynamics.CRM.position[];
		lk_position_modifiedby: DG.Microsoft.Dynamics.CRM.position[];
		lk_position_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.position[];
		positionid: DG.Microsoft.Dynamics.CRM.positionSingle;
		lk_solution_createdby: DG.Microsoft.Dynamics.CRM.solution[];
		lk_solution_modifiedby: DG.Microsoft.Dynamics.CRM.solution[];
		lk_publisher_createdby: DG.Microsoft.Dynamics.CRM.publisher[];
		lk_publisher_modifiedby: DG.Microsoft.Dynamics.CRM.publisher[];
		lk_officegraphdocument_createdonbehalfby: DG.Microsoft.Dynamics.CRM.officegraphdocument[];
		lk_officegraphdocument_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.officegraphdocument[];
		lk_similarityrule_createdonbehalfby: DG.Microsoft.Dynamics.CRM.similarityrule[];
		lk_similarityrule_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.similarityrule[];
		lk_KnowledgeBaseRecord_createdby: DG.Microsoft.Dynamics.CRM.knowledgebaserecord[];
		lk_KnowledgeBaseRecord_createdonbehalfby: DG.Microsoft.Dynamics.CRM.knowledgebaserecord[];
		lk_KnowledgeBaseRecord_modifiedby: DG.Microsoft.Dynamics.CRM.knowledgebaserecord[];
		lk_KnowledgeBaseRecord_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.knowledgebaserecord[];
		lk_monthlyfiscalcalendar_modifiedby: DG.Microsoft.Dynamics.CRM.monthlyfiscalcalendar[];
		lk_quoteclose_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.quoteclose[];
		lk_slakpiinstancebase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.slakpiinstance[];
		lk_mobileofflineprofileitemassocaition_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitemassociation[];
		lk_userqueryvisualizationbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.userqueryvisualization[];
		lk_equipment_modifiedby: DG.Microsoft.Dynamics.CRM.equipment[];
		SystemUser_Campaigns: DG.Microsoft.Dynamics.CRM.campaign[];
		lk_quotedetailbase_createdby: DG.Microsoft.Dynamics.CRM.quotedetail[];
		SystemUser_SyncError: DG.Microsoft.Dynamics.CRM.syncerror[];
		SystemUser_ImportData: DG.Microsoft.Dynamics.CRM.importdata[];
		lk_salesorderbase_modifiedby: DG.Microsoft.Dynamics.CRM.salesorder[];
		lk_fieldsecurityprofile_createdonbehalfby: DG.Microsoft.Dynamics.CRM.fieldsecurityprofile[];
		lk_importbase_createdby: DG.Microsoft.Dynamics.CRM.import[];
		lk_slaitembase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.slaitem[];
		lk_invoicedetailbase_modifiedby: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		createdby_sdkmessage: DG.Microsoft.Dynamics.CRM.sdkmessage[];
		lk_knowledgearticleincident_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.knowledgearticleincident[];
		lk_duplicaterule_createdonbehalfby: DG.Microsoft.Dynamics.CRM.duplicaterule[];
		system_user_quotes: DG.Microsoft.Dynamics.CRM.quote[];
		lk_territory_createdonbehalfby: DG.Microsoft.Dynamics.CRM.territory[];
		lk_discounttype_createdonbehalfby: DG.Microsoft.Dynamics.CRM.discounttype[];
		lk_knowledgearticleincident_createdonbehalfby: DG.Microsoft.Dynamics.CRM.knowledgearticleincident[];
		lk_monthlyfiscalcalendar_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.monthlyfiscalcalendar[];
		lk_incidentbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.incident[];
		lk_contracttemplatebase_createdby: DG.Microsoft.Dynamics.CRM.contracttemplate[];
		lk_kbarticletemplatebase_createdby: DG.Microsoft.Dynamics.CRM.kbarticletemplate[];
		lk_knowledgesearchmodel_createdby: DG.Microsoft.Dynamics.CRM.knowledgesearchmodel[];
		lk_savedquerybase_modifiedby: DG.Microsoft.Dynamics.CRM.savedquery[];
		lk_teamtemplate_createdby: DG.Microsoft.Dynamics.CRM.teamtemplate[];
		lk_accountbase_createdby: DG.Microsoft.Dynamics.CRM.account[];
		lk_salesliteratureitembase_createdby: DG.Microsoft.Dynamics.CRM.salesliteratureitem[];
		lk_invoicedetail_createdonbehalfby: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		lk_opportunityproductbase_createdby: DG.Microsoft.Dynamics.CRM.opportunityproduct[];
		lk_discounttypebase_createdby: DG.Microsoft.Dynamics.CRM.discounttype[];
		createdby_pluginassembly: DG.Microsoft.Dynamics.CRM.pluginassembly[];
		lk_kbarticle_createdonbehalfby: DG.Microsoft.Dynamics.CRM.kbarticle[];
		user_userform: DG.Microsoft.Dynamics.CRM.userform[];
		lk_organization_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.organization[];
		lk_listmember_createdonbehalfby: DG.Microsoft.Dynamics.CRM.listmember[];
		lk_knowledgesearchmodel_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.knowledgesearchmodel[];
		system_user_service_contracts: DG.Microsoft.Dynamics.CRM.contract[];
		lk_solutionbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.solution[];
		lk_BulkOperation_createdby: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		lk_timezonerule_createdby: DG.Microsoft.Dynamics.CRM.timezonerule[];
		lk_productpricelevel_createdonbehalfby: DG.Microsoft.Dynamics.CRM.productpricelevel[];
		modifiedby_connection: DG.Microsoft.Dynamics.CRM.connection[];
		systemuser_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		lk_report_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.report[];
		lk_tracelog_createdby: DG.Microsoft.Dynamics.CRM.tracelog[];
		lk_contractdetail_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.contractdetail[];
		lk_calendar_createdonbehalfby: DG.Microsoft.Dynamics.CRM.calendar[];
		lk_activitypointer_createdby: DG.Microsoft.Dynamics.CRM.activitypointer[];
		lk_queueitembase_createdby: DG.Microsoft.Dynamics.CRM.queueitem[];
		lk_annotationbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.annotation[];
		lk_lead_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.lead[];
		lk_slakpiinstancebase_createdby: DG.Microsoft.Dynamics.CRM.slakpiinstance[];
		lk_constraintbasedgroup_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.constraintbasedgroup[];
		lk_invoicedetail_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		lk_role_createdonbehalfby: DG.Microsoft.Dynamics.CRM.role[];
		lk_orderclose_createdonbehalfby: DG.Microsoft.Dynamics.CRM.orderclose[];
		lk_socialactivitybase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.socialactivity[];
		user_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		lk_customeraddress_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.customeraddress[];
		lk_businessunitbase_modifiedby: DG.Microsoft.Dynamics.CRM.businessunit[];
		modifiedby_plugintype: DG.Microsoft.Dynamics.CRM.plugintype[];
		lk_contracttemplate_createdonbehalfby: DG.Microsoft.Dynamics.CRM.contracttemplate[];
		lk_timezonelocalizedname_createdonbehalfby: DG.Microsoft.Dynamics.CRM.timezonelocalizedname[];
		lk_sdkmessageprocessingstepimage_createdonbehalfby: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepimage[];
		createdby_connection: DG.Microsoft.Dynamics.CRM.connection[];
		lk_savedqueryvisualizationbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.savedqueryvisualization[];
		lk_importdatabase_modifiedby: DG.Microsoft.Dynamics.CRM.importdata[];
		lk_recommendationmodel_createdonbehalfby: DG.Microsoft.Dynamics.CRM.recommendationmodel[];
		workflow_createdonbehalfby: DG.Microsoft.Dynamics.CRM.workflow[];
		lk_slabase_createdby: DG.Microsoft.Dynamics.CRM.sla[];
		systemuser_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		modifiedby_connection_role: DG.Microsoft.Dynamics.CRM.connectionrole[];
		lk_competitorbase_modifiedby: DG.Microsoft.Dynamics.CRM.competitor[];
		lk_serviceendpointbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.serviceendpoint[];
		lk_invoicebase_modifiedby: DG.Microsoft.Dynamics.CRM.invoice[];
		modifiedby_sdkmessageprocessingstepimage: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepimage[];
		lk_importentitymapping_modifiedby: DG.Microsoft.Dynamics.CRM.importentitymapping[];
		lk_competitorbase_createdby: DG.Microsoft.Dynamics.CRM.competitor[];
		lk_slabase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.sla[];
		lk_sitebase_createdby: DG.Microsoft.Dynamics.CRM.site[];
		lk_accountbase_modifiedby: DG.Microsoft.Dynamics.CRM.account[];
		lk_PostFollow_createdby: DG.Microsoft.Dynamics.CRM.postfollow[];
		systemuser_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		systemuser_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		lk_postcomment_createdby: DG.Microsoft.Dynamics.CRM.postcomment[];
		user_owner_postfollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		lk_postfollow_createdonbehalfby: DG.Microsoft.Dynamics.CRM.postfollow[];
		lk_postcomment_createdonbehalfby: DG.Microsoft.Dynamics.CRM.postcomment[];
		lk_postlike_createdonbehalfby: DG.Microsoft.Dynamics.CRM.postlike[];
		lk_postlike_createdby: DG.Microsoft.Dynamics.CRM.postlike[];
		lk_calendar_modifiedby: DG.Microsoft.Dynamics.CRM.calendar[];
		lk_sharepointdocumentlocationbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		lk_quarterlyfiscalcalendar_createdonbehalfby: DG.Microsoft.Dynamics.CRM.quarterlyfiscalcalendar[];
		lk_timezonedefinition_modifiedby: DG.Microsoft.Dynamics.CRM.timezonedefinition[];
		lk_site_createdonbehalfby: DG.Microsoft.Dynamics.CRM.site[];
		lk_salesorderdetail_createdonbehalfby: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		lk_templatebase_createdby: DG.Microsoft.Dynamics.CRM.template[];
		lk_plugintracelogbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.plugintracelog[];
		lk_workflowlog_createdonbehalfby: DG.Microsoft.Dynamics.CRM.workflowlog[];
		lk_userqueryvisualizationbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.userqueryvisualization[];
		lk_bulkdeleteoperationbase_modifiedby: DG.Microsoft.Dynamics.CRM.bulkdeleteoperation[];
		lk_entitlementtemplatechannel_createdby: DG.Microsoft.Dynamics.CRM.entitlementtemplatechannel[];
		lk_sharepointsitebase_modifiedby: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		lk_report_createdonbehalfby: DG.Microsoft.Dynamics.CRM.report[];
		lk_competitoraddressbase_createdby: DG.Microsoft.Dynamics.CRM.competitoraddress[];
		createdby_plugintracelog: DG.Microsoft.Dynamics.CRM.plugintracelog[];
		lk_monthlyfiscalcalendar_salespersonid: DG.Microsoft.Dynamics.CRM.monthlyfiscalcalendar[];
		lk_tracelog_modifiedby: DG.Microsoft.Dynamics.CRM.tracelog[];
		lk_duplicaterule_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.duplicaterule[];
		lk_resourcespec_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.resourcespec[];
		lk_savedquery_createdonbehalfby: DG.Microsoft.Dynamics.CRM.savedquery[];
		lk_mobileofflineprofileitemassocaition_modifiedby: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitemassociation[];
		lk_queueitembase_modifiedby: DG.Microsoft.Dynamics.CRM.queueitem[];
		lk_rolebase_modifiedby: DG.Microsoft.Dynamics.CRM.role[];
		lk_knowledgesearchmodel_createdonbehalfby: DG.Microsoft.Dynamics.CRM.knowledgesearchmodel[];
		lk_sdkmessageprocessingstep_createdonbehalfby: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		lk_uombase_createdby: DG.Microsoft.Dynamics.CRM.uom[];
		lk_recommendationmodelversion_createdby: DG.Microsoft.Dynamics.CRM.recommendationmodelversion[];
		system_user_invoicedetail: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		lk_importjobbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.importjob[];
		createdby_sdkmessageprocessingstepimage: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepimage[];
		system_user_orders: DG.Microsoft.Dynamics.CRM.salesorder[];
		lk_businessunit_createdonbehalfby: DG.Microsoft.Dynamics.CRM.businessunit[];
		lk_customcontrol_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.customcontrol[];
		lk_recommendationmodelversion_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.recommendationmodelversion[];
		createdby_serviceendpoint: DG.Microsoft.Dynamics.CRM.serviceendpoint[];
		lk_socialactivitybase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.socialactivity[];
		lk_discounttype_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.discounttype[];
		lk_letter_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.letter[];
		lk_timezonerule_createdonbehalfby: DG.Microsoft.Dynamics.CRM.timezonerule[];
		lk_personaldocumenttemplatebase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.personaldocumenttemplate[];
		lk_uomschedulebase_modifiedby: DG.Microsoft.Dynamics.CRM.uomschedule[];
		lk_teamtemplate_createdonbehalfby: DG.Microsoft.Dynamics.CRM.teamtemplate[];
		SystemUser_ImportLogs: DG.Microsoft.Dynamics.CRM.importlog[];
		lk_recommendationmodel_modifiedby: DG.Microsoft.Dynamics.CRM.recommendationmodel[];
		lk_teamtemplate_modifiedby: DG.Microsoft.Dynamics.CRM.teamtemplate[];
		lk_incidentresolution_createdonbehalfby: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		lk_timezonedefinition_createdonbehalfby: DG.Microsoft.Dynamics.CRM.timezonedefinition[];
		lk_reportcategory_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.reportcategory[];
		webresource_modifiedby: DG.Microsoft.Dynamics.CRM.webresource[];
		lk_reportcategorybase_createdby: DG.Microsoft.Dynamics.CRM.reportcategory[];
		lk_serviceappointment_createdonbehalfby: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		lk_entitlementtemplatechannel_modifiedby: DG.Microsoft.Dynamics.CRM.entitlementtemplatechannel[];
		lk_userquery_modifiedby: DG.Microsoft.Dynamics.CRM.userquery[];
		lk_list_createdonbehalfby: DG.Microsoft.Dynamics.CRM.list[];
		lk_customcontrol_createdby: DG.Microsoft.Dynamics.CRM.customcontrol[];
		lk_quote_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.quote[];
		lk_resourcespec_createdonbehalfby: DG.Microsoft.Dynamics.CRM.resourcespec[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		lk_systemuser_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser[];
		lk_importlogbase_createdby: DG.Microsoft.Dynamics.CRM.importlog[];
		lk_azureserviceconnection_modifiedby: DG.Microsoft.Dynamics.CRM.azureserviceconnection[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		lk_systemuserbase_createdby: DG.Microsoft.Dynamics.CRM.systemuser[];
		lk_sharepointdocumentlocationbase_modifiedby: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		lk_queueitembase_workerid: DG.Microsoft.Dynamics.CRM.queueitem[];
		lk_solutioncomponentbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.solutioncomponent[];
		lk_productbase_createdby: DG.Microsoft.Dynamics.CRM.product[];
		systemuserprofiles_association: DG.Microsoft.Dynamics.CRM.fieldsecurityprofile[];
		lk_semiannualfiscalcalendar_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.semiannualfiscalcalendar[];
		lk_publisherbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.publisher[];
		lk_constraintbasedgroup_createdby: DG.Microsoft.Dynamics.CRM.constraintbasedgroup[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		lk_importlog_createdonbehalfby: DG.Microsoft.Dynamics.CRM.importlog[];
		lk_importdata_createdonbehalfby: DG.Microsoft.Dynamics.CRM.importdata[];
		lk_competitoraddressbase_modifiedby: DG.Microsoft.Dynamics.CRM.competitoraddress[];
		system_user_territories: DG.Microsoft.Dynamics.CRM.territory[];
		lk_azureserviceconnection_createdonbehalfby: DG.Microsoft.Dynamics.CRM.azureserviceconnection[];
		lk_letter_createdonbehalfby: DG.Microsoft.Dynamics.CRM.letter[];
		opportunity_owning_user: DG.Microsoft.Dynamics.CRM.opportunity[];
		lk_campaignactivity_createdby: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		modifiedby_serviceendpoint: DG.Microsoft.Dynamics.CRM.serviceendpoint[];
		lk_listmember_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.listmember[];
		lk_annualfiscalcalendar_modifiedby: DG.Microsoft.Dynamics.CRM.annualfiscalcalendar[];
		lk_importmap_createdonbehalfby: DG.Microsoft.Dynamics.CRM.importmap[];
		lk_knowledgearticleincident_createdby: DG.Microsoft.Dynamics.CRM.knowledgearticleincident[];
		lk_knowledgearticleviews_createdonbehalfby: DG.Microsoft.Dynamics.CRM.knowledgearticleviews[];
		lk_mobileofflineprofileitem_createdonbehalfby: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitem[];
		lk_annotationbase_createdby: DG.Microsoft.Dynamics.CRM.annotation[];
		lk_listmember_modifiedby: DG.Microsoft.Dynamics.CRM.listmember[];
		lk_plugintype_createdonbehalfby: DG.Microsoft.Dynamics.CRM.plugintype[];
		lk_lead_createdonbehalfby: DG.Microsoft.Dynamics.CRM.lead[];
		lk_campaign_createdby: DG.Microsoft.Dynamics.CRM.campaign[];
		lk_pricelevel_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.pricelevel[];
		createdby_connection_role: DG.Microsoft.Dynamics.CRM.connectionrole[];
		lk_customeraddressbase_createdby: DG.Microsoft.Dynamics.CRM.customeraddress[];
		lk_timezonedefinition_createdby: DG.Microsoft.Dynamics.CRM.timezonedefinition[];
		lk_documenttemplatebase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.documenttemplate[];
		lk_contractdetail_createdonbehalfby: DG.Microsoft.Dynamics.CRM.contractdetail[];
		lk_competitoraddress_createdonbehalfby: DG.Microsoft.Dynamics.CRM.competitoraddress[];
		lk_recurringappointmentmaster_createdonbehalfby: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		lk_personaldocumenttemplatebase_createdby: DG.Microsoft.Dynamics.CRM.personaldocumenttemplate[];
		lk_semiannualfiscalcalendar_createdonbehalfby: DG.Microsoft.Dynamics.CRM.semiannualfiscalcalendar[];
		SystemUser_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		lk_recurringappointmentmaster_createdby: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		lk_sitebase_modifiedby: DG.Microsoft.Dynamics.CRM.site[];
		system_user_service_appointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		lk_sharepointsitebase_createdby: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		lk_phonecall_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.phonecall[];
		lk_kbarticlecommentbase_createdby: DG.Microsoft.Dynamics.CRM.kbarticlecomment[];
		lk_quarterlyfiscalcalendar_modifiedby: DG.Microsoft.Dynamics.CRM.quarterlyfiscalcalendar[];
		lk_solutioncomponentbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.solutioncomponent[];
		lk_role_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.role[];
		lk_territorybase_createdby: DG.Microsoft.Dynamics.CRM.territory[];
		lk_duplicaterulebase_modifiedby: DG.Microsoft.Dynamics.CRM.duplicaterule[];
		lk_subjectbase_createdby: DG.Microsoft.Dynamics.CRM.subject[];
		lk_contact_createdonbehalfby: DG.Microsoft.Dynamics.CRM.contact[];
		lk_semiannualfiscalcalendar_createdby: DG.Microsoft.Dynamics.CRM.semiannualfiscalcalendar[];
		lk_SocialProfile_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.socialprofile[];
		lk_quoteclose_createdonbehalfby: DG.Microsoft.Dynamics.CRM.quoteclose[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		lk_systemuserbase_modifiedby: DG.Microsoft.Dynamics.CRM.systemuser[];
		lk_knowledgearticleviews_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.knowledgearticleviews[];
		systemuser_resources: DG.Microsoft.Dynamics.CRM.resource[];
		lk_uomschedulebase_createdby: DG.Microsoft.Dynamics.CRM.uomschedule[];
		lk_territory_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.territory[];
		lk_importentitymapping_createdby: DG.Microsoft.Dynamics.CRM.importentitymapping[];
		lk_kbarticlecomment_createdonbehalfby: DG.Microsoft.Dynamics.CRM.kbarticlecomment[];
		lk_team_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.team[];
		lk_pricelevel_createdonbehalfby: DG.Microsoft.Dynamics.CRM.pricelevel[];
		lk_teamtemplate_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.teamtemplate[];
		lk_fax_createdby: DG.Microsoft.Dynamics.CRM.fax[];
		lk_publisheraddressbase_createdby: DG.Microsoft.Dynamics.CRM.publisheraddress[];
		lk_topicmodelexecutionhistory_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.topicmodelexecutionhistory[];
		lk_templatebase_modifiedby: DG.Microsoft.Dynamics.CRM.template[];
		lk_opportunityproductbase_modifiedby: DG.Microsoft.Dynamics.CRM.opportunityproduct[];
		user_activity: DG.Microsoft.Dynamics.CRM.activitypointer[];
		lk_MobileOfflineProfile_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.mobileofflineprofile[];
		lk_fax_createdonbehalfby: DG.Microsoft.Dynamics.CRM.fax[];
		SystemUser_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		organizationid_organization: DG.Microsoft.Dynamics.CRM.organizationSingle;
		lk_customeraddress_createdonbehalfby: DG.Microsoft.Dynamics.CRM.customeraddress[];
		lk_calendarrule_modifiedby: DG.Microsoft.Dynamics.CRM.calendarrule[];
		system_user_accounts: DG.Microsoft.Dynamics.CRM.account[];
		lk_savedqueryvisualizationbase_createdby: DG.Microsoft.Dynamics.CRM.savedqueryvisualization[];
		lk_salesorder_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.salesorder[];
		lk_connectionbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.connection[];
		impersonatinguserid_sdkmessageprocessingstep: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		lk_userquery_createdonbehalfby: DG.Microsoft.Dynamics.CRM.userquery[];
		lk_opportunity_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.opportunity[];
		lk_accountbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.account[];
		lk_publisheraddressbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.publisheraddress[];
		lk_userqueryvisualization_modifiedby: DG.Microsoft.Dynamics.CRM.userqueryvisualization[];
		lk_connectionrolebase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.connectionrole[];
		lk_calendar_createdby: DG.Microsoft.Dynamics.CRM.calendar[];
		user_list: DG.Microsoft.Dynamics.CRM.list[];
		lead_owning_user: DG.Microsoft.Dynamics.CRM.lead[];
		lk_territorybase_modifiedby: DG.Microsoft.Dynamics.CRM.territory[];
		annotation_owning_user: DG.Microsoft.Dynamics.CRM.annotation[];
		lk_campaign_modifiedby: DG.Microsoft.Dynamics.CRM.campaign[];
		calendarid: DG.Microsoft.Dynamics.CRM.calendarSingle;
		lk_tracelog_createdonbehalfby: DG.Microsoft.Dynamics.CRM.tracelog[];
		lk_asyncoperation_createdby: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		lk_service_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.service[];
		SystemUser_Imports: DG.Microsoft.Dynamics.CRM.import[];
		system_user_invoices: DG.Microsoft.Dynamics.CRM.invoice[];
		lk_transactioncurrency_createdonbehalfby: DG.Microsoft.Dynamics.CRM.transactioncurrency[];
		system_user_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		lk_emailserverprofile_createdby: DG.Microsoft.Dynamics.CRM.emailserverprofile[];
		lk_slaitembase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.slaitem[];
		lk_businessunitnewsarticlebase_createdby: DG.Microsoft.Dynamics.CRM.businessunitnewsarticle[];
		lk_pluginassembly_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.pluginassembly[];
		lk_topicmodel_createdby: DG.Microsoft.Dynamics.CRM.topicmodel[];
		lk_contact_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.contact[];
		lk_list_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.list[];
		lk_subjectbase_modifiedby: DG.Microsoft.Dynamics.CRM.subject[];
		lk_knowledgesearchmodel_modifiedby: DG.Microsoft.Dynamics.CRM.knowledgesearchmodel[];
		lk_phonecall_createdby: DG.Microsoft.Dynamics.CRM.phonecall[];
		lk_campaign_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.campaign[];
		lk_quarterlyfiscalcalendar_createdby: DG.Microsoft.Dynamics.CRM.quarterlyfiscalcalendar[];
		lk_tracelog_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.tracelog[];
		lk_subject_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.subject[];
		lk_customcontrolresource_createdby: DG.Microsoft.Dynamics.CRM.customcontrolresource[];
		lk_fixedmonthlyfiscalcalendar_createdonbehalfby: DG.Microsoft.Dynamics.CRM.fixedmonthlyfiscalcalendar[];
		modifiedby_sdkmessagefilter: DG.Microsoft.Dynamics.CRM.sdkmessagefilter[];
		lk_quotedetail_createdonbehalfby: DG.Microsoft.Dynamics.CRM.quotedetail[];
		lk_sharepointsitebase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		lk_reportcategory_createdonbehalfby: DG.Microsoft.Dynamics.CRM.reportcategory[];
		lk_service_modifiedby: DG.Microsoft.Dynamics.CRM.service[];
		lk_salesliteraturebase_modifiedby: DG.Microsoft.Dynamics.CRM.salesliterature[];
		lk_templatebase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.template[];
		user_email: DG.Microsoft.Dynamics.CRM.email[];
		user_fax: DG.Microsoft.Dynamics.CRM.fax[];
		lk_contactbase_createdby: DG.Microsoft.Dynamics.CRM.contact[];
		lk_timezonelocalizedname_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.timezonelocalizedname[];
		lk_email_modifiedby: DG.Microsoft.Dynamics.CRM.email[];
		lk_phonecall_createdonbehalfby: DG.Microsoft.Dynamics.CRM.phonecall[];
		lk_leadbase_modifiedby: DG.Microsoft.Dynamics.CRM.lead[];
		lk_businessunitbase_createdby: DG.Microsoft.Dynamics.CRM.businessunit[];
		constraintbasedgroup_systemuser: DG.Microsoft.Dynamics.CRM.constraintbasedgroup[];
		system_user_sales_literature: DG.Microsoft.Dynamics.CRM.salesliterature[];
		lk_ProductAssociation_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.productassociation[];
		lk_discount_createdonbehalfby: DG.Microsoft.Dynamics.CRM.discount[];
		lk_slakpiinstancebase_modifiedby: DG.Microsoft.Dynamics.CRM.slakpiinstance[];
		queue_primary_user: DG.Microsoft.Dynamics.CRM.queue[];
		lk_importjobbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.importjob[];
		SystemUser_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		lk_organization_createdonbehalfby: DG.Microsoft.Dynamics.CRM.organization[];
		lk_calendarrule_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.calendarrule[];
		lk_importjobbase_createdby: DG.Microsoft.Dynamics.CRM.importjob[];
		lk_orderclose_modifiedby: DG.Microsoft.Dynamics.CRM.orderclose[];
		lk_uomschedule_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.uomschedule[];
		SystemUser_ImportFiles: DG.Microsoft.Dynamics.CRM.importfile[];
		lk_importfilebase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.importfile[];
		socialProfile_owning_user: DG.Microsoft.Dynamics.CRM.socialprofile[];
		lk_orderclose_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.orderclose[];
		lk_invoice_createdonbehalfby: DG.Microsoft.Dynamics.CRM.invoice[];
		lk_campaignactivity_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		lk_businessunit_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.businessunit[];
		lk_appointment_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.appointment[];
		lk_sdkmessageprocessingstepimage_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepimage[];
		lk_kbarticletemplate_createdonbehalfby: DG.Microsoft.Dynamics.CRM.kbarticletemplate[];
		lk_azureserviceconnection_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.azureserviceconnection[];
		lk_documenttemplatebase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.documenttemplate[];
		lk_sdkmessageprocessingstep_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		lk_contracttemplate_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.contracttemplate[];
		lk_campaignresponse_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		lk_salesliteratureitem_createdonbehalfby: DG.Microsoft.Dynamics.CRM.salesliteratureitem[];
		lk_monthlyfiscalcalendar_createdby: DG.Microsoft.Dynamics.CRM.monthlyfiscalcalendar[];
		lk_syncerrorbase_modifiedby: DG.Microsoft.Dynamics.CRM.syncerror[];
		lk_salesliteratureitem_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.salesliteratureitem[];
		lk_uomschedule_createdonbehalfby: DG.Microsoft.Dynamics.CRM.uomschedule[];
		lk_reportbase_createdby: DG.Microsoft.Dynamics.CRM.report[];
		lk_documenttemplatebase_createdby: DG.Microsoft.Dynamics.CRM.documenttemplate[];
		lk_subject_createdonbehalfby: DG.Microsoft.Dynamics.CRM.subject[];
		lk_contractdetailbase_createdby: DG.Microsoft.Dynamics.CRM.contractdetail[];
		lk_recurringappointmentmaster_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		lk_listmember_createdby: DG.Microsoft.Dynamics.CRM.listmember[];
		lk_reportbase_modifiedby: DG.Microsoft.Dynamics.CRM.report[];
		user_incidentresolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		lk_userformbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.userform[];
		lk_bulkdeleteoperationbase_createdby: DG.Microsoft.Dynamics.CRM.bulkdeleteoperation[];
		lk_quotebase_createdby: DG.Microsoft.Dynamics.CRM.quote[];
		lk_slabase_modifiedby: DG.Microsoft.Dynamics.CRM.sla[];
		lk_personaldocumenttemplatebase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.personaldocumenttemplate[];
		lk_activitypointer_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.activitypointer[];
		lk_socialactivity_createdby: DG.Microsoft.Dynamics.CRM.socialactivity[];
		lk_resourcespec_createdby: DG.Microsoft.Dynamics.CRM.resourcespec[];
		lk_fax_modifiedby: DG.Microsoft.Dynamics.CRM.fax[];
		lk_product_createdonbehalfby: DG.Microsoft.Dynamics.CRM.product[];
		lk_userformbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.userform[];
		modifiedby_sdkmessageprocessingstep: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		lk_recommendationmodelversion_modifiedby: DG.Microsoft.Dynamics.CRM.recommendationmodelversion[];
		createdby_plugintype: DG.Microsoft.Dynamics.CRM.plugintype[];
		lk_sdkmessage_createdonbehalfby: DG.Microsoft.Dynamics.CRM.sdkmessage[];
		lk_customcontroldefaultconfig_createdonbehalfby: DG.Microsoft.Dynamics.CRM.customcontroldefaultconfig[];
		lk_pluginassembly_createdonbehalfby: DG.Microsoft.Dynamics.CRM.pluginassembly[];
		createdby_sdkmessagefilter: DG.Microsoft.Dynamics.CRM.sdkmessagefilter[];
		lk_knowledgearticleviews_modifiedby: DG.Microsoft.Dynamics.CRM.knowledgearticleviews[];
		lk_connectionrolebase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.connectionrole[];
		lk_workflowlog_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.workflowlog[];
		lk_orderclose_createdby: DG.Microsoft.Dynamics.CRM.orderclose[];
		lk_usersettingsbase_modifiedby: DG.Microsoft.Dynamics.CRM.usersettings[];
		lk_sharepointdocumentlocationbase_createdby: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		lk_list_modifiedby: DG.Microsoft.Dynamics.CRM.list[];
		lk_fax_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.fax[];
		user_opportunityclose: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		lk_asyncoperation_modifiedby: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		lk_savedquery_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.savedquery[];
		lk_workflowlog_modifiedby: DG.Microsoft.Dynamics.CRM.workflowlog[];
		lk_webwizard_createdonbehalfby: DG.Microsoft.Dynamics.CRM.webwizard[];
		lk_resourcespec_modifiedby: DG.Microsoft.Dynamics.CRM.resourcespec[];
		lk_webwizard_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.webwizard[];
		lk_incidentresolution_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		lk_azureserviceconnection_createdby: DG.Microsoft.Dynamics.CRM.azureserviceconnection[];
		lk_appointment_modifiedby: DG.Microsoft.Dynamics.CRM.appointment[];
		lk_organizationbase_createdby: DG.Microsoft.Dynamics.CRM.organization[];
		lk_timezonelocalizedname_modifiedby: DG.Microsoft.Dynamics.CRM.timezonelocalizedname[];
		lk_invoice_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.invoice[];
		equipment_systemuser: DG.Microsoft.Dynamics.CRM.equipment[];
		lk_activitypointer_createdonbehalfby: DG.Microsoft.Dynamics.CRM.activitypointer[];
		lk_productpricelevel_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.productpricelevel[];
		user_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		lk_duplicaterulecondition_createdonbehalfby: DG.Microsoft.Dynamics.CRM.duplicaterulecondition[];
		lk_service_createdby: DG.Microsoft.Dynamics.CRM.service[];
		lk_mailmergetemplate_createdonbehalfby: DG.Microsoft.Dynamics.CRM.mailmergetemplate[];
		lk_importdata_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.importdata[];
		lk_salesliteraturebase_createdby: DG.Microsoft.Dynamics.CRM.salesliterature[];
		lk_semiannualfiscalcalendar_salespersonid: DG.Microsoft.Dynamics.CRM.semiannualfiscalcalendar[];
		lk_contract_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.contract[];
		lk_connectionbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.connection[];
		lk_MobileOfflineProfile_createdby: DG.Microsoft.Dynamics.CRM.mobileofflineprofile[];
		lk_syncerrorbase_createdby: DG.Microsoft.Dynamics.CRM.syncerror[];
		lk_documenttemplatebase_modifiedby: DG.Microsoft.Dynamics.CRM.documenttemplate[];
		lk_task_modifiedby: DG.Microsoft.Dynamics.CRM.task[];
		lk_kbarticlebase_createdby: DG.Microsoft.Dynamics.CRM.kbarticle[];
		lk_task_createdby: DG.Microsoft.Dynamics.CRM.task[];
		lk_timezonedefinition_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.timezonedefinition[];
		lk_topicmodelexecutionhistory_createdby: DG.Microsoft.Dynamics.CRM.topicmodelexecutionhistory[];
		lk_duplicaterulecondition_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.duplicaterulecondition[];
		lk_contractbase_modifiedby: DG.Microsoft.Dynamics.CRM.contract[];
		lk_campaignactivity_createdonbehalfby: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		lk_opportunityclose_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		lk_uom_createdonbehalfby: DG.Microsoft.Dynamics.CRM.uom[];
		lk_asyncoperation_createdonbehalfby: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		user_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		lk_competitoraddress_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.competitoraddress[];
		lk_activitypointer_modifiedby: DG.Microsoft.Dynamics.CRM.activitypointer[];
		lk_queuebase_createdby: DG.Microsoft.Dynamics.CRM.queue[];
		user_settings: DG.Microsoft.Dynamics.CRM.usersettings[];
		lk_pricelevelbase_createdby: DG.Microsoft.Dynamics.CRM.pricelevel[];
		lk_campaign_createdonbehalfby: DG.Microsoft.Dynamics.CRM.campaign[];
		lk_queueitem_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.queueitem[];
		lk_annotationbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.annotation[];
		lk_timezonelocalizedname_createdby: DG.Microsoft.Dynamics.CRM.timezonelocalizedname[];
		lk_import_createdonbehalfby: DG.Microsoft.Dynamics.CRM.import[];
		lk_mailmergetemplate_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.mailmergetemplate[];
		lk_customcontroldefaultconfig_modifiedby: DG.Microsoft.Dynamics.CRM.customcontroldefaultconfig[];
		lk_customcontrol_createdonbehalfby: DG.Microsoft.Dynamics.CRM.customcontrol[];
		lk_usersettings_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.usersettings[];
		lk_MobileOfflineProfile_modifiedby: DG.Microsoft.Dynamics.CRM.mobileofflineprofile[];
		lk_competitor_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.competitor[];
		lk_plugintype_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.plugintype[];
		lk_uom_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.uom[];
		user_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		lk_savedqueryvisualizationbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.savedqueryvisualization[];
		lk_kbarticlecomment_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.kbarticlecomment[];
		siteid: DG.Microsoft.Dynamics.CRM.siteSingle;
		lk_rolebase_createdby: DG.Microsoft.Dynamics.CRM.role[];
		lk_leadbase_createdby: DG.Microsoft.Dynamics.CRM.lead[];
		lk_bulkdeleteoperation_createdonbehalfby: DG.Microsoft.Dynamics.CRM.bulkdeleteoperation[];
		lk_knowledgearticleviews_createdby: DG.Microsoft.Dynamics.CRM.knowledgearticleviews[];
		lk_salesorder_createdonbehalfby: DG.Microsoft.Dynamics.CRM.salesorder[];
		lk_customeraddressbase_modifiedby: DG.Microsoft.Dynamics.CRM.customeraddress[];
		lk_quotebase_modifiedby: DG.Microsoft.Dynamics.CRM.quote[];
		lk_email_createdonbehalfby: DG.Microsoft.Dynamics.CRM.email[];
		lk_contract_createdonbehalfby: DG.Microsoft.Dynamics.CRM.contract[];
		lk_discountbase_createdby: DG.Microsoft.Dynamics.CRM.discount[];
		lk_quarterlyfiscalcalendar_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.quarterlyfiscalcalendar[];
		user_orderclose: DG.Microsoft.Dynamics.CRM.orderclose[];
		lk_incidentbase_createdby: DG.Microsoft.Dynamics.CRM.incident[];
		lk_pricelevelbase_modifiedby: DG.Microsoft.Dynamics.CRM.pricelevel[];
		lk_ProductAssociate_createdby: DG.Microsoft.Dynamics.CRM.productassociation[];
		lk_importfilebase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.importfile[];
		lk_opportunitybase_modifiedby: DG.Microsoft.Dynamics.CRM.opportunity[];
		lk_quotedetail_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.quotedetail[];
		lk_sdkmessagefilter_createdonbehalfby: DG.Microsoft.Dynamics.CRM.sdkmessagefilter[];
		lk_annotationbase_modifiedby: DG.Microsoft.Dynamics.CRM.annotation[];
		lk_queue_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.queue[];
		lk_sharepointdocumentlocationbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		lk_salesliterature_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.salesliterature[];
		lk_socialactivity_modifiedby: DG.Microsoft.Dynamics.CRM.socialactivity[];
		lk_calendar_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.calendar[];
		system_user_contacts: DG.Microsoft.Dynamics.CRM.contact[];
		lk_equipment_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.equipment[];
		lk_webresourcebase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.webresource[];
		lk_fixedmonthlyfiscalcalendar_createdby: DG.Microsoft.Dynamics.CRM.fixedmonthlyfiscalcalendar[];
		lk_fieldsecurityprofile_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.fieldsecurityprofile[];
		createdby_sdkmessageprocessingstepsecureconfig: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepsecureconfig[];
		lk_webwizard_modifiedby: DG.Microsoft.Dynamics.CRM.webwizard[];
		lk_teambase_modifiedby: DG.Microsoft.Dynamics.CRM.team[];
		lk_service_createdonbehalfby: DG.Microsoft.Dynamics.CRM.service[];
		lk_annualfiscalcalendar_createdby: DG.Microsoft.Dynamics.CRM.annualfiscalcalendar[];
		lk_opportunitybase_createdby: DG.Microsoft.Dynamics.CRM.opportunity[];
		system_user_incidents: DG.Microsoft.Dynamics.CRM.incident[];
		lk_customcontroldefaultconfig_createdby: DG.Microsoft.Dynamics.CRM.customcontroldefaultconfig[];
		lk_opportunity_createdonbehalfby: DG.Microsoft.Dynamics.CRM.opportunity[];
		lk_mobileofflineprofileitem_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitem[];
		lk_salesorderdetailbase_createdby: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		lk_annualfiscalcalendar_createdonbehalfby: DG.Microsoft.Dynamics.CRM.annualfiscalcalendar[];
		queuemembership_association: DG.Microsoft.Dynamics.CRM.queue[];
		lk_solutionbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.solution[];
		lk_sharepointsitebase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		lk_opportunityproduct_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.opportunityproduct[];
		lk_BulkOperation_createdonbehalfby: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		lk_syncerrorbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.syncerror[];
		lk_constraintbasedgroup_modifiedby: DG.Microsoft.Dynamics.CRM.constraintbasedgroup[];
		lk_customcontrolresource_modifiedby: DG.Microsoft.Dynamics.CRM.customcontrolresource[];
		modifiedby_pluginassembly: DG.Microsoft.Dynamics.CRM.pluginassembly[];
		knowledgearticle_primaryauthorid: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		lk_topicmodelexecutionhistory_modifiedby: DG.Microsoft.Dynamics.CRM.topicmodelexecutionhistory[];
		lk_entitlementtemplatechannel_createdonbehalfby: DG.Microsoft.Dynamics.CRM.entitlementtemplatechannel[];
		lk_publisheraddressbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.publisheraddress[];
		lk_transactioncurrencybase_modifiedby: DG.Microsoft.Dynamics.CRM.transactioncurrency[];
		contact_owning_user: DG.Microsoft.Dynamics.CRM.contact[];
		lk_appointment_createdonbehalfby: DG.Microsoft.Dynamics.CRM.appointment[];
		lk_MobileOfflineProfileItemAssociation_createdby: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitemassociation[];
		lk_quarterlyfiscalcalendar_salespersonid: DG.Microsoft.Dynamics.CRM.quarterlyfiscalcalendar[];
		lk_incidentresolution_modifiedby: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		system_user_salesorderdetail: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		lk_constraintbasedgroup_createdonbehalfby: DG.Microsoft.Dynamics.CRM.constraintbasedgroup[];
		lk_importlogbase_modifiedby: DG.Microsoft.Dynamics.CRM.importlog[];
		lk_opportunityclose_createdby: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		lk_businessunitnewsarticlebase_modifiedby: DG.Microsoft.Dynamics.CRM.businessunitnewsarticle[];
		lk_opportunityproduct_createdonbehalfby: DG.Microsoft.Dynamics.CRM.opportunityproduct[];
		lk_uombase_modifiedby: DG.Microsoft.Dynamics.CRM.uom[];
		lk_campaignresponse_createdby: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		lk_BulkOperation_modifiedby: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		lk_customcontrolresource_createdonbehalfby: DG.Microsoft.Dynamics.CRM.customcontrolresource[];
		lk_importmap_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.importmap[];
		modifiedby_sdkmessageprocessingstepsecureconfig: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepsecureconfig[];
		lk_reportcategorybase_modifiedby: DG.Microsoft.Dynamics.CRM.reportcategory[];
		lk_incidentbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.incident[];
		lk_task_createdonbehalfby: DG.Microsoft.Dynamics.CRM.task[];
		lk_entitlementtemplatechannel_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.entitlementtemplatechannel[];
		user_letter: DG.Microsoft.Dynamics.CRM.letter[];
		lk_serviceappointment_createdby: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		lk_teambase_createdby: DG.Microsoft.Dynamics.CRM.team[];
		lk_slabase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.sla[];
		lk_leadaddressbase_modifiedby: DG.Microsoft.Dynamics.CRM.leadaddress[];
		lk_topicmodel_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.topicmodel[];
		lk_ProductAssociation_modifiedby: DG.Microsoft.Dynamics.CRM.productassociation[];
		lk_topicmodel_modifiedby: DG.Microsoft.Dynamics.CRM.topicmodel[];
		lk_topicmodel_createdonbehalfby: DG.Microsoft.Dynamics.CRM.topicmodel[];
		lk_usersettings_createdonbehalfby: DG.Microsoft.Dynamics.CRM.usersettings[];
		lk_calendarrule_createdby: DG.Microsoft.Dynamics.CRM.calendarrule[];
		lk_importentitymapping_createdonbehalfby: DG.Microsoft.Dynamics.CRM.importentitymapping[];
		lk_contracttemplatebase_modifiedby: DG.Microsoft.Dynamics.CRM.contracttemplate[];
		lk_customcontrolresource_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.customcontrolresource[];
		lk_mobileofflineprofileitem_modifiedby: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitem[];
		parentsystemuserid: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		user_parent_user: DG.Microsoft.Dynamics.CRM.systemuser[];
		lk_personaldocumenttemplatebase_modifiedby: DG.Microsoft.Dynamics.CRM.personaldocumenttemplate[];
		ImportFile_SystemUser: DG.Microsoft.Dynamics.CRM.importfile[];
		lk_savedquerybase_createdby: DG.Microsoft.Dynamics.CRM.savedquery[];
		SystemUser_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		lk_leadaddress_createdonbehalfby: DG.Microsoft.Dynamics.CRM.leadaddress[];
		lk_salesorderdetail_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		lk_email_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.email[];
		user_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		lk_fixedmonthlyfiscalcalendar_modifiedby: DG.Microsoft.Dynamics.CRM.fixedmonthlyfiscalcalendar[];
		lk_businessunitnewsarticle_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.businessunitnewsarticle[];
		lk_phonecall_modifiedby: DG.Microsoft.Dynamics.CRM.phonecall[];
		lk_annualfiscalcalendar_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.annualfiscalcalendar[];
		lk_kbarticletemplate_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.kbarticletemplate[];
		lk_organizationbase_modifiedby: DG.Microsoft.Dynamics.CRM.organization[];
		createdby_sdkmessageprocessingstep: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		user_quoteclose: DG.Microsoft.Dynamics.CRM.quoteclose[];
		lk_syncerrorbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.syncerror[];
		lk_salesliterature_createdonbehalfby: DG.Microsoft.Dynamics.CRM.salesliterature[];
		lk_appointment_createdby: DG.Microsoft.Dynamics.CRM.appointment[];
		lk_sdkmessageprocessingstepsecureconfig_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepsecureconfig[];
		lk_contractbase_createdby: DG.Microsoft.Dynamics.CRM.contract[];
		lk_importjobbase_modifiedby: DG.Microsoft.Dynamics.CRM.importjob[];
		mobileofflineprofileid: DG.Microsoft.Dynamics.CRM.mobileofflineprofileSingle;
		lk_mailmergetemplatebase_modifiedby: DG.Microsoft.Dynamics.CRM.mailmergetemplate[];
		lk_import_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.import[];
		lk_leadaddressbase_createdby: DG.Microsoft.Dynamics.CRM.leadaddress[];
		lk_monthlyfiscalcalendar_createdonbehalfby: DG.Microsoft.Dynamics.CRM.monthlyfiscalcalendar[];
		queueid: DG.Microsoft.Dynamics.CRM.queueSingle;
		lk_site_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.site[];
		lk_userquery_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.userquery[];
		lk_timezonerule_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.timezonerule[];
		lk_contractdetailbase_modifiedby: DG.Microsoft.Dynamics.CRM.contractdetail[];
		user_userqueryvisualizations: DG.Microsoft.Dynamics.CRM.userqueryvisualization[];
		lk_userform_createdby: DG.Microsoft.Dynamics.CRM.userform[];
		lk_discounttypebase_modifiedby: DG.Microsoft.Dynamics.CRM.discounttype[];
		user_task: DG.Microsoft.Dynamics.CRM.task[];
		lk_invoicedetailbase_createdby: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		lk_quotedetailbase_modifiedby: DG.Microsoft.Dynamics.CRM.quotedetail[];
		lk_MobileOfflineProfile_createdonbehalfby: DG.Microsoft.Dynamics.CRM.mobileofflineprofile[];
		lk_webwizard_createdby: DG.Microsoft.Dynamics.CRM.webwizard[];
		lk_mailmergetemplatebase_createdby: DG.Microsoft.Dynamics.CRM.mailmergetemplate[];
		lk_calendarrule_createdonbehalfby: DG.Microsoft.Dynamics.CRM.calendarrule[];
		lk_recommendationmodelversion_createdonbehalfby: DG.Microsoft.Dynamics.CRM.recommendationmodelversion[];
		lk_email_createdby: DG.Microsoft.Dynamics.CRM.email[];
		lk_queue_createdonbehalfby: DG.Microsoft.Dynamics.CRM.queue[];
		lk_userquery_createdby: DG.Microsoft.Dynamics.CRM.userquery[];
		lk_queuebase_modifiedby: DG.Microsoft.Dynamics.CRM.queue[];
		modifiedby_sdkmessage: DG.Microsoft.Dynamics.CRM.sdkmessage[];
		lk_productpricelevelbase_modifiedby: DG.Microsoft.Dynamics.CRM.productpricelevel[];
		lk_fieldsecurityprofile_modifiedby: DG.Microsoft.Dynamics.CRM.fieldsecurityprofile[];
		lk_incidentbase_modifiedby: DG.Microsoft.Dynamics.CRM.incident[];
		lk_customcontroldefaultconfig_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.customcontroldefaultconfig[];
		lk_opportunityclose_modifiedby: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		lk_asyncoperation_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		lk_publisherbase_createdonbehalfby: DG.Microsoft.Dynamics.CRM.publisher[];
		SystemUser_Email_EmailSender: DG.Microsoft.Dynamics.CRM.email[];
		lk_recurringappointmentmaster_modifiedby: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		lk_knowledgearticleincident_modifiedby: DG.Microsoft.Dynamics.CRM.knowledgearticleincident[];
		SystemUser_ImportMaps: DG.Microsoft.Dynamics.CRM.importmap[];
		workflow_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.workflow[];
		lk_serviceappointment_modifiedby: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		lk_slaitembase_modifiedby: DG.Microsoft.Dynamics.CRM.slaitem[];
		lk_mobileofflineprofileitemassociation_createdonbehalfby: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitemassociation[];
		lk_topicmodelexecutionhistory_createdonbehalfby: DG.Microsoft.Dynamics.CRM.topicmodelexecutionhistory[];
		lk_annualfiscalcalendar_salespersonid: DG.Microsoft.Dynamics.CRM.annualfiscalcalendar[];
		lk_serviceappointment_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		lk_opportunityclose_createdonbehalfby: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		lk_emailserverprofile_modifiedby: DG.Microsoft.Dynamics.CRM.emailserverprofile[];
		lk_slakpiinstancebase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.slakpiinstance[];
		lk_duplicateruleconditionbase_modifiedby: DG.Microsoft.Dynamics.CRM.duplicaterulecondition[];
		system_user_email_templates: DG.Microsoft.Dynamics.CRM.template[];
		lk_campaignactivity_modifiedby: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		lk_letter_modifiedby: DG.Microsoft.Dynamics.CRM.letter[];
		workflow_createdby: DG.Microsoft.Dynamics.CRM.workflow[];
		lk_publisheraddressbase_modifiedby: DG.Microsoft.Dynamics.CRM.publisheraddress[];
		lk_task_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.task[];
		lk_userform_modifiedby: DG.Microsoft.Dynamics.CRM.userform[];
		lk_invoicebase_createdby: DG.Microsoft.Dynamics.CRM.invoice[];
		lk_importdatabase_createdby: DG.Microsoft.Dynamics.CRM.importdata[];
		user_slabase: DG.Microsoft.Dynamics.CRM.sla[];
		lk_importfilebase_modifiedby: DG.Microsoft.Dynamics.CRM.importfile[];
		lk_team_createdonbehalfby: DG.Microsoft.Dynamics.CRM.team[];
		lk_quote_createdonbehalfby: DG.Microsoft.Dynamics.CRM.quote[];
		lk_leadaddress_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.leadaddress[];
		lk_templatebase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.template[];
		lk_slaitembase_createdby: DG.Microsoft.Dynamics.CRM.slaitem[];
		businessunitid: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		lk_importmapbase_modifiedby: DG.Microsoft.Dynamics.CRM.importmap[];
		lk_usersettingsbase_createdby: DG.Microsoft.Dynamics.CRM.usersettings[];
		lk_salesorderdetailbase_modifiedby: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		lk_webresourcebase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.webresource[];
		webresource_createdby: DG.Microsoft.Dynamics.CRM.webresource[];
		system_user_quotedetail: DG.Microsoft.Dynamics.CRM.quotedetail[];
		user_accounts: DG.Microsoft.Dynamics.CRM.account[];
		lk_recommendationmodel_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.recommendationmodel[];
		lk_kbarticlebase_modifiedby: DG.Microsoft.Dynamics.CRM.kbarticle[];
		lk_equipment_createdby: DG.Microsoft.Dynamics.CRM.equipment[];
		lk_workflowlog_createdby: DG.Microsoft.Dynamics.CRM.workflowlog[];
		lk_bulkdeleteoperation_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.bulkdeleteoperation[];
		lk_quoteclose_createdby: DG.Microsoft.Dynamics.CRM.quoteclose[];
		lk_productbase_modifiedby: DG.Microsoft.Dynamics.CRM.product[];
		lk_userqueryvisualization_createdby: DG.Microsoft.Dynamics.CRM.userqueryvisualization[];
		lk_importfilebase_createdby: DG.Microsoft.Dynamics.CRM.importfile[];
		lk_discount_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.discount[];
		lk_contactbase_modifiedby: DG.Microsoft.Dynamics.CRM.contact[];
		lk_quoteclose_modifiedby: DG.Microsoft.Dynamics.CRM.quoteclose[];
		lk_MobileOfflineProfileItem_createdby: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitem[];
		workflow_modifiedby: DG.Microsoft.Dynamics.CRM.workflow[];
		lk_campaignresponse_createdonbehalfby: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		lk_sdkmessagefilter_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.sdkmessagefilter[];
		SystemUser_DuplicateRules: DG.Microsoft.Dynamics.CRM.duplicaterule[];
		lk_fixedmonthlyfiscalcalendar_salespersonid: DG.Microsoft.Dynamics.CRM.fixedmonthlyfiscalcalendar[];
		lk_ProductAssociation_createdonbehalfby: DG.Microsoft.Dynamics.CRM.productassociation[];
		lk_BulkOperation_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		lk_kbarticletemplatebase_modifiedby: DG.Microsoft.Dynamics.CRM.kbarticletemplate[];
		lk_savedqueryvisualizationbase_modifiedby: DG.Microsoft.Dynamics.CRM.savedqueryvisualization[];
		lk_semiannualfiscalcalendar_modifiedby: DG.Microsoft.Dynamics.CRM.semiannualfiscalcalendar[];
		lk_letter_createdby: DG.Microsoft.Dynamics.CRM.letter[];
		lk_businessunitnewsarticle_createdonbehalfby: DG.Microsoft.Dynamics.CRM.businessunitnewsarticle[];
		lk_discountbase_modifiedby: DG.Microsoft.Dynamics.CRM.discount[];
		lk_list_createdby: DG.Microsoft.Dynamics.CRM.list[];
		lk_timezonerule_modifiedby: DG.Microsoft.Dynamics.CRM.timezonerule[];
		lk_serviceendpointbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.serviceendpoint[];
		lk_kbarticle_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.kbarticle[];
		lk_salesorderbase_createdby: DG.Microsoft.Dynamics.CRM.salesorder[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		lk_systemuser_createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuser[];
		lk_SocialProfile_createdonbehalfby: DG.Microsoft.Dynamics.CRM.socialprofile[];
		system_user_workflow: DG.Microsoft.Dynamics.CRM.workflow[];
		lk_importbase_modifiedby: DG.Microsoft.Dynamics.CRM.import[];
		lk_recommendationmodel_createdby: DG.Microsoft.Dynamics.CRM.recommendationmodel[];
		lk_salesliteratureitembase_modifiedby: DG.Microsoft.Dynamics.CRM.salesliteratureitem[];
		lk_teambase_administratorid: DG.Microsoft.Dynamics.CRM.team[];
		lk_fieldsecurityprofile_createdby: DG.Microsoft.Dynamics.CRM.fieldsecurityprofile[];
		lk_fixedmonthlyfiscalcalendar_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.fixedmonthlyfiscalcalendar[];
		lk_sdkmessageprocessingstepsecureconfig_createdonbehalfby: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepsecureconfig[];
		lk_competitor_createdonbehalfby: DG.Microsoft.Dynamics.CRM.competitor[];
		lk_incidentresolution_createdby: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		lk_importmapbase_createdby: DG.Microsoft.Dynamics.CRM.importmap[];
		lk_transactioncurrency_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.transactioncurrency[];
		user_userquery: DG.Microsoft.Dynamics.CRM.userquery[];
		system_user_asyncoperation: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		lk_campaignresponse_modifiedby: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		lk_equipment_createdonbehalfby: DG.Microsoft.Dynamics.CRM.equipment[];
		territoryid: DG.Microsoft.Dynamics.CRM.territorySingle;
		lk_duplicateruleconditionbase_createdby: DG.Microsoft.Dynamics.CRM.duplicaterulecondition[];
		lk_productpricelevelbase_createdby: DG.Microsoft.Dynamics.CRM.productpricelevel[];
		lk_importentitymapping_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.importentitymapping[];
		lk_accountbase_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.account[];
		lk_customcontrol_modifiedby: DG.Microsoft.Dynamics.CRM.customcontrol[];
		lk_duplicaterulebase_createdby: DG.Microsoft.Dynamics.CRM.duplicaterule[];
		lk_queueitem_createdonbehalfby: DG.Microsoft.Dynamics.CRM.queueitem[];
		lk_transactioncurrencybase_createdby: DG.Microsoft.Dynamics.CRM.transactioncurrency[];
		lk_importlog_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.importlog[];
		lk_sdkmessage_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.sdkmessage[];
		lk_kbarticlecommentbase_modifiedby: DG.Microsoft.Dynamics.CRM.kbarticlecomment[];
		user_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		lk_product_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.product[];
		user_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		lk_dg_booking_createdby: DG.Microsoft.Dynamics.CRM.dg_booking[];
		lk_dg_booking_createdonbehalfby: DG.Microsoft.Dynamics.CRM.dg_booking[];
		lk_dg_booking_modifiedby: DG.Microsoft.Dynamics.CRM.dg_booking[];
		lk_dg_booking_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.dg_booking[];
		user_dg_booking: DG.Microsoft.Dynamics.CRM.dg_booking[];
		lk_dg_plane_createdby: DG.Microsoft.Dynamics.CRM.dg_plane[];
		lk_dg_plane_createdonbehalfby: DG.Microsoft.Dynamics.CRM.dg_plane[];
		lk_dg_plane_modifiedby: DG.Microsoft.Dynamics.CRM.dg_plane[];
		lk_dg_plane_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.dg_plane[];
		user_dg_plane: DG.Microsoft.Dynamics.CRM.dg_plane[];
		lk_dg_hotel_createdby: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		lk_dg_hotel_createdonbehalfby: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		lk_dg_hotel_modifiedby: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		lk_dg_hotel_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		user_dg_hotel: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		lk_dg_car_createdby: DG.Microsoft.Dynamics.CRM.dg_car[];
		lk_dg_car_createdonbehalfby: DG.Microsoft.Dynamics.CRM.dg_car[];
		lk_dg_car_modifiedby: DG.Microsoft.Dynamics.CRM.dg_car[];
		lk_dg_car_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.dg_car[];
		user_dg_car: DG.Microsoft.Dynamics.CRM.dg_car[];
		lk_dg_country_createdby: DG.Microsoft.Dynamics.CRM.dg_country[];
		lk_dg_country_createdonbehalfby: DG.Microsoft.Dynamics.CRM.dg_country[];
		lk_dg_country_modifiedby: DG.Microsoft.Dynamics.CRM.dg_country[];
		lk_dg_country_modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.dg_country[];
		owner_exchangesyncidmapping: DG.Microsoft.Dynamics.CRM.exchangesyncidmapping[];
		owner_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		owner_sharepointsite: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		owner_sharepointdocumentlocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		owner_entitlement: DG.Microsoft.Dynamics.CRM.entitlement[];
		owner_goal: DG.Microsoft.Dynamics.CRM.goal[];
		owner_mailbox: DG.Microsoft.Dynamics.CRM.mailbox[];
		owner_personaldocumenttemplates: DG.Microsoft.Dynamics.CRM.personaldocumenttemplate[];
		owner_accounts: DG.Microsoft.Dynamics.CRM.account[];
		owner_goalrollupquery: DG.Microsoft.Dynamics.CRM.goalrollupquery[];
		owner_salesorders: DG.Microsoft.Dynamics.CRM.salesorder[];
		owner_postfollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		owner_workflows: DG.Microsoft.Dynamics.CRM.workflow[];
		owner_lists: DG.Microsoft.Dynamics.CRM.list[];
		owner_userquerys: DG.Microsoft.Dynamics.CRM.userquery[];
		owner_importmaps: DG.Microsoft.Dynamics.CRM.importmap[];
		owner_mailmergetemplates: DG.Microsoft.Dynamics.CRM.mailmergetemplate[];
		owner_opportunitys: DG.Microsoft.Dynamics.CRM.opportunity[];
		owner_duplicaterules: DG.Microsoft.Dynamics.CRM.duplicaterule[];
		owner_reports: DG.Microsoft.Dynamics.CRM.report[];
		owner_activitypointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		owner_principalentitymap: DG.Microsoft.Dynamics.CRM.principalentitymap[];
		owner_importdatas: DG.Microsoft.Dynamics.CRM.importdata[];
		owner_queues: DG.Microsoft.Dynamics.CRM.queue[];
		owner_userqueryvisualizations: DG.Microsoft.Dynamics.CRM.userqueryvisualization[];
		owner_campaigns: DG.Microsoft.Dynamics.CRM.campaign[];
		owner_quotes: DG.Microsoft.Dynamics.CRM.quote[];
		owner_invoices: DG.Microsoft.Dynamics.CRM.invoice[];
		owner_annotations: DG.Microsoft.Dynamics.CRM.annotation[];
		owner_userform: DG.Microsoft.Dynamics.CRM.userform[];
		owner_asyncoperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		owner_SocialProfile: DG.Microsoft.Dynamics.CRM.socialprofile[];
		owner_slas: DG.Microsoft.Dynamics.CRM.sla[];
		slakpiinstance_owner: DG.Microsoft.Dynamics.CRM.slakpiinstance[];
		owner_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofile[];
		owner_incidents: DG.Microsoft.Dynamics.CRM.incident[];
		owner_templates: DG.Microsoft.Dynamics.CRM.template[];
		owner_contacts: DG.Microsoft.Dynamics.CRM.contact[];
		owner_imports: DG.Microsoft.Dynamics.CRM.import[];
		owner_leads: DG.Microsoft.Dynamics.CRM.lead[];
		owner_connections: DG.Microsoft.Dynamics.CRM.connection[];
		owner_importfiles: DG.Microsoft.Dynamics.CRM.importfile[];
		owner_importlogs: DG.Microsoft.Dynamics.CRM.importlog[];
		owner_SyncError: DG.Microsoft.Dynamics.CRM.syncerror[];
		owner_contracts: DG.Microsoft.Dynamics.CRM.contract[];
		owner_dg_booking: DG.Microsoft.Dynamics.CRM.dg_booking[];
		owner_dg_plane: DG.Microsoft.Dynamics.CRM.dg_plane[];
		owner_dg_hotel: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		owner_dg_car: DG.Microsoft.Dynamics.CRM.dg_car[];
	}
	interface mailboxSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.mailbox> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofileSingle;
		systemuser_defaultmailbox_mailbox: DG.Microsoft.Dynamics.CRM.systemuser[];
		queue_defaultmailbox_mailbox: DG.Microsoft.Dynamics.CRM.queue[];
		tracelog_Mailbox: DG.Microsoft.Dynamics.CRM.tracelog[];
		activitypointer_sendermailboxid_mailbox: DG.Microsoft.Dynamics.CRM.activitypointer[];
		mailbox_asyncoperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		regardingobjectid_queue: DG.Microsoft.Dynamics.CRM.queueSingle;
		email_sendermailboxid_mailbox: DG.Microsoft.Dynamics.CRM.email[];
		Mailbox_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
	}
	interface teamSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.team> {
		teammembership_association: DG.Microsoft.Dynamics.CRM.systemuser[];
		team_exchangesyncidmapping: DG.Microsoft.Dynamics.CRM.exchangesyncidmapping[];
		team_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		team_sharepointsite: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		team_sharepointdocumentlocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		team_entitlement: DG.Microsoft.Dynamics.CRM.entitlement[];
		team_goal: DG.Microsoft.Dynamics.CRM.goal[];
		team_goalrollupquery: DG.Microsoft.Dynamics.CRM.goalrollupquery[];
		team_mailbox: DG.Microsoft.Dynamics.CRM.mailbox[];
		associatedteamtemplateid: DG.Microsoft.Dynamics.CRM.teamtemplateSingle;
		team_DuplicateRules: DG.Microsoft.Dynamics.CRM.duplicaterule[];
		team_Imports: DG.Microsoft.Dynamics.CRM.import[];
		team_opportunities: DG.Microsoft.Dynamics.CRM.opportunity[];
		OwningTeam_postfollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		team_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		team_workflowlog: DG.Microsoft.Dynamics.CRM.workflowlog[];
		team_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		team_service_contracts: DG.Microsoft.Dynamics.CRM.contract[];
		team_userform: DG.Microsoft.Dynamics.CRM.userform[];
		team_Campaigns: DG.Microsoft.Dynamics.CRM.campaign[];
		team_quotes: DG.Microsoft.Dynamics.CRM.quote[];
		Team_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		team_SyncError: DG.Microsoft.Dynamics.CRM.syncerror[];
		lead_owning_team: DG.Microsoft.Dynamics.CRM.lead[];
		queueid: DG.Microsoft.Dynamics.CRM.queueSingle;
		team_list: DG.Microsoft.Dynamics.CRM.list[];
		team_incidents: DG.Microsoft.Dynamics.CRM.incident[];
		Team_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		team_task: DG.Microsoft.Dynamics.CRM.task[];
		team_userquery: DG.Microsoft.Dynamics.CRM.userquery[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		team_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		team_userqueryvisualizations: DG.Microsoft.Dynamics.CRM.userqueryvisualization[];
		team_ImportMaps: DG.Microsoft.Dynamics.CRM.importmap[];
		team_fax: DG.Microsoft.Dynamics.CRM.fax[];
		team_queueitembase_workerid: DG.Microsoft.Dynamics.CRM.queueitem[];
		team_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		businessunitid: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		ImportFile_Team: DG.Microsoft.Dynamics.CRM.importfile[];
		team_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		team_email_templates: DG.Microsoft.Dynamics.CRM.template[];
		team_workflow: DG.Microsoft.Dynamics.CRM.workflow[];
		Team_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		organizationid_organization: DG.Microsoft.Dynamics.CRM.organizationSingle;
		team_email: DG.Microsoft.Dynamics.CRM.email[];
		team_letter: DG.Microsoft.Dynamics.CRM.letter[];
		team_ImportFiles: DG.Microsoft.Dynamics.CRM.importfile[];
		team_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		team_ImportData: DG.Microsoft.Dynamics.CRM.importdata[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		team_resource_specs: DG.Microsoft.Dynamics.CRM.resourcespec[];
		team_asyncoperation: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		team_contacts: DG.Microsoft.Dynamics.CRM.contact[];
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		team_resource_groups: DG.Microsoft.Dynamics.CRM.resourcegroup[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		team_invoices: DG.Microsoft.Dynamics.CRM.invoice[];
		team_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofile[];
		team_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		team_annotations: DG.Microsoft.Dynamics.CRM.annotation[];
		team_ImportLogs: DG.Microsoft.Dynamics.CRM.importlog[];
		team_orderclose: DG.Microsoft.Dynamics.CRM.orderclose[];
		team_slaBase: DG.Microsoft.Dynamics.CRM.sla[];
		teamprofiles_association: DG.Microsoft.Dynamics.CRM.fieldsecurityprofile[];
		team_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		team_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		team_incidentresolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		teamroles_association: DG.Microsoft.Dynamics.CRM.role[];
		team_accounts: DG.Microsoft.Dynamics.CRM.account[];
		team_service_appointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		team_quoteclose: DG.Microsoft.Dynamics.CRM.quoteclose[];
		team_activity: DG.Microsoft.Dynamics.CRM.activitypointer[];
		team_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		team_orders: DG.Microsoft.Dynamics.CRM.salesorder[];
		team_opportunityclose: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		administratorid: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Team_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		team_goal_goalowner: DG.Microsoft.Dynamics.CRM.goal[];
		team_dg_booking: DG.Microsoft.Dynamics.CRM.dg_booking[];
		team_dg_plane: DG.Microsoft.Dynamics.CRM.dg_plane[];
		team_dg_hotel: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		team_dg_car: DG.Microsoft.Dynamics.CRM.dg_car[];
		owner_exchangesyncidmapping: DG.Microsoft.Dynamics.CRM.exchangesyncidmapping[];
		owner_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		owner_sharepointsite: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		owner_sharepointdocumentlocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		owner_entitlement: DG.Microsoft.Dynamics.CRM.entitlement[];
		owner_goal: DG.Microsoft.Dynamics.CRM.goal[];
		owner_mailbox: DG.Microsoft.Dynamics.CRM.mailbox[];
		owner_personaldocumenttemplates: DG.Microsoft.Dynamics.CRM.personaldocumenttemplate[];
		owner_accounts: DG.Microsoft.Dynamics.CRM.account[];
		owner_goalrollupquery: DG.Microsoft.Dynamics.CRM.goalrollupquery[];
		owner_salesorders: DG.Microsoft.Dynamics.CRM.salesorder[];
		owner_postfollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		owner_workflows: DG.Microsoft.Dynamics.CRM.workflow[];
		owner_lists: DG.Microsoft.Dynamics.CRM.list[];
		owner_userquerys: DG.Microsoft.Dynamics.CRM.userquery[];
		owner_importmaps: DG.Microsoft.Dynamics.CRM.importmap[];
		owner_mailmergetemplates: DG.Microsoft.Dynamics.CRM.mailmergetemplate[];
		owner_opportunitys: DG.Microsoft.Dynamics.CRM.opportunity[];
		owner_duplicaterules: DG.Microsoft.Dynamics.CRM.duplicaterule[];
		owner_reports: DG.Microsoft.Dynamics.CRM.report[];
		owner_activitypointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		owner_principalentitymap: DG.Microsoft.Dynamics.CRM.principalentitymap[];
		owner_importdatas: DG.Microsoft.Dynamics.CRM.importdata[];
		owner_queues: DG.Microsoft.Dynamics.CRM.queue[];
		owner_userqueryvisualizations: DG.Microsoft.Dynamics.CRM.userqueryvisualization[];
		owner_campaigns: DG.Microsoft.Dynamics.CRM.campaign[];
		owner_quotes: DG.Microsoft.Dynamics.CRM.quote[];
		owner_invoices: DG.Microsoft.Dynamics.CRM.invoice[];
		owner_annotations: DG.Microsoft.Dynamics.CRM.annotation[];
		owner_userform: DG.Microsoft.Dynamics.CRM.userform[];
		owner_asyncoperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		owner_SocialProfile: DG.Microsoft.Dynamics.CRM.socialprofile[];
		owner_slas: DG.Microsoft.Dynamics.CRM.sla[];
		slakpiinstance_owner: DG.Microsoft.Dynamics.CRM.slakpiinstance[];
		owner_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofile[];
		owner_incidents: DG.Microsoft.Dynamics.CRM.incident[];
		owner_templates: DG.Microsoft.Dynamics.CRM.template[];
		owner_contacts: DG.Microsoft.Dynamics.CRM.contact[];
		owner_imports: DG.Microsoft.Dynamics.CRM.import[];
		owner_leads: DG.Microsoft.Dynamics.CRM.lead[];
		owner_connections: DG.Microsoft.Dynamics.CRM.connection[];
		owner_importfiles: DG.Microsoft.Dynamics.CRM.importfile[];
		owner_importlogs: DG.Microsoft.Dynamics.CRM.importlog[];
		owner_SyncError: DG.Microsoft.Dynamics.CRM.syncerror[];
		owner_contracts: DG.Microsoft.Dynamics.CRM.contract[];
		owner_dg_booking: DG.Microsoft.Dynamics.CRM.dg_booking[];
		owner_dg_plane: DG.Microsoft.Dynamics.CRM.dg_plane[];
		owner_dg_hotel: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		owner_dg_car: DG.Microsoft.Dynamics.CRM.dg_car[];
	}
	interface knowledgearticleSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.knowledgearticle> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		knowledgearticle_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		knowledgearticle_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		knowledgearticle_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		knowledgearticle_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		knowledgearticle_SharePointDocumentLocations: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		knowledgearticle_QueueItems: DG.Microsoft.Dynamics.CRM.queueitem[];
		knowledgearticle_Annotations: DG.Microsoft.Dynamics.CRM.annotation[];
		knowledgearticle_Teams: DG.Microsoft.Dynamics.CRM.team[];
		knowledgearticle_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		knowledgearticle_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		languagelocaleid: DG.Microsoft.Dynamics.CRM.languagelocaleSingle;
		KnowledgeArticle_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		KnowledgeArticle_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		KnowledgeArticle_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		KnowledgeArticle_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		KnowledgeArticle_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		PreviousArticleContentId: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		knowledgearticle_previousarticle_contentid: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		RootArticleId: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		knowledgearticle_rootarticle_id: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		knowledgearticle_views: DG.Microsoft.Dynamics.CRM.knowledgearticleviews[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		KnowledgeArticle_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		incident_knowledgearticles: DG.Microsoft.Dynamics.CRM.knowledgearticleincident[];
		ParentArticleContentId: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		knowledgearticle_parentarticle_contentid: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		knowledgearticle_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		KnowledgeArticle_Emails: DG.Microsoft.Dynamics.CRM.email[];
		KnowledgeArticle_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		primaryauthorid: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		KnowledgeArticle_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		KnowledgeArticle_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		knowledgearticle_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		knowledgearticle_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		subjectid: DG.Microsoft.Dynamics.CRM.subjectSingle;
	}
	interface businessunitSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.businessunit> {
		business_unit_exchangesyncidmapping: DG.Microsoft.Dynamics.CRM.exchangesyncidmapping[];
		business_unit_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		business_unit_sharepointdocumentlocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		business_unit_entitlement: DG.Microsoft.Dynamics.CRM.entitlement[];
		business_unit_goal: DG.Microsoft.Dynamics.CRM.goal[];
		business_unit_mailbox: DG.Microsoft.Dynamics.CRM.mailbox[];
		business_unit_leads: DG.Microsoft.Dynamics.CRM.lead[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		BulkDeleteOperation_BusinessUnit: DG.Microsoft.Dynamics.CRM.bulkdeleteoperation[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		business_unit_workflow: DG.Microsoft.Dynamics.CRM.workflow[];
		BusinessUnit_SyncError: DG.Microsoft.Dynamics.CRM.syncerror[];
		business_unit_PostRegarding: DG.Microsoft.Dynamics.CRM.postregarding[];
		business_unit_postfollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		BusinessUnit_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		business_unit_queues: DG.Microsoft.Dynamics.CRM.queue[];
		business_unit_fax_activities: DG.Microsoft.Dynamics.CRM.fax[];
		business_unit_calendars: DG.Microsoft.Dynamics.CRM.calendar[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		business_unit_invoices: DG.Microsoft.Dynamics.CRM.invoice[];
		business_unit_quotes: DG.Microsoft.Dynamics.CRM.quote[];
		BusinessUnit_ImportLogs: DG.Microsoft.Dynamics.CRM.importlog[];
		business_unit_annotations: DG.Microsoft.Dynamics.CRM.annotation[];
		calendarid: DG.Microsoft.Dynamics.CRM.calendarSingle;
		business_unit_opportunities: DG.Microsoft.Dynamics.CRM.opportunity[];
		business_unit_recurringappointmentmaster_activities: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		business_unit_templates: DG.Microsoft.Dynamics.CRM.template[];
		business_unit_accounts: DG.Microsoft.Dynamics.CRM.account[];
		business_unit_resource_specs: DG.Microsoft.Dynamics.CRM.resourcespec[];
		business_unit_orders: DG.Microsoft.Dynamics.CRM.salesorder[];
		business_unit_order_close_activities: DG.Microsoft.Dynamics.CRM.orderclose[];
		business_unit_socialprofiles: DG.Microsoft.Dynamics.CRM.socialprofile[];
		business_unit_appointment_activities: DG.Microsoft.Dynamics.CRM.appointment[];
		business_unit_letter_activities: DG.Microsoft.Dynamics.CRM.letter[];
		business_unit_task_activities: DG.Microsoft.Dynamics.CRM.task[];
		business_unit_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointer[];
		business_unit_list: DG.Microsoft.Dynamics.CRM.list[];
		business_unit_queues2: DG.Microsoft.Dynamics.CRM.queue[];
		business_unit_asyncoperation: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		business_unit_email_activities: DG.Microsoft.Dynamics.CRM.email[];
		business_unit_roles: DG.Microsoft.Dynamics.CRM.role[];
		business_unit_resource_groups: DG.Microsoft.Dynamics.CRM.resourcegroup[];
		business_unit_teams: DG.Microsoft.Dynamics.CRM.team[];
		business_unit_equipment: DG.Microsoft.Dynamics.CRM.equipment[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		business_unit_userqueryvisualizations: DG.Microsoft.Dynamics.CRM.userqueryvisualization[];
		business_unit_slakpiinstance: DG.Microsoft.Dynamics.CRM.slakpiinstance[];
		BusinessUnit_DuplicateRules: DG.Microsoft.Dynamics.CRM.duplicaterule[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		BusinessUnit_Campaigns: DG.Microsoft.Dynamics.CRM.campaign[];
		BusinessUnit_ImportData: DG.Microsoft.Dynamics.CRM.importdata[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		business_unit_phone_call_activities: DG.Microsoft.Dynamics.CRM.phonecall[];
		business_unit_service_contracts: DG.Microsoft.Dynamics.CRM.contract[];
		business_unit_incidents: DG.Microsoft.Dynamics.CRM.incident[];
		business_unit_contacts: DG.Microsoft.Dynamics.CRM.contact[];
		business_unit_sharepointsites: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		business_unit_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofile[];
		business_unit_mailmergetemplates: DG.Microsoft.Dynamics.CRM.mailmergetemplate[];
		business_unit_BulkOperation_activities: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		business_unit_workflowlogs: DG.Microsoft.Dynamics.CRM.workflowlog[];
		business_unit_resources: DG.Microsoft.Dynamics.CRM.resource[];
		BusinessUnit_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		business_unit_quote_close_activities: DG.Microsoft.Dynamics.CRM.quoteclose[];
		business_unit_connections: DG.Microsoft.Dynamics.CRM.connection[];
		business_unit_personaldocumenttemplates: DG.Microsoft.Dynamics.CRM.personaldocumenttemplate[];
		business_unit_campaignresponse_activities: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		BusinessUnit_ImportFiles: DG.Microsoft.Dynamics.CRM.importfile[];
		business_unit_reports: DG.Microsoft.Dynamics.CRM.report[];
		business_unit_user_settings: DG.Microsoft.Dynamics.CRM.usersettings[];
		business_unit_incident_resolution_activities: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		business_unit_constraint_based_groups: DG.Microsoft.Dynamics.CRM.constraintbasedgroup[];
		BusinessUnit_Imports: DG.Microsoft.Dynamics.CRM.import[];
		business_unit_system_users: DG.Microsoft.Dynamics.CRM.systemuser[];
		business_unit_slabase: DG.Microsoft.Dynamics.CRM.sla[];
		business_unit_userform: DG.Microsoft.Dynamics.CRM.userform[];
		business_unit_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		business_unit_goalrollupquery: DG.Microsoft.Dynamics.CRM.goalrollupquery[];
		business_unit_userquery: DG.Microsoft.Dynamics.CRM.userquery[];
		business_unit_service_appointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		BusinessUnit_ImportMaps: DG.Microsoft.Dynamics.CRM.importmap[];
		business_unit_campaignactivity_activities: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		business_unit_opportunity_close_activities: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		parentbusinessunitid: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		business_unit_parent_business_unit: DG.Microsoft.Dynamics.CRM.businessunit[];
		business_unit_dg_booking: DG.Microsoft.Dynamics.CRM.dg_booking[];
		business_unit_dg_plane: DG.Microsoft.Dynamics.CRM.dg_plane[];
		business_unit_dg_hotel: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		business_unit_dg_car: DG.Microsoft.Dynamics.CRM.dg_car[];
	}
	interface transactioncurrencySingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.transactioncurrency> {
		TransactionCurrency_Goal: DG.Microsoft.Dynamics.CRM.goal[];
		TransactionCurrency_Entitlement: DG.Microsoft.Dynamics.CRM.entitlement[];
		TransactionCurrency_Email: DG.Microsoft.Dynamics.CRM.email[];
		transactioncurrency_opportunityproduct: DG.Microsoft.Dynamics.CRM.opportunityproduct[];
		TransactionCurrency_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		TransactionCurrency_BusinessUnit: DG.Microsoft.Dynamics.CRM.businessunit[];
		TransactionCurrency_Connection: DG.Microsoft.Dynamics.CRM.connection[];
		TransactionCurrency_Incident: DG.Microsoft.Dynamics.CRM.incident[];
		transactioncurrency_productpricelevel: DG.Microsoft.Dynamics.CRM.productpricelevel[];
		TransactionCurrency_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		transactioncurrency_campaign: DG.Microsoft.Dynamics.CRM.campaign[];
		transactioncurrency_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		transactioncurrency_annualfiscalcalendar: DG.Microsoft.Dynamics.CRM.annualfiscalcalendar[];
		TransactionCurrency_PhoneCall: DG.Microsoft.Dynamics.CRM.phonecall[];
		TransactionCurrency_SalesLiterature: DG.Microsoft.Dynamics.CRM.salesliterature[];
		transactioncurrency_invoice: DG.Microsoft.Dynamics.CRM.invoice[];
		transactioncurrency_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		TransactionCurrency_MailMergeTemplate: DG.Microsoft.Dynamics.CRM.mailmergetemplate[];
		TransactionCurrency_ActivityPointer: DG.Microsoft.Dynamics.CRM.activitypointer[];
		transactioncurrency_salesorder: DG.Microsoft.Dynamics.CRM.salesorder[];
		TransactionCurrency_SystemUser: DG.Microsoft.Dynamics.CRM.systemuser[];
		TransactionCurrency_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		TransactionCurrency_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplate[];
		transactioncurrency_monthlyfiscalcalendar: DG.Microsoft.Dynamics.CRM.monthlyfiscalcalendar[];
		transactioncurrency_fixedmonthlyfiscalcalendar: DG.Microsoft.Dynamics.CRM.fixedmonthlyfiscalcalendar[];
		transactioncurrency_contract: DG.Microsoft.Dynamics.CRM.contract[];
		transactioncurrency_account: DG.Microsoft.Dynamics.CRM.account[];
		transactioncurrency_ProductAssociation: DG.Microsoft.Dynamics.CRM.productassociation[];
		transactioncurrency_quarterlyfiscalcalendar: DG.Microsoft.Dynamics.CRM.quarterlyfiscalcalendar[];
		TransactionCurrency_KnowledgeBaseRecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecord[];
		transactioncurrency_knowledgearticleviews: DG.Microsoft.Dynamics.CRM.knowledgearticleviews[];
		transactioncurrency_quote: DG.Microsoft.Dynamics.CRM.quote[];
		TransactionCurrency_CustomerAddress: DG.Microsoft.Dynamics.CRM.customeraddress[];
		TransactionCurrency_Fax: DG.Microsoft.Dynamics.CRM.fax[];
		transactioncurrency_position: DG.Microsoft.Dynamics.CRM.position[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		TransactionCurrency_Task: DG.Microsoft.Dynamics.CRM.task[];
		basecurrency_organization: DG.Microsoft.Dynamics.CRM.organization[];
		transactioncurrency_quotedetail: DG.Microsoft.Dynamics.CRM.quotedetail[];
		transactioncurrency_competitor: DG.Microsoft.Dynamics.CRM.competitor[];
		transactioncurrency_contractdetail: DG.Microsoft.Dynamics.CRM.contractdetail[];
		transactioncurrency_discount: DG.Microsoft.Dynamics.CRM.discount[];
		transactioncurrency_list: DG.Microsoft.Dynamics.CRM.list[];
		transactioncurrency_ProductSubstitute: DG.Microsoft.Dynamics.CRM.productsubstitute[];
		TransactionCurrency_SimilarityRule: DG.Microsoft.Dynamics.CRM.similarityrule[];
		transactioncurrency_opportunityclose: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		TransactionCurrency_entitlementtemplatechannel: DG.Microsoft.Dynamics.CRM.entitlementtemplatechannel[];
		TransactionCurrency_Team: DG.Microsoft.Dynamics.CRM.team[];
		TransactionCurrency_SLA: DG.Microsoft.Dynamics.CRM.sla[];
		TransactionCurrency_RecurringAppointmentMaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		TransactionCurrency_Equipment: DG.Microsoft.Dynamics.CRM.equipment[];
		transactioncurrency_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		TransactionCurrency_Theme: DG.Microsoft.Dynamics.CRM.theme[];
		transactioncurrency_knowledgearticleincident: DG.Microsoft.Dynamics.CRM.knowledgearticleincident[];
		TransactionCurrency_Letter: DG.Microsoft.Dynamics.CRM.letter[];
		TransactionCurrency_entitlementchannel: DG.Microsoft.Dynamics.CRM.entitlementchannel[];
		transactioncurrency_invoicedetail: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		transactioncurrency_pricelevel: DG.Microsoft.Dynamics.CRM.pricelevel[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		TransactionCurrency_CampaignResponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		transactioncurrency_lead: DG.Microsoft.Dynamics.CRM.lead[];
		TransactionCurrency_Queue: DG.Microsoft.Dynamics.CRM.queue[];
		transactioncurrency_SocialProfile: DG.Microsoft.Dynamics.CRM.socialprofile[];
		transactioncurrency_opportunity: DG.Microsoft.Dynamics.CRM.opportunity[];
		transactioncurrency_contact: DG.Microsoft.Dynamics.CRM.contact[];
		TransactionCurrency_Appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		transactioncurrency_salesorderdetail: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		transactioncurrency_product: DG.Microsoft.Dynamics.CRM.product[];
		TransactionCurrency_ServiceAppointment: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		TransactionCurrency_SharePointSite: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		transactioncurrency_discounttype: DG.Microsoft.Dynamics.CRM.discounttype[];
		TransactionCurrency_SharePointDocumentLocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		TransactionCurrency_SLAItem: DG.Microsoft.Dynamics.CRM.slaitem[];
		TransactionCurrency_KbArticle: DG.Microsoft.Dynamics.CRM.kbarticle[];
		TransactionCurrency_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		TransactionCurrency_ReportCategory: DG.Microsoft.Dynamics.CRM.reportcategory[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		transactioncurrency_semiannualfiscalcalendar: DG.Microsoft.Dynamics.CRM.semiannualfiscalcalendar[];
		transactioncurrency_usersettings: DG.Microsoft.Dynamics.CRM.usersettings[];
		TransactionCurrency_Territory: DG.Microsoft.Dynamics.CRM.territory[];
		TransactionCurrency_slakpiinstance: DG.Microsoft.Dynamics.CRM.slakpiinstance[];
		TransactionCurrency_officegraphdocument: DG.Microsoft.Dynamics.CRM.officegraphdocument[];
		TransactionCurrency_LeadAddress: DG.Microsoft.Dynamics.CRM.leadaddress[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface organizationSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.organization> {
		organization_ProductAssociation: DG.Microsoft.Dynamics.CRM.productassociation[];
		organization_theme: DG.Microsoft.Dynamics.CRM.theme[];
		organization_metric: DG.Microsoft.Dynamics.CRM.metric[];
		organization_position: DG.Microsoft.Dynamics.CRM.position[];
		organization_sites: DG.Microsoft.Dynamics.CRM.site[];
		organization_officegraphdocument: DG.Microsoft.Dynamics.CRM.officegraphdocument[];
		organization_KnowledgeBaseRecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecord[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organization_resource_groups: DG.Microsoft.Dynamics.CRM.resourcegroup[];
		organization_ProductSubstitute: DG.Microsoft.Dynamics.CRM.productsubstitute[];
		organization_resource_specs: DG.Microsoft.Dynamics.CRM.resourcespec[];
		organization_sdkmessagefilter: DG.Microsoft.Dynamics.CRM.sdkmessagefilter[];
		webresource_organization: DG.Microsoft.Dynamics.CRM.webresource[];
		organization_post: DG.Microsoft.Dynamics.CRM.post[];
		organization_PostComment: DG.Microsoft.Dynamics.CRM.postcomment[];
		organization_postlike: DG.Microsoft.Dynamics.CRM.postlike[];
		organization_importjob: DG.Microsoft.Dynamics.CRM.importjob[];
		organization_queues: DG.Microsoft.Dynamics.CRM.queue[];
		businessclosurecalendarid_calendar: DG.Microsoft.Dynamics.CRM.calendarSingle;
		organization_pluginassembly: DG.Microsoft.Dynamics.CRM.pluginassembly[];
		organization_textanalyticsentitymapping: DG.Microsoft.Dynamics.CRM.textanalyticsentitymapping[];
		lk_fieldsecurityprofile_organizationid: DG.Microsoft.Dynamics.CRM.fieldsecurityprofile[];
		organization_recommendationmodelversionhistory: DG.Microsoft.Dynamics.CRM.recommendationmodelversionhistory[];
		organization_similarityrule: DG.Microsoft.Dynamics.CRM.similarityrule[];
		organization_services: DG.Microsoft.Dynamics.CRM.service[];
		entitlementtemplatechannel_organization: DG.Microsoft.Dynamics.CRM.entitlementtemplatechannel[];
		organization_contract_templates: DG.Microsoft.Dynamics.CRM.contracttemplate[];
		organization_saved_query_visualizations: DG.Microsoft.Dynamics.CRM.savedqueryvisualization[];
		organization_system_users: DG.Microsoft.Dynamics.CRM.systemuser[];
		organization_recommendationmodelversion: DG.Microsoft.Dynamics.CRM.recommendationmodelversion[];
		organization_publisher: DG.Microsoft.Dynamics.CRM.publisher[];
		organization_plugintype: DG.Microsoft.Dynamics.CRM.plugintype[];
		lk_dataperformance_organizationid: DG.Microsoft.Dynamics.CRM.dataperformance[];
		organization_serviceendpoint: DG.Microsoft.Dynamics.CRM.serviceendpoint[];
		organization_sdkmessageprocessingstep: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		basecurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		Organization_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		entitlementtemplate_organization: DG.Microsoft.Dynamics.CRM.entitlementtemplate[];
		organization_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofile[];
		organization_saved_queries: DG.Microsoft.Dynamics.CRM.savedquery[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organization_teams: DG.Microsoft.Dynamics.CRM.team[];
		defaultmobileofflineprofileid: DG.Microsoft.Dynamics.CRM.mobileofflineprofileSingle;
		lk_documenttemplatebase_organization: DG.Microsoft.Dynamics.CRM.documenttemplate[];
		organization_resources: DG.Microsoft.Dynamics.CRM.resource[];
		organization_queueitems: DG.Microsoft.Dynamics.CRM.queueitem[];
		organization_complexcontrols: DG.Microsoft.Dynamics.CRM.complexcontrol[];
		organization_solution: DG.Microsoft.Dynamics.CRM.solution[];
		organization_business_units: DG.Microsoft.Dynamics.CRM.businessunit[];
		organization_topicmodelexecutionhistory: DG.Microsoft.Dynamics.CRM.topicmodelexecutionhistory[];
		MobileOfflineProfile_organization: DG.Microsoft.Dynamics.CRM.mobileofflineprofile[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organization_equipment: DG.Microsoft.Dynamics.CRM.equipment[];
		organization_discount_types: DG.Microsoft.Dynamics.CRM.discounttype[];
		organization_sales_literature: DG.Microsoft.Dynamics.CRM.salesliterature[];
		organization_sdkmessageprocessingstepimage: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepimage[];
		customcontrol_organization: DG.Microsoft.Dynamics.CRM.customcontrol[];
		organization_sdkmessageprocessingstepsecureconfig: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepsecureconfig[];
		organization_roles: DG.Microsoft.Dynamics.CRM.role[];
		MobileOfflineProfileItemAssociation_organization: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitemassociation[];
		organization_competitors: DG.Microsoft.Dynamics.CRM.competitor[];
		organization_recommendationmodelmapping: DG.Microsoft.Dynamics.CRM.recommendationmodelmapping[];
		Organization_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		organization_topicmodelconfiguration: DG.Microsoft.Dynamics.CRM.topicmodelconfiguration[];
		organization_tracelog: DG.Microsoft.Dynamics.CRM.tracelog[];
		organization_territories: DG.Microsoft.Dynamics.CRM.territory[];
		organization_systemforms: DG.Microsoft.Dynamics.CRM.systemform[];
		organization_uof_schedules: DG.Microsoft.Dynamics.CRM.uomschedule[];
		organization_business_unit_news_articles: DG.Microsoft.Dynamics.CRM.businessunitnewsarticle[];
		organization_kb_articles: DG.Microsoft.Dynamics.CRM.kbarticle[];
		organization_topicmodel: DG.Microsoft.Dynamics.CRM.topicmodel[];
		organization_sdkmessage: DG.Microsoft.Dynamics.CRM.sdkmessage[];
		MobileOfflineProfileItem_organization: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitem[];
		defaultemailserverprofileid: DG.Microsoft.Dynamics.CRM.emailserverprofileSingle;
		organization_kb_article_templates: DG.Microsoft.Dynamics.CRM.kbarticletemplate[];
		customcontrolresource_organization: DG.Microsoft.Dynamics.CRM.customcontrolresource[];
		organization_mailbox: DG.Microsoft.Dynamics.CRM.mailbox[];
		organization_calendars: DG.Microsoft.Dynamics.CRM.calendar[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organization_azureserviceconnection: DG.Microsoft.Dynamics.CRM.azureserviceconnection[];
		organization_webwizard: DG.Microsoft.Dynamics.CRM.webwizard[];
		organization_connection_roles: DG.Microsoft.Dynamics.CRM.connectionrole[];
		customcontroldefaultconfig_organization: DG.Microsoft.Dynamics.CRM.customcontroldefaultconfig[];
		organization_knowledgesearchmodel: DG.Microsoft.Dynamics.CRM.knowledgesearchmodel[];
		organization_transactioncurrencies: DG.Microsoft.Dynamics.CRM.transactioncurrency[];
		organization_price_levels: DG.Microsoft.Dynamics.CRM.pricelevel[];
		acknowledgementtemplateid: DG.Microsoft.Dynamics.CRM.templateSingle;
		entitlementchannel_organization: DG.Microsoft.Dynamics.CRM.entitlementchannel[];
		organization_constraint_based_groups: DG.Microsoft.Dynamics.CRM.constraintbasedgroup[];
		organization_recommendationmodel: DG.Microsoft.Dynamics.CRM.recommendationmodel[];
		languagelocale_organization: DG.Microsoft.Dynamics.CRM.languagelocale[];
		organization_products: DG.Microsoft.Dynamics.CRM.product[];
		organization_subjects: DG.Microsoft.Dynamics.CRM.subject[];
		organization_dg_country: DG.Microsoft.Dynamics.CRM.dg_country[];
	}
	interface calendarSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.calendar> {
		calendar_calendar_rules: DG.Microsoft.Dynamics.CRM.calendarrule[];
		calendar_equipment: DG.Microsoft.Dynamics.CRM.equipment[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Calendar_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		slabase_businesshoursid: DG.Microsoft.Dynamics.CRM.sla[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		calendar_organization: DG.Microsoft.Dynamics.CRM.organization[];
		businessunitid: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		BusinessUnit_Calendar: DG.Microsoft.Dynamics.CRM.businessunit[];
		Calendar_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		holidayschedulecalendarid: DG.Microsoft.Dynamics.CRM.calendarSingle;
		calendar_customercalendar_holidaycalendar: DG.Microsoft.Dynamics.CRM.calendar[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		calendar_system_users: DG.Microsoft.Dynamics.CRM.systemuser[];
		calendar_services: DG.Microsoft.Dynamics.CRM.service[];
		Calendar_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		inner_calendar_calendar_rules: DG.Microsoft.Dynamics.CRM.calendarrule[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
	}
	interface mobileofflineprofileSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.mobileofflineprofile> {
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		DefaultMobileOfflineProfile_Organization: DG.Microsoft.Dynamics.CRM.organization[];
		MobileOfflineProfile_MobileOfflineProfileItem: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitem[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		MobileOfflineProfile_SystemUser: DG.Microsoft.Dynamics.CRM.systemuser[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface emailserverprofileSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.emailserverprofile> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		emailserverprofile_mailbox: DG.Microsoft.Dynamics.CRM.mailbox[];
		emailserverprofile_asyncoperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		emailserverprofile_bulkdeletefailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		EmailServerProfile_Organization: DG.Microsoft.Dynamics.CRM.organization[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		tracelog_EmailServerProfile: DG.Microsoft.Dynamics.CRM.tracelog[];
		EmailServerProfile_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		emailserverprofile_duplicatematchingrecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		emailserverprofile_duplicatebaserecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
	}
	interface templateSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.template> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Template_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Template_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		template_activity_mime_attachments: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Template_Organization: DG.Microsoft.Dynamics.CRM.organization[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface languagelocaleSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.languagelocale> {
		knowledgearticle_languagelocaleid: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
	}
	interface subjectSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.subject> {
		subject_sales_literature: DG.Microsoft.Dynamics.CRM.salesliterature[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		parentsubject: DG.Microsoft.Dynamics.CRM.subjectSingle;
		subject_parent_subject: DG.Microsoft.Dynamics.CRM.subject[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		subject_incidents: DG.Microsoft.Dynamics.CRM.incident[];
		Subject_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		subject_kb_articles: DG.Microsoft.Dynamics.CRM.kbarticle[];
		subject_products: DG.Microsoft.Dynamics.CRM.product[];
		subject_knowledgearticles: DG.Microsoft.Dynamics.CRM.knowledgearticle[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		Subject_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
	}
	interface teamtemplateSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.teamtemplate> {
		teamtemplate_Teams: DG.Microsoft.Dynamics.CRM.team[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface queueSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.queue> {
		defaultmailbox: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		Queue_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		businessunitid: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		queue_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		mailbox_regarding_queue: DG.Microsoft.Dynamics.CRM.mailbox[];
		queue_team: DG.Microsoft.Dynamics.CRM.team[];
		queue_entries: DG.Microsoft.Dynamics.CRM.queueitem[];
		queue_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		Queue_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		primaryuserid: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Queue_Email_EmailSender: DG.Microsoft.Dynamics.CRM.email[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		queuemembership_association: DG.Microsoft.Dynamics.CRM.systemuser[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		queue_system_user: DG.Microsoft.Dynamics.CRM.systemuser[];
		queue_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Queue_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		Queue_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
	}
	interface opportunitySingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.opportunity> {
		opportunitycompetitors_association: DG.Microsoft.Dynamics.CRM.competitor[];
		campaignid: DG.Microsoft.Dynamics.CRM.campaignSingle;
		parentcontactid: DG.Microsoft.Dynamics.CRM.contactSingle;
		Opportunity_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		Opportunity_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		originatingleadid: DG.Microsoft.Dynamics.CRM.leadSingle;
		opportunity_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		opportunity_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		Opportunity_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		product_opportunities: DG.Microsoft.Dynamics.CRM.opportunityproduct[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		Opportunity_Emails: DG.Microsoft.Dynamics.CRM.email[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		Opportunity_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		Opportunity_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		Opportunity_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		customerid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		opportunity_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		Opportunity_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		parentaccountid: DG.Microsoft.Dynamics.CRM.accountSingle;
		opportunity_invoices: DG.Microsoft.Dynamics.CRM.invoice[];
		Opportunity_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		Opportunity_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		Opportunity_SharepointDocumentLocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		opportunity_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		Opportunity_OpportunityClose: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		opportunity_Teams: DG.Microsoft.Dynamics.CRM.team[];
		CreatedOpportunity_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Opportunity_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		Opportunity_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		Opportunity_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		lead_qualifying_opportunity: DG.Microsoft.Dynamics.CRM.lead[];
		opportunity_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		pricelevelid: DG.Microsoft.Dynamics.CRM.pricelevelSingle;
		opportunity_sales_orders: DG.Microsoft.Dynamics.CRM.salesorder[];
		Opportunity_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		customerid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		opportunity_quotes: DG.Microsoft.Dynamics.CRM.quote[];
		Opportunity_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
	}
	interface campaignSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.campaign> {
		campaignlist_association: DG.Microsoft.Dynamics.CRM.list[];
		campaigncampaign_association: DG.Microsoft.Dynamics.CRM.campaign[];
		campaigncampaign_association_referenced: DG.Microsoft.Dynamics.CRM.campaign[];
		campaignsalesliterature_association: DG.Microsoft.Dynamics.CRM.salesliterature[];
		campaignproduct_association: DG.Microsoft.Dynamics.CRM.product[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		campaign_opportunities: DG.Microsoft.Dynamics.CRM.opportunity[];
		Campaign_CampaignActivities: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		Campaign_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		Campaign_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		Campaign_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		Campaign_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		campaign_orders: DG.Microsoft.Dynamics.CRM.salesorder[];
		Campaign_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		Campaign_CampaignResponses: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		campaign_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		Campaign_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Campaign_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		Campaign_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		Campaign_Emails: DG.Microsoft.Dynamics.CRM.email[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Campaign_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		Campaign_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		Campaign_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		Campaign_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		campaign_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		Campaign_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		campaign_leads: DG.Microsoft.Dynamics.CRM.lead[];
		pricelistid: DG.Microsoft.Dynamics.CRM.pricelevelSingle;
		campaign_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		campaign_quotes: DG.Microsoft.Dynamics.CRM.quote[];
	}
	interface pricelevelSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.pricelevel> {
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		pricelevel_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		price_level_products: DG.Microsoft.Dynamics.CRM.product[];
		price_level_quotes: DG.Microsoft.Dynamics.CRM.quote[];
		price_level_product_price_levels: DG.Microsoft.Dynamics.CRM.productpricelevel[];
		price_level_orders: DG.Microsoft.Dynamics.CRM.salesorder[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		price_level_opportunties: DG.Microsoft.Dynamics.CRM.opportunity[];
		price_level_invoices: DG.Microsoft.Dynamics.CRM.invoice[];
		PriceLevel_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		price_level_accounts: DG.Microsoft.Dynamics.CRM.account[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		PriceList_Campaigns: DG.Microsoft.Dynamics.CRM.campaign[];
		price_level_contacts: DG.Microsoft.Dynamics.CRM.contact[];
		PriceLevel_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		pricelevel_connections1: DG.Microsoft.Dynamics.CRM.connection[];
	}
	interface contactSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.contact> {
		contactquotes_association: DG.Microsoft.Dynamics.CRM.quote[];
		listcontact_association: DG.Microsoft.Dynamics.CRM.list[];
		contactinvoices_association: DG.Microsoft.Dynamics.CRM.invoice[];
		contactorders_association: DG.Microsoft.Dynamics.CRM.salesorder[];
		servicecontractcontacts_association: DG.Microsoft.Dynamics.CRM.contract[];
		contactleads_association: DG.Microsoft.Dynamics.CRM.lead[];
		contact_entitlement_ContactId: DG.Microsoft.Dynamics.CRM.entitlement[];
		contact_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		opportunity_parent_contact: DG.Microsoft.Dynamics.CRM.opportunity[];
		Contact_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		Contact_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		contact_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		contact_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		socialactivity_postauthor_contacts: DG.Microsoft.Dynamics.CRM.socialactivity[];
		invoice_customer_contacts: DG.Microsoft.Dynamics.CRM.invoice[];
		quote_customer_contacts: DG.Microsoft.Dynamics.CRM.quote[];
		CreatedContact_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		Contact_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		Contact_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		entitlementcontacts_association: DG.Microsoft.Dynamics.CRM.entitlement[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		lead_customer_contacts: DG.Microsoft.Dynamics.CRM.lead[];
		Contact_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		masterid: DG.Microsoft.Dynamics.CRM.contactSingle;
		contact_master_contact: DG.Microsoft.Dynamics.CRM.contact[];
		originatingleadid: DG.Microsoft.Dynamics.CRM.leadSingle;
		Contact_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Contact_Email_EmailSender: DG.Microsoft.Dynamics.CRM.email[];
		account_primary_contact: DG.Microsoft.Dynamics.CRM.account[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		contract_customer_contacts: DG.Microsoft.Dynamics.CRM.contract[];
		contract_billingcustomer_contacts: DG.Microsoft.Dynamics.CRM.contract[];
		contact_entitlement_Customer: DG.Microsoft.Dynamics.CRM.entitlement[];
		socialactivity_postauthoraccount_contacts: DG.Microsoft.Dynamics.CRM.socialactivity[];
		Socialprofile_customer_contacts: DG.Microsoft.Dynamics.CRM.socialprofile[];
		Contact_CustomerAddress: DG.Microsoft.Dynamics.CRM.customeraddress[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		incident_customer_contacts: DG.Microsoft.Dynamics.CRM.incident[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		parentcustomerid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		Contact_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		order_customer_contacts: DG.Microsoft.Dynamics.CRM.salesorder[];
		preferredsystemuserid: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Contact_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		contact_as_primary_contact: DG.Microsoft.Dynamics.CRM.incident[];
		preferredserviceid: DG.Microsoft.Dynamics.CRM.serviceSingle;
		contact_as_responsible_contact: DG.Microsoft.Dynamics.CRM.incident[];
		Contact_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		lead_parent_contact: DG.Microsoft.Dynamics.CRM.lead[];
		preferredequipmentid: DG.Microsoft.Dynamics.CRM.equipmentSingle;
		Contact_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		SourceContact_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		Contact_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		Contact_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		parentcustomerid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		contact_customer_contacts: DG.Microsoft.Dynamics.CRM.contact[];
		contact_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		Contact_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		contractlineitem_customer_contacts: DG.Microsoft.Dynamics.CRM.contractdetail[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Contact_Emails: DG.Microsoft.Dynamics.CRM.email[];
		opportunity_customer_contacts: DG.Microsoft.Dynamics.CRM.opportunity[];
		defaultpricelevelid: DG.Microsoft.Dynamics.CRM.pricelevelSingle;
		contact_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		Contact_Letters: DG.Microsoft.Dynamics.CRM.letter[];
	}
	interface leadSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.lead> {
		leadcompetitors_association: DG.Microsoft.Dynamics.CRM.competitor[];
		accountleads_association: DG.Microsoft.Dynamics.CRM.account[];
		listlead_association: DG.Microsoft.Dynamics.CRM.list[];
		leadproduct_association: DG.Microsoft.Dynamics.CRM.product[];
		contactleads_association: DG.Microsoft.Dynamics.CRM.contact[];
		lead_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		originatingcaseid: DG.Microsoft.Dynamics.CRM.incidentSingle;
		Lead_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		Lead_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		customerid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		opportunity_originating_lead: DG.Microsoft.Dynamics.CRM.opportunity[];
		lead_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		lead_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		Lead_Emails: DG.Microsoft.Dynamics.CRM.email[];
		Lead_Email_EmailSender: DG.Microsoft.Dynamics.CRM.email[];
		Lead_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		masterid: DG.Microsoft.Dynamics.CRM.leadSingle;
		lead_master_lead: DG.Microsoft.Dynamics.CRM.lead[];
		Lead_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Lead_SharepointDocumentLocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Lead_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		customerid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		Lead_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		contact_originating_lead: DG.Microsoft.Dynamics.CRM.contact[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Lead_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		lead_addresses: DG.Microsoft.Dynamics.CRM.leadaddress[];
		account_originating_lead: DG.Microsoft.Dynamics.CRM.account[];
		Lead_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		CreatedLead_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		Lead_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Lead_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		relatedobjectid: DG.Microsoft.Dynamics.CRM.campaignresponseSingle;
		lead_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		Lead_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		parentcontactid: DG.Microsoft.Dynamics.CRM.contactSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		qualifyingopportunityid: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		Lead_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		lead_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		campaignid: DG.Microsoft.Dynamics.CRM.campaignSingle;
		parentaccountid: DG.Microsoft.Dynamics.CRM.accountSingle;
		Lead_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		Lead_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		SourceLead_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
	}
	interface incidentSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.incident> {
		incident_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		incident_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		masterid: DG.Microsoft.Dynamics.CRM.incidentSingle;
		incident_master_incident: DG.Microsoft.Dynamics.CRM.incident[];
		OriginatingCase_Lead: DG.Microsoft.Dynamics.CRM.lead[];
		parentcaseid: DG.Microsoft.Dynamics.CRM.incidentSingle;
		incident_parent_incident: DG.Microsoft.Dynamics.CRM.incident[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		incident_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		slainvokedid_sla: DG.Microsoft.Dynamics.CRM.slaSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		Incident_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		firstresponsebykpiid: DG.Microsoft.Dynamics.CRM.slakpiinstanceSingle;
		slaid_sla: DG.Microsoft.Dynamics.CRM.slaSingle;
		productid: DG.Microsoft.Dynamics.CRM.productSingle;
		slakpiinstance_incident: DG.Microsoft.Dynamics.CRM.slakpiinstance[];
		Incident_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		incident_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		Incident_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		contractdetailid: DG.Microsoft.Dynamics.CRM.contractdetailSingle;
		existingcase: DG.Microsoft.Dynamics.CRM.incidentSingle;
		incident_existingcase: DG.Microsoft.Dynamics.CRM.incident[];
		Incident_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		KnowledgeBaseRecord_Incident: DG.Microsoft.Dynamics.CRM.knowledgebaserecord[];
		incident_topic: DG.Microsoft.Dynamics.CRM.topic[];
		Incident_IncidentResolutions: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		Incident_Emails: DG.Microsoft.Dynamics.CRM.email[];
		Incident_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Incident_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		Incident_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		incident_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		customerid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		subjectid: DG.Microsoft.Dynamics.CRM.subjectSingle;
		entitlementid: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		Incident_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		Incident_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		socialprofileid: DG.Microsoft.Dynamics.CRM.socialprofileSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Incident_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		Incident_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		customerid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		resolvebykpiid: DG.Microsoft.Dynamics.CRM.slakpiinstanceSingle;
		primarycontactid: DG.Microsoft.Dynamics.CRM.contactSingle;
		responsiblecontactid: DG.Microsoft.Dynamics.CRM.contactSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		Incident_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Incident_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		contractid: DG.Microsoft.Dynamics.CRM.contractSingle;
		knowledgearticle_incidents: DG.Microsoft.Dynamics.CRM.knowledgearticleincident[];
		Incident_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		Incident_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		kbarticleid: DG.Microsoft.Dynamics.CRM.kbarticleSingle;
	}
	interface slaSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.sla> {
		workflowid: DG.Microsoft.Dynamics.CRM.workflowSingle;
		sla_cases: DG.Microsoft.Dynamics.CRM.incident[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		businesshoursid: DG.Microsoft.Dynamics.CRM.calendarSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		manualsla_cases: DG.Microsoft.Dynamics.CRM.incident[];
		sla_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		sla_entitlement: DG.Microsoft.Dynamics.CRM.entitlement[];
		sla_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplate[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		slabase_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		slabase_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		sla_slaitem_slaId: DG.Microsoft.Dynamics.CRM.slaitem[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
	}
	interface workflowSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.workflow> {
		slabase_workflowid: DG.Microsoft.Dynamics.CRM.sla[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		lk_asyncoperation_workflowactivationid: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		parentworkflowid: DG.Microsoft.Dynamics.CRM.workflowSingle;
		workflow_parent_workflow: DG.Microsoft.Dynamics.CRM.workflow[];
		slaitembase_workflowid: DG.Microsoft.Dynamics.CRM.slaitem[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		Workflow_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		activeworkflowid: DG.Microsoft.Dynamics.CRM.workflowSingle;
		workflow_active_workflow: DG.Microsoft.Dynamics.CRM.workflow[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface slakpiinstanceSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.slakpiinstance> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		slakpiinstance_incident_firstresponsebykpi: DG.Microsoft.Dynamics.CRM.incident[];
		regarding: DG.Microsoft.Dynamics.CRM.incidentSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		slakpiinstance_incident_resolvebykpi: DG.Microsoft.Dynamics.CRM.incident[];
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
	}
	interface productSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.product> {
		campaignproduct_association: DG.Microsoft.Dynamics.CRM.campaign[];
		leadproduct_association: DG.Microsoft.Dynamics.CRM.lead[];
		competitorproduct_association: DG.Microsoft.Dynamics.CRM.competitor[];
		productsalesliterature_association: DG.Microsoft.Dynamics.CRM.salesliterature[];
		Product_ProductAssociation_AssocProd: DG.Microsoft.Dynamics.CRM.productassociation[];
		product_ProductSubstitute_productid: DG.Microsoft.Dynamics.CRM.productsubstitute[];
		product_ProductSubstitute_substitutedproductid: DG.Microsoft.Dynamics.CRM.productsubstitute[];
		product_entitlement_association: DG.Microsoft.Dynamics.CRM.entitlement[];
		opportunity_products: DG.Microsoft.Dynamics.CRM.opportunityproduct[];
		Product_SharepointDocumentLocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		product_incidents: DG.Microsoft.Dynamics.CRM.incident[];
		product_quote_details: DG.Microsoft.Dynamics.CRM.quotedetail[];
		defaultuomscheduleid: DG.Microsoft.Dynamics.CRM.uomscheduleSingle;
		Product_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		product_entitlementtemplate_association: DG.Microsoft.Dynamics.CRM.entitlementtemplate[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		product_invoice_details: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		Product_ProductAssociation_Prod: DG.Microsoft.Dynamics.CRM.productassociation[];
		defaultuomid: DG.Microsoft.Dynamics.CRM.uomSingle;
		product_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		pricelevelid: DG.Microsoft.Dynamics.CRM.pricelevelSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Product_RecommendationCache_ItemId: DG.Microsoft.Dynamics.CRM.recommendationcache[];
		product_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		Product_RecommendationCache_RecommendedItemId: DG.Microsoft.Dynamics.CRM.recommendationcache[];
		Product_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		parentproductid: DG.Microsoft.Dynamics.CRM.productSingle;
		product_parent_product: DG.Microsoft.Dynamics.CRM.product[];
		product_contract_line_items: DG.Microsoft.Dynamics.CRM.contractdetail[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		product_order_details: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		product_price_levels: DG.Microsoft.Dynamics.CRM.productpricelevel[];
		subjectid: DG.Microsoft.Dynamics.CRM.subjectSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Product_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface uomscheduleSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.uomschedule> {
		contract_detail_unit_of_measure_schedule: DG.Microsoft.Dynamics.CRM.contractdetail[];
		unit_of_measurement_schedule_products: DG.Microsoft.Dynamics.CRM.product[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		unit_of_measure_schedule_conversions: DG.Microsoft.Dynamics.CRM.uom[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		UoMSchedule_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		UoMSchedule_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		unit_of_measure_schedule_product_price_level: DG.Microsoft.Dynamics.CRM.productpricelevel[];
	}
	interface uomSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.uom> {
		unit_of_measurement_product_price_levels: DG.Microsoft.Dynamics.CRM.productpricelevel[];
		unit_of_measurement_invoice_details: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		uomscheduleid: DG.Microsoft.Dynamics.CRM.uomscheduleSingle;
		unit_of_measurement_quote_details: DG.Microsoft.Dynamics.CRM.quotedetail[];
		unit_of_measurement_products: DG.Microsoft.Dynamics.CRM.product[];
		unit_of_measurement_order_details: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		baseuom: DG.Microsoft.Dynamics.CRM.uomSingle;
		unit_of_measurement_base_unit: DG.Microsoft.Dynamics.CRM.uom[];
		unit_of_measurement_productassociation: DG.Microsoft.Dynamics.CRM.productassociation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		unit_of_measurement_contract_line_items: DG.Microsoft.Dynamics.CRM.contractdetail[];
		unit_of_measurement_opportunity_products: DG.Microsoft.Dynamics.CRM.opportunityproduct[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		UoM_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		UoM_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
	}
	interface contractdetailSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.contractdetail> {
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ContractDetail_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		uomscheduleid: DG.Microsoft.Dynamics.CRM.uomscheduleSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		contract_detail_cases: DG.Microsoft.Dynamics.CRM.incident[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		serviceaddress: DG.Microsoft.Dynamics.CRM.customeraddressSingle;
		contractid: DG.Microsoft.Dynamics.CRM.contractSingle;
		ContractDetail_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		ContractDetail_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		uomid: DG.Microsoft.Dynamics.CRM.uomSingle;
		customerid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		productid: DG.Microsoft.Dynamics.CRM.productSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		customerid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
	}
	interface customeraddressSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.customeraddress> {
		CustomerAddress_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		customer_address_contracts_as_service_address: DG.Microsoft.Dynamics.CRM.contract[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		parentid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		customer_address_contract_line_items: DG.Microsoft.Dynamics.CRM.contractdetail[];
		parentid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		customer_address_contracts_as_billing_address: DG.Microsoft.Dynamics.CRM.contract[];
		CustomerAddress_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
	}
	interface contractSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.contract> {
		servicecontractcontacts_association: DG.Microsoft.Dynamics.CRM.contact[];
		billingcustomerid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Contract_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		serviceaddress: DG.Microsoft.Dynamics.CRM.customeraddressSingle;
		Contract_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		contract_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		contract_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		contract_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		Contract_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Contract_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		customerid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		billingcustomerid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		Contract_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		Contract_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		Contract_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		contract_line_items: DG.Microsoft.Dynamics.CRM.contractdetail[];
		originatingcontract: DG.Microsoft.Dynamics.CRM.contractSingle;
		contract_originating_contract: DG.Microsoft.Dynamics.CRM.contract[];
		Contract_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Contract_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		billtoaddress: DG.Microsoft.Dynamics.CRM.customeraddressSingle;
		Contract_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		Contract_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		Contract_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Contract_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		Contract_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		Contract_Emails: DG.Microsoft.Dynamics.CRM.email[];
		customerid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		contract_cases: DG.Microsoft.Dynamics.CRM.incident[];
		contracttemplateid: DG.Microsoft.Dynamics.CRM.contracttemplateSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
	}
	interface contracttemplateSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.contracttemplate> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ContractTemplate_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		ContractTemplate_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		contract_template_contracts: DG.Microsoft.Dynamics.CRM.contract[];
	}
	interface entitlementSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.entitlement> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		entitlement_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		entitlement_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		entitlement_Emails: DG.Microsoft.Dynamics.CRM.email[];
		entitlement_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		entitlement_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		entitlement_PhoneCalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		entitlement_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		entitlement_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		entitlement_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		entitlement_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		entitlement_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		entitlement_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		entitlement_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		entitlement_Annotations: DG.Microsoft.Dynamics.CRM.annotation[];
		entitlement_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		entitlement_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		customerid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		entitlement_entitlementchannel_EntitlementId: DG.Microsoft.Dynamics.CRM.entitlementchannel[];
		product_entitlement_association: DG.Microsoft.Dynamics.CRM.product[];
		entitlementtemplateid: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		accountid: DG.Microsoft.Dynamics.CRM.accountSingle;
		contactid: DG.Microsoft.Dynamics.CRM.contactSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		entitlement_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		slaid: DG.Microsoft.Dynamics.CRM.slaSingle;
		entitlementcontacts_association: DG.Microsoft.Dynamics.CRM.contact[];
		customerid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		entitlement_cases: DG.Microsoft.Dynamics.CRM.incident[];
	}
	interface entitlementtemplateSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.entitlementtemplate> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		entitlementtemplate_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		entitlementtemplate_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		entitlementtemplate_Emails: DG.Microsoft.Dynamics.CRM.email[];
		entitlementtemplate_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		entitlementtemplate_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		entitlementtemplate_PhoneCalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		entitlementtemplate_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		entitlementtemplate_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		entitlementtemplate_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		entitlementtemplate_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		entitlementtemplate_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		entitlementtemplate_Annotations: DG.Microsoft.Dynamics.CRM.annotation[];
		entitlementtemplate_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		entitlementtemplate_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		entitlementtemplateid_RelationShip: DG.Microsoft.Dynamics.CRM.entitlement[];
		product_entitlementtemplate_association: DG.Microsoft.Dynamics.CRM.product[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		slaid: DG.Microsoft.Dynamics.CRM.slaSingle;
		entitlementtemplate_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		entitlementtemplate_entitlementchannel_entitlementtemplateid: DG.Microsoft.Dynamics.CRM.entitlementtemplatechannel[];
	}
	interface socialprofileSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.socialprofile> {
		SocialProfile_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		SocialProfile_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		socialprofile_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		socialprofile_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		customerid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		Socialprofile_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		socialprofile_cases: DG.Microsoft.Dynamics.CRM.incident[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		SocialProfile_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		customerid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface kbarticleSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.kbarticle> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		KbArticle_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		KbArticle_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		KbArticle_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		KbArticle_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		kbarticletemplateid: DG.Microsoft.Dynamics.CRM.kbarticletemplateSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		KbArticle_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		KbArticle_SharepointDocumentLocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		kbarticle_comments: DG.Microsoft.Dynamics.CRM.kbarticlecomment[];
		subjectid: DG.Microsoft.Dynamics.CRM.subjectSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		kbarticle_incidents: DG.Microsoft.Dynamics.CRM.incident[];
	}
	interface kbarticletemplateSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.kbarticletemplate> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		KbArticleTemplate_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		kb_article_template_kb_articles: DG.Microsoft.Dynamics.CRM.kbarticle[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		KbArticleTemplate_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface campaignresponseSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.campaignresponse> {
		originatingactivityid_fax: DG.Microsoft.Dynamics.CRM.faxSingle;
		CampaignResponse_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		originatingactivityid_letter: DG.Microsoft.Dynamics.CRM.letterSingle;
		originatingactivityid_phonecall: DG.Microsoft.Dynamics.CRM.phonecallSingle;
		regardingobjectid_campaign_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignSingle;
		CampaignResponse_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		regardingobjectid_bulkoperation_campaignresponse: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		modifiedonbehalfby_campaignresponse: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		campaignresponse_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		owningteam_campaignresponse: DG.Microsoft.Dynamics.CRM.teamSingle;
		owninguser_campaignresponse: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		CampaignResponse_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		originatingactivityid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmasterSingle;
		originatingactivityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		CampaignResponse_Lead: DG.Microsoft.Dynamics.CRM.lead[];
		CampaignResponse_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		owningbusinessunit_campaignresponse: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		createdby_campaignresponse: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		transactioncurrencyid_campaignresponse: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		CampaignResponse_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		originatingactivityid_email: DG.Microsoft.Dynamics.CRM.emailSingle;
		CampaignResponse_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		createdonbehalfby_campaignresponse: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		originatingactivityid_appointment: DG.Microsoft.Dynamics.CRM.appointmentSingle;
		modifiedby_campaignresponse: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		CreatedActivity_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		activity_pointer_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		activity_pointer_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		activity_pointer_email: DG.Microsoft.Dynamics.CRM.email[];
		sendermailboxid: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		activity_pointer_quote_close: DG.Microsoft.Dynamics.CRM.quoteclose[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		ActivityPointer_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		ActivityPointer_CampaignActivityItems: DG.Microsoft.Dynamics.CRM.campaignactivityitem[];
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		activity_pointer_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_service_appointment: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		activity_pointer_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		activity_pointer_fax: DG.Microsoft.Dynamics.CRM.fax[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation_logs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		serviceid: DG.Microsoft.Dynamics.CRM.serviceSingle;
		activity_pointer_task: DG.Microsoft.Dynamics.CRM.task[];
		activity_pointer_opportunity_close: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		activity_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		activity_pointer_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		activity_pointer_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		activity_pointer_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		activity_pointer_order_close: DG.Microsoft.Dynamics.CRM.orderclose[];
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		activity_pointer_incident_resolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		activity_pointer_letter: DG.Microsoft.Dynamics.CRM.letter[];
		activitypointer_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		ActivityPointer_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		activitypointer_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		ActivityPointer_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		activitypointer_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
	}
	interface faxSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.fax> {
		regardingobjectid_entitlement_fax: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate_fax: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_knowledgebaserecord_fax: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		Fax_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		fax_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		regardingobjectid_opportunity_fax: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		owningbusinessunit_fax: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_account_fax: DG.Microsoft.Dynamics.CRM.accountSingle;
		Fax_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		serviceid_fax: DG.Microsoft.Dynamics.CRM.serviceSingle;
		createdby_fax: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby_fax: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_lead_fax: DG.Microsoft.Dynamics.CRM.leadSingle;
		transactioncurrencyid_fax: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		owningteam_fax: DG.Microsoft.Dynamics.CRM.teamSingle;
		Fax_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		regardingobjectid_knowledgearticle_fax: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		owninguser_fax: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Fax_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		fax_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		modifiedby_fax: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby_fax: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		fax_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		regardingobjectid_campaignactivity_fax: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		regardingobjectid_bulkoperation_fax: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		regardingobjectid_invoice_fax: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		regardingobjectid_contact_fax: DG.Microsoft.Dynamics.CRM.contactSingle;
		regardingobjectid_quote_fax: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_campaign_fax: DG.Microsoft.Dynamics.CRM.campaignSingle;
		fax_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		regardingobjectid_contract_fax: DG.Microsoft.Dynamics.CRM.contractSingle;
		Fax_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		regardingobjectid_salesorder_fax: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		regardingobjectid_incident_fax: DG.Microsoft.Dynamics.CRM.incidentSingle;
		Fax_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		CreatedActivity_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		activity_pointer_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		activity_pointer_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		activity_pointer_email: DG.Microsoft.Dynamics.CRM.email[];
		sendermailboxid: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		activity_pointer_quote_close: DG.Microsoft.Dynamics.CRM.quoteclose[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		ActivityPointer_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		ActivityPointer_CampaignActivityItems: DG.Microsoft.Dynamics.CRM.campaignactivityitem[];
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		activity_pointer_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_service_appointment: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		activity_pointer_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		activity_pointer_fax: DG.Microsoft.Dynamics.CRM.fax[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation_logs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		serviceid: DG.Microsoft.Dynamics.CRM.serviceSingle;
		activity_pointer_task: DG.Microsoft.Dynamics.CRM.task[];
		activity_pointer_opportunity_close: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		activity_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		activity_pointer_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		activity_pointer_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		activity_pointer_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		activity_pointer_order_close: DG.Microsoft.Dynamics.CRM.orderclose[];
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		activity_pointer_incident_resolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		activity_pointer_letter: DG.Microsoft.Dynamics.CRM.letter[];
		activitypointer_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		ActivityPointer_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		activitypointer_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		ActivityPointer_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		activitypointer_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
	}
	interface knowledgebaserecordSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.knowledgebaserecord> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		KnowledgeBaseRecord_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		KnowledgeBaseRecord_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		KnowledgeBaseRecord_Emails: DG.Microsoft.Dynamics.CRM.email[];
		KnowledgeBaseRecord_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		KnowledgeBaseRecord_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		KnowledgeBaseRecord_PhoneCalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		KnowledgeBaseRecord_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		KnowledgeBaseRecord_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		KnowledgeBaseRecord_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		KnowledgeBaseRecord_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		KnowledgeBaseRecord_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		KnowledgeBaseRecord_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		KnowledgeBaseRecord_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		KnowledgeBaseRecord_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		KnowledgeBaseRecord_Annotations: DG.Microsoft.Dynamics.CRM.annotation[];
		KnowledgeBaseRecord_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		KnowledgeBaseRecord_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		KnowledgeBaseRecord_Incident: DG.Microsoft.Dynamics.CRM.incident[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
	}
	interface serviceSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.service> {
		strategyid: DG.Microsoft.Dynamics.CRM.plugintypeSingle;
		service_incidentresolutions: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		service_accounts: DG.Microsoft.Dynamics.CRM.account[];
		service_service_appointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		service_quoteclose: DG.Microsoft.Dynamics.CRM.quoteclose[];
		service_opportunityclose: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		service_phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		service_recurringappointmentmasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		service_faxes: DG.Microsoft.Dynamics.CRM.fax[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Service_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		service_tasks: DG.Microsoft.Dynamics.CRM.task[];
		service_socialactivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		calendarid_calendar: DG.Microsoft.Dynamics.CRM.calendarSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		service_orderclose: DG.Microsoft.Dynamics.CRM.orderclose[];
		service_letters: DG.Microsoft.Dynamics.CRM.letter[];
		service_activity_pointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		Service_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		service_contacts: DG.Microsoft.Dynamics.CRM.contact[];
		service_appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		Service_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		service_emails: DG.Microsoft.Dynamics.CRM.email[];
		service_calendar_rules: DG.Microsoft.Dynamics.CRM.calendarrule[];
		resourcespecid: DG.Microsoft.Dynamics.CRM.resourcespecSingle;
		Service_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Service_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
	}
	interface plugintypeSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.plugintype> {
		plugin_type_service: DG.Microsoft.Dynamics.CRM.service[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		pluginassemblyid: DG.Microsoft.Dynamics.CRM.pluginassemblySingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		plugintypeid_sdkmessageprocessingstep: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		plugintype_sdkmessageprocessingstep: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface pluginassemblySingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.pluginassembly> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		pluginassembly_plugintype: DG.Microsoft.Dynamics.CRM.plugintype[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface resourcespecSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.resourcespec> {
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		groupobjectid_constraintbasedgroup: DG.Microsoft.Dynamics.CRM.constraintbasedgroupSingle;
		businessunitid: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ActivityPartyResourceSpec: DG.Microsoft.Dynamics.CRM.activityparty[];
		ResourceSpec_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		groupobjectid_team: DG.Microsoft.Dynamics.CRM.teamSingle;
		resourcespec_resources: DG.Microsoft.Dynamics.CRM.resource[];
		ResourceSpec_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		resource_spec_services: DG.Microsoft.Dynamics.CRM.service[];
		ResourceSpec_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
	}
	interface constraintbasedgroupSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.constraintbasedgroup> {
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		constraint_based_group_resource_specs: DG.Microsoft.Dynamics.CRM.resourcespec[];
		businessunitid_systemuser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		constraintbasedgroup_resource_groups: DG.Microsoft.Dynamics.CRM.resourcegroup[];
		constraintbasedgroup_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		businessunitid_businessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		constraintbasedgroup_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		ConstraintBasedGroup_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		ConstraintBasedGroup_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
	}
	interface activitypointerSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.activitypointer> {
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		CreatedActivity_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		activity_pointer_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		activity_pointer_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		activity_pointer_email: DG.Microsoft.Dynamics.CRM.email[];
		sendermailboxid: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		activity_pointer_quote_close: DG.Microsoft.Dynamics.CRM.quoteclose[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		ActivityPointer_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		ActivityPointer_CampaignActivityItems: DG.Microsoft.Dynamics.CRM.campaignactivityitem[];
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		activity_pointer_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_service_appointment: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		activity_pointer_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		activity_pointer_fax: DG.Microsoft.Dynamics.CRM.fax[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation_logs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		serviceid: DG.Microsoft.Dynamics.CRM.serviceSingle;
		activity_pointer_task: DG.Microsoft.Dynamics.CRM.task[];
		activity_pointer_opportunity_close: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		activity_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		activity_pointer_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		activity_pointer_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		activity_pointer_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		activity_pointer_order_close: DG.Microsoft.Dynamics.CRM.orderclose[];
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		activity_pointer_incident_resolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		activity_pointer_letter: DG.Microsoft.Dynamics.CRM.letter[];
		activitypointer_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		ActivityPointer_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		activitypointer_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		ActivityPointer_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		activitypointer_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
	}
	interface salesorderSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.salesorder> {
		contactorders_association: DG.Microsoft.Dynamics.CRM.contact[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		SalesOrder_Emails: DG.Microsoft.Dynamics.CRM.email[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		SalesOrder_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		SalesOrder_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		campaignid: DG.Microsoft.Dynamics.CRM.campaignSingle;
		SalesOrder_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		SalesOrder_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		SalesOrder_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		quoteid: DG.Microsoft.Dynamics.CRM.quoteSingle;
		salesorder_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		salesorder_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		SalesOrder_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		order_details: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		SalesOrder_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		pricelevelid: DG.Microsoft.Dynamics.CRM.pricelevelSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		customerid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		SalesOrder_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		SalesOrder_OrderClose: DG.Microsoft.Dynamics.CRM.orderclose[];
		SalesOrder_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		SalesOrder_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		opportunityid: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		SalesOrder_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		SalesOrder_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		salesorder_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		customerid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		order_invoices: DG.Microsoft.Dynamics.CRM.invoice[];
	}
	interface quoteSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.quote> {
		contactquotes_association: DG.Microsoft.Dynamics.CRM.contact[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Quote_SharepointDocumentLocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		Quote_QuoteClose: DG.Microsoft.Dynamics.CRM.quoteclose[];
		customerid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		quote_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		quote_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Quote_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		Quote_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		Quote_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		Quote_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		Quote_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		quote_orders: DG.Microsoft.Dynamics.CRM.salesorder[];
		Quote_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		pricelevelid: DG.Microsoft.Dynamics.CRM.pricelevelSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		Quote_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		customerid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		quote_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Quote_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		Quote_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		Quote_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Quote_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		Quote_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		quote_details: DG.Microsoft.Dynamics.CRM.quotedetail[];
		Quote_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		opportunityid: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		Quote_Emails: DG.Microsoft.Dynamics.CRM.email[];
		campaignid: DG.Microsoft.Dynamics.CRM.campaignSingle;
		Quote_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
	}
	interface invoiceSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.invoice> {
		contactinvoices_association: DG.Microsoft.Dynamics.CRM.contact[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		customerid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		Invoice_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		invoice_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		invoice_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		Invoice_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		Invoice_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		Invoice_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Invoice_Emails: DG.Microsoft.Dynamics.CRM.email[];
		Invoice_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		Invoice_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		Invoice_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		opportunityid: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		invoice_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		invoice_details: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		Invoice_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		customerid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		pricelevelid: DG.Microsoft.Dynamics.CRM.pricelevelSingle;
		Invoice_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		Invoice_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		Invoice_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Invoice_ServiceAppointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		salesorderid: DG.Microsoft.Dynamics.CRM.salesorderSingle;
	}
	interface bulkoperationSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.bulkoperation> {
		BulkOperation_Email: DG.Microsoft.Dynamics.CRM.email[];
		createdby_bulkoperation: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		BulkOperation_SocialActivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		BulkOperation_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		BulkOperation_Phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		BulkOperation_logs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		regardingobjectid_list: DG.Microsoft.Dynamics.CRM.listSingle;
		BulkOperation_CampaignResponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		owninguser_bulkoperation: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_campaignactivity_bulkoperation: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		bulkoperation_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		owningbusinessunit_bulkoperation: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		BulkOperation_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		BulkOperation_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		BulkOperation_Letter: DG.Microsoft.Dynamics.CRM.letter[];
		createdonbehalfby_bulkoperation: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby_bulkoperation: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam_bulkoperation: DG.Microsoft.Dynamics.CRM.teamSingle;
		BulkOperation_Appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		BulkOperation_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		BulkOperation_RecurringAppointmentMaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		modifiedonbehalfby_bulkoperation: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		BulkOperation_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		CreatedActivity_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		activity_pointer_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		activity_pointer_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		activity_pointer_email: DG.Microsoft.Dynamics.CRM.email[];
		sendermailboxid: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		activity_pointer_quote_close: DG.Microsoft.Dynamics.CRM.quoteclose[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		ActivityPointer_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		ActivityPointer_CampaignActivityItems: DG.Microsoft.Dynamics.CRM.campaignactivityitem[];
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		activity_pointer_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_service_appointment: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		activity_pointer_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		activity_pointer_fax: DG.Microsoft.Dynamics.CRM.fax[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation_logs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		serviceid: DG.Microsoft.Dynamics.CRM.serviceSingle;
		activity_pointer_task: DG.Microsoft.Dynamics.CRM.task[];
		activity_pointer_opportunity_close: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		activity_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		activity_pointer_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		activity_pointer_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		activity_pointer_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		activity_pointer_order_close: DG.Microsoft.Dynamics.CRM.orderclose[];
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		activity_pointer_incident_resolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		activity_pointer_letter: DG.Microsoft.Dynamics.CRM.letter[];
		activitypointer_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		ActivityPointer_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		activitypointer_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		ActivityPointer_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		activitypointer_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
	}
	interface listSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.list> {
		campaignlist_association: DG.Microsoft.Dynamics.CRM.campaign[];
		listlead_association: DG.Microsoft.Dynamics.CRM.lead[];
		listcontact_association: DG.Microsoft.Dynamics.CRM.contact[];
		listaccount_association: DG.Microsoft.Dynamics.CRM.account[];
		campaignactivitylist_association: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		List_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		list_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		List_BulkOperations: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		List_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		list_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		List_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		List_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		List_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface campaignactivitySingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.campaignactivity> {
		campaignactivitylist_association: DG.Microsoft.Dynamics.CRM.list[];
		campaignactivitysalesliterature_association: DG.Microsoft.Dynamics.CRM.salesliterature[];
		campaignactivity_activityparties: DG.Microsoft.Dynamics.CRM.activityparty[];
		regardingobjectid_campaign_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignSingle;
		transactioncurrencyid_campaignactivity: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		CampaignActivity_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		CampaignActivity_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		campaignactivity_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		campaignactivity_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		createdby_campaignactivity: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		campaignactivity_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		modifiedonbehalfby_campaignactivity: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		CampaignActivity_Letters: DG.Microsoft.Dynamics.CRM.letter[];
		CampaignActivity_BulkOperations: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		CampaignActivity_Faxes: DG.Microsoft.Dynamics.CRM.fax[];
		createdonbehalfby_campaignactivity: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owninguser_campaignactivity: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		CampaignActivity_Emails: DG.Microsoft.Dynamics.CRM.email[];
		CampaignActivity_Tasks: DG.Microsoft.Dynamics.CRM.task[];
		owningteam_campaignactivity: DG.Microsoft.Dynamics.CRM.teamSingle;
		CampaignActivity_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		CampaignActivity_Appointments: DG.Microsoft.Dynamics.CRM.appointment[];
		CampaignActivity_Phonecalls: DG.Microsoft.Dynamics.CRM.phonecall[];
		modifiedby_campaignactivity: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		CampaignActivity_ActivityPointers: DG.Microsoft.Dynamics.CRM.activitypointer[];
		CampaignActivity_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		owningbusinessunit_campaignactivity: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		CampaignActivity_RecurringAppointmentMasters: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		CreatedActivity_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		activity_pointer_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		activity_pointer_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		activity_pointer_email: DG.Microsoft.Dynamics.CRM.email[];
		sendermailboxid: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		activity_pointer_quote_close: DG.Microsoft.Dynamics.CRM.quoteclose[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		ActivityPointer_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		ActivityPointer_CampaignActivityItems: DG.Microsoft.Dynamics.CRM.campaignactivityitem[];
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		activity_pointer_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_service_appointment: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		activity_pointer_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		activity_pointer_fax: DG.Microsoft.Dynamics.CRM.fax[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation_logs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		serviceid: DG.Microsoft.Dynamics.CRM.serviceSingle;
		activity_pointer_task: DG.Microsoft.Dynamics.CRM.task[];
		activity_pointer_opportunity_close: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		activity_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		activity_pointer_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		activity_pointer_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		activity_pointer_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		activity_pointer_order_close: DG.Microsoft.Dynamics.CRM.orderclose[];
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		activity_pointer_incident_resolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		activity_pointer_letter: DG.Microsoft.Dynamics.CRM.letter[];
		activitypointer_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		ActivityPointer_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		activitypointer_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		ActivityPointer_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		activitypointer_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
	}
	interface letterSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.letter> {
		regardingobjectid_entitlement_letter: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate_letter: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_knowledgebaserecord_letter: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		letter_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		regardingobjectid_campaign_letter: DG.Microsoft.Dynamics.CRM.campaignSingle;
		modifiedonbehalfby_letter: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby_letter: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		letter_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		Letter_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		regardingobjectid_quote_letter: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_knowledgearticle_letter: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		owningbusinessunit_letter: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		Letter_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		regardingobjectid_invoice_letter: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		regardingobjectid_salesorder_letter: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		owningteam_letter: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_campaignactivity_letter: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		letter_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		serviceid_letter: DG.Microsoft.Dynamics.CRM.serviceSingle;
		Letter_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		regardingobjectid_contract_letter: DG.Microsoft.Dynamics.CRM.contractSingle;
		transactioncurrencyid_letter: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		regardingobjectid_bulkoperation_letter: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		letter_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		owninguser_letter: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Letter_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		regardingobjectid_opportunity_letter: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		Letter_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		regardingobjectid_incident_letter: DG.Microsoft.Dynamics.CRM.incidentSingle;
		modifiedby_letter: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_lead_letter: DG.Microsoft.Dynamics.CRM.leadSingle;
		createdby_letter: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Letter_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		regardingobjectid_account_letter: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_contact_letter: DG.Microsoft.Dynamics.CRM.contactSingle;
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		CreatedActivity_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		activity_pointer_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		activity_pointer_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		activity_pointer_email: DG.Microsoft.Dynamics.CRM.email[];
		sendermailboxid: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		activity_pointer_quote_close: DG.Microsoft.Dynamics.CRM.quoteclose[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		ActivityPointer_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		ActivityPointer_CampaignActivityItems: DG.Microsoft.Dynamics.CRM.campaignactivityitem[];
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		activity_pointer_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_service_appointment: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		activity_pointer_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		activity_pointer_fax: DG.Microsoft.Dynamics.CRM.fax[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation_logs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		serviceid: DG.Microsoft.Dynamics.CRM.serviceSingle;
		activity_pointer_task: DG.Microsoft.Dynamics.CRM.task[];
		activity_pointer_opportunity_close: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		activity_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		activity_pointer_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		activity_pointer_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		activity_pointer_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		activity_pointer_order_close: DG.Microsoft.Dynamics.CRM.orderclose[];
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		activity_pointer_incident_resolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		activity_pointer_letter: DG.Microsoft.Dynamics.CRM.letter[];
		activitypointer_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		ActivityPointer_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		activitypointer_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		ActivityPointer_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		activitypointer_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
	}
	interface phonecallSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.phonecall> {
		regardingobjectid_entitlement_phonecall: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate_phonecall: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		phonecall_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		phonecall_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		regardingobjectid_knowledgebaserecord_phonecall: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_lead_phonecall: DG.Microsoft.Dynamics.CRM.leadSingle;
		regardingobjectid_opportunity_phonecall: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		transactioncurrencyid_phonecall: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		regardingobjectid_contact_phonecall: DG.Microsoft.Dynamics.CRM.contactSingle;
		phonecall_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		serviceid_phonecall: DG.Microsoft.Dynamics.CRM.serviceSingle;
		PhoneCall_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		modifiedonbehalfby_phonecall: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_bulkoperation_phonecall: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		PhoneCall_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		regardingobjectid_account_phonecall: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_invoice_phonecall: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		createdby_phonecall: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby_phonecall: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		phonecall_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		regardingobjectid_incident_phonecall: DG.Microsoft.Dynamics.CRM.incidentSingle;
		owningbusinessunit_phonecall: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		PhoneCall_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		regardingobjectid_knowledgearticle_phonecall: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		PhoneCall_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		phonecall_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		regardingobjectid_contract_phonecall: DG.Microsoft.Dynamics.CRM.contractSingle;
		regardingobjectid_salesorder_phonecall: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		modifiedby_phonecall: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam_phonecall: DG.Microsoft.Dynamics.CRM.teamSingle;
		PhoneCall_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_campaign_phonecall: DG.Microsoft.Dynamics.CRM.campaignSingle;
		regardingobjectid_campaignactivity_phonecall: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		PhoneCall_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		regardingobjectid_quote_phonecall: DG.Microsoft.Dynamics.CRM.quoteSingle;
		phonecall_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owninguser_phonecall: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		CreatedActivity_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		activity_pointer_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		activity_pointer_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		activity_pointer_email: DG.Microsoft.Dynamics.CRM.email[];
		sendermailboxid: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		activity_pointer_quote_close: DG.Microsoft.Dynamics.CRM.quoteclose[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		ActivityPointer_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		ActivityPointer_CampaignActivityItems: DG.Microsoft.Dynamics.CRM.campaignactivityitem[];
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		activity_pointer_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_service_appointment: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		activity_pointer_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		activity_pointer_fax: DG.Microsoft.Dynamics.CRM.fax[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation_logs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		serviceid: DG.Microsoft.Dynamics.CRM.serviceSingle;
		activity_pointer_task: DG.Microsoft.Dynamics.CRM.task[];
		activity_pointer_opportunity_close: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		activity_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		activity_pointer_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		activity_pointer_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		activity_pointer_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		activity_pointer_order_close: DG.Microsoft.Dynamics.CRM.orderclose[];
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		activity_pointer_incident_resolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		activity_pointer_letter: DG.Microsoft.Dynamics.CRM.letter[];
		activitypointer_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		ActivityPointer_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		activitypointer_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		ActivityPointer_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		activitypointer_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
	}
	interface recurringappointmentmasterSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.recurringappointmentmaster> {
		regardingobjectid_entitlement_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		recurringappointmentmaster_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		recurringappointmentmaster_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		regardingobjectid_knowledgebaserecord_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		RecurringAppointmentMaster_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		RecurringAppointmentMaster_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		RecurringAppointmentMaster_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		owninguser_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_contract_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.contractSingle;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		recurringappointmentmaster_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		RecurringAppointmentMaster_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		owningbusinessunit_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_campaign_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.campaignSingle;
		regardingobjectid_invoice_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		serviceid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.serviceSingle;
		createdonbehalfby_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_knowledgearticle_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		recurringappointmentmaster_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		regardingobjectid_account_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.accountSingle;
		RecurringAppointmentMaster_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		recurringappointmentmaster_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		modifiedonbehalfby_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_lead_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.leadSingle;
		regardingobjectid_opportunity_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		transactioncurrencyid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		recurringappointmentmaster_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		recurringappointmentmaster_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		regardingobjectid_incident_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.incidentSingle;
		regardingobjectid_salesorder_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		regardingobjectid_quote_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_contact_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.contactSingle;
		modifiedby_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_bulkoperation_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		regardingobjectid_campaignactivity_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		RecurringAppointmentMaster_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		CreatedActivity_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		activity_pointer_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		activity_pointer_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		activity_pointer_email: DG.Microsoft.Dynamics.CRM.email[];
		sendermailboxid: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		activity_pointer_quote_close: DG.Microsoft.Dynamics.CRM.quoteclose[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		ActivityPointer_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		ActivityPointer_CampaignActivityItems: DG.Microsoft.Dynamics.CRM.campaignactivityitem[];
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		activity_pointer_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_service_appointment: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		activity_pointer_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		activity_pointer_fax: DG.Microsoft.Dynamics.CRM.fax[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation_logs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		serviceid: DG.Microsoft.Dynamics.CRM.serviceSingle;
		activity_pointer_task: DG.Microsoft.Dynamics.CRM.task[];
		activity_pointer_opportunity_close: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		activity_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		activity_pointer_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		activity_pointer_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		activity_pointer_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		activity_pointer_order_close: DG.Microsoft.Dynamics.CRM.orderclose[];
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		activity_pointer_incident_resolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		activity_pointer_letter: DG.Microsoft.Dynamics.CRM.letter[];
		activitypointer_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		ActivityPointer_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		activitypointer_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		ActivityPointer_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		activitypointer_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
	}
	interface emailSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.email> {
		regardingobjectid_entitlement_email: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate_email: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_knowledgebaserecord_email: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_bulkoperation_email: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		transactioncurrencyid_email: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		regardingobjectid_asyncoperation: DG.Microsoft.Dynamics.CRM.asyncoperationSingle;
		sendersaccount: DG.Microsoft.Dynamics.CRM.accountSingle;
		emailsender_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_lead_email: DG.Microsoft.Dynamics.CRM.leadSingle;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		regardingobjectid_salesorder_email: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		emailsender_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		Email_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		regardingobjectid_opportunity_email: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		Email_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		email_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		sendermailboxid_email: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		email_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		email_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		regardingobjectid_invoice_email: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		owningbusinessunit_email: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		emailsender_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		owninguser_email: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby_email: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_incident_email: DG.Microsoft.Dynamics.CRM.incidentSingle;
		owningteam_email: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_campaign_email: DG.Microsoft.Dynamics.CRM.campaignSingle;
		emailsender_queue: DG.Microsoft.Dynamics.CRM.queueSingle;
		Email_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		Email_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdonbehalfby_email: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		email_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		regardingobjectid_knowledgearticle_email: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		emailsender_equipment: DG.Microsoft.Dynamics.CRM.equipmentSingle;
		regardingobjectid_campaignactivity_email: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		Email_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		serviceid_email: DG.Microsoft.Dynamics.CRM.serviceSingle;
		modifiedonbehalfby_email: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		email_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		regardingobjectid_account_email: DG.Microsoft.Dynamics.CRM.accountSingle;
		createdby_email: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		emailsender_systemuser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_contract_email: DG.Microsoft.Dynamics.CRM.contractSingle;
		regardingobjectid_contact_email: DG.Microsoft.Dynamics.CRM.contactSingle;
		Email_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		parentactivityid: DG.Microsoft.Dynamics.CRM.emailSingle;
		email_email_parentactivityid: DG.Microsoft.Dynamics.CRM.email[];
		regardingobjectid_quote_email: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		CreatedActivity_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		activity_pointer_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		activity_pointer_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		activity_pointer_email: DG.Microsoft.Dynamics.CRM.email[];
		sendermailboxid: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		activity_pointer_quote_close: DG.Microsoft.Dynamics.CRM.quoteclose[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		ActivityPointer_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		ActivityPointer_CampaignActivityItems: DG.Microsoft.Dynamics.CRM.campaignactivityitem[];
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		activity_pointer_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_service_appointment: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		activity_pointer_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		activity_pointer_fax: DG.Microsoft.Dynamics.CRM.fax[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation_logs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		serviceid: DG.Microsoft.Dynamics.CRM.serviceSingle;
		activity_pointer_task: DG.Microsoft.Dynamics.CRM.task[];
		activity_pointer_opportunity_close: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		activity_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		activity_pointer_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		activity_pointer_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		activity_pointer_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		activity_pointer_order_close: DG.Microsoft.Dynamics.CRM.orderclose[];
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		activity_pointer_incident_resolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		activity_pointer_letter: DG.Microsoft.Dynamics.CRM.letter[];
		activitypointer_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		ActivityPointer_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		activitypointer_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		ActivityPointer_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		activitypointer_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
	}
	interface asyncoperationSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.asyncoperation> {
		regardingobjectid_theme: DG.Microsoft.Dynamics.CRM.themeSingle;
		regardingobjectid_productsubstitute: DG.Microsoft.Dynamics.CRM.productsubstituteSingle;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementchannel: DG.Microsoft.Dynamics.CRM.entitlementchannelSingle;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_post: DG.Microsoft.Dynamics.CRM.postSingle;
		regardingobjectid_position: DG.Microsoft.Dynamics.CRM.positionSingle;
		regardingobjectid_similarityrule: DG.Microsoft.Dynamics.CRM.similarityruleSingle;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_productpricelevel: DG.Microsoft.Dynamics.CRM.productpricelevelSingle;
		regardingobjectid_report: DG.Microsoft.Dynamics.CRM.reportSingle;
		AsyncOperation_Emails: DG.Microsoft.Dynamics.CRM.email[];
		regardingobjectid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmasterSingle;
		regardingobjectid_incidentresolution: DG.Microsoft.Dynamics.CRM.incidentresolutionSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		regardingobjectid_privilege: DG.Microsoft.Dynamics.CRM.privilegeSingle;
		AsyncOperation_BulkDeleteOperation: DG.Microsoft.Dynamics.CRM.bulkdeleteoperation[];
		regardingobjectid_goalrollupquery: DG.Microsoft.Dynamics.CRM.goalrollupquerySingle;
		regardingobjectid_discounttype: DG.Microsoft.Dynamics.CRM.discounttypeSingle;
		AsyncOperation_SocialActivities: DG.Microsoft.Dynamics.CRM.socialactivity[];
		regardingobjectid_postfollow: DG.Microsoft.Dynamics.CRM.postfollowSingle;
		regardingobjectid_businessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_annualfiscalcalendar: DG.Microsoft.Dynamics.CRM.annualfiscalcalendarSingle;
		regardingobjectid_equipment: DG.Microsoft.Dynamics.CRM.equipmentSingle;
		regardingobjectid_discount: DG.Microsoft.Dynamics.CRM.discountSingle;
		workflowactivationid: DG.Microsoft.Dynamics.CRM.workflowSingle;
		regardingobjectid_monthlyfiscalcalendar: DG.Microsoft.Dynamics.CRM.monthlyfiscalcalendarSingle;
		regardingobjectid_mailbox: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		regardingobjectid_importfile: DG.Microsoft.Dynamics.CRM.importfileSingle;
		lk_workflowlog_asyncoperation_childworkflow: DG.Microsoft.Dynamics.CRM.workflowlog[];
		regardingobjectid_importdata: DG.Microsoft.Dynamics.CRM.importdataSingle;
		regardingobjectid_email: DG.Microsoft.Dynamics.CRM.emailSingle;
		regardingobjectid_team: DG.Microsoft.Dynamics.CRM.teamSingle;
		AsyncOperation_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		regardingobjectid_opportunityclose: DG.Microsoft.Dynamics.CRM.opportunitycloseSingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		regardingobjectid_kbarticletemplate: DG.Microsoft.Dynamics.CRM.kbarticletemplateSingle;
		regardingobjectid_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofileSingle;
		regardingobjectid_userform: DG.Microsoft.Dynamics.CRM.userformSingle;
		regardingobjectid_transactioncurrency: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		regardingobjectid_socialprofile: DG.Microsoft.Dynamics.CRM.socialprofileSingle;
		regardingobjectid_opportunityproduct: DG.Microsoft.Dynamics.CRM.opportunityproductSingle;
		regardingobjectid_importmap: DG.Microsoft.Dynamics.CRM.importmapSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_phonecall: DG.Microsoft.Dynamics.CRM.phonecallSingle;
		regardingobjectid_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivitySingle;
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		regardingobjectid_queueitem: DG.Microsoft.Dynamics.CRM.queueitemSingle;
		regardingobjectid_quarterlyfiscalcalendar: DG.Microsoft.Dynamics.CRM.quarterlyfiscalcalendarSingle;
		regardingobjectid_queue: DG.Microsoft.Dynamics.CRM.queueSingle;
		regardingobjectid_template: DG.Microsoft.Dynamics.CRM.templateSingle;
		regardingobjectid_serviceappointment: DG.Microsoft.Dynamics.CRM.serviceappointmentSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_kbarticle: DG.Microsoft.Dynamics.CRM.kbarticleSingle;
		regardingobjectid_systemform: DG.Microsoft.Dynamics.CRM.systemformSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_organization: DG.Microsoft.Dynamics.CRM.organizationSingle;
		regardingobjectid_connectionrole: DG.Microsoft.Dynamics.CRM.connectionroleSingle;
		regardingobjectid_site: DG.Microsoft.Dynamics.CRM.siteSingle;
		regardingobjectid_kbarticlecomment: DG.Microsoft.Dynamics.CRM.kbarticlecommentSingle;
		regardingobjectid_appointment: DG.Microsoft.Dynamics.CRM.appointmentSingle;
		regardingobjectid_systemuser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_mailmergetemplate: DG.Microsoft.Dynamics.CRM.mailmergetemplateSingle;
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		regardingobjectid_quoteclose: DG.Microsoft.Dynamics.CRM.quotecloseSingle;
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		regardingobjectid_calendar: DG.Microsoft.Dynamics.CRM.calendarSingle;
		regardingobjectid_productassociation: DG.Microsoft.Dynamics.CRM.productassociationSingle;
		regardingobjectid_contracttemplate: DG.Microsoft.Dynamics.CRM.contracttemplateSingle;
		regardingobjectid_connection: DG.Microsoft.Dynamics.CRM.connectionSingle;
		regardingobjectid_metric: DG.Microsoft.Dynamics.CRM.metricSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_role: DG.Microsoft.Dynamics.CRM.roleSingle;
		regardingobjectid_resource: DG.Microsoft.Dynamics.CRM.resourceSingle;
		regardingobjectid_salesorderdetail: DG.Microsoft.Dynamics.CRM.salesorderdetailSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		regardingobjectid_subject: DG.Microsoft.Dynamics.CRM.subjectSingle;
		regardingobjectid_uomschedule: DG.Microsoft.Dynamics.CRM.uomscheduleSingle;
		regardingobjectid_savedquery: DG.Microsoft.Dynamics.CRM.savedquerySingle;
		regardingobjectid_sla: DG.Microsoft.Dynamics.CRM.slaSingle;
		regardingobjectid_activitymimeattachment: DG.Microsoft.Dynamics.CRM.activitymimeattachmentSingle;
		regardingobjectid_letter: DG.Microsoft.Dynamics.CRM.letterSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_product: DG.Microsoft.Dynamics.CRM.productSingle;
		regardingobjectid_invoicedetail: DG.Microsoft.Dynamics.CRM.invoicedetailSingle;
		regardingobjectid_list: DG.Microsoft.Dynamics.CRM.listSingle;
		regardingobjectid_competitor: DG.Microsoft.Dynamics.CRM.competitorSingle;
		regardingobjectid_orderclose: DG.Microsoft.Dynamics.CRM.ordercloseSingle;
		regardingobjectid_quotedetail: DG.Microsoft.Dynamics.CRM.quotedetailSingle;
		regardingobjectid_annotation: DG.Microsoft.Dynamics.CRM.annotationSingle;
		regardingobjectid_userquery: DG.Microsoft.Dynamics.CRM.userquerySingle;
		lk_workflowlog_asyncoperations: DG.Microsoft.Dynamics.CRM.workflowlog[];
		regardingobjectid_task: DG.Microsoft.Dynamics.CRM.taskSingle;
		regardingobjectid_contractdetail: DG.Microsoft.Dynamics.CRM.contractdetailSingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_sharepointsite: DG.Microsoft.Dynamics.CRM.sharepointsiteSingle;
		regardingobjectid_salesliterature: DG.Microsoft.Dynamics.CRM.salesliteratureSingle;
		owningextensionid: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepSingle;
		regardingobjectid_businessunitnewsarticle: DG.Microsoft.Dynamics.CRM.businessunitnewsarticleSingle;
		regardingobjectid_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponseSingle;
		regardingobjectid_goal: DG.Microsoft.Dynamics.CRM.goalSingle;
		regardingobjectid_importlog: DG.Microsoft.Dynamics.CRM.importlogSingle;
		regardingobjectid_semiannualfiscalcalendar: DG.Microsoft.Dynamics.CRM.semiannualfiscalcalendarSingle;
		regardingobjectid_territory: DG.Microsoft.Dynamics.CRM.territorySingle;
		regardingobjectid_fixedmonthlyfiscalcalendar: DG.Microsoft.Dynamics.CRM.fixedmonthlyfiscalcalendarSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		regardingobjectid_customeraddress: DG.Microsoft.Dynamics.CRM.customeraddressSingle;
		regardingobjectid_service: DG.Microsoft.Dynamics.CRM.serviceSingle;
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		regardingobjectid_uom: DG.Microsoft.Dynamics.CRM.uomSingle;
		regardingobjectid_fax: DG.Microsoft.Dynamics.CRM.faxSingle;
		regardingobjectid_bulkoperationlog: DG.Microsoft.Dynamics.CRM.bulkoperationlogSingle;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		regardingobjectid_resourcespec: DG.Microsoft.Dynamics.CRM.resourcespecSingle;
		regardingobjectid_salesliteratureitem: DG.Microsoft.Dynamics.CRM.salesliteratureitemSingle;
		regardingobjectid_sharepointdocumentlocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocationSingle;
		regardingobjectid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		regardingobjectid_pricelevel: DG.Microsoft.Dynamics.CRM.pricelevelSingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_constraintbasedgroup: DG.Microsoft.Dynamics.CRM.constraintbasedgroupSingle;
		regardingobjectid_import: DG.Microsoft.Dynamics.CRM.importSingle;
		regardingobjectid_resourcegroup: DG.Microsoft.Dynamics.CRM.resourcegroupSingle;
		regardingobjectid_dg_booking: DG.Microsoft.Dynamics.CRM.dg_bookingSingle;
		regardingobjectid_dg_plane: DG.Microsoft.Dynamics.CRM.dg_planeSingle;
		regardingobjectid_dg_hotel: DG.Microsoft.Dynamics.CRM.dg_hotelSingle;
		regardingobjectid_dg_car: DG.Microsoft.Dynamics.CRM.dg_carSingle;
		regardingobjectid_dg_country: DG.Microsoft.Dynamics.CRM.dg_countrySingle;
	}
	interface themeSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.theme> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		theme_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		theme_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		logoimage: DG.Microsoft.Dynamics.CRM.webresourceSingle;
	}
	interface webresourceSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.webresource> {
		solution_configuration_webresource: DG.Microsoft.Dynamics.CRM.solution[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		webresource_userqueryvisualizations: DG.Microsoft.Dynamics.CRM.userqueryvisualization[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		webresource_savedqueryvisualizations: DG.Microsoft.Dynamics.CRM.savedqueryvisualization[];
		lk_theme_logoid: DG.Microsoft.Dynamics.CRM.theme[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface productsubstituteSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.productsubstitute> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ProductSubstitute_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		ProductSubstitute_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		productid: DG.Microsoft.Dynamics.CRM.productSingle;
		substitutedproductid: DG.Microsoft.Dynamics.CRM.productSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
	}
	interface entitlementchannelSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.entitlementchannel> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		entitlementchannel_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		entitlementchannel_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		entitlementchannel_Annotations: DG.Microsoft.Dynamics.CRM.annotation[];
		entitlementchannel_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		entitlementchannel_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		entitlementid: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
	}
	interface postSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.post> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		post_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		post_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		postregardingid: DG.Microsoft.Dynamics.CRM.postregardingSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		Post_Comments: DG.Microsoft.Dynamics.CRM.postcomment[];
		Post_Likes: DG.Microsoft.Dynamics.CRM.postlike[];
	}
	interface postregardingSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.postregarding> {
		regardingobjectid_task: DG.Microsoft.Dynamics.CRM.taskSingle;
		regardingobjectid_appointment: DG.Microsoft.Dynamics.CRM.appointmentSingle;
		regardingobjectid_phonecall: DG.Microsoft.Dynamics.CRM.phonecallSingle;
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		regardingobjectid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmasterSingle;
		post_PostRegardings: DG.Microsoft.Dynamics.CRM.post[];
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_systemuser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectowningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		regardingobjectid_team: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		regardingobjectid_queue: DG.Microsoft.Dynamics.CRM.queueSingle;
		regardingobjectid_competitor: DG.Microsoft.Dynamics.CRM.competitorSingle;
	}
	interface taskSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.task> {
		regardingobjectid_entitlement_task: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate_task: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		task_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		task_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		regardingobjectid_knowledgebaserecord_task: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		task_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		Task_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		regardingobjectid_lead_task: DG.Microsoft.Dynamics.CRM.leadSingle;
		Task_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		regardingobjectid_contact_task: DG.Microsoft.Dynamics.CRM.contactSingle;
		owningteam_task: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_quote_task: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_opportunity_task: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		owningbusinessunit_task: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		task_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		transactioncurrencyid_task: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		serviceid_task: DG.Microsoft.Dynamics.CRM.serviceSingle;
		regardingobjectid_campaign_task: DG.Microsoft.Dynamics.CRM.campaignSingle;
		task_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		regardingobjectid_invoice_task: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		regardingobjectid_account_task: DG.Microsoft.Dynamics.CRM.accountSingle;
		Task_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		modifiedby_task: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby_task: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		Task_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		regardingobjectid_knowledgearticle_task: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		createdonbehalfby_task: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_campaignactivity_task: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		regardingobjectid_contract_task: DG.Microsoft.Dynamics.CRM.contractSingle;
		regardingobjectid_salesorder_task: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		owninguser_task: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby_task: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Task_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_incident_task: DG.Microsoft.Dynamics.CRM.incidentSingle;
		Task_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		CreatedActivity_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		activity_pointer_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		activity_pointer_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		activity_pointer_email: DG.Microsoft.Dynamics.CRM.email[];
		sendermailboxid: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		activity_pointer_quote_close: DG.Microsoft.Dynamics.CRM.quoteclose[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		ActivityPointer_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		ActivityPointer_CampaignActivityItems: DG.Microsoft.Dynamics.CRM.campaignactivityitem[];
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		activity_pointer_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_service_appointment: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		activity_pointer_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		activity_pointer_fax: DG.Microsoft.Dynamics.CRM.fax[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation_logs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		serviceid: DG.Microsoft.Dynamics.CRM.serviceSingle;
		activity_pointer_task: DG.Microsoft.Dynamics.CRM.task[];
		activity_pointer_opportunity_close: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		activity_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		activity_pointer_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		activity_pointer_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		activity_pointer_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		activity_pointer_order_close: DG.Microsoft.Dynamics.CRM.orderclose[];
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		activity_pointer_incident_resolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		activity_pointer_letter: DG.Microsoft.Dynamics.CRM.letter[];
		activitypointer_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		ActivityPointer_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		activitypointer_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		ActivityPointer_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		activitypointer_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
	}
	interface appointmentSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.appointment> {
		regardingobjectid_entitlement_appointment: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate_appointment: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		appointment_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		appointment_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
		regardingobjectid_knowledgebaserecord_appointment: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		Appointment_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_invoice_appointment: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		Appointment_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		regardingobjectid_incident_appointment: DG.Microsoft.Dynamics.CRM.incidentSingle;
		seriesid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmasterSingle;
		owningbusinessunit_appointment: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		Appointment_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		regardingobjectid_campaign_appointment: DG.Microsoft.Dynamics.CRM.campaignSingle;
		appointment_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		regardingobjectid_quote_appointment: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_contract_appointment: DG.Microsoft.Dynamics.CRM.contractSingle;
		Appointment_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedonbehalfby_appointment: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Appointment_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		appointment_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		modifiedby_appointment: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		appointment_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		Appointment_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		regardingobjectid_lead_appointment: DG.Microsoft.Dynamics.CRM.leadSingle;
		appointment_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		regardingobjectid_opportunity_appointment: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		regardingobjectid_contact_appointment: DG.Microsoft.Dynamics.CRM.contactSingle;
		createdonbehalfby_appointment: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_knowledgearticle_appointment: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		serviceid_appointment: DG.Microsoft.Dynamics.CRM.serviceSingle;
		regardingobjectid_account_appointment: DG.Microsoft.Dynamics.CRM.accountSingle;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		transactioncurrencyid_appointment: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		createdby_appointment: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_salesorder_appointment: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		regardingobjectid_bulkoperation_appointment: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		regardingobjectid_campaignactivity_appointment: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		owningteam_appointment: DG.Microsoft.Dynamics.CRM.teamSingle;
		appointment_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		owninguser_appointment: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		CreatedActivity_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		activity_pointer_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		activity_pointer_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		activity_pointer_email: DG.Microsoft.Dynamics.CRM.email[];
		sendermailboxid: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		activity_pointer_quote_close: DG.Microsoft.Dynamics.CRM.quoteclose[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		ActivityPointer_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		ActivityPointer_CampaignActivityItems: DG.Microsoft.Dynamics.CRM.campaignactivityitem[];
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		activity_pointer_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_service_appointment: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		activity_pointer_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		activity_pointer_fax: DG.Microsoft.Dynamics.CRM.fax[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation_logs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		serviceid: DG.Microsoft.Dynamics.CRM.serviceSingle;
		activity_pointer_task: DG.Microsoft.Dynamics.CRM.task[];
		activity_pointer_opportunity_close: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		activity_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		activity_pointer_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		activity_pointer_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		activity_pointer_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		activity_pointer_order_close: DG.Microsoft.Dynamics.CRM.orderclose[];
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		activity_pointer_incident_resolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		activity_pointer_letter: DG.Microsoft.Dynamics.CRM.letter[];
		activitypointer_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		ActivityPointer_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		activitypointer_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		ActivityPointer_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		activitypointer_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
	}
	interface competitorSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.competitor> {
		leadcompetitors_association: DG.Microsoft.Dynamics.CRM.lead[];
		competitorsalesliterature_association: DG.Microsoft.Dynamics.CRM.salesliterature[];
		competitorproduct_association: DG.Microsoft.Dynamics.CRM.product[];
		opportunitycompetitors_association: DG.Microsoft.Dynamics.CRM.opportunity[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Competitor_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		competitor_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		Competitor_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		competitor_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		competitor_addresses: DG.Microsoft.Dynamics.CRM.competitoraddress[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		Competitor_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		competitor_opportunity_activities: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		Competitor_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		Competitor_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		competitor_PostRegardings: DG.Microsoft.Dynamics.CRM.postregarding[];
		competitor_PostFollows: DG.Microsoft.Dynamics.CRM.postfollow[];
	}
	interface positionSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.position> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		position_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		position_users: DG.Microsoft.Dynamics.CRM.systemuser[];
		parentpositionid: DG.Microsoft.Dynamics.CRM.positionSingle;
		position_parent_position: DG.Microsoft.Dynamics.CRM.position[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		position_connection1: DG.Microsoft.Dynamics.CRM.connection[];
		position_connection2: DG.Microsoft.Dynamics.CRM.connection[];
	}
	interface similarityruleSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.similarityrule> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		similarityrule_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		similarityrule_textanalyticsentitymapping: DG.Microsoft.Dynamics.CRM.textanalyticsentitymapping[];
	}
	interface productpricelevelSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.productpricelevel> {
		uomid: DG.Microsoft.Dynamics.CRM.uomSingle;
		ProductPriceLevel_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		ProductPriceLevel_RecommendationCache_AdditionalDataRecordId: DG.Microsoft.Dynamics.CRM.recommendationcache[];
		pricelevelid: DG.Microsoft.Dynamics.CRM.pricelevelSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ProductPriceLevel_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		productid: DG.Microsoft.Dynamics.CRM.productSingle;
		discounttypeid: DG.Microsoft.Dynamics.CRM.discounttypeSingle;
		uomscheduleid: DG.Microsoft.Dynamics.CRM.uomscheduleSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface discounttypeSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.discounttype> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		DiscountType_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		DiscountType_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		discount_type_discounts: DG.Microsoft.Dynamics.CRM.discount[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		discount_type_product_price_levels: DG.Microsoft.Dynamics.CRM.productpricelevel[];
	}
	interface reportSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.report> {
		Report_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		report_reportcategories: DG.Microsoft.Dynamics.CRM.reportcategory[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		parentreportid: DG.Microsoft.Dynamics.CRM.reportSingle;
		report_parent_report: DG.Microsoft.Dynamics.CRM.report[];
	}
	interface incidentresolutionSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.incidentresolution> {
		serviceid_incidentresolution: DG.Microsoft.Dynamics.CRM.serviceSingle;
		IncidentResolution_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		createdonbehalfby_incidentresolution: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		IncidentResolution_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		IncidentResolution_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		incidentid: DG.Microsoft.Dynamics.CRM.incidentSingle;
		owninguser_incidentresolution: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby_incidentresolution: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby_incidentresolution: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		owningbusinessunit_incidentresolution: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		owningteam_incidentresolution: DG.Microsoft.Dynamics.CRM.teamSingle;
		incidentresolution_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		createdby_incidentresolution: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		CreatedActivity_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		activity_pointer_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		activity_pointer_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		activity_pointer_email: DG.Microsoft.Dynamics.CRM.email[];
		sendermailboxid: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		activity_pointer_quote_close: DG.Microsoft.Dynamics.CRM.quoteclose[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		ActivityPointer_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		ActivityPointer_CampaignActivityItems: DG.Microsoft.Dynamics.CRM.campaignactivityitem[];
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		activity_pointer_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_service_appointment: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		activity_pointer_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		activity_pointer_fax: DG.Microsoft.Dynamics.CRM.fax[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation_logs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		serviceid: DG.Microsoft.Dynamics.CRM.serviceSingle;
		activity_pointer_task: DG.Microsoft.Dynamics.CRM.task[];
		activity_pointer_opportunity_close: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		activity_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		activity_pointer_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		activity_pointer_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		activity_pointer_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		activity_pointer_order_close: DG.Microsoft.Dynamics.CRM.orderclose[];
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		activity_pointer_incident_resolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		activity_pointer_letter: DG.Microsoft.Dynamics.CRM.letter[];
		activitypointer_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		ActivityPointer_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		activitypointer_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		ActivityPointer_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		activitypointer_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
	}
	interface privilegeSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.privilege> {
		roletemplateprivileges_association: DG.Microsoft.Dynamics.CRM.roletemplate[];
		roleprivileges_association: DG.Microsoft.Dynamics.CRM.role[];
		Privilege_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Privilege_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
	}
	interface goalrollupquerySingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.goalrollupquery> {
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		goalrollupquery_actualint: DG.Microsoft.Dynamics.CRM.goal[];
		goal_rollupquery_actualmoney: DG.Microsoft.Dynamics.CRM.goal[];
		goal_rollupquery_actualdecimal: DG.Microsoft.Dynamics.CRM.goal[];
		goal_rollupquery_customint: DG.Microsoft.Dynamics.CRM.goal[];
		goal_rollupquery_custommoney: DG.Microsoft.Dynamics.CRM.goal[];
		goal_rollupquery_customdecimal: DG.Microsoft.Dynamics.CRM.goal[];
		goal_rollupquery_inprogressint: DG.Microsoft.Dynamics.CRM.goal[];
		goal_rollupquery_inprogressmoney: DG.Microsoft.Dynamics.CRM.goal[];
		goal_rollupquery_inprogressdecimal: DG.Microsoft.Dynamics.CRM.goal[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		GoalRollupQuery_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		goalrollupquery_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		GoalRollupQuery_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
	}
	interface postfollowSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.postfollow> {
		regardingobjectid_task: DG.Microsoft.Dynamics.CRM.taskSingle;
		regardingobjectid_appointment: DG.Microsoft.Dynamics.CRM.appointmentSingle;
		regardingobjectid_phonecall: DG.Microsoft.Dynamics.CRM.phonecallSingle;
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		regardingobjectid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmasterSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		regardingobjectid_systemuser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		PostFollow_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_queue: DG.Microsoft.Dynamics.CRM.queueSingle;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		regardingobjectid_competitor: DG.Microsoft.Dynamics.CRM.competitorSingle;
	}
	interface annualfiscalcalendarSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.annualfiscalcalendar> {
		AnnualFiscalCalendar_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		AnnualFiscalCalendar_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		salespersonid: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface equipmentSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.equipment> {
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		calendarid: DG.Microsoft.Dynamics.CRM.calendarSingle;
		Equipment_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Equipment_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		Equipment_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		equipment_accounts: DG.Microsoft.Dynamics.CRM.account[];
		businessunitid_businessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		businessunitid_systemuser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Equipment_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		equipment_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		siteid: DG.Microsoft.Dynamics.CRM.siteSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		Equipment_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		equipment_resources: DG.Microsoft.Dynamics.CRM.resource[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Equipment_Email_EmailSender: DG.Microsoft.Dynamics.CRM.email[];
		equipment_contacts: DG.Microsoft.Dynamics.CRM.contact[];
		equipment_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		equipment_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface siteSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.site> {
		organizationid_organization: DG.Microsoft.Dynamics.CRM.organizationSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Site_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Site_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		site_equipment: DG.Microsoft.Dynamics.CRM.equipment[];
		site_system_users: DG.Microsoft.Dynamics.CRM.systemuser[];
		site_service_appointments: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		site_resources: DG.Microsoft.Dynamics.CRM.resource[];
	}
	interface discountSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.discount> {
		Discount_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		discounttypeid: DG.Microsoft.Dynamics.CRM.discounttypeSingle;
		Discount_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface monthlyfiscalcalendarSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.monthlyfiscalcalendar> {
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		salespersonid: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		MonthlyFiscalCalendar_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		MonthlyFiscalCalendar_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface importfileSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.importfile> {
		ImportFile_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		ImportFile_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		recordsownerid_team: DG.Microsoft.Dynamics.CRM.teamSingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		ImportFile_ImportData: DG.Microsoft.Dynamics.CRM.importdata[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		importid: DG.Microsoft.Dynamics.CRM.importSingle;
		recordsownerid_systemuser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ImportLog_ImportFile: DG.Microsoft.Dynamics.CRM.importlog[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		importmapid: DG.Microsoft.Dynamics.CRM.importmapSingle;
	}
	interface importSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.import> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Import_ImportFile: DG.Microsoft.Dynamics.CRM.importfile[];
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Import_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Import_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
	}
	interface importmapSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.importmap> {
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ImportMap_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ImportEntityMapping_ImportMap: DG.Microsoft.Dynamics.CRM.importentitymapping[];
		ImportMap_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ImportMap_ImportFile: DG.Microsoft.Dynamics.CRM.importfile[];
	}
	interface importdataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.importdata> {
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ImportData_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		importfileid: DG.Microsoft.Dynamics.CRM.importfileSingle;
		ImportLog_ImportData: DG.Microsoft.Dynamics.CRM.importlog[];
		ImportData_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface opportunitycloseSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.opportunityclose> {
		serviceid_opportunityclose: DG.Microsoft.Dynamics.CRM.serviceSingle;
		OpportunityClose_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		owninguser_opportunityclose: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		transactioncurrencyid_opportunityclose: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		modifiedonbehalfby_opportunityclose: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		opportunityid: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		OpportunityClose_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdby_opportunityclose: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		competitorid: DG.Microsoft.Dynamics.CRM.competitorSingle;
		opportunityclose_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		modifiedby_opportunityclose: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby_opportunityclose: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		OpportunityClose_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		owningteam_opportunityclose: DG.Microsoft.Dynamics.CRM.teamSingle;
		owningbusinessunit_opportunityclose: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		CreatedActivity_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		activity_pointer_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		activity_pointer_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		activity_pointer_email: DG.Microsoft.Dynamics.CRM.email[];
		sendermailboxid: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		activity_pointer_quote_close: DG.Microsoft.Dynamics.CRM.quoteclose[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		ActivityPointer_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		ActivityPointer_CampaignActivityItems: DG.Microsoft.Dynamics.CRM.campaignactivityitem[];
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		activity_pointer_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_service_appointment: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		activity_pointer_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		activity_pointer_fax: DG.Microsoft.Dynamics.CRM.fax[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation_logs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		serviceid: DG.Microsoft.Dynamics.CRM.serviceSingle;
		activity_pointer_task: DG.Microsoft.Dynamics.CRM.task[];
		activity_pointer_opportunity_close: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		activity_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		activity_pointer_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		activity_pointer_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		activity_pointer_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		activity_pointer_order_close: DG.Microsoft.Dynamics.CRM.orderclose[];
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		activity_pointer_incident_resolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		activity_pointer_letter: DG.Microsoft.Dynamics.CRM.letter[];
		activitypointer_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		ActivityPointer_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		activitypointer_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		ActivityPointer_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		activitypointer_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
	}
	interface userformSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.userform> {
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		UserForm_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		UserForm_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
	}
	interface opportunityproductSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.opportunityproduct> {
		productid: DG.Microsoft.Dynamics.CRM.productSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		opportunityid: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		OpportunityProduct_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		productassociationid_productassociation: DG.Microsoft.Dynamics.CRM.productassociationSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		uomid: DG.Microsoft.Dynamics.CRM.uomSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		OpportunityProduct_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		parentbundleid_opportunityproduct: DG.Microsoft.Dynamics.CRM.opportunityproductSingle;
		opportunityproduct_parent_opportunityproduct: DG.Microsoft.Dynamics.CRM.opportunityproduct[];
	}
	interface productassociationSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.productassociation> {
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		associatedproduct: DG.Microsoft.Dynamics.CRM.productSingle;
		productAssociation_invoice_details: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		productid: DG.Microsoft.Dynamics.CRM.productSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		productAssociation_salesorder_details: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		ProductAssociation_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		uomid: DG.Microsoft.Dynamics.CRM.uomSingle;
		productAssociation_quote_details: DG.Microsoft.Dynamics.CRM.quotedetail[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		productAssociation_opportunity_product: DG.Microsoft.Dynamics.CRM.opportunityproduct[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface socialactivitySingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.socialactivity> {
		regardingobjectid_knowledgebaserecord_socialactivity: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		socialactivity_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		regardingobjectid_entitlement_socialactivity: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		modifiedonbehalfby_socialactivity: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_incident_socialactivity: DG.Microsoft.Dynamics.CRM.incidentSingle;
		regardingobjectid_contact_socialactivity: DG.Microsoft.Dynamics.CRM.contactSingle;
		regardingobjectid_asyncoperation: DG.Microsoft.Dynamics.CRM.asyncoperationSingle;
		postauthor_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		regardingobjectid_bulkoperation_socialactivity: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		createdonbehalfby_socialactivity: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		transactioncurrencyid_socialactivity: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		regardingobjectid_salesorder_socialactivity: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		SocialActivity_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		regardingobjectid_knowledgearticle_socialactivity: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		socialactivity_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		regardingobjectid_quote_socialactivity: DG.Microsoft.Dynamics.CRM.quoteSingle;
		owningteam_socialactivity: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_account_socialactivity: DG.Microsoft.Dynamics.CRM.accountSingle;
		postauthoraccount_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		serviceid_socialactivity: DG.Microsoft.Dynamics.CRM.serviceSingle;
		regardingobjectid_entitlementtemplate_socialactivity: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		postauthoraccount_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		createdby_socialactivity: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		SocialActivity_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		postfromprofileid: DG.Microsoft.Dynamics.CRM.socialprofileSingle;
		postauthor_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_lead_socialactivity: DG.Microsoft.Dynamics.CRM.leadSingle;
		regardingobjectid_contract_socialactivity: DG.Microsoft.Dynamics.CRM.contractSingle;
		modifiedby_socialactivity: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		socialactivity_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		SocialActivity_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		SocialActivity_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		owninguser_socialactivity: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		SocialActivity_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		SocialActivity_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_invoice_socialactivity: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		owningbusinessunit_socialactivity: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_opportunity_socialactivity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		CreatedActivity_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		activity_pointer_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		activity_pointer_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		activity_pointer_email: DG.Microsoft.Dynamics.CRM.email[];
		sendermailboxid: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		activity_pointer_quote_close: DG.Microsoft.Dynamics.CRM.quoteclose[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		ActivityPointer_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		ActivityPointer_CampaignActivityItems: DG.Microsoft.Dynamics.CRM.campaignactivityitem[];
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		activity_pointer_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_service_appointment: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		activity_pointer_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		activity_pointer_fax: DG.Microsoft.Dynamics.CRM.fax[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation_logs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		serviceid: DG.Microsoft.Dynamics.CRM.serviceSingle;
		activity_pointer_task: DG.Microsoft.Dynamics.CRM.task[];
		activity_pointer_opportunity_close: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		activity_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		activity_pointer_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		activity_pointer_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		activity_pointer_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		activity_pointer_order_close: DG.Microsoft.Dynamics.CRM.orderclose[];
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		activity_pointer_incident_resolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		activity_pointer_letter: DG.Microsoft.Dynamics.CRM.letter[];
		activitypointer_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		ActivityPointer_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		activitypointer_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		ActivityPointer_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		activitypointer_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
	}
	interface queueitemSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.queueitem> {
		objectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		objectid_appointment: DG.Microsoft.Dynamics.CRM.appointmentSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		objectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		workerid_systemuser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		objectid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		queueid: DG.Microsoft.Dynamics.CRM.queueSingle;
		objectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		QueueItem_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		workerid_team: DG.Microsoft.Dynamics.CRM.teamSingle;
		objectid_fax: DG.Microsoft.Dynamics.CRM.faxSingle;
		objectid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmasterSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		objectid_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponseSingle;
		objectid_serviceappointment: DG.Microsoft.Dynamics.CRM.serviceappointmentSingle;
		objectid_letter: DG.Microsoft.Dynamics.CRM.letterSingle;
		objectid_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivitySingle;
		objectid_phonecall: DG.Microsoft.Dynamics.CRM.phonecallSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		objectid_task: DG.Microsoft.Dynamics.CRM.taskSingle;
		QueueItem_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		objectid_email: DG.Microsoft.Dynamics.CRM.emailSingle;
		objectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface serviceappointmentSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.serviceappointment> {
		regardingobjectid_entitlement_serviceappointment: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate_serviceappointment: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_knowledgebaserecord_serviceappointment: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_account_serviceappointment: DG.Microsoft.Dynamics.CRM.accountSingle;
		serviceappointment_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		serviceid_serviceappointment: DG.Microsoft.Dynamics.CRM.serviceSingle;
		ServiceAppointment_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdonbehalfby_serviceappointment: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_incident_serviceappointment: DG.Microsoft.Dynamics.CRM.incidentSingle;
		serviceappointment_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owninguser_serviceappointment: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_salesorder_serviceappointment: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		ServiceAppointment_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		regardingobjectid_contact_serviceappointment: DG.Microsoft.Dynamics.CRM.contactSingle;
		serviceappointment_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		regardingobjectid_contract_serviceappointment: DG.Microsoft.Dynamics.CRM.contractSingle;
		regardingobjectid_campaign_serviceappointment: DG.Microsoft.Dynamics.CRM.campaignSingle;
		ServiceAppointment_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_opportunity_serviceappointment: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		regardingobjectid_quote_serviceappointment: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_knowledgearticle_serviceappointment: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		siteid: DG.Microsoft.Dynamics.CRM.siteSingle;
		createdby_serviceappointment: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		transactioncurrencyid_serviceappointment: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		ServiceAppointment_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		modifiedby_serviceappointment: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam_serviceappointment: DG.Microsoft.Dynamics.CRM.teamSingle;
		modifiedonbehalfby_serviceappointment: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_invoice_serviceappointment: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		owningbusinessunit_serviceappointment: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_lead_serviceappointment: DG.Microsoft.Dynamics.CRM.leadSingle;
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		CreatedActivity_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		activity_pointer_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		activity_pointer_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		activity_pointer_email: DG.Microsoft.Dynamics.CRM.email[];
		sendermailboxid: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		activity_pointer_quote_close: DG.Microsoft.Dynamics.CRM.quoteclose[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		ActivityPointer_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		ActivityPointer_CampaignActivityItems: DG.Microsoft.Dynamics.CRM.campaignactivityitem[];
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		activity_pointer_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_service_appointment: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		activity_pointer_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		activity_pointer_fax: DG.Microsoft.Dynamics.CRM.fax[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation_logs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		serviceid: DG.Microsoft.Dynamics.CRM.serviceSingle;
		activity_pointer_task: DG.Microsoft.Dynamics.CRM.task[];
		activity_pointer_opportunity_close: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		activity_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		activity_pointer_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		activity_pointer_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		activity_pointer_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		activity_pointer_order_close: DG.Microsoft.Dynamics.CRM.orderclose[];
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		activity_pointer_incident_resolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		activity_pointer_letter: DG.Microsoft.Dynamics.CRM.letter[];
		activitypointer_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		ActivityPointer_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		activitypointer_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		ActivityPointer_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		activitypointer_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
	}
	interface quarterlyfiscalcalendarSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.quarterlyfiscalcalendar> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		QuarterlyFiscalCalendar_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		QuarterlyFiscalCalendar_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		salespersonid: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface systemformSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.systemform> {
		SystemForm_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		SystemForm_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		ancestorformid: DG.Microsoft.Dynamics.CRM.systemformSingle;
		form_ancestor_form: DG.Microsoft.Dynamics.CRM.systemform[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
	}
	interface connectionroleSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.connectionrole> {
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Connection_Role_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		connection_role_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		connection_role_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		connectionroleassociation_association: DG.Microsoft.Dynamics.CRM.connectionrole[];
		connectionroleassociation_association_referenced: DG.Microsoft.Dynamics.CRM.connectionrole[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
	}
	interface kbarticlecommentSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.kbarticlecomment> {
		KbArticleComment_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		KbArticleComment_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		kbarticleid: DG.Microsoft.Dynamics.CRM.kbarticleSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface mailmergetemplateSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.mailmergetemplate> {
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		MailMergeTemplate_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface quotecloseSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.quoteclose> {
		modifiedonbehalfby_quoteclose: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		serviceid_quoteclose: DG.Microsoft.Dynamics.CRM.serviceSingle;
		quoteid: DG.Microsoft.Dynamics.CRM.quoteSingle;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		createdonbehalfby_quoteclose: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		QuoteClose_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		QuoteClose_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		quoteclose_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		QuoteClose_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		owningbusinessunit_quoteclose: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		owninguser_quoteclose: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam_quoteclose: DG.Microsoft.Dynamics.CRM.teamSingle;
		createdby_quoteclose: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby_quoteclose: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		CreatedActivity_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		activity_pointer_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		activity_pointer_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		activity_pointer_email: DG.Microsoft.Dynamics.CRM.email[];
		sendermailboxid: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		activity_pointer_quote_close: DG.Microsoft.Dynamics.CRM.quoteclose[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		ActivityPointer_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		ActivityPointer_CampaignActivityItems: DG.Microsoft.Dynamics.CRM.campaignactivityitem[];
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		activity_pointer_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_service_appointment: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		activity_pointer_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		activity_pointer_fax: DG.Microsoft.Dynamics.CRM.fax[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation_logs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		serviceid: DG.Microsoft.Dynamics.CRM.serviceSingle;
		activity_pointer_task: DG.Microsoft.Dynamics.CRM.task[];
		activity_pointer_opportunity_close: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		activity_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		activity_pointer_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		activity_pointer_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		activity_pointer_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		activity_pointer_order_close: DG.Microsoft.Dynamics.CRM.orderclose[];
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		activity_pointer_incident_resolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		activity_pointer_letter: DG.Microsoft.Dynamics.CRM.letter[];
		activitypointer_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		ActivityPointer_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		activitypointer_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		ActivityPointer_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		activitypointer_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
	}
	interface connectionSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.connection> {
		record1id_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		record2id_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		record1id_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		record2id_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		record1id_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		record2id_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		record1id_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		record2id_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		record2id_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivitySingle;
		record2id_task: DG.Microsoft.Dynamics.CRM.taskSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		record1id_systemuser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		record2id_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		record1id_territory: DG.Microsoft.Dynamics.CRM.territorySingle;
		record2id_systemuser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		record2id_team: DG.Microsoft.Dynamics.CRM.teamSingle;
		record1id_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		record1id_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		record2id_territory: DG.Microsoft.Dynamics.CRM.territorySingle;
		record1id_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		record2id_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		record2id_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		record2id_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		record2id_letter: DG.Microsoft.Dynamics.CRM.letterSingle;
		record1id_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		record2id_resourcegroup: DG.Microsoft.Dynamics.CRM.resourcegroupSingle;
		record2id_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		record2id_serviceappointment: DG.Microsoft.Dynamics.CRM.serviceappointmentSingle;
		record1id_email: DG.Microsoft.Dynamics.CRM.emailSingle;
		record1id_resourcegroup: DG.Microsoft.Dynamics.CRM.resourcegroupSingle;
		record2id_list: DG.Microsoft.Dynamics.CRM.listSingle;
		record1id_socialprofile: DG.Microsoft.Dynamics.CRM.socialprofileSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		record2id_pricelevel: DG.Microsoft.Dynamics.CRM.pricelevelSingle;
		record1id_task: DG.Microsoft.Dynamics.CRM.taskSingle;
		record1id_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		record2id_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		record2id_email: DG.Microsoft.Dynamics.CRM.emailSingle;
		record1id_serviceappointment: DG.Microsoft.Dynamics.CRM.serviceappointmentSingle;
		record2id_competitor: DG.Microsoft.Dynamics.CRM.competitorSingle;
		record2id_socialprofile: DG.Microsoft.Dynamics.CRM.socialprofileSingle;
		record2id_product: DG.Microsoft.Dynamics.CRM.productSingle;
		record1id_team: DG.Microsoft.Dynamics.CRM.teamSingle;
		record2roleid: DG.Microsoft.Dynamics.CRM.connectionroleSingle;
		record2id_goal: DG.Microsoft.Dynamics.CRM.goalSingle;
		record1id_position: DG.Microsoft.Dynamics.CRM.positionSingle;
		record1id_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmasterSingle;
		record2id_constraintbasedgroup: DG.Microsoft.Dynamics.CRM.constraintbasedgroupSingle;
		record1id_competitor: DG.Microsoft.Dynamics.CRM.competitorSingle;
		record2id_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		Connection_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		record1id_appointment: DG.Microsoft.Dynamics.CRM.appointmentSingle;
		record1id_list: DG.Microsoft.Dynamics.CRM.listSingle;
		record1id_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		record2id_fax: DG.Microsoft.Dynamics.CRM.faxSingle;
		record1id_equipment: DG.Microsoft.Dynamics.CRM.equipmentSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		record2id_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		record1id_product: DG.Microsoft.Dynamics.CRM.productSingle;
		relatedconnectionid: DG.Microsoft.Dynamics.CRM.connectionSingle;
		connection_related_connection: DG.Microsoft.Dynamics.CRM.connection[];
		record2id_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmasterSingle;
		record1id_phonecall: DG.Microsoft.Dynamics.CRM.phonecallSingle;
		record1id_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		record2id_appointment: DG.Microsoft.Dynamics.CRM.appointmentSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		record1id_goal: DG.Microsoft.Dynamics.CRM.goalSingle;
		record1id_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivitySingle;
		record1id_fax: DG.Microsoft.Dynamics.CRM.faxSingle;
		record2id_position: DG.Microsoft.Dynamics.CRM.positionSingle;
		record1roleid: DG.Microsoft.Dynamics.CRM.connectionroleSingle;
		record1id_letter: DG.Microsoft.Dynamics.CRM.letterSingle;
		record2id_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		record1id_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		record1id_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		record1id_constraintbasedgroup: DG.Microsoft.Dynamics.CRM.constraintbasedgroupSingle;
		record2id_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		record2id_equipment: DG.Microsoft.Dynamics.CRM.equipmentSingle;
		record1id_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		record2id_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		record1id_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		record2id_phonecall: DG.Microsoft.Dynamics.CRM.phonecallSingle;
		record1id_pricelevel: DG.Microsoft.Dynamics.CRM.pricelevelSingle;
	}
	interface territorySingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.territory> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		territory_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		territory_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		managerid: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Territory_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		Territory_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		Territory_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		territory_accounts: DG.Microsoft.Dynamics.CRM.account[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		Territory_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		territory_system_users: DG.Microsoft.Dynamics.CRM.systemuser[];
	}
	interface resourcegroupSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.resourcegroup> {
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		resourcegroup_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		resourcegroup_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		businessunitid: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		resourcegroupid_constraintbasedgroup: DG.Microsoft.Dynamics.CRM.constraintbasedgroupSingle;
		ResourceGroup_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		ResourceGroup_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		resourcegroupid_team: DG.Microsoft.Dynamics.CRM.teamSingle;
		ResourceGroup_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		ResourceGroup_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
	}
	interface goalSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.goal> {
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		rollupqueryactualintegerid: DG.Microsoft.Dynamics.CRM.goalrollupquerySingle;
		rollupqueryactualmoneyid: DG.Microsoft.Dynamics.CRM.goalrollupquerySingle;
		rollupqueryactualdecimalid: DG.Microsoft.Dynamics.CRM.goalrollupquerySingle;
		rollupquerycustomintegerid: DG.Microsoft.Dynamics.CRM.goalrollupquerySingle;
		rollupquerycustommoneyid: DG.Microsoft.Dynamics.CRM.goalrollupquerySingle;
		rollupquerycustomdecimalid: DG.Microsoft.Dynamics.CRM.goalrollupquerySingle;
		rollupqueryinprogressintegerid: DG.Microsoft.Dynamics.CRM.goalrollupquerySingle;
		rollupqueryinprogressmoneyid: DG.Microsoft.Dynamics.CRM.goalrollupquerySingle;
		rollupqueryinprogressdecimalid: DG.Microsoft.Dynamics.CRM.goalrollupquerySingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		goalownerid_systemuser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		parentgoalid: DG.Microsoft.Dynamics.CRM.goalSingle;
		goal_parent_goal: DG.Microsoft.Dynamics.CRM.goal[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		metricid: DG.Microsoft.Dynamics.CRM.metricSingle;
		Goal_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		goalwitherrorid: DG.Microsoft.Dynamics.CRM.goalSingle;
		Goal_RollupError_Goal: DG.Microsoft.Dynamics.CRM.goal[];
		goal_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		Goal_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		goal_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		Goal_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Goal_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		goalownerid_team: DG.Microsoft.Dynamics.CRM.teamSingle;
	}
	interface metricSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.metric> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		metric_goal: DG.Microsoft.Dynamics.CRM.goal[];
		metric_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
	}
	interface roleSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.role> {
		systemuserroles_association: DG.Microsoft.Dynamics.CRM.systemuser[];
		roleprivileges_association: DG.Microsoft.Dynamics.CRM.privilege[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		parentroleid: DG.Microsoft.Dynamics.CRM.roleSingle;
		role_parent_role: DG.Microsoft.Dynamics.CRM.role[];
		businessunitid: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		roletemplateid: DG.Microsoft.Dynamics.CRM.roletemplateSingle;
		Role_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		Role_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		organizationid_organization: DG.Microsoft.Dynamics.CRM.organizationSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		teamroles_association: DG.Microsoft.Dynamics.CRM.team[];
		parentrootroleid: DG.Microsoft.Dynamics.CRM.roleSingle;
		role_parent_root_role: DG.Microsoft.Dynamics.CRM.role[];
	}
	interface roletemplateSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.roletemplate> {
		roletemplateprivileges_association: DG.Microsoft.Dynamics.CRM.privilege[];
		role_template_roles: DG.Microsoft.Dynamics.CRM.role[];
	}
	interface resourceSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.resource> {
		resourceid_systemuser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Resource_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		Resource_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		resourceid_equipment: DG.Microsoft.Dynamics.CRM.equipmentSingle;
		businessunitid: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		resourceid_resourcespec: DG.Microsoft.Dynamics.CRM.resourcespecSingle;
		siteid: DG.Microsoft.Dynamics.CRM.siteSingle;
	}
	interface salesorderdetailSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.salesorderdetail> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		parentbundleid_salesorderdetail: DG.Microsoft.Dynamics.CRM.salesorderdetailSingle;
		salesorderdetail_parent_salesorderdetail: DG.Microsoft.Dynamics.CRM.salesorderdetail[];
		uomid: DG.Microsoft.Dynamics.CRM.uomSingle;
		productassociationid_productassociation: DG.Microsoft.Dynamics.CRM.productassociationSingle;
		salesorderid: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		SalesOrderDetail_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		salesrepid: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		productid: DG.Microsoft.Dynamics.CRM.productSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		SalesOrderDetail_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
	}
	interface savedquerySingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.savedquery> {
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		SavedQuery_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		SavedQuery_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		lk_mobileofflineprofileitem_savedquery: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitem[];
	}
	interface activitymimeattachmentSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.activitymimeattachment> {
		objectid_email: DG.Microsoft.Dynamics.CRM.emailSingle;
		objectid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		objectid_template: DG.Microsoft.Dynamics.CRM.templateSingle;
		attachmentid: DG.Microsoft.Dynamics.CRM.attachmentSingle;
		objectid_appointment: DG.Microsoft.Dynamics.CRM.appointmentSingle;
		ActivityMimeAttachment_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		ActivityMimeAttachment_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
	}
	interface attachmentSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.attachment> {
		attachment_activity_mime_attachments: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
	}
	interface invoicedetailSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.invoicedetail> {
		productassociationid_productassociation: DG.Microsoft.Dynamics.CRM.productassociationSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		InvoiceDetail_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		uomid: DG.Microsoft.Dynamics.CRM.uomSingle;
		salesrepid: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		productid: DG.Microsoft.Dynamics.CRM.productSingle;
		InvoiceDetail_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		invoiceid: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		parentbundleid_invoicedetail: DG.Microsoft.Dynamics.CRM.invoicedetailSingle;
		invoicedetail_parent_invoicedetail: DG.Microsoft.Dynamics.CRM.invoicedetail[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface ordercloseSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.orderclose> {
		createdonbehalfby_orderclose: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningbusinessunit_orderclose: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		modifiedby_orderclose: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby_orderclose: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby_orderclose: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		OrderClose_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		serviceid_orderclose: DG.Microsoft.Dynamics.CRM.serviceSingle;
		OrderClose_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		orderclose_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
		owninguser_orderclose: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		OrderClose_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		salesorderid: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		owningteam_orderclose: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		CreatedActivity_BulkOperationLogs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		activity_pointer_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivity[];
		activity_pointer_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmaster[];
		activity_pointer_email: DG.Microsoft.Dynamics.CRM.email[];
		sendermailboxid: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		activity_pointer_quote_close: DG.Microsoft.Dynamics.CRM.quoteclose[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		ActivityPointer_QueueItem: DG.Microsoft.Dynamics.CRM.queueitem[];
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation: DG.Microsoft.Dynamics.CRM.bulkoperation[];
		ActivityPointer_CampaignActivityItems: DG.Microsoft.Dynamics.CRM.campaignactivityitem[];
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		activity_pointer_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_service_appointment: DG.Microsoft.Dynamics.CRM.serviceappointment[];
		activity_pointer_activity_mime_attachment: DG.Microsoft.Dynamics.CRM.activitymimeattachment[];
		activity_pointer_fax: DG.Microsoft.Dynamics.CRM.fax[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activity_pointer_BulkOperation_logs: DG.Microsoft.Dynamics.CRM.bulkoperationlog[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		serviceid: DG.Microsoft.Dynamics.CRM.serviceSingle;
		activity_pointer_task: DG.Microsoft.Dynamics.CRM.task[];
		activity_pointer_opportunity_close: DG.Microsoft.Dynamics.CRM.opportunityclose[];
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		activity_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponse[];
		activity_pointer_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		activity_pointer_phonecall: DG.Microsoft.Dynamics.CRM.phonecall[];
		activity_pointer_appointment: DG.Microsoft.Dynamics.CRM.appointment[];
		activity_pointer_order_close: DG.Microsoft.Dynamics.CRM.orderclose[];
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		activity_pointer_incident_resolution: DG.Microsoft.Dynamics.CRM.incidentresolution[];
		activity_pointer_letter: DG.Microsoft.Dynamics.CRM.letter[];
		activitypointer_connections2: DG.Microsoft.Dynamics.CRM.connection[];
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		ActivityPointer_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		activitypointer_connections1: DG.Microsoft.Dynamics.CRM.connection[];
		ActivityPointer_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		activitypointer_activity_parties: DG.Microsoft.Dynamics.CRM.activityparty[];
	}
	interface quotedetailSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.quotedetail> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		QuoteDetail_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		productid: DG.Microsoft.Dynamics.CRM.productSingle;
		uomid: DG.Microsoft.Dynamics.CRM.uomSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		productassociationid_productassociation: DG.Microsoft.Dynamics.CRM.productassociationSingle;
		parentbundleid_quotedetail: DG.Microsoft.Dynamics.CRM.quotedetailSingle;
		quotedetail_parent_quotedetail: DG.Microsoft.Dynamics.CRM.quotedetail[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		QuoteDetail_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		quoteid: DG.Microsoft.Dynamics.CRM.quoteSingle;
		salesrepid: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface annotationSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.annotation> {
		objectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		objectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		objectid_entitlementchannel: DG.Microsoft.Dynamics.CRM.entitlementchannelSingle;
		objectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		objectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		objectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		objectid_list: DG.Microsoft.Dynamics.CRM.listSingle;
		objectid_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponseSingle;
		objectid_kbarticle: DG.Microsoft.Dynamics.CRM.kbarticleSingle;
		objectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		objectid_appointment: DG.Microsoft.Dynamics.CRM.appointmentSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		Annotation_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		objectid_sla: DG.Microsoft.Dynamics.CRM.slaSingle;
		objectid_calendar: DG.Microsoft.Dynamics.CRM.calendarSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		objectid_fax: DG.Microsoft.Dynamics.CRM.faxSingle;
		objectid_incidentresolution: DG.Microsoft.Dynamics.CRM.incidentresolutionSingle;
		objectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		objectid_letter: DG.Microsoft.Dynamics.CRM.letterSingle;
		objectid_service: DG.Microsoft.Dynamics.CRM.serviceSingle;
		objectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		objectid_quoteclose: DG.Microsoft.Dynamics.CRM.quotecloseSingle;
		objectid_competitor: DG.Microsoft.Dynamics.CRM.competitorSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		objectid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		objectid_goal: DG.Microsoft.Dynamics.CRM.goalSingle;
		objectid_task: DG.Microsoft.Dynamics.CRM.taskSingle;
		objectid_email: DG.Microsoft.Dynamics.CRM.emailSingle;
		objectid_orderclose: DG.Microsoft.Dynamics.CRM.ordercloseSingle;
		objectid_workflow: DG.Microsoft.Dynamics.CRM.workflowSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		objectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		objectid_equipment: DG.Microsoft.Dynamics.CRM.equipmentSingle;
		objectid_contractdetail: DG.Microsoft.Dynamics.CRM.contractdetailSingle;
		objectid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Annotation_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		objectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		objectid_mailbox: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		objectid_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivitySingle;
		objectid_resourcespec: DG.Microsoft.Dynamics.CRM.resourcespecSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		objectid_duplicaterule: DG.Microsoft.Dynamics.CRM.duplicateruleSingle;
		objectid_serviceappointment: DG.Microsoft.Dynamics.CRM.serviceappointmentSingle;
		objectid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		objectid_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		objectid_phonecall: DG.Microsoft.Dynamics.CRM.phonecallSingle;
		objectid_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofileSingle;
		objectid_opportunityclose: DG.Microsoft.Dynamics.CRM.opportunitycloseSingle;
		objectid_product: DG.Microsoft.Dynamics.CRM.productSingle;
		objectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		objectid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmasterSingle;
	}
	interface duplicateruleSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.duplicaterule> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		DuplicateRule_DuplicateRuleConditions: DG.Microsoft.Dynamics.CRM.duplicaterulecondition[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		DuplicateRule_Annotation: DG.Microsoft.Dynamics.CRM.annotation[];
		DuplicateRule_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface userquerySingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.userquery> {
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		UserQuery_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		UserQuery_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface sharepointsiteSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.sharepointsite> {
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		SharePointSite_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		parentsite: DG.Microsoft.Dynamics.CRM.sharepointsiteSingle;
		sharepointsite_parentsite_sharepointsite: DG.Microsoft.Dynamics.CRM.sharepointsite[];
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		SharePointSite_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		sharepointdocumentlocation_parent_sharepointsite: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		SharePointSite_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
	}
	interface salesliteratureSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.salesliterature> {
		campaignsalesliterature_association: DG.Microsoft.Dynamics.CRM.campaign[];
		competitorsalesliterature_association: DG.Microsoft.Dynamics.CRM.competitor[];
		campaignactivitysalesliterature_association: DG.Microsoft.Dynamics.CRM.campaignactivity[];
		productsalesliterature_association: DG.Microsoft.Dynamics.CRM.product[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		sales_literature_items: DG.Microsoft.Dynamics.CRM.salesliteratureitem[];
		subjectid: DG.Microsoft.Dynamics.CRM.subjectSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		employeecontactid: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		SalesLiterature_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		SalesLiterature_SharepointDocumentLocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		SalesLiterature_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface sdkmessageprocessingstepSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep> {
		sdkmessageprocessingstepsecureconfigid: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepsecureconfigSingle;
		sdkmessageid: DG.Microsoft.Dynamics.CRM.sdkmessageSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		sdkmessagefilterid: DG.Microsoft.Dynamics.CRM.sdkmessagefilterSingle;
		impersonatinguserid: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		plugintypeid: DG.Microsoft.Dynamics.CRM.plugintypeSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		eventhandler_plugintype: DG.Microsoft.Dynamics.CRM.plugintypeSingle;
		SdkMessageProcessingStep_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		sdkmessageprocessingstepid_sdkmessageprocessingstepimage: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepimage[];
		eventhandler_serviceendpoint: DG.Microsoft.Dynamics.CRM.serviceendpointSingle;
	}
	interface sdkmessageprocessingstepsecureconfigSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepsecureconfig> {
		sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface sdkmessageSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.sdkmessage> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		sdkmessageid_sdkmessageprocessingstep: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		sdkmessageid_sdkmessagefilter: DG.Microsoft.Dynamics.CRM.sdkmessagefilter[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface sdkmessagefilterSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.sdkmessagefilter> {
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		sdkmessagefilterid_sdkmessageprocessingstep: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		sdkmessageid: DG.Microsoft.Dynamics.CRM.sdkmessageSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface serviceendpointSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.serviceendpoint> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		serviceendpoint_sdkmessageprocessingstep: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstep[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface businessunitnewsarticleSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.businessunitnewsarticle> {
		BusinessUnitNewsArticle_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		BusinessUnitNewsArticle_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface importlogSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.importlog> {
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ImportLog_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		importdataid: DG.Microsoft.Dynamics.CRM.importdataSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		ImportLog_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		importfileid: DG.Microsoft.Dynamics.CRM.importfileSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface semiannualfiscalcalendarSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.semiannualfiscalcalendar> {
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		SemiAnnualFiscalCalendar_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		salespersonid: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		SemiAnnualFiscalCalendar_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface fixedmonthlyfiscalcalendarSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.fixedmonthlyfiscalcalendar> {
		FixedMonthlyFiscalCalendar_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		FixedMonthlyFiscalCalendar_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		salespersonid: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface bulkoperationlogSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.bulkoperationlog> {
		createdobjectid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		createdobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		BulkOperationLog_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		bulkoperationid: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		createdobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		bulkoperationid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		createdobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		createdobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		BulkOperationLog_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
	}
	interface salesliteratureitemSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.salesliteratureitem> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		salesliteratureid: DG.Microsoft.Dynamics.CRM.salesliteratureSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		SalesLiteratureItem_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		SalesLiteratureItem_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
	}
	interface sharepointdocumentlocationSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation> {
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_product: DG.Microsoft.Dynamics.CRM.productSingle;
		parentsiteorlocation_sharepointdocumentlocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocationSingle;
		sharepointdocumentlocation_parent_sharepointdocumentlocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocation[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		SharePointDocumentLocation_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_salesliterature: DG.Microsoft.Dynamics.CRM.salesliteratureSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		parentsiteorlocation_sharepointsite: DG.Microsoft.Dynamics.CRM.sharepointsiteSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_kbarticle: DG.Microsoft.Dynamics.CRM.kbarticleSingle;
		SharePointDocumentLocation_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		SharePointDocumentLocation_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
	}
	interface dg_bookingSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.dg_booking> {
		createdbyname: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfbyname: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedbyname: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfbyname: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		dg_booking_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		dg_booking_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		dg_Plane: DG.Microsoft.Dynamics.CRM.dg_planeSingle;
		dg_Hotel: DG.Microsoft.Dynamics.CRM.dg_hotelSingle;
		dg_Car: DG.Microsoft.Dynamics.CRM.dg_carSingle;
		dg_dg_booking_dg_plane_Booking: DG.Microsoft.Dynamics.CRM.dg_plane[];
		dg_dg_booking_dg_hotel_Booking: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		dg_dg_booking_dg_car_Booking: DG.Microsoft.Dynamics.CRM.dg_car[];
	}
	interface dg_planeSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.dg_plane> {
		createdbyname: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfbyname: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedbyname: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfbyname: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		dg_plane_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		dg_plane_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		dg_dg_plane_dg_booking_Plane: DG.Microsoft.Dynamics.CRM.dg_booking[];
		dg_Booking: DG.Microsoft.Dynamics.CRM.dg_bookingSingle;
		dg_Country: DG.Microsoft.Dynamics.CRM.dg_countrySingle;
	}
	interface dg_countrySingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.dg_country> {
		createdbyname: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfbyname: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedbyname: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfbyname: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		dg_country_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		dg_country_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		dg_dg_country_dg_plane_Country: DG.Microsoft.Dynamics.CRM.dg_plane[];
		dg_dg_country_dg_hotel_Country: DG.Microsoft.Dynamics.CRM.dg_hotel[];
		dg_dg_country_dg_car_Country: DG.Microsoft.Dynamics.CRM.dg_car[];
	}
	interface dg_hotelSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.dg_hotel> {
		createdbyname: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfbyname: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedbyname: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfbyname: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		dg_hotel_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		dg_hotel_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		dg_dg_hotel_dg_booking_Hotel: DG.Microsoft.Dynamics.CRM.dg_booking[];
		dg_Booking: DG.Microsoft.Dynamics.CRM.dg_bookingSingle;
		dg_Country: DG.Microsoft.Dynamics.CRM.dg_countrySingle;
	}
	interface dg_carSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.dg_car> {
		createdbyname: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfbyname: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedbyname: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfbyname: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		dg_car_AsyncOperations: DG.Microsoft.Dynamics.CRM.asyncoperation[];
		dg_car_BulkDeleteFailures: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		dg_dg_car_dg_booking_Car: DG.Microsoft.Dynamics.CRM.dg_booking[];
		dg_Booking: DG.Microsoft.Dynamics.CRM.dg_bookingSingle;
		dg_Country: DG.Microsoft.Dynamics.CRM.dg_countrySingle;
	}
	interface activitypartySingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.activityparty> {
		partyid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		partyid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		activityid_serviceappointment: DG.Microsoft.Dynamics.CRM.serviceappointmentSingle;
		activityid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmasterSingle;
		partyid_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		partyid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		activityid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		activityid_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivitySingle;
		activityid_appointment: DG.Microsoft.Dynamics.CRM.appointmentSingle;
		partyid_queue: DG.Microsoft.Dynamics.CRM.queueSingle;
		partyid_systemuser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		activityid_fax: DG.Microsoft.Dynamics.CRM.faxSingle;
		partyid_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		activityid_phonecall: DG.Microsoft.Dynamics.CRM.phonecallSingle;
		activityid_task: DG.Microsoft.Dynamics.CRM.taskSingle;
		activityid_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponseSingle;
		activityid_quoteclose: DG.Microsoft.Dynamics.CRM.quotecloseSingle;
		resourcespecid: DG.Microsoft.Dynamics.CRM.resourcespecSingle;
		activityid_letter: DG.Microsoft.Dynamics.CRM.letterSingle;
		activityid_orderclose: DG.Microsoft.Dynamics.CRM.ordercloseSingle;
		partyid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		partyid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		activityid_email: DG.Microsoft.Dynamics.CRM.emailSingle;
		partyid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		partyid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		activityid_opportunityclose: DG.Microsoft.Dynamics.CRM.opportunitycloseSingle;
		partyid_equipment: DG.Microsoft.Dynamics.CRM.equipmentSingle;
		partyid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		partyid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		partyid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		activityid_incidentresolution: DG.Microsoft.Dynamics.CRM.incidentresolutionSingle;
		activityid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		partyid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
	}
	interface azureserviceconnectionSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.azureserviceconnection> {
		azureserviceconnection_knowledgesearchmodel: DG.Microsoft.Dynamics.CRM.knowledgesearchmodel[];
		azureserviceconnection_recommendationmodel: DG.Microsoft.Dynamics.CRM.recommendationmodel[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		azureserviceconnection_topicmodel: DG.Microsoft.Dynamics.CRM.topicmodel[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
	}
	interface bulkdeletefailureSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.bulkdeletefailure> {
		regardingobjectid_theme: DG.Microsoft.Dynamics.CRM.themeSingle;
		regardingobjectid_productsubstitute: DG.Microsoft.Dynamics.CRM.productsubstituteSingle;
		regardingobjectid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		regardingobjectid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		regardingobjectid_entitlementchannel: DG.Microsoft.Dynamics.CRM.entitlementchannelSingle;
		regardingobjectid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		regardingobjectid_post: DG.Microsoft.Dynamics.CRM.postSingle;
		regardingobjectid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		regardingobjectid_customeraddress: DG.Microsoft.Dynamics.CRM.customeraddressSingle;
		regardingobjectid_annualfiscalcalendar: DG.Microsoft.Dynamics.CRM.annualfiscalcalendarSingle;
		regardingobjectid_fax: DG.Microsoft.Dynamics.CRM.faxSingle;
		regardingobjectid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmasterSingle;
		regardingobjectid_queue: DG.Microsoft.Dynamics.CRM.queueSingle;
		regardingobjectid_contractdetail: DG.Microsoft.Dynamics.CRM.contractdetailSingle;
		regardingobjectid_calendar: DG.Microsoft.Dynamics.CRM.calendarSingle;
		regardingobjectid_quotedetail: DG.Microsoft.Dynamics.CRM.quotedetailSingle;
		regardingobjectid_serviceappointment: DG.Microsoft.Dynamics.CRM.serviceappointmentSingle;
		regardingobjectid_invoicedetail: DG.Microsoft.Dynamics.CRM.invoicedetailSingle;
		regardingobjectid_kbarticlecomment: DG.Microsoft.Dynamics.CRM.kbarticlecommentSingle;
		regardingobjectid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		regardingobjectid_product: DG.Microsoft.Dynamics.CRM.productSingle;
		regardingobjectid_annotation: DG.Microsoft.Dynamics.CRM.annotationSingle;
		regardingobjectid_salesorder: DG.Microsoft.Dynamics.CRM.salesorderSingle;
		regardingobjectid_letter: DG.Microsoft.Dynamics.CRM.letterSingle;
		regardingobjectid_bulkoperation: DG.Microsoft.Dynamics.CRM.bulkoperationSingle;
		regardingobjectid_privilege: DG.Microsoft.Dynamics.CRM.privilegeSingle;
		regardingobjectid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		regardingobjectid_phonecall: DG.Microsoft.Dynamics.CRM.phonecallSingle;
		regardingobjectid_fixedmonthlyfiscalcalendar: DG.Microsoft.Dynamics.CRM.fixedmonthlyfiscalcalendarSingle;
		regardingobjectid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		regardingobjectid_bulkoperationlog: DG.Microsoft.Dynamics.CRM.bulkoperationlogSingle;
		regardingobjectid_businessunitnewsarticle: DG.Microsoft.Dynamics.CRM.businessunitnewsarticleSingle;
		regardingobjectid_systemuser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid_kbarticle: DG.Microsoft.Dynamics.CRM.kbarticleSingle;
		regardingobjectid_template: DG.Microsoft.Dynamics.CRM.templateSingle;
		regardingobjectid_resource: DG.Microsoft.Dynamics.CRM.resourceSingle;
		regardingobjectid_incidentresolution: DG.Microsoft.Dynamics.CRM.incidentresolutionSingle;
		regardingobjectid_quarterlyfiscalcalendar: DG.Microsoft.Dynamics.CRM.quarterlyfiscalcalendarSingle;
		regardingobjectid_invoice: DG.Microsoft.Dynamics.CRM.invoiceSingle;
		regardingobjectid_semiannualfiscalcalendar: DG.Microsoft.Dynamics.CRM.semiannualfiscalcalendarSingle;
		regardingobjectid_importfile: DG.Microsoft.Dynamics.CRM.importfileSingle;
		regardingobjectid_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponseSingle;
		regardingobjectid_systemform: DG.Microsoft.Dynamics.CRM.systemformSingle;
		regardingobjectid_discounttype: DG.Microsoft.Dynamics.CRM.discounttypeSingle;
		regardingobjectid_salesliterature: DG.Microsoft.Dynamics.CRM.salesliteratureSingle;
		regardingobjectid_site: DG.Microsoft.Dynamics.CRM.siteSingle;
		regardingobjectid_territory: DG.Microsoft.Dynamics.CRM.territorySingle;
		regardingobjectid_uomschedule: DG.Microsoft.Dynamics.CRM.uomscheduleSingle;
		regardingobjectid_resourcegroup: DG.Microsoft.Dynamics.CRM.resourcegroupSingle;
		regardingobjectid_importlog: DG.Microsoft.Dynamics.CRM.importlogSingle;
		regardingobjectid_role: DG.Microsoft.Dynamics.CRM.roleSingle;
		regardingobjectid_quoteclose: DG.Microsoft.Dynamics.CRM.quotecloseSingle;
		regardingobjectid_userform: DG.Microsoft.Dynamics.CRM.userformSingle;
		regardingobjectid_equipment: DG.Microsoft.Dynamics.CRM.equipmentSingle;
		regardingobjectid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		regardingobjectid_orderclose: DG.Microsoft.Dynamics.CRM.ordercloseSingle;
		regardingobjectid_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivitySingle;
		regardingobjectid_email: DG.Microsoft.Dynamics.CRM.emailSingle;
		regardingobjectid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		regardingobjectid_resourcespec: DG.Microsoft.Dynamics.CRM.resourcespecSingle;
		regardingobjectid_savedquery: DG.Microsoft.Dynamics.CRM.savedquerySingle;
		regardingobjectid_userquery: DG.Microsoft.Dynamics.CRM.userquerySingle;
		regardingobjectid_appointment: DG.Microsoft.Dynamics.CRM.appointmentSingle;
		regardingobjectid_organization: DG.Microsoft.Dynamics.CRM.organizationSingle;
		regardingobjectid_service: DG.Microsoft.Dynamics.CRM.serviceSingle;
		regardingobjectid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		regardingobjectid_businessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		regardingobjectid_opportunityclose: DG.Microsoft.Dynamics.CRM.opportunitycloseSingle;
		regardingobjectid_monthlyfiscalcalendar: DG.Microsoft.Dynamics.CRM.monthlyfiscalcalendarSingle;
		regardingobjectid_activitymimeattachment: DG.Microsoft.Dynamics.CRM.activitymimeattachmentSingle;
		regardingobjectid_contracttemplate: DG.Microsoft.Dynamics.CRM.contracttemplateSingle;
		regardingobjectid_kbarticletemplate: DG.Microsoft.Dynamics.CRM.kbarticletemplateSingle;
		regardingobjectid_opportunityproduct: DG.Microsoft.Dynamics.CRM.opportunityproductSingle;
		regardingobjectid_productpricelevel: DG.Microsoft.Dynamics.CRM.productpricelevelSingle;
		regardingobjectid_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofileSingle;
		regardingobjectid_sla: DG.Microsoft.Dynamics.CRM.slaSingle;
		bulkdeleteoperationid: DG.Microsoft.Dynamics.CRM.bulkdeleteoperationSingle;
		regardingobjectid_salesliteratureitem: DG.Microsoft.Dynamics.CRM.salesliteratureitemSingle;
		regardingobjectid_uom: DG.Microsoft.Dynamics.CRM.uomSingle;
		regardingobjectid_import: DG.Microsoft.Dynamics.CRM.importSingle;
		regardingobjectid_pricelevel: DG.Microsoft.Dynamics.CRM.pricelevelSingle;
		regardingobjectid_importmap: DG.Microsoft.Dynamics.CRM.importmapSingle;
		regardingobjectid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		regardingobjectid_campaignactivity: DG.Microsoft.Dynamics.CRM.campaignactivitySingle;
		regardingobjectid_competitor: DG.Microsoft.Dynamics.CRM.competitorSingle;
		regardingobjectid_importdata: DG.Microsoft.Dynamics.CRM.importdataSingle;
		regardingobjectid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		regardingobjectid_discount: DG.Microsoft.Dynamics.CRM.discountSingle;
		regardingobjectid_activitypointer: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
		regardingobjectid_list: DG.Microsoft.Dynamics.CRM.listSingle;
		regardingobjectid_salesorderdetail: DG.Microsoft.Dynamics.CRM.salesorderdetailSingle;
		regardingobjectid_task: DG.Microsoft.Dynamics.CRM.taskSingle;
		regardingobjectid_team: DG.Microsoft.Dynamics.CRM.teamSingle;
		regardingobjectid_queueitem: DG.Microsoft.Dynamics.CRM.queueitemSingle;
		regardingobjectid_constraintbasedgroup: DG.Microsoft.Dynamics.CRM.constraintbasedgroupSingle;
		regardingobjectid_subject: DG.Microsoft.Dynamics.CRM.subjectSingle;
		regardingobjectid_dg_booking: DG.Microsoft.Dynamics.CRM.dg_bookingSingle;
		regardingobjectid_dg_plane: DG.Microsoft.Dynamics.CRM.dg_planeSingle;
		regardingobjectid_dg_hotel: DG.Microsoft.Dynamics.CRM.dg_hotelSingle;
		regardingobjectid_dg_car: DG.Microsoft.Dynamics.CRM.dg_carSingle;
		regardingobjectid_dg_country: DG.Microsoft.Dynamics.CRM.dg_countrySingle;
	}
	interface bulkdeleteoperationSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.bulkdeleteoperation> {
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		asyncoperationid: DG.Microsoft.Dynamics.CRM.asyncoperationSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		BulkDeleteOperation_BulkDeleteFailure: DG.Microsoft.Dynamics.CRM.bulkdeletefailure[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface calendarruleSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.calendarrule> {
		calendarid: DG.Microsoft.Dynamics.CRM.calendarSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		innercalendarid: DG.Microsoft.Dynamics.CRM.calendarSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		serviceid: DG.Microsoft.Dynamics.CRM.serviceSingle;
	}
	interface campaignactivityitemSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.campaignactivityitem> {
		campaignactivityid: DG.Microsoft.Dynamics.CRM.activitypointerSingle;
	}
	interface campaignitemSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.campaignitem> {
	}
	interface campaignitem extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		entitytype: string;
		_ownerid_value: System.Guid;
		versionnumber: number;
		owningbusinessunit: System.Guid;
		entityid: System.Guid;
		campaignitemid: System.Guid;
		owninguser: System.Guid;
		_campaignid_value: System.Guid;
	}
	interface channelaccessprofileentityaccesslevelSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.channelaccessprofileentityaccesslevel> {
	}
	interface channelaccessprofileentityaccesslevel extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		channelaccessprofileentityaccesslevelid: System.Guid;
		overwritetime: Date;
		versionnumber: number;
		entityaccesslevelid: System.Guid;
		channelaccessprofileid: System.Guid;
		solutionid: System.Guid;
		ismanaged: boolean;
		channelaccessprofileentityaccesslevelidunique: System.Guid;
		componentstate: number;
		entityaccessleveldepthmask: number;
	}
	interface competitoraddressSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.competitoraddress> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		parentid: DG.Microsoft.Dynamics.CRM.competitorSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface competitorproductSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.competitorproduct> {
	}
	interface competitorproduct extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		competitorproductid: System.Guid;
		competitorid: System.Guid;
		productid: System.Guid;
		versionnumber: number;
	}
	interface competitorsalesliteratureSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.competitorsalesliterature> {
	}
	interface competitorsalesliterature extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		competitorid: System.Guid;
		salesliteratureid: System.Guid;
		versionnumber: number;
		competitorsalesliteratureid: System.Guid;
	}
	interface complexcontrolSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.complexcontrol> {
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
	}
	interface connectionroleassociationSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.connectionroleassociation> {
	}
	interface connectionroleassociation extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		associatedconnectionroleid: System.Guid;
		connectionroleassociationid: System.Guid;
		connectionroleid: System.Guid;
		versionnumber: number;
	}
	interface contactinvoicesSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.contactinvoices> {
	}
	interface contactinvoices extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		contactinvoiceid: System.Guid;
		contactid: System.Guid;
		versionnumber: number;
		invoiceid: System.Guid;
	}
	interface contactleadsSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.contactleads> {
	}
	interface contactleads extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		contactleadid: System.Guid;
		leadid: System.Guid;
		contactid: System.Guid;
		versionnumber: number;
	}
	interface contactordersSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.contactorders> {
	}
	interface contactorders extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		contactorderid: System.Guid;
		contactid: System.Guid;
		versionnumber: number;
		salesorderid: System.Guid;
	}
	interface contactquotesSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.contactquotes> {
	}
	interface contactquotes extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		contactquoteid: System.Guid;
		contactid: System.Guid;
		versionnumber: number;
		quoteid: System.Guid;
	}
	interface customcontroldefaultconfigSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.customcontroldefaultconfig> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface customcontrolresourceSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.customcontrolresource> {
		customcontrolid_customcontrol: DG.Microsoft.Dynamics.CRM.customcontrolSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
	}
	interface customcontrolSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.customcontrol> {
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		customcontrol_resource_id: DG.Microsoft.Dynamics.CRM.customcontrolresource[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface dataperformanceSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.dataperformance> {
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
	}
	interface dependencySingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.dependency> {
	}
	interface dependency extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		_requiredcomponentnodeid_value: System.Guid;
		requiredcomponentparentid: System.Guid;
		requiredcomponentintroducedversion: number;
		requiredcomponentbasesolutionid: System.Guid;
		dependencytype: number;
		requiredcomponenttype: number;
		dependentcomponentbasesolutionid: System.Guid;
		_dependentcomponentnodeid_value: System.Guid;
		dependentcomponenttype: number;
		dependentcomponentobjectid: System.Guid;
		requiredcomponentobjectid: System.Guid;
		dependencyid: System.Guid;
		dependentcomponentparentid: System.Guid;
	}
	interface documenttemplateSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.documenttemplate> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface duplicaterecordSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.duplicaterecord> {
		duplicaterecordid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		baserecordid_knowledgearticle: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		duplicaterecordid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		baserecordid_entitlement: DG.Microsoft.Dynamics.CRM.entitlementSingle;
		duplicaterecordid_entitlementchannel: DG.Microsoft.Dynamics.CRM.entitlementchannelSingle;
		baserecordid_entitlementchannel: DG.Microsoft.Dynamics.CRM.entitlementchannelSingle;
		duplicaterecordid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		baserecordid_entitlementtemplate: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		duplicaterecordid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		baserecordid_knowledgebaserecord: DG.Microsoft.Dynamics.CRM.knowledgebaserecordSingle;
		baserecordid_goalrollupquery: DG.Microsoft.Dynamics.CRM.goalrollupquerySingle;
		duplicaterecordid_publisher: DG.Microsoft.Dynamics.CRM.publisherSingle;
		baserecordid_transactioncurrency: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		baserecordid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		baserecordid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		baserecordid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmasterSingle;
		duplicaterecordid_goal: DG.Microsoft.Dynamics.CRM.goalSingle;
		duplicaterecordid_transactioncurrency: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		baserecordid_competitor: DG.Microsoft.Dynamics.CRM.competitorSingle;
		baserecordid_equipment: DG.Microsoft.Dynamics.CRM.equipmentSingle;
		baserecordid_task: DG.Microsoft.Dynamics.CRM.taskSingle;
		duplicaterecordid_recurringappointmentmaster: DG.Microsoft.Dynamics.CRM.recurringappointmentmasterSingle;
		asyncoperationid: DG.Microsoft.Dynamics.CRM.asyncoperationSingle;
		duplicaterecordid_task: DG.Microsoft.Dynamics.CRM.taskSingle;
		duplicaterecordid_equipment: DG.Microsoft.Dynamics.CRM.equipmentSingle;
		baserecordid_email: DG.Microsoft.Dynamics.CRM.emailSingle;
		baserecordid_socialprofile: DG.Microsoft.Dynamics.CRM.socialprofileSingle;
		baserecordid_team: DG.Microsoft.Dynamics.CRM.teamSingle;
		baserecordid_systemuser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		baserecordid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		baserecordid_appointment: DG.Microsoft.Dynamics.CRM.appointmentSingle;
		baserecordid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		duplicaterecordid_campaign: DG.Microsoft.Dynamics.CRM.campaignSingle;
		baserecordid_sharepointdocumentlocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocationSingle;
		duplicaterecordid_fax: DG.Microsoft.Dynamics.CRM.faxSingle;
		duplicaterecordid_territory: DG.Microsoft.Dynamics.CRM.territorySingle;
		baserecordid_list: DG.Microsoft.Dynamics.CRM.listSingle;
		baserecordid_publisher: DG.Microsoft.Dynamics.CRM.publisherSingle;
		duplicaterecordid_sharepointsite: DG.Microsoft.Dynamics.CRM.sharepointsiteSingle;
		duplicaterecordid_kbarticle: DG.Microsoft.Dynamics.CRM.kbarticleSingle;
		duplicaterecordid_team: DG.Microsoft.Dynamics.CRM.teamSingle;
		duplicaterecordid_appointment: DG.Microsoft.Dynamics.CRM.appointmentSingle;
		baserecordid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		duplicaterecordid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		duplicaterecordid_opportunity: DG.Microsoft.Dynamics.CRM.opportunitySingle;
		duplicaterecordid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
		duplicaterecordid_phonecall: DG.Microsoft.Dynamics.CRM.phonecallSingle;
		baserecordid_resourcegroup: DG.Microsoft.Dynamics.CRM.resourcegroupSingle;
		baserecordid_territory: DG.Microsoft.Dynamics.CRM.territorySingle;
		duplicaterecordid_goalrollupquery: DG.Microsoft.Dynamics.CRM.goalrollupquerySingle;
		baserecordid_sharepointsite: DG.Microsoft.Dynamics.CRM.sharepointsiteSingle;
		baserecordid_phonecall: DG.Microsoft.Dynamics.CRM.phonecallSingle;
		duplicaterecordid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		duplicaterecordid_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponseSingle;
		baserecordid_kbarticle: DG.Microsoft.Dynamics.CRM.kbarticleSingle;
		baserecordid_service: DG.Microsoft.Dynamics.CRM.serviceSingle;
		duplicaterecordid_email: DG.Microsoft.Dynamics.CRM.emailSingle;
		duplicaterecordid_competitor: DG.Microsoft.Dynamics.CRM.competitorSingle;
		baserecordid_letter: DG.Microsoft.Dynamics.CRM.letterSingle;
		baserecordid_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivitySingle;
		duplicaterecordid_systemuser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		duplicaterecordid_lead: DG.Microsoft.Dynamics.CRM.leadSingle;
		duplicaterecordid_socialactivity: DG.Microsoft.Dynamics.CRM.socialactivitySingle;
		duplicaterecordid_sharepointdocumentlocation: DG.Microsoft.Dynamics.CRM.sharepointdocumentlocationSingle;
		duplicaterecordid_socialprofile: DG.Microsoft.Dynamics.CRM.socialprofileSingle;
		baserecordid_goal: DG.Microsoft.Dynamics.CRM.goalSingle;
		duplicaterecordid_account: DG.Microsoft.Dynamics.CRM.accountSingle;
		duplicaterecordid_list: DG.Microsoft.Dynamics.CRM.listSingle;
		duplicaterecordid_resourcegroup: DG.Microsoft.Dynamics.CRM.resourcegroupSingle;
		baserecordid_campaignresponse: DG.Microsoft.Dynamics.CRM.campaignresponseSingle;
		duplicaterecordid_contract: DG.Microsoft.Dynamics.CRM.contractSingle;
		duplicaterecordid_service: DG.Microsoft.Dynamics.CRM.serviceSingle;
		baserecordid_fax: DG.Microsoft.Dynamics.CRM.faxSingle;
		duplicaterecordid_queue: DG.Microsoft.Dynamics.CRM.queueSingle;
		duplicateruleid: DG.Microsoft.Dynamics.CRM.duplicateruleSingle;
		baserecordid_contact: DG.Microsoft.Dynamics.CRM.contactSingle;
		baserecordid_incident: DG.Microsoft.Dynamics.CRM.incidentSingle;
		duplicaterecordid_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofileSingle;
		baserecordid_queue: DG.Microsoft.Dynamics.CRM.queueSingle;
		baserecordid_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofileSingle;
		duplicaterecordid_letter: DG.Microsoft.Dynamics.CRM.letterSingle;
		baserecordid_quote: DG.Microsoft.Dynamics.CRM.quoteSingle;
	}
	interface publisherSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.publisher> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		Publisher_DuplicateMatchingRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		Publisher_DuplicateBaseRecord: DG.Microsoft.Dynamics.CRM.duplicaterecord[];
		publisher_solution: DG.Microsoft.Dynamics.CRM.solution[];
		Publisher_PublisherAddress: DG.Microsoft.Dynamics.CRM.publisheraddress[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface duplicateruleconditionSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.duplicaterulecondition> {
		regardingobjectid: DG.Microsoft.Dynamics.CRM.duplicateruleSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface entitlementcontactsSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.entitlementcontacts> {
	}
	interface entitlementcontacts extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		entitlementcontactid: System.Guid;
		entitlementid: System.Guid;
		versionnumber: number;
		contactid: System.Guid;
	}
	interface entitlementproductsSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.entitlementproducts> {
	}
	interface entitlementproducts extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		entitlementid: System.Guid;
		productid: System.Guid;
		versionnumber: number;
		entitlementproductid: System.Guid;
	}
	interface entitlementtemplatechannelSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.entitlementtemplatechannel> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		entitlementtemplateid: DG.Microsoft.Dynamics.CRM.entitlementtemplateSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface entitlementtemplateproductsSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.entitlementtemplateproducts> {
	}
	interface entitlementtemplateproducts extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		productid: System.Guid;
		entitlementtemplateproductid: System.Guid;
		entitlementtemplateid: System.Guid;
		versionnumber: number;
	}
	interface exchangesyncidmappingSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.exchangesyncidmapping> {
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
	}
	interface fieldpermissionSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.fieldpermission> {
		fieldsecurityprofileid: DG.Microsoft.Dynamics.CRM.fieldsecurityprofileSingle;
	}
	interface fieldsecurityprofileSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.fieldsecurityprofile> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		systemuserprofiles_association: DG.Microsoft.Dynamics.CRM.systemuser[];
		lk_fieldpermission_fieldsecurityprofileid: DG.Microsoft.Dynamics.CRM.fieldpermission[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		teamprofiles_association: DG.Microsoft.Dynamics.CRM.team[];
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface importentitymappingSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.importentitymapping> {
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		importmapid: DG.Microsoft.Dynamics.CRM.importmapSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface importjobSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.importjob> {
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface incidentknowledgebaserecordSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.incidentknowledgebaserecord> {
	}
	interface incidentknowledgebaserecord extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		knowledgebaserecordid: System.Guid;
		incidentid: System.Guid;
		versionnumber: number;
		incidentknowledgebaserecordid: System.Guid;
	}
	interface invaliddependencySingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.invaliddependency> {
	}
	interface invaliddependency extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		existingcomponenttype: number;
		existingdependencytype: number;
		missingcomponentid: System.Guid;
		missingcomponentlookuptype: number;
		invaliddependencyid: System.Guid;
		missingcomponentinfo: string;
		isexistingnoderequiredcomponent: boolean;
		missingcomponenttype: number;
		existingcomponentid: System.Guid;
	}
	interface knowledgearticleincidentSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.knowledgearticleincident> {
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		knowledgearticleid: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		incidentid: DG.Microsoft.Dynamics.CRM.incidentSingle;
	}
	interface knowledgearticleviewsSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.knowledgearticleviews> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		knowledgearticleid: DG.Microsoft.Dynamics.CRM.knowledgearticleSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface knowledgesearchmodelSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.knowledgesearchmodel> {
		azureserviceconnectionid: DG.Microsoft.Dynamics.CRM.azureserviceconnectionSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		knowledgesearchmodel_textanalyticsentitymapping: DG.Microsoft.Dynamics.CRM.textanalyticsentitymapping[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
	}
	interface leadaddressSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.leadaddress> {
		parentid: DG.Microsoft.Dynamics.CRM.leadSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
	}
	interface leadcompetitorsSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.leadcompetitors> {
	}
	interface leadcompetitors extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		versionnumber: number;
		leadid: System.Guid;
		competitorid: System.Guid;
		leadcompetitorid: System.Guid;
	}
	interface leadproductSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.leadproduct> {
	}
	interface leadproduct extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		leadproductid: System.Guid;
		productid: System.Guid;
		leadid: System.Guid;
		versionnumber: number;
	}
	interface listmemberSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.listmember> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface mobileofflineprofileitemassociationSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.mobileofflineprofileitemassociation> {
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		regardingobjectid: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitemSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface mobileofflineprofileitemSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.mobileofflineprofileitem> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		regardingobjectid: DG.Microsoft.Dynamics.CRM.mobileofflineprofileSingle;
		MobileOfflineProfileItem_MobileOfflineProfileItemAssociation: DG.Microsoft.Dynamics.CRM.mobileofflineprofileitemassociation[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		profileitemrule: DG.Microsoft.Dynamics.CRM.savedquerySingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface officegraphdocumentSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.officegraphdocument> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
	}
	interface opportunitycompetitorsSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.opportunitycompetitors> {
	}
	interface opportunitycompetitors extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		opportunitycompetitorid: System.Guid;
		versionnumber: number;
		opportunityid: System.Guid;
		competitorid: System.Guid;
	}
	interface personaldocumenttemplateSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.personaldocumenttemplate> {
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface plugintracelogSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.plugintracelog> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface postcommentSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.postcomment> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		postid: DG.Microsoft.Dynamics.CRM.postSingle;
	}
	interface postlikeSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.postlike> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		postid: DG.Microsoft.Dynamics.CRM.postSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
	}
	interface principalentitymapSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.principalentitymap> {
		principalid_owner: DG.Microsoft.Dynamics.CRM.principalSingle;
	}
	interface principalobjectaccessSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.principalobjectaccess> {
	}
	interface principalobjectaccess extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		inheritedaccessrightsmask: number;
		versionnumber: number;
		accessrightsmask: number;
		principaltypecode: string;
		timezoneruleversionnumber: number;
		changedon: Date;
		objecttypecode: string;
		principalid: System.Guid;
		utcconversiontimezonecode: number;
		principalobjectaccessid: System.Guid;
		objectid: System.Guid;
	}
	interface productsalesliteratureSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.productsalesliterature> {
	}
	interface productsalesliterature extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		salesliteratureid: System.Guid;
		productid: System.Guid;
		versionnumber: number;
		productsalesliteratureid: System.Guid;
	}
	interface publisheraddressSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.publisheraddress> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		parentid: DG.Microsoft.Dynamics.CRM.publisherSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface queuemembershipSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.queuemembership> {
	}
	interface queuemembership extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		queueid: System.Guid;
		queuemembershipid: System.Guid;
		versionnumber: number;
		systemuserid: System.Guid;
	}
	interface recommendationcacheSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.recommendationcache> {
		additionaldatarecordid: DG.Microsoft.Dynamics.CRM.productpricelevelSingle;
		recommendationmodelid: DG.Microsoft.Dynamics.CRM.recommendationmodelSingle;
		itemid: DG.Microsoft.Dynamics.CRM.productSingle;
		recommendeditemid: DG.Microsoft.Dynamics.CRM.productSingle;
	}
	interface recommendationmodelSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.recommendationmodel> {
		azureserviceconnectionid: DG.Microsoft.Dynamics.CRM.azureserviceconnectionSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		recommendationmodel_recommendationmodelversion: DG.Microsoft.Dynamics.CRM.recommendationmodelversion[];
		recommendationmodel_recommendationmodelmapping: DG.Microsoft.Dynamics.CRM.recommendationmodelmapping[];
		RecommendationModel_RecommendationCache: DG.Microsoft.Dynamics.CRM.recommendationcache[];
		recommendationmodelversionid: DG.Microsoft.Dynamics.CRM.recommendationmodelversionSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface recommendationmodelversionSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.recommendationmodelversion> {
		recommendationmodelversion_recommendationmodelversionhistory: DG.Microsoft.Dynamics.CRM.recommendationmodelversionhistory[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		recommendationmodelid: DG.Microsoft.Dynamics.CRM.recommendationmodelSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		recommendationmodelversion_recommendationmodel: DG.Microsoft.Dynamics.CRM.recommendationmodel[];
		recommendationmodelversion_recommendationmodelmapping: DG.Microsoft.Dynamics.CRM.recommendationmodelmapping[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface recommendationmodelmappingSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.recommendationmodelmapping> {
		recommendationmodelid: DG.Microsoft.Dynamics.CRM.recommendationmodelSingle;
		recommendationmodelmappingid_recommendationmodelmapping: DG.Microsoft.Dynamics.CRM.recommendationmodelmappingSingle;
		recommendationmodelmapping_recommendationmodelmapping_supportedmapid: DG.Microsoft.Dynamics.CRM.recommendationmodelmapping[];
		recommendationmodelversionid: DG.Microsoft.Dynamics.CRM.recommendationmodelversionSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
	}
	interface recommendationmodelversionhistorySingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.recommendationmodelversionhistory> {
		recommendationmodelversionid: DG.Microsoft.Dynamics.CRM.recommendationmodelversionSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
	}
	interface reportcategorySingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.reportcategory> {
		reportid: DG.Microsoft.Dynamics.CRM.reportSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
	}
	interface roleprivilegesSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.roleprivileges> {
	}
	interface roleprivileges extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		privilegeid: System.Guid;
		privilegedepthmask: number;
		versionnumber: number;
		ismanaged: boolean;
		roleprivilegeidunique: System.Guid;
		componentstate: number;
		overwritetime: Date;
		roleprivilegeid: System.Guid;
		solutionid: System.Guid;
		roleid: System.Guid;
	}
	interface roletemplateprivilegesSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.roletemplateprivileges> {
	}
	interface roletemplateprivileges extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		roletemplateprivilegeid: System.Guid;
		isdeep: boolean;
		islocal: boolean;
		isglobal: boolean;
		roletemplateid: System.Guid;
		privilegeid: System.Guid;
		isbasic: boolean;
	}
	interface savedqueryvisualizationSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.savedqueryvisualization> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		webresourceid: DG.Microsoft.Dynamics.CRM.webresourceSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface sdkmessageprocessingstepimageSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepimage> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		sdkmessageprocessingstepid: DG.Microsoft.Dynamics.CRM.sdkmessageprocessingstepSingle;
	}
	interface servicecontractcontactsSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.servicecontractcontacts> {
	}
	interface servicecontractcontacts extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		servicelevel: number;
		contactid: System.Guid;
		servicecontractcontactid: System.Guid;
		versionnumber: number;
		contractid: System.Guid;
	}
	interface slaitemSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.slaitem> {
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		workflowid: DG.Microsoft.Dynamics.CRM.workflowSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		slaid: DG.Microsoft.Dynamics.CRM.slaSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface solutioncomponentSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.solutioncomponent> {
		solutionid: DG.Microsoft.Dynamics.CRM.solutionSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		rootsolutioncomponentid_solutioncomponent: DG.Microsoft.Dynamics.CRM.solutioncomponentSingle;
		solutioncomponent_parent_solutioncomponent: DG.Microsoft.Dynamics.CRM.solutioncomponent[];
	}
	interface solutionSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.solution> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		configurationpageid: DG.Microsoft.Dynamics.CRM.webresourceSingle;
		solution_solutioncomponent: DG.Microsoft.Dynamics.CRM.solutioncomponent[];
		publisherid: DG.Microsoft.Dynamics.CRM.publisherSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		parentsolutionid: DG.Microsoft.Dynamics.CRM.solutionSingle;
		solution_parent_solution: DG.Microsoft.Dynamics.CRM.solution[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface subscriptionmanuallytrackedobjectSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.subscriptionmanuallytrackedobject> {
	}
	interface subscriptionmanuallytrackedobject extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		versionnumber: number;
		subscriptionmanuallytrackedobjectid: System.Guid;
		subscriptionid: System.Guid;
		objecttypecode: string;
		track: boolean;
		objectid: System.Guid;
	}
	interface subscriptionstatisticsofflineSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.subscriptionstatisticsoffline> {
	}
	interface subscriptionstatisticsoffline extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		subscriptionid: System.Guid;
		fullsyncrequired: boolean;
		objecttypecode: number;
	}
	interface subscriptionstatisticsoutlookSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.subscriptionstatisticsoutlook> {
	}
	interface subscriptionstatisticsoutlook extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		fullsyncrequired: boolean;
		subscriptionid: System.Guid;
		objecttypecode: number;
	}
	interface subscriptionsyncentryofflineSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.subscriptionsyncentryoffline> {
	}
	interface subscriptionsyncentryoffline extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		syncstate: number;
		objecttypecode: number;
		objectid: System.Guid;
		subscriptionid: System.Guid;
		versionnumber: number;
	}
	interface subscriptionsyncentryoutlookSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.subscriptionsyncentryoutlook> {
	}
	interface subscriptionsyncentryoutlook extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		objecttypecode: number;
		versionnumber: number;
		syncstate: number;
		objectid: System.Guid;
		subscriptionid: System.Guid;
	}
	interface syncerrorSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.syncerror> {
		regardingobjectid_systemuser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
	}
	interface systemuserlicensesSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.systemuserlicenses> {
	}
	interface systemuserlicenses extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		systemuserid: System.Guid;
		licenseid: System.Guid;
		systemuserlicenseid: System.Guid;
	}
	interface systemuserprofilesSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.systemuserprofiles> {
	}
	interface systemuserprofiles extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		systemuserprofileid: System.Guid;
		fieldsecurityprofileid: System.Guid;
		systemuserid: System.Guid;
		versionnumber: number;
	}
	interface systemuserrolesSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.systemuserroles> {
	}
	interface systemuserroles extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		versionnumber: number;
		systemuserroleid: System.Guid;
		roleid: System.Guid;
		systemuserid: System.Guid;
	}
	interface systemusersyncmappingprofilesSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.systemusersyncmappingprofiles> {
	}
	interface systemusersyncmappingprofiles extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		systemuserid: System.Guid;
		syncattributemappingprofileid: System.Guid;
		systemusersyncmappingprofileid: System.Guid;
		versionnumber: number;
	}
	interface teammembershipSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.teammembership> {
	}
	interface teammembership extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		systemuserid: System.Guid;
		versionnumber: number;
		teammembershipid: System.Guid;
		teamid: System.Guid;
	}
	interface teamprofilesSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.teamprofiles> {
	}
	interface teamprofiles extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		teamprofileid: System.Guid;
		versionnumber: number;
		teamid: System.Guid;
		fieldsecurityprofileid: System.Guid;
	}
	interface teamrolesSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.teamroles> {
	}
	interface teamroles extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		versionnumber: number;
		teamid: System.Guid;
		teamroleid: System.Guid;
		roleid: System.Guid;
	}
	interface teamsyncattributemappingprofilesSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.teamsyncattributemappingprofiles> {
	}
	interface teamsyncattributemappingprofiles extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		teamsyncattributemappingprofileid: System.Guid;
		syncattributemappingprofileid: System.Guid;
		versionnumber: number;
		teamid: System.Guid;
	}
	interface textanalyticsentitymappingSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.textanalyticsentitymapping> {
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		knowledgesearchmodelid: DG.Microsoft.Dynamics.CRM.knowledgesearchmodelSingle;
		topicmodelconfigurationid: DG.Microsoft.Dynamics.CRM.topicmodelconfigurationSingle;
		similarityruleid: DG.Microsoft.Dynamics.CRM.similarityruleSingle;
	}
	interface topicmodelconfigurationSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.topicmodelconfiguration> {
		topicmodelid: DG.Microsoft.Dynamics.CRM.topicmodelSingle;
		topicmodelconfiguration_textanalyticsentitymapping: DG.Microsoft.Dynamics.CRM.textanalyticsentitymapping[];
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		topicmodelconfiguration_topicmodelexecutionhistory: DG.Microsoft.Dynamics.CRM.topicmodelexecutionhistory[];
		topicmodelconfiguration_topicmodel: DG.Microsoft.Dynamics.CRM.topicmodel[];
	}
	interface topicmodelSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.topicmodel> {
		topicmodel_topicmodelconfiguration: DG.Microsoft.Dynamics.CRM.topicmodelconfiguration[];
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		azureserviceconnectionid: DG.Microsoft.Dynamics.CRM.azureserviceconnectionSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		topicmodelconfigurationid: DG.Microsoft.Dynamics.CRM.topicmodelconfigurationSingle;
		topicmodel_topicmodelexecutionhistory: DG.Microsoft.Dynamics.CRM.topicmodelexecutionhistory[];
	}
	interface timestampdatemappingSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.timestampdatemapping> {
	}
	interface timestampdatemapping extends DG.Microsoft.Dynamics.CRM.crmbaseentity {
		timestamp: number;
		date: Date;
		timestampdatemappingid: System.Guid;
	}
	interface timezonedefinitionSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.timezonedefinition> {
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		lk_timezonelocalizedname_timezonedefinitionid: DG.Microsoft.Dynamics.CRM.timezonelocalizedname[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		lk_timezonerule_timezonedefinitionid: DG.Microsoft.Dynamics.CRM.timezonerule[];
	}
	interface timezonelocalizednameSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.timezonelocalizedname> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		timezonedefinitionid: DG.Microsoft.Dynamics.CRM.timezonedefinitionSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface timezoneruleSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.timezonerule> {
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		timezonedefinitionid: DG.Microsoft.Dynamics.CRM.timezonedefinitionSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface topichistorySingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.topichistory> {
		topicmodelexecutionhistoryid: DG.Microsoft.Dynamics.CRM.topicmodelexecutionhistorySingle;
	}
	interface topicmodelexecutionhistorySingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.topicmodelexecutionhistory> {
		topicmodelexecutionhistory_topichistory: DG.Microsoft.Dynamics.CRM.topichistory[];
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		topicmodelconfigurationid: DG.Microsoft.Dynamics.CRM.topicmodelconfigurationSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		topicmodelid: DG.Microsoft.Dynamics.CRM.topicmodelSingle;
	}
	interface topicSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.topic> {
		incidentid: DG.Microsoft.Dynamics.CRM.incidentSingle;
	}
	interface tracelogSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.tracelog> {
		regardingobjectid_mailbox: DG.Microsoft.Dynamics.CRM.mailboxSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		parenttracelogid: DG.Microsoft.Dynamics.CRM.tracelogSingle;
		tracelog_parent_tracelog: DG.Microsoft.Dynamics.CRM.tracelog[];
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		regardingobjectid_emailserverprofile: DG.Microsoft.Dynamics.CRM.emailserverprofileSingle;
	}
	interface userqueryvisualizationSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.userqueryvisualization> {
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		ownerid: DG.Microsoft.Dynamics.CRM.principalSingle;
		webresourceid: DG.Microsoft.Dynamics.CRM.webresourceSingle;
		owninguser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface usersettingsSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.usersettings> {
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		systemuserid_systemuser: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		businessunitid_businessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		transactioncurrencyid: DG.Microsoft.Dynamics.CRM.transactioncurrencySingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface webwizardSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.webwizard> {
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		organizationid: DG.Microsoft.Dynamics.CRM.organizationSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface workflowlogSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.workflowlog> {
		owningteam: DG.Microsoft.Dynamics.CRM.teamSingle;
		createdonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		childworkflowinstanceid_asyncoperation: DG.Microsoft.Dynamics.CRM.asyncoperationSingle;
		modifiedonbehalfby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		modifiedby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
		owningbusinessunit: DG.Microsoft.Dynamics.CRM.businessunitSingle;
		asyncoperationid_asyncoperation: DG.Microsoft.Dynamics.CRM.asyncoperationSingle;
		createdby: DG.Microsoft.Dynamics.CRM.systemuserSingle;
	}
	interface AddItemCampaignActivityResponse {
		CampaignActivityItemId: System.Guid;
	}
	interface AddMemberListResponse {
		Id: System.Guid;
	}
	interface AddSolutionComponentResponse {
		id: System.Guid;
	}
	interface AddToQueueResponse {
		QueueItemId: System.Guid;
	}
	interface AddUserToRecordTeamResponse {
		AccessTeamId: System.Guid;
	}
	interface CalculateActualValueOpportunityResponse {
		Value: number;
	}
	interface CanBeReferencedResponse {
		CanBeReferenced: boolean;
	}
	interface CanBeReferencingResponse {
		CanBeReferencing: boolean;
	}
	interface CanManyToManyResponse {
		CanManyToMany: boolean;
	}
	interface CloneAsPatchResponse {
		SolutionId: System.Guid;
	}
	interface CloneAsSolutionResponse {
		SolutionId: System.Guid;
	}
	interface CreateActivitiesListResponse {
		BulkOperationId: System.Guid;
	}
	interface CreateExceptionResponse {
		id: System.Guid;
	}
	interface CreateInstanceResponse {
		SeriesCanBeExpanded: boolean;
	}
	interface DeleteAndPromoteResponse {
		SolutionId: System.Guid;
	}
	interface DeleteAuditDataResponse {
		PartitionsDeleted: number;
	}
	interface ExportMappingsImportMapResponse {
		MappingsXml: string;
	}
	interface ExportSolutionResponse {
		ExportSolutionFile: number[];
	}
	interface ExportTranslationResponse {
		ExportTranslationFile: number[];
	}
	interface GetTrackingTokenEmailResponse {
		TrackingToken: string;
	}
	interface InsertOptionValueResponse {
		NewOptionValue: number;
	}
	interface InsertStatusValueResponse {
		NewOptionValue: number;
	}
	interface RemoveSolutionComponentResponse {
		id: System.Guid;
	}
	interface RemoveUserFromRecordTeamResponse {
		AccessTeamId: System.Guid;
	}
	interface SendEmailResponse {
		Subject: string;
	}
	interface ValidateResponse {
		Result: DG.Microsoft.Dynamics.CRM.ValidationResult[];
	}
	interface ValidationResult {
		ValidationSuccess: boolean;
		TraceInfo: DG.Microsoft.Dynamics.CRM.TraceInfo;
		ActivityId: System.Guid;
	}
	interface TraceInfo {
		ErrorInfoList: DG.Microsoft.Dynamics.CRM.ErrorInfo[];
	}
	interface ErrorInfo {
		ResourceList: DG.Microsoft.Dynamics.CRM.ResourceInfo[];
		ErrorCode: string;
	}
	interface ResourceInfo {
		Id: System.Guid;
		DisplayName: string;
		EntityName: string;
	}
	interface CalculateTotalTimeIncidentResponse {
		TotalTime: number;
	}
	interface CheckIncomingEmailResponse {
		ShouldDeliver: boolean;
		ReasonCode: number;
	}
	interface CheckPromoteEmailResponse {
		ShouldPromote: boolean;
		ReasonCode: number;
	}
	interface DownloadReportDefinitionResponse {
		BodyText: string;
	}
	interface ExpandCalendarResponse {
		result: DG.Microsoft.Dynamics.CRM.TimeInfo[];
	}
	interface TimeInfo {
		Start: Date;
		End: Date;
		TimeCode: DG.Microsoft.Dynamics.CRM.TimeCode;
		SubCode: DG.Microsoft.Dynamics.CRM.SubCode;
		SourceId: System.Guid;
		CalendarId: System.Guid;
		SourceTypeCode: number;
		IsActivity: boolean;
		ActivityStatusCode: number;
		Effort: number;
		DisplayText: string;
	}
	interface ExportFieldTranslationResponse {
		ExportTranslationFile: number[];
	}
	interface FindParentResourceGroupResponse {
		result: boolean;
	}
	interface GetDistinctValuesImportFileResponse {
		Values: string[];
	}
	interface GetHeaderColumnsImportFileResponse {
		Columns: string[];
	}
	interface GetQuantityDecimalResponse {
		Quantity: number;
	}
	interface GetReportHistoryLimitResponse {
		HistoryLimit: number;
	}
	interface GetTimeZoneCodeByLocalizedNameResponse {
		TimeZoneCode: number;
	}
	interface GetValidManyToManyResponse {
		EntityNames: string[];
	}
	interface GetValidReferencedEntitiesResponse {
		EntityNames: string[];
	}
	interface GetValidReferencingEntitiesResponse {
		EntityNames: string[];
	}
	interface IsComponentCustomizableResponse {
		IsComponentCustomizable: boolean;
	}
	interface IsDataEncryptionActiveResponse {
		IsActive: boolean;
	}
	interface IsValidStateTransitionResponse {
		IsValid: boolean;
	}
	interface QueryMultipleSchedulesResponse {
		TimeInfos: DG.Microsoft.Dynamics.CRM.TimeInfoCollection[];
	}
	interface TimeInfoCollection {
		Items: DG.Microsoft.Dynamics.CRM.TimeInfo[];
	}
	interface QueryScheduleResponse {
		TimeInfos: DG.Microsoft.Dynamics.CRM.TimeInfo[];
	}
	interface RetrieveAbsoluteAndSiteCollectionUrlResponse {
		AbsoluteUrl: string;
		SiteCollectionUrl: string;
	}
	interface RetrieveAllEntitiesResponse {
		EntityMetadata: DG.Microsoft.Dynamics.CRM.ComplexEntityMetadata[];
		Timestamp: string;
	}
	interface ComplexEntityMetadata {
		ActivityTypeMask: number;
		Attributes: DG.Microsoft.Dynamics.CRM.ComplexAttributeMetadata[];
		AutoRouteToOwnerQueue: boolean;
		CanTriggerWorkflow: boolean;
		Description: DG.Microsoft.Dynamics.CRM.Label;
		DisplayCollectionName: DG.Microsoft.Dynamics.CRM.Label;
		DisplayName: DG.Microsoft.Dynamics.CRM.Label;
		EntityHelpUrlEnabled: boolean;
		EntityHelpUrl: string;
		IsDocumentManagementEnabled: boolean;
		IsOneNoteIntegrationEnabled: boolean;
		IsInteractionCentricEnabled: boolean;
		IsKnowledgeManagementEnabled: boolean;
		AutoCreateAccessTeams: boolean;
		IsActivity: boolean;
		IsActivityParty: boolean;
		IsAuditEnabled: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsAvailableOffline: boolean;
		IsChildEntity: boolean;
		IsAIRUpdated: boolean;
		IsValidForQueue: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsConnectionsEnabled: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IconLargeName: string;
		IconMediumName: string;
		IconSmallName: string;
		IsCustomEntity: boolean;
		IsBusinessProcessEnabled: boolean;
		IsCustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsRenameable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsMappable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsDuplicateDetectionEnabled: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		CanCreateAttributes: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		CanCreateForms: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		CanCreateViews: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		CanCreateCharts: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		CanBeRelatedEntityInRelationship: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		CanBePrimaryEntityInRelationship: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		CanBeInManyToMany: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		CanEnableSyncToExternalSearchIndex: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		SyncToExternalSearchIndex: boolean;
		CanModifyAdditionalSettings: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		CanChangeHierarchicalRelationship: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsOptimisticConcurrencyEnabled: boolean;
		ChangeTrackingEnabled: boolean;
		CanChangeTrackingBeEnabled: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsImportable: boolean;
		IsIntersect: boolean;
		IsMailMergeEnabled: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsManaged: boolean;
		IsEnabledForCharts: boolean;
		IsEnabledForTrace: boolean;
		IsValidForAdvancedFind: boolean;
		IsVisibleInMobile: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsVisibleInMobileClient: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsReadOnlyInMobileClient: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsOfflineInMobileClient: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		DaysSinceRecordLastModified: number;
		IsReadingPaneEnabled: boolean;
		IsQuickCreateEnabled: boolean;
		LogicalName: string;
		ManyToManyRelationships: DG.Microsoft.Dynamics.CRM.ComplexManyToManyRelationshipMetadata[];
		ManyToOneRelationships: DG.Microsoft.Dynamics.CRM.ComplexOneToManyRelationshipMetadata[];
		OneToManyRelationships: DG.Microsoft.Dynamics.CRM.ComplexOneToManyRelationshipMetadata[];
		ObjectTypeCode: number;
		OwnershipType: DG.Microsoft.Dynamics.CRM.OwnershipTypes;
		PrimaryNameAttribute: string;
		PrimaryImageAttribute: string;
		PrimaryIdAttribute: string;
		Privileges: DG.Microsoft.Dynamics.CRM.SecurityPrivilegeMetadata[];
		RecurrenceBaseEntityLogicalName: string;
		ReportViewName: string;
		SchemaName: string;
		IntroducedVersion: string;
		IsStateModelAware: boolean;
		EnforceStateTransitions: boolean;
		EntityColor: string;
		Keys: DG.Microsoft.Dynamics.CRM.ComplexEntityKeyMetadata[];
		LogicalCollectionName: string;
		CollectionSchemaName: string;
		EntitySetName: string;
		IsEnabledForExternalChannels: boolean;
		IsPrivate: boolean;
		MetadataId: System.Guid;
		HasChanged: boolean;
	}
	interface ComplexAttributeMetadata {
		AttributeOf: string;
		AttributeType: DG.Microsoft.Dynamics.CRM.AttributeTypeCode;
		AttributeTypeName: DG.Microsoft.Dynamics.CRM.AttributeTypeDisplayName;
		ColumnNumber: number;
		Description: DG.Microsoft.Dynamics.CRM.Label;
		DisplayName: DG.Microsoft.Dynamics.CRM.Label;
		DeprecatedVersion: string;
		IntroducedVersion: string;
		EntityLogicalName: string;
		IsAuditEnabled: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsCustomAttribute: boolean;
		IsPrimaryId: boolean;
		IsPrimaryName: boolean;
		IsValidForCreate: boolean;
		IsValidForRead: boolean;
		IsValidForUpdate: boolean;
		CanBeSecuredForRead: boolean;
		CanBeSecuredForCreate: boolean;
		CanBeSecuredForUpdate: boolean;
		IsSecured: boolean;
		IsRetrievable: boolean;
		IsFilterable: boolean;
		IsSearchable: boolean;
		IsManaged: boolean;
		IsGlobalFilterEnabled: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsSortableEnabled: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		LinkedAttributeId: System.Guid;
		LogicalName: string;
		IsCustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsRenameable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsValidForAdvancedFind: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		RequiredLevel: DG.Microsoft.Dynamics.CRM.AttributeRequiredLevelManagedProperty;
		CanModifyAdditionalSettings: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		SchemaName: string;
		IsLogical: boolean;
		InheritsFrom: string;
		SourceType: number;
		MetadataId: System.Guid;
		HasChanged: boolean;
	}
	interface AttributeTypeDisplayName {
		Value: string;
	}
	interface Label {
		LocalizedLabels: DG.Microsoft.Dynamics.CRM.LocalizedLabel[];
		UserLocalizedLabel: DG.Microsoft.Dynamics.CRM.LocalizedLabel;
	}
	interface LocalizedLabel {
		Label: string;
		LanguageCode: number;
		IsManaged: boolean;
		MetadataId: System.Guid;
		HasChanged: boolean;
	}
	interface AttributeRequiredLevelManagedProperty {
		Value: DG.Microsoft.Dynamics.CRM.AttributeRequiredLevel;
		CanBeChanged: boolean;
		ManagedPropertyLogicalName: string;
	}
	interface ComplexManyToManyRelationshipMetadata {
		Entity1AssociatedMenuConfiguration: DG.Microsoft.Dynamics.CRM.AssociatedMenuConfiguration;
		Entity2AssociatedMenuConfiguration: DG.Microsoft.Dynamics.CRM.AssociatedMenuConfiguration;
		Entity1LogicalName: string;
		Entity2LogicalName: string;
		IntersectEntityName: string;
		Entity1IntersectAttribute: string;
		Entity2IntersectAttribute: string;
		Entity1NavigationPropertyName: string;
		Entity2NavigationPropertyName: string;
		IsCustomRelationship: boolean;
		IsCustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsValidForAdvancedFind: boolean;
		SchemaName: string;
		SecurityTypes: DG.Microsoft.Dynamics.CRM.SecurityTypes;
		IsManaged: boolean;
		RelationshipType: DG.Microsoft.Dynamics.CRM.RelationshipType;
		IntroducedVersion: string;
		MetadataId: System.Guid;
		HasChanged: boolean;
	}
	interface AssociatedMenuConfiguration {
		Behavior: DG.Microsoft.Dynamics.CRM.AssociatedMenuBehavior;
		Group: DG.Microsoft.Dynamics.CRM.AssociatedMenuGroup;
		Label: DG.Microsoft.Dynamics.CRM.Label;
		Order: number;
	}
	interface ComplexOneToManyRelationshipMetadata {
		AssociatedMenuConfiguration: DG.Microsoft.Dynamics.CRM.AssociatedMenuConfiguration;
		CascadeConfiguration: DG.Microsoft.Dynamics.CRM.CascadeConfiguration;
		ReferencedAttribute: string;
		ReferencedEntity: string;
		ReferencingAttribute: string;
		ReferencingEntity: string;
		IsHierarchical: boolean;
		ReferencedEntityNavigationPropertyName: string;
		ReferencingEntityNavigationPropertyName: string;
		IsCustomRelationship: boolean;
		IsCustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsValidForAdvancedFind: boolean;
		SchemaName: string;
		SecurityTypes: DG.Microsoft.Dynamics.CRM.SecurityTypes;
		IsManaged: boolean;
		RelationshipType: DG.Microsoft.Dynamics.CRM.RelationshipType;
		IntroducedVersion: string;
		MetadataId: System.Guid;
		HasChanged: boolean;
	}
	interface CascadeConfiguration {
		Assign: DG.Microsoft.Dynamics.CRM.CascadeType;
		Delete: DG.Microsoft.Dynamics.CRM.CascadeType;
		Merge: DG.Microsoft.Dynamics.CRM.CascadeType;
		Reparent: DG.Microsoft.Dynamics.CRM.CascadeType;
		Share: DG.Microsoft.Dynamics.CRM.CascadeType;
		Unshare: DG.Microsoft.Dynamics.CRM.CascadeType;
	}
	interface SecurityPrivilegeMetadata {
		CanBeBasic: boolean;
		CanBeDeep: boolean;
		CanBeGlobal: boolean;
		CanBeLocal: boolean;
		CanBeEntityReference: boolean;
		CanBeParentEntityReference: boolean;
		Name: string;
		PrivilegeId: System.Guid;
		PrivilegeType: DG.Microsoft.Dynamics.CRM.PrivilegeType;
	}
	interface ComplexEntityKeyMetadata {
		DisplayName: DG.Microsoft.Dynamics.CRM.Label;
		LogicalName: string;
		SchemaName: string;
		EntityLogicalName: string;
		KeyAttributes: string[];
		IsCustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsManaged: boolean;
		IntroducedVersion: string;
		EntityKeyIndexStatus: DG.Microsoft.Dynamics.CRM.EntityKeyIndexStatus;
		MetadataId: System.Guid;
		HasChanged: boolean;
	}
	interface RetrieveApplicationRibbonResponse {
		CompressedApplicationRibbonXml: number[];
	}
	interface RetrieveAuditPartitionListResponse {
		AuditPartitionDetailCollection: DG.Microsoft.Dynamics.CRM.AuditPartitionDetail[];
	}
	interface AuditPartitionDetail {
		PartitionNumber: number;
		StartDate: Date;
		EndDate: Date;
		Size: number;
	}
	interface RetrieveAvailableLanguagesResponse {
		LocaleIds: number[];
	}
	interface RetrieveChannelAccessProfilePrivilegesResponse {
		ChannelAccessProfile: DG.Microsoft.Dynamics.CRM.ChannelAccessProfileWithPrivileges;
	}
	interface ChannelAccessProfileWithPrivileges {
		EmailAccess: boolean;
		FacebookAccess: boolean;
		PhoneAccess: boolean;
		TwitterAccess: boolean;
		WebAccess: boolean;
		ViewKnowledgeArticles: boolean;
		ViewArticleRating: boolean;
		RateKnowledgeArticles: boolean;
		SubmitFeedback: boolean;
		ChannelAccessProfilePrivilegeList: DG.Microsoft.Dynamics.CRM.ChannelAccessProfilePrivilege[];
	}
	interface ChannelAccessProfilePrivilege {
		ChannelAccessProfilePrivilegeId: System.Guid;
		PrivilegeDepth: DG.Microsoft.Dynamics.CRM.ChannelAccessProfilePrivilegeDepth;
		PrivilegeName: string;
	}
	interface RetrieveCurrentOrganizationResponse {
		Detail: DG.Microsoft.Dynamics.CRM.OrganizationDetail;
	}
	interface OrganizationDetail {
		OrganizationId: System.Guid;
		FriendlyName: string;
		OrganizationVersion: string;
		UrlName: string;
		UniqueName: string;
		Endpoints: DG.Microsoft.Dynamics.CRM.EndpointCollection;
		State: DG.Microsoft.Dynamics.CRM.OrganizationState;
	}
	interface EndpointCollection {
		Count: number;
		IsReadOnly: boolean;
		Keys: DG.Microsoft.Dynamics.CRM.EndpointType[];
		Values: string[];
	}
	interface RetrieveDataEncryptionKeyResponse {
		EncryptionKey: string;
	}
	interface RetrieveDeploymentLicenseTypeResponse {
		licenseType: string;
	}
	interface RetrieveDeprovisionedLanguagesResponse {
		RetrieveDeprovisionedLanguages: number[];
	}
	interface RetrieveEntityRibbonResponse {
		CompressedEntityXml: number[];
	}
	interface RetrieveExchangeRateResponse {
		ExchangeRate: number;
	}
	interface RetrieveFormattedImportJobResultsResponse {
		FormattedResults: string;
	}
	interface RetrieveInstalledLanguagePacksResponse {
		RetrieveInstalledLanguagePacks: number[];
	}
	interface RetrieveInstalledLanguagePackVersionResponse {
		Version: string;
	}
	interface RetrieveLicenseInfoResponse {
		AvailableCount: number;
		GrantedLicenseCount: number;
	}
	interface RetrieveLocLabelsResponse {
		Label: DG.Microsoft.Dynamics.CRM.Label;
	}
	interface RetrieveMailboxTrackingFoldersResponse {
		MailboxTrackingFolderMappings: DG.Microsoft.Dynamics.CRM.MailboxTrackingFolderMapping[];
	}
	interface MailboxTrackingFolderMapping {
		ExchangeFolderId: string;
		ExchangeFolderName: string;
		RegardingObjectId: System.Guid;
		RegardingObjectName: string;
		RegardingObjectTypeCode: number;
		IsFolderOnboarded: boolean;
	}
	interface RetrieveMissingComponentsResponse {
		MissingComponents: DG.Microsoft.Dynamics.CRM.MissingComponent[];
	}
	interface MissingComponent {
		RequiredComponent: DG.Microsoft.Dynamics.CRM.ComponentDetail;
		DependentComponent: DG.Microsoft.Dynamics.CRM.ComponentDetail;
	}
	interface ComponentDetail {
		Type: number;
		SchemaName: string;
		DisplayName: string;
		Id: System.Guid;
		ParentSchemaName: string;
		ParentDisplayName: string;
		ParentId: System.Guid;
		Solution: string;
	}
	interface RetrieveOrganizationResourcesResponse {
		OrganizationResources: DG.Microsoft.Dynamics.CRM.OrganizationResources;
	}
	interface OrganizationResources {
		CurrentNumberOfActiveUsers: number;
		MaxNumberOfActiveUsers: number;
		CurrentNumberOfNonInteractiveUsers: number;
		MaxNumberOfNonInteractiveUsers: number;
		CurrentNumberOfCustomEntities: number;
		MaxNumberOfCustomEntities: number;
		CurrentNumberOfPublishedWorkflows: number;
		MaxNumberOfPublishedWorkflows: number;
		CurrentStorage: number;
		MaxStorage: number;
	}
	interface RetrieveParsedDataImportFileResponse {
		Values: DG.Microsoft.Dynamics.CRM.StringCollection[];
	}
	interface StringCollection {
		Items: string[];
	}
	interface RetrievePrincipalAccessResponse {
		AccessRights: DG.Microsoft.Dynamics.CRM.AccessRights;
	}
	interface RetrievePrincipalAttributePrivilegesResponse {
		AttributePrivileges: DG.Microsoft.Dynamics.CRM.AttributePrivilege[];
	}
	interface AttributePrivilege {
		AttributeId: System.Guid;
		CanCreate: number;
		CanRead: number;
		CanUpdate: number;
	}
	interface RetrievePrincipalSyncAttributeMappingsResponse {
		AttributeMappings: DG.Microsoft.Dynamics.CRM.AttributeMapping[];
	}
	interface AttributeMapping {
		AttributeMappingId: System.Guid;
		MappingName: string;
		AttributeCrmName: string;
		AttributeExchangeName: string;
		SyncDirection: number;
		DefaultSyncDirection: number;
		AllowedSyncDirection: number;
		IsComputed: boolean;
		EntityTypeCode: number;
		ComputedProperties: string[];
		AttributeCrmDisplayName: string;
		AttributeExchangeDisplayName: string;
	}
	interface RetrieveProvisionedLanguagePackVersionResponse {
		Version: string;
	}
	interface RetrieveProvisionedLanguagesResponse {
		RetrieveProvisionedLanguages: number[];
	}
	interface RetrieveRolePrivilegesRoleResponse {
		RolePrivileges: DG.Microsoft.Dynamics.CRM.RolePrivilege[];
	}
	interface RolePrivilege {
		Depth: DG.Microsoft.Dynamics.CRM.PrivilegeDepth;
		PrivilegeId: System.Guid;
		BusinessUnitId: System.Guid;
	}
	interface RetrieveTeamPrivilegesResponse {
		RolePrivileges: DG.Microsoft.Dynamics.CRM.RolePrivilege[];
	}
	interface RetrieveTimestampResponse {
		Timestamp: string;
	}
	interface RetrieveUserPrivilegesResponse {
		RolePrivileges: DG.Microsoft.Dynamics.CRM.RolePrivilege[];
	}
	interface RetrieveVersionResponse {
		Version: string;
	}
	interface SearchResponse {
		SearchResults: DG.Microsoft.Dynamics.CRM.SearchResults;
	}
	interface SearchResults {
		Proposals: DG.Microsoft.Dynamics.CRM.AppointmentProposal[];
		TraceInfo: DG.Microsoft.Dynamics.CRM.TraceInfo;
	}
	interface AppointmentProposal {
		Start: Date;
		End: Date;
		SiteId: System.Guid;
		SiteName: string;
		ProposalParties: DG.Microsoft.Dynamics.CRM.ProposalParty[];
	}
	interface ProposalParty {
		ResourceId: System.Guid;
		ResourceSpecId: System.Guid;
		DisplayName: string;
		EntityName: string;
		EffortRequired: number;
	}
	interface ValidateRecurrenceRuleResponse {
		Description: string;
	}
	interface WhoAmIResponse {
		BusinessUnitId: System.Guid;
		UserId: System.Guid;
		OrganizationId: System.Guid;
	}
	interface crmmodelbaseentitySingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.crmmodelbaseentity> {
	}
	interface crmmodelbaseentity extends Microsoft.OData.Client.BaseEntityType {
	}
	interface AttributeMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.AttributeMetadata> {
	}
	interface AttributeMetadata extends DG.Microsoft.Dynamics.CRM.MetadataBase {
		AttributeOf: string;
		AttributeType: DG.Microsoft.Dynamics.CRM.AttributeTypeCode;
		AttributeTypeName: DG.Microsoft.Dynamics.CRM.AttributeTypeDisplayName;
		ColumnNumber: number;
		Description: DG.Microsoft.Dynamics.CRM.Label;
		DisplayName: DG.Microsoft.Dynamics.CRM.Label;
		DeprecatedVersion: string;
		IntroducedVersion: string;
		EntityLogicalName: string;
		IsAuditEnabled: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsCustomAttribute: boolean;
		IsPrimaryId: boolean;
		IsPrimaryName: boolean;
		IsValidForCreate: boolean;
		IsValidForRead: boolean;
		IsValidForUpdate: boolean;
		CanBeSecuredForRead: boolean;
		CanBeSecuredForCreate: boolean;
		CanBeSecuredForUpdate: boolean;
		IsSecured: boolean;
		IsRetrievable: boolean;
		IsFilterable: boolean;
		IsSearchable: boolean;
		IsManaged: boolean;
		IsGlobalFilterEnabled: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsSortableEnabled: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		LinkedAttributeId: System.Guid;
		LogicalName: string;
		IsCustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsRenameable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsValidForAdvancedFind: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		RequiredLevel: DG.Microsoft.Dynamics.CRM.AttributeRequiredLevelManagedProperty;
		CanModifyAdditionalSettings: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		SchemaName: string;
		IsLogical: boolean;
		InheritsFrom: string;
		SourceType: number;
	}
	interface MetadataBase extends DG.Microsoft.Dynamics.CRM.crmmodelbaseentity {
		MetadataId: System.Guid;
		HasChanged: boolean;
	}
	interface BigIntAttributeMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.BigIntAttributeMetadata> {
	}
	interface BigIntAttributeMetadata extends DG.Microsoft.Dynamics.CRM.AttributeMetadata {
		MaxValue: number;
		MinValue: number;
	}
	interface BooleanAttributeMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.BooleanAttributeMetadata> {
		OptionSet: DG.Microsoft.Dynamics.CRM.BooleanOptionSetMetadataSingle;
		GlobalOptionSet: DG.Microsoft.Dynamics.CRM.BooleanOptionSetMetadataSingle;
	}
	interface BooleanAttributeMetadata extends DG.Microsoft.Dynamics.CRM.AttributeMetadata {
		DefaultValue: boolean;
		FormulaDefinition: string;
		SourceTypeMask: number;
		OptionSet: DG.Microsoft.Dynamics.CRM.BooleanOptionSetMetadata;
		GlobalOptionSet: DG.Microsoft.Dynamics.CRM.BooleanOptionSetMetadata;
	}
	interface BooleanOptionSetMetadata extends DG.Microsoft.Dynamics.CRM.OptionSetMetadataBase {
		TrueOption: DG.Microsoft.Dynamics.CRM.OptionMetadata;
		FalseOption: DG.Microsoft.Dynamics.CRM.OptionMetadata;
	}
	interface OptionSetMetadataBase extends DG.Microsoft.Dynamics.CRM.MetadataBase {
		Description: DG.Microsoft.Dynamics.CRM.Label;
		DisplayName: DG.Microsoft.Dynamics.CRM.Label;
		IsCustomOptionSet: boolean;
		IsGlobal: boolean;
		IsManaged: boolean;
		IsCustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		Name: string;
		OptionSetType: DG.Microsoft.Dynamics.CRM.OptionSetType;
		IntroducedVersion: string;
	}
	interface OptionMetadata {
		Value: number;
		Label: DG.Microsoft.Dynamics.CRM.Label;
		Description: DG.Microsoft.Dynamics.CRM.Label;
		Color: string;
		IsManaged: boolean;
		MetadataId: System.Guid;
		HasChanged: boolean;
	}
	interface BooleanOptionSetMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.BooleanOptionSetMetadata> {
	}
	interface DateTimeAttributeMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.DateTimeAttributeMetadata> {
	}
	interface DateTimeAttributeMetadata extends DG.Microsoft.Dynamics.CRM.AttributeMetadata {
		MinSupportedValue: Date;
		MaxSupportedValue: Date;
		Format: DG.Microsoft.Dynamics.CRM.DateTimeFormat;
		ImeMode: DG.Microsoft.Dynamics.CRM.ImeMode;
		SourceTypeMask: number;
		FormulaDefinition: string;
		DateTimeBehavior: DG.Microsoft.Dynamics.CRM.DateTimeBehavior;
		CanChangeDateTimeBehavior: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
	}
	interface DateTimeBehavior {
		Value: string;
	}
	interface DecimalAttributeMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.DecimalAttributeMetadata> {
	}
	interface DecimalAttributeMetadata extends DG.Microsoft.Dynamics.CRM.AttributeMetadata {
		MaxValue: number;
		MinValue: number;
		Precision: number;
		ImeMode: DG.Microsoft.Dynamics.CRM.ImeMode;
		FormulaDefinition: string;
		SourceTypeMask: number;
	}
	interface DoubleAttributeMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.DoubleAttributeMetadata> {
	}
	interface DoubleAttributeMetadata extends DG.Microsoft.Dynamics.CRM.AttributeMetadata {
		ImeMode: DG.Microsoft.Dynamics.CRM.ImeMode;
		MaxValue: number;
		MinValue: number;
		Precision: number;
	}
	interface EntityMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.EntityMetadata> {
		Attributes: DG.Microsoft.Dynamics.CRM.AttributeMetadata[];
		ManyToManyRelationships: DG.Microsoft.Dynamics.CRM.ManyToManyRelationshipMetadata[];
		ManyToOneRelationships: DG.Microsoft.Dynamics.CRM.OneToManyRelationshipMetadata[];
		OneToManyRelationships: DG.Microsoft.Dynamics.CRM.OneToManyRelationshipMetadata[];
		Keys: DG.Microsoft.Dynamics.CRM.EntityKeyMetadata[];
	}
	interface EntityMetadata extends DG.Microsoft.Dynamics.CRM.MetadataBase {
		ActivityTypeMask: number;
		AutoRouteToOwnerQueue: boolean;
		CanTriggerWorkflow: boolean;
		Description: DG.Microsoft.Dynamics.CRM.Label;
		DisplayCollectionName: DG.Microsoft.Dynamics.CRM.Label;
		DisplayName: DG.Microsoft.Dynamics.CRM.Label;
		EntityHelpUrlEnabled: boolean;
		EntityHelpUrl: string;
		IsDocumentManagementEnabled: boolean;
		IsOneNoteIntegrationEnabled: boolean;
		IsInteractionCentricEnabled: boolean;
		IsKnowledgeManagementEnabled: boolean;
		AutoCreateAccessTeams: boolean;
		IsActivity: boolean;
		IsActivityParty: boolean;
		IsAuditEnabled: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsAvailableOffline: boolean;
		IsChildEntity: boolean;
		IsAIRUpdated: boolean;
		IsValidForQueue: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsConnectionsEnabled: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IconLargeName: string;
		IconMediumName: string;
		IconSmallName: string;
		IsCustomEntity: boolean;
		IsBusinessProcessEnabled: boolean;
		IsCustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsRenameable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsMappable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsDuplicateDetectionEnabled: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		CanCreateAttributes: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		CanCreateForms: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		CanCreateViews: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		CanCreateCharts: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		CanBeRelatedEntityInRelationship: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		CanBePrimaryEntityInRelationship: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		CanBeInManyToMany: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		CanEnableSyncToExternalSearchIndex: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		SyncToExternalSearchIndex: boolean;
		CanModifyAdditionalSettings: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		CanChangeHierarchicalRelationship: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsOptimisticConcurrencyEnabled: boolean;
		ChangeTrackingEnabled: boolean;
		CanChangeTrackingBeEnabled: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsImportable: boolean;
		IsIntersect: boolean;
		IsMailMergeEnabled: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsManaged: boolean;
		IsEnabledForCharts: boolean;
		IsEnabledForTrace: boolean;
		IsValidForAdvancedFind: boolean;
		IsVisibleInMobile: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsVisibleInMobileClient: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsReadOnlyInMobileClient: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsOfflineInMobileClient: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		DaysSinceRecordLastModified: number;
		IsReadingPaneEnabled: boolean;
		IsQuickCreateEnabled: boolean;
		LogicalName: string;
		ObjectTypeCode: number;
		OwnershipType: DG.Microsoft.Dynamics.CRM.OwnershipTypes;
		PrimaryNameAttribute: string;
		PrimaryImageAttribute: string;
		PrimaryIdAttribute: string;
		Privileges: DG.Microsoft.Dynamics.CRM.SecurityPrivilegeMetadata[];
		RecurrenceBaseEntityLogicalName: string;
		ReportViewName: string;
		SchemaName: string;
		IntroducedVersion: string;
		IsStateModelAware: boolean;
		EnforceStateTransitions: boolean;
		EntityColor: string;
		LogicalCollectionName: string;
		CollectionSchemaName: string;
		EntitySetName: string;
		IsEnabledForExternalChannels: boolean;
		IsPrivate: boolean;
		HasActivities: boolean;
		HasNotes: boolean;
		Attributes: DG.Microsoft.Dynamics.CRM.AttributeMetadata[];
		ManyToManyRelationships: DG.Microsoft.Dynamics.CRM.ManyToManyRelationshipMetadata[];
		ManyToOneRelationships: DG.Microsoft.Dynamics.CRM.OneToManyRelationshipMetadata[];
		OneToManyRelationships: DG.Microsoft.Dynamics.CRM.OneToManyRelationshipMetadata[];
		Keys: DG.Microsoft.Dynamics.CRM.EntityKeyMetadata[];
	}
	interface ManyToManyRelationshipMetadata extends DG.Microsoft.Dynamics.CRM.RelationshipMetadataBase {
		Entity1AssociatedMenuConfiguration: DG.Microsoft.Dynamics.CRM.AssociatedMenuConfiguration;
		Entity2AssociatedMenuConfiguration: DG.Microsoft.Dynamics.CRM.AssociatedMenuConfiguration;
		Entity1LogicalName: string;
		Entity2LogicalName: string;
		IntersectEntityName: string;
		Entity1IntersectAttribute: string;
		Entity2IntersectAttribute: string;
		Entity1NavigationPropertyName: string;
		Entity2NavigationPropertyName: string;
	}
	interface RelationshipMetadataBase extends DG.Microsoft.Dynamics.CRM.MetadataBase {
		IsCustomRelationship: boolean;
		IsCustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsValidForAdvancedFind: boolean;
		SchemaName: string;
		SecurityTypes: DG.Microsoft.Dynamics.CRM.SecurityTypes;
		IsManaged: boolean;
		RelationshipType: DG.Microsoft.Dynamics.CRM.RelationshipType;
		IntroducedVersion: string;
	}
	interface OneToManyRelationshipMetadata extends DG.Microsoft.Dynamics.CRM.RelationshipMetadataBase {
		AssociatedMenuConfiguration: DG.Microsoft.Dynamics.CRM.AssociatedMenuConfiguration;
		CascadeConfiguration: DG.Microsoft.Dynamics.CRM.CascadeConfiguration;
		ReferencedAttribute: string;
		ReferencedEntity: string;
		ReferencingAttribute: string;
		ReferencingEntity: string;
		IsHierarchical: boolean;
		ReferencedEntityNavigationPropertyName: string;
		ReferencingEntityNavigationPropertyName: string;
		Lookup: DG.Microsoft.Dynamics.CRM.LookupAttributeMetadata;
	}
	interface LookupAttributeMetadata extends DG.Microsoft.Dynamics.CRM.AttributeMetadata {
		Targets: string[];
	}
	interface EntityKeyMetadata extends DG.Microsoft.Dynamics.CRM.MetadataBase {
		DisplayName: DG.Microsoft.Dynamics.CRM.Label;
		LogicalName: string;
		SchemaName: string;
		EntityLogicalName: string;
		KeyAttributes: string[];
		IsCustomizable: DG.Microsoft.Dynamics.CRM.BooleanManagedProperty;
		IsManaged: boolean;
		IntroducedVersion: string;
		EntityKeyIndexStatus: DG.Microsoft.Dynamics.CRM.EntityKeyIndexStatus;
		AsyncJob: System.Guid;
	}
	interface EntityKeyMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.EntityKeyMetadata> {
	}
	interface EntityNameAttributeMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.EntityNameAttributeMetadata> {
		OptionSet: DG.Microsoft.Dynamics.CRM.OptionSetMetadataSingle;
		GlobalOptionSet: DG.Microsoft.Dynamics.CRM.OptionSetMetadataSingle;
	}
	interface EntityNameAttributeMetadata extends DG.Microsoft.Dynamics.CRM.EnumAttributeMetadata {
	}
	interface EnumAttributeMetadata extends DG.Microsoft.Dynamics.CRM.AttributeMetadata {
		DefaultFormValue: number;
		OptionSet: DG.Microsoft.Dynamics.CRM.OptionSetMetadata;
		GlobalOptionSet: DG.Microsoft.Dynamics.CRM.OptionSetMetadata;
	}
	interface OptionSetMetadata extends DG.Microsoft.Dynamics.CRM.OptionSetMetadataBase {
		Options: DG.Microsoft.Dynamics.CRM.OptionMetadata[];
	}
	interface OptionSetMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.OptionSetMetadata> {
	}
	interface EnumAttributeMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.EnumAttributeMetadata> {
		OptionSet: DG.Microsoft.Dynamics.CRM.OptionSetMetadataSingle;
		GlobalOptionSet: DG.Microsoft.Dynamics.CRM.OptionSetMetadataSingle;
	}
	interface OptionSetMetadataBaseSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.OptionSetMetadataBase> {
	}
	interface ImageAttributeMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.ImageAttributeMetadata> {
	}
	interface ImageAttributeMetadata extends DG.Microsoft.Dynamics.CRM.AttributeMetadata {
		IsPrimaryImage: boolean;
		MaxHeight: number;
		MaxWidth: number;
	}
	interface IntegerAttributeMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.IntegerAttributeMetadata> {
	}
	interface IntegerAttributeMetadata extends DG.Microsoft.Dynamics.CRM.AttributeMetadata {
		Format: DG.Microsoft.Dynamics.CRM.IntegerFormat;
		MaxValue: number;
		MinValue: number;
		FormulaDefinition: string;
		SourceTypeMask: number;
	}
	interface LookupAttributeMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.LookupAttributeMetadata> {
	}
	interface ManagedPropertyAttributeMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.ManagedPropertyAttributeMetadata> {
	}
	interface ManagedPropertyAttributeMetadata extends DG.Microsoft.Dynamics.CRM.AttributeMetadata {
		ManagedPropertyLogicalName: string;
		ParentComponentType: number;
		ParentAttributeName: string;
		ValueAttributeTypeCode: DG.Microsoft.Dynamics.CRM.AttributeTypeCode;
	}
	interface ManagedPropertyMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.ManagedPropertyMetadata> {
	}
	interface ManagedPropertyMetadata extends DG.Microsoft.Dynamics.CRM.MetadataBase {
		LogicalName: string;
		DisplayName: DG.Microsoft.Dynamics.CRM.Label;
		ManagedPropertyType: DG.Microsoft.Dynamics.CRM.ManagedPropertyType;
		Operation: DG.Microsoft.Dynamics.CRM.ManagedPropertyOperation;
		IsGlobalForOperation: boolean;
		EvaluationPriority: DG.Microsoft.Dynamics.CRM.ManagedPropertyEvaluationPriority;
		IsPrivate: boolean;
		ErrorCode: number;
		EnablesEntityName: string;
		EnablesAttributeName: string;
		Description: DG.Microsoft.Dynamics.CRM.Label;
		IntroducedVersion: string;
	}
	interface ManyToManyRelationshipMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.ManyToManyRelationshipMetadata> {
	}
	interface MemoAttributeMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.MemoAttributeMetadata> {
	}
	interface MemoAttributeMetadata extends DG.Microsoft.Dynamics.CRM.AttributeMetadata {
		Format: DG.Microsoft.Dynamics.CRM.StringFormat;
		ImeMode: DG.Microsoft.Dynamics.CRM.ImeMode;
		MaxLength: number;
		IsLocalizable: boolean;
	}
	interface MetadataBaseSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.MetadataBase> {
	}
	interface MoneyAttributeMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.MoneyAttributeMetadata> {
	}
	interface MoneyAttributeMetadata extends DG.Microsoft.Dynamics.CRM.AttributeMetadata {
		ImeMode: DG.Microsoft.Dynamics.CRM.ImeMode;
		MaxValue: number;
		MinValue: number;
		Precision: number;
		PrecisionSource: number;
		CalculationOf: string;
		FormulaDefinition: string;
		SourceTypeMask: number;
		IsBaseCurrency: boolean;
	}
	interface OneToManyRelationshipMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.OneToManyRelationshipMetadata> {
		Lookup: DG.Microsoft.Dynamics.CRM.LookupAttributeMetadataSingle;
	}
	interface PicklistAttributeMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.PicklistAttributeMetadata> {
		OptionSet: DG.Microsoft.Dynamics.CRM.OptionSetMetadataSingle;
		GlobalOptionSet: DG.Microsoft.Dynamics.CRM.OptionSetMetadataSingle;
	}
	interface PicklistAttributeMetadata extends DG.Microsoft.Dynamics.CRM.EnumAttributeMetadata {
		FormulaDefinition: string;
		SourceTypeMask: number;
	}
	interface RelationshipMetadataBaseSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.RelationshipMetadataBase> {
	}
	interface StateAttributeMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.StateAttributeMetadata> {
		OptionSet: DG.Microsoft.Dynamics.CRM.OptionSetMetadataSingle;
		GlobalOptionSet: DG.Microsoft.Dynamics.CRM.OptionSetMetadataSingle;
	}
	interface StateAttributeMetadata extends DG.Microsoft.Dynamics.CRM.EnumAttributeMetadata {
	}
	interface StatusAttributeMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.StatusAttributeMetadata> {
		OptionSet: DG.Microsoft.Dynamics.CRM.OptionSetMetadataSingle;
		GlobalOptionSet: DG.Microsoft.Dynamics.CRM.OptionSetMetadataSingle;
	}
	interface StatusAttributeMetadata extends DG.Microsoft.Dynamics.CRM.EnumAttributeMetadata {
	}
	interface StringAttributeMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.StringAttributeMetadata> {
	}
	interface StringAttributeMetadata extends DG.Microsoft.Dynamics.CRM.AttributeMetadata {
		Format: DG.Microsoft.Dynamics.CRM.StringFormat;
		FormatName: DG.Microsoft.Dynamics.CRM.StringFormatName;
		ImeMode: DG.Microsoft.Dynamics.CRM.ImeMode;
		MaxLength: number;
		YomiOf: string;
		IsLocalizable: boolean;
		FormulaDefinition: string;
		SourceTypeMask: number;
	}
	interface StringFormatName {
		Value: string;
	}
	interface UniqueIdentifierAttributeMetadataSingle extends Microsoft.OData.Client.DataServiceQuerySingle<DG.Microsoft.Dynamics.CRM.UniqueIdentifierAttributeMetadata> {
	}
	interface UniqueIdentifierAttributeMetadata extends DG.Microsoft.Dynamics.CRM.AttributeMetadata {
	}
	interface AppointmentRequest {
		ServiceId: System.Guid;
		AnchorOffset: number;
		UserTimeZoneCode: number;
		RecurrenceDuration: number;
		RecurrenceTimeZoneCode: number;
		AppointmentsToIgnore: DG.Microsoft.Dynamics.CRM.AppointmentsToIgnore[];
		RequiredResources: DG.Microsoft.Dynamics.CRM.RequiredResource[];
		SearchWindowStart: Date;
		SearchWindowEnd: Date;
		SearchRecurrenceStart: Date;
		SearchRecurrenceRule: string;
		Duration: number;
		Constraints: DG.Microsoft.Dynamics.CRM.ConstraintRelation[];
		Objectives: DG.Microsoft.Dynamics.CRM.ObjectiveRelation[];
		Direction: DG.Microsoft.Dynamics.CRM.SearchDirection;
		NumberOfResults: number;
		Sites: System.Guid[];
	}
	interface AppointmentsToIgnore {
		Appointments: System.Guid[];
		ResourceId: System.Guid;
	}
	interface RequiredResource {
		ResourceId: System.Guid;
		ResourceSpecId: System.Guid;
	}
	interface ConstraintRelation {
		ObjectId: System.Guid;
		ConstraintType: string;
		Constraints: string;
	}
	interface ObjectiveRelation {
		ResourceSpecId: System.Guid;
		ObjectiveExpression: string;
	}
	interface ColumnSet {
		AllColumns: boolean;
		Columns: string[];
	}
	interface PagingInfo {
		PageNumber: number;
		Count: number;
		ReturnTotalRecordCount: boolean;
		PagingCookie: string;
	}
	interface StateOptionMetadata {
		DefaultStatus: number;
		InvariantName: string;
		Value: number;
		Label: DG.Microsoft.Dynamics.CRM.Label;
		Description: DG.Microsoft.Dynamics.CRM.Label;
		Color: string;
		IsManaged: boolean;
		MetadataId: System.Guid;
		HasChanged: boolean;
	}
	interface StatusOptionMetadata {
		State: number;
		TransitionData: string;
		Value: number;
		Label: DG.Microsoft.Dynamics.CRM.Label;
		Description: DG.Microsoft.Dynamics.CRM.Label;
		Color: string;
		IsManaged: boolean;
		MetadataId: System.Guid;
		HasChanged: boolean;
	}
}
declare module Microsoft.OData.Client {
	interface DataServiceQuerySingle<TElement> {
		Context: Microsoft.OData.Client.DataServiceContext;
		IsComposable: boolean;
		RequestUri: System.Uri;
	}
	interface DataServiceContext {
		ResolveEntitySet: System.Func<string, System.Uri>;
		BaseUri: System.Uri;
		AddAndUpdateResponsePreference: Microsoft.OData.Client.DataServiceResponsePreference;
		MaxProtocolVersion: Microsoft.OData.Client.ODataProtocolVersion;
		Credentials: System.Net.ICredentials;
		EntityParameterSendOption: Microsoft.OData.Client.EntityParameterSendOption;
		MergeOption: Microsoft.OData.Client.MergeOption;
		ApplyingChanges: boolean;
		IgnoreMissingProperties: boolean;
		ResolveName: System.Func<System.Type, string>;
		ResolveType: System.Func<string, System.Type>;
		Timeout: number;
		UsePostTunneling: boolean;
		Links: Microsoft.OData.Client.LinkDescriptor[];
		Entities: Microsoft.OData.Client.EntityDescriptor[];
		SaveChangesDefaultOptions: Microsoft.OData.Client.SaveChangesOptions;
		IgnoreResourceNotFoundException: boolean;
		Configurations: Microsoft.OData.Client.DataServiceClientConfigurations;
		Format: Microsoft.OData.Client.DataServiceClientFormat;
		UrlConventions: Microsoft.OData.Client.DataServiceUrlConventions;
		EntityTracker: Microsoft.OData.Client.EntityTracker;
		DisableInstanceAnnotationMaterialization: boolean;
		ODataSimplified: boolean;
	}
	interface LinkDescriptor extends Microsoft.OData.Client.Descriptor {
		Target: any;
		Source: any;
		SourceProperty: string;
	}
	interface Descriptor {
		State: Microsoft.OData.Client.EntityStates;
	}
	interface EntityDescriptor extends Microsoft.OData.Client.Descriptor {
		Identity: System.Uri;
		SelfLink: System.Uri;
		EditLink: System.Uri;
		ReadStreamUri: System.Uri;
		EditStreamUri: System.Uri;
		Entity: any;
		ETag: string;
		StreamETag: string;
		ParentForInsert: Microsoft.OData.Client.EntityDescriptor;
		ParentPropertyForInsert: string;
		ParentForUpdate: Microsoft.OData.Client.EntityDescriptor;
		ParentPropertyForUpdate: string;
		ServerTypeName: string;
		LinkInfos: Microsoft.OData.Client.LinkInfo[];
		StreamDescriptors: Microsoft.OData.Client.StreamDescriptor[];
		OperationDescriptors: Microsoft.OData.Client.OperationDescriptor[];
	}
	interface LinkInfo {
		Name: string;
		NavigationLink: System.Uri;
		AssociationLink: System.Uri;
	}
	interface StreamDescriptor extends Microsoft.OData.Client.Descriptor {
		StreamLink: Microsoft.OData.Client.DataServiceStreamLink;
		EntityDescriptor: Microsoft.OData.Client.EntityDescriptor;
	}
	interface DataServiceStreamLink {
		Name: string;
		SelfLink: System.Uri;
		EditLink: System.Uri;
		ContentType: string;
		ETag: string;
	}
	interface OperationDescriptor extends Microsoft.OData.Client.Descriptor {
		Title: string;
		Metadata: System.Uri;
		Target: System.Uri;
	}
	interface DataServiceClientConfigurations {
		ResponsePipeline: Microsoft.OData.Client.DataServiceClientResponsePipelineConfiguration;
		RequestPipeline: Microsoft.OData.Client.DataServiceClientRequestPipelineConfiguration;
	}
	interface DataServiceClientResponsePipelineConfiguration {
	}
	interface DataServiceClientRequestPipelineConfiguration {
		OnMessageCreating: System.Func<Microsoft.OData.Client.DataServiceClientRequestMessageArgs, Microsoft.OData.Client.DataServiceClientRequestMessage>;
	}
	interface DataServiceClientRequestMessageArgs {
		Method: string;
		RequestUri: System.Uri;
		UsePostTunneling: boolean;
		Headers: System.Collections.Generic.KeyValuePair<string, string>[];
		ActualMethod: string;
		UseDefaultCredentials: boolean;
	}
	interface DataServiceClientRequestMessage {
		Headers: System.Collections.Generic.KeyValuePair<string, string>[];
		Url: System.Uri;
		Method: string;
		Credentials: System.Net.ICredentials;
		Timeout: number;
		SendChunked: boolean;
	}
	interface DataServiceClientFormat {
		ODataFormat: Microsoft.OData.Core.ODataFormat;
		LoadServiceModel: System.Func<Microsoft.OData.Edm.IEdmModel>;
	}
	interface DataServiceUrlConventions {
		Default: Microsoft.OData.Client.DataServiceUrlConventions;
		KeyAsSegment: Microsoft.OData.Client.DataServiceUrlConventions;
	}
	interface EntityTracker extends Microsoft.OData.Client.EntityTrackerBase {
		Links: Microsoft.OData.Client.LinkDescriptor[];
		Entities: Microsoft.OData.Client.EntityDescriptor[];
	}
	interface EntityTrackerBase {
	}
	interface BaseEntityType {
	}
}
declare module System {
	interface Func<T, TResult> extends System.MulticastDelegate {
	}
	interface MulticastDelegate extends System.Delegate {
	}
	interface Delegate {
		Method: System.Reflection.MethodInfo;
		Target: any;
	}
	interface Type extends System.Reflection.MemberInfo {
		MemberType: System.Reflection.MemberTypes;
		DeclaringType: System.Type;
		DeclaringMethod: System.Reflection.MethodBase;
		ReflectedType: System.Type;
		StructLayoutAttribute: System.Runtime.InteropServices.StructLayoutAttribute;
		GUID: System.Guid;
		DefaultBinder: System.Reflection.Binder;
		Module: System.Reflection.Module;
		Assembly: System.Reflection.Assembly;
		TypeHandle: System.RuntimeTypeHandle;
		FullName: string;
		Namespace: string;
		AssemblyQualifiedName: string;
		BaseType: System.Type;
		TypeInitializer: System.Reflection.ConstructorInfo;
		IsNested: boolean;
		Attributes: System.Reflection.TypeAttributes;
		GenericParameterAttributes: System.Reflection.GenericParameterAttributes;
		IsVisible: boolean;
		IsNotPublic: boolean;
		IsPublic: boolean;
		IsNestedPublic: boolean;
		IsNestedPrivate: boolean;
		IsNestedFamily: boolean;
		IsNestedAssembly: boolean;
		IsNestedFamANDAssem: boolean;
		IsNestedFamORAssem: boolean;
		IsAutoLayout: boolean;
		IsLayoutSequential: boolean;
		IsExplicitLayout: boolean;
		IsClass: boolean;
		IsInterface: boolean;
		IsValueType: boolean;
		IsAbstract: boolean;
		IsSealed: boolean;
		IsEnum: boolean;
		IsSpecialName: boolean;
		IsImport: boolean;
		IsSerializable: boolean;
		IsAnsiClass: boolean;
		IsUnicodeClass: boolean;
		IsAutoClass: boolean;
		IsArray: boolean;
		IsGenericType: boolean;
		IsGenericTypeDefinition: boolean;
		IsConstructedGenericType: boolean;
		IsGenericParameter: boolean;
		GenericParameterPosition: number;
		ContainsGenericParameters: boolean;
		IsByRef: boolean;
		IsPointer: boolean;
		IsPrimitive: boolean;
		IsCOMObject: boolean;
		HasElementType: boolean;
		IsContextful: boolean;
		IsMarshalByRef: boolean;
		GenericTypeArguments: System.Type[];
		IsSecurityCritical: boolean;
		IsSecuritySafeCritical: boolean;
		IsSecurityTransparent: boolean;
		UnderlyingSystemType: System.Type;
	}
	interface Attribute {
		TypeId: any;
	}
	interface Guid {
	}
	interface RuntimeFieldHandle {
		Value: number;
	}
	interface ModuleHandle {
		MDStreamVersion: number;
	}
	interface RuntimeTypeHandle {
		Value: number;
	}
	interface RuntimeMethodHandle {
		Value: number;
	}
	interface Uri {
		AbsolutePath: string;
		AbsoluteUri: string;
		LocalPath: string;
		Authority: string;
		HostNameType: System.UriHostNameType;
		IsDefaultPort: boolean;
		IsFile: boolean;
		IsLoopback: boolean;
		PathAndQuery: string;
		Segments: string[];
		IsUnc: boolean;
		Host: string;
		Port: number;
		Query: string;
		Fragment: string;
		Scheme: string;
		OriginalString: string;
		DnsSafeHost: string;
		IdnHost: string;
		IsAbsoluteUri: boolean;
		UserEscaped: boolean;
		UserInfo: string;
	}
	interface Func<TResult> extends System.MulticastDelegate {
	}
}
declare module System.Reflection {
	interface MethodInfo extends System.Reflection.MethodBase {
		MemberType: System.Reflection.MemberTypes;
		ReturnType: System.Type;
		ReturnParameter: System.Reflection.ParameterInfo;
		ReturnTypeCustomAttributes: System.Reflection.ICustomAttributeProvider;
	}
	interface MethodBase extends System.Reflection.MemberInfo {
		MethodImplementationFlags: System.Reflection.MethodImplAttributes;
		MethodHandle: System.RuntimeMethodHandle;
		Attributes: System.Reflection.MethodAttributes;
		CallingConvention: System.Reflection.CallingConventions;
		IsGenericMethodDefinition: boolean;
		ContainsGenericParameters: boolean;
		IsGenericMethod: boolean;
		IsSecurityCritical: boolean;
		IsSecuritySafeCritical: boolean;
		IsSecurityTransparent: boolean;
		IsPublic: boolean;
		IsPrivate: boolean;
		IsFamily: boolean;
		IsAssembly: boolean;
		IsFamilyAndAssembly: boolean;
		IsFamilyOrAssembly: boolean;
		IsStatic: boolean;
		IsFinal: boolean;
		IsVirtual: boolean;
		IsHideBySig: boolean;
		IsAbstract: boolean;
		IsSpecialName: boolean;
		IsConstructor: boolean;
	}
	interface MemberInfo {
		MemberType: System.Reflection.MemberTypes;
		Name: string;
		DeclaringType: System.Type;
		ReflectedType: System.Type;
		CustomAttributes: System.Reflection.CustomAttributeData[];
		MetadataToken: number;
		Module: System.Reflection.Module;
	}
	interface Binder {
	}
	interface Module {
		CustomAttributes: System.Reflection.CustomAttributeData[];
		MDStreamVersion: number;
		FullyQualifiedName: string;
		ModuleVersionId: System.Guid;
		MetadataToken: number;
		ScopeName: string;
		Name: string;
		Assembly: System.Reflection.Assembly;
		ModuleHandle: System.ModuleHandle;
	}
	interface CustomAttributeData {
		AttributeType: System.Type;
		Constructor: System.Reflection.ConstructorInfo;
		ConstructorArguments: System.Reflection.CustomAttributeTypedArgument[];
		NamedArguments: System.Reflection.CustomAttributeNamedArgument[];
	}
	interface ConstructorInfo extends System.Reflection.MethodBase {
		MemberType: System.Reflection.MemberTypes;
	}
	interface CustomAttributeTypedArgument {
		ArgumentType: System.Type;
		Value: any;
	}
	interface CustomAttributeNamedArgument {
		MemberInfo: System.Reflection.MemberInfo;
		TypedValue: System.Reflection.CustomAttributeTypedArgument;
		MemberName: string;
		IsField: boolean;
	}
	interface Assembly {
		CodeBase: string;
		EscapedCodeBase: string;
		FullName: string;
		EntryPoint: System.Reflection.MethodInfo;
		ExportedTypes: System.Type[];
		DefinedTypes: System.Reflection.TypeInfo[];
		Evidence: any;
		PermissionSet: any;
		IsFullyTrusted: boolean;
		SecurityRuleSet: System.Security.SecurityRuleSet;
		ManifestModule: System.Reflection.Module;
		CustomAttributes: System.Reflection.CustomAttributeData[];
		ReflectionOnly: boolean;
		Modules: System.Reflection.Module[];
		Location: string;
		ImageRuntimeVersion: string;
		GlobalAssemblyCache: boolean;
		HostContext: number;
		IsDynamic: boolean;
	}
	interface TypeInfo extends System.Type {
		GenericTypeParameters: System.Type[];
		DeclaredConstructors: System.Reflection.ConstructorInfo[];
		DeclaredEvents: System.Reflection.EventInfo[];
		DeclaredFields: System.Reflection.FieldInfo[];
		DeclaredMembers: System.Reflection.MemberInfo[];
		DeclaredMethods: System.Reflection.MethodInfo[];
		DeclaredNestedTypes: System.Reflection.TypeInfo[];
		DeclaredProperties: System.Reflection.PropertyInfo[];
		ImplementedInterfaces: System.Type[];
	}
	interface EventInfo extends System.Reflection.MemberInfo {
		MemberType: System.Reflection.MemberTypes;
		Attributes: System.Reflection.EventAttributes;
		AddMethod: System.Reflection.MethodInfo;
		RemoveMethod: System.Reflection.MethodInfo;
		RaiseMethod: System.Reflection.MethodInfo;
		EventHandlerType: System.Type;
		IsSpecialName: boolean;
		IsMulticast: boolean;
	}
	interface FieldInfo extends System.Reflection.MemberInfo {
		MemberType: System.Reflection.MemberTypes;
		FieldHandle: System.RuntimeFieldHandle;
		FieldType: System.Type;
		Attributes: System.Reflection.FieldAttributes;
		IsPublic: boolean;
		IsPrivate: boolean;
		IsFamily: boolean;
		IsAssembly: boolean;
		IsFamilyAndAssembly: boolean;
		IsFamilyOrAssembly: boolean;
		IsStatic: boolean;
		IsInitOnly: boolean;
		IsLiteral: boolean;
		IsNotSerialized: boolean;
		IsSpecialName: boolean;
		IsPinvokeImpl: boolean;
		IsSecurityCritical: boolean;
		IsSecuritySafeCritical: boolean;
		IsSecurityTransparent: boolean;
	}
	interface PropertyInfo extends System.Reflection.MemberInfo {
		MemberType: System.Reflection.MemberTypes;
		PropertyType: System.Type;
		Attributes: System.Reflection.PropertyAttributes;
		CanRead: boolean;
		CanWrite: boolean;
		GetMethod: System.Reflection.MethodInfo;
		SetMethod: System.Reflection.MethodInfo;
		IsSpecialName: boolean;
	}
	interface ParameterInfo {
		ParameterType: System.Type;
		Name: string;
		HasDefaultValue: boolean;
		DefaultValue: any;
		RawDefaultValue: any;
		Position: number;
		Attributes: System.Reflection.ParameterAttributes;
		Member: System.Reflection.MemberInfo;
		IsIn: boolean;
		IsOut: boolean;
		IsLcid: boolean;
		IsRetval: boolean;
		IsOptional: boolean;
		MetadataToken: number;
		CustomAttributes: System.Reflection.CustomAttributeData[];
	}
	interface ICustomAttributeProvider {
	}
}
declare module System.Runtime.InteropServices {
	interface StructLayoutAttribute extends System.Attribute {
		Value: System.Runtime.InteropServices.LayoutKind;
	}
}
declare module System.Net {
	interface ICredentials {
	}
}
declare module System.Collections.Generic {
	interface KeyValuePair<TKey, TValue> {
		Key: TKey;
		Value: TValue;
	}
}
declare module Microsoft.OData.Core {
	interface ODataFormat {
		Atom: Microsoft.OData.Core.ODataFormat;
		Json: Microsoft.OData.Core.ODataFormat;
		RawValue: Microsoft.OData.Core.ODataFormat;
		Batch: Microsoft.OData.Core.ODataFormat;
		Metadata: Microsoft.OData.Core.ODataFormat;
	}
}
declare module Microsoft.OData.Edm {
	interface IEdmModel {
		SchemaElements: Microsoft.OData.Edm.IEdmSchemaElement[];
		VocabularyAnnotations: Microsoft.OData.Edm.Annotations.IEdmVocabularyAnnotation[];
		ReferencedModels: Microsoft.OData.Edm.IEdmModel[];
		DeclaredNamespaces: string[];
		DirectValueAnnotationsManager: Microsoft.OData.Edm.Annotations.IEdmDirectValueAnnotationsManager;
		EntityContainer: Microsoft.OData.Edm.IEdmEntityContainer;
	}
	interface IEdmSchemaElement {
		SchemaElementKind: Microsoft.OData.Edm.EdmSchemaElementKind;
		Namespace: string;
	}
	interface IEdmTerm {
		TermKind: Microsoft.OData.Edm.EdmTermKind;
	}
	interface IEdmVocabularyAnnotatable {
	}
	interface IEdmEntityContainer {
		Elements: Microsoft.OData.Edm.IEdmEntityContainerElement[];
	}
	interface IEdmEntityContainerElement {
		ContainerElementKind: Microsoft.OData.Edm.EdmContainerElementKind;
		Container: Microsoft.OData.Edm.IEdmEntityContainer;
	}
}
declare module Microsoft.OData.Edm.Annotations {
	interface IEdmVocabularyAnnotation {
		Qualifier: string;
		Term: Microsoft.OData.Edm.IEdmTerm;
		Target: Microsoft.OData.Edm.IEdmVocabularyAnnotatable;
	}
	interface IEdmDirectValueAnnotationsManager {
	}
}
declare module Microsoft.OData.Edm.Library {
	interface Date {
		Now: Microsoft.OData.Edm.Library.Date;
		Year: number;
		Month: number;
		Day: number;
	}
}
module DG.Microsoft.Dynamics.CRM {
	export const enum TimeCode {
		Available = 0,
		Busy = 1,
		Unavailable = 2,
		Filter = 3
	}
	export const enum SubCode {
		Unspecified = 0,
		Schedulable = 1,
		Committed = 2,
		Uncommitted = 3,
		Break = 4,
		Holiday = 5,
		Vacation = 6,
		Appointment = 7,
		ResourceStartTime = 8,
		ResourceServiceRestriction = 9,
		ResourceCapacity = 10,
		ServiceRestriction = 11,
		ServiceCost = 12
	}
	export const enum AttributeRequiredLevel {
		None = 0,
		SystemRequired = 1,
		ApplicationRequired = 2,
		Recommended = 3
	}
	export const enum AttributeTypeCode {
		Boolean = 0,
		Customer = 1,
		DateTime = 2,
		Decimal = 3,
		Double = 4,
		Integer = 5,
		Lookup = 6,
		Memo = 7,
		Money = 8,
		Owner = 9,
		PartyList = 10,
		Picklist = 11,
		State = 12,
		Status = 13,
		String = 14,
		Uniqueidentifier = 15,
		CalendarRules = 16,
		Virtual = 17,
		BigInt = 18,
		ManagedProperty = 19,
		EntityName = 20
	}
	export const enum AssociatedMenuBehavior {
		UseCollectionName = 0,
		UseLabel = 1,
		DoNotDisplay = 2
	}
	export const enum AssociatedMenuGroup {
		Details = 0,
		Sales = 1,
		Service = 2,
		Marketing = 3
	}
	export const enum SecurityTypes {
		None = 0,
		Append = 1,
		ParentChild = 2,
		Pointer = 4,
		Inheritance = 8
	}
	export const enum RelationshipType {
		OneToManyRelationship = 0,
		ManyToManyRelationship = 1
	}
	export const enum CascadeType {
		NoCascade = 0,
		Cascade = 1,
		Active = 2,
		UserOwned = 3,
		RemoveLink = 4,
		Restrict = 5
	}
	export const enum PrivilegeType {
		None = 0,
		Create = 1,
		Read = 2,
		Write = 3,
		Delete = 4,
		Assign = 5,
		Share = 6,
		Append = 7,
		AppendTo = 8
	}
	export const enum EntityKeyIndexStatus {
		Pending = 0,
		InProgress = 1,
		Active = 2,
		Failed = 3
	}
	export const enum OwnershipTypes {
		None = 0,
		UserOwned = 1,
		TeamOwned = 2,
		BusinessOwned = 4,
		OrganizationOwned = 8,
		BusinessParented = 16
	}
	export const enum ChannelAccessProfilePrivilegeDepth {
		None = 0,
		EntityReference = 1,
		ParentEntityReference = 2,
		Global = 8
	}
	export const enum EndpointType {
		OrganizationService = 0,
		OrganizationDataService = 1,
		WebApplication = 2
	}
	export const enum OrganizationState {
		Enabled = 0,
		Disabled = 1
	}
	export const enum AccessRights {
		None = 0,
		ReadAccess = 1,
		WriteAccess = 2,
		AppendAccess = 4,
		AppendToAccess = 16,
		CreateAccess = 32,
		DeleteAccess = 65536,
		ShareAccess = 262144,
		AssignAccess = 524288
	}
	export const enum PrivilegeDepth {
		Basic = 0,
		Local = 1,
		Deep = 2,
		Global = 3
	}
	export const enum OptionSetType {
		Picklist = 0,
		State = 1,
		Status = 2,
		Boolean = 3
	}
	export const enum DateTimeFormat {
		DateOnly = 0,
		DateAndTime = 1
	}
	export const enum ImeMode {
		Auto = 0,
		Inactive = 1,
		Active = 2,
		Disabled = 3
	}
	export const enum IntegerFormat {
		None = 0,
		Duration = 1,
		TimeZone = 2,
		Language = 3,
		Locale = 4
	}
	export const enum ManagedPropertyType {
		Operation = 0,
		Attribute = 1,
		CustomEvaluator = 2,
		Custom = 3
	}
	export const enum ManagedPropertyOperation {
		None = 0,
		Create = 1,
		Update = 2,
		CreateUpdate = 3,
		Delete = 4,
		UpdateDelete = 6,
		All = 7
	}
	export const enum ManagedPropertyEvaluationPriority {
		None = 0,
		Low = 1,
		Normal = 2,
		High = 3,
		Essential = 4
	}
	export const enum StringFormat {
		Email = 0,
		Text = 1,
		TextArea = 2,
		Url = 3,
		TickerSymbol = 4,
		PhoneticGuide = 5,
		VersionNumber = 6,
		Phone = 7
	}
	export const enum SearchDirection {
		Forward = 0,
		Backward = 1
	}
}
module Microsoft.OData.Client {
	export const enum EntityStates {
		Detached = 1,
		Unchanged = 2,
		Added = 4,
		Deleted = 8,
		Modified = 16
	}
	export const enum DataServiceResponsePreference {
		None = 0,
		IncludeContent = 1,
		NoContent = 2
	}
	export const enum ODataProtocolVersion {
		V4 = 0
	}
	export const enum EntityParameterSendOption {
		SendFullProperties = 0,
		SendOnlySetProperties = 1
	}
	export const enum MergeOption {
		AppendOnly = 0,
		OverwriteChanges = 1,
		PreserveChanges = 2,
		NoTracking = 3
	}
	export const enum SaveChangesOptions {
		None = 0,
		BatchWithSingleChangeset = 1,
		ContinueOnError = 2,
		ReplaceOnUpdate = 4,
		BatchWithIndependentOperations = 16,
		PostOnlySetProperties = 8
	}
}
module System {
	export const enum UriHostNameType {
		Unknown = 0,
		Basic = 1,
		Dns = 2,
		IPv4 = 3,
		IPv6 = 4
	}
}
module System.Reflection {
	export const enum MemberTypes {
		Constructor = 1,
		Event = 2,
		Field = 4,
		Method = 8,
		Property = 16,
		TypeInfo = 32,
		Custom = 64,
		NestedType = 128,
		All = 191
	}
	export const enum EventAttributes {
		None = 0,
		SpecialName = 512,
		ReservedMask = 1024,
		RTSpecialName = 1024
	}
	export const enum FieldAttributes {
		FieldAccessMask = 7,
		PrivateScope = 0,
		Private = 1,
		FamANDAssem = 2,
		Assembly = 3,
		Family = 4,
		FamORAssem = 5,
		Public = 6,
		Static = 16,
		InitOnly = 32,
		Literal = 64,
		NotSerialized = 128,
		SpecialName = 512,
		PinvokeImpl = 8192,
		ReservedMask = 38144,
		RTSpecialName = 1024,
		HasFieldMarshal = 4096,
		HasDefault = 32768,
		HasFieldRVA = 256
	}
	export const enum PropertyAttributes {
		None = 0,
		SpecialName = 512,
		ReservedMask = 62464,
		RTSpecialName = 1024,
		HasDefault = 4096,
		Reserved2 = 8192,
		Reserved3 = 16384,
		Reserved4 = 32768
	}
	export const enum TypeAttributes {
		VisibilityMask = 7,
		NotPublic = 0,
		Public = 1,
		NestedPublic = 2,
		NestedPrivate = 3,
		NestedFamily = 4,
		NestedAssembly = 5,
		NestedFamANDAssem = 6,
		NestedFamORAssem = 7,
		LayoutMask = 24,
		AutoLayout = 0,
		SequentialLayout = 8,
		ExplicitLayout = 16,
		ClassSemanticsMask = 32,
		Class = 0,
		Interface = 32,
		Abstract = 128,
		Sealed = 256,
		SpecialName = 1024,
		Import = 4096,
		Serializable = 8192,
		WindowsRuntime = 16384,
		StringFormatMask = 196608,
		AnsiClass = 0,
		UnicodeClass = 65536,
		AutoClass = 131072,
		CustomFormatClass = 196608,
		CustomFormatMask = 12582912,
		BeforeFieldInit = 1048576,
		ReservedMask = 264192,
		RTSpecialName = 2048,
		HasSecurity = 262144
	}
	export const enum GenericParameterAttributes {
		None = 0,
		VarianceMask = 3,
		Covariant = 1,
		Contravariant = 2,
		SpecialConstraintMask = 28,
		ReferenceTypeConstraint = 4,
		NotNullableValueTypeConstraint = 8,
		DefaultConstructorConstraint = 16
	}
	export const enum MethodImplAttributes {
		CodeTypeMask = 3,
		IL = 0,
		Native = 1,
		OPTIL = 2,
		Runtime = 3,
		ManagedMask = 4,
		Unmanaged = 4,
		Managed = 0,
		ForwardRef = 16,
		PreserveSig = 128,
		InternalCall = 4096,
		Synchronized = 32,
		NoInlining = 8,
		AggressiveInlining = 256,
		NoOptimization = 64,
		MaxMethodImplVal = 65535
	}
	export const enum MethodAttributes {
		MemberAccessMask = 7,
		PrivateScope = 0,
		Private = 1,
		FamANDAssem = 2,
		Assembly = 3,
		Family = 4,
		FamORAssem = 5,
		Public = 6,
		Static = 16,
		Final = 32,
		Virtual = 64,
		HideBySig = 128,
		CheckAccessOnOverride = 512,
		VtableLayoutMask = 256,
		ReuseSlot = 0,
		NewSlot = 256,
		Abstract = 1024,
		SpecialName = 2048,
		PinvokeImpl = 8192,
		UnmanagedExport = 8,
		RTSpecialName = 4096,
		ReservedMask = 53248,
		HasSecurity = 16384,
		RequireSecObject = 32768
	}
	export const enum CallingConventions {
		Standard = 1,
		VarArgs = 2,
		Any = 3,
		HasThis = 32,
		ExplicitThis = 64
	}
	export const enum ParameterAttributes {
		None = 0,
		In = 1,
		Out = 2,
		Lcid = 4,
		Retval = 8,
		Optional = 16,
		ReservedMask = 61440,
		HasDefault = 4096,
		HasFieldMarshal = 8192,
		Reserved3 = 16384,
		Reserved4 = 32768
	}
}
module System.Runtime.InteropServices {
	export const enum LayoutKind {
		Sequential = 0,
		Explicit = 2,
		Auto = 3
	}
}
module Microsoft.OData.Edm {
	export const enum EdmSchemaElementKind {
		None = 0,
		TypeDefinition = 1,
		ValueTerm = 2,
		Action = 3,
		EntityContainer = 4,
		Function = 5
	}
	export const enum EdmTermKind {
		None = 0,
		Type = 1,
		Value = 2
	}
	export const enum EdmContainerElementKind {
		None = 0,
		EntitySet = 1,
		ActionImport = 2,
		FunctionImport = 3,
		Singleton = 4
	}
}
module System.Security {
	export const enum SecurityRuleSet {
		None = 0,
		Level1 = 1,
		Level2 = 2
	}
}
