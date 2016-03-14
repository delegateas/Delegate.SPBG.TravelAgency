/// <reference path="../_internal/entities.d.ts" />
/// <reference path="../base.d.ts" />
/// <reference path="../_internal/EntityEnum/dg_booking.d.ts" />
interface dg_bookingBase extends Entity {
  CreatedBy: SDK.EntityReference;
  CreatedByName: string;
  CreatedOn: Date;
  CreatedOnBehalfBy: SDK.EntityReference;
  CreatedOnBehalfByName: string;
  dg_bookingId: string;
  dg_Car: SDK.EntityReference;
  dg_CarName: string;
  dg_Hotel: SDK.EntityReference;
  dg_HotelName: string;
  dg_name: string;
  dg_Plane: SDK.EntityReference;
  dg_PlaneName: string;
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
  statecode: SDK.OptionSet<dg_booking_statecode>;
  statuscode: SDK.OptionSet<dg_booking_statuscode>;
  TimeZoneRuleVersionNumber: number;
  UTCConversionTimeZoneCode: number;
  VersionNumber: number;
}
interface dg_booking extends dg_bookingBase {
  dg_dg_booking_dg_plane_Booking: dg_plane[];
  dg_dg_booking_dg_hotel_Booking: dg_hotel[];
  dg_dg_booking_dg_car_Booking: dg_car[];
  dg_dg_plane_dg_booking_Plane: dg_plane;
  dg_dg_hotel_dg_booking_Hotel: dg_hotel;
  dg_dg_car_dg_booking_Car: dg_car;
}
interface dg_bookingResult extends dg_bookingBase {
  dg_dg_booking_dg_plane_Booking: SDK.Results<dg_planeResult>;
  dg_dg_booking_dg_hotel_Booking: SDK.Results<dg_hotelResult>;
  dg_dg_booking_dg_car_Booking: SDK.Results<dg_carResult>;
  dg_dg_plane_dg_booking_Plane: dg_plane;
  dg_dg_hotel_dg_booking_Hotel: dg_hotel;
  dg_dg_car_dg_booking_Car: dg_car;
}
interface dg_booking_Select extends dg_booking_Expand {
  CreatedBy: Attribute<dg_booking_Select>;
  CreatedByName: Attribute<dg_booking_Select>;
  CreatedOn: Attribute<dg_booking_Select>;
  CreatedOnBehalfBy: Attribute<dg_booking_Select>;
  CreatedOnBehalfByName: Attribute<dg_booking_Select>;
  dg_bookingId: Attribute<dg_booking_Select>;
  dg_Car: Attribute<dg_booking_Select>;
  dg_CarName: Attribute<dg_booking_Select>;
  dg_Hotel: Attribute<dg_booking_Select>;
  dg_HotelName: Attribute<dg_booking_Select>;
  dg_name: Attribute<dg_booking_Select>;
  dg_Plane: Attribute<dg_booking_Select>;
  dg_PlaneName: Attribute<dg_booking_Select>;
  ImportSequenceNumber: Attribute<dg_booking_Select>;
  ModifiedBy: Attribute<dg_booking_Select>;
  ModifiedByName: Attribute<dg_booking_Select>;
  ModifiedOn: Attribute<dg_booking_Select>;
  ModifiedOnBehalfBy: Attribute<dg_booking_Select>;
  ModifiedOnBehalfByName: Attribute<dg_booking_Select>;
  OverriddenCreatedOn: Attribute<dg_booking_Select>;
  OwnerId: Attribute<dg_booking_Select>;
  OwnerIdName: Attribute<dg_booking_Select>;
  OwnerIdType: Attribute<dg_booking_Select>;
  OwningBusinessUnit: Attribute<dg_booking_Select>;
  OwningTeam: Attribute<dg_booking_Select>;
  OwningUser: Attribute<dg_booking_Select>;
  statecode: Attribute<dg_booking_Select>;
  statuscode: Attribute<dg_booking_Select>;
  TimeZoneRuleVersionNumber: Attribute<dg_booking_Select>;
  UTCConversionTimeZoneCode: Attribute<dg_booking_Select>;
  VersionNumber: Attribute<dg_booking_Select>;
}
interface dg_booking_Filter {
  CreatedBy: EntityReferenceFilter;
  CreatedByName: string;
  CreatedOn: Date;
  CreatedOnBehalfBy: EntityReferenceFilter;
  CreatedOnBehalfByName: string;
  dg_bookingId: Guid;
  dg_Car: EntityReferenceFilter;
  dg_CarName: string;
  dg_Hotel: EntityReferenceFilter;
  dg_HotelName: string;
  dg_name: string;
  dg_Plane: EntityReferenceFilter;
  dg_PlaneName: string;
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
  statecode: ValueContainerFilter<dg_booking_statecode>;
  statuscode: ValueContainerFilter<dg_booking_statuscode>;
  TimeZoneRuleVersionNumber: number;
  UTCConversionTimeZoneCode: number;
  VersionNumber: number;
}
interface dg_booking_Expand {
  dg_dg_booking_dg_plane_Booking: Expandable<dg_booking_Select,dg_plane_Select>;
  dg_dg_booking_dg_hotel_Booking: Expandable<dg_booking_Select,dg_hotel_Select>;
  dg_dg_booking_dg_car_Booking: Expandable<dg_booking_Select,dg_car_Select>;
  dg_dg_plane_dg_booking_Plane: Expandable<dg_booking_Select,dg_plane_Select>;
  dg_dg_hotel_dg_booking_Hotel: Expandable<dg_booking_Select,dg_hotel_Select>;
  dg_dg_car_dg_booking_Car: Expandable<dg_booking_Select,dg_car_Select>;
}
interface Entities {
  dg_booking: QueryMapping<dg_booking,dg_booking_Select,dg_booking_Expand,dg_booking_Filter,dg_bookingResult>;
}
