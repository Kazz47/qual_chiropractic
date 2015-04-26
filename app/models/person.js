import DS from 'ember-data';

export default DS.Model.extend({
    prefix: DS.attr('string'),
    firstName: DS.attr('string'),
    middleName: DS.attr('string'),
    lastName: DS.attr('string'),
    photo: DS.attr('string'),
    startDate: DS.attr('date'),
    bio: DS.attr('string')
});
