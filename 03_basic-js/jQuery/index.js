$("h1").addClass("big-title margin-50");
$("h1").text("Bye");

$("button").text("Don't Click Me!");
$("button").html("<em>Hey</em>");

$("img").attr("src");
$("a").attr("href", "https://www.yahoo.com")

// Event listeners
$("h1").click(function() {
    $("h1").css("color", "purple")
});

$("button").click(function() {
    $("h1").fadeToggle();
});

$(document).keypress(function(event) {
    console.log(event.key);
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "blue");
});

$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");
