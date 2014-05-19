sap.ui.controller("my.products.view.App", {
  onPress : function(oEvent) {
    jQuery.sap.require("sap.m.MessageToast");
    var sName = this.getView().getModel().getData().name;
    sap.m.MessageToast.show("Hello " + sName);
  }
});
