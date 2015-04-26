import Ember from 'ember';
/* global moment */
/* global Showdown */

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
    startDate: function() {
        return moment(this.get('model.startDate')).fromNow();
    }.property('model.startDate'),
    bio: function() {
        var converter = new Showdown.converter();
        return new Ember.Handlebars.SafeString(converter.makeHtml(this.get('model.bio')));
    }.property('model.bio')
});
