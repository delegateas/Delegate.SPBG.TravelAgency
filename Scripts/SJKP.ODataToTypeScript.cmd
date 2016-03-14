del /F /Q "%CD%\class.cs"

"..\Tools\SJKP\SJKP.ODataToTypeScript\SJKP.ODataToTypeScript.exe"^
  -u "File:\\\%CD%\..\DG.SPBG.TravelAgency\SinglePageApplication\odata\ODataV4Metadata.xml"^
  -n "DG"^
  -o "%CD%\..\DG.SPBG.TravelAgency\SinglePageApplication\typings\crm.d.ts"

pause