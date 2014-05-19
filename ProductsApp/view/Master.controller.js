jQuery.sap.require("my.products.util.Formatter");

sap.ui.core.mvc.Controller.extend("my.products.view.Master", {

    // onInit : function() {
    //     var oView = this.getView();
    //
    //     // Subscribe to data loaded event of domain model
    //     var oComponent = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(oView));
    //     // oComponent.getEventBus().subscribe("app", "DataLoaded", function() {
    //     sap.ui.getCore().getEventBus().subscribe("app", "DataLoaded", function() {
    //         this.selectDetail();
    //     }, this);
    //
    //     sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched(function(oEvent) {
    //
    //         if (oEvent.getParameter("name") === "product") {
    //
    //             var oList = oView.byId("list"),
    //                 aItems = oList.getItems();
    //             for (var i = 0; i < aItems.length; i++) {
    //                 if (aItems[i].getBindingContext().getPath() === "/" + oEvent.getParameter("arguments").product) {
    //                     oList.setSelectedItem(aItems[i], true);
    //                     break;
    //                 }
    //             }
    //         }
    //     }, this);
    // },
    //
    // selectDetail : function() {
    //     if (!sap.ui.Device.system.phone) {
    //         var oList = this.getView().byId("list");
    //         var aItems = oList.getItems();
    //         if (aItems.length && !oList.getSelectedItem()) {
    //             oList.setSelectedItem(aItems[0], true);
    //             this.showDetail(aItems[0]);
    //         }
    //     }
    // },
    //
    // onSearch : function() {
    //     // add filter for search
    //     var filters = [];
    //     var searchString = this.getView().byId("searchField").getValue();
    //     if (searchString && searchString.length > 0) {
    //         filters = [ new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.Contains, searchString) ];
    //     }
    //
    //     // update list binding
    //     this.getView().byId("list").getBinding("items").filter(filters);
    // },
    //
    // onSelect : function(oEvent) {
    //     // Get the list item, either from the listItem parameter or from the event's
    //     // source itself (will depend on the device-dependent mode).
    //     this.showDetail(oEvent.getParameter("listItem") || oEvent.getSource());
    // },
    //
    // onAddProduct : function() {
    //     sap.ui.core.UIComponent.getRouterFor(this).myNavToWithoutHash("my.products.view.AddProduct", "XML", false);
    // },
    //
    // showDetail : function(oItem) {
    //     // If we're on a phone, include nav in history; if not, don't.
    //     var bReplace = jQuery.device.is.phone ? false : true;
    //     sap.ui.core.UIComponent.getRouterFor(this).navTo("product", {
    //         from: "master",
    //         product: oItem.getBindingContext().getPath().substr(1),
    //         tab: "supplier"
    //     }, bReplace);
    // }

});
