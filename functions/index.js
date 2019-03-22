const functions = require('firebase-functions');
const admin = require('firebase-admin')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
admin.initializeApp()
admin.firestore().settings({ timestampsInSnapshots: true })

exports.registrarTopico = functions.firestore
    .document('/tokens/{id}')
    .onCreate(dataSnapshot => {
        const token = dataSnapshot.data().token
        const registrationTokens = [token]

        return admin
            .messaging()
            .subscribeToTopic(registrationTokens, 'NuevosPosts')
            .then(() => {
                return console.log('Adiciona correctamente al topico');
            })
            .catch(error => {
                console.log(`Error al registrar el token`, error);
            })
    })


exports.enviarNotificacion = functions.firestore
    .document('/posts/{idPost}')
    .onCreate(dataSnapshot => {
        const titulo = dataSnapshot.data().titulo
        const descripcion = dataSnapshot.data().descripcion

        const mensaje = {
            data: {
                titulo: titulo,
                descripcion: descripcion
            },
            topic: 'NuevosPosts'
        }

        return admin
            .messaging()
            .send(mensaje)
            .then(() => {
                return console.log('Mensaje enviado correctamente');
            })
            .catch(error => {
                console.log('Error enviando mensaje ', error);
            })
    })