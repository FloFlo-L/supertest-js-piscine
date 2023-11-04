const express = require('express');
const app = express();
const addition = require('./s1/exercice1')
const soustraction = require('./s1/exercice2')
const multiplication = require('./s1/exercice3')
const division = require('./s1/exercice4')
const factorielle = require('./s1/exercice5')
const estPairOuImpair = require('./s1/exercice6')
const celsiusEnFahrenheit = require('./s1/exercice7')
const aireCercle = require('./s1/exercice8')
const estPalindrome = require('./s1/exercice9')
const pgcd = require('./s1/exercice10')

const dateIlYADixAns = require('./s2/exercice1')
const formaterDate = require('./s2/exercice2')
const differenceEnJours = require('./s2/exercice3')
const ajouterJours = require('./s2/exercice4')
const estAnneeBissextile = require('./s2/exercice5')
const premierJourDuMois = require('./s2/exercice6')
const dernierJourDuMois = require('./s2/exercice7')
const formaterDuree = require('./s2/exercice8')
const chevauchementDates = require('./s2/exercice9')
const calculerAge = require('./s2/exercice10')

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    return res.json([{ id: 1, name: 'John Doe' }]);
});

app.post('/:param', (req, res) => {
    return res.json([{ error: false, num: req.params.param }]);
});

/*   EXERCICE1 S1   */
app.post('/s1/exercice1', (req, res) => {
    if (req.body?.n1 === undefined || req.body?.n2 === undefined) {
        return res.status(400).json({
            error: true,
            response: "Le nombre est introuvable"
        });
    }

    const n1 = req.body.n1;
    const n2 = req.body.n2;

    if (!n1 || !n2) {
        return res.status(400).json({
            error: true,
            response: "Le nombre est introuvable"
        });
    }

    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        return res.status(400).json({
            error: true,
            response: "Les valeurs ne sont pas des nombres"
        });
    }

    let a = addition(n1, n2);

    return res.json([{ reponse: a }]);
});

/*   EXERCICE2 S1   */
app.post('/s1/exercice2', (req, res) => {
    if (req.body?.n1 === undefined || req.body?.n2 === undefined) {
        return res.status(400).json({
            error: true,
            response: "Le nombre est introuvable"
        });
    }
    
    const n1 = req.body.n1;
    const n2 = req.body.n2;

    if (!n1 || !n2) {
        return res.status(400).json({
            error: true,
            response: "Le nombre est introuvable"
        });
    }

    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        return res.status(400).json({
            error: true,
            response: "Les valeurs ne sont pas des nombres"
        });
    }

    let a = soustraction(n1, n2);
    return res.json([{ reponse: a }]);
});

/*   EXERCICE3 S1   */
app.post('/s1/exercice3', (req, res) => {
    if (req.body?.n1 === undefined || req.body?.n2 === undefined) {
        return res.status(400).json({
            error: true,
            response: "Le nombre est introuvable"
        });
    }

    const n1 = req.body.n1;
    const n2 = req.body.n2;

    if (n1 == null || n2 == null) {
        return res.status(400).json({
            error: true,
            response: "Le nombre est introuvable"
        });
    }

    if (!n1 || !n2) {
        return res.status(400).json({
            error: true,
            response: "Le nombre est introuvable"
        });
    }

    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        return res.status(400).json({
            error: true,
            response: "Les valeurs ne sont pas des nombres"
        });
    }

    let a = multiplication(n1, n2);
    return res.json([{ reponse: a }]);
});

/*   EXERCICE4 S1   */
app.post('/s1/exercice4', (req, res) => {
    if (req.body?.n1 === undefined || req.body?.n2 === undefined) {
        return res.status(400).json({
            error: true,
            response: "Le nombre est introuvable"
        });
    }

    const n1 = req.body.n1;
    const n2 = req.body.n2;

    if (n1 == null || n2 == null) {
        return res.status(400).json({
            error: true,
            response: "Les nombres sont introuvables"
        });
    }

    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        return res.status(400).json({
            error: true,
            response: "Les valeurs ne sont pas des nombres"
        });
    }

    if (n2 === 0) {
        return res.status(400).json({
            error: true,
            response: "La division par zéro n'est pas autorisée"
        });
    }

    let a = division(n1, n2);
    return res.json([{ reponse: a }]);
});

/*   EXERCICE5 S1   */
app.post('/s1/exercice5', (req, res) => {
    if (req.body?.n1 === undefined) {
        return res.status(400).json({
            error: true,
            response: "Le nombre est introuvable"
        });
    }

    const n1 = req.body.n1;

    if (n1 == null) {
        return res.status(400).json({
            error: true,
            response: "Le nombre est introuvable"
        });
    }

    if (typeof n1 !== 'number') {
        return res.status(400).json({
            error: true,
            response: "La valeur n'est pas un nombre"
        });
    }

    if (n1 < 0) {
        return res.status(400).json({
            error: true,
            response: "La factorielle n'est définie que pour les nombres positifs ou nuls"
        });
    }

    let a = factorielle(n1);
    return res.json([{ reponse: a }]);
});

