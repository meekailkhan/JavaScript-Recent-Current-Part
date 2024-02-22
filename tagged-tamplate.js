// tagged tamplete

// there are 5 movie ticket each per RS 200. and if you buy all ticket you get 50 discount each per ticket

var noTicket = 5;
var ticketPrice = 200;
var buyTicket = 4;
var disTicket = 50;

function ticket(string,totalTicket,priTicket,purchaTicket,disAmount){
    if(purchaTicket < 5){
        disAmount = 0;
        return `${string[0]} ${totalTicket} ${string[1]} ${priTicket} ${string[2]} ${purchaTicket} ${string[3]} ${disAmount}`
    }else{
        return `${string[0]} ${totalTicket} ${string[1]} ${priTicket} ${string[2]} ${purchaTicket} ${string[3]} ${disAmount}`
    }
}


// let reffrence = ticket`there are ${noTicket} and each per RS ${ticketPrice} and you buy ${buyTicket} and get discount each per ticket RS ${disTicket}`
console.log(ticket`there are ${noTicket} and each per RS ${ticketPrice} and you buy ${buyTicket} and get discount each per ticket RS ${disTicket}`)

// console.log(reffrence)