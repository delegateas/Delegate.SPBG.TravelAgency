using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;

using Microsoft.Xrm.Sdk;
using System.ServiceModel.Description;

using DG.XrmFramework.BusinessDomain.ServiceContext;
using DG.XrmFramework.BusinessLogic.Helpers;
using HBD = DG.XrmFramework.BusinessLogic.Helpers.HelperBusinessDomain;
using HP = DG.XrmFramework.BusinessLogic.Helpers.HelperPlugin;
using HU = DG.XrmFramework.BusinessLogic.Helpers.HelperUtils;
using Microsoft.Xrm.Sdk.Workflow;

namespace DG.XrmFramework.BusinessLogic.Managers
{
  public class BookingAccount : ManagerBase
  {

    #region Constructors

    public BookingAccount(
        ITracingService pluginTracingService,
        IPluginExecutionContext pluginExecutionContext,
        IOrganizationService pluginOrgService,
        IOrganizationService pluginOrgAdminService)
        : base(pluginTracingService, pluginExecutionContext,
            pluginOrgService, pluginOrgAdminService)
    { }

    public BookingAccount(
        ITracingService tracingService,
        IWorkflowContext workflowExecutionContext,
        IOrganizationService orgService,
        IOrganizationService orgAdminService)
        : base(tracingService, workflowExecutionContext,
            orgService, orgAdminService)
    { }

    public BookingAccount(
        ITracingService tracingService,
        IOrganizationService orgService,
        IOrganizationService orgAdminService)
        : base(tracingService, orgService, orgAdminService)
    { }

    #endregion

    public void EnsurePlanePlugin()
    {
      EnsurePluginContext();

      var booking = HP.GetEntity<dg_booking>(
        this.pluginContext, this.tracingService);

      if(null == booking.dg_Plane)
      {
        var msg = string.Format("A Plane ticket must be choosen");

        throw new Exception(msg);
      }
    }

    public void EnsureSameCountryPlugin()
    {
      EnsurePluginContext();

      var booking = HP.GetEntity<dg_booking>(
        this.pluginContext, this.tracingService);

      EnsureSameCountry(booking);
    }

    public void EnsureDatesPlugin()
    {
      EnsurePluginContext();

      var booking = HP.GetEntity<dg_booking>(
        this.pluginContext, this.tracingService);

      EnsureDates(booking);
    }

    public void EnsureNotBookedPlugin()
    {
      EnsurePluginContext();

      var booking = HP.GetEntity<dg_booking>(
        this.pluginContext, this.tracingService);

      EnsureNotBooked(booking);
    }

    public void GeneratedUniqueBookingIdPlugin()
    {
      EnsurePluginContext();

      var booking = HP.GetEntity<dg_booking>(
        this.pluginContext, this.tracingService);

      var uid = HU.SHA256CheckSum(Guid.NewGuid().ToString(), HU.Salt());

      booking.dg_name = uid.ToUpperInvariant();
    }


    public void UpdateRelatedWithBookingPlugin()
    {
      EnsurePluginContext();

      var booking = HP.GetEntity<dg_booking>(
        this.pluginContext, this.tracingService);

      UpdateRelatedWithBooking(booking);
    }

    private void EnsureSameCountry(dg_booking booking)
    {
      if (null != booking.dg_Hotel || null != booking.dg_Car)
      {
        var countryid = Guid.Empty;

        using (var ctx = new Xrm(this.orgAdminService))
        {
          var query =
            from p in ctx.dg_planeSet
            where p.Id == booking.dg_Plane.Id
            select p.dg_Country.Id;

          countryid = query.FirstOrDefault();
        }

        if (null != booking.dg_Hotel)
        {
          using (var ctx = new Xrm(this.orgAdminService))
          {
            var query =
              from h in ctx.dg_hotelSet
              where h.Id == booking.dg_Hotel.Id
              select h.dg_Country.Id;

            var countryid_ = query.FirstOrDefault();

            if(!countryid.Equals(countryid_))
            {
              var msg = string.Format(
                "Plane destination: {0} and hotel location: {1} don't match",
                countryid, countryid_);

              throw new Exception(msg);
            }
          }
        }

        if (null != booking.dg_Car)
        {
          using (var ctx = new Xrm(this.orgAdminService))
          {
            var query =
              from c in ctx.dg_carSet
              where c.Id == booking.dg_Car.Id
              select c.dg_Country.Id;

            var countryid_ = query.FirstOrDefault();

            if (!countryid.Equals(countryid_))
            {
              var msg = string.Format(
                "Plane destination: {0} and car location: {1} don't match",
                countryid, countryid_);

              throw new Exception(msg);
            }
          }
        }
      }
    }

