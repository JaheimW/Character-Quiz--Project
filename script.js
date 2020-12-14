var counter= 0;

var narutoCharacter =
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPrCTjK9seFN45cSfnPwHTqgBNRFgk9BWJw&usqp=CAU",
     "https://i.pinimg.com/originals/6a/9a/52/6a9a52eb31cadf46b2c863fee9908870.jpg",
     "https://cdn3.whatculture.com/images/2019/01/31eb268d5e350e73-600x338.jpg",
     "https://vignette.wikia.nocookie.net/divided-destiny/images/9/97/Hinata.png/revision/latest?cb=20200906052558"];

$("button").click(function(){
    var valiant = $(".valiant").val();
    var color = $(".color").val();
    var spiritual = $(".spiritual").val();
    $(".results").empty();
    $(".valiant").val("");
    $(".color").val("");
    $(".spiritual").val("");
    counter = counter + 1;
    $(".counter").text("This quiz has been taken " + counter + " times");
    
    if(valiant >= 10 && color === "white" && spiritual >=10) {
    $(".results").append("<img src = " + narutoCharacter[0] + ">" + "<p>" + "You         guessed it...You are Naruto!" + "</p>");
     }
    else if(valiant >= 9 && color === "white" && spiritual >= 9) {
    $(".results").append("<img src = " + narutoCharacter[0] + ">" + "<p>" + "You         guessed it...You are Naruto!" + "</p>");
    }
    else if (valiant <= 8 && color === "white" && spiritual <= 8) {
    $(".results").append("<img src = " + narutoCharacter[1] + ">" + "<p>" + "You are     Sakura!" + "</p>");
    }
    else if (valiant >= 9 && color === "black" && spiritual >= 9) {
    $(".results").append("<img src = " + narutoCharacter[2] + ">" + "<p>" + "You         are...Sasuke!" + "</p>");
    }
    else if (valiant <= 8 && color === "black" && spiritual <= 8) {
    $(".results").append("<img src = " + narutoCharacter[3] + ">" + "<p>" + "You         are...Hinata!" + "</p>");
    }
    else {
    $(".results").text("Something went wrong, check to make sure you filled out all     questions correctly before submitting.");
    }
});
    
    
    

