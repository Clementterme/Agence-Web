/*# Popup et formulaire d'inscription
Lors d'un clic sur l'un des boutons de la page, on ouvre une popup,
 qui contient un formulaire. La fenêtre modale est au premier plan, avec un fond assombri, 
 qui donne un contraste entre cette popup et le reste de votre page. 
 La fenêtre se ferme lors d'un clic sur la croix de la popup, ou partout ailleurs sur la page.
## NIVEAU 1
Réaliser la popup entièrement en HTML, et ajouter le JS pour les animations d'ouvertures et de fermeture de la popup.

## NIVEAU 2 
En HTML, avoir une popup vide. En JS, en plus des animations du niveau 1, 
remplir le contenu de la popup avec un formulaire, qui peut être différent en fonction du bouton sur lequel on clique 
(faites-en deux différents). 

## NIVEAU 3 
Une fois que le formulaire est rempli, faire une vérification des champs 
(ils doivent être remplis, si ce n'est pas le cas, on affiche une erreur dans le champ vide en rouge) 
puis on efface le formulaire de la popup, pour le remplacer par 
un message : "Nous avons bien pris en compte votre demande, 
veuillez vérifier votre boîte mail pour valider votre inscription.
 Cette fenêtre se fermera automatiquement dans 5 secondes". 
 Et ajouter une fermeture automatique au bout de 5 secondes.

## NIVEAU 4 et plus
* Ajoutez des manières de faire apparaître la popup de manière originale (translations, rotations, fondus, rebonds, ...)
* Ajoutez des vérifications particulières des champs du formulaire 
(nombre de caractères minimums, email, ... et message d'erreur correspondant) pas juste les attributs HTML,
 mais bien des vérifications JS, qui vous permettront de personnaliser les messages d'erreurs. 
* Animez ces messages d'erreurs pour leur apparition et leur disparition (vibrations, flash, ...)
* Amusez-vous ! */


let detect_theform = document.getElementById("containerFormulair"); // i declare the let out side the function to avoid to redo everytime in every function 
function afficherLeFormulaire() {
  detect_theform.style.display = "block";
}

function cacherLeFormulaire() {
  detect_theform.style.display = "none";
}

let messageEnvoyer = document.getElementById("messageEnvoyer");
function afficheLeMessage() {
  messageEnvoyer.style.display = "block";

  setTimeout(function () {
    messageEnvoyer.style.display = "none";
  }, 5000);
}

window.addEventListener('click', function (event) {
  let closeTheFormOutsideThePopup = document.getElementById("containerFormulair");
  if (
    event.target !== closeTheFormOutsideThePopup &&
    !closeTheFormOutsideThePopup.contains(event.target) &&
    event.target.id !== "buttonform"
  ) {
    closeTheFormOutsideThePopup.style.display = 'none';
  }
});
