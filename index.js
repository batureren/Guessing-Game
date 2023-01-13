let random_number = Math.floor(Math.random() * 100) + 1; //random 100
let guess = 5; //5 tahmin
let correct_answer;
var loseUrl = "./images/Lose.png"
var wonUrl = "./images/Won.png"

$(document).ready(function() {
  $("#change").click(function() {
    $("#correct_answer").focus();
    correct_answer = $("#correct_answer").val();
    if (correct_answer == random_number) {
      $("h1").html(`CONGRATS, YOUR GUESS WAS RIGHT!!!`)
      $(".guess_image").css("background-image", "url(" + wonUrl + ")");
      $("#text_change").html(`<span id="number"> YOU WON THE GAME!</span>`);
      $("button, h3, input").hide();
      $("p").html("ㅤ");
    }
    else if (correct_answer > 100 || correct_answer < 1){
      $("p").html("Huh... What? Just write a number between 1-100")
    }

    //! 5

    else if (guess == 5 && random_number !== correct_answer && correct_answer > random_number) {
      $("p").html("Hint: Guess Lower!");
      $("#text_change").html(`Guesses Left: <span id="number">4</span>`);
      guess--;
    }

    else if (guess == 5 && random_number !== correct_answer && correct_answer < random_number) {
      $("p").html("Hint: Guess Higher!");
      $("#text_change").html(`Guesses Left: <span id="number">4</span>`);
      guess--;
    }

    //! 4

    else if(guess == 4 && random_number !== correct_answer && correct_answer > random_number) {
      $("#text_change").html(`Guesses Left: <span id="number">3</span>`);
      guess--;
      $("p").html("Hint: Guess Lower!");
    }

    else if(guess == 4 && random_number !== correct_answer && correct_answer < random_number) {
      $("#text_change").html(`Guesses Left: <span id="number">3</span>`);
      guess--;
      $("p").html("Hint: Guess Higher!");
    }

    //! 3

    else if(guess == 3 && random_number !== correct_answer && correct_answer > random_number) {
      $("#text_change").html(`Guesses Left: <span id="number">2</span>`);
      guess--;
      $("p").html("Hint: Guess Lower!");
    }

    else if(guess == 3 && random_number !== correct_answer && correct_answer < random_number) {
      $("#text_change").html(`Guesses Left: <span id="number">2</span>`);
      guess--;
      $("p").html("Hint: Guess Higher!");
    }

    //! 2

    else if(guess == 2 && random_number !== correct_answer && correct_answer > random_number) {
      $("#text_change").html(`Guesses Left: <span id="number">1</span>`);
      guess--;
      $("p").html("Hint: Last Chance! Guess Lower!");
    }

    else if(guess == 2 && random_number !== correct_answer && correct_answer < random_number) {
      $("#text_change").html(`Guesses Left: <span id="number">1</span>`);
      guess--;
      $("p").html("Hint: Last Chance! Guess Higher!");
    }

    //! 1

    else if(guess == 1 && random_number !== correct_answer) {
      $(".guess_image").css("background-image", "url(" + loseUrl + ")");
      $("#text_change").html(`<span id="number"> YOU LOSE!</span>`);
      $("button, h3, input").hide();
      $("p").html("ㅤ")
      $("h1").html(`BETTER LUCK NEXT TIME!`)
      guess--;
    }
  });
});