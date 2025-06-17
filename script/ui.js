// Met à jour l'état du bouton Reset (active/désactive + style)
function mettreAJourEtatBoutonReset() {
  const actif = auMoinsUnChampRempli();
  inputReset.disabled = !actif;
  inputReset.classList.toggle("actif", actif);
}

// Gère le clic sur le bouton Reset : vide tous les champs et réinitialise l'affichage
function renitialiserInput() {
  inputReset.addEventListener("click", () => {
    inputPrix.value = "";
    inputCustom.value = "";
    inputNbPersonnes.value = "";
    inputPourcentages.forEach((btn) => {
      btn.classList.remove("cliquer");
    });
    pourboireParPersonne.textContent = "$0.00";
    totalParPersonne.textContent = "$0.00";
    inputPrix.classList.remove("erreur-input");
    inputNbPersonnes.classList.remove("erreur-input");
    erreurMessage.classList.remove("active");
    mettreAJourEtatBoutonReset();
  });
}