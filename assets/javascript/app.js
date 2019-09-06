$(document).ready(function () {

    var number = 3; //300=5 minutes
    var countdown;
    var mainArea = $(".main-area");

    window.onload = run();

    function run() {
        countdown = setInterval(decrease, 1000);
    }

    function decrease() {
        number--;
        var converted = timeConverter(number);
        // console.log(converted);
        $("#timer").html("<h3>" + converted + "</h3>");

        if (number === 0) {
            timeIsUp();
            // console.log("TODO: reveal page");
        }
    }

    function timeIsUp() {
        clearInterval(countdown);
        // number=10;
    }

    var questions = [{
        Q: "Which is not one of the 10 principles of BM?",
        A: ["Radical Inclusion", "Leave No Trace", "Participation", "Civic Responsibility", "Economics"]
    },
    {
        Q: "What year did the man first burn?",
        A: [1986, 1972, 1999, 2001, 1989]
    },
    {
        Q: "Burning Man is a bartering economy.",
        A: ["True", "False", "I don't know"]
    },
    {
        Q: "How was Burning Man?",
        A: ["Haven't been - you can't know until you've been, man.", "A mind-and-soul melding experience", "Like, Coachella...but in the desert", "A choose your own adventure!"]
    },
    {
        Q: "What is a sparkle pony?",
        A: ["A Mattel toy", "A person that spent more time on their appearance than for the harsh environmentdal conditions, and ends up relying on the charity of other burners", "A small breed horse native to the Black Rock desert"]
    }
    ]

    for (let i = 0; i < questions.length; i++) {
        // mainArea.append(`<h3>${questions[i].Q}</h3>`);

        var qOne = $("<div>");
        qOne.html(`<h3>${questions[i].Q}</h3>`);
        // console.log(questions[0].Q)
        $(".main-area").append(qOne);

        for (let j = 0; j < questions[i].A.length; j++) {

            qOne.append(questions[i].A[j]);
            var radio = $("<input>");
            radio.attr("type","radio");
            radio.html(questions[i].A[j]);
            $(".main-area").append(radio);
            // $(".mainArea").append(questions[j].A);
            // $(".mainArea").append(`<h3>${questions[j].Q}</h3>`);
            // $(".possibleAnswers").append(questions[i].A[j])


        }

    }

    //h3 for each question
    //radial button
    //list of answers

    // setTimeout(timeIsUp,10000); //10 seconds 
    // console.log(number);

    // window.onload = function() {
    //     number--;
    //     console.log(number);

    // }



    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
})
