// Exercice 3: Créer une fonction pour calculer la différence en jours entre deux dates
module.exports = function differenceEnJours(date1, date2) {
    const differenceEnMillisecondes = date2.getTime() - date1.getTime();
    const differenceEnJours = differenceEnMillisecondes / (1000 * 60 * 60 * 24);
    return differenceEnJours;
}
