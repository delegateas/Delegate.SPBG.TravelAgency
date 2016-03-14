/// <reference path="_internal/entities.d.ts" />
declare module SDK {
  module REST {
    function createRecord(object: dg_booking, type: "dg_booking", successCallback: (result: dg_bookingResult) => any, errorCallback: (err: Error) => any): void;
    function deleteRecord(id: string, type: "dg_booking", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveRecord(id: string, type: "dg_booking", select: string, expand: string, successCallback: (result: dg_bookingResult) => any, errorCallback: (err: Error) => any): void;
    function updateRecord(id: string, object: dg_booking, type: "dg_booking", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveMultipleRecords(type: "dg_booking", options: string, successCallback: (result: dg_bookingResult[]) => any, errorCallback: (err: Error) => any, onComplete: any): void;
    function createRecord(object: dg_car, type: "dg_car", successCallback: (result: dg_carResult) => any, errorCallback: (err: Error) => any): void;
    function deleteRecord(id: string, type: "dg_car", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveRecord(id: string, type: "dg_car", select: string, expand: string, successCallback: (result: dg_carResult) => any, errorCallback: (err: Error) => any): void;
    function updateRecord(id: string, object: dg_car, type: "dg_car", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveMultipleRecords(type: "dg_car", options: string, successCallback: (result: dg_carResult[]) => any, errorCallback: (err: Error) => any, onComplete: any): void;
    function createRecord(object: dg_country, type: "dg_country", successCallback: (result: dg_countryResult) => any, errorCallback: (err: Error) => any): void;
    function deleteRecord(id: string, type: "dg_country", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveRecord(id: string, type: "dg_country", select: string, expand: string, successCallback: (result: dg_countryResult) => any, errorCallback: (err: Error) => any): void;
    function updateRecord(id: string, object: dg_country, type: "dg_country", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveMultipleRecords(type: "dg_country", options: string, successCallback: (result: dg_countryResult[]) => any, errorCallback: (err: Error) => any, onComplete: any): void;
    function createRecord(object: dg_hotel, type: "dg_hotel", successCallback: (result: dg_hotelResult) => any, errorCallback: (err: Error) => any): void;
    function deleteRecord(id: string, type: "dg_hotel", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveRecord(id: string, type: "dg_hotel", select: string, expand: string, successCallback: (result: dg_hotelResult) => any, errorCallback: (err: Error) => any): void;
    function updateRecord(id: string, object: dg_hotel, type: "dg_hotel", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveMultipleRecords(type: "dg_hotel", options: string, successCallback: (result: dg_hotelResult[]) => any, errorCallback: (err: Error) => any, onComplete: any): void;
    function createRecord(object: dg_plane, type: "dg_plane", successCallback: (result: dg_planeResult) => any, errorCallback: (err: Error) => any): void;
    function deleteRecord(id: string, type: "dg_plane", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveRecord(id: string, type: "dg_plane", select: string, expand: string, successCallback: (result: dg_planeResult) => any, errorCallback: (err: Error) => any): void;
    function updateRecord(id: string, object: dg_plane, type: "dg_plane", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveMultipleRecords(type: "dg_plane", options: string, successCallback: (result: dg_planeResult[]) => any, errorCallback: (err: Error) => any, onComplete: any): void;
    function createRecord(object: Entity, type: string, successCallback: (result: Entity) => any, errorCallback: (err: Error) => any): void;
    function deleteRecord(id: string, type: string, successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveRecord(id: string, type: string, select: string, expand: string, successCallback: (result: Entity) => any, errorCallback: (err: Error) => any): void;
    function updateRecord(id: string, object: Entity, type: string, successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveMultipleRecords(type: string, options: string, successCallback: (result: Entity[]) => any, errorCallback: (err: Error) => any, onComplete: any): void;
    function associateRecords(parentId: string, parentType: string, relationshipName: string, childId: string, childType: string, successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function disassociateRecords(parentId: string, parentType: string, relationshipName: string, childId: string, childType: string, successCallBack: () => any, errorCallback: (err: Error) => any): void;
  }
}
