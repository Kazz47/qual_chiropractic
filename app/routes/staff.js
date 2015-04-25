import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        this.store.push('person', {
            id: 1,
            firstName: 'Matthew',
            middleName: 'Scott',
            lastName: 'Goehner',
            prefix: 'Dr.',
            photo: 'http://qualchiropractic.com/staff/rick.jpg',
            bio: 'My Name is Dr. Matthew Goehner, I completed my chiropractic prerequisite classes at NDSU in Fargo, ND, and Graduated from Northwestern College of Chiropractic in Bloomington, MN with a Doctorate of Chiropractic and a Bachelors degree in Human Biology. My Wife Karena and I were both born and raised in Jamestown and enjoy being back closer to our family and friends. We have two sons, Bennett and Eddison, and we look forward to raising them in this great community. My interests include being outdoors, playing golf, keeping up with sports, and spending time with my family and friends.'
        });
        this.store.push('person', {
            id: 2,
            firstName: 'Richard',
            lastName: 'Qual',
            prefix: 'Dr.',
            photo: 'http://qualchiropractic.com/staff/matt.jpg',
            bio: 'My name is Dr. Richard Qual. I attended NDSU in Fargo ND, and Northwestern Health Sciences University in Bloomington MN graduating with a Doctorate in Chiropractic. My wife Terri and I were both raised in Jamestown and enjoy living here, as we are both near family. I am currently a volunteer firefighter and certified diver. I am a life member of the Rocky Mountain Elk Foundation, as well as an avid hunter, and a member of the Jamestown Shriners. In our spare time, Terri and I like to play volleyball, ride motorcycle, play golf, and travel.'
        });
        this.store.push('person', {
            id: 3,
            firstName: 'Kyle',
            lastName: 'Goehner',
            bio: 'My name is Kyle Goehner, and this is repetative information.'
        });
        return this.store.all('person');
    },
    setupController: function(controller, staff) {
        controller.set('model', staff);
    }
});
