const URL = 'http://localhost:3000/api/contacts';
const contactContainer = []; 
async function fetchContactsJSON() {
    const response = await fetch(URL);
    const contacts = await response.json();
    return contacts;
  }
  
  fetchContactsJSON().then(contacts => {
    contactContainer.push(contacts);
  }).catch(error => {
    document.write('error' + error);
    
  });
  console.log(contactContainer);

  