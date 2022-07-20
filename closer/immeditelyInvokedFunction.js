const runOnce = function(){
    console.log("This will never run again");
}
runOnce();

// IIFE
(function () {
    console.log("this will never run again");
}) ();

(() => console.log("this will  ALSO never run again"))
();

