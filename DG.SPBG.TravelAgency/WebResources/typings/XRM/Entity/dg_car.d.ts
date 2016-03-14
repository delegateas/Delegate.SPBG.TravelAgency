/// <reference path="../_internal/entities.d.ts" />
/// <reference path="../base.d.ts" />
/// <reference path="../_internal/EntityEnum/dg_car.d.ts" />
interface dg_carBase extends Entity {
  CreatedBy: SDK.EntityReference;
  CreatedByName: string;
  CreatedOn: Date;
  CreatedOnBehalfBy: SDK.EntityReference;
  CreatedOnBehalfByName: string;
  dg_Booking: SDK.EntityReference;
  dg_BookingName: string;
  dg_carId: string;
  dg_Country: SDK.EntityReference;
  dg_CountryName: string;
  dg_name: string;
  dg_RentFrom: Date;
  dg_RentTo: Date;
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
  statecode: SDK.OptionSet<dg_car_statecode>;
  statuscode: SDK.OptionSet<dg_car_statuscode>;
  TimeZoneRuleVersionNumber: number;
  UTCConversionTimeZoneCode: number;
  VersionNumber: number;
}
interface dg_car extends dg_carBase {
  dg_dg_car_dg_booking_Car: dg_booking[];
  dg_dg_booking_dg_car_Booking: dg_booking;
  dg_dg_country_dg_car_Country: dg_country;
}
interface dg_carResult extends dg_carBase {
  dg_dg_car_dg_booking_Car: SDK.Results<dg_bookingResult>;
  dg_dg_booking_dg_car_Booking: dg_booking;
  dg_dg_country_dg_car_Country: dg_country;
}
interface dg_car_Select extends dg_car_Expand {
  CreatedBy: Attribute<dg_car_Select>;
  CreatedByName: Attribute<dg_car_Select>;
  CreatedOn: Attribute<dg_car_Select>;
  CreatedOnBehalfBy: Attribute<dg_car_Select>;
  CreatedOnBehalfByName: Attribute<dg_car_Select>;
  dg_Booking: Attribute<dg_car_Select>;
  dg_BookingName: Attribute<dg_car_Select>;
  dg_carId: Attribute<dg_car_Select>;
  dg_Country: Attribute<dg_car_Select>;
  dg_CountryName: Attribute<dg_car_Select>;
  dg_name: Attribute<dg_car_Select>;
  dg_RentFrom: Attribute<dg_car_Select>;
  dg_RentTo: Attribute<dg_car_Select>;
  ImportSequenceNumber: Attribute<dg_car_Select>;
  ModifiedBy: Attribute<dg_car_Select>;
  ModifiedByName: Attribute<dg_car_Select>;
  ModifiedOn: Attribute<dg_car_Select>;
  ModifiedOnBehalfBy: Attribute<dg_car_Select>;
  ModifiedOnBehalfByName: Attribute<dg_car_Select>;
  OverriddenCreatedOn: Attribute<dg_car_Select>;
  OwnerId: Attribute<dg_car_Select>;
  OwnerIdName: Attribute<dg_car_Select>;
  OwnerIdType: Attribute<dg_car_Select>;
  OwningBusinessUnit: Attribute<dg_car_Select>;
  OwningTeam: Attribute<dg_car_Select>;
  OwningUser: Attribute<dg_car_Select>;
  statecode: Attribute<dg_car_Select>;
  statuscode: Attribute<dg_car_Select>;
  TimeZoneRuleVersionNumber: Attribute<dg_car_Select>;
  UTCConversionTimeZoneCode: Attribute<dg_car_Select>;
  VersionNumber: Attribute<dg_car_Select>;
}
interface dg_car_Filter {
  CreatedBy: EntityReferenceFilter;
  CreatedByName: string;
  CreatedOn: Date;
  CreatedOnBehalfBy: EntityReferenceFilter;
  CreatedOnBehalfByName: string;
  dg_Booking: EntityReferenceFilter;
  dg_BookingName: string;
  dg_carId: Guid;
  dg_Country: EntityReferenceFilter;
  dg_CountryName: string;
  dg_name: string;
  dg_RentFrom: Date;
  dg_RentTo: Date;
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
  statecode: ValueContainerFilter<dg_car_statecode>;
  statuscode: ValueContainerFilter<dg_car_statuscode>;
  TimeZoneRuleVersionNumber: number;
  UTCConversionTimeZoneCode: number;
  VersionNumber: number;
}
interface dg_car_Expand {
  dg_dg_car_dg_booking_Car: Expandable<dg_car_Select,dg_booking_Select>;
  dg_dg_booking_dg_car_Booking: Expandable<dg_car_Select,dg_booking_Select>;
  dg_dg_country_dg_car_Country: Expandable<dg_car_Select,dg_country_Select>;
}
interface Entities {
  dg_car: QueryMapping<dg_car,dg_car_Select,dg_car_Expand,dg_car_Filter,dg_carResult>;
}
