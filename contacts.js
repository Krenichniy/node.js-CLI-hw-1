const fs = require('fs').promises;
const path = require('path').promises;

const contactsPath = './db/contacts.json';

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

const contactsFn = {
    listContacts, 
    getContactById,
    removeContact,
    addContact
}

module.exports = contactsFn;