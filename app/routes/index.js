import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        this.store.push('day', {
            id: 1,
            name: "Monday",
            text: "9:00 - 5:00"
        });
        this.store.push('day', {
            id: 2,
            name: "Tuesday",
            text: "9:00 - 5:00"
        });
        this.store.push('day', {
            id: 3,
            name: "Wednesday",
            text: "9:00 - 5:00"
        });
        this.store.push('day', {
            id: 4,
            name: "Thursday",
            text: "9:00 - 5:00"
        });
        this.store.push('day', {
            id: 5,
            name: "Friday",
            text: "9:00 - 4:00"
        });
        this.store.push('day', {
            id: 6,
            name: "Saturday",
            text: "By Appointment"
        });
        this.store.push('day', {
            id: 7,
            name: "Sunday",
            text: "Closed"
        });
        return this.store.all('day');
    }
});
