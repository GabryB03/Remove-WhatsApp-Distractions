// ==UserScript==
// @name         WhatsApp Remove Distractions
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove all the WhatsApp distractions to get concentrated on what's really important
// @author       GabryB03
// @match        https://www.whatsapp.com/*
// @match        https://whatsapp.com/*
// @match        https://web.whatsapp.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=whatsapp.com
// @updateURL    https://github.com/GabryB03/Remove-WhatsApp-Distractions/raw/main/WhatsAppRemoveDistractions.user.js
// @downloadURL  https://github.com/GabryB03/Remove-WhatsApp-Distractions/raw/main/WhatsAppRemoveDistractions.user.js
// @grant        none
// ==/UserScript==

(function()
{
    function asyncLoop()
    {
        try
        {
            document.querySelector("img[src='https://static.whatsapp.net/rsrc.php/v3/y6/r/wa669aeJeom.png']").parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("div[title='Community']").parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("div[aria-label='Casella di testo per la ricerca']").parentElement.parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("span[data-icon='lock-small-v2']").parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {

            var element = document.querySelector("div[class='']");

            if (element.innerText == 'Tutte')
            {
                 document.querySelector("div[class='']").parentElement.parentElement.parentElement.remove();
            }
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("div[title='Dettagli profilo']").parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("button[aria-label='Cerca o inizia una nuova chat']").parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("button[aria-label='Lista delle chat']").parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        setTimeout(async function()
        {
            await asyncLoop();
        },
        500);
    }

    asyncLoop();
})();