// makeInterface.js

function makeInterface()
{
    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    ba(mainDiv);

    //-//

    let subDiv = ce('div');
    subDiv.id = 'subDiv';
    mainDiv.append(subDiv);

    //-//

    let theTitle = ce('a');
    theTitle.id = 'theTitle';
    theTitle.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_NWJS_Journal';
    theTitle.target = '_blank';
    theTitle.textContent = 'CATopalian NWJS Journal';
    theTitle.style.margin = '4px';
    theTitle.style.fontSize = '15px';
    theTitle.style.fontFamily = 'Arial';
    theTitle.style.fontWeight = 'bold';
    theTitle.style.color = 'rgb(140, 140, 140)';
    theTitle.style.textAlign = 'right';
    theTitle.style.textDecoration = 'none';
    theTitle.style.display = 'block';
    theTitle.style.marginLeft = 'auto';
    subDiv.append(theTitle);

    //-//

    let textDiv = ce('div');
    textDiv.style.display = 'flex';
    textDiv.style.flexDirection = 'column';
    subDiv.append(textDiv);

    //-//

    let textOutput = ce('textarea');
    textOutput.id = 'textOutput';
    textOutput.className = 'textOutput';
    textOutput.style.height = '200';
    textDiv.append(textOutput);

    //-//

    let textInput = ce('textarea');
    textInput.id = 'textInput';
    textInput.style.paddingLeft = 10 + 'px';
    textInput.style.paddingRight = 10 + 'px';
    textInput.style.border = 'solid 1px rgb(0, 255, 255)';
    textInput.style.borderRadius = '8px';
    textInput.placeholder = 'Enter Text Here';
    textDiv.append(textInput);

    //-//

    let enterButton = ce('button');enterButton.id = 'enterButton';
    enterButton.textContent = 'Enter';
    enterButton.onclick = function()
    {
        fileWrite("ourFile.txt", '[' + new Date().toLocaleString() + ']: ' + ge('textInput').value + '\n');
    
        ge('textOutput').value += '[' + new Date().toLocaleString() + ']: ' + ge('textInput').value + '\n';

        textInput.value = '';
    };
    textDiv.append(enterButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