/*   EXERCICE6 S1   */
app.post('/s1/exercice6', (req, res) => {
    if (req.body?.n1 === undefined) {
        return res.status(400).json({
            error: true,
            response: "Le nombre est introuvable"
        });
    }

    const n1 = req.body.n1;

    if (n1 == null) {
        return res.status(400).json({
            error: true,
            response: "Le nombre est introuvable"
        });
    }

    if (typeof n1 !== 'number') {
        return res.status(400).json({
            error: true,
            response: "La valeur n'est pas un nombre"
        });
    }

    let a = estPairOuImpair(n1);
    return res.json([{ reponse: a }]);
});

/*   EXERCICE7 S1   */
app.post('/s1/exercice7', (req, res) => {
    if (req.body?.n1 === undefined) {
        return res.status(400).json({
            error: true,
            response: "Le nombre est introuvable"
        });
    }

    const n1 = req.body.n1;

    if (n1 == null) {
        return res.status(400).json({
            error: true,
            response: "Le nombre est introuvable"
        });
    }

    if (typeof n1 !== 'number') {
        return res.status(400).json({
            error: true,
            response: "La valeur n'est pas un nombre"
        });
    }

    let a = celsiusEnFahrenheit(n1);
    return res.json([{ reponse: a }]);
});

/*   EXERCICE8 S1   */
app.post('/s1/exercice8', (req, res) => {
    if (req.body?.n1 === undefined) {
        return res.status(400).json({
            error: true,
            response: "Le nombre est introuvable"
        });
    }

    const n1 = req.body.n1;

    if (n1 == null) {
        return res.status(400).json({
            error: true,
            response: "Le nombre est introuvable"
        });
    }

    if (typeof n1 !== 'number' || n1 <= 0) {
        return res.status(400).json({
            error: true,
            response: "La valeur doit être un nombre positif"
        });
    }

    let a = aireCercle(n1);
    return res.json([{ reponse: a }]);
});

/*   EXERCICE9 S1   */
app.post('/s1/exercice9', (req, res) => {
    if (req.body?.n1 === undefined) {
        return res.status(400).json({
            error: true,
            response: "Le nombre est introuvable"
        });
    }

    const n1 = req.body.n1;

    if (n1 == null) {
        return res.status(400).json({
            error: true,
            response: "Le mot est introuvable"
        });
    }

    if (typeof n1 !== 'string' || n1.trim() === '') {
        return res.status(400).json({
            error: true,
            response: "Le mot doit être une chaîne de caractères non vide"
        });
    }

    let a = estPalindrome(n1);
    return res.json([{ reponse: a }]);
});

/*   EXERCICE10 S1   */
app.post('/s1/exercice10', (req, res) => {
    if (req.body?.n1 === undefined || req.body?.n2 === undefined) {
        return res.status(400).json({
            error: true,
            response: "Le nombre est introuvable"
        });
    }

    const n1 = req.body.n1;
    const n2 = req.body.n2;

    if (n1 == null || n2 == null) {
        return res.status(400).json({
            error: true,
            response: "Les nombres sont introuvables"
        });
    }

    if (typeof n1 !== 'number' || typeof n2 !== 'number' || isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({
            error: true,
            response: "Les nombres doivent être des valeurs numériques valides"
        });
    }

    let a = pgcd(n1, n2);
    return res.json([{ reponse: a }]);
});

/*   EXERCICE1 S2   */
app.post('/s2/exercice1', (req, res) => {
    return res.json([{ reponse: dateIlYADixAns() }]);
});

/*   EXERCICE2 S2   */
app.post('/s2/exercice2', (req, res) => {
    if (req.body?.date === undefined || req.body.date === null) {
        return res.status(400).json({
            error: true,
            response: "Date introuvable"
        });
    }

    const date = new Date(req.body.date);
    

    if (isNaN(date.getTime())) {
        return res.status(400).json({ 
            error: true,
            response: "Date introuvable" 
        });
    }

    const formattedDate = formaterDate(date);

    return res.json([{ reponse: formattedDate }]);
});

/*   EXERCICE3 S2   */
app.post('/s2/exercice3', (req, res) => {
    if (req.body?.date1 === undefined || req.body?.date2 === undefined) {
        return res.status(400).json({
            error: true,
            response: "Date introuvable"
        });
    }

    const date1 = new Date(req.body.date1);
    const date2 = new Date(req.body.date2);

    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        return res.status(400).json({ 
            error: true,
            response: "Date introuvable" 
        });
    }

    const difference = differenceEnJours(date1, date2);

    return res.json([{ reponse: difference }]);
});

