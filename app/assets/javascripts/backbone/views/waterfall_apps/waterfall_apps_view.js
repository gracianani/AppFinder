AppFinder.Views.WaterfallApps = AppFinder.Views.WaterfallApps || {};

AppFinder.Views.WaterfallApps.WaterfallAppsView = Backbone.View.extend({
  template: JST["backbone/templates/waterfall_apps/waterfall_apps"],
  events: {
    "click .destroy" : "destroy",
    "click a.btn" : "toggleShareMenu",
    "click div.app-like" : "toggleLike"
  },
  initialize : function(){
    this.short_description_active = false;
  },  
  toggleLike : function() {
    this.model.toggle_like();
    this.model.save();
    this.model.fetch();
    this.render();
  },
  toggleShareMenu : function() {
      var menuShare = $(this.el).find(".menu-share");
      if (menuShare.is(":visible")) {
          menuShare.fadeOut();
      } else {
          menuShare.fadeIn();
      }
  },
 
  tagName: "div",
  className: "card",
  destroy: function () {
    this.model.distory();
    this.remove();
    return false;
  },

  render: function() {
    $(this.el).html(this.template(this.model.toJSON() ));
    $(this.el).find('.bar').mosaic({'animation':'slide'});
    var that = $(this.el);
    var appDetail = $.ajax({url:'assets/data/app-id2.json', dataType: 'text json',  success: function(data) {
      var popupModel = new AppFinder.Models.App(data);
      var popupView = new AppFinder.Views.WaterfallApps.PopupView({model: popupModel});
      that.find('img').bind("click", function(){ 
          TINY.box.show({html:popupView.render().el,boxid:'frameless',animate:false,openjs:function(){}}); 
      });
    }});
    
     

    return this;
  }
    
});
  

  

  

  
