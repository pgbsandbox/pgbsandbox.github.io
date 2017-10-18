function frame_loaded() {
    if (location.pathname.indexOf('/dev/') !== -1)
    {
        var h1   = window.frames["contentwin"].document.getElementsByTagName("H1");

        if (!h1 || h1.length == 0)
            return;

        var meta = window.frames["contentwin"].document.querySelector('meta[name="filepath"]');
        var path = meta && meta.getAttribute("content");

        var a    = document.createElement("a");
        var span = document.createElement("span"); 

        a.appendChild(document.createTextNode("(Edit this page)")); 
        a.href ="http://authorbridge?scope=GitHub&path=pgbsandbox:mydocs:master:/DITA/" + path
        span.innerHTML += "&nbsp;&nbsp;&nbsp;"
        span.style.fontSize = "1.1rem";
        span.appendChild(a);
        h1[0].appendChild(span);
    }
}
