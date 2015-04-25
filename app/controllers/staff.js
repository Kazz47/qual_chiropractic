import Ember from 'ember';

export default Ember.ArrayController.extend({
    itemController: 'person',
    staffCount: function() {
        return this.get('length');
    }.property('@each')
});
