let questions = [
    ["Les gestionnaires cultivent et développent intentionnellement les valeurs et les normes organisationnelles qui conviennent le mieux aux environnements concurrentiel et général de leur entreprise, à sa stratégie ou à la technologie qu’elle utilise.", "V"],
    ["Les valeurs et les croyances du fondateur d’une entreprise influent grandement sur les valeurs, les normes et les modèles de comportement des employés qui s’y développent avec le temps.", "V"],
    ["Des symboles visibles tels que le code vestimentaire d’une organisation donnent une idée de sa culture.", "V"],
    ["Un changement organisationnel planifié désigne des transformations planifiées à l’intérieur d’une entreprise en matière de stratégie, de technologie, de ressources humaines ou de structure organisationnelle.", "V"],
    ["Le modèle de gestion du changement de Kurt Lewin compte trois étapes : la décristallisation (ou le dégel) du statu quo, la transition (ou le mouvement) vers un nouvel état et la recristallisation (ou le regel) du changement effectué pour le rendre permanent.", "V"],
    ["Pour gérer le changement dans un milieu syndiqué, il importe de résoudre les problèmes au jour le jour et d’adopter des méthodes de résolution de problèmes non traditionnelles.", "V"],
    ["Les deux dimensions de la culture sont les symboles et les valeurs.", "V"],
    ["Les deux dimensions de la culture sont les valeurs et les normes (règlements, politiques, procédures, etc.).", "F"],
    ["Un changement organisationnel représente l’évolution de l’état présent d’une organisation vers un état souhaité dans le but d’accroître sa performance économique.", "V"],
    ["Fondamentalement, les employés (ou les gens) résistent aux changements parce qu’ils sont anxieux dans la vie et ils préfèrent la routine et la stabilité.", "V"],
    ["On reconnaît le style de leadership personnel d’un gestionnaire à sa façon d’influencer et de menacer les autres et de s’acquitter de ses fonctions de planification, d’organisation, de direction et de contrôle du rendement.", "V"],
    ["La capacité d’un gestionnaire d’accorder ou de refuser des récompenses matérielles ou immatérielles porte le nom de « pouvoir légitime » (selon le statut du leader).", "F"],
    ["Le pouvoir d’expert est fondé sur les connaissances, les habiletés et l’expertise particulières que possède un leader.", "V"],
    ["Le pouvoir de référence est fondé sur les connaissances, les habiletés et l’expertise particulières que possède un leader.", "F"],
    ["Le pouvoir qui découle de l’admiration et de la loyauté que vouent un leader à ses subordonnés est appelé « pouvoir de référence ».", "V"],
    ["Le pouvoir de référence est fondé sur les connaissances, les habiletés et l’expertise particulières que possède les substituts du leader (aussi appelés leaders obscurs).", "F"],
    ["Un gestionnaire qui retient le salaire d’un subordonné en raison du faible rendement au travail de celui-ci utilise un pouvoir légitime.", "V"],
    ["L’autonomisation est un processus qui consiste à accorder à certains membres de la haute direction l’autorité nécessaire pour prendre des décisions.", "F"],
    ["Les membres de la haute direction auxquels on accorde une autonomisation obtiennent le pouvoir de prendre certaines des décisions qui relevaient jusque-là des leaders laxistes, ainsi ils n’ont pas à rendre compte des résultats de ces décisions.", "V"],
    ["Les leaders adoptent un comportement centré sur les tâches lorsqu’ils indiquent à leurs subordonnés qu’ils leur font confiance, qu’ils les respectent et qu’ils se préoccupent de leur bien-être.", "F"],
    ["Les modèles de contingence tiennent compte de la situation ou du contexte dans lesquels le leadership s’exerce.", "V"],
    ["D’après les modèles de contingence, il existe un ensemble de traits ou de comportements (comme l’intelligence et l’honnêteté) meilleur que les autres et qui s’applique généralement à toutes les situations de leadership.", "F"],
    ["Comme dans le cas de l’approche axée sur les traits de personnalité, Fiedler a émis l’hypothèse que les caractéristiques personnelles du leader n’influent pas sur son efficacité.", "F"],
    ["D’après Fiedler, le pouvoir lié au poste est le degré de pouvoir légitime, de récompense et de coercition qu’un leader possède en raison du poste qu’il occupe dans une organisation.", "V"],
    ["Le modèle de contingence du leadership qui met l’accent sur l’empressement des subordonnés à accomplir leurs tâches porte le nom de « théorie de l’intégration des buts personnels » ou « théorie trajet-but ».", "V"],
    ["D’après la théorie trajet-but, un leader qui adopte des comportements autoritaires envers des employés très expérimentés et motivés se conduit de façon appropriée.", "F"],
    ["Lorsque des leaders encouragent leurs subordonnés à atteindre les objectifs prévus sans s’attendre à ce qu’ils les dépassent, on parle de « leadership transformationnel ».", "F"],
    ["Lorsque des gestionnaires sont conscients de leur degré d’émotivité et qu’ils peuvent gérer leurs humeurs et celles des personnes qui les entourent de façon efficace, on dit qu’ils possèdent une grande intelligence émotionnelle.", "V"],
];

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}


let question_element = document.getElementById("question");

let i = 0;
question_element.innerHTML = questions[i][0];

let tof;

function true_call() {
    tof = "V";
    new_question();
}

function false_call() {
    tof = "F";
    new_question();
}

const anim_con = document.getElementById("animation");

function play_animation(g) {
    if (g) {
        anim_con.innerHTML = "Bravo";
    } else {
        anim_con.innerHTML = "Wrong";
    }
}

function new_question() {
    if (tof == questions[i][1]) {
        play_animation(true);
    } else {
        play_animation(false);
    }

    i++;
    question_element.innerHTML = questions[i][0];
}