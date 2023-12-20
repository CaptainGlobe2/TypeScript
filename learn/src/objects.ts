let employee:{
    readonly id:number,
    name:string,
    retire:(date:Date) => void//this syntax type annotation little bit messy it makes the code bit verbose or noisy
} = {id:1, 
    name:'',
    retire:(date:Date)=>{
        console.log(date);  
    }
};
// employee.id=1
