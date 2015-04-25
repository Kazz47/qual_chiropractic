import Ember from 'ember';

export default Ember.Controller.extend({
    fullName: function() {
        if(this.get('model.prefix')) {
            return this.get('model.prefix') + ' ' + this.get('model.firstName') + ' ' + this.get('model.lastName');
        } else {
            return this.get('model.firstName') + ' ' + this.get('model.lastName');
        }
    }.property('model.prefix', 'model.firstName', 'model.lastName'),
    photo: function() {
        return this.get('model.photo');
    }.property('model.photo'),
    bio: function() {
        return this.get('model.bio');
    }.property('model.bio')
});
