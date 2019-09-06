var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
const main_db = require('../private/DB/main_db');

var dirsql = './private/sql';
console.log('Create table from: ', dirsql);

fs.readdir(dirsql, 'utf8', function(err, files)
{
    if (err) console.log(err);
    else
    {
        files.forEach(function(filename)
        {
            console.log(filename);
            fs.readFile(path.join(dirsql, filename), 'utf8', function(err, filedata)
            {
                if(err) console.log(err);
                // else console.log(filedata);
            });
        });
    }
});

module.exports = router;