const fs = require('fs');
const path = require('path');
const p = path.join(
  path.dirname(require.main.filename),
  'data',
  'contact.json'
);

const contact = [];

module.exports = class Contact {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  save() {
    contact.push(this);
    
    fs.writeFile(p, JSON.stringify(contact), (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

