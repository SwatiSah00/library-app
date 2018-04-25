import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

  emailAddress: '',
  message:'',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {

   saveInvitation() {
     alert(` email address: ${this.get('emailAddress')} and message: ${this.get('message')}`);
     this.set('responseMessage', `We got your message and we’ll get in touch soon`);
     this.set('emailAddress', '');
     this.set('message', '');
   }
 }

});
