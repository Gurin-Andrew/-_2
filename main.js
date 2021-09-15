function filelist() {

    const selectedFilelist = document.getElementById('input').files;
    var nBytes = selectedFilelist[0].size;
    var sOutput = nBytes + " bytes";

    for (var aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"], nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
        sOutput = nApprox.toFixed(1) + " " + aMultiples[nMultiple];
    }
    document.getElementById("file_size").innerHTML = sOutput;
    document.getElementById("file_name").innerHTML = selectedFilelist[0].name
    document.getElementById("loaded_files").style.visibility = "visible";
    document.getElementById("send").style.backgroundColor = "#8E43ED";
    document.getElementById("completed").style.visibility = "visible"




}
window.onload = function() {
    document.getElementById("country").style.visibility = "hidden";
    document.getElementById("city").style.visibility = "hidden";
    document.getElementById("birhday").style.visibility = "hidden";
    document.getElementById("document").style.visibility = "hidden";
    document.getElementById("loaded_files").style.visibility = "hidden";
    document.getElementById("completed").style.visibility = "hidden"


}

function show_form_2() {
    if (document.getElementById("name_2").value != "" && document.getElementById("gender").value != "not_given") {
        document.getElementById("country").style.visibility = "visible";
        document.getElementById("city").style.visibility = "visible";
        document.getElementById("birhday").style.visibility = "visible";
    }

}

function show_form_3() {
    if (document.getElementById("user_date").value != "" && document.getElementById("user_city").value != "" && document.getElementById("user_country").value != "") {
        document.getElementById("document").style.visibility = "visible";

    }
}

function validation() {
    const name = document.getElementById("name_2").value;
    const date = document.getElementById("user_date").value;
    const country = document.getElementById("user_country").value;
    const city = document.getElementById("user_city").value;


}

function send() {

}