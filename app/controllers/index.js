//import { computed, observer } from '@ember/object';
//import { empty } from '@ember/object/computed';
import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

  //isDisabled: computed('emailAddress', function() {
    //return this.get('emailAddress') === '';
  //}),
  //isDisabled: empty('emailAddress'),
  //emailAddress: ''

  //actualEmailAddress: computed('emailAddress', function() {
    //console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  //}),

  //emailAddressChanged: observer('emailAddress', function() {
    //console.log('observer is called', this.get('emailAddress'));
  //})
  headerMessage: 'Comming Soon',
  emailAddress: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {

   saveInvitation() {
     alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
     this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
     this.set('emailAddress', '');
   }
 }

});
