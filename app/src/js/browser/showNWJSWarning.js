// showNWJSWarning.js

function showNWJSWarning()
{
    let warningDiv = ce('div');
    warningDiv.id = 'warningDiv';
    warningDiv.style.padding = '40px';
    warningDiv.style.fontFamily = 'Arial';
    warningDiv.style.background = 'rgb(17, 17, 17)';
    warningDiv.style.minHeight = '100vh';
    ba(warningDiv);

    //-//

    let title = ce('div');
    title.id = 'warningTitle';
    title.textContent = 'THIS APP REQUIRES NW.JS TO FUNCTION AS DESIGNED';
    title.style.fontSize = '22px';
    title.style.fontWeight = 'bold';
    title.style.color = 'rgb(170, 170, 170)';
    title.style.marginBottom = '6px';
    warningDiv.append(title);

    //-//

    warningDiv.append(ce('hr'));

    //-//

    let instructions = ce('div');
    instructions.innerHTML = 'DRAG the folder named <b>app</b> onto the <b>nw.exe</b> icon'
    warningDiv.append(instructions);

    //-//

    warningDiv.append(ce('hr'));

    //-//

    let nwjsURL = ce('a');
    nwjsURL.textContent = "If you haven't done so yet, you can download NWJS here: ";
    nwjsURL.href = 'https://nwjs.io/';
    nwjsURL.style.color = 'rgb(150, 150, 150)';
    warningDiv.append(nwjsURL);

    warningDiv.append(ce('hr'));

    //-//

    let videoTutorial = ce('video');
    videoTutorial.src = 'src/tutorials/instructions.mp4';
    videoTutorial.style.width = '400px';
    videoTutorial.controls = 'true';
    warningDiv.append(videoTutorial);

    let footer = ce('div');
    footer.id = 'warningFooter';
    footer.textContent = '(c) 2000 - 2026 Christopher Andrew Topalian - All Rights Reserved';
    footer.style.fontSize = '11px';
    footer.style.color = 'rgb(68, 68, 68)';
    footer.style.lineHeight = '1.8';
    footer.style.maxWidth = '560px';
    footer.style.marginTop = '10px';
    warningDiv.append(footer);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

