function greet(name:string | null | undefined){
    if(name){
        console.log(name.toUpperCase());
    }else{
        console.log('hi');
    }
}
greet(null);//it's valid js code but by default the ts compiler stops us using null or undef