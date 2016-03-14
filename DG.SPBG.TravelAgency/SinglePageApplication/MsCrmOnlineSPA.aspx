<!DOCTYPE html>
<html>
<head>
  <title>Microsoft CRM</title>
  <meta charset="utf-8" />
  <script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
  <script src="//secure.aadcdn.microsoftonline-p.com/lib/1.0.0/js/adal.min.js"></script>
  <script type="text/javascript">
    "use strict";

    ////Set these variables to match your environment
    var organizationURI = "https://spbgoffice365travelagency.crm4.dynamics.com"; //The URL to connect to CRM Online
    var tenant = "common"; //The name of the Azure AD organization you use
    var clientId = "8fded0b1-8608-4915-ac4f-e94e1b605a2d"; //The ClientId you got when you registered the application
    var pageUrl = "http://localhost:22246/MsCrmOnlineSPA.aspx"; //The URL of this page in your development environment when debugging.

    var CrmSDK = window.CrmSDK || {};
    CrmSDK.WebAPI = CrmSDK.WebAPI || {};
    (function () {
      /** @description Create a new entity
        * @param {string} entitySetName The name of the entity set for the type of entity you want to create.
        * @param {object} entity An object with the properties for the entity you want to create..
        * @param {function} successCallback The function to call when the entity is created. The Uri of the created entity is passed to this function.
        * @param {function} errorCallback The function to call when there is an error. The error will be passed to this function.
        * @param {object} token Bearer token needed for CRM Online
        */
      this.create = function (entitySetName, entity, successCallback, errorCallback, token) {
        /// <summary>Create a new entity</summary>
        /// <param name="entitySetName" type="String">The name of the entity set for the type of entity you want to create.</param>
        /// <param name="entity" type="Object">An object with the properties for the entity you want to create.</param>       
        /// <param name="successCallback" type="Function">The function to call when the entity is created. The Uri of the created entity is passed to this function.</param>
        /// <param name="errorCallback" type="Function">The function to call when there is an error. The error will be passed to this function.</param>
        /// <param name="token" type="Object">Bearer token needed for CRM Online.</param>
        if (!isString(entitySetName)) {
          throw new Error("CrmSDK.WebAPI.create entitySetName parameter must be a string.");
        }
        if (isNullOrUndefined(entity)) {
          throw new Error("CrmSDK.WebAPI.create entity parameter must not be null or undefined.");
        }
        if (!isFunctionOrNull(successCallback)) {
          throw new Error("CrmSDK.WebAPI.create successCallback parameter must be a function or null.");
        }
        if (!isFunctionOrNull(errorCallback)) {
          throw new Error("CrmSDK.WebAPI.create errorCallback parameter must be a function or null.");
        }
        var req = new XMLHttpRequest();
        req.open("POST", encodeURI(getWebAPIPath() + entitySetName), true);
        //Set Bearer token
        req.setRequestHeader("Authorization", "Bearer " + token);
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader('Prefer', 'odata.include-annotations="OData.Community.Display.V1.FormattedValue"');
        req.onreadystatechange = function () {
          if (this.readyState == 4 /* complete */) {
            req.onreadystatechange = null;
            if (this.status == 204) {
              if (successCallback)
                successCallback(this.getResponseHeader("OData-EntityId"));
            }
            else {
              if (errorCallback)
                errorCallback(CrmSDK.WebAPI.errorHandler(this.response));
            }
          }
        };
        req.send(JSON.stringify(entity));
      };

      //Internal supporting functions
      function getWebAPIPath() {
        return organizationURI + "/api/data/v8.0/";
      }

      //Internal validation functions
      function isString(obj) {
        if (typeof obj === "string") {
          return true;
        }
        return false;

      }
      function isNull(obj) {
        if (obj === null)
        { return true; }
        return false;
      }
      function isUndefined(obj) {
        if (typeof obj === "undefined") {
          return true;
        }
        return false;
      }
      function isFunction(obj) {
        if (typeof obj === "function") {
          return true;
        }
        return false;
      }
      function isNullOrUndefined(obj) {
        if (isNull(obj) || isUndefined(obj)) {
          return true;
        }
        return false;
      }
      function isFunctionOrNull(obj) {
        if (isNull(obj))
        { return true; }
        if (isFunction(obj))
        { return true; }
        return false;
      }

      // This function is called when an error callback parses the JSON response
      // It is a public function because the error callback occurs within the onreadystatechange 
      // event handler and an internal function would not be in scope.
      this.errorHandler = function (resp) {
        try {
          return JSON.parse(resp).error;
        } catch (e) {
          return new Error("Unexpected Error")
        }
      }

    }).call(CrmSDK.WebAPI);

    var user, authContext, message, errorMessage;

    var getPlanesButton, planesTable, planesTableBody;
    var getHotelsButton, hotelsTable, hotelsTableBody;
    var getCarsButton, carsTable, carsTableBody;
    var bookButton;

    //Configuration data for AuthenticationContext
    var endpoints = {
      orgUri: organizationURI
    };

    window.config = {
      tenant: tenant,
      clientId: clientId,
      postLogoutRedirectUri: pageUrl,
      endpoints: endpoints,
      cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
    };


    document.onreadystatechange = function () {
      if (document.readyState == "complete") {

        //Set DOM elements referenced by scripts
        message = document.getElementById("message");
        errorMessage = document.getElementById("errorMessage");

        getPlanesButton = document.getElementById("getPlanes");
        planesTable = document.getElementById("planesTable");
        planesTableBody = document.getElementById("planesTableBody");
        getHotelsButton = document.getElementById("getHotels");
        hotelsTable = document.getElementById("hotelsTable");
        hotelsTableBody = document.getElementById("hotelsTableBody");
        getCarsButton = document.getElementById("getCars");
        carsTable = document.getElementById("carsTable");
        carsTableBody = document.getElementById("carsTableBody");

        bookButton = document.getElementById("book");

        //Event handlers on DOM elements
        getPlanesButton.addEventListener("click", getPlanes);
        getHotelsButton.addEventListener("click", getHotels);
        getCarsButton.addEventListener("click", getCars);

        bookButton.addEventListener("click", book);

        //call authentication function
        authenticate();

        if (!user) {
          getPlanesButton.disabled = true;
          getHotelsButton.disabled = true;
          getCarsButton.disabled = true;
          bookButton.disabled = true;
        }
      }
    }


    // Function that manages authentication
    function authenticate() {
      //OAuth context
      authContext = new AuthenticationContext(config);

      // Check For & Handle Redirect From AAD After Login
      var isCallback = authContext.isCallback(window.location.hash);
      if (isCallback) {
        authContext.handleWindowCallback();
      }
      var loginError = authContext.getLoginError();

      if (isCallback && !loginError) {
        window.location = authContext._getItem(authContext.CONSTANTS.STORAGE.LOGIN_REQUEST);
      }
      else {
        errorMessage.textContent = loginError;
      }
      user = authContext.getCachedUser();
    }


    //function that initiates retrieval of planes
    function getPlanes() {
      // clear before calling again
      message.innerHTML = "";
      planesTable.style.display = "none";
      planesTableBody.innerHTML = "";

      var retrievingPlanesMessage = document.createElement("p");
      retrievingPlanesMessage.textContent = "Retrieving planes";
      message.appendChild(retrievingPlanesMessage);

      // Function to perform operation is passed as a parameter to the aquireToken method
      authContext.acquireToken(organizationURI, retrievePlanes)
    }
    //function that initiates retrieval of hotels
    function getHotels() {
      // clear before calling again
      message.innerHTML = "";
      hotelsTable.style.display = "none";
      hotelsTableBody.innerHTML = "";

      var retrievingHotelsMessage = document.createElement("p");
      retrievingHotelsMessage.textContent = "Retrieving hotels";
      message.appendChild(retrievingHotelsMessage);

      // Function to perform operation is passed as a parameter to the aquireToken method
      authContext.acquireToken(organizationURI, retrieveHotels)
    }
    //function that initiates retrieval of cars
    function getCars() {
      // clear before calling again
      message.innerHTML = "";
      carsTable.style.display = "none";
      carsTableBody.innerHTML = "";

      var retrievingCarsMessage = document.createElement("p");
      retrievingCarsMessage.textContent = "Retrieving cars";
      message.appendChild(retrievingCarsMessage);

      // Function to perform operation is passed as a parameter to the aquireToken method
      authContext.acquireToken(organizationURI, retrieveCars)
    }


    //Function that actually retrieves the planes
    function retrievePlanes(error, token) {
      // Handle ADAL Errors.
      if (error || !token) {
        errorMessage.textContent = 'ADAL error occurred: ' + error;
        return;
      }

      var req = new XMLHttpRequest()
      req.open("GET", encodeURI(
        organizationURI +
        "/api/data/v8.0/dg_planes?$select=dg_planeid,dg_name,_dg_country_value,dg_outbound,dg_return" +
        "&$filter=_dg_booking_value eq null")
        , true);
      //Set Bearer token
      req.setRequestHeader("Authorization", "Bearer " + token);
      req.setRequestHeader("Accept", "application/json");
      req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
      req.setRequestHeader("OData-MaxVersion", "4.0");
      req.setRequestHeader("OData-Version", "4.0");
      req.setRequestHeader('Prefer', 'odata.include-annotations="OData.Community.Display.V1.FormattedValue"');
      req.onreadystatechange = function () {
        if (this.readyState == 4 /* complete */) {
          req.onreadystatechange = null;
          if (this.status == 200) {
            var planes = JSON.parse(this.response).value;
            renderPlanes(planes);
          }
          else {
            var error = JSON.parse(this.response).error;
            console.log(error.message);
            errorMessage.textContent = error.message;
          }
        }
      };
      req.send();
    }
    //Function that actually retrieves the hotels
    function retrieveHotels(error, token) {
      // Handle ADAL Errors.
      if (error || !token) {
        errorMessage.textContent = 'ADAL error occurred: ' + error;
        return;
      }

      var req = new XMLHttpRequest()
      req.open("GET", encodeURI(
        organizationURI +
        "/api/data/v8.0/dg_hotels?$select=dg_hotelid,dg_name,_dg_country_value,dg_arrival,dg_departure" +
        "&$filter=_dg_booking_value eq null")
        , true);
      //Set Bearer token
      req.setRequestHeader("Authorization", "Bearer " + token);
      req.setRequestHeader("Accept", "application/json");
      req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
      req.setRequestHeader("OData-MaxVersion", "4.0");
      req.setRequestHeader("OData-Version", "4.0");
      req.setRequestHeader('Prefer', 'odata.include-annotations="OData.Community.Display.V1.FormattedValue"');
      req.onreadystatechange = function () {
        if (this.readyState == 4 /* complete */) {
          req.onreadystatechange = null;
          if (this.status == 200) {
            var hotels = JSON.parse(this.response).value;
            renderHotels(hotels);
          }
          else {
            var error = JSON.parse(this.response).error;
            console.log(error.message);
            errorMessage.textContent = error.message;
          }
        }
      };
      req.send();
    }
    //Function that actually retrieves the cars
    function retrieveCars(error, token) {
      // Handle ADAL Errors.
      if (error || !token) {
        errorMessage.textContent = 'ADAL error occurred: ' + error;
        return;
      }

      var req = new XMLHttpRequest()
      req.open("GET", encodeURI(
        organizationURI +
        "/api/data/v8.0/dg_cars?$select=dg_carid,dg_name,_dg_country_value,dg_rentfrom,dg_rentto" +
        "&$filter=_dg_booking_value eq null")
        , true);
      //Set Bearer token
      req.setRequestHeader("Authorization", "Bearer " + token);
      req.setRequestHeader("Accept", "application/json");
      req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
      req.setRequestHeader("OData-MaxVersion", "4.0");
      req.setRequestHeader("OData-Version", "4.0");
      req.setRequestHeader('Prefer', 'odata.include-annotations="OData.Community.Display.V1.FormattedValue"');
      req.onreadystatechange = function () {
        if (this.readyState == 4 /* complete */) {
          req.onreadystatechange = null;
          if (this.status == 200) {
            var cars = JSON.parse(this.response).value;
            renderCars(cars);
          }
          else {
            var error = JSON.parse(this.response).error;
            console.log(error.message);
            errorMessage.textContent = error.message;
          }
        }
      };
      req.send();
    }


    //Function that writes plane data to the planesTable
    function renderPlanes(planes) {
      planes.forEach(function (plane) {
        var id = plane.dg_planeid;
        var name = plane.dg_name;
        var country = plane['_dg_country_value@OData.Community.Display.V1.FormattedValue'];
        var outbound = plane['dg_outbound@OData.Community.Display.V1.FormattedValue'];
        var return_ = plane['dg_return@OData.Community.Display.V1.FormattedValue'];

        var idCell = document.createElement("td");
        var checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("id", id);
        idCell.appendChild(checkBox);
        var nameCell = document.createElement("td");
        nameCell.textContent = name;
        var countryCell = document.createElement("td");
        countryCell.textContent = country;
        var outboundCell = document.createElement("td");
        outboundCell.textContent = outbound;
        var return_Cell = document.createElement("td");
        return_Cell.textContent = return_;

        var row = document.createElement("tr");
        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(countryCell);
        row.appendChild(outboundCell);
        row.appendChild(return_Cell);

        planesTableBody.appendChild(row);
      });
      planesTable.style.display = "block";
      planesTable.style.margin = "auto";
      planesTable.style.display = "";

      // clear aftter calling
      message.innerHTML = "";
    }
    //Function that writes plane data to the hotelsTable
    function renderHotels(hotels) {
      hotels.forEach(function (hotel) {
        var id = hotel.dg_hotelid;
        var name = hotel.dg_name;
        var country = hotel['_dg_country_value@OData.Community.Display.V1.FormattedValue'];
        var arrival = hotel['dg_arrival@OData.Community.Display.V1.FormattedValue'];
        var departure = hotel['dg_departure@OData.Community.Display.V1.FormattedValue'];

        var idCell = document.createElement("td");
        var checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("id", id);
        idCell.appendChild(checkBox);
        var nameCell = document.createElement("td");
        nameCell.textContent = name;
        var countryCell = document.createElement("td");
        countryCell.textContent = country;
        var arrivalCell = document.createElement("td");
        arrivalCell.textContent = arrival;
        var departureCell = document.createElement("td");
        departureCell.textContent = departure;

        var row = document.createElement("tr");
        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(countryCell);
        row.appendChild(arrivalCell);
        row.appendChild(departureCell);

        hotelsTableBody.appendChild(row);
      });
      hotelsTable.style.display = "block";
      hotelsTable.style.margin = "auto";
      hotelsTable.style.display = "";

      // clear aftter calling
      message.innerHTML = "";
    }
    //Function that writes plane data to the carsTable
    function renderCars(cars) {
      cars.forEach(function (car) {
        var id = car.dg_carid;
        var name = car.dg_name;
        var country = car['_dg_country_value@OData.Community.Display.V1.FormattedValue'];
        var rentfrom = car['dg_rentfrom@OData.Community.Display.V1.FormattedValue'];
        var rentto = car['dg_rentto@OData.Community.Display.V1.FormattedValue'];

        var idCell = document.createElement("td");
        var checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("id", id);
        idCell.appendChild(checkBox);
        var nameCell = document.createElement("td");
        nameCell.textContent = name;
        var countryCell = document.createElement("td");
        countryCell.textContent = country;
        var rentfromCell = document.createElement("td");
        rentfromCell.textContent = rentfrom;
        var renttoCell = document.createElement("td");
        renttoCell.textContent = rentto;

        var row = document.createElement("tr");
        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(countryCell);
        row.appendChild(rentfromCell);
        row.appendChild(renttoCell);

        carsTableBody.appendChild(row);
      });
      carsTable.style.display = "block";
      carsTable.style.margin = "auto";
      carsTable.style.display = "";

      // clear aftter calling
      message.innerHTML = "";
    }

    //Function to book trip
    function book()
    {
      // clear before calling again and disable button
      message.innerHTML = "";
      bookButton.disabled = true;

      var bookingMessage = document.createElement("p");
      bookingMessage.textContent = "Booking";
      message.appendChild(bookingMessage);

      // Function to perform operation is passed as a parameter to the aquireToken method
      authContext.acquireToken(organizationURI, createBooking)
    }

    function createBooking(error, token) {
      // Handle ADAL Errors.
      if (error || !token) {
        errorMessage.textContent = 'ADAL error occurred: ' + error;
        return;
      }

      var booking = { };

      // check for plane
      if ($('#planesTableBody').find('input[type="checkbox"]:checked').length != 1)
      {
        bookButton.disabled = false;

        message.innerHTML = "";
        var msg = "Client: Only one plane can be selected (Mandatory).";
        var bookedMessage = document.createElement("p");
        bookedMessage.textContent = "Booking error - " + msg;
        message.appendChild(bookedMessage);

        return;
      }
      $('#planesTableBody').find('input[type="checkbox"]:checked').each(function () {
        booking["dg_Plane@odata.bind"] = "/dg_planes(" + this.id + ")";
      });

      // check for hotel
      if ($('#hotelsTableBody').find('input[type="checkbox"]:checked').length > 1) {
        bookButton.disabled = false;

        message.innerHTML = "";
        var msg = "Client: At most one hotel can be selected (Optional).";
        var bookedMessage = document.createElement("p");
        bookedMessage.textContent = "Booking error - " + msg;
        message.appendChild(bookedMessage);

        return;
      }
      if ($('#hotelsTableBody').find('input[type="checkbox"]:checked').length == 1) {
        $('#hotelsTableBody').find('input[type="checkbox"]:checked').each(function () {
          booking["dg_Hotel@odata.bind"] = "/dg_hotels(" + this.id + ")";
        });
      }

      // check for car
      if ($('#carsTableBody').find('input[type="checkbox"]:checked').length > 1) {
        bookButton.disabled = false;

        message.innerHTML = "";
        var msg = "Client: At most one car can be selected (Optional).";
        var bookedMessage = document.createElement("p");
        bookedMessage.textContent = "Booking error - " + msg;
        message.appendChild(bookedMessage);

        return;
      }
      if ($('#carsTableBody').find('input[type="checkbox"]:checked').length == 1) {
        $('#carsTableBody').find('input[type="checkbox"]:checked').each(function () {
          booking["dg_Car@odata.bind"] = "/dg_cars(" + this.id + ")";
        });
      }

      CrmSDK.WebAPI.create(
        "dg_bookings",
        booking,
        function (bookingUri) { //success
          bookButton.disabled = false;

          message.innerHTML = "";
          var bookedMessage = document.createElement("p");
          bookedMessage.textContent = "Booked: ";
          var urlMessage = document.createElement("a");
          urlMessage.setAttribute("href", bookingUri);
          urlMessage.setAttribute("target", "_blank");
          urlMessage.appendChild(document.createTextNode(bookingUri));
          bookedMessage.appendChild(urlMessage);
          message.appendChild(bookedMessage);
        },
        function (error) { //failure
          bookButton.disabled = false;

          message.innerHTML = "";
          var bookedMessage = document.createElement("p");
          bookedMessage.textContent = "Booking error - " + error.message;
          message.appendChild(bookedMessage);
        },
        token);
    }

  </script>
  <style>
    body, input, button, select, option, textarea {
      font-family: 'Segoe UI','Segoe',Tahoma,Helvetica,Arial,sans-serif;
    }

    body {
      font-size: 12px;
    }

    input, button, select, option, textarea {
      font-size: 100%;
    }

    body {
      margin: 0;
    }

    table {
      text-align: center;
      border-collapse: collapse;
    }

    td, th {
      margin: auto;
      border: 1px solid black;
    }

    #errorMessage {
      color: red;
    }

    #message {
      color: black;
    }
  </style>
