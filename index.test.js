const request = require("supertest");
const app = require("./index");

describe("GET /", () => {
    test("Test 1", (done) => {
        request(app)
            .get("/")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ id: 1, name: "John Doe" }]);
                done();
            });
    });
});

describe("POST /:param", () => {
    test("Test 1/2", (done) => {
        request(app)
            .post("/1")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ error: false, num: "1" }]);
                done();
            });
    });
});

/*   EXERCICE1 S1   */
describe('POST /s1/exercice1', () => {
    test('Paramètres manquants (undefined)', (done) => {
        request(app)
            .post('/s1/exercice1')
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable"
                });
                done();
            });
    });

    test('n1 et n2 sont null', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({ n1: null, n2: null })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable"
                });
                done();
            });
    });

    test('n1 null', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({ n1: null, n2: 5 })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable"
                });
                done();
            });
    });

    test('n2 null', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({ n1: 5, n2: null })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable"
                });
                done();
            });
    });

    test('n1 est une chaine de caractere', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({ n1: "a", n2: 5 })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Les valeurs ne sont pas des nombres"
                });
                done();
            });
    });

    test('n2 est une chaine de caractere', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({ n1: 5, n2: 'a' })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Les valeurs ne sont pas des nombres"
                });
                done();
            });
    });

    test('Addition de deux nombres', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({ n1: 3, n2: 5 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: 8 }]);
                done();
            });
    });
});


/*   EXERCICE2 S1   */
describe("POST /s1/exercice2", () => {
    test('Paramètres manquants (undefined)', (done) => {
        request(app)
            .post('/s1/exercice2')
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable"
                });
                done();
            });
    });

    test("n1 et n2 sont null", (done) => {
        request(app)
            .post("/s1/exercice2")
            .send({ n1: null, n2: null })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable",
                });
                done();
            });
    });
    
    test("n1 est null", (done) => {
        request(app)
            .post("/s1/exercice2")
            .send({ n1: null, n2: 5 })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable",
                });
                done();
            });
    });

    test("n2 est null", (done) => {
        request(app)
            .post("/s1/exercice2")
            .send({ n1: 5, n2: null })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable",
                });
                done();
            });
    });

    test("n1 est une chaine de caractère", (done) => {
        request(app)
            .post("/s1/exercice2")
            .send({ n1: "abc", n2: 5 })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Les valeurs ne sont pas des nombres",
                });
                done();
            });
    });

    test("n2 est une chaine de caractère", (done) => {
        request(app)
            .post("/s1/exercice2")
            .send({ n1: 5, n2: 'abc' })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Les valeurs ne sont pas des nombres",
                });
                done();
            });
    });

    test("Calcul de la soustraction", (done) => {
        request(app)
            .post("/s1/exercice2")
            .send({ n1: 10, n2: 5 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: 5 }]);
                done();
            });
    });
});

/*   EXERCICE3 S1   */
describe("POST /s1/exercice3", () => {
    test('Paramètres manquants (undefined)', (done) => {
        request(app)
            .post('/s1/exercice3')
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable"
                });
                done();
            });
    });

    test("n1 et n2 sont null", (done) => {
        request(app)
            .post("/s1/exercice3")
            .send({ n1: null, n2: null })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable",
                });
                done();
            });
    });

    test("n1 est null", (done) => {
        request(app)
            .post("/s1/exercice3")
            .send({ n1: null, n2: 5 })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable",
                });
                done();
            });
    });

    test("n2 est null", (done) => {
        request(app)
            .post("/s1/exercice3")
            .send({ n1: 5, n2: null })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable",
                });
                done();
            });
    });

    test("n1 est une chaine de caractère", (done) => {
        request(app)
            .post("/s1/exercice3")
            .send({ n1: "abc", n2: 5 })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Les valeurs ne sont pas des nombres",
                });
                done();
            });
    });

    test("n2 est une chaine de caractère", (done) => {
        request(app)
            .post("/s1/exercice3")
            .send({ n1: 5, n2: 'abc' })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Les valeurs ne sont pas des nombres",
                });
                done();
            });
    });

    test("Calcul de la multiplication", (done) => {
        request(app)
            .post("/s1/exercice3")
            .send({ n1: 10, n2: 5 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: 50 }]);
                done();
            });
    });
});

