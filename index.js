let random_number = Math.floor(Math.random() * 100) + 1; //random 100
let guess = 5; //5 tahmin
let correct_answer;
let lower = 1;
let upper = 100;
let loseUrl = "./images/Lose.png"
let wonUrl = "./images/Won.png"

$("#retry").click(function() {
  location.reload();
});

$(document).ready(function() {
  $("#change").click(function() {
    $("#correct_answer").focus();
    correct_answer = $("#correct_answer").val();
    if (correct_answer == random_number) {
      $("h1").html(`CONGRATS, YOUR GUESS WAS RIGHT!!!`)
      $(".guess_image").css("background-image", "url(" + wonUrl + ")");
      $("#text_change").html(`<span id="number"> YOU WON THE GAME!</span>`);
      $("#change, h3, input").hide();
      $("p").html("ㅤ");
    }

    else if (correct_answer > 100 || correct_answer < 1){
      $("p").html(`Huh... What? Just write a number between ${lower}-${upper}.`)
    }

    //! 5

    else if (guess == 5 && random_number !== correct_answer && correct_answer > random_number) {
      upper = correct_answer;
      $("p").html(`Hint: Guess Lower! It's Between ${lower}-${upper}.`);
      $("#text_change").html(`Guesses Left: <span id="number">4</span>`);
      guess--;
    }

    else if (guess == 5 && random_number !== correct_answer && correct_answer < random_number) {
      lower = correct_answer;
      $("p").html(`Hint: Guess Higher! It's Between ${lower}-${upper}.`);
      $("#text_change").html(`Guesses Left: <span id="number">4</span>`);
      guess--;
    }

    //! 4

    else if(guess == 4 && random_number !== correct_answer && correct_answer > random_number) {
      upper = correct_answer;
      $("#text_change").html(`Guesses Left: <span id="number">3</span>`);
      guess--;
      $("p").html(`Hint: Guess Lower! It's Between ${lower}-${upper}.`);
    }

    else if(guess == 4 && random_number !== correct_answer && correct_answer < random_number) {
      lower = correct_answer;
      $("#text_change").html(`Guesses Left: <span id="number">3</span>`);
      guess--;
      $("p").html(`Hint: Guess Higher! It's Between ${lower}-${upper}.`);
    }

    //! 3

    else if(guess == 3 && random_number !== correct_answer && correct_answer > random_number) {
      upper = correct_answer;
      $("#text_change").html(`Guesses Left: <span id="number">2</span>`);
      guess--;
      $("p").html(`Hint: Guess Lower! It's Between ${lower}-${upper}.`);
    }

    else if(guess == 3 && random_number !== correct_answer && correct_answer < random_number) {
      lower = correct_answer;
      $("#text_change").html(`Guesses Left: <span id="number">2</span>`);
      guess--;
      $("p").html(`Hint: Guess Higher! It's Between ${lower}-${upper}.`);
    }

    //! 2

    else if(guess == 2 && random_number !== correct_answer && correct_answer > random_number) {
      upper = correct_answer;
      $("#text_change").html(`Guesses Left: <span id="number">1</span>`);
      guess--;
      $("p").html(`Hint: Guess Lower! It's Between ${lower}-${upper}.`);
    }

    else if(guess == 2 && random_number !== correct_answer && correct_answer < random_number) {
      lower = correct_answer;
      $("#text_change").html(`Guesses Left: <span id="number">1</span>`);
      guess--;
      $("p").html(`Hint: Guess Higher! It's Between ${lower}-${upper}.`);
    }

    //! 1

    else if(guess == 1 && random_number !== correct_answer) {
      $(".guess_image").css("background-image", "url(" + loseUrl + ")");
      $("#text_change").html(`<span id="number"> YOU LOSE!</span>`);
      $("#change, h3, input").hide();
      $("p").html("ㅤ")
      $("h1").html(`BETTER LUCK NEXT TIME!`)
      guess--;
    }
  });
});

