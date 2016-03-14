﻿(**
Config
======

Sets up all the necessary variables and functions to be used for the other
scripts.

Open .NET libraries for use *)
open System
open System.IO

(**
Helper functions
---------------- *)
/// Append a slash between two strings
let (+/) a b = a + @"/" + b

// Append to strings separated by a dot
let (+.) a b = a + "." + b

/// Args function that parses command line arguments
let getArg argv key = 
  let arg = Array.tryFind (fun (a : string) -> a.StartsWith(key)) argv
  match arg with
  | Some x -> x.Replace(key, String.Empty)
  | None -> failwith ("Missing argument: " + key)

/// Folder function that ensures that a folder is created if it doesn't exist
let ensureFolder path = 
  match Directory.Exists(path) with
  | false -> Directory.CreateDirectory(path) |> ignore
  | true -> ()

(**
Libraries
---------

Load DAXIF# and Load Microsoft xRM SDK for the AuthenticationProviderType *)
#r @"Microsoft.Xrm.Sdk.dll"
#r @"Delegate.Daxif.dll"

(** Open loaded libraries for use *)
open Microsoft.Xrm.Sdk.Client
open DG.Daxif

(**
Configuration settings
----------------------

Log level *)
let log = LogLevel.Verbose

(** Serialize Type *)
let xml = SerializeType.XML

(** Auth information *)
#load @"DG.SPBG.TravelAgency.AuthInfo.fsx"

[<Literal>]
let authType = AuthenticationProviderType.OnlineFederation

(** Dev auth & environment information *)
[<Literal>]
let usrDev = DG.SPBG.TravelAgency.AuthInfo.usr
[<Literal>]
let pwdDev =  DG.SPBG.TravelAgency.AuthInfo.pwd
[<Literal>]
let domainDev = DG.SPBG.TravelAgency.AuthInfo.domain
[<Literal>]
let wsdlDev  = @"https://spbgOffice365TravelAgency.api.crm4.dynamics.com/XRMServices/2011/Organization.svc"
let wsdlDev' = Uri(wsdlDev)

(** Test auth & environment information *)
[<Literal>]
let usrTest = DG.SPBG.TravelAgency.AuthInfo.usr
[<Literal>]
let pwdTest =  DG.SPBG.TravelAgency.AuthInfo.pwd
[<Literal>]
let domainTest = DG.SPBG.TravelAgency.AuthInfo.domain
[<Literal>]
let wsdlTest  = @"https://mytest.api.crm4.dynamics.com/XRMServices/2011/Organization.svc"
let wsdlTest' = Uri(wsdlTest)

(** Prod auth & environment information *)
[<Literal>]
let usrProd = DG.SPBG.TravelAgency.AuthInfo.usr
[<Literal>]
let pwdProd =  DG.SPBG.TravelAgency.AuthInfo.pwd
[<Literal>]
let domainProd = DG.SPBG.TravelAgency.AuthInfo.domain
[<Literal>]
let wsdlProd  = @"https://myprod.api.crm4.dynamics.com/XRMServices/2011/Organization.svc"
let wsdlProd' = Uri(wsdlProd)

(** Source auth & environment information for data migration *)
[<Literal>]
let usrSource = DG.SPBG.TravelAgency.AuthInfo.usr
[<Literal>]
let pwdSource =  DG.SPBG.TravelAgency.AuthInfo.pwd
[<Literal>]
let domainSource = DG.SPBG.TravelAgency.AuthInfo.domain
[<Literal>]
let wsdlSource  = @"https://SOURCE.api.crm4.dynamics.com/XRMServices/2011/Organization.svc"
let wsdlSource' = Uri(wsdlSource)

(** Target auth & environment information for data migration *)
[<Literal>]
let usrTarget = DG.SPBG.TravelAgency.AuthInfo.usr'
[<Literal>]
let pwdTarget =  DG.SPBG.TravelAgency.AuthInfo.pwd'
[<Literal>]
let domainTarget = DG.SPBG.TravelAgency.AuthInfo.domain'
[<Literal>]
let wsdlTarget  = @"https://TARGET.api.crm4.dynamics.com/XRMServices/2011/Organization.svc"
let wsdlTarget' = Uri(wsdlTarget)

(** Shared environment information *)
let rootFolder = __SOURCE_DIRECTORY__

let solutions = rootFolder + @"\solutions\"

let translations = rootFolder + @"\translations\"

let metadata = rootFolder + @"\metadata\"
let data = rootFolder + @"\data\"
let state = rootFolder + @"\state\"
let associations = rootFolder + @"\associations\"
let mapping = rootFolder + @"\mapping\"
let imported = rootFolder + @"\imported\"

let webresources = rootFolder + @"\..\WebResources\src\"
let tools = rootFolder + @"\..\..\Tools\"

let pubPrefix = @"dg"
let pubName = @"delegateas"
let pubDisplay = @"Delegate A/S"
let solution = @"TravelAgency"
let solDisplay = @"TravelAgency"
