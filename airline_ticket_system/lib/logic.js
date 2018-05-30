'use strict';

/**
 * Ticket transaction
 * @param {com.airlineticketsystem.TicketTransaction} ticketData
 * @transaction
 */
async function TicketTransaction(ticketData) {
    var ticketRegistry={}
    return getAssetRegistry('com.airlineticketsystem.ticket').then(function(registry){
        ticketRegistry = registry
        return ticketRegistry.get(ticketData.ticketId);
    }).then(function(ticket){
        if(!ticket) throw new Error("Ticket : "+ticketData.ticketId," Not Found!!!");
        var   factory = getFactory();
        var   relationship = factory.newRelationship('com.airlineticketsystem.participant','ACMEParticipant',ticketData.ticketId);
        ticket.owner= relationship;
        return ticketRegistry.update(flight);
    }).then(function(){
        // Successful update
        var event = getFactory().newEvent('com.airlineticketsystem.ticket', 'TicketEvent');
        event.ticketId = ticketData.ticketId;
        emit(event);
    }).catch(function(error){
        throw new Error(error);
    });
}
