const URL = 'http://localhost:3000/api/contacts';
const buildData = document.getElementById('buildData');


{/* <tr>
<th scope="row" class="leadID"></th>
<td class="leadName"></td>
<td class="leadMail" ></td>
<td class="leadPhone"></td>
</tr> */}


const contactContainer = []; 
async function fetchContactsJSON() {
    const response = await fetch(URL);
    const contacts = await response.json();
    return contacts;
  }
  
  fetchContactsJSON().then(contacts => {
    draw(contacts);
  }).catch(error => {
    document.write('error' + error);
    
  });

  
  // draw dunction
  
  async function draw(contacts){
    
    contacts.forEach(el => {
      
      console.log(el);

    });


}



  