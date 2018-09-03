$(document).ready( () =>
{    
    $.getJSON('/apiV')
    .then( (votes) => {
    
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


