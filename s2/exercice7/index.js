// Exercice 7: Créer une fonction pour obtenir le dernier jour du mois d'une date donnée
module.exports = function dernierJourDuMois(date) {
    const dernierJour = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return dernierJour;
}
