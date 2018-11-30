let questions = [];
class Question{
	constructor(question) {
		this.question = question;
		this.options = [];
		this.good_option_index = null;
	}
}
let q;
q = new Question("Lesquels des moyens suivants utilise-t-on pour créer et maintenir une culture organisationnelle?");questions.push(q);
questions[questions.length-1].options.push("Les fondateurs ou les cadres supérieurs de l’entreprise engagent et favorisent uniquement la rétention des employés qui pensent et qui perçoivent le cadre de travail comme eux le font.");
questions[questions.length-1].options.push("Les dirigeants inculquent à leurs employés leur façon de penser et de concevoir les choses et les leur communiquent par la socialisation organisationnelle.");
questions[questions.length-1].options.push("Les cadres supérieurs servent de modèles.");
questions[questions.length-1].options.push("Aucune de ces réponses n’est bonne.");
questions[questions.length-1].options.push("Toutes ces réponses sont bonnes.");
questions[questions.length-1].good_option_index = 4;
q = new Question("Les gestionnaires cultivent et développent intentionnellement les valeurs et les normes organisationnelles qui conviennent le mieux.");questions.push(q);
questions[questions.length-1].options.push("à leur environnement concurrentiel;");
questions[questions.length-1].options.push("leur stratégie;");
questions[questions.length-1].options.push("à la technologie que leur entreprise utilise;");
questions[questions.length-1].options.push("Aucune de ces réponses n’est bonne.");
questions[questions.length-1].options.push("Toutes ces réponses sont bonnes.");
questions[questions.length-1].good_option_index = 4;
q = new Question("Lequel des éléments suivants n’est pas un exemple de symbole matériel d’une culture organisationnelle?");questions.push(q);
questions[questions.length-1].options.push("Le code vestimentaire");
questions[questions.length-1].options.push("La taille des bureaux");
questions[questions.length-1].options.push("Les systèmes de croyances");
questions[questions.length-1].good_option_index = 2;
questions[questions.length-1].options.push("La disposition des lieux de travail");
questions[questions.length-1].options.push("Aucun de ces choix.");
q = new Question("Selon Lewin, un changement devient permanent à l’étape __________.");questions.push(q);
questions[questions.length-1].options.push("de la décristallisation;");
questions[questions.length-1].options.push("de la transition;");
questions[questions.length-1].options.push("de la recristallisation;");
questions[questions.length-1].good_option_index = 2;
questions[questions.length-1].options.push("des forces motivationnelles;");
questions[questions.length-1].options.push("Aucun de ces choix.");
q = new Question("Toutes les mesures suivantes sont essentielles à la gestion du changement dans un milieu syndiqué au Canada, sauf :");questions.push(q);
questions[questions.length-1].options.push("la création d’un système efficace pour résoudre les problèmes au jour le jour;");
questions[questions.length-1].options.push("la mise en place d’un processus d’information au sein de l’entreprise;");
questions[questions.length-1].options.push("l’élaboration conjointe d’une vision stratégique du changement pour l’organisation;");
questions[questions.length-1].options.push("l’élaboration de nouvelles méthodes de résolution de problèmes pour la négociation des conventions collectives.");
questions[questions.length-1].options.push("la création d’un moyen de remettre en question les relations de pouvoir");
questions[questions.length-1].good_option_index = 4;
q = new Question("L’autorité qu’un gestionnaire a en raison du poste qu’il occupe dans la hiérarchie d’une organisation est appelée :");questions.push(q);
questions[questions.length-1].options.push("pouvoir de récompense;");
questions[questions.length-1].options.push("pouvoir de coercition;");
questions[questions.length-1].options.push("pouvoir légitime;");
questions[questions.length-1].good_option_index = 2;
questions[questions.length-1].options.push("pouvoir d’expert;");
questions[questions.length-1].options.push("Aucune de ces réponses.");
q = new Question("Lorsqu’un gestionnaire refuse de donner son salaire à un subordonné en raison du faible rendement de celui-ci au travail, quel type de pouvoir utilise-t-il?");questions.push(q);
questions[questions.length-1].options.push("Le pouvoir de référence");
questions[questions.length-1].options.push("Le pouvoir légitime");
questions[questions.length-1].options.push("Le pouvoir de coercition");
questions[questions.length-1].good_option_index = 2;
questions[questions.length-1].options.push("Le pouvoir de récompense");
questions[questions.length-1].options.push("Aucun de ces choix");
q = new Question("Tous les éléments suivants constituent des exemples de récompenses matérielles qu’un gestionnaire peut accorder à un subordonné, sauf :");questions.push(q);
questions[questions.length-1].options.push("une augmentation de salaire;");
questions[questions.length-1].options.push("un compliment;");
questions[questions.length-1].good_option_index = 1;
questions[questions.length-1].options.push("une prime;");
questions[questions.length-1].options.push("un abonnement à un club sportif;");
questions[questions.length-1].options.push("Aucun de ces choix.");
q = new Question("Voici un exemple de récompense matérielle qu’un gestionnaire peut accorder à un subordonné.");questions.push(q);
questions[questions.length-1].options.push("Une affectation intéressante");
questions[questions.length-1].options.push("Une prime en argent");
questions[questions.length-1].options.push("Une augmentation de salaire");
questions[questions.length-1].options.push("Aucune de ces réponses");
questions[questions.length-1].options.push("Toutes ces réponses");
questions[questions.length-1].good_option_index = 4;
q = new Question("Lequel des éléments suivants est un exemple du pouvoir de coercition d’un gestionnaire?");questions.push(q);
questions[questions.length-1].options.push("Un avertissement oral");
questions[questions.length-1].options.push("Un avertissement écrit");
questions[questions.length-1].options.push("Une suspension sans salaire");
questions[questions.length-1].options.push("Aucune de ces réponses ");
questions[questions.length-1].options.push("Toutes ces réponses");
questions[questions.length-1].good_option_index = 4;
q = new Question("Lorsque, dans une usine, un superviseur confie à un ouvrier la responsabilité de refuser toutes les pièces qui, à son avis, ne satisfont pas aux normes requises, de quel type de transfert d’autorité s’agit-il?");questions.push(q);
questions[questions.length-1].options.push("Un pouvoir charismatique");
questions[questions.length-1].options.push("Un pouvoir légitime");
questions[questions.length-1].options.push("Une autonomisation");
questions[questions.length-1].options.push("Un pouvoir de référence");
questions[questions.length-1].options.push("Un pouvoir d’expert ");
questions[questions.length-1].good_option_index = 4;
q = new Question("Lorsqu’un gestionnaire se préoccupe grandement du bien-être des personnes tout autant que de la production, quel type de leadership exerce-t-il ?");questions.push(q);
questions[questions.length-1].options.push("Un leadership paternaliste");
questions[questions.length-1].options.push("Un leadership démocratique");
questions[questions.length-1].good_option_index = 1;
questions[questions.length-1].options.push("Un leadership autocratique");
questions[questions.length-1].options.push("Un leadership collégial");
questions[questions.length-1].options.push("Aucune de ces réponses");
q = new Question("Lorsque le gestionnaire du quart de nuit d’un dépanneur permet à ses employés de planifier eux-mêmes leurs heures de travail, on a un exemple :");questions.push(q);
questions[questions.length-1].options.push("de coercition;");
questions[questions.length-1].options.push("de récompense;");
questions[questions.length-1].options.push("de légitimation;");
questions[questions.length-1].options.push("d’autonomisation;");
questions[questions.length-1].good_option_index = 3;
questions[questions.length-1].options.push("Aucun de ces choix.");
q = new Question("Lequel des éléments qui suivent n’est pas un comportement centré sur les tâches?");questions.push(q);
questions[questions.length-1].options.push("Manifester sa préoccupation pour le bien-être des employés");
questions[questions.length-1].good_option_index = 0;
questions[questions.length-1].options.push("Informer ses subordonnés de ce qu’on attend d’eux");
questions[questions.length-1].options.push("Déterminer la façon dont le travail devrait être effectué");
questions[questions.length-1].options.push("Préparer des horaires de travail");
questions[questions.length-1].options.push("Assigner des tâches à des personnes ou à des groupes");
q = new Question("Les théories sur le leadership d’après lesquelles l’efficacité d’un leader dépend de la situation dans laquelle il se trouve sont appelées :");questions.push(q);
questions[questions.length-1].options.push("théories des traits (ou approche axée sur les traits de personnalité);");
questions[questions.length-1].options.push("modèles de contingence du leadership;");
questions[questions.length-1].good_option_index = 1;
questions[questions.length-1].options.push("modèle d’autonomisation;");
questions[questions.length-1].options.push("théorie trajet-but (ou théorie de l’intégration des buts personnels);");
questions[questions.length-1].options.push("modèle du substitut du leader.");
q = new Question("D’après la théorie trajet-but (ou théorie de l’intégration des buts personnels), les comportements ________ se comparent aux comportements centrés sur les relations et comportent l’expression d’une préoccupation pour le bien-être de ses subordonnés.");questions.push(q);
questions[questions.length-1].options.push("de soutien");
questions[questions.length-1].good_option_index = 0;
questions[questions.length-1].options.push("directifs");
questions[questions.length-1].options.push("de participation");
questions[questions.length-1].options.push("centrés sur l’accomplissement");
questions[questions.length-1].options.push("Aucune de ces réponses");
q = new Question("Les comportements ________ peuvent être bénéfiques pour des subordonnés qui ont de la difficulté à effectuer entièrement les tâches qui leur sont assignées.");questions.push(q);
questions[questions.length-1].options.push("centrés sur les tâches");
questions[questions.length-1].options.push("de soutien");
questions[questions.length-1].options.push("de participation");
questions[questions.length-1].options.push("centrés sur l’accomplissement");
questions[questions.length-1].options.push("directifs");
questions[questions.length-1].good_option_index = 4;
q = new Question("Les comportements ________ peuvent se révéler particulièrement efficaces lorsque le gestionnaire a besoin que ses subordonnés apportent leur soutien à une décision.");questions.push(q);
questions[questions.length-1].options.push("centrés sur les tâches");
questions[questions.length-1].options.push("de soutien");
questions[questions.length-1].options.push("de participation");
questions[questions.length-1].good_option_index = 2;
questions[questions.length-1].options.push("centrés sur l’accomplissement");
questions[questions.length-1].options.push("directifs");
q = new Question("Lorsque les caractéristiques que possèdent des subordonnés, ou celles d’une situation ou d’un contexte, remplacent l’influence d’un leader et rendent son leadership inutile, on parle :");questions.push(q);
questions[questions.length-1].options.push("d’autonomisation;");
questions[questions.length-1].options.push("de comportement centré sur les tâches;");
questions[questions.length-1].options.push("de comportement centré sur les relations;");
questions[questions.length-1].options.push("de substitut du leader;");
questions[questions.length-1].good_option_index = 3;
questions[questions.length-1].options.push("Aucune de ces réponses.");
q = new Question("Lequel des énoncés suivants décrit un leader transactionnel?");questions.push(q);
questions[questions.length-1].options.push("Un leader qui fait prendre conscience à ses subordonnés de l’importance de leurs tâches pour l’organisation");
questions[questions.length-1].options.push("Un leader qui fait prendre conscience à ses subordonnés de leurs propres besoins en matière de croissance personnelle");
questions[questions.length-1].options.push("Un leader qui motive ses subordonnés pour qu’ils travaillent à la réussite de l’organisation dans son ensemble");
questions[questions.length-1].options.push("Un leader qui met l’accent sur les récompenses et les sanctions");
questions[questions.length-1].good_option_index = 3;
questions[questions.length-1].options.push("Un leader qui inspire ses subordonnés");
q = new Question("Lequel des énoncés suivants ne décrit pas un leader transformationnel?");questions.push(q);
questions[questions.length-1].options.push("Un leader qui fait prendre conscience à ses subordonnés de l’importance de leurs tâches pour l’organisation");
questions[questions.length-1].options.push("Un leader qui fait prendre conscience à ses subordonnés de leurs propres besoins en matière de croissance personnelle");
questions[questions.length-1].options.push("Un leader qui motive ses subordonnés pour qu’ils travaillent à la réussite de l’organisation dans son ensemble");
questions[questions.length-1].options.push("Un leader qui met l’accent sur les récompenses et les sanctions");
questions[questions.length-1].good_option_index = 3;
questions[questions.length-1].options.push("Un leader qui inspire ses subordonnés");
q = new Question("Le degré d’intelligence émotionnelle d’un leader est susceptible d’avoir un effet déterminant sur tous les éléments suivants, sauf un. Lequel?");questions.push(q);
questions[questions.length-1].options.push("L’élaboration d’une vision pour son entreprise");
questions[questions.length-1].good_option_index = 0;
questions[questions.length-1].options.push("Le degré de motivation et de loyauté des employés envers l’entreprise");
questions[questions.length-1].options.push("Le degré de confiance et de coopération au sein de l’entreprise");
questions[questions.length-1].options.push("Le degré d’efficacité de l’entreprise à l’avenir");
questions[questions.length-1].options.push("Le degré d’influence générale sur l’expérience de leadership ");
q = new Question("Le comportement qu’une personne adopte pour obtenir une récompense matérielle ou sociale ou pour éviter une sanction se nomme :");questions.push(q);
questions[questions.length-1].options.push("motivation;");
questions[questions.length-1].options.push("comportement à motivation intrinsèque;");
questions[questions.length-1].options.push("comportement à motivation extrinsèque;");
questions[questions.length-1].good_option_index = 2;
questions[questions.length-1].options.push("comportement lié aux besoins;");
questions[questions.length-1].options.push("équité.");
q = new Question("Un cadre supérieur qui éprouve un sentiment d’accomplissement et de réussite dans sa gestion d’une grande entreprise et qui s’efforce d’atteindre les objectifs annuels prévus pour obtenir une prime substantielle :");questions.push(q);
questions[questions.length-1].options.push("a une motivation intrinsèque;");
questions[questions.length-1].options.push("a une motivation à la fois intrinsèque et extrinsèque;");
questions[questions.length-1].good_option_index = 1;
questions[questions.length-1].options.push("est victime d’iniquité d’une rémunération insuffisante;");
questions[questions.length-1].options.push("a une motivation extrinsèque;");
questions[questions.length-1].options.push("Aucune de ces réponses n’est bonne.");
q = new Question("Laquelle des affirmations suivantes est vraie en ce qui a trait aux façons dont les gestionnaires essaient de motiver leurs employés à fournir un bon rendement?");questions.push(q);
questions[questions.length-1].options.push("Ils s’efforcent d’amener les employés à fournir des contributions importantes à l’entreprise.");
questions[questions.length-1].options.push("Ils s’assurent que ces contributions sont utilisées de façon efficace.");
questions[questions.length-1].options.push("Ils s’assurent que ces contributions visent un rendement élevé.");
questions[questions.length-1].options.push("Ils s’assurent qu’un rendement élevé permet aux employés de recevoir les récompenses qu’ils souhaitent obtenir.");
questions[questions.length-1].options.push("Toutes ces réponses sont bonnes.");
questions[questions.length-1].good_option_index = 4;
q = new Question("Dans la théorie de Herzberg, tous les éléments suivants sont des exemples de facteurs motivateurs, sauf un. Lequel?");questions.push(q);
questions[questions.length-1].options.push("Un travail intéressant");
questions[questions.length-1].options.push("Des responsabilités");
questions[questions.length-1].options.push("Un accès à une garderie en milieu de travail");
questions[questions.length-1].good_option_index = 2;
questions[questions.length-1].options.push("Un sentiment d’accomplissement de soi");
questions[questions.length-1].options.push("L’autonomie");
q = new Question("Dans la théorie de Herzberg, tous les éléments suivants sont des exemples de facteurs d’hygiène, sauf un. Lequel?");questions.push(q);
questions[questions.length-1].options.push("Des responsabilités");
questions[questions.length-1].good_option_index = 0;
questions[questions.length-1].options.push("Une rémunération équitable");
questions[questions.length-1].options.push("La sécurité d’emploi");
questions[questions.length-1].options.push("Une supervision efficace");
questions[questions.length-1].options.push("De bonnes relations avec ses collègues de travail");
q = new Question("Laquelle des affirmations suivantes joue un rôle important dans la théorie de la motivation par les objectifs?");questions.push(q);
questions[questions.length-1].options.push("Les objectifs devraient demeurer généraux et vagues.");
questions[questions.length-1].options.push("Les employés devraient recevoir une rétroaction concernant les progrès qu’ils font.");
questions[questions.length-1].good_option_index = 1;
questions[questions.length-1].options.push("Lorsque les employés participent au processus d’établissement des objectifs, ils sont moins enclins à s’efforcer de les réaliser.");
questions[questions.length-1].options.push("Lorsque les employés participent au processus d’établissement des objectifs, ils sont moins enclins à les accepter.");
questions[questions.length-1].options.push("Aucune de ces réponses n’est bonne.");
q = new Question("Le fait de restreindre des comportements perturbateurs en éliminant tout ce qui peut les renforcer est appelé :");questions.push(q);
questions[questions.length-1].options.push("renforcement positif;");
questions[questions.length-1].options.push("valence;");
questions[questions.length-1].options.push("sanction;");
questions[questions.length-1].options.push("extinction; ");
questions[questions.length-1].good_option_index = 3;
questions[questions.length-1].options.push("renforcement négatif. ");
q = new Question("On appelle _____________ la conviction d’une personne concernant sa capacité à reproduire un comportement avec succès.");questions.push(q);
questions[questions.length-1].options.push("estime de soi");
questions[questions.length-1].options.push("confiance en soi");
questions[questions.length-1].options.push("égocentrisme");
questions[questions.length-1].options.push("satisfaction de soi");
questions[questions.length-1].options.push("connaissance de ses propres capacités");
questions[questions.length-1].good_option_index = 4;
q = new Question("Pour encourager l’apprentissage par observation, les gestionnaires devraient s’efforcer d’amener chaque apprenant à respecter les conditions suivantes, sauf une. Laquelle?");questions.push(q);
questions[questions.length-1].options.push("L’apprenant doit observer le comportement du modèle.");
questions[questions.length-1].options.push("L’apprenant doit avoir une perception adéquate de ce comportement.");
questions[questions.length-1].options.push("L’apprenant doit mémoriser ce comportement.");
questions[questions.length-1].options.push("L’apprenant doit acquérir les habiletés et les capacités nécessaires pour reproduire le comportement.");
questions[questions.length-1].options.push("L’apprenant ne peut pas connaître le renforçateur positif que le modèle reçoit en raison de son comportement.");
questions[questions.length-1].good_option_index = 4;
q = new Question("L’ensemble des moyens que les gestionnaires utilisent pour prévoir les besoins actuels et futurs de leur organisation en matière de ressources humaines porte le nom de :");questions.push(q);
questions[questions.length-1].options.push("planification des ressources humaines;");
questions[questions.length-1].good_option_index = 0;
questions[questions.length-1].options.push("sélection;");
questions[questions.length-1].options.push("recrutement;");
questions[questions.length-1].options.push("évaluation du rendement;");
questions[questions.length-1].options.push("Aucun de ces choix.");
q = new Question("Lorsqu’un gestionnaire change de poste à l’intérieur d’une entreprise pour en occuper un autre, situé au même échelon que le précédent, sans modification importante quant à son degré de responsabilité ou d’autorité, on parle de :");questions.push(q);
questions[questions.length-1].options.push("recrutement externe;");
questions[questions.length-1].options.push("recrutement interne;");
questions[questions.length-1].options.push("mutation;");
questions[questions.length-1].good_option_index = 2;
questions[questions.length-1].options.push("sélection;");
questions[questions.length-1].options.push("formation.");
q = new Question("18. Laquelle des situations suivantes peut constituer un des désavantages du recrutement interne?");questions.push(q);
questions[questions.length-1].options.push("Les candidats à l’interne connaissent déjà les objectifs de l’entreprise.");
questions[questions.length-1].options.push("Les gestionnaires connaissent déjà ces candidats.");
questions[questions.length-1].options.push("Le recrutement à l’interne peut encourager les employés qui n’ont pas encore eu de promotion.");
questions[questions.length-1].options.push("Les candidats connaissent bien la culture de l’entreprise.");
questions[questions.length-1].options.push("Le recrutement à l’interne a tendance à assurer le maintien du statu quo.");
questions[questions.length-1].good_option_index = 4;
q = new Question("Quel terme décrit le mieux un groupe dont les membres proviennent de divers services tels que les finances, le marketing, la production et les services techniques?");questions.push(q);
questions[questions.length-1].options.push("Équipe en recherche et développement");
questions[questions.length-1].options.push("Équipe interfonctionnelle");
questions[questions.length-1].good_option_index = 1;
questions[questions.length-1].options.push("Équipe fonctionnelle");
questions[questions.length-1].options.push("Comité ad hoc");
questions[questions.length-1].options.push("Équipe");
q = new Question("À quelle étape de son développement un comité ad hoc est-il parvenu après avoir remis son rapport final portant sur le projet auquel il a travaillé?");questions.push(q);
questions[questions.length-1].options.push("La cohésion");
questions[questions.length-1].options.push("L’exécution");
questions[questions.length-1].options.push("La cessation de ses activités");
questions[questions.length-1].good_option_index = 2;
questions[questions.length-1].options.push("Lorsque le Comité ad hoc donne son approbation");
questions[questions.length-1].options.push("Aucune de ces réponses.");
q = new Question("L’étape de l’évolution d’un groupe pendant laquelle ses membres font connaissance les uns avec les autres et s’efforcent de s’entendre sur la façon dont chacun devrait se comporter au sein du groupe porte le nom de :");questions.push(q);
questions[questions.length-1].options.push("phase des conflits;");
questions[questions.length-1].options.push("cohésion;");
questions[questions.length-1].options.push("formation;");
questions[questions.length-1].good_option_index = 2;
questions[questions.length-1].options.push("en allant voir une partie des Sénateurs d’Ottawa;");
questions[questions.length-1].options.push("Aucune de ces réponses.");
q = new Question("Pour laquelle des activités suivantes les membres d’un groupe n’établissent- ils généralement pas de normes?");questions.push(q);
questions[questions.length-1].options.push("Le partage de renseignements entre eux");
questions[questions.length-1].options.push("Les façons d’effectuer diverses tâches");
questions[questions.length-1].options.push("Le choix d’un code vestimentaire");
questions[questions.length-1].options.push("L’établissement des heures de travail du groupe");
questions[questions.length-1].options.push("L’adoption des objectifs officiels du groupe");
questions[questions.length-1].good_option_index = 4;
q = new Question("D’après certaines recherches, lorsque le degré de cohésion à l’intérieur d’un groupe est ________, les personnes qui en font partie ________ fortement leur appartenance au groupe et ont un ________ désir d’en rester membres.");questions.push(q);
questions[questions.length-1].options.push("élevé; apprécient; faible");
questions[questions.length-1].options.push("faible; apprécient; grand");
questions[questions.length-1].options.push("élevé; apprécient; grand");
questions[questions.length-1].good_option_index = 2;
questions[questions.length-1].options.push("faible; déprécient; grand");
questions[questions.length-1].options.push("Aucune de ces réponses");
q = new Question("Laquelle des affirmations suivantes ne s’applique pas à la pensée de groupe?");questions.push(q);
questions[questions.length-1].options.push("Les membres du groupe s’efforcent d’empêcher l’expression d’opinions qui ne font pas l’unanimité.");
questions[questions.length-1].options.push("Des membres du groupe jouent le rôle d’avocats du diable.");
questions[questions.length-1].good_option_index = 1;
questions[questions.length-1].options.push("Les membres du groupe s’efforcent de parvenir à une entente au détriment de la prise d’une décision optimale.");
questions[questions.length-1].options.push("Les membres du groupe n’examinent pas tous les plans d’action possibles.");
questions[questions.length-1].options.push("Les membres du groupe font disparaître les opinions minoritaires.");
q = new Question("Dans la phase de rétroaction du processus de communication, __________ devient __________ et __________ son message.");questions.push(q);
questions[questions.length-1].options.push("l’expéditeur; l’expéditeur; code");
questions[questions.length-1].options.push("le destinataire; l’expéditeur; code");
questions[questions.length-1].good_option_index = 1;
questions[questions.length-1].options.push("l’expéditeur; le destinataire; code");
questions[questions.length-1].options.push("le destinataire; le destinataire; décode");
questions[questions.length-1].options.push("Aucune de ces réponses n’est bonne.");
q = new Question("Les moyens de communication varient en fonction de trois facteurs. Lesquels?");questions.push(q);
questions[questions.length-1].options.push("La richesse de l’information, la perception et la nécessité de conserver une preuve écrite");
questions[questions.length-1].options.push("La richesse de l’information, le temps requis pour la communication et la nécessité de conserver une preuve écrite");
questions[questions.length-1].good_option_index = 1;
questions[questions.length-1].options.push("La richesse de l’information, le temps requis pour la communication et la perception");
questions[questions.length-1].options.push("Toutes ces réponses");
questions[questions.length-1].options.push("Aucune de ces réponses");
q = new Question("Le moyen de communication qui offre le degré le plus élevé de richesse de l’information est :");questions.push(q);
questions[questions.length-1].options.push("le courriel;");
questions[questions.length-1].options.push("la gestion sur le terrain;");
questions[questions.length-1].good_option_index = 1;
questions[questions.length-1].options.push("l’utilisation du blogue;");
questions[questions.length-1].options.push("la vidéoconférence;");
questions[questions.length-1].options.push("la messagerie vocale.");
q = new Question("Lorsqu’on amène deux gestionnaires qui s’opposent, parce que l’un aime prendre des risques et que l’autre préfère les éviter, à se rendre compte qu’ils ont des styles de gestion différents, on a un exemple de stratégie de gestion de conflit appelée :");questions.push(q);
questions[questions.length-1].options.push("équité;");
questions[questions.length-1].options.push("politique organisationnelle;");
questions[questions.length-1].options.push("prise de conscience accrue des sources de conflit;");
questions[questions.length-1].good_option_index = 2;
questions[questions.length-1].options.push("rotation des postes;");
questions[questions.length-1].options.push("prise de conscience accrue de la diversité.");
q = new Question("Laquelle des stratégies suivantes les gestionnaires peuvent-ils utiliser pour faciliter une négociation raisonnée entre des gestionnaires en conflit?");questions.push(q);
questions[questions.length-1].options.push("Insister sur des objectifs communs");
questions[questions.length-1].options.push("Mettre l’accent sur le problème, et non sur les personnes");
questions[questions.length-1].options.push("Insister sur les objectifs, intérêts ou besoins de chacun, et non sur ses demandes");
questions[questions.length-1].options.push("Proposer de nouvelles solutions pour assurer des gains aux deux parties");
questions[questions.length-1].options.push("Toutes ces réponses");
questions[questions.length-1].good_option_index = 4;
q = new Question("Pour accroître l’efficience de leur organisation en vue de lui assurer un avantage concurrentiel, les gestionnaires peuvent adopter toutes les techniques suivantes, sauf :");questions.push(q);
questions[questions.length-1].options.push("la gestion intégrale de la qualité (GIQ);");
questions[questions.length-1].options.push("la rétroaction;");
questions[questions.length-1].good_option_index = 1;
questions[questions.length-1].options.push("la méthode Six Sigma;");
questions[questions.length-1].options.push("l’étalonnage.");
questions[questions.length-1].options.push("Toutes ces réponses sont bonnes.");
q = new Question("Les systèmes de contrôle du rendement sont conçus pour rendre les organisations plus prospères en aidant les gestionnaires dans toutes les activités suivantes, sauf :");questions.push(q);
questions[questions.length-1].options.push("s’adapter au changement et à l’incertitude;");
questions[questions.length-1].options.push("réduire les coûts;");
questions[questions.length-1].options.push("accroître les prises de décisions routinières;");
questions[questions.length-1].good_option_index = 2;
questions[questions.length-1].options.push("composer avec la complexité;");
questions[questions.length-1].options.push("faciliter le travail en équipe.");
q = new Question("Les diverses normes de contrôle que les gestionnaires établissent s’appliquent à tous les éléments qui suivent, sauf :");questions.push(q);
questions[questions.length-1].options.push("au temps;");
questions[questions.length-1].options.push("aux employés;");
questions[questions.length-1].good_option_index = 1;
questions[questions.length-1].options.push("aux produits;");
questions[questions.length-1].options.push("à la qualité;");
questions[questions.length-1].options.push("aux comportements.");
q = new Question("Les normes en matière de production établissent :");questions.push(q);
questions[questions.length-1].options.push("la quantité d’un service ou d’un bien qu’un employé doit fournir ou produire;");
questions[questions.length-1].good_option_index = 0;
questions[questions.length-1].options.push("la qualité à laquelle on s’attend dans la livraison de produits ou la prestation de services;");
questions[questions.length-1].options.push("le nombre d’heures de travail à effectuer;");
questions[questions.length-1].options.push("le temps requis pour accomplir une tâche;");
questions[questions.length-1].options.push("les interactions entre les employés.");
q = new Question("Lorsqu’ils comparent le rendement réel aux normes établies, les gestionnaires doivent déterminer si l’écart entre les deux justifie l’adoption de mesures correctives. Pour ce faire :");questions.push(q);
questions[questions.length-1].options.push("ils établissent un éventail acceptable de niveaux de rendement inférieurs et supérieurs à la norme;");
questions[questions.length-1].options.push("ils calculent l’écart;");
questions[questions.length-1].options.push("ils déterminent si l’écart est important;");
questions[questions.length-1].options.push("ils déterminent la cause de l’écart et adoptent des mesures correctives.");
q = new Question("Toutes ces réponses sont bonnes.");questions.push(q);
q = new Question("À l’étape du contrôle du processus de ___________, les gestionnaires utilisent généralement des mesures de contrôle ________ pour obtenir une rétroaction immédiate concernant le degré d’efficacité de la conversion des facteurs de production en produits finis.");questions.push(q);
questions[questions.length-1].options.push("transformation; continu");
questions[questions.length-1].good_option_index = 0;
questions[questions.length-1].options.push("contribution; rétroactif");
questions[questions.length-1].options.push("production; proactif");
questions[questions.length-1].options.push("contribution; continu");
questions[questions.length-1].options.push("production; continu");
q = new Question("Un budget qui énonce la façon dont les gestionnaires comptent utiliser les ressources de l’organisation pour réaliser ses objectifs porte le nom de :");questions.push(q);
questions[questions.length-1].options.push("budget financier;");
questions[questions.length-1].options.push("budget d’investissement;");
questions[questions.length-1].options.push("budget opérationnel;");
questions[questions.length-1].options.push("budget d’exploitation;");
questions[questions.length-1].good_option_index = 3;
questions[questions.length-1].options.push("budget directeur.");
q = new Question("Les composantes d’un système efficace de contrôle de la production sont :");questions.push(q);
questions[questions.length-1].options.push("des mesures financières objectives, des normes de rendement établies à partir des objectifs stratégiques et des budgets d’exploitation appropriés;");
questions[questions.length-1].options.push("des mesures financières subjectives, des normes de rendement établies à partir des objectifs stratégiques et des budgets d’exploitation appropriés;");
questions[questions.length-1].options.push("des analyses coûts-budget, des objectifs divisionnaires et des normes de rendement;");
questions[questions.length-1].options.push("la planification d’un budget d’investissement, l’évaluation des résultats et des mesures correctives prises lorsque c’est nécessaire.");
questions[questions.length-1].options.push("Aucune de ces réponses n’est bonne. ");
questions[questions.length-1].good_option_index = 4;
q = new Question("Le processus par lequel un gestionnaire négocie avec ses subordonnés l’établissement d’objectifs précis que ceux-ci doivent atteindre puis, périodiquement, évalue la mesure dans laquelle ces employés sont parvenus à réaliser les objectifs en question porte le nom de :");questions.push(q);
questions[questions.length-1].options.push("gestion par objectifs (GPO);");
questions[questions.length-1].good_option_index = 0;
questions[questions.length-1].options.push("supervision directe;");
questions[questions.length-1].options.push("règles;");
questions[questions.length-1].options.push("procédure d’exploitation uniformisée;");
questions[questions.length-1].options.push("contrôle de la production.");
