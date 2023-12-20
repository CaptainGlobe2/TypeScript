type Employee1={// type alias //now we have the shape of an this object and we can reuse this like Java in class or like template
    readonly id:number,
    name:string,
    retire:(date:Date) => void//this syntax type annotation little bit messy it makes the code bit verbose or noisy
}


let employee1: Employee1 = {id:1, 
    name:'',
    retire:(date:Date)=>{
        console.log(date);  
    }
};
// employee.id=1
