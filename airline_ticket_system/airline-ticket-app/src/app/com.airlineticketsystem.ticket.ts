import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {AirTicketParticipant} from './com.airlineticketsystem.participant';
// export namespace com.airlineticketsystem.ticket{
   export enum ClassType {
      Economy,
      FirstClass,
      BusinessClass,
   }
   export class Ticket extends Asset {
      ticketId: string;
      seat: string;
      classType: ClassType;
      arivalTime: string;
      departLoc: string;
      arrivalLoc: string;
      owner: AirTicketParticipant;
      value: string;
   }
   export class TicketTransaction extends Transaction {
      asset: Ticket;
      newValue: string;
   }
   export class TicketEvent extends Event {
      asset: Ticket;
      oldValue: string;
      newValue: string;
   }
// }
