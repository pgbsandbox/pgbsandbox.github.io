function frame_loaded() {
    if (location.pathname.indexOf('/dev/') !== -1)
    {
        var h1   = window.frames["contentwin"].document.getElementsByClassName("topictitle1");
        if (!h1)
            return;

        var a    = document.createElement("a");
        var span = document.createElement("span"); 

        a.appendChild(document.createTextNode("(Edit this page)")); 
        a.href ="www.foo.com";
        span.innerHTML += "&nbsp;&nbsp;&nbsp;"
        span.style.fontSize = "1.1rem";
        span.appendChild(a);
        h1[0].appendChild(span);
    }
}
