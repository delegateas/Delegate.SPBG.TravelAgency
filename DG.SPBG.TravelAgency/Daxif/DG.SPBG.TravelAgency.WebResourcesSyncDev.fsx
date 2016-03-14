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

Sync Dev *)
WebResources.syncSolution
  cfg.wsdlDev' cfg.solution cfg.webresources
    cfg.authType cfg.usrDev cfg.pwdDev cfg.domainDev 
      cfg.log
