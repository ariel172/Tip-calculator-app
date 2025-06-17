// === 3. Gestion des événements ===

// Ajoute les écouteurs sur les champs pour recalculer et activer le bouton reset
function ajouterEcouteurEvenement() {
  inputPrix.addEventListener("input", () => {
    gererCalculPourboire();
    mettreAJourEtatBoutonReset();
  });
  inputCustom.addEventListener("input", () => {
    gererCalculPourboire();
    mettreAJourEtatBoutonReset();
  });
  inputNbPersonnes.addEventListener("input", () => {
    gererCalculPourboire();
    mettreAJourEtatBoutonReset();
  });
}

// Gère l'ajout/retrait de la classe active sur les boutons de pourcentage
function ajouterRetirerClass() {
  inputPourcentages.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      inputPourcentages.forEach((button) => {
        button.classList.remove("cliquer");
      });
      e.target.classList.add("cliquer");
      gererCalculPourboire();
      mettreAJourEtatBoutonReset();
    });
  });
}