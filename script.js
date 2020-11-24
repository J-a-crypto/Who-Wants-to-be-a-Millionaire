let moneyOptions;
let moneyCount = 10;
let question = ["Which of these U.S Presidents appeared on the television series 'Laugh-In'?", "The Earth is approximately how many miles away from the Sun?", "Who is Luke Skywaker's father?", "Where was Swiss Chesse made from?", "Which of these actors have NOT played Spider-Man?"];
let answerA = ["A.Lyndon Johnson", "A.9.3 million", "A.Darth Vader", "A.Italy", "A.Spider Parker"];
let answerB = ["B.Richard Nixon", "B.39 million", "B.Baby Yoda", "B.Rome", "B.Tom Holland"];
let answerC = ["C.Jimmy Carter", "C.93 million", "C.Han Solo", "C.Switzerland", "C.Andrew Garfield"];
let answerD = ["D.Gerald Ford", "D.193 million", "D.Jabba the Hutt", "D.Sweden", "D.Tobey Maguire "];
let correctAnswers = ["B.Richard Nixon", "C.93 million", "A.Darth Vader", "C.Switzerland", "A.Spider Parker"];
let name;



$("button").click(function() {
    name = $(".name").val();
    $(".startImage").css("width", "20%");
    addQuestion(1, 0);

    $(".inputDiv").hide();
    $(".main").show();
    $("input").val();
    $("h2").text(`Well ${name} here are your question!!`);
});


function addQuestion(count, index) {
    if (moneyCount === count) {
        $(".question").text(question[index]);
        $(".a").text(answerA[index]);
        $(".b").text(answerB[index]);
        $(".c").text(answerC[index]);
        $(".d").text(answerD[index]);
    }
}

$(".answer").click(function() {
    let selectedAnswer = event.target.innerText;

    if (correctAnswers.includes(selectedAnswer)) {
        moneyCount = moneyCount * 10;
        $(".money").text(moneyCount);

    } else if (selectedAnswer !== correctAnswers) {
        $(".main").hide();
        
        $("h2").hide();
        $(".loss").show();
        alert("You have just lost in this game and life.");
    }

    addQuestion(100, 1);
    addQuestion(1000, 2);
    addQuestion(10000, 3);
    addQuestion(100000, 4);
    addQuestion(1000000, 5);
    if (moneyCount === 1000000) {
        $(".ending").show();
        $(".main").hide();
        $("h2").text("Congratulations! You have just won a million dollars!");
    }


});