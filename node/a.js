const fs = require('fs');
const fetch = require('node-fetch');

const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer xau_65aZvDwyiAid6sPgcpyvSvuiddHxsAFJ7', 'Content-Type': 'application/json'},
  body: '{"columns":["title","data"]}'
};

fetch('https://ragnar-s-workspace-bvgt2l.ap-southeast-2.xata.sh/db/rxn:main/tables/notes/query', options)
  .then(response => response.json())
  .then(response => {
    fs.writeFile('response.json', JSON.stringify(response), (err) => {
      if (err) throw err;
      console.log('The log has been written to response.json');
    });
  })
  .catch(err => console.error(err));
