// whenLoaded

function whenLoaded()
{
    if (!isNWJS())
    {
        showNWJSWarning();
        return;   // stops everything if in a normal browser (non nw.js)
    }

    makeInterface();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

