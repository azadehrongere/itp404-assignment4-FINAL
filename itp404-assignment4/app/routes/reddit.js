import Ember from 'ember';


export default Ember.Route.extend({
  model: function (){
    return $.ajax({
      url: 'https://www.reddit.com/r/emberjs.json',
      type: 'get'
    }).then(function(promise){
    return promise.data.children;
    });
  }
});
