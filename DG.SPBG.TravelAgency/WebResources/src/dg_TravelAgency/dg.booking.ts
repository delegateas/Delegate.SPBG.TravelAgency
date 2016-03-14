/// <reference path="../../typings/xrm/base.d.ts" />
/// <reference path="../../typings/xrm/dg.xrmquery.d.ts" />

/** 
 * Replace the following reference with the corresponding form this javascript should be used for 
 */
/// <reference path="../../typings/xrm/form/dg_booking/main/information.d.ts" />
module DG.Booking {
  var Form = <Form.dg_booking.Main.Information>Xrm.Page;
  export function onLoad() {
    // Attach onSave
    Form.data.entity.addOnSave(onSave);

    // Attach onChange
    Form.getAttribute("dg_plane").addOnChange(fooChange);
  }
  export function onSave() { /* Do something .. */ }
  export function fooChange() { /* Do something .. */ }

  /**
   * Big showcase of what XrmQuery is capable of
   */
  function bigQueryExample() {
    XrmQuery.retrieveMultipleRecords(x => x.dg_hotel)
      .select(x => [x.dg_name, x.dg_Arrival, x.dg_Departure])
      .expand(x => x.dg_dg_country_dg_hotel_Country, x => [x.dg_ISO3166Code])
      .filter(x =>
        Filter.and(
          Filter.or(
            Filter.equals(x.statecode.Value, dg_hotel_statecode.Active),
            Filter.equals(x.statuscode.Value, dg_hotel_statuscode.Active)),
          Filter.equals(x.dg_Booking.Id, Filter.makeGuid("0000-SOME-GUID")))
      )
      .orderDesc(x => x.dg_Arrival)
      .top(5)
      .execute(accounts => {
        // Do something here with the retrieved accounts
      },
      error => { 
        // Note: The error and onComplete callbacks are optional arguments to the .execute function
        Form.ui.setFormNotification(error.message, "ERROR", "someUniqueId");
      });
  }
}