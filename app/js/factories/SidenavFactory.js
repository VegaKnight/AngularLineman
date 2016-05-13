app.factory('SidenavFactory',function() {
   var showSidenav = false;
   var showToolbar = false;
   var toolbarTitle = "Iglesias";
   var interfaz = {
       setSidenav: function(value) {
           showSidenav = value;
       },
       getSidenav: function() {
           return showSidenav;
       },
       setToolbar: function(value) {
           showToolbar = value;
       },
       getToolbar: function() {
           return showToolbar;
       },
       setTitle: function(value) {
           toolbarTitle = value;
       },
       getTitle: function() {
           return toolbarTitle;
       }
   };
    return interfaz;
});

