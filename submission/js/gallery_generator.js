// JavaScript Gallery Generator
// Create the XMLHttpRequest object for communicating with the web server
var xmlhttp = new XMLHttpRequest();
// Stores number of horizontalColumns gallery has, if too large it won't fit in browser window
var numberOfColumns = 2;
// stores newly generated gallery HTML code
var htmlcode = "";
// Temporarily stores server response while code is generated
var response;

$(document).ready(function () {
    // Set up the path to the PHP function that reads the image directory to find the thumbnail file names
    var send = "php/hook.php";
    // Open the connection to the web server
    xmlhttp.open("GET", send, true);
    // Tell the server that the client has no outgoing message, i.e. we are sending nothing to the server
    xmlhttp.send(null);
    // check we get a valid server response
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            // Response handler code
            // alert(xmlhttp.responseText);
            response = xmlhttp.responseText.split("~");
            htmlcode + '<tr>';
            for (var i = 0; i < response.length; i++) {
                htmlcode += '<td id="gallery_cell">';
                htmlcode += '<a href="' + '3dapp/' + response[i] +'">';
                htmlcode += '<img src="3dapp/' + response[i] + '" id="image_thumbnail"/>';
                htmlcode += '</a>';
                htmlcode += '</td>';
                if (((i+1)%numberOfColumns) == 0) {
                    htmlcode += '</tr><tr>';
                }
            }
            htmlcode + '</tr>';
            document.getElementById('gallery').innerHTML = htmlcode;
        }
    }
});
