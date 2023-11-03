// Exercice 10: Créer une fonction pour calculer l'âge à partir de la date de naissance
module.exports = function calculerAge(dateNaissance) {
    const aujourdhui = new Date();
    const naissance = new Date(dateNaissance);
    const diff = aujourdhui - naissance;
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); // Approximation pour les années bissextiles
    return age;
}
