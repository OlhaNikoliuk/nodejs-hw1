const fs = require('fs/promises');
const path = require('path');
const { v4 } = require('uuid');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');
const contacts = require(contactsPath);

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8');
    const contacts = JSON.parse(data);
    console.table(contacts);
    return contacts;
  } catch (error) {
    throw error;
  }
};

const getContactById = async (contactId) => {
  try {
    const contactList = await listContacts();
    const findContact = contactList.find(
      (contact) => contact.id.toString() === contactId
    );
    if (!findContact) {
      return null;
    }
    console.table(findContact);
    return findContact;
  } catch (error) {
    throw error;
  }
};

const removeContact = async (contactId) => {
  try {
    const contactList = await listContacts();
    const contactIdx = contactList.findIndex(
      (contact) => contact.id.toString() === contactId
    );
    if (contactIdx === -1) {
      return null;
    }
    const updatedContacts = contactList.filter((contact) => contact.id.toString() !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
    console.table(updatedContacts)
    return 'Succes remove';
  } catch (error) {
    throw error;
  }
};

const addContact = async ({ name, email, phone }) => {
  try {
    const contactList = await listContacts();
    const newContact = { id: v4(), name, email, phone };
    contactList.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contactList));
    console.table(newContact);
    return newContact;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
