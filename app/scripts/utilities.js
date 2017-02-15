var $ = require('jquery');

$.fn.serializeObject = function() {
   return this.serializeArray().reduce(function(acum, i) {
     acum[i.name] = i.value;
     return acum;
   }, {});
 };

 // can be calledon a jquery form and return the inputs as properties on aan object
