// hide text body at begining of load page
$(document).ready(function () {
    function hideTextBox() {
        $("#textBox").hide();
    }
    hideTextBox()
    // hide text box when start button is clicked
    $("#startBtn").on("click", function () {
        // show text body
        $("#textBox").show();
        // hide start page
        $("#start").hide();

        // ==========Timer===========
        // variable for timer in seconds
        var time = 30;
        // variable as place holder for interval function
        var interval;

        // variable for amount correct
        var amountCorrect;

        // create run function to set interval
        function run() {
            //interval runs a 1/100 sec interval using decrease function
            interval = setInterval(decrease, 1000);
        }

        // create decrease function
        function decrease() {
            //counts down the time
            time--;
            // show count down in display
            $("#display").html("<h1>" + time + " seconds</h1>");

            if (time === 0) {
                stop();
                // show current score when time expires
                var amountCorrect = 0;
                for (var i = 1; i <= 10; i++) {
                    var radios = document.getElementsByName('group' + i);
                    for (var j = 0; j < radios.length; j++) {
                        var radio = radios[j];
                        if (radio.value == "correct" && radio.checked) {
                            amountCorrect++;
                        }
                    }
                }
                $("#textBox").html("<h3>Times Up! <br> Correct Responses: " + amountCorrect + "</h3>");
            }
            // stop timer when submit btn is clicked
            $("#submitBtn").on("click", function () {
                //stop timer
                stop();  
            })
        }

        // create stop function
        function stop() {
            // clear intervals
            clearInterval(interval);
        }

        // call out run function
        run();


    })



});



// create object for the questions and answers

var questions = [{
    q: 'He was called "The King of Pop"',
    choices: ["Michael Jackson", "Prince", "Justin Bieber", "Justin Timberlake"],
    answer: "Michael Jackson"
},
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



$(document).ready(function () {
    // when the user clicks submit
$("#submitBtn").on("click", function () {
    //stop timer
    stop();
    //variable for correct answers
    var amountCorrect = 0;
    // every question in the quiz      
    for (var i = 1; i <= 10; i++) {
        // create variable for radio group#
        var radios = document.getElementsByName('group' + i);
        // every radio within the quiz
        for (var j = 0; j < radios.length; j++) {
            // create variable for each radio within the question
            var radio = radios[j];
            // check radio if correct and is checked by user
            if (radio.value == "correct" && radio.checked) {
                // add 1 for any correct checked answer
                amountCorrect++;
            }
        }
    }
    $("#textBox").html("<h3>Correct Responses: " + amountCorrect + "</h3>");
})
});




    // create function that checks answer matches correct question







// take total correct divided by the total 10
// display message with percentage correct
// if user recieves 100% alert 
