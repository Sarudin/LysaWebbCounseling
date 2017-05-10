const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const passport = require('passport');

const conn = massive.connectSync({
  connectionString: "postgres://postgres:bigbrush1@localhost/LysaWebbCounseling"
});

const app = express();

app.use(express.static(__dirname + '/../dist'))
app.use(bodyParser.json());
app.set('db', conn);

const db = app.get('db');
const port = 4242;

app.get('/clients/all', (req, res, next) => {
  db.viewAllClients((err, response) => {
    if (!err) {
      res.status(200).send(response)
    }
  });
});

app.get('/clients/allInfo', (req, res, next) => {
  db.viewAllClientInfo((err, response) => {
    if (!err) {
      res.status(200).send(response);
    }
  });
});

app.post('/clients/addNew', (req, res, next) => {
  db.createClient([req.body.firstName, req.body.lastName], (err) => {
    if (err) {
      console.log(err);
    }
    else {
      db.getNewClientId([req.body.firstName, req.body.lastName], (err, response) => {
        if (!err) {
          db.createNewClientInfo([response[0].id, req.body.phone, req.body.email], (err) => {
            if (!err) {
              res.status(200).send("Client added successfully.");
            }
          });
        }
      });
    }
  });
});

app.post('/clients/edit', (req, res, next) => {
  db.editClientInfo([req.body.id, req.body.phone, req.body.email], (err) => {
    if (!err) {
      res.status(200).send();
    }
  })
})

app.post('/clients/deleteone', (req, res, next) => {
  db.getClientId([req.body.firstName, req.body.lastName], (err, response) => {
    if (!err) {
      db.deleteClientInfo([response[0].id], (err) => {
        if (!err) {
          db.deleteClient([response[0].id], (err) => {
            if (!err) {
              res.status(200).send("Client deleted successfully.");
            }
          });
        }
      })
    }
  })
});

app.post('/clients/one', (req, res, next) => {
  db.viewClient([req.body.firstName + '%', req.body.lastName + '%'], (err, response) => {
    if (!err) {
      res.status(200).send(response);
    }
    else {
      console.log(err);
    }
  })
});

app.get('/clients/search', (req, res, next) => {
  db.searchClients([req.query.firstName, req.query.lastName], (err, response) => {
    if (!err) {
      res.status(200).send(response);
    }
  })
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`)
})
