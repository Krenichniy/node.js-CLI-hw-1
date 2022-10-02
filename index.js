const contatcs = require('./contacts');
const { program } = require('commander');
require('colors');
program
    .option('-a, --action <type>')
    .option('-id, --id <type>')
    .option('-n, --name <type>')
    .option('-e, --email <type>')
    .option('-ph, --phone <type>');
program.parse();
const options = program.opts();
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
          const allContacts = await contatcs.listContacts();
          console.log(allContacts)
      break;

    case "getById":
          const searchedContact = await contatcs.getContactById(id);
          console.log('You found contact!:'.yellow,searchedContact )
      break;
      
    case "add":
          const newContact = await contatcs.addContact({ name, email, phone })
          console.log('You added new contact'.green,newContact)
      break;

    case "remove":
          const removedContact = await contatcs.removeContact(id);
          console.log('You removed  contact('.red,removedContact)
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);