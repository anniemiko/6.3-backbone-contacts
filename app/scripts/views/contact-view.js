var $ = require('jquery');
var Backbone = require('backbone');
require('../utilities.js')

var contactFormTemplate = require('../../templates/contact-form.hbs');
var contactEntryTemplate = require('../../templates/contact-entry.hbs');

var ContactFormView = Backbone.View.extend({
  tagName: 'form',
  events: {
    'submit': 'addContact'
  },
  className: 'row new-contact',
  render: function(){
    this.$el.html(contactFormTemplate());
    return this;
  },
  addContact: function(event){
    event.preventDefault();

    // var $contactFirstName = $('#firstName');
    // this.collection.create({firstName: $contactFirstName.val()});
    // $contactFirstName.val('');

    var formData = this.$el.serializeObject();
    this.collection.create(formData);
  }
});

var ContactTableView = Backbone.View.extend({
  tagName: 'table',
  className: 'contact-table table-striped table-bordered',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderContact);
  },

  render: function(){
    return this;
  },
  renderContact: function(contact){
    var contactItem = new ContactEntryView({model: contact});
    this.$el.append(contactItem.render().el);
  },

});

var ContactEntryView = Backbone.View.extend({
  tagName: 'tbody',
  className: 'contact-entry',
  template: contactEntryTemplate,
  events: {
    'click .clickme': 'removeEntry'
  },
  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
  },
  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  },
  removeEntry: function(event){
    event.preventDefault();
    this.model.destroy();
  },
});

module.exports = {
  ContactFormView: ContactFormView,
  ContactEntryView: ContactEntryView,
  ContactTableView: ContactTableView
};
