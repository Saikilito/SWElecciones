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
              
        }
      
    )

    const voteT = 50;
    let vote = 42 ;
    vote = (vote * 100) / voteT ;

    $("#barP").css('width', vote+'%' );
});

