// writeToFile.js

let fs = require("fs");
let os = require('os');

function fileWrite(fileName, whichData)
{
    let options =
    {
        encoding: "utf8",
        flag: "a"
    };

    let callback = function(theError)
    {
        if (theError)
        {
            console.log(theError);
        }
        else
        {
            console.log("File successfully written");
        }
    };

    fs.writeFile(fileName, whichData, options, callback);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

