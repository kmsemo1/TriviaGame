// hide text body
$("#textBox").hide();
// click on start button
// hide start page
// show text body

// create object for the questions and answers

var questions = [{
    q: 'He was called "The King of Pop"', 
    choices: ["Michael Jackson", "Prince", "Justin Bieber", "Justin Timberlake"],
    answer: "Michael Jackson"},
    {
        q: 'Chris Hemsworth plays this superhero',
choices: ["Batman", "Captain America", "Thor", "Iron Man"],
answer: "Thor"
},
{
    q: 'This movie was top at the box office in 2015',
    choices: ["Mad Max: Fury Road", "The Revenant", "Star Wars Ep. VII: The Force Awakens", "Jurassic World"],
    answer: "Star Wars Ep. VII: The Force Awakens"
},
{
    q: 'This remake of a 1984 movie stars a female cast including Melissa McCarthy and Kristen Wiig',
    choices: ["The Fog", "Ghostbusters", "Prom Night", "It"],
    answer: "Ghostbusters"
},
{
    q: 'They won the 2016 Superbowl',
    choices: ["New England Patriots", "Pittsburgh Steelers", "Baltimore Ravens", "Denver Broncos"],
    answer: "Denver Broncos"
},
{
    q: 'This artist is responsible for the hit "One Dance"',
    choices: ["Drake", "Rhianna", "Calvin Harris", "One Direction"],
    answer: "Drake"
},
{
    q: "This TV series featuring the Tanner Family which was originally created in the 1980's made its way back to TV this past year with a new name",
    choices: ["Fresh Prince of Bel Air", "Family Matters", "Step By Step", "Full House"],
    answer: "Full House"
},
{
    q: "He is Batman's sidekick",
    choices: ["Alfred", "The Joker", "Catwoman", "Robin"],
    answer: "Robin"
},
{
    q: "This hit HBO show was based on the books written by George R.R. Martin",
    choices: ["The Wire", "The Sopranos", "Game of Thrones", "Oz"],
    answer: "Game of Thrones"
},
{
    q: "The New York Yankees beat this team to win the 1998 World Series",
    choices: ["San Diego Padres", "Atlanta Braves", "Oakland Athletics", "Cleveland Indians"],
    answer: "San Diego Padres"
}];


$(document).ready(function() {
// when the user clicks submit
$("#btn").on("click", function () {
    //variable for correct answers
  var amountCorrect = 0;          
  for(var i = 1; i <= 10; i++) {
    var radios = document.getElementsByName('group'+i);
    for(var j = 0; j < radios.length; j++) {
      var radio = radios[j];
      if(radio.value == "correct" && radio.checked) {
        amountCorrect++;
      }
    }
   }                   
      $("#textBox").html("<h3>Correct Responses: " + amountCorrect +"</h3>");
    })
});


    // keep track of amount correct

    // create function that checks answer matches correct question
  

     
    



// take total correct divided by the total 10
// display message with percentage correct
// if user recieves 100% alert 
