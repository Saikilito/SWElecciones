$(document).ready( () =>
{
    const campo1 = $("#itName").val();
    const campo2 = $("#itDNI").val()

    $("#bSend").attr('disabled', false);

    $("#bSend").click( 
        () => {
           const name = $("#itName").val();
           const dni = $("#itDNI").val();

           if(name == "")
           {
               $("#msj1").fadeIn();
               return false;
           }
           else
                $("#msj1").fadeOut();    
            
            if(name.length < 4 )
            {
                $("#msj4").fadeIn();
                     return false;
            }
                else
                     $("#msj4").fadeOut();

           if(dni == "")
           {
               $("#msj2").fadeIn();
                return false;
           }
           else
               $("#msj2").fadeOut();
           
           if(dni.length < 7)
           {
                $("#msj3").fadeIn();
                return false;
           }
           else
               $("#msj3").fadeOut();

           $.getJSON('/apiD')
           .then(function  (dniV) {
        
               let dniI = $("#itDNI").val();
               
               for(let i=0; i<dniV.length; i++)
                   {
                       if(dniV[i] == dniI)
                       {
                           alert("Ud Ya ha votado!");
                           return false;
                       }
                   }
               }
           )
/*
           $.post('/vote', {dni:"churros"}, (data,status)=>{
               console.log('Se envio por pots el dni: '+dni);
               alert("mama!");
           });
  */            
        }
      
    )
});


const cconfirm =  () => {
    alert("Su voto sera enviado");
}


