// === DOM Elements ===
let inputPrix = document.getElementById("prix");
let inputPourcentages = document.querySelectorAll(".choix-pourcentage__btn");
let inputCustom = document.querySelector(".choix-pourcentage__custom");
let inputNbPersonnes = document.getElementById("nb-personnes");
let pourboireParPersonne = document.querySelector(".compte-pourboire");
let totalParPersonne = document.querySelector(".total");
let inputReset = document.querySelector(".btn-reset");
let erreurMessage = document.querySelector(".erreur-message");

// === 1. Fonctions utilitaires ===

// Récupère et retourne les valeurs des champs saisis
function recupererValeurInput() {
  let valeurPrix = parseFloat(inputPrix.value.trim());
  let boutonCliquer = document.querySelector(".choix-pourcentage__btn.cliquer");
  let valeurCustom = parseFloat(inputCustom.value.trim());
  let valeurPourcentage = boutonCliquer ? parseFloat(boutonCliquer.textContent) : valeurCustom;
  let valeurNbPersonnes = parseInt(inputNbPersonnes.value.trim());
  return { valeurPrix, valeurPourcentage, valeurNbPersonnes };
}

// Vérifie si un champ est valide et applique les styles d'erreur si nécessaire
function verifierChamp(elementInput, valeur, afficherErreur = null) {
  const estValide = !isNaN(valeur) && valeur > 0;
  elementInput.classList.toggle("erreur-input", !estValide);
  if (afficherErreur) {
    afficherErreur.classList.toggle("active", !estValide);
  }
  return estValide;
}

// Fonction unitaire pour savoir si une valeur est considérée comme renseignée
const estRenseigne = (valeur) => !isNaN(valeur) && valeur > 0;

// Vérifie si au moins un champ est rempli (utile pour activer le bouton reset)
function auMoinsUnChampRempli() {
  const { valeurPrix, valeurPourcentage, valeurNbPersonnes } = recupererValeurInput();
  return (
    estRenseigne(valeurPrix) ||
    estRenseigne(valeurPourcentage) ||
    estRenseigne(valeurNbPersonnes)
  );
}