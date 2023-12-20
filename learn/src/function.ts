function calculateTax(income: number, taxYear?:number){ // i trunon the "noUnusedParameters": true, because it not part of strict setting
    //let x;//"noUnusedLocals": true,
    if((taxYear||2023)<50000){
        return income*1.2;
    }// undefined
    // return 0;
    return income *1.3;//"noImplicitReturns": true,
}//ts compiler has inferred the type of a return value for us

calculateTax(10000)//js doesn't care about how many arguments passed in the paramater but ts strict about it
//but we can make the parameter optional adding question mark