const { Command } = require('commander');
const contactsOperations = require('./contacts');

const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const workWithContacts = async (type = 'getContactsList', id, data) => {
  try {
    switch (type) {
      case 'getContactsList':
        return await contactsOperations.listContacts();

      case 'getContactById':
        return await contactsOperations.getContactById(id);

      case 'removeContact':
        return await contactsOperations.removeContact(id);

      case 'addContact':
        return await contactsOperations.addContact(data);
    }
  } catch (error) {
    throw error;
  }
};

const newContact = {
  name: 'Candler Bing',
  email: 'chandler_loves_moniсa@mail.com',
  phone: '(333) 444-2211',
};

workWithContacts('getContactsList')
  .then((data) => console.table(data))
  .catch((error) => console.log(error));

// workWithContacts('getContactById', 256)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// workWithContacts('removeContact', 10)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// workWithContacts('addContact', '', newContact)
  // .then((data) => console.log(data))
  // .catch((error) => console.log(error));


  workWithContacts(argv)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

