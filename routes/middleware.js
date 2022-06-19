import firebaseAdmin from '../firebaseConfig'


export const checkAuth = (req, res, next) => {
    if (req.headers.authtoken) {
        firebaseAdmin.auth().verifyIdToken(req.headers.authtoken)
        .then(() => {
          next()
        }).catch(() => {
          res.status(403).send('Unauthorized')
        });
    } else {
      res.status(403).send('Unauthorized')
    }
  }