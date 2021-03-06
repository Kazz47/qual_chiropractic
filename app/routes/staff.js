import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        this.store.push('person', {
            id: 1,
            firstName: 'Richard',
            lastName: 'Qual',
            prefix: 'Dr.',
            photo: 'http://qualchiropractic.com/staff/rick.jpg',
            startDate: new Date(1995, 1, 1),
            bio: 'My name is Dr. Richard Qual. I attended NDSU in Fargo ND, and Northwestern Health Sciences University in Bloomington MN graduating with a Doctorate in Chiropractic.\n\n My wife Terri and I were both raised in Jamestown and enjoy living here, as we are both near family.\n\n I am currently a volunteer firefighter and certified diver. I am a life member of the Rocky Mountain Elk Foundation, as well as an avid hunter, and a member of the Jamestown Shriners.\n\n In our spare time, Terri and I like to play volleyball, ride motorcycle, play golf, and travel.'
        });
        this.store.push('person', {
            id: 2,
            firstName: 'Matthew',
            middleName: 'Scott',
            lastName: 'Goehner',
            prefix: 'Dr.',
            photo: 'http://qualchiropractic.com/staff/matt.jpg',
            startDate: new Date(2008, 1, 1),
            bio: 'My Name is Dr. Matthew Goehner, I completed my chiropractic prerequisite classes at NDSU in Fargo, ND, and Graduated from Northwestern College of Chiropractic in Bloomington, MN with a Doctorate of Chiropractic and a Bachelors degree in Human Biology.\n\n My wife Karena and I were both born and raised in Jamestown and enjoy being back closer to our family and friends. We have two sons, Bennett and Eddison, and we look forward to raising them in this great community.\n\n My interests include being outdoors, playing golf, keeping up with sports, and spending time with my family and friends.'
        });
        this.store.push('person', {
            id: 3,
            firstName: 'Kyle',
            lastName: 'Goehner',
            startDate: new Date(2015, 1, 1),
            bio: 'My name is Kyle Goehner, and this is repetative information.'
        });
        return this.store.all('person');
    },
    setupController: function(controller, staff) {
        controller.set('model', staff);
    }
});
