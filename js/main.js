/**
 * Created by User on 27-Aug-17.
 */
$(document).ready(function () {

    var currentPlayer = "X";

    var fields =
        {
            "x0" : null,
            "y0" : null,
            "z0" : null,
            "x1" : null,
            "y1" : null,
            "z1" : null,
            "x2" : null,
            "y2" : null,
            "z2" : null
        };


    $(".field").click(function () {

        //get current field

        //what is this field?
        var currentField = this.id;
        console.log(currentField);

        //is current field empty
        if(fields[currentField] == null){
            $(this).addClass(currentField)
            fields[currentField] = currentPlayer;

            $(this).text(currentPlayer);

        }else{
            alert("This field is already filled!");
            return;
        }

        console.log(fields);




        togglePlayer();
        $(".currentPlayer").text(currentPlayer);
    });

    function togglePlayer() {
        currentPlayer = currentPlayer == "X" ? "O" : "X";
    }
    

});