</head>
<body>
  <table style="width:100%; height:100%;">
    <thead>
      <tr>
        <th style="width:33%;">
          <button id="getPlanes">Get Planes</button>
        </th>
        <th style="width:33%;">
          <button id="getHotels">Get Hotels</button>
        </th>
        <th style="width:33%;">
          <button id="getCars">Get Cars</button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table id="planesTable" style="display: none;">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>&nbsp;Flight&nbsp;</th>
                <th>&nbsp;Country&nbsp;</th>
                <th>&nbsp;Outbound&nbsp;</th>
                <th>&nbsp;Return&nbsp;</th>
              </tr>
            </thead>
            <tbody id="planesTableBody"></tbody>
          </table>
        </td>
        <td>
          <table id="hotelsTable" style="display: none;">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>&nbsp;Hotel&nbsp;</th>
                <th>&nbsp;Country&nbsp;</th>
                <th>&nbsp;Arrival&nbsp;</th>
                <th>&nbsp;Departure&nbsp;</th>
              </tr>
            </thead>
            <tbody id="hotelsTableBody"></tbody>
          </table>
        </td>
        <td>
          <table id="carsTable" style="display: none;">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>&nbsp;Car&nbsp;</th>
                <th>&nbsp;Country&nbsp;</th>
                <th>&nbsp;From&nbsp;</th>
                <th>&nbsp;To&nbsp;</th>
              </tr>
            </thead>
            <tbody id="carsTableBody"></tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <button id="book">Book</button>
        </td>
      </tr>
    </tbody>
  </table>
  <div id="errorMessage"></div>
  <div id="message"></div>
</body>
</html>
