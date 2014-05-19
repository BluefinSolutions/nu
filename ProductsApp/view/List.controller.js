jQuery.sap.require("my.products.util.Formatter");

sap.ui.controller("my.products.view.List", {

  _oDialog : null,

  selectFirstItem : function() {
    var oList = this.getView().byId("idList");
    var oFirstItem = oList.getItems()[0];
    oList.setSelectedItem(oFirstItem);
    this.showDetail(oFirstItem);
  },

  onBeforeRendering : function() {
      if (!this.getView().getModel("device").getData().isPhone) {
        this.getView().getModel().attachEventOnce('requestCompleted', jQuery.proxy(function(oEvent) {
          this.selectFirstItem();
        }, this));
      }
  },

  onSelect : function(oEvent) {
    this.showDetail(oEvent.getParameter("listItem") || oEvent.getSource());
  },

  showDetail : function(oItem) {
    this.navigation.navTo("idViewDetail", oItem.getBindingContext());
  },

  onAddProduct : function(oEvent) {
    if (!this._oDialog) {
      this._oDialog = sap.ui.xmlfragment("my.products.view.NewProductDialog", this);
      var sNewProductsURL = "http://localhost/qmacro/newproducts";
      var oNewProductsModel = new sap.ui.model.json.JSONModel(sNewProductsURL);
      this._oDialog.setModel(oNewProductsModel, "newproducts");
    }
    this._oDialog.open();
  },

  onClose : function(oEvent) {
    var aContexts = oEvent.getParameter("selectedContexts");
    if (aContexts.length) {
      var mProduct = aContexts[0].getObject();

      // Read existing Milk product for skeleton first
      // as it has the right category and supplier
      var oModel = this.getView().getModel();
      oModel.read('/Products(1)', {
        success : function(mData) {
          jQuery.extend(mData, mProduct);
          delete mData.ProductDetail;
          oModel.create('/Products', mData, {
            success : function() {
              jQuery.sap.require("sap.m.MessageToast");
              sap.m.MessageToast.show("Product added");
            }
          });
        }
      });
    }
  }

});
