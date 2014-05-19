jQuery.sap.declare("my.products.util.MockServer");

jQuery.sap.require("sap.ui.core.util.MockServer");
var mProducts = {
  Products : [
    { ID: 10382,  Name : "Finesse", Description : "Brouwerij De Dochter van de Korenaar", Rating : 5, Price: 4.65 },
    { ID: 371158, Name : "One Claw", Description : "Westbrook Brewing Co", Rating : 4, Price: 3.80 },
    { ID: 8965,   Name : "Late Red", Description : "Shepherd Neame", Rating : 4, Price: 1.99 }
  ]

};
var oMockServer = new sap.ui.core.util.MockServer({
  rootUri: "http://localhost/qmacro",
  requests: [
    {
      method: "GET",
      path: "/newproducts",
      response: function(oXhr) {
        oXhr.respond(
          200,
          {
            "Content-Type": "application/json"
          },
          JSON.stringify(mProducts)
        );
      }
    }
  ]
});

oMockServer.start();
