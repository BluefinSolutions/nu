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
    var oModel = new sap.ui.model.json.JSONModel({
      name : "Fred"
    });
    this.setModel(oModel);
    return sap.ui.view({
      viewName : "my.products.view.App",
      type : "XML"
    });
  }
});
