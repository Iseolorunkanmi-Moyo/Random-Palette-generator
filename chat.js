document.getElementById("menu").addEventListener("click", show);

function show() {
    // document.getElementById("links").style.display = "flex"
    if (document.getElementById("links").style.display == "flex") {
        document.getElementById("links").style.display = "none";
    } else {
        document.getElementById("links").style.display = "flex";
    }
}

function generate() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

    var alphabet = ["a", "b", "c", "d", "e", "f", "a"];

    // Random number

    var ranNum1 = Math.floor(Math.random() * 11);

    var ranNum2 = ranNum1 + 1;

    var ranNum3 = Math.floor(Math.random() * 11);

    var ranNum4 = ranNum3 + 1;

    var ranNum5 = Math.floor(Math.random() * 11);

    var ranNum6 = ranNum5 + 1;

    // random letters

    var ranLet1 = Math.floor(Math.random() * 6);

    var ranLet2 = ranLet1 + 1;

    var ranLet3 = Math.floor(Math.random() * 6);

    var ranLet4 = ranLet3 + 1;

    var ranLet5 = Math.floor(Math.random() * 6);

    var ranLet6 = ranLet5 + 1;

    // selected number

    var number1 = numbers.slice(ranNum1, ranNum2);

    var number2 = numbers.slice(ranNum3, ranNum4);

    var number3 = numbers.slice(ranNum5, ranNum6);

    // selected letter

    var letter1 = alphabet.slice(ranLet1, ranLet2);

    var letter2 = alphabet.slice(ranLet3, ranLet4);

    var letter3 = alphabet.slice(ranLet5, ranLet6);

    // Combination of all

    var hash = "#";

    var color = hash + number1 + letter1 + number2 + letter2 + number3 + letter3;

    // alert (color)
    var paragraph = document.createElement("p");
    paragraph.innerHTML = color;
    paragraph.fontFamily = "roboto";
    paragraph.style.backgroundColor = "lightblue";
    paragraph.style.height = "20px";
    paragraph.style.padding = "10px";
    paragraph.style.borderRadius = "10px";
    paragraph.style.width = "80%";
    paragraph.style.display = "flex";
    paragraph.style.alignItems = "flex-end";
    paragraph.style.justifyContent = "center";
    paragraph.addEventListener("dblclick", function () {
        // paragraph.innerHTML;
        //   paragraph.select();
        //   paragraph.setSelectionRange(0, 99999);
        //   navigator.clipboard.writeText(paragraph.value);
        var paragraphElement = paragraph;

        // If the paragraph element exists

        if (paragraphElement) {
            // Get the paragraph text

            var paragraphText = paragraphElement.innerText;

            // Create a new textarea element and set its value to the paragraph text

            var textareaElement = document.createElement("textarea");

            textareaElement.value = paragraphText;

            // Append the new textarea element to the body of the document

            document.body.appendChild(textareaElement);

            // Select the textarea content

            textareaElement.select();

            textareaElement.setSelectionRange(0, 99999); // For mobile devices

            // Copy the selected content

            document.execCommand("copy");

            // Remove the new textarea element from the body of the document

            document.body.removeChild(textareaElement);

            // Return true to indicate that the paragraph content has been copied

            // return true;
            console.log("true");
        }
    });
    var palette = document.createElement("div");
    palette.style.aspectRatio = "1/1";
    palette.style.width = "100%";
    palette.style.display = "flex";
    palette.style.alignItems = "center";
    palette.style.justifyContent = "center";
    palette.style.backgroundColor = color;
    palette.style.borderRadius = "10px";
    // palette.appendChild(paragraph)
    var mainDiv = document.createElement("div");
    mainDiv.appendChild(palette);
    mainDiv.appendChild(paragraph);
    var area = document.getElementById("area");
    area.appendChild(mainDiv);
    paragraph.scrollIntoView(false);
    // document.getElementById("new").scrollIntoView(false);
}

document.getElementById("new").addEventListener("click", generate);

let counterInterval;

document.getElementById("auto").addEventListener("click", () => {
    if (!counterInterval) {
        counterInterval = setInterval(generate, 500);
    }
});

document.getElementById("stop").addEventListener("click", () => {
    if (counterInterval) {
        clearInterval(counterInterval);
        counterInterval = null;
    }
});

var link = document.getElementById("links");

if (link.style.display == "flex") {
    window.onclick = function (event) {
        if (event.target == link) {
            link.style.display = "none";
        }
    };
}
