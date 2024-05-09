const data = {
    "email": "keanu@example.com",
    "name": "Keanu Reeves"
  };
  
  fetch('https://ragnar-s-workspace-bvgt2l.ap-southeast-2.xata.sh/db/rxn:main/tables/notes/data/rec_cotj4ijhlpdm7ho2n4n0?columns=id', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer xau_65aZvDwyiAid6sPgcpyvSvuiddHxsAFJ7'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
      console.log(response);
    if (!response.ok) {
      throw new Error('Failed to update data');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data updated successfully:', data);
  })
  .catch(error => {
    console.error('Error updating data:', error);
  });