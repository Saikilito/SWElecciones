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
              
        }
      
    )
    
    
    $.getJSON('/api')
    .then(function  (votes) {
    
        const voteT = votes[0]+votes[1]+votes[2]+votes[3] ;
        var xV = [] ;
        for(let i=0; i<votes.length; i++)
            xV.push( (votes[i] * 100) / voteT  );

        $("#barP0").css('width', xV[0] +'%'  );
        $("#barP1").css('width', ((votes[1] * 100) / voteT) +'%' );
        $("#barP2").css('width', ((votes[2] * 100) / voteT) +'%' );
        $("#barP3").css('width', ((votes[3] * 100) / voteT) +'%' );

        $("#stad0").append((xV[0]).toFixed(2)+'%');
        $("#stad1").append((xV[1]).toFixed(2)+'%');
        $("#stad2").append((xV[2]).toFixed(2)+'%');
        $("#stad3").append((xV[3]).toFixed(2)+'%');
      
    });
});


const cconfirm =  () => {
    alert("Su voto sera enviado");
}


