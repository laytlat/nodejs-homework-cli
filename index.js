const contacts = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);

    case "get":
      const contactToFind = await contacts.getContactById(id);
      return console.log(contactToFind);

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);

    case "remove":
      const contactToDelete = await contacts.removeContact(id);
      return console.log(contactToDelete);

    default:
      console.warn("Unknown action type!");
  }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({
//   action: "add",
//   name: "Alex",
//   email: "alex@mail.com",
//   phone: "(000) 451-0123",
// });
invokeAction({ action: "remove", id: "rsKkOQUi80UsgVPCcLZZW" });
