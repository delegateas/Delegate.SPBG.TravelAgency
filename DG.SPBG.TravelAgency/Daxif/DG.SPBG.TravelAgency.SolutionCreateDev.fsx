﻿(**
SolutionCreateDev
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
---------

Create Publisher and Solution on Dev *)
Solution.createPublisher 
  cfg.wsdlDev'
    cfg.pubName cfg.pubDisplay cfg.pubPrefix 
      cfg.authType cfg.usrDev cfg.pwdDev cfg.domainDev 
        cfg.log;;

Solution.create
  cfg.wsdlDev'
    cfg.solution cfg.solDisplay cfg.pubPrefix 
      cfg.authType cfg.usrDev cfg.pwdDev cfg.domainDev 
        cfg.log
