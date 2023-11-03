const request = require("supertest");
const app = require("./index");

// describe("GET /", () => {
//   test("Test 1", (done) => {
//     request(app)
//       .get("/")
//       .expect(200)
//       .end((err, res) => {
//         if (err) return done(err);
//         expect(res.body).toEqual([{ id: 1, name: "John Doe" }]);
//         done();
//       });
//   });
// });

// describe("POST /:param", () => {
//   test("Test 1/2", (done) => {
//     request(app)
//       .post("/1")
//       .expect(200)
//       .end((err, res) => {
//         if (err) return done(err);
//         expect(res.body).toEqual([{ error: false, num: "1" }]);
//         done();
//       });
//   });
// });

// exerice 1 S1
describe("POST /s1/exercice1", () => {
  test("Si n1 ou n2 sont undefined", (done) => {
    request(app)
      .post("/s1/exercice1")
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

  test("Si n1 est null", (done) => {
    request(app)
      .post("/s1/exercice1")
      .send({ n1: null, n2: 2 })
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

  test("si n2 est null", (done) => {
    request(app)
      .post("/s1/exercice1")
      .send({ n1: 2, n2: null })
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

  test("Calcule la somme si n1 et n2 sont valides", (done) => {
    request(app)
      .post("/s1/exercice1")
      .send({ n1: 2, n2: 2 })
      .expect(200)
      .end((err, response) => {
        if (err) return done(err);
        expect(response.body).toEqual([{ reponse: 4 }]);
        done();
      });
  });
});

//exercice 2 s1
describe("POST /s1/exercice2", () => {
  test("Si n1 ou n2 sont undefined", (done) => {
    request(app)
      .post("/s1/exercice2")
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

  test("Si n1 est null", (done) => {
    request(app)
      .post("/s1/exercice2")
      .send({ n1: null, n2: 2 })
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

  test("si n2 est null", (done) => {
    request(app)
      .post("/s1/exercice1")
      .send({ n1: 2, n2: null })
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

  test("Calcule la soustration si n1 et n2 sont valides", (done) => {
    request(app)
      .post("/s1/exercice2")
      .send({ n1: 10, n2: 8 })
      .expect(200)
      .end((err, response) => {
        if (err) return done(err);
        expect(response.body).toEqual([{ reponse: 2 }]);
        done();
      });
  });
});

// exerice 3 s1
describe('POST /s1/exercice3', () => {
    test('si n1 est null', (done) => {
        request(app)
            .post('/s1/exercice3')
            .send({ n1: null, n2: 3 })
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

    test('Calcule la multiplication si n2 est null', (done) => {
        request(app)
            .post('/s1/exercice3')
            .send({ n1: 2, n2: null })
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

    test('si n1 et n2 sont null', (done) => {
        request(app)
            .post('/s1/exercice3')
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

    test('Calcule la multiplication si n1 et n2 sont valides', (done) => {
        request(app)
            .post('/s1/exercice3')
            .send({ n1: 2, n2: 3 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{reponse: 6}]);
                done();
            });
    });
});


//exerice 4 s1
describe('POST /s1/exercice4', () => {
    test('si n1 est null', (done) => {
        request(app)
            .post('/s1/exercice4')
            .send({ n1: null, n2: 2 })
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

    test('si n2 est null', (done) => {
        request(app)
            .post('/s1/exercice4')
            .send({ n1: 6, n2: null })
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

    test('si n1 et n2 sont null', (done) => {
        request(app)
            .post('/s1/exercice4')
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

    test('Calcule la division si n1 et n2 sont valides', (done) => {
        request(app)
            .post('/s1/exercice4')
            .send({ n1: 6, n2: 2 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{reponse: 3}]);
                done();
            });
    });
});

//exerice5 s1
describe('POST /s1/exercice5', () => {
    test('si n1 est null', (done) => {
        request(app)
            .post('/s1/exercice5')
            .send({ n1: null })
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

    test('Calcule la factorielle si n1 est valide', (done) => {
        request(app)
            .post('/s1/exercice5')
            .send({ n1: 5 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{reponse: 120}]);
                done();
            });
    });
});

//exercice 6 s1
describe('POST /s1/exercice6', () => {
    test('si n1 est null', (done) => {
        request(app)
            .post('/s1/exercice6')
            .send({ n1: null })
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

    test('si n1 est impair si n1 est valide', (done) => {
        request(app)
            .post('/s1/exercice6')
            .send({ n1: 5 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{reponse: "impair"}]);
                done();
            });
    });

    test('si n1 est pair si n1 est valide', (done) => {
        request(app)
            .post('/s1/exercice6')
            .send({ n1: 6 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{reponse: "pair"}]);
                done();
            });
    });
});

//exerice7 s1
describe('POST /s1/exercice7', () => {
    test('si n1 est null', (done) => {
        request(app)
            .post('/s1/exercice7')
            .send({ n1: null })
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

    test('conversion Celsius en Fahrenheit si n1 est valide', (done) => {
        request(app)
            .post('/s1/exercice7')
            .send({ n1: 20 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{reponse: 68}]);
                done();
            });
    });
});

//exercice 8 s1
describe('POST /s1/exercice8', () => {
    test('si n1 est null', (done) => {
        request(app)
            .post('/s1/exercice8')
            .send({ n1: null })
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

    test("Calcule l'aire si n1 est valide", (done) => {
        request(app)
            .post('/s1/exercice8')
            .send({ n1: 3 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{reponse: 28.274333882308138}]);
                done();
            });
    });
});

//exercice 9 s1
describe('POST /s1/exercice9', () => {
    test('si mot est null', (done) => {
        request(app)
            .post('/s1/exercice9')
            .send({ n1: null })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({ 
                    error: true, 
                    response: "Le mot est introuvable" 
                });
                done();
            });
    });

    test('si mot est un palindrome', (done) => {
        request(app)
            .post('/s1/exercice9')
            .send({ n1: "radar" })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{reponse: true}]);
                done();
            });
    });

    test("si mot n'est pas un palindrome", (done) => {
        request(app)
            .post('/s1/exercice9')
            .send({ n1: "hello" })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{reponse: false}]);
                done();
            });
    });
});

//exerice 10 s1
describe('POST /s1/exercice10', () => {
    test('si les nombres sont null', (done) => {
        request(app)
            .post('/s1/exercice10')
            .send({ n1: null, n2: null })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({ 
                    error: true, 
                    response: "Les nombres sont introuvables" 
                });
                done();
            });
    });

    test('si n1 est null', (done) => {
        request(app)
            .post('/s1/exercice10')
            .send({ n1: null, n2: 18 })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({ 
                    error: true, 
                    response: "Les nombres sont introuvables" 
                });
                done();
            });
    });

    test('si n2 est null', (done) => {
        request(app)
            .post('/s1/exercice10')
            .send({ n1: 48, n2: null })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({ 
                    error: true, 
                    response: "Les nombres sont introuvables" 
                });
                done();
            });
    });

    test('Calcul du PGCD de deux nombres', (done) => {
        request(app)
            .post('/s1/exercice10')
            .send({ n1: 48, n2: 18 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{reponse: 6}]);
                done();
            });
    });
});

