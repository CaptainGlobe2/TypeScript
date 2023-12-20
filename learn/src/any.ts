let check;//any
check = 1;
check = 'a'
//but this is against whole idea of using typescript because we use it for typesaftey 
//so if we use any we wssentially lose that feature and major benfit of ts

// function rednder(doc){  
//     console.log(doc)
// }

function rednder(doc: any){
    console.log(doc)
}