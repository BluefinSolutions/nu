jQuery.sap.require("my.products.util.Formatter");

sap.ui.controller("my.products.view.App", {

  onInit: function(oEvent) {
    this.oApp = this.getView().byId("idApp");
    var aPages = this.oApp.getMasterPages().concat(this.oApp.getDetailPages());
    aPages.forEach(jQuery.proxy(function(oPage) {
      oPage.getController().navigation = this;
    }, this));
  },

  navTo : function(sPageId, oContext) {
    var oNavTarget = this.getView().byId(sPageId);
    this.oApp.toDetail(oNavTarget.getId());
    if (oContext) {
      oNavTarget.setBindingContext(oContext);
    }
  },

  navBack: function(pageId) {
    this.oApp.backToTopMaster();
  }

});
