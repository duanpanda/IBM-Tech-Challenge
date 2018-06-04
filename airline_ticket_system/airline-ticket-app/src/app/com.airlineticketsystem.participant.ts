import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace com.airlineticketsystem.participant{
   export abstract class AirTicketParticipant extends Participant {
      participantKey: string;
      contact: Contact;
   }
   export class Contact {
      fName: string;
      lname: string;
      email: string;
   }
   export class AirlineAdmin extends AirTicketParticipant {
   }
   export class AirlineAgency extends AirTicketParticipant {
   }
   export class AirTicketClient extends AirTicketParticipant {
   }
// }
