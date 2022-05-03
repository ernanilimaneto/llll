$('#inputSub').click(
 function(){
     $.ajax({
         type: 'GET',
         url: 'http://jsonplaceholder.typicode.com/posts',
         success:function(data){
             console.log(data);



         },

         error:function(data){
             console.log('erro')

         }
     })
    })

     
//      login =
//      {

//         'usuario': document.getElementById('inputEmail').value,
//         'senha' : document.getElementById('inputpass').value,

//     }
//     if(login.senha == 1234){
//         document.getElementById('resultado').innerHTML = '<b>Bem Vindo</b>'
        
//     }else{
//         document.getElementById('resultado').innerHTML = '<b>Usuário ou senha errados</b>'
        
//        }
        
//     }
// )