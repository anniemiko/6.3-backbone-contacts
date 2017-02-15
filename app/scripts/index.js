var $ = require('jquery');
var Backbone = require('backbone');

var models = require('../../templates/contact.js');

$(function(){

var myContacts = new model.ContactCollection();

var contactForm = new views.ContactForm({collection: myContacts});
$('.new-contact-form').html(contactForm.render().el);

var contactList = new views.ContactEntry({collection: myContacts});
$('.contactlist').html(contactList.render().el);

myContacts.fetch();

});