/*   EXERCICE4 S1   */
describe("POST /s1/exercice4", () => {
    test('Paramètres manquants (undefined)', (done) => {
        request(app)
            .post('/s1/exercice4')
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable"
                });
                done();
            });
    });

    test("n1 et n2 sont null", (done) => {
        request(app)
            .post("/s1/exercice4")
            .send({ n1: null, n2: null })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Les nombres sont introuvables",
                });
                done();
            });
    });

    test("n1 est null", (done) => {
        request(app)
            .post("/s1/exercice4")
            .send({ n1: null, n2: 5 })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Les nombres sont introuvables",
                });
                done();
            });
    });

    test("n2 est null", (done) => {
        request(app)
            .post("/s1/exercice4")
            .send({ n1: 5, n2: null })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Les nombres sont introuvables",
                });
                done();
            });
    });

    test("n1 est une chaine de caractère", (done) => {
        request(app)
            .post("/s1/exercice4")
            .send({ n1: "abc", n2: 5 })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Les valeurs ne sont pas des nombres",
                });
                done();
            });
    });

    test("n2 est une chaine de caractère", (done) => {
        request(app)
            .post("/s1/exercice4")
            .send({ n1: 5, n2: "abc" })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Les valeurs ne sont pas des nombres",
                });
                done();
            });
    });

    test("division par zéro", (done) => {
        request(app)
            .post("/s1/exercice4")
            .send({ n1: 10, n2: 0 })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "La division par zéro n'est pas autorisée",
                });
                done();
            });
    });

    test("Calcul de la division", (done) => {
        request(app)
            .post("/s1/exercice4")
            .send({ n1: 10, n2: 2 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: 5 }]);
                done();
            });
    });
});

/*   EXERCICE5 S1   */
describe("POST /s1/exercice5", () => {
    test('n1 manquant (undefined)', (done) => {
        request(app)
            .post('/s1/exercice5')
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable"
                });
                done();
            });
    });

    test('n1 est null', (done) => {
        request(app)
            .post('/s1/exercice5')
            .expect(400)
            .send({n1: null})
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable"
                });
                done();
            });
    });

    test("n1 est une chaine de caractère", (done) => {
        request(app)
            .post("/s1/exercice5")
            .send({ n1: "abc" })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "La valeur n'est pas un nombre",
                });
                done();
            });
    });

    test("n1 est négatif", (done) => {
        request(app)
            .post("/s1/exercice5")
            .send({ n1: -5 })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response:
                        "La factorielle n'est définie que pour les nombres positifs ou nuls",
                });
                done();
            });
    });

    test("Calcul de la factorielle", (done) => {
        request(app)
            .post("/s1/exercice5")
            .send({ n1: 5 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: 120 }]);
                done();
            });
    });
});

/*   EXERCICE6 S1   */
describe("POST /s1/exercice6", () => {
    test('n1 manquant (undefined)', (done) => {
        request(app)
            .post('/s1/exercice6')
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable"
                });
                done();
            });
    });

    test("n1 est null", (done) => {
        request(app)
            .post("/s1/exercice6")
            .send({ n1: null })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable",
                });
                done();
            });
    });

    test("n1 est une chaine de caractère", (done) => {
        request(app)
            .post("/s1/exercice6")
            .send({ n1: "abc" })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "La valeur n'est pas un nombre",
                });
                done();
            });
    });

    test("n1 est pair", (done) => {
        request(app)
            .post("/s1/exercice6")
            .send({ n1: 8 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: "pair" }]);
                done();
            });
    });

    test("n1 est impair", (done) => {
        request(app)
            .post("/s1/exercice6")
            .send({ n1: 7 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: "impair" }]);
                done();
            });
    });
});

/*   EXERCICE7 S1   */
describe("POST /s1/exercice7", () => {
    test('n1 manquant (undefined)', (done) => {
        request(app)
            .post('/s1/exercice7')
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable"
                });
                done();
            });
    });

    test("n1 est null", (done) => {
        request(app)
            .post("/s1/exercice7")
            .send({ n1: null })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable",
                });
                done();
            });
    });

    test("n1 est une chaine de caractère", (done) => {
        request(app)
            .post("/s1/exercice7")
            .send({ n1: "abc" })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "La valeur n'est pas un nombre",
                });
                done();
            });
    });

    test("Conversion de degrés Celsius en Fahrenheit", (done) => {
        request(app)
            .post("/s1/exercice7")
            .send({ n1: 25 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: 77 }]);
                done();
            });
    });
});

