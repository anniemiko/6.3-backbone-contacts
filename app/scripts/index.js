var $ = require('jquery');
var Backbone = require('backbone');

var models = require('./models/contact-model.js');
var views = require('./views/contact-view.js')

$(function(){

var myContacts = new models.ContactCollection();

var contactForm = new views.ContactFormView({collection: myContacts});
$('.new-contact-form').html(contactForm.render().el);

// var contactList = new views.ContactEntryView({collection: myContacts});
// $('.contactlist').html(contactList.render().el);

var contactList = new views.ContactTableView({collection: myContacts});
$('.contact-list').html(contactList.render().el);

myContacts.fetch();

});