// exercice1 S2
describe('POST /s2/exercice1', () => {
    test('il y a 10 ans', (done) => {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 10);
    const annee = currentDate.getFullYear();
    const mois = String(currentDate.getMonth() + 1).padStart(2, '0');
    const jour = String(currentDate.getDate()).padStart(2, '0');
    const dateIlYADixAns =  `${jour}/${mois}/${annee}`;
        request(app)
            .post('/s2/exercice1')
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: dateIlYADixAns }]);
                done();
            });
    });
});

//exerice2 s2
describe('POST /s2/exercice2', () => {
    test('Date introuvable', (done) => {
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

    test('Formater la date en "jj/mm/aaaa"', (done) => {
        const date = new Date("2023-11-02"); 
        request(app)
            .post('/s2/exercice2')
            .send({ date: date.toISOString() })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: '02/11/2023' }]);
                done();
            });
    });
});

//exercice3 S2
describe('POST /s2/exercice3', () => {
    test('Dates introuvables', (done) => {
        request(app)
            .post('/s2/exercice3')
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

    test('Calcul de la différence en jours entre deux dates', (done) => {
        const date1 = new Date("2023-11-03");
        const date2 = new Date("2023-11-06");
        const differenceEnJours = (date2 - date1) / (1000 * 60 * 60 * 24);
        request(app)
            .post('/s2/exercice3')
            .send({ date1: date1.toISOString(), date2: date2.toISOString() })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: differenceEnJours }]);
                done();
            });
    });
});

