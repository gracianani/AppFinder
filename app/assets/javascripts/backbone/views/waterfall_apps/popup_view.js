AppFinder.Views.WaterfallApps = AppFinder.Views.WaterfallApps || {};

AppFinder.Views.WaterfallApps.PopupView = Backbone.View.extend({
  template: JST["backbone/templates/waterfall_apps/popup"],
  className: "popup",
  tagName: "div",
  render: function() {
  	console.log("render");
    $(this.el).html(this.template(this.options.model.toJSON() ));
    return this;
  },
});