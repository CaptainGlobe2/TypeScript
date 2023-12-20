type Customer = {
    birthday: Date
};

function getCustomer(id:number):Customer | null | undefined{
    return id === 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(0);
if(customer !== null && customer !== undefined){
    console.log(customer.birthday);
}
console.log(customer?.birthday);//optional property access operator

console.log(customer?.birthday?.getFullYear());

//Optional element access operator
//customer?.[0]

//optional call
let log: any = null;
log?.('a');




