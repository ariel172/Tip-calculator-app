// Calcule le pourboire par personne et le total par personne
function calculerPourboire(prix, pourcentage, nbPersonnes) {
  const pourboireTotal = prix * (pourcentage / 100);
  const pourboirePersonne = pourboireTotal / nbPersonnes;
  const totalPersonne = prix / nbPersonnes + pourboirePersonne;
  return { pourboirePersonne, totalPersonne };
}

// === 2. Moteur principal ===

// Gère le calcul du pourboire avec validation et affichage des résultats
function gererCalculPourboire() {
  const { valeurPrix, valeurPourcentage, valeurNbPersonnes } = recupererValeurInput();

  const prixEstValide = verifierChamp(inputPrix, valeurPrix);
  const boutonCliquer = document.querySelector(".choix-pourcentage__btn.cliquer");
  const utiliserCustom = !boutonCliquer;
  const pourcentageEstValide = utiliserCustom ? verifierChamp(inputCustom, valeurPourcentage) : true;
  const personneEstValide = verifierChamp(inputNbPersonnes, valeurNbPersonnes, erreurMessage);

  const tousEstValide = prixEstValide && pourcentageEstValide && personneEstValide;
  if (!tousEstValide) return;

  const { pourboirePersonne, totalPersonne } = calculerPourboire(
    valeurPrix,
    valeurPourcentage,
    valeurNbPersonnes
  );
  pourboireParPersonne.textContent = `$${pourboirePersonne.toFixed(2)}`;
  totalParPersonne.textContent = `$${totalPersonne.toFixed(2)}`;
}