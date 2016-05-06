// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    // Major libraries
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min', // https://github.com/amdjs
    backbone: 'libs/backbone/backbone-min', // https://github.com/amdjs
    backboneRelational   : 'libs/backbone/backbone-relational',
    // Require.js plugins
    text: 'libs/require/text',

    // Just a short cut so we can put our html outside the js dir
    // When you have HTML/CSS designers this aids in keeping them out of the js directory
    templates: '../templates'

    /*
    jqueryUICore         : 'libs/jquery-ui/jquery.ui.core',
    jqueryUIWidget       : 'libs/jquery-ui/jquery.ui.widget',
    jqueryUIMouse        : 'libs/jquery-ui/jquery.ui.mouse',
    jqueryUIPosition     : 'libs/jquery-ui/jquery.ui.position',
    jqueryUIAutocomplete : 'libs/jquery-ui/jquery.ui.autocomplete',
    jqueryUIDatepicker   : 'libs/jquery-ui/jquery.ui.datepicker',
    cookie               : 'libs/jquery/jquery.cookie',
    underscoreString     : 'libs/underscore/underscore.string',
    modelbinding         : 'libs/backbone/backbone.modelbinding',
    domReady             : 'libs/require/domReady',
    bootstrapAlert       : 'libs/bootstrap/bootstrap-alert',
    bootstrapButton      : 'libs/bootstrap/bootstrap-button',
    bootstrapDropdown    : 'libs/bootstrap/bootstrap-dropdown',
    bootstrapModal       : 'libs/bootstrap/bootstrap-modal',
    bootstrapTab         : 'libs/bootstrap/bootstrap-tab',
    bootstrapTypeahead   : 'libs/bootstrap/bootstrap-typeahead',
    bootstrapWysihtml5   : 'libs/bootstrap/bootstrap-wysihtml5',
    */
  }

});

// Let's kick off the application

require([
  'router/MainRouter'
], function(MainRouter){
  
  MainRouter.initialize();

});
