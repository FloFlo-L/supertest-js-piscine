// Exercice 6: Créer une fonction pour obtenir le premier jour du mois d'une date donnée
module.exports = function premierJourDuMois(date) {
    const premierJour = new Date(date.getFullYear(), date.getMonth(), 1);
    return premierJour;
}