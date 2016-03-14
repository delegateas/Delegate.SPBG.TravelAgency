/// <reference path="../_internal/entities.d.ts" />
/// <reference path="../base.d.ts" />
/// <reference path="../_internal/EntityEnum/dg_plane.d.ts" />
interface dg_planeBase extends Entity {
  CreatedBy: SDK.EntityReference;
  CreatedByName: string;
  CreatedOn: Date;
  CreatedOnBehalfBy: SDK.EntityReference;
  CreatedOnBehalfByName: string;
  dg_Booking: SDK.EntityReference;
  dg_BookingName: string;
  dg_Country: SDK.EntityReference;
  dg_CountryName: string;
  dg_name: string;
  dg_Outbound: Date;
  dg_planeId: string;
  dg_Return: Date;
  ImportSequenceNumber: number;
  ModifiedBy: SDK.EntityReference;
  ModifiedByName: string;
  ModifiedOn: Date;
  ModifiedOnBehalfBy: SDK.EntityReference;
  ModifiedOnBehalfByName: string;
  OverriddenCreatedOn: Date;
  OwnerId: SDK.EntityReference;
  OwnerIdName: string;
  OwnerIdType: string;
  OwningBusinessUnit: SDK.EntityReference;
  OwningTeam: SDK.EntityReference;
  OwningUser: SDK.EntityReference;
  statecode: SDK.OptionSet<dg_plane_statecode>;
  statuscode: SDK.OptionSet<dg_plane_statuscode>;
  TimeZoneRuleVersionNumber: number;
  UTCConversionTimeZoneCode: number;
  VersionNumber: number;
}
interface dg_plane extends dg_planeBase {
  dg_dg_plane_dg_booking_Plane: dg_booking[];
  dg_dg_booking_dg_plane_Booking: dg_booking;
  dg_dg_country_dg_plane_Country: dg_country;
}
interface dg_planeResult extends dg_planeBase {
  dg_dg_plane_dg_booking_Plane: SDK.Results<dg_bookingResult>;
  dg_dg_booking_dg_plane_Booking: dg_booking;
  dg_dg_country_dg_plane_Country: dg_country;
}
interface dg_plane_Select extends dg_plane_Expand {
  CreatedBy: Attribute<dg_plane_Select>;
  CreatedByName: Attribute<dg_plane_Select>;
  CreatedOn: Attribute<dg_plane_Select>;
  CreatedOnBehalfBy: Attribute<dg_plane_Select>;
  CreatedOnBehalfByName: Attribute<dg_plane_Select>;
  dg_Booking: Attribute<dg_plane_Select>;
  dg_BookingName: Attribute<dg_plane_Select>;
  dg_Country: Attribute<dg_plane_Select>;
  dg_CountryName: Attribute<dg_plane_Select>;
  dg_name: Attribute<dg_plane_Select>;
  dg_Outbound: Attribute<dg_plane_Select>;
  dg_planeId: Attribute<dg_plane_Select>;
  dg_Return: Attribute<dg_plane_Select>;
  ImportSequenceNumber: Attribute<dg_plane_Select>;
  ModifiedBy: Attribute<dg_plane_Select>;
  ModifiedByName: Attribute<dg_plane_Select>;
  ModifiedOn: Attribute<dg_plane_Select>;
  ModifiedOnBehalfBy: Attribute<dg_plane_Select>;
  ModifiedOnBehalfByName: Attribute<dg_plane_Select>;
  OverriddenCreatedOn: Attribute<dg_plane_Select>;
  OwnerId: Attribute<dg_plane_Select>;
  OwnerIdName: Attribute<dg_plane_Select>;
  OwnerIdType: Attribute<dg_plane_Select>;
  OwningBusinessUnit: Attribute<dg_plane_Select>;
  OwningTeam: Attribute<dg_plane_Select>;
  OwningUser: Attribute<dg_plane_Select>;
  statecode: Attribute<dg_plane_Select>;
  statuscode: Attribute<dg_plane_Select>;
  TimeZoneRuleVersionNumber: Attribute<dg_plane_Select>;
  UTCConversionTimeZoneCode: Attribute<dg_plane_Select>;
  VersionNumber: Attribute<dg_plane_Select>;
}
interface dg_plane_Filter {
  CreatedBy: EntityReferenceFilter;
  CreatedByName: string;
  CreatedOn: Date;
  CreatedOnBehalfBy: EntityReferenceFilter;
  CreatedOnBehalfByName: string;
  dg_Booking: EntityReferenceFilter;
  dg_BookingName: string;
  dg_Country: EntityReferenceFilter;
  dg_CountryName: string;
  dg_name: string;
  dg_Outbound: Date;
  dg_planeId: Guid;
  dg_Return: Date;
  ImportSequenceNumber: number;
  ModifiedBy: EntityReferenceFilter;
  ModifiedByName: string;
  ModifiedOn: Date;
  ModifiedOnBehalfBy: EntityReferenceFilter;
  ModifiedOnBehalfByName: string;
  OverriddenCreatedOn: Date;
  OwnerId: EntityReferenceFilter;
  OwnerIdName: string;
  OwnerIdType: string;
  OwningBusinessUnit: EntityReferenceFilter;
  OwningTeam: EntityReferenceFilter;
  OwningUser: EntityReferenceFilter;
  statecode: ValueContainerFilter<dg_plane_statecode>;
  statuscode: ValueContainerFilter<dg_plane_statuscode>;
  TimeZoneRuleVersionNumber: number;
  UTCConversionTimeZoneCode: number;
  VersionNumber: number;
}
interface dg_plane_Expand {
  dg_dg_plane_dg_booking_Plane: Expandable<dg_plane_Select,dg_booking_Select>;
  dg_dg_booking_dg_plane_Booking: Expandable<dg_plane_Select,dg_booking_Select>;
  dg_dg_country_dg_plane_Country: Expandable<dg_plane_Select,dg_country_Select>;
}
interface Entities {
  dg_plane: QueryMapping<dg_plane,dg_plane_Select,dg_plane_Expand,dg_plane_Filter,dg_planeResult>;
}
