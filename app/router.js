import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

export default Router.map(function() {
    this.route("services", function(){
        this.route("edit", { path: "/:photo_id" });
    });
    this.route("staff", function(){
        this.route("edit", { path: "/:photo_id" });
    });
});