//exercice4 S2
describe('POST /s2/exercice4', () => {
    test('Valeurs incorrects', (done) => {
        request(app)
            .post('/s2/exercice4')
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({ 
                    error: true, 
                    response: "Valeurs incorrects" 
                });
                done();
            });
    });


    test('Ajouter un nombre de jours à une date', (done) => {
        const date = new Date("2023-11-01")
        const nbrJour = 3
        const newDate = new Date("2023-11-04")

        request(app)
            .post('/s2/exercice4')
            .send({ date: date.toISOString(), jours: nbrJour })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: newDate.toISOString() }]);
                done();
            });
    });
});


//exercice 5 s2
describe('POST /s2/exercice5', () => {
    test('Année invalide', (done) => {
        request(app)
            .post('/s2/exercice5')
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({ 
                    error: true, 
                    response: "Année invalide" 
                });
                done();
            });
    });

    test('Année bissextile', (done) => {
        request(app)
            .post('/s2/exercice5')
            .send({ annee: 2024 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: true }]);
                done();
            });
    });

    test('Année non bissextile', (done) => {
        request(app)
            .post('/s2/exercice5')
            .send({ annee: 2022 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: false }]);
                done();
            });
    });
});

//exercice 6 s2
describe('POST /s2/exercice6', () => {
    test('Date introuvable', (done) => {
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

    test('Le premier jour du mois', (done) => {
        const dateAEnvoyer = new Date(2023, 10, 15); 
        request(app)
            .post('/s2/exercice6')
            .send({ date: dateAEnvoyer.toISOString() })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                const premierJourAttendu = new Date(2023, 10, 1).toISOString();
                expect(response.body).toEqual([{ reponse: premierJourAttendu }]);
                done();
            });
    });
});


//exercice 7 S2
describe('POST /s2/exercice7', () => {
    test('Date introuvable', (done) => {
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

    test('Obtenir le dernier jour du mois', (done) => {
        const dateAEnvoyer = new Date(2023, 10, 15); 
        request(app)
            .post('/s2/exercice7')
            .send({ date: dateAEnvoyer.toISOString() })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                const dernierJourAttendu = new Date(2023, 10, 30).toISOString();
                expect(response.body).toEqual([{ reponse: dernierJourAttendu }]);
                done();
            });
    });
});


//exercice 8 S2
describe('POST /s2/exercice8', () => {
    test('Données de durée invalides', (done) => {
        request(app)
            .post('/s2/exercice8')
            .send({ heures: 'a', minutes: 30 })
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({ 
                    error: true, 
                    response: "Données de durée invalides" 
                });
                done();
            });
    });

    test('Formater la durée en heures et minutes', (done) => {
        request(app)
            .post('/s2/exercice8')
            .send({ heures: 2, minutes: 30 })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: '2 heures et 30 minutes' }]);
                done();
            });
    });
});

//exercice 9 s2
describe('POST /s2/exercice9', () => {
    test('Dates introuvables', (done) => {
        request(app)
            .post('/s2/exercice9')
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({ 
                    error: true, 
                    response: "Dates introuvables" 
                });
                done();
            });
    });

    test('si deux plages de dates se chevauchent (true)', (done) => {
        request(app)
            .post('/s2/exercice9')
            .send({ debut1: '2023-01-01', fin1: '2023-02-28', debut2: '2023-02-01', fin2: '2023-03-31' })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: true }]);
                done();
            });
    });

    test('si deux plages de dates ne se chevauchent pas (false)', (done) => {
        request(app)
            .post('/s2/exercice9')
            .send({ debut1: '2023-01-01', fin1: '2023-02-28', debut2: '2023-03-01', fin2: '2023-03-31' })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: false }]);
                done();
            });
    });
});

//exercice 10
describe('POST /s2/exercice10', () => {
    test('Date de naissance introuvable', (done) => {
        request(app)
            .post('/s2/exercice10')
            .expect(400)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual({ 
                    error: true, 
                    response: "Date de naissance introuvable" 
                });
                done();
            });
    });

    test("Calculer l'âge à partir de la date de naissance", (done) => {
        request(app)
            .post('/s2/exercice10')
            .send({ dateNaissance: '1990-05-20' })
            .expect(200)
            .end((err, response) => {
                if (err) return done(err);
                expect(response.body).toEqual([{ reponse: 33 }]); // Âge approximatif
                done();
            });
    });
});










