const fs = require('fs');
const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

// function listContacts() {
// }

// function getContactById(contactId) {
// }

// function removeContact(contactId) {
// }

// function addContact(name, email, phone) {
// }




function clg() {
  console.log(contactsPath);
}

module.exports = {
  // listContacts,
  // getContactById,
  // removeContact,
  // addContact
  clg
};
