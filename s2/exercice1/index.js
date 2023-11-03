// Exercice 1: Obtenir la date d'aujourd'hui il y a 10 ans
module.exports = function dateIlYADixAns() {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 10);
    
    const annee = currentDate.getFullYear();
    const mois = String(currentDate.getMonth() + 1).padStart(2, '0');
    const jour = String(currentDate.getDate()).padStart(2, '0');
    
    return `${jour}/${mois}/${annee}`;
};


