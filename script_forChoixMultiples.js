// there is a 'let questions' which is a list of questions and options

const anim_con = document.getElementById("animation");

function play_animation(g) {
    if (g) {
        anim_con.innerHTML = "Bravo";
    } else {
        anim_con.innerHTML = "Wrong";
    }
}

let i = 0, choix_element;
let question_element = document.getElementById("question"), choix_container = document.getElementById("choix_container");

function show_options() {
    question_element.innerHTML = questions[i].question;

    while (choix_container.firstChild) {
        choix_container.removeChild(choix_container.firstChild);
    }
    for (let index = 0; index < questions[i].options.length; index++) {
        const option = questions[i].options[index];
        choix_element = document.createElement("p");
        choix_element.addEventListener("click", call_from_button);
        choix_element.innerHTML = option;

        if (index == questions[i].good_option_index) {
            choix_element.id = "goodone";
        }

        choix_container.appendChild(choix_element);
    }
}
show_options();


function call_from_button() {
    if (this.id == "goodone") {
        play_animation(true);
    } else {
        play_animation(false);
    }
    i++;
    show_options();
}
