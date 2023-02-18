////////        Code to open pop up         //////
var popup = document.querySelector(".pop-up");
document.querySelector(".btnn").addEventListener("click", function () {
    var lover;
    var randd = Math.round(Math.random()) + 1;
    if (randd == 1) {
        lover = document.querySelector("#l1").value;
    } else {
        lover = document.querySelector("#l2").value;
    }
    if (lover.length === 0) {
        alert("Please fill in the names");
    } else {
        popup.classList.add("open-popup");
        document.querySelector(".display").innerHTML = lover + " loves you more";
    }
}
);

////////        Code to close pop up         //////
document.querySelector(".close").addEventListener("click", function () {
    popup.classList.add("close-popup");
    document.location.reload();
});

