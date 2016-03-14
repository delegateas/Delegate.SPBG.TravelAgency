(**
SolutionImportTest
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

Import Test *)
let zip = cfg.solutions + cfg.solution + @"_managed_.zip"

Solution.import
  cfg.wsdlTest' cfg.solution zip true
    cfg.authType cfg.usrTest cfg.pwdTest cfg.domainTest 
      cfg.log

Solution.pluginSteps
  cfg.wsdlTest' cfg.solution true
    cfg.authType cfg.usrTest cfg.pwdTest cfg.domainTest 
      cfg.log
