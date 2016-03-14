﻿(**
SolutionExtract
===============

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

Extract solution *)
cfg.ensureFolder cfg.solutions

let map   = cfg.rootFolder + @"\..\Blueprint\DG.SPBG.TravelAgency.xml"
let cms   = cfg.rootFolder + @"\..\Blueprint\customizations"
let vsSol = cfg.rootFolder + @"\..\Blueprint\Blueprint.csproj"

let zip = cfg.solutions + cfg.solution + @".zip"

Solution.extract
  cfg.solution
    zip cms map vsSol
      cfg.log