/*   EXERCICE8 S1   */
describe("POST /s1/exercice8", () => {
    test("n1 est manquant (undefinded)", (done) => {
        request(app)
            .post("/s1/exercice8")
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable",
                });
                done();
            });
    });

    test("n1 est null", (done) => {
        request(app)
            .post("/s1/exercice8")
            .send({ n1: null })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable",
                });
                done();
            });
    });

    test("n1 est négatif", (done) => {
        request(app)
            .post("/s1/exercice8")
            .send({ n1: -5 })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "La valeur doit être un nombre positif",
                });
                done();
            });
    });

    test("n1 une chaine de caractère", (done) => {
        request(app)
            .post("/s1/exercice8")
            .send({ n1: "abc" })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "La valeur doit être un nombre positif",
                });
                done();
            });
    });

    test("Calcul de l'aire d'un cercle", (done) => {
        request(app)
            .post("/s1/exercice8")
            .send({ n1: 3 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([
                    { reponse: 28.274333882308138 },
                ]);
                done();
            });
    });
});

/*   EXERCICE9 S1   */
describe("POST /s1/exercice9", () => {
    test("Le mot est manquant (undefinded)", (done) => {
        request(app)
            .post("/s1/exercice9")
            .send({ n1: null })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le mot est introuvable",
                });
                done();
            });
    });

    test("Le mot est null", (done) => {
        request(app)
            .post("/s1/exercice9")
            .send({ n1: null })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le mot est introuvable",
                });
                done();
            });
    });

    test("le mot est un nombre", (done) => {
        request(app)
            .post("/s1/exercice9")
            .send({ n1: 12345 })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response:
                        "Le mot doit être une chaîne de caractères non vide",
                });
                done();
            });
    });

    test("le mot est un palindrome", (done) => {
        request(app)
            .post("/s1/exercice9")
            .send({ n1: "radar" })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: true }]);
                done();
            });
    });

    test("le mot n'est pas un palindrome", (done) => {
        request(app)
            .post("/s1/exercice9")
            .send({ n1: "hello" })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: false }]);
                done();
            });
    });
});

/*   EXERCICE10 S1   */
describe("POST /s1/exercice10", () => {
    test('Paramètres manquants (undefined)', (done) => {
        request(app)
            .post('/s1/exercice10')
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Le nombre est introuvable"
                });
                done();
            });
    });

    test("n1 et n2 sont null", (done) => {
        request(app)
            .post("/s1/exercice10")
            .send({ n1: null, n2: null })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Les nombres sont introuvables",
                });
                done();
            });
    });

    test("n1 est null", (done) => {
        request(app)
            .post("/s1/exercice10")
            .send({ n1: null, n2: 15 })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Les nombres sont introuvables",
                });
                done();
            });
    });

    test("n2 est null", (done) => {
        request(app)
            .post("/s1/exercice10")
            .send({ n1: 48, n2: null })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Les nombres sont introuvables",
                });
                done();
            });
    });

    test("n1 est une chaine de caractère", (done) => {
        request(app)
            .post("/s1/exercice10")
            .send({ n1: "abc", n2: 15 })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response:
                        "Les nombres doivent être des valeurs numériques valides",
                });
                done();
            });
    });

    test("n2 est une chaine de caractère", (done) => {
        request(app)
            .post("/s1/exercice10")
            .send({ n1: 15, n2: 'abc' })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response:
                        "Les nombres doivent être des valeurs numériques valides",
                });
                done();
            });
    });

    test("Calcul du PGCD de deux nombres", (done) => {
        request(app)
            .post("/s1/exercice10")
            .send({ n1: 48, n2: 18 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: 6 }]);
                done();
            });
    });
});

/*   EXERCICE1 S2   */
describe("POST /s2/exercice1", () => {
    test("il y a 10 ans", (done) => {
        const currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear() - 10);
        const annee = currentDate.getFullYear();
        const mois = String(currentDate.getMonth() + 1).padStart(2, "0");
        const jour = String(currentDate.getDate()).padStart(2, "0");
        const dateIlYADixAns = `${jour}/${mois}/${annee}`;
        request(app)
            .post("/s2/exercice1")
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: dateIlYADixAns }]);
                done();
            });
    });
});

/*   EXERCICE2 S2   */
describe("POST /s2/exercice2", () => {
    test('Date est manquante', (done) => {
        request(app)
            .post('/s2/exercice2')
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({ 
                    error: true, 
                    response: "Date introuvable" 
                });
                done();
            });
    });

    test('Date est null', (done) => {
        request(app)
            .post('/s2/exercice2')
            .send({date: null})
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({ 
                    error: true, 
                    response: "Date introuvable" 
                });
                done();
            });
    });

    test("Date mauvais format", (done) => {
        request(app)
            .post("/s2/exercice2")
            .send({ date: "date" })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Date introuvable",
                });
                done();
            });
    });

    test('Formater la date en "jj/mm/aaaa"', (done) => {
        const date = new Date("2023-11-02");
        request(app)
            .post("/s2/exercice2")
            .send({ date: date.toISOString() })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: "02/11/2023" }]);
                done();
            });
    });
});

