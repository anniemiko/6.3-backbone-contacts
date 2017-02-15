var $ = require('jquery');
var Backbone = ('backbone');

var contactFormTemplate = require('../../templates/contact-form.hbs');
var contactEntryTemplate = require('../../templates/contact-entry.hbs');

var ContactForm = Backbone.View.extend({
  tagName: 'form',
  events: {
    'submit': 'addContact'
  }
  className: 'row new-contact',
  render: function(){
    this.$el.html(contactForm());
    return this;
  }
  addContact: function(event){
    event.preventDefault();

    var $contactName = $('#firstName');
    this.collection.create({firstName: $contactName.val()});

    $contactName.val('');
  }
});

var ContactEntry = Backbone.View.extend({
  tagName: 'table',
  className: 'contact-list',
  events: {
    initialize: function(){
      this.
    }
  }

});

module.exports{
  ContactForm: ContactForm,
  ContactEntry: ContactEntry
}
