const fs = require('fs/promises');
const { nanoid } = require('nanoid');

const path = require('path')
const contactsPath = path.join(__dirname,'db','contacts.json');

async function updateContatcs (contacts) {
   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}
async function listContacts () {
  const result = await fs.readFile(contactsPath)
  return JSON.parse(result);
}


async function getContactById(contactId) {
  const contacts = await listContacts();
  const contactById = contacts.find(el => el.id === contactId);
  return contactById || null;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex(contact => contact.id === contactId);
  if (index === -1) {
    return null
  }
  const [removedContact] = contacts.splice(index, 1)
  await updateContatcs(contacts);
  return removedContact;

}

async function addContact({name, email, phone}) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name, 
    email,
    phone
  }
  contacts.push(newContact);
  await updateContatcs(contacts)
  return newContact ;
}


module.exports =  {
    listContacts, 
    getContactById,
    removeContact,
    addContact
};