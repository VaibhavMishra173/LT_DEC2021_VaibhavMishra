function web_design() {
    var x = document.getElementById("webd");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // console.log("service successfully");
}
function service() {
    var x = document.getElementById("serv");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // console.log("service successfully");
}
// adding scrolling option
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // console.log("scrolled successfully");
}
function scrollDesignS(){
    window.scrollTo(0, document.body.scrollHeight / 3.2);
    // console.log("scrolled successfully s");
}
function scrollDesignB(){
    window.scrollTo(0, document.body.scrollHeight / 2.8);
    // console.log("scrolled successfully b");
}
function scrollDesignG(){
    window.scrollTo(0, document.body.scrollHeight / 2.3);
    // console.log("scrolled successfully g");
}
function scrollService(){
    window.scrollTo(0, document.body.scrollHeight / 1.6);
    // console.log("scrolled successfully g");
}
function scrollAbout(){
    window.scrollTo(0, document.body.scrollHeight / 1);
    // console.log("scrolled successfully g");
}
function scrollContact(){
    window.scrollTo(0, document.body.scrollHeight / 1.2);
    // console.log("scrolled successfully g");
}