const express = require('express');
const app = express();

app.get('/calculadora', (req, res)=>
{
    const operacao = req.query.operacao;
    console.log(operacao)
    const n1 = 
    parseFloat(req.query.n1);
    const n2 =
    parseFloat(req.query.n2);    
    res.send("Oi")
    
    if (operacao === Number.isNaN(n1) === Number.isNaN(n2))) {
       return res.status(400).send(Bad request: parametro invalido)  
    }

 let resultado;
         case 'soma':
            resultado = n1 + n2;
            break;
         case 'subtracao':
             resultado = n1 - n2;
             break;
         case 'multiplicacao':
            resultado = n1 * n2;
            break;
        case 'divisao':
        if (n2===0){
         return res.status(400).send('Bad request: divisão por zero.')
   }
  resultado n1 / n2;
   break;
   default:
    return res.status(400).send('Bad request: operacao invalida.');
 }
 res.send(Resultado: $
    {resultado});
 
    const PORT = 3000;
    app.listen(PORT,()=> {
            console.log(rodando na porta ${PORT});
    }






app.listen(3000, () => {
    console.log("Rodando!!!")
})

    