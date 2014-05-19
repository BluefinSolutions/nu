jQuery.sap.require("my.products.util.Formatter");

sap.ui.controller("my.products.view.Detail", {

  onNavPress : function() {
    this.navigation.navBack();
  }

});
