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
  console.log("in /clients/all");
  db.viewAllClients((err, clients) => {
    if (!err) {
      res.status(200).send(clients)
    }
  });
});

app.get('/clients/allInfo', (req, res, next) => {
  db.viewAllClientInfo((err, clients) => {
    if (!err) {
      res.status(200).send(clients);
    }
  });
});

app.post('/clients/addNew', (req, res, next) => {
  console.log(req.body);
  db.createClient([req.body.firstName, req.body.lastName], (err) => {
    if (err) {
      console.log(err);
    }
    else {
      db.getNewClientId([req.body.firstName, req.body.lastName], (err, response) => {
        if (!err) {
          db.createNewClientInfo([response[0].id, req.body.phone, req.body.email], (err) => {
            if (!err) {
              res.status(200).send("Success!!");
            }
            else {
              console.log(err);
            }
          });
        }
        else {
          console.log(err);
        }
      });
    }
  });
});

app.delete('/clients/one', (req, res, next) => {
  db.deleteClient([req.query.id], (err) => {
    if (!err) {
      res.status(200).send();
    }
  })
});

app.get('/clients/one', (req, res, next) => {
  db.viewClient([req.query.id], (err, client) => {
    if (!err) {
      res.status(200).send(client);
    }
  })
});

app.get('/clients/search', (req, res, next) => {
  db.searchClients([req.query.firstName, req.query.lastName], (err, clients) => {
    if (!err) {
      res.status(200).send(clients);
    }
  })
});

app.put('/clients/update', (req, res, next) => {
  db.editClient([req.body.firstName, req.body.lastName, req.body.id], (err) => {
    if (!err) {
      res.status(200).send();
    }
  })
})

app.listen(port, () => {
  console.log(`Now listening on port ${port}`)
})