/*   EXERCICE3 S2   */
describe("POST /s2/exercice3", () => {
    test("Paramètres manquants (undefined)", (done) => {
        request(app)
            .post("/s2/exercice3")
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Date introuvable",
                });
                done();
            });
    });

    test("Date 1 et 2 invalides", (done) => {
        request(app)
            .post("/s2/exercice3")
            .send({ date: "date", date2: "date" })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Date introuvable",
                });
                done();
            });
    });

    test("Date 1 invalide", (done) => {
        const date2 = new Date("2023-11-06");
        request(app)
            .post("/s2/exercice3")
            .send({ date: "date", date2: date2.toISOString() })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Date introuvable",
                });
                done();
            });
    });

    test("Date 2 invalide", (done) => {
        const date1 = new Date("2023-11-06");
        request(app)
            .post("/s2/exercice3")
            .send({ date: date1.toISOString(), date2: "date" })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Date introuvable",
                });
                done();
            });
    });

    test("Calcul de la différence en jours entre deux dates", (done) => {
        const date1 = new Date("2023-11-03");
        const date2 = new Date("2023-11-06");
        const differenceEnJours = (date2 - date1) / (1000 * 60 * 60 * 24);
        request(app)
            .post("/s2/exercice3")
            .send({ date1: date1.toISOString(), date2: date2.toISOString() })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: differenceEnJours }]);
                done();
            });
    });
});

/*   EXERCICE4 S2   */
describe("POST /s2/exercice4", () => {
    test("Paramètres manquants (undefined)", (done) => {
        request(app)
            .post("/s2/exercice4")
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Valeurs incorrects",
                });
                done();
            });
    });

    test("Données incorrects", (done) => {
        request(app)
            .post("/s2/exercice4")
            .send({ date: "date", jours: "jours" })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Valeurs incorrects",
                });
                done();
            });
    });

    test("Ajouter un nombre de jours à une date", (done) => {
        const date = new Date("2023-11-01");
        const nbrJour = 3;
        const newDate = new Date("2023-11-04");

        request(app)
            .post("/s2/exercice4")
            .send({ date: date.toISOString(), jours: nbrJour })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([
                    { reponse: newDate.toISOString() },
                ]);
                done();
            });
    });
});

/*   EXERCICE5 S2   */
describe("POST /s2/exercice5", () => {
    test("Année invalide", (done) => {
        request(app)
            .post("/s2/exercice5")
            .send({ date: "date" })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Année invalide",
                });
                done();
            });
    });

    test("Année bissextile", (done) => {
        request(app)
            .post("/s2/exercice5")
            .send({ annee: 2024 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: true }]);
                done();
            });
    });

    test("Année non bissextile", (done) => {
        request(app)
            .post("/s2/exercice5")
            .send({ annee: 2022 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: false }]);
                done();
            });
    });
});

/*   EXERCICE6 S2   */
describe("POST /s2/exercice6", () => {
    test('Date est manquante', (done) => {
        request(app)
            .post('/s2/exercice6')
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({ 
                    error: true, 
                    response: "Date introuvable" 
                });
                done();
            });
    });

    test('Date est null', (done) => {
        request(app)
            .post('/s2/exercice6')
            .send({date: null})
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({ 
                    error: true, 
                    response: "Date introuvable" 
                });
                done();
            });
    });

    test("Date introuvable", (done) => {
        request(app)
            .post("/s2/exercice6")
            .send({ date: "date" })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Date introuvable",
                });
                done();
            });
    });

    test("Le premier jour du mois", (done) => {
        const dateAEnvoyer = new Date(2023, 10, 15);
        request(app)
            .post("/s2/exercice6")
            .send({ date: dateAEnvoyer.toISOString() })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                const premierJourAttendu = new Date(2023, 10, 1).toISOString();
                expect(response.body).toEqual([
                    { reponse: premierJourAttendu },
                ]);
                done();
            });
    });
});

