var qArray = ['q1', 'q2', 'q3'];
var yesArray = ['q2', 'a1', 'a3'];
var noArray = ['q3', 'a2', 'a4'];
var n = 0;

function OnYesClick() {
    RewriteSrc(yesArray[n])
}
function OnNoClick() {
    RewriteSrc(noArray[n])
}

function RewriteSrc(nextId) {
    if (nextId.startsWith('q') == true) {
        for (i = 0; i < qArray.length + 1; i++) {
            if (qArray[i] == nextId) {
                document.getElementById(qArray[n]).className = "txt_hide";
                n = i;
                document.getElementById(qArray[n]).className = "txt_display";
                break;
            }
        }
    } else {
        document.getElementById(qArray[n]).className = "txt_hide";
        document.getElementById('btn_area').className = "txt_hide";
        document.getElementById('result_area').className = "txt_display";
        document.getElementById(nextId).className = "txt_display";

        document.getElementById('try_again').className = "text_display";
    }
}
function OnAgainClick() {
    document.getElementById(yesArray[n]).className = "txt_hide";
    document.getElementById(noArray[n]).className = "txt_hide";
    n = 0;
    document.getElementById(qArray[n]).className = "txt_display";
    document.getElementById('btn_area').className = "txt_display";
    document.getElementById('result_area').className = "txt_hide";
}