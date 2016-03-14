(**
WebResouresSyncDev
=================

Libraries
---------

Config information *)
#load @"DG.SPBG.TravelAgency.Config.fsx"

module cfg = DG.SPBG.TravelAgency.Config

(** Open libraries for use *)
open DG.Daxif.Modules

(**
DAXIF# operations
-----------------

Sync Plugins Dev *)
let dll  = cfg.rootFolder + @"\..\Workflow\bin\Release\ILMerged.Delegate.SPBG.TravelAgency.Plugins.dll"

Workflow.syncSolution
  cfg.wsdlDev' cfg.solution dll
    cfg.authType cfg.usrDev cfg.pwdDev cfg.domainDev 
      cfg.log
