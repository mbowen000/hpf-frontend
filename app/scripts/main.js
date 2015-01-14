/* global Nyphil, Marionette, $ */
/* exported router */
'use strict';

window.HPF = {
    Routers: {},
    App : new Backbone.Marionette.Application()
};

// init some global variables - these look funny because were doing some string replacement with grunt and need to target specific variables
var configs = {
	// these are defaults -- do not change them here .. change them in the gruntfile env configs!
	__config__root: "/",
    __config__solrUrl: "/solr"
};

// put them on the nyphil object w/ nicer variable names - any way to do this cleaner? be my guest..
HPF.config = HPF.config || { 
	root: configs.__config__root,
	solrUrl: configs.__config__solrUrl
};

HPF.App.addRegions({
    layout: "#layout"
});

HPF.App.on('start', function() { 
    Backbone.history.start({ pushState: true, root: "/hpfapp/" });
});

$(document).ready(function () {
    HPF.App.layout.show(new HPF.App.Layout.View());
    HPF.App.start();
});
