const fs = require("fs");
const superagent = require('superagent');
fs.readFile(`${__dirname}/dog.txt`,(err,data)=>{
    console.log(`Breed:$(data)`);
    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err,res) => {
        if(err) return console.log(err.message)
        console.log(res.body.message);
        fs.writeFile(`dog-img.txt`,re.body.message, err =>{
            if(err) return console.log(err.message)
            console.log('random dog imagellll');
        });
    });
});
// const fs = require('fs')
// const supeeragent = require('superagent')
//  fs.readFile(`${__dirname}`)/do
  