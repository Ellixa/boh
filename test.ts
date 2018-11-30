import { zip } from "rxjs";

let nome = 'pippo';

let cognome = 'xxx';

let age: number = 18;
age= 18;

let hasPowers: boolean= true;

let children: string[]= ['ciao', 'ss','das'];

let Person: {nome: string, age: number}
Person= {nome: "Pippo", age:30};

function go(direction: string='left', distance: number=100) {
//se a direction non metto string vuol dire any//    
//il valore di default è a sinistra//
console.log(direction,distance);
}
go();
go('right');
go('left', 50);

function drive(param:any){//gli passiamo un parametro

}
//let params= {distance:100}
//drive{params}//

function add(x:number,y:number){
    return x+y;
}
add(10,50)

const p=add(10,50)+100;
const add2= function(x){

};

//const multiply= (x) => x*2; //quello che viene dopo la freccia ritorna 
//è meglio farle con le graffe 
const multiply=(x) => {
return x*2;
};
const multiply2 = function(x){
    return x*2;
};








