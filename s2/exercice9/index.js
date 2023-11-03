// Exercice 9: Créer une fonction pour vérifier si deux plages de dates se chevauchent
module.exports = function chevauchementDates(debut1, fin1, debut2, fin2) {
    if (debut1 <= fin2 && debut2 <= fin1) {
        return true;
    } else {
        return false;
    }
}


