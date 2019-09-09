$(document).ready(function() {
  var countdown;
  var mainArea = $(".main-area");
  var initialSecs = 60; //300=5 minutes
  var number = initialSecs;

  window.onload = runClock();

  function runClock() {
    number = initialSecs;
    countdown = setInterval(decrease, 1000);
  }

  function decrease() {
    number--;
    var converted = timeConverter(number);
    // console.log(converted);
    $("#timer").html("<h3>" + converted + "</h3>");

    if (number === 0) {
      clearInterval(countdown);
      // timeIsUp();
      //   console.log("call answer page");
      showAnswers();
    }
  }

  //   create Submit button that calls answerPage
  var submitBtn = $("<button>");
  submitBtn.text("Check my answers");
  $("#check-answers").append(submitBtn);

  $("#check-answers").click(showAnswers);

  function showAnswers() {
    var correctAnswers = [
      questions[0].A[4],
      questions[1].A[0],
      questions[2].A[1],
      questions[3].A[0],
      questions[4].A[2]
    ];
    //$("div").addClass("correct-answers");
    $("span").each(function() {
      console.log(this.innerText);
      for (let i = 0; i < correctAnswers.length; i++) {
        if (this.innerText === correctAnswers[i].toString()) {
          $(this).addClass("correct-answers");
        }
      }
    });
  }

  //When 'Try Again' button clicked:
  // make 'Try Again' button
  var tryAgain = $("<button>");
  tryAgain.text("Try Again");
  $("#try-again").append(tryAgain);

  $("#try-again").click(reset);

  function reset() {
    $('input[type="radio"]').prop("checked", false);
    //   $(".radio").each(function() {
    //     //clear radio buttons
    //     $(this).removeAttr("checkedv");
    //   });
    //TODO: clear right or wrong icons;
    clearInterval(countdown);
    $("span").each(function() {
      $(this).removeClass("correct-answers");
    });
    runClock();
  }

  var questions = [
    {
      Q: "Which is not one of the ten principles of BM?",
      A: [
        "Radical Inclusion",
        "Leave No Trace",
        "Participation",
        "Civic Responsibility",
        "Economics"
      ]
    },
    {
      Q: "What year did the man first burn?",
      A: [1986, 1972, 1999, 2001, 1989]
    },
    {
      Q: "What is Burning Man?",
      A: [
        "A festival",
        "A temporary city that promotes community",
        "A guy with a burning sensation 'down there.'"
      ]
    },
    {
      Q: "Where is Burning Man held?",
      A: ["Black Rock City, NV", "Montreal, BC", "Gobi Desert", "Sahara Desert"]
    },
    {
      Q: "What is the median age of attendants in 2018?",
      A: [11, 24, 35, 19, 43]
    }
  ];

  for (let i = 0; i < questions.length; i++) {
    // mainArea.append(`<h3>${questions[i].Q}</h3>`);

    var qOne = $("<div>");
    qOne.html(`<h4>${questions[i].Q}</h4>`);
    // console.log(questions[0].Q)
    $(".main-area").append(qOne);

    for (let j = 0; j < questions[i].A.length; j++) {
      //   qOne.append(questions[i].A[j]);

      var radio = $(
        `<div><input type="radio" name="question${i}"><span>${questions[i].A[j]}</span></div>`
      );

      //   radio.attr("type", "radio");
      //   radio.attr("role", "group");
      // var radioText=$("radio").attr("name");
      // $(questions[i].A[j]).insertAfter(radio);
      //   radio.html(questions[i].A[j]);
      $(".main-area").append(radio);
      // $(".mainArea").append(questions[j].A);
      // $(".mainArea").append(`<h3>${questions[j].Q}</h3>`);
      // $(".possibleAnswers").append(questions[i].A[j])
    }
  }

  //   var sheet = document.createElement('style');
  //   sheet.innerHTML = "div {"

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
    var seconds = t - minutes * 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
});
