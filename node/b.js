const dataObject = ["eJyd0LEOgjAQBuBXITcTAlTEMosJcSFxEGIMqVKkEaG0DRQJ724HB2aSm/7/7htuBsU+FCIv9ALfxWh/8Fxkw6Ppnm8J0W0GVkIE+TSleTrwSwM2qImbC+BEkJcgvDZRSRSBaAZFtTKVqpm0zFRMSGU1rKWWB8ti/7XCzbJrlSST2qr5K43FWGt0HCneqqGVxtGDpudv3Bdbtd1KazXvw5Psxn6rFhjtbsNAhWRda3Z8x8eO+eYPcC2Ovg=="];
const options = {
    method: 'PATCH',
    headers: {
        Authorization: 'Bearer xau_65aZvDwyiAid6sPgcpyvSvuiddHxsAFJ7',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: 'string', data: JSON.stringify(dataObject) })
};

console.log(JSON.stringify({ title: 'string', data: dataObject }));

fetch('https://ragnar-s-workspace-bvgt2l.ap-southeast-2.xata.sh/db/rxn:main/tables/notes/data/rec_cotj4ijhlpdm7ho2n4n0?columns=id', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));