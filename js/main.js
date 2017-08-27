/**
 * Created by User on 27-Aug-17.
 */
$(document).ready(function () {

    var currentPlayer = "X";
    var isGameLive = true;
    var betterPlayer = "";

    var fields =
        {
            "x0": null,
            "y0": null,
            "z0": null,
            "x1": null,
            "y1": null,
            "z1": null,
            "x2": null,
            "y2": null,
            "z2": null
        };

    var combinations = [
        //vertikalno
        ["x0", "x1", "x2"],
        ["y0", "y1", "y2"],
        ["z0", "z1", "z2"],

        //horizontalno
        ["x0", "y0", "z0"],
        ["x1", "y1", "z1"],
        ["x2", "y2", "z2"],

        //unakrsno
        ["x0", "y1", "z2"],
        ["x2", "y1", "z0"]
    ];

    console.log(combinations);

    $(".field").click(function () {

        if( isGameLive == false ){
            $(".currentPlayer").text("Game is finished, winner is " + betterPlayer);
            return;
        }

        //what is this field?
        var currentField = this.id;

        //is current field empty
        if (fields[currentField] == null) {
            $(this).addClass(currentField)
            fields[currentField] = currentPlayer;

            //write text into field
            $(this).text(currentPlayer);

        } else {
            alert("This field is already filled!");
            return;
        }

        checkForWinner();

        togglePlayer();
        $(".currentPlayer").text(currentPlayer);
    });

    function togglePlayer() {
        currentPlayer = currentPlayer == "X" ? "O" : "X";
    }

    function checkForWinner() {
        for (var i = 0; i < combinations.length; i++) {
            //get fields to check
            field1 = combinations[i][0];
            field2 = combinations[i][1];
            field3 = combinations[i][2];

            //provjeri da li su polja prazna
            if (fields[field1] != null &&
                fields[field2] != null &&
                fields[field3] != null &&
                fields[field1] == fields[field2] &&
                fields[field2] == fields[field3]
            ) {
                isGameLive = false;
                betterPlayer = currentPlayer;

                //current player is winner
                console.log("Imamo pobjednika");
                alert(betterPlayer + " is WINNER!");
                console.log("Winner combination is : " + combinations[i]);
            }
        }

    }

});