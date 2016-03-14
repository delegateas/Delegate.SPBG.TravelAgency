(**
SolutionImportDev
=================

Libraries
---------

Config information *)
#load @"DG.SPBG.TravelAgency.Config.fsx"

module cfg = DG.SPBG.TravelAgency.Config

(** Open libraries for use *)
open DG.Daxif.Modules

module cfg = DG.SPBG.TravelAgency.Config

(**
DAXIF# operations
-----------------

Import Dev *)
let zip = cfg.solutions + cfg.solution + @"_.zip"

Solution.import
  cfg.wsdlDev' cfg.solution zip false
    cfg.authType cfg.usrDev cfg.pwdDev cfg.domainDev 
      cfg.log
