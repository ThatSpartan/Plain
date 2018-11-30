// there is a 'let questions' which is a list of questions and options

const anim_con = document.getElementById("animation");

function play_animation(g) {
    if (g) {
        anim_con.innerHTML = "Bravo";
    } else {
        anim_con.innerHTML = "Wrong";
    }
}

let i = 0;
let question_element = document.getElementById("question");

question_element.innerHTML = "questions[i].question";
console.log(questions);

function f(sel) {

}

function new_question() {
    // if () {
    //     play_animation(true);
    // } else {
    //     play_animation(false);
    // }

    i++;
    question_element.innerHTML = questions[i].question;
}