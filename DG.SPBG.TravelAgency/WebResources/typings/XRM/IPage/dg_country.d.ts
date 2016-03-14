/// <reference path="../base.d.ts" />
/// <reference path="../_internal/EntityEnum/dg_country.d.ts" />
declare module IPage {
  interface dg_country extends BasicPage {
    getAttribute(name: "createdby"): Attribute<any>;
    getAttribute(name: "createdbyname"): Attribute<string>;
    getAttribute(name: "createdon"): Attribute<Date>;
    getAttribute(name: "createdonbehalfby"): Attribute<any>;
    getAttribute(name: "createdonbehalfbyname"): Attribute<string>;
    getAttribute(name: "dg_countryid"): Attribute<string>;
    getAttribute(name: "dg_iso3166code"): Attribute<string>;
    getAttribute(name: "dg_name"): Attribute<string>;
    getAttribute(name: "importsequencenumber"): NumberAttribute;
    getAttribute(name: "modifiedby"): Attribute<any>;
    getAttribute(name: "modifiedbyname"): Attribute<string>;
    getAttribute(name: "modifiedon"): Attribute<Date>;
    getAttribute(name: "modifiedonbehalfby"): Attribute<any>;
    getAttribute(name: "modifiedonbehalfbyname"): Attribute<string>;
    getAttribute(name: "organizationid"): Attribute<any>;
    getAttribute(name: "organizationidname"): Attribute<string>;
    getAttribute(name: "overriddencreatedon"): Attribute<Date>;
    getAttribute(name: "statecode"): OptionSetAttribute<dg_country_statecode>;
    getAttribute(name: "statuscode"): OptionSetAttribute<dg_country_statuscode>;
    getAttribute(name: "timezoneruleversionnumber"): NumberAttribute;
    getAttribute(name: "utcconversiontimezonecode"): NumberAttribute;
    getAttribute(name: "versionnumber"): NumberAttribute;
    getAttribute(name: string): EmptyAttribute;
    getControl(name: "createdby"): BaseControl;
    getControl(name: "createdbyname"): StringControl;
    getControl(name: "createdon"): DateControl;
    getControl(name: "createdonbehalfby"): BaseControl;
    getControl(name: "createdonbehalfbyname"): StringControl;
    getControl(name: "dg_countryid"): StringControl;
    getControl(name: "dg_iso3166code"): StringControl;
    getControl(name: "dg_name"): StringControl;
    getControl(name: "importsequencenumber"): NumberControl;
    getControl(name: "modifiedby"): BaseControl;
    getControl(name: "modifiedbyname"): StringControl;
    getControl(name: "modifiedon"): DateControl;
    getControl(name: "modifiedonbehalfby"): BaseControl;
    getControl(name: "modifiedonbehalfbyname"): StringControl;
    getControl(name: "organizationid"): BaseControl;
    getControl(name: "organizationidname"): StringControl;
    getControl(name: "overriddencreatedon"): DateControl;
    getControl(name: "statecode"): OptionSetControl<dg_country_statecode>;
    getControl(name: "statuscode"): OptionSetControl<dg_country_statuscode>;
    getControl(name: "timezoneruleversionnumber"): NumberControl;
    getControl(name: "utcconversiontimezonecode"): NumberControl;
    getControl(name: "versionnumber"): NumberControl;
    getControl(name: string): EmptyControl;
    getControl(): BaseControl[];
    getControl(index: number): BaseControl;
    getControl(chooser: (control: BaseControl, index: number) => boolean): BaseControl;
  }
}
