AppFinder.Views.WaterfallApps = AppFinder.Views.WaterfallApps || {};

AppFinder.Views.WaterfallApps.NewView = Backbone.View.extend ({
  template: JST["backbone/templates/waterfall_apps/new"],

  events: {
    "submit #new-waterfall_apps": "save"
  },
  
  constructor: function(options) {
    //super(options);
    this.model = new this.collection.model();

    this.model.bind("change:errors", function() {
      this.render();
    });
  },

  save: function(e) {
    e.preventDefault();
    e.stopPropagation();

    this.model.unset("errors");

    this.collection.create(this.model.toJSON(), {
      success: function(waterfall_apps) {
        this.model = waterfall_apps;
        window.location.hash = "/#{this.model.id}";
      },
      error: function(waterfall_apps, jqXHR) {
        this.model.set({errors: $.parseJSON(jqXHR.responseText)});
      }}
    );
  },

  render: function() {
    $(this.el).html(this.template(this.model.toJSON() ));

    this.$("form").backboneLink(this.model);

    return this;
  }
})
  
