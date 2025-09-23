/*
    Student Name: Jesse Shults
    File Name: script.js
    Date: 09/23/2025
*/
// jQuery function to hide and show <p> tags inside <article>
$(document).ready(function() {
    $("#hideBtn").click(function() {
        $("#main p").hide();
    });

    $("#showBtn").click(function() {
        $("#main p").show();
    });
});
