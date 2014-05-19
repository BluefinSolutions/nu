jQuery.sap.declare("my.products.Component");
sap.ui.core.UIComponent.extend("my.products.Component", {
  metadata : {
    name : "Simple Component",
    version : "0.1",
    dependencies : {
        libs : ["sap.m"],
        components : []
    }
  },

  createContent : function() {
    return new sap.m.VBox({
      items: [
        new sap.m.Input("idName"),
        new sap.m.Button({
          text : "Greet",
          press : function(oEvent) {
            jQuery.sap.require("sap.m.MessageToast");
            var sName = sap.ui.getCore().byId("idName").getValue();
            sap.m.MessageToast.show("Hello " + sName);
          }
        })
      ]
    });
  }
});
