
var quizQuestions = [
    {
      num: 1,
      question: "HTML stand for",
      Option: {
        a: "Hyper text scripting Language",
        b: "Hyper text programming Language",
        c: "Hyper text styling Language",
        d: "Hyper text markup Language",
      },
      answer: "Hyper text markup Language",
    },
    {
      num: 2,
      question: "Where is the CSS file linked?",
      Option: {
        a: "inside the head section",
        b: "inside head and body tag",
        c: "inside between body and html tag",
        d: "inside the body section",
      },
      answer: "inside the head section",
    },
    {
      num: 3,
      question: "how many members of national assembly of pakistan",
      Option: {
        a: "342",
        b: "273",
        c: "320",
        d: "350",
      },
      answer: "342",
    },
    {
      num: 4,
      question: "who is the first present president of pakistan",
      Option: {
        a: "Quaid-e-Azam",
        b: "Liaquat Ali Khan",
        c: "Zai ul Haq",
        d: "Zardari",
      },
      answer: "Liaquat Ali Khan",
    },
    {
      num: 5,
      question: "How many prayers in a day:",
      Option: {
        a: "6",
        b: "5",
        c: "3",
        d: "none",
      },
      answer: "5",
    },
    {
      num: 6,
      question: "How many members are there in Uno in 2020?",
      Option: {
        a: "185 UN Member",
        b: "174 UN Member",
        c: "193 UN Member",
        d: "181 UN Member",
      },
      answer: "193 UN Member",
    },
    {
      num: 7,
      question: "when was pakistan flag made",
      Option: {
        a: "August 14, 1947",
        b: "june 9, 1947",
        c: "july 11, 1947",
        d: "August 11, 1947",
      },
      answer: "August 11, 1947",
    },
  ];
  
  var htmlQuestion = document.getElementById("htmlQuestion");
  var htmlOptionLists = document.getElementsByClassName("htmlOptionList");
  var nextQuesBtn = document.getElementById("nextQuesBtn");
  var counterValue = document.getElementById("counterValue");
  var quizBox = document.getElementById("quizBox");
  var counter = 0;
  var score = 0;
  var resultValue = document.getElementById("resultValue");
  
  function setQuestion() {
    htmlQuestion.innerHTML = quizQuestions[counter].question;
    htmlOptionLists[0].innerHTML = quizQuestions[counter].Option.a;
    htmlOptionLists[1].innerHTML = quizQuestions[counter].Option.b;
    htmlOptionLists[2].innerHTML = quizQuestions[counter].Option.c;
    htmlOptionLists[3].innerHTML = quizQuestions[counter].Option.d;
  }
  
  function nextQes() {
    counter++;
  
    console.log(counter);
    if (counter < quizQuestions.length) {
      setQuestion();
      counterValue.innerHTML = counter + 1 + " / " + quizQuestions.length;
    } else {
      console.log("hello");
      quizBox.style.display = "none";
      resultValue.className = "show";
      resultValue.innerHTML = score;
    }

    nextQuesBtn.className = "hide";
  
    for (var i = 0; i < htmlOptionLists.length; i++) {
      htmlOptionLists[i].classList.remove("disabled");
      htmlOptionLists[i].style.backgroundColor = "lightblue";
    }
  }
  function checkAns(e) {
    nextQuesBtn.className = "show";
    if (e.innerHTML == quizQuestions[counter].answer) {
      score += 10;
      console.log(score);
      e.style.backgroundColor = "blue";
    } else {
      e.style.backgroundColor = "red";
  
      for (var i = 0; i < htmlOptionLists.length; i++) {
        if (htmlOptionLists[i].innerHTML == quizQuestions[counter].answer) {
          htmlOptionLists[i].style.backgroundColor = "blue";
        }
      }
    }
  
    for (var i = 0; i < htmlOptionLists.length; i++) {
      htmlOptionLists[i].className += " disabled";
    }
  }