const controller = function(model) {

  function getEntries(req, res) {
    model.Entry.fetchAll().then(function(entries) {
      // console.log(entries.serialize());
      res.render('entries', {entries: entries.serialize()});
    });
  }

  function getEntry(req, res) {
    new model.Entry({id: req.params.id})
    .fetch({require: true})
    .then(function(entry) {
      
    })
    .catch(function(reason) {
      res.status(404).send('Sorry, we cannot find that!');
    });
  }

  function newEntry(req, res) {
    res.render('new_entry');
  }

  function createEntry(req, res) {
    // console.log(req.body);
    const newEntry = new model.Entry(req.body);
    newEntry.set({user_id: 1});
    newEntry.save()
    .then(function(entry){
      res.redirect('/entries');
    })
    .catch(function(reason) {
      // console.log(reason);
      res.status(400).send('Oops! Bad request!');
    });

  }

  return { getEntries, getEntry, createEntry, newEntry };
}

module.exports = controller;