this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/action-menu/action-menu-action.ejs"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<a role="menuitem" tabindex="-1" href="#">' +
((__t = (data.label)) == null ? '' : __t) +
'</a>';
return __p
};

this["JST"]["app/scripts/templates/action-menu/action-menu.ejs"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<button class="btn btn-default btn-xs dropdown-toggle" type="button" id="' +
((__t = (data.id)) == null ? '' : __t) +
'" data-toggle="dropdown" aria-expanded="true">\n\t' +
((__t = (data.name)) == null ? '' : __t) +
'\n\t<span class="caret"></span>\n</button>\n<ul class="dropdown-menu" role="menu" aria-labelledby="' +
((__t = (data.id)) == null ? '' : __t) +
'"></ul>';
return __p
};

this["JST"]["app/scripts/templates/actions/print-layout.ejs"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += 'Print';
return __p
};

this["JST"]["app/scripts/templates/game.ejs"] = function(data) {
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 print(moment(data.createdAt).format('MMMM Do YYYY, h:mm:ss a')); ;

return __p
};

this["JST"]["app/scripts/templates/game/game-layout-player.ejs"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<div class="clearfix">' +
((__t = (data.firstName)) == null ? '' : __t) +
'</div>\n<img src="http://placehold.it/100x100" alt="...">';
return __p
};

this["JST"]["app/scripts/templates/game/game-layout-team.ejs"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<div class="col-xs-6 players">\n<!-- \t<div class="playerOne"></div>\n\t<div class="playerTwo"></div> -->\n</div>\n<div class="col-xs-6">3</div>';
return __p
};

this["JST"]["app/scripts/templates/game/game-layout.ejs"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<div class="col-xs-5 ">\n\t<div class="row team-one">\n\t\t<!-- insert team one here -->\n\t</div>\n</div>\n<div class="col-xs-2">\n\t<div>\n\t\tGame Duration\n\t</div>\n\t<div>\n\t\t4:05\n\t</div>\n</div>\n<div class="col-xs-5 team-two">\n\t<div class="row team-two">\n\t\t<!-- insert team two here -->\n\t</div>\n</div>';
return __p
};

this["JST"]["app/scripts/templates/layout.ejs"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<div class="header row">\n\tHPF 1.0 Homepage Layout (This is not the main header)\n</div>\n\n<div class="current-game row well">\n\t<!-- game goes here -->\n</div>\n\n<div class="test row">\n\t\n</div>\n';
return __p
};