
namespace DG.SPBG.TravelAgency.Plugins
{
  using System;
  using Microsoft.Xrm.Sdk;

  using DG.XrmFramework.BusinessDomain.ServiceContext;
  using DG.XrmFramework.BusinessLogic.Managers;
  using HU = DG.XrmFramework.BusinessLogic.Helpers.HelperUtils;

  public class BookingPostPlugin : Plugin
  {
    public BookingPostPlugin()
        : base(typeof(BookingPostPlugin))
    {
      RegisterPluginStep<dg_booking>(
          EventOperation.Create,
          ExecutionStage.PostOperation,
          ExecuteBookingPostPlugin);
    }

    /// <summary>
    /// Executes the plug-in.
    /// </summary>
    /// <param name="localContext">The <see cref="LocalPluginContext"/> which contains the
    /// <see cref="IPluginExecutionContext"/>,
    /// <see cref="IOrganizationService"/>
    /// and <see cref="ITracingService"/>
    /// </param>
    /// <remarks>
    /// For improved performance, Microsoft Dynamics CRM caches plug-in instances.
    /// The plug-in's Execute method should be written to be stateless as the constructor
    /// is not called for every invocation of the plug-in. Also, multiple system threads
    /// could execute the plug-in at the same time. All per invocation state information
    /// is stored in the context. This means that you should not use global variables in plug-ins.
    /// </remarks>
    protected void ExecuteBookingPostPlugin(LocalPluginContext localContext)
    {
      if (localContext == null)
      {
        throw new ArgumentNullException("localContext");
      }

      var bookingManager = new BookingAccount(
          localContext.TracingService,
          localContext.PluginExecutionContext,
          localContext.OrganizationService,
          localContext.OrganizationAdminService);

      try
      {
        bookingManager.UpdateRelatedWithBookingPlugin();
      }
      catch (Exception ex)
      {
        throw new InvalidPluginExecutionException("Server: " + ex.Message);
      }
    }
  }
}
