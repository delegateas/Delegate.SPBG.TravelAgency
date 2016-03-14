/// <reference path="../_internal/entities.d.ts" />
/// <reference path="../base.d.ts" />
/// <reference path="../_internal/EntityEnum/dg_hotel.d.ts" />
interface dg_hotelBase extends Entity {
  CreatedBy: SDK.EntityReference;
  CreatedByName: string;
  CreatedOn: Date;
  CreatedOnBehalfBy: SDK.EntityReference;
  CreatedOnBehalfByName: string;
  dg_Arrival: Date;
  dg_Booking: SDK.EntityReference;
  dg_BookingName: string;
  dg_Country: SDK.EntityReference;
  dg_CountryName: string;
  dg_Departure: Date;
  dg_hotelId: string;
  dg_name: string;
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
  statecode: SDK.OptionSet<dg_hotel_statecode>;
  statuscode: SDK.OptionSet<dg_hotel_statuscode>;
  TimeZoneRuleVersionNumber: number;
  UTCConversionTimeZoneCode: number;
  VersionNumber: number;
}
interface dg_hotel extends dg_hotelBase {
  dg_dg_hotel_dg_booking_Hotel: dg_booking[];
  dg_dg_booking_dg_hotel_Booking: dg_booking;
  dg_dg_country_dg_hotel_Country: dg_country;
}
interface dg_hotelResult extends dg_hotelBase {
  dg_dg_hotel_dg_booking_Hotel: SDK.Results<dg_bookingResult>;
  dg_dg_booking_dg_hotel_Booking: dg_booking;
  dg_dg_country_dg_hotel_Country: dg_country;
}
interface dg_hotel_Select extends dg_hotel_Expand {
  CreatedBy: Attribute<dg_hotel_Select>;
  CreatedByName: Attribute<dg_hotel_Select>;
  CreatedOn: Attribute<dg_hotel_Select>;
  CreatedOnBehalfBy: Attribute<dg_hotel_Select>;
  CreatedOnBehalfByName: Attribute<dg_hotel_Select>;
  dg_Arrival: Attribute<dg_hotel_Select>;
  dg_Booking: Attribute<dg_hotel_Select>;
  dg_BookingName: Attribute<dg_hotel_Select>;
  dg_Country: Attribute<dg_hotel_Select>;
  dg_CountryName: Attribute<dg_hotel_Select>;
  dg_Departure: Attribute<dg_hotel_Select>;
  dg_hotelId: Attribute<dg_hotel_Select>;
  dg_name: Attribute<dg_hotel_Select>;
  ImportSequenceNumber: Attribute<dg_hotel_Select>;
  ModifiedBy: Attribute<dg_hotel_Select>;
  ModifiedByName: Attribute<dg_hotel_Select>;
  ModifiedOn: Attribute<dg_hotel_Select>;
  ModifiedOnBehalfBy: Attribute<dg_hotel_Select>;
  ModifiedOnBehalfByName: Attribute<dg_hotel_Select>;
  OverriddenCreatedOn: Attribute<dg_hotel_Select>;
  OwnerId: Attribute<dg_hotel_Select>;
  OwnerIdName: Attribute<dg_hotel_Select>;
  OwnerIdType: Attribute<dg_hotel_Select>;
  OwningBusinessUnit: Attribute<dg_hotel_Select>;
  OwningTeam: Attribute<dg_hotel_Select>;
  OwningUser: Attribute<dg_hotel_Select>;
  statecode: Attribute<dg_hotel_Select>;
  statuscode: Attribute<dg_hotel_Select>;
  TimeZoneRuleVersionNumber: Attribute<dg_hotel_Select>;
  UTCConversionTimeZoneCode: Attribute<dg_hotel_Select>;
  VersionNumber: Attribute<dg_hotel_Select>;
}
interface dg_hotel_Filter {
  CreatedBy: EntityReferenceFilter;
  CreatedByName: string;
  CreatedOn: Date;
  CreatedOnBehalfBy: EntityReferenceFilter;
  CreatedOnBehalfByName: string;
  dg_Arrival: Date;
  dg_Booking: EntityReferenceFilter;
  dg_BookingName: string;
  dg_Country: EntityReferenceFilter;
  dg_CountryName: string;
  dg_Departure: Date;
  dg_hotelId: Guid;
  dg_name: string;
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
  statecode: ValueContainerFilter<dg_hotel_statecode>;
  statuscode: ValueContainerFilter<dg_hotel_statuscode>;
  TimeZoneRuleVersionNumber: number;
  UTCConversionTimeZoneCode: number;
  VersionNumber: number;
}
interface dg_hotel_Expand {
  dg_dg_hotel_dg_booking_Hotel: Expandable<dg_hotel_Select,dg_booking_Select>;
  dg_dg_booking_dg_hotel_Booking: Expandable<dg_hotel_Select,dg_booking_Select>;
  dg_dg_country_dg_hotel_Country: Expandable<dg_hotel_Select,dg_country_Select>;
}
interface Entities {
  dg_hotel: QueryMapping<dg_hotel,dg_hotel_Select,dg_hotel_Expand,dg_hotel_Filter,dg_hotelResult>;
}
