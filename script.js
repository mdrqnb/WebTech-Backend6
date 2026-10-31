/* Task 0 */
$(document).ready(function() {

    console.log("jQuery is ready!");

});

/* Task 1 */
$("#changeText").click(function(){
    $("#greeting").text("Welcome to my personal portfolio");
});

$(".intro").css("color","#483a70");

$("h2").css("letter-spacing","2px");

$("#lightTheme").click(function() {
    $("body").removeClass("dark-theme");
    $(".intro").css("color", "#64748B");
});

$("#darkTheme").click(function() {
    $("body").addClass("dark-theme");
    $(".intro").css("color", "#CBD5E1");
});


/* Task 2 */ 
$("#hideBtn").click(function(){
    $("#personalInfo").hide();
});

$("#showBtn").click(function(){
    $("#personalInfo").show();
});

$("#toggleBtn").click(function(){
    $("#personalInfo").toggle();    
});

/* Task 3 */
$("#fadeInBtn").click(function(){
    $(".gallery-image").fadeIn(1000);
});

$("#fadeOutBtn").click(function(){
    $(".gallery-image").fadeOut(1000);
});

$("#fadeToggleBtn").click(function(){
    $(".gallery-image").fadeToggle();
});


/* Task 4 */

$(".slide-heading").click(function() {
    $(this).next(".slide-panel").slideToggle(500);
});

$("#openPanels").click(function() {
    $(".slide-panel").slideDown(500);
});

$("#closePanels").click(function() {
    $(".slide-panel").slideUp(500);
});


/* Task 5 */
$("#addSkill").click(function() {
    let skill = $("#skillInput").val().trim();

    if (skill !== "") {
        let newSkill = $("<li>").text(skill);
        $("#skillList").append(newSkill);
        $("#skillInput").val("");

    } else {
        alert("Please enter a skill!");
    }

});

$("#prependSkill").click(function() {
    let skill = $("#skillInput").val().trim();

    if (skill !== "") {
        let newSkill = $("<li>").text(skill);
        $("#skillList").prepend(newSkill);
        $("#skillInput").val("");

    } else {
        alert("Please enter a skill!");
    }

});

$("#removeSkill").click(function() {

    $("#skillList li:last").remove();

});

/* Task 6 */

$("#changeLink").click(function() {

    $("#socialLink").attr(
        "href",
        "https://www.linkedin.com/"
    );

    $("#socialLink").text("Visit My LinkedIn");

});


/* Task 7 */
$("#nameInput").on("input", function() {
    let name = $(this).val();

    $("#nameOutput").text(name);

});

$("#emailInput").on("input", function() {
    let email = $(this).val();

    $("#emailOutput").text(email);

});


/* Task 8 */

let animated = false;

$("#animateSkills").click(function() {

    if (animated === false) {

        $(".progress").each(function() {

            let targetWidth = $(this).attr("data-width");

            $(this).stop().animate({
                width: targetWidth + "%"
            }, 1500);

        });

        animated = true;

    } else {

        $(".progress").stop().animate({
            width: "0%"
        }, 1500);

        animated = false;

    }

});