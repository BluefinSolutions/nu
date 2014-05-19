jQuery.sap.declare("my.products.util.Formatter");

my.products.util.Formatter = {
  timeOfDay : function(oDate) {
    return oDate.getHours() >= 12 ? "Afternoon" : "Morning";
  },
  ddmmyyyy : new sap.ui.model.type.Date({
    pattern: "dd/MM/yyyy"
  })
};