/*   EXERCICE7 S2   */
describe("POST /s2/exercice7", () => {
    test('Date est manquante', (done) => {
        request(app)
            .post('/s2/exercice7')
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({ 
                    error: true, 
                    response: "Date introuvable" 
                });
                done();
            });
    });

    test('Date est null', (done) => {
        request(app)
            .post('/s2/exercice7')
            .send({date: null})
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({ 
                    error: true, 
                    response: "Date introuvable" 
                });
                done();
            });
    });
    test("Date introuvable", (done) => {
        request(app)
            .post("/s2/exercice7")
            .send({ date: "date" })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Date introuvable",
                });
                done();
            });
    });

    test("Obtenir le dernier jour du mois", (done) => {
        const dateAEnvoyer = new Date(2023, 10, 15);
        request(app)
            .post("/s2/exercice7")
            .send({ date: dateAEnvoyer.toISOString() })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                const dernierJourAttendu = new Date(2023, 10, 30).toISOString();
                expect(response.body).toEqual([
                    { reponse: dernierJourAttendu },
                ]);
                done();
            });
    });
});

/*   EXERCICE8 S2   */
describe("POST /s2/exercice8", () => {
    test("Paramètres manquants (undefined)", (done) => {
        request(app)
            .post("/s2/exercice8")
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Données de durée invalides",
                });
                done();
            });
    });

    test("Données de durée invalides", (done) => {
        request(app)
            .post("/s2/exercice8")
            .send({ heures: "a", minutes: 30 })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Données de durée invalides",
                });
                done();
            });
    });

    test("Formater la durée en heures et minutes", (done) => {
        request(app)
            .post("/s2/exercice8")
            .send({ heures: 2, minutes: 30 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([
                    { reponse: "2 heures et 30 minutes" },
                ]);
                done();
            });
    });
});

/*   EXERCICE9 S2   */
describe("POST /s2/exercice9", () => {
    test("Paramètres manquants (undefined)", (done) => {
        request(app)
            .post("/s2/exercice9")
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Dates introuvables",
                });
                done();
            });
    });

    test("Les dates sont null", (done) => {
        request(app)
            .post("/s2/exercice9")
            .send({ debut1: null, fin1: null, debut2: null, fin2: null})
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Dates introuvables",
                });
                done();
            });
    });

    test("Debut1 et Fin1 sont null", (done) => {
        request(app)
            .post("/s2/exercice9")
            .send({ debut1: null, fin1: null, debut2: "2023-02-01", fin2: "2023-03-31"})
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Dates introuvables",
                });
                done();
            });
    });

    test("Debut2 et Fin2 sont null", (done) => {
        request(app)
            .post("/s2/exercice9")
            .send({ debut1: "2023-01-01", fin1: "2023-02-28", debut2: null, fin2: null})
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Dates introuvables",
                });
                done();
            });
    });

    test("Les dates sont au mauvais format", (done) => {
        request(app)
            .post("/s2/exercice9")
            .send({ debut1: "date", fin1: "date", debut2: "date", fin2: "date"})
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Dates introuvables",
                });
                done();
            });
    });

    test("si deux plages de dates se chevauchent (true)", (done) => {
        request(app)
            .post("/s2/exercice9")
            .send({
                debut1: "2023-01-01",
                fin1: "2023-02-28",
                debut2: "2023-02-01",
                fin2: "2023-03-31",
            })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: true }]);
                done();
            });
    });

    test("si deux plages de dates ne se chevauchent pas (false)", (done) => {
        request(app)
            .post("/s2/exercice9")
            .send({
                debut1: "2023-01-01",
                fin1: "2023-02-28",
                debut2: "2023-03-01",
                fin2: "2023-03-31",
            })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: false }]);
                done();
            });
    });
});

/*   EXERCICE10 S2   */
describe("POST /s2/exercice10", () => {
    test("Paramètre manquant (undefined)", (done) => {
        request(app)
            .post("/s2/exercice10")
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Date de naissance introuvable",
                });
                done();
            });
    });

    test("Date de naissance est null", (done) => {
        request(app)
            .post("/s2/exercice10")
            .send({ dateNaissance: null })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Date de naissance introuvable",
                });
                done();
            });
    });

    test("Date de naissance mauvais format", (done) => {
        request(app)
            .post("/s2/exercice10")
            .send({ dateNaissance: 'date' })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({
                    error: true,
                    response: "Date de naissance introuvable",
                });
                done();
            });
    });

    test("Calculer l'âge à partir de la date de naissance", (done) => {
        request(app)
            .post("/s2/exercice10")
            .send({ dateNaissance: "1990-05-20" })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: 33 }]); // Âge approximatif
                done();
            });
    });
});
