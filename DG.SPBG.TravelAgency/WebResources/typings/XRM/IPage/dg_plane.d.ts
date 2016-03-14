/// <reference path="../base.d.ts" />
/// <reference path="../_internal/EntityEnum/dg_plane.d.ts" />
declare module IPage {
  interface dg_plane extends BasicPage {
    getAttribute(name: "createdby"): Attribute<any>;
    getAttribute(name: "createdbyname"): Attribute<string>;
    getAttribute(name: "createdon"): Attribute<Date>;
    getAttribute(name: "createdonbehalfby"): Attribute<any>;
    getAttribute(name: "createdonbehalfbyname"): Attribute<string>;
    getAttribute(name: "dg_booking"): Attribute<any>;
    getAttribute(name: "dg_bookingname"): Attribute<string>;
    getAttribute(name: "dg_country"): Attribute<any>;
    getAttribute(name: "dg_countryname"): Attribute<string>;
    getAttribute(name: "dg_name"): Attribute<string>;
    getAttribute(name: "dg_outbound"): Attribute<Date>;
    getAttribute(name: "dg_planeid"): Attribute<string>;
    getAttribute(name: "dg_return"): Attribute<Date>;
    getAttribute(name: "importsequencenumber"): NumberAttribute;
    getAttribute(name: "modifiedby"): Attribute<any>;
    getAttribute(name: "modifiedbyname"): Attribute<string>;
    getAttribute(name: "modifiedon"): Attribute<Date>;
    getAttribute(name: "modifiedonbehalfby"): Attribute<any>;
    getAttribute(name: "modifiedonbehalfbyname"): Attribute<string>;
    getAttribute(name: "overriddencreatedon"): Attribute<Date>;
    getAttribute(name: "ownerid"): Attribute<any>;
    getAttribute(name: "owneridname"): Attribute<string>;
    getAttribute(name: "owneridtype"): Attribute<string>;
    getAttribute(name: "owningbusinessunit"): Attribute<any>;
    getAttribute(name: "owningteam"): Attribute<any>;
    getAttribute(name: "owninguser"): Attribute<any>;
    getAttribute(name: "statecode"): OptionSetAttribute<dg_plane_statecode>;
    getAttribute(name: "statuscode"): OptionSetAttribute<dg_plane_statuscode>;
    getAttribute(name: "timezoneruleversionnumber"): NumberAttribute;
    getAttribute(name: "utcconversiontimezonecode"): NumberAttribute;
    getAttribute(name: "versionnumber"): NumberAttribute;
    getAttribute(name: string): EmptyAttribute;
    getControl(name: "createdby"): BaseControl;
    getControl(name: "createdbyname"): StringControl;
    getControl(name: "createdon"): DateControl;
    getControl(name: "createdonbehalfby"): BaseControl;
    getControl(name: "createdonbehalfbyname"): StringControl;
    getControl(name: "dg_booking"): BaseControl;
    getControl(name: "dg_bookingname"): StringControl;
    getControl(name: "dg_country"): BaseControl;
    getControl(name: "dg_countryname"): StringControl;
    getControl(name: "dg_name"): StringControl;
    getControl(name: "dg_outbound"): DateControl;
    getControl(name: "dg_planeid"): StringControl;
    getControl(name: "dg_return"): DateControl;
    getControl(name: "importsequencenumber"): NumberControl;
    getControl(name: "modifiedby"): BaseControl;
    getControl(name: "modifiedbyname"): StringControl;
    getControl(name: "modifiedon"): DateControl;
    getControl(name: "modifiedonbehalfby"): BaseControl;
    getControl(name: "modifiedonbehalfbyname"): StringControl;
    getControl(name: "overriddencreatedon"): DateControl;
    getControl(name: "ownerid"): BaseControl;
    getControl(name: "owneridname"): StringControl;
    getControl(name: "owneridtype"): StringControl;
    getControl(name: "owningbusinessunit"): BaseControl;
    getControl(name: "owningteam"): BaseControl;
    getControl(name: "owninguser"): BaseControl;
    getControl(name: "statecode"): OptionSetControl<dg_plane_statecode>;
    getControl(name: "statuscode"): OptionSetControl<dg_plane_statuscode>;
    getControl(name: "timezoneruleversionnumber"): NumberControl;
    getControl(name: "utcconversiontimezonecode"): NumberControl;
    getControl(name: "versionnumber"): NumberControl;
    getControl(name: string): EmptyControl;
    getControl(): BaseControl[];
    getControl(index: number): BaseControl;
    getControl(chooser: (control: BaseControl, index: number) => boolean): BaseControl;
  }
}
