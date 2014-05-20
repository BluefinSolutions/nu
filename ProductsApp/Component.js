jQuery.sap.require("my.products.util.MockServer");

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

    var sServiceURL = "http://services.odata.org/V3/(S(qmacro0))/OData/OData.svc";
    var oModel = new sap.ui.model.odata.ODataModel(sServiceURL, {
      json : true,
      maxDataServiceVersion : '3.0'
    });
    oModel.setCountSupported(false);
    this.setModel(oModel);

    var oDeviceModel = new sap.ui.model.json.JSONModel({
      isPhone : jQuery.device.is.phone,
      listMode : (jQuery.device.is.phone) ? "None" : "SingleSelectMaster",
      listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive"
    });
    oDeviceModel.setDefaultBindingMode("OneWay");
    this.setModel(oDeviceModel, "device");

    return sap.ui.view("idViewApp", {
      viewName : "my.products.view.App",
      type : "XML"
    });
  }

});
