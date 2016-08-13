jQuery(document).ready(function() {
  //questions,choices and answers all contained in an array
  var ironThrone = [

    {
      question: 'What does "Valar Morghulis" mean?',
      choices: ['Fire and Blood', 'Winter is coming', 'Anyone may die', 'All men must die', ],
      correctAnswer: 4
    },

    {
      question: 'Who killed Rhaegar Targaryen?',
      choices: ['Ned Stark', 'Jamie Lannister', 'Robert Bartheon', 'Khal Drogo'],
      correctAnswer: 3
    },

    {
      question: 'Which of the seven kingdoms has never been conquered?',
      choices: ['The Reach', 'Dorne', 'Essos', 'The North', 'Westeros'],
      correctAnswer: 3
    },

    {
      question: "Who confides to Littlefinger that she doesn't want to be a queen, she wants to be THE queen?",
      choices: ['Sansa Stark', 'Cersi Lannister', 'Margaery Tyrell', 'Catelyn Stark', ],
      correctAnswer: 3
    },

    {
      question: "Which of the following members of the Small Council was secretly giving information to Queen Cersei?",
      choices: ['Grand Maester Pycelle', 'Varys', 'Jamie Lannister', 'Maester Aemon', ],
      correctAnswer: 1
    },

    {
      question: "How many Targaryens were alive at the start of Game of Thrones?",
      choices: ['1', '2', '3', '4', ],
      correctAnswer: 3
    },

    {
      question: "What was the name of Catelyn Stark's father?",
      choices: ['Lord Hoster', 'Lord Tywin', 'Lord Arryn', 'Lord Craster', ],
      correctAnswer: 1
    },

    {
      question: "What was the name of Arya's direwolf?",
      choices: ['Ghost', 'Lady', 'Summer', 'Nymeria', ],
      correctAnswer: 4
    },

    {
      question: 'Who said, "A very small man can cast a very large shadow"?',
      choices: ['Tyrion Lannister', 'Lord Varys', 'Petyr Baelish', 'Jamie Lannister', ],
      correctAnswer: 2
    },

    {
      question: 'Who said “When you play a game of thrones you win or you die.”?',
      choices: ['Tyrion Lannister', 'Ned Stark', 'Petyr Baelish', 'Cersi Lannister', ],
      correctAnswer: 4
    },

    {
      question: 'Who said “When you play a game of thrones you win or you die.”?',
      choices: ['Whoops!', 'Something', 'Went', 'Wrong!', ],
      correctAnswer: 4
    },

  ];



  var userScore = 0;
  var count = 0;
  var amountOfQuestions = ironThrone.length;
  var playerAnswers = [];
  var userAnswer;
  var myjson;
  var arr;
  var url = "https://api.myjson.com/bins/2f9pl";
  var loggedIn;
  var userNameLocal = undefined;
  var difference = 1;


function backgroundChangeImage(){

switch(count){
	case 1:
  $("body").css('background-image','url(http://i2.cdn.turner.com/cnnnext/dam/assets/150413134252-game-of-thrones-6-super-169.jpg)');
	break;

  case 2:
  $("body").css('background-image','url(http://i.imgur.com/CWG9cBx.jpg)');
  break;

  case 3:
  $("body").css('background-image','url(http://letsgetweddy.com/wp-content/uploads/2015/04/19.jpg)');
  break;

  case 4:
  $("body").css('background-image','url(http://i.imgur.com/CWG9cBx.jpg)');
  break;

  case 5:
  $("body").css('background-image','url(http://i.imgur.com/CWG9cBx.jpg)');
  break;

  case 6:
  $("body").css('background-image','url(http://i.imgur.com/CWG9cBx.jpg)');
  break;

  case 7:
  $("body").css('background-image','url(http://i.imgur.com/CWG9cBx.jpg)');
  break;

  case 8:
  $("body").css('background-image','url(http://i.imgur.com/CWG9cBx.jpg)');
  break;

  case 9:
  $("body").css('background-image','url(http://i.imgur.com/CWG9cBx.jpg)');
  break;

  }

}

function getCookie(){
reg = /name=/i;
if(document.cookie.match(reg)){
var userNameLocalPlaceHolder = document.cookie.replace(reg, " ");
userNameLocal = userNameLocalPlaceHolder.split(";")[0];
$("#yourName").show().text("Welcome Back, " + userNameLocal + "!");
loggedIn = true;

}

}

//loads JSON file
$.getJSON( url, function( json ) {
myjson = json;
arr = $.map(myjson, function(x) { return x });
});



//removes unnecessary values from JSON question string
function questionEditor(){
  this.almost = JSON.stringify(arr[count]);
  reg = /question|:|{|}|"/ig;
  this.almost2 = this.almost.replace(reg,"");
}

function userChoiceDisplayed() {
    if (typeof playerAnswers[count] != "undefined") {
      switch (playerAnswers[count]) {
        case '1':
          $("#firstChoice").prop("checked", true);
          break;

        case '2':
          $("#secondChoice").prop("checked", true);
          break;

        case '3':
          $("#thirdChoice").prop("checked", true);
          break;

        case '4':
          $("#fourthChoice").prop("checked", true);
          break;
      }
       $
       $("#warning").text("Submitted!");
      $("#warning").show();
    }
}

function logger (){
  $('#begin').hide();
  getCookie();
  if (typeof userNameLocal == 'undefined') {
  loggedIn = false;
  $('#yourName').show();
  $("#login").show();
  $("#lower").show();
  $("#back").add("#next").hide()

      }
  else if (typeof userNameLocal != 'undefined') {
  loggedIn = true;
  if(userNameLocal != 'undefined' && count == 0 ){
    $("#login").hide();
    questionChange();
    $("#lower").show();
    $("#next").show();
    $("#back").show();
    $("#notMe").show();
      //alert(loggedIn);
    }

	}


}

function loginScreen() {
    $('#begin').hide();
    $("#yourName").show();
    $("#lower").show();
    $("#login").show();
    if(userNameLocal){
		logger();
 		}
 }


//changes questions
  function questionChange() {

    if (count >= 0) {
    	questionEditor();
      $('#question').text(this.almost2);
      $("#warning").hide();
      $("#first").text(ironThrone[count].choices[0]);
      $("#second").text(ironThrone[count].choices[1]);
      $("#third").text(ironThrone[count].choices[2]);
      $("#fourth").text(ironThrone[count].choices[3]);
      $(".radio").show();
      $('input[name="answer"]').prop('checked', false);
      userChoiceDisplayed();
      if(count > 0){
      $("#notMe").hide();

      }

    }

  }


//shows user their score at end of game
  function scoreScreen() {
    if (count + difference >= ironThrone.length) {
      $("#question").hide();
      $("h1").css("font-size", "100px");
      $("body").css('background-image','url(https://wallpaperscraft.com/image/game_of_thrones_series_throne_power_sword_2017_1920x1080.jpg)');
      for (i = 0; i < ironThrone.length; i++) {
        if (ironThrone[i].correctAnswer == playerAnswers[i]) {
          userScore += 1;
        }
        return;
      }

      $("label").hide();
      $("input:radio").hide();
      $("#lower").hide();
      $(".radio").hide();
      $("#warning").hide();
      $("h1").text("Your Score:");
      $("#scoreNumber").text(userScore);
      $("#scoreNumber").hide();
      $("#scoreNumber").fadeIn(2000);
      $("#retry").show();
      return;
    }
  }



  $('#begin').on('click', function() {

    logger();



  });


//Allows user to move to next question after current is answered
  $('#next').on('click', function() {
    $("#warning").hide();
    if (typeof playerAnswers[count] != 'undefined') {
      count++
      questionChange();
    } else if (typeof playerAnswers[count] == 'undefined') {
      $('#warning').show();
      $("#warning").text("Please Submit Answer Before Moving Onto Next Question!");
      $("#warning").fadeOut(7000);
    }

  });
//allows user to move backwwards once first question is answered
  $("#back").on('click', function() {
    if (count > 0) {
    $('#warning').show();
      count--
      questionChange();
    }

  });
//adds user's answer to array
  $('#submit').on('click', function() {
  playerAnswers[count] = $('.radio input:radio:checked').val();
  if (typeof playerAnswers[count] != 'undefined' && loggedIn == true) {
  $("#warning").text("Submitted!");
  count++
  scoreScreen();
  console.log(count + " vs " + ironThrone.length);
  //backgroundChangeImage();
  questionChange();
  userChoiceDisplayed();



      }
  else if (typeof playerAnswers[count] == 'undefined' && loggedIn == true) {
  $("#warning").text("Please Submit Answer Before Moving Onto Next Question!");
  $('#warning').show();
  $("#warning").fadeOut(7000);
    }
  else if (typeof playerAnswers[count] == 'undefined' && loggedIn == false) {
   userNameLocal = $("#enterName").val();
   document.cookie ="name="+userNameLocal.toString();
   $("#login").hide();
   $("#yourName").text(userNameLocal);
   $("#yourName").add("#notMe").show()
   logger();
   $("#question").show();

    }
  $(".radio").show();
  $("#yourName").show().text("Logged in as " + userNameLocal);
  });

//presents button that restarts quiz
$("#retry").on('click',function(){
  count = 0;
  userScore = 0;
  playerAnswers = [];
  $("h1").removeAttr('style');
  $("#scoreNumber").hide();
  $("#myForm").trigger('reset');
  $("label").show();
  $("#lower").show();
  $("input:radio").show();
  questionChange();
  $("#retry").hide();
});

  $("#notMe").on('click', function(){
	document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  userNameLocal = undefined;
  loggedIn = false;
  logger();
  $("#notMe").add(".radio").add("#yourName").hide();
  });


});
