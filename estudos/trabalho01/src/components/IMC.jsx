import React from 'react';




export default props =>{
   
   function calcularIMC(peso,altura){
      return peso/(altura*altura);
   }

   function situacao(imc){
      if (imc<=19){
         return <h1>Abaixo do perso</h1>
     }
     if (imc>=25){
         return <h1>Acima do peso</h1>
     }else{
         return <h1>Peso normal</h1>
     }
     
   }

   let imc = calcularIMC(props.peso, props.altura)



   return <div>
   <h3>Sua altura é {props.altura}m e seu peso é {props.peso}kg.</h3>
   <h3> seu IMC é {calcularIMC(props.peso, props.altura)}</h3>
   {situacao(imc)}
   </div>
}