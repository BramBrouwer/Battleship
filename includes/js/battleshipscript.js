$(document).ready(function(){

    var boom = document.createElement('audio');
    boom.setAttribute('src', 'http://www.mediacollege.com/downloads/sound-effects/explosion/explosion-02.ogg');
    var splash = document.createElement('audio');
    splash.setAttribute('src', 'http://www.freesfx.co.uk/rx2/mp3s/6/7490_1346159434.mp3');
    generateAlliedBoard();


    
    function FieldCell(x,y,state)
    {
        this.x = x;
        this.y = y;
        this.state = state;
    }
   

    //region Functions
    function generateAlliedBoard() {

        var table = $("table");
        //i dont like warnigs.
        var outer;
        var inner;
        for (outer = 0; outer < 10; outer++) {
            {
                var row = $('<tr>');//table.insertRow();
                for (inner = 0; inner < 10; inner++) {
                    var cell = $('<td>'); // var cell1 = row.insertCell(0);
                    cell.data("field", new FieldCell(inner, outer, "free"));

                    row.append(cell);
                }
                table.append(row);

            }
        }

    }




    function playSound(fieldCell) {
       if(fieldCell.state=="free")
       {
           splash.play();
       }
        else
       {
           boom.play();
       }
    }
    //endregion

    //region Listeners
    $('td').hover(function() {
        var x = $(this).data('field').x;
        var y = $(this).data('field').y;

        $('#info').text("x = "+ x + " y= "+ y);
    });

    //cell is clicked
    $("td").on('click',function()
    {
        //console.log("x = " + $(this).data("field").x + " - y = " + $(this).data("field").y);
        //check what sound to play
        playSound($(this).data("field"));

    });
    //endregion




});