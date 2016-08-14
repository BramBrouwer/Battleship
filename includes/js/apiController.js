var baseurl = "https://zeeslagavans.herokuapp.com/";
var accesstoken = "?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.ImIuYnJvdXdlckBzdHVkZW50LmF2YW5zLm5sIg.Je0wnMvxSEHa1v_NJCGjivIBJ4OrOujaWKcHjsStSa8"
/*
TODO:
- Add models/prototypes
- After setting up models, setup the 2 POST calls

WORKING: (without models)
-getuserinfo
-getusergames
-deleteusergames
-getnewgame
-getaigame
-getgamebyid
-getships
*/

$(document).ready(function () {
});


//// USER

/*
Via deze route kun je de informatie van de user ophalen: 
*/
function getUserInfo() {
    $.ajax({
        url: baseurl + "users/me/info" + accesstoken,
        success: function (result) {
            console.log(result);
        }, error: function (error) {
            console.log(error.responseText);
        }
    });
}

//// END USER


////GAMES

/*
Via deze route krijg je een collectie van games waarin jij mee speelt. Elke game heeft de volgende eigenschappen:
    Unique ID van de game
    Status van de game
    Unique ID van de tegenstander
    De naam van de tegenstander
    Eventueel het ID van de winnaar
*/
function getUserGames() {
    $.ajax({
        url: baseurl + "users/me/games" + accesstoken,
        success: function (result) {
            console.log(result);
        }, error: function (error) {
            console.log(error.responseText);
        }
    });
}

/*
Via deze route is het mogelijk alle games waar je deel aan neemt te verwijderen. De request hoeft verder geen body te hebben. 
*/
function deleteUserGames() {
    $.ajax({
        url: baseurl + "users/me/games" + accesstoken,
        type: 'DELETE',
        success: function (result) {
            console.log(result);
        }, error: function (error) {
            console.log(error.responseText);
        }
    });
}

/*
Via deze route kun je een nieuwe game opvragen met als tegenstander een andere student.
Als er al een game op de server staat met maar 1 speler, dan zul je deze game joinen, en zal de status naar de game veranderen naar setup. 
Als er geen game meer open staat, zal de server een nieuwe game voor je aanmaken en krijgt deze de status queue.
Indien je al een game tegen een andere student hebt aangevraagd, zal de server een error terug geven
*/
function getNewGame() {
    $.ajax({
        url: baseurl + "games" + accesstoken,
        success: function (result) {
            console.log(result);
        }, error: function (error) {
            console.log(error.responseText);
        }
    });
}

/*
Via deze route kun je een nieuwe game opvragen met als tegenstander een computer.
De game zal na het aanvragen meteen de status 'setup' krijgen. 
*/
function getAiGame() {
    $.ajax({
        url: baseurl + "games/AI" + accesstoken,
        success: function (result) {
            console.log(result);
        }, error: function (error) {
            console.log(error.responseText);
        }
    });
}

/*
Elke gebruiker heeft een collectie van games. Voor elke game kun je alle informatie opvragen doormiddel van het Id. 
Het is alleen mogelijk gegevens op te halen van een game waar je zelf aan deel neemt.
*/
function getGameByID(input) {
 
    var id = input;
    $.ajax({
        url: baseurl + "games/" + id + accesstoken,
        success: function (result) {
            console.log(result);
        }, error: function (error) {
            console.log(error.responseText);
        }
    });
}

////END GAMES

//// SHIPS

/*
Haal een lijst op van schepen die je op een gameboard kan plaatsen. 
De lijst bevat 5 schepen (2, 3 , 3, 4, 5) waarmee je je gameboard kunt vullen.
 Na het vullen van het gameboard kun je dit 'posten' naar de server. 
*/
function getShips() {
    $.ajax({
        url: baseurl + "ships" + accesstoken,
        success: function (result) {
            console.log(result);
        }, error: function (error) {
            console.log(error.responseText);
        }
    });
}

/// END SHIPS


//// POST

/*
 in de fase 'setup' moet je een gameboard naar de server posten. Indien je de eerste speler bent die een gameboard post, zal de fase van de game in 'setup' blijven. 
 Indien beide spelers een gameboard hebben gepost, zal de status van de game veranderen naar 'started'. (Als je tegen een AI speelt veranderd de status altijd meteen naar started).
*/
function postGameboard(inputID, inputBoard) {
    var id = 7;
    //var id = inputID;
    $.ajax({
        url: baseurl + "games/" + id + "/gameboards" + accesstoken,
        type: 'POST',
        data: {
            json: {

                //todo add json object containing bord to add here

            }
        },
        dataType: 'json'
    });

}

/*
Indien een game de status 'started' heeft, is het mogelijk om echt te gaan spelen. Elke speler kan omstebeurt een schot toevoegen aan het gameboard van de tegenstander. 
Dit doet hij door op de route /games/:gameId/shots een schot te posten. 
De server zal de schoten bijhouden op het gameboard van de betrokken partij. 
Een schot op je enemey, voegt een schot toe aan het gameboard van je de enemy. 
*/
function postShot(inputID, inputShot) {
    var id = 7;
    //var id = inputID;
    $.ajax({
        url: baseurl + "games/" + id + "/shots" + accesstoken,
        type: 'POST',
        data: {
            json: {

                //todo add json object containing shot to add here

            }
        },
        dataType: 'json'
    });

}


//// END POST