    private void EnsureDates(dg_booking booking)
    {
      if (null != booking.dg_Hotel || null != booking.dg_Car)
      {
        var dateFrom = DateTime.MinValue;
        var dateTo   = DateTime.MaxValue;

        using (var ctx = new Xrm(this.orgAdminService))
        {
          var query =
            from p in ctx.dg_planeSet
            where p.Id == booking.dg_Plane.Id
            select new { p.dg_Outbound, p.dg_Return };

          dateFrom = query.FirstOrDefault().dg_Outbound.Value;
          dateTo   = query.FirstOrDefault().dg_Return.Value;
        }

        if (null != booking.dg_Hotel)
        {
          using (var ctx = new Xrm(this.orgAdminService))
          {
            var query =
              from h in ctx.dg_hotelSet
              where h.Id == booking.dg_Hotel.Id
              select new { h.dg_Arrival, h.dg_Departure };

            var dateFrom_ = query.FirstOrDefault().dg_Arrival.Value;
            var dateTo_   = query.FirstOrDefault().dg_Departure.Value;

            if (!(dateFrom <= dateFrom_ && dateTo_ <= dateTo))
            {
              var msg = string.Format(
                "Plane dates: {0} - {1} don't match with hotel dates: {2} - {3}",
                dateFrom, dateTo, dateFrom_, dateTo_);

              throw new Exception(msg);
            }
          }
        }

        if (null != booking.dg_Car)
        {
          using (var ctx = new Xrm(this.orgAdminService))
          {
            var query =
              from c in ctx.dg_carSet
              where c.Id == booking.dg_Car.Id
              select new { c.dg_RentFrom, c.dg_RentTo };

            var dateFrom_ = query.FirstOrDefault().dg_RentFrom.Value;
            var dateTo_   = query.FirstOrDefault().dg_RentTo.Value;

            if (!(dateFrom <= dateFrom_ && dateTo_ <= dateTo))
            {
              var msg = string.Format(
                "Plane dates: {0} - {1} don't match with car dates: {2} - {3}",
                dateFrom, dateTo, dateFrom_, dateTo_);

              throw new Exception(msg);
            }
          }
        }
      }
    }

    private void EnsureNotBooked(dg_booking booking)
    {
      using (var ctx = new Xrm(this.orgAdminService))
      {
        var query =
          from p in ctx.dg_planeSet
          where p.Id == booking.dg_Plane.Id
          select p.dg_Booking;

        var booked = query.FirstOrDefault();

        if(null != booked)
        {
          var msg = string.Format(
            "Plane is already booked, ID: {0}", booked.Id);

          throw new Exception(msg);
        }
      }

      if (null != booking.dg_Hotel)
      {
        using (var ctx = new Xrm(this.orgAdminService))
        {
          var query =
            from h in ctx.dg_hotelSet
            where h.Id == booking.dg_Hotel.Id
            select h.dg_Booking;

          var booked = query.FirstOrDefault();

          if (null != booked)
          {
            var msg = string.Format(
              "Hotel is already booked, ID: {0}", booked.Id);

            throw new Exception(msg);
          }
        }
      }

      if (null != booking.dg_Car)
      {
        using (var ctx = new Xrm(this.orgAdminService))
        {
          var query =
            from c in ctx.dg_carSet
            where c.Id == booking.dg_Car.Id
            select c.dg_Booking;

          var booked = query.FirstOrDefault();

          if (null != booked)
          {
            var msg = string.Format(
              "Car is already booked, ID: {0}", booked.Id);

            throw new Exception(msg);
          }
        }
      }
    }

    private void UpdateRelatedWithBooking(dg_booking booking)
    {
      if (null != booking.dg_Plane)
      {
        var plane = new dg_plane
        {
          Id = booking.dg_Plane.Id,
          dg_Booking = new EntityReference(
            dg_booking.EntityLogicalName, booking.Id)
        };

        this.orgAdminService.Update(plane);
      }

      if (null != booking.dg_Hotel)
      {
        var hotel = new dg_hotel
        {
          Id = booking.dg_Hotel.Id,
          dg_Booking = new EntityReference(
            dg_booking.EntityLogicalName, booking.Id)
        };

        this.orgAdminService.Update(hotel);
      }

      if (null != booking.dg_Car)
      {
        var car = new dg_car
        {
          Id = booking.dg_Car.Id,
          dg_Booking = new EntityReference(
            dg_booking.EntityLogicalName, booking.Id)
        };

        this.orgAdminService.Update(car);
      }
    }
  }
}