/*   EXERCICE4 S2   */
app.post('/s2/exercice4', (req, res) => {
    if (req.body?.date === undefined || req.body?.jours === undefined) {
        return res.status(400).json({
            error: true,
            response: "Valeurs incorrects"
        });
    }
    const date = new Date(req.body.date);
    const jours = req.body.jours;

    if (isNaN(date.getTime()) || isNaN(jours)) {
        return res.status(400).json({ 
            error: true,
            response: "Valeurs incorrects" 
        });
    }

    const nouvelleDate = ajouterJours(date, jours);

    return res.json([{ reponse: nouvelleDate }]);
});

/*   EXERCICE5 S2   */
app.post('/s2/exercice5', (req, res) => {
    const annee = req.body.annee;

    if (isNaN(annee)) {
        return res.status(400).json({ 
            error: true,
            response: "Année invalide" 
        });
    }

    const estBissextile = estAnneeBissextile(annee);
    return res.json([{ reponse: estBissextile }]);
});

/*   EXERCICE6 S2   */
app.post('/s2/exercice6', (req, res) => {
    if (req.body?.date === undefined || req.body.date === null) {
        return res.status(400).json({
            error: true,
            response: "Date introuvable"
        });
    }

    const date = new Date(req.body.date);

    if (isNaN(date.getTime())) {
        return res.status(400).json({ 
            error: true,
            response: "Date introuvable" 
        });
    }

    const premierJour = premierJourDuMois(date);

    return res.json([{ reponse: premierJour.toISOString() }]);
});

/*   EXERCICE7 S2   */
app.post('/s2/exercice7', (req, res) => {
    if (req.body?.date === undefined || req.body.date === null) {
        return res.status(400).json({
            error: true,
            response: "Date introuvable"
        });
    }

    const date = new Date(req.body.date);

    if (isNaN(date.getTime())) {
        return res.status(400).json({ 
            error: true,
            response: "Date introuvable" 
        });
    }

    const dernierJour = dernierJourDuMois(date);

    return res.json([{ reponse: dernierJour.toISOString() }]);
});

/*   EXERCICE8 S2   */
app.post('/s2/exercice8', (req, res) => {
    if (req.body?.heures === undefined || req.body?.minutes === undefined) {
        return res.status(400).json({
            error: true,
            response: "Données de durée invalides"
        });
    }
    const heures = req.body.heures;
    const minutes = req.body.minutes;

    if (typeof heures !== 'number' || typeof minutes !== 'number' || isNaN(heures) || isNaN(minutes)) {
        return res.status(400).json({ 
            error: true,
            response: "Données de durée invalides" 
        });
    }

    const dureeFormatee = formaterDuree(heures, minutes);

    return res.json([{ reponse: dureeFormatee }]);
});

/*   EXERCICE9 S2   */
app.post('/s2/exercice9', (req, res) => {
    if (req.body?.debut1 === undefined || req.body.fin1 === null || req.body?.debut2 === undefined || req.body.fin2 === null) {
        return res.status(400).json({
            error: true,
            response: "Dates introuvables"
        });
    }

    const debut1 = new Date(req.body.debut1);
    const fin1 = new Date(req.body.fin1);
    const debut2 = new Date(req.body.debut2);
    const fin2 = new Date(req.body.fin2);

    if (debut1 === null || fin1 === null || debut2 === undefined || fin2 === null) {
        return res.status(400).json({
            error: true,
            response: "Dates introuvables"
        });
    }

    if ( isNaN(new Date(debut1).getTime()) || isNaN(new Date(fin1).getTime()) ||
        isNaN(new Date(debut2).getTime()) || isNaN(new Date(fin2).getTime())) {
        return res.status(400).json({ 
            error: true,
            response: "Dates introuvables" 
        });
    }

    const chevauchement = chevauchementDates(debut1, fin1, debut2, fin2);

    return res.json([{ reponse: chevauchement }]);
});

/*   EXERCICE10 S2   */
app.post('/s2/exercice10', (req, res) => {
    if (req.body?.dateNaissance === undefined || req.body?.dateNaissance === null) {
        return res.status(400).json({
            error: true,
            response: "Date de naissance introuvable"
        });
    }
    const dateNaissance = new Date(req.body.dateNaissance);

    if (isNaN(dateNaissance.getTime())) {
        return res.status(400).json({ 
            error: true,
            response: "Date de naissance introuvable" 
        });
    }

    const age = calculerAge(dateNaissance);

    return res.json([{ reponse: age }]);
});


app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

module.exports = app


