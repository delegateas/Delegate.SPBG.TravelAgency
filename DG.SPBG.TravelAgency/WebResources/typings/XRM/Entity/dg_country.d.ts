/// <reference path="../_internal/entities.d.ts" />
/// <reference path="../base.d.ts" />
/// <reference path="../_internal/EntityEnum/dg_country.d.ts" />
interface dg_countryBase extends Entity {
  CreatedBy: SDK.EntityReference;
  CreatedByName: string;
  CreatedOn: Date;
  CreatedOnBehalfBy: SDK.EntityReference;
  CreatedOnBehalfByName: string;
  dg_countryId: string;
  dg_ISO3166Code: string;
  dg_name: string;
  ImportSequenceNumber: number;
  ModifiedBy: SDK.EntityReference;
  ModifiedByName: string;
  ModifiedOn: Date;
  ModifiedOnBehalfBy: SDK.EntityReference;
  ModifiedOnBehalfByName: string;
  OrganizationId: SDK.EntityReference;
  OrganizationIdName: string;
  OverriddenCreatedOn: Date;
  statecode: SDK.OptionSet<dg_country_statecode>;
  statuscode: SDK.OptionSet<dg_country_statuscode>;
  TimeZoneRuleVersionNumber: number;
  UTCConversionTimeZoneCode: number;
  VersionNumber: number;
}
interface dg_country extends dg_countryBase {
  dg_dg_country_dg_plane_Country: dg_plane[];
  dg_dg_country_dg_hotel_Country: dg_hotel[];
  dg_dg_country_dg_car_Country: dg_car[];
}
interface dg_countryResult extends dg_countryBase {
  dg_dg_country_dg_plane_Country: SDK.Results<dg_planeResult>;
  dg_dg_country_dg_hotel_Country: SDK.Results<dg_hotelResult>;
  dg_dg_country_dg_car_Country: SDK.Results<dg_carResult>;
}
interface dg_country_Select extends dg_country_Expand {
  CreatedBy: Attribute<dg_country_Select>;
  CreatedByName: Attribute<dg_country_Select>;
  CreatedOn: Attribute<dg_country_Select>;
  CreatedOnBehalfBy: Attribute<dg_country_Select>;
  CreatedOnBehalfByName: Attribute<dg_country_Select>;
  dg_countryId: Attribute<dg_country_Select>;
  dg_ISO3166Code: Attribute<dg_country_Select>;
  dg_name: Attribute<dg_country_Select>;
  ImportSequenceNumber: Attribute<dg_country_Select>;
  ModifiedBy: Attribute<dg_country_Select>;
  ModifiedByName: Attribute<dg_country_Select>;
  ModifiedOn: Attribute<dg_country_Select>;
  ModifiedOnBehalfBy: Attribute<dg_country_Select>;
  ModifiedOnBehalfByName: Attribute<dg_country_Select>;
  OrganizationId: Attribute<dg_country_Select>;
  OrganizationIdName: Attribute<dg_country_Select>;
  OverriddenCreatedOn: Attribute<dg_country_Select>;
  statecode: Attribute<dg_country_Select>;
  statuscode: Attribute<dg_country_Select>;
  TimeZoneRuleVersionNumber: Attribute<dg_country_Select>;
  UTCConversionTimeZoneCode: Attribute<dg_country_Select>;
  VersionNumber: Attribute<dg_country_Select>;
}
interface dg_country_Filter {
  CreatedBy: EntityReferenceFilter;
  CreatedByName: string;
  CreatedOn: Date;
  CreatedOnBehalfBy: EntityReferenceFilter;
  CreatedOnBehalfByName: string;
  dg_countryId: Guid;
  dg_ISO3166Code: string;
  dg_name: string;
  ImportSequenceNumber: number;
  ModifiedBy: EntityReferenceFilter;
  ModifiedByName: string;
  ModifiedOn: Date;
  ModifiedOnBehalfBy: EntityReferenceFilter;
  ModifiedOnBehalfByName: string;
  OrganizationId: EntityReferenceFilter;
  OrganizationIdName: string;
  OverriddenCreatedOn: Date;
  statecode: ValueContainerFilter<dg_country_statecode>;
  statuscode: ValueContainerFilter<dg_country_statuscode>;
  TimeZoneRuleVersionNumber: number;
  UTCConversionTimeZoneCode: number;
  VersionNumber: number;
}
interface dg_country_Expand {
  dg_dg_country_dg_plane_Country: Expandable<dg_country_Select,dg_plane_Select>;
  dg_dg_country_dg_hotel_Country: Expandable<dg_country_Select,dg_hotel_Select>;
  dg_dg_country_dg_car_Country: Expandable<dg_country_Select,dg_car_Select>;
}
interface Entities {
  dg_country: QueryMapping<dg_country,dg_country_Select,dg_country_Expand,dg_country_Filter,dg_countryResult>;
}
