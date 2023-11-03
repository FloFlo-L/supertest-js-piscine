// Exercice 4: Créer une fonction pour ajouter un nombre de jours à une date
module.exports = function ajouterJours(date, jours) {
    const nouvelleDate = new Date(date);
    nouvelleDate.setDate(date.getDate() + jours);
    return nouvelleDate
}
