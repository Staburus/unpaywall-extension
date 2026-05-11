if (typeof chrome !== "undefined"){
    browser = chrome
}

var parts = window.name.split("#")
var color = parts[0]
var useDarkMode = parts[1] === 'true';
var url = decodeURI(parts.slice(2).join('#'));

if (useDarkMode) {
    // This will add a 'dark-mode' class to the body.
    // CSS rules for this class should be defined in the stylesheet for unpaywall.html
    $("body").addClass("dark-mode");
}

if (color == "black") {
    $(".button").click(function(){
        // todo: replace this scary alert with a message up to the
        // unpaywall.js content script, which can then pop up
        // a prettier and mre useful dialog box.
        alert("The Unpaywall extension couldn't find any legal open-access version of this article.");
    });
}
else {
    $(".button")
        .wrap($('<a target="_blank" rel="noopener noreferrer"></a>'))
        .parent()
        .attr("href", url);
}

$(".button").fadeIn();

$(".button").addClass(color)
