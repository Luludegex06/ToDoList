function changeColor(event) {
    var work = document.getElementById('work');
    var personal = document.getElementById('personal');
    var important = document.getElementById('important');
    var spareTime = document.getElementById('spareTime');

    if(event.target.value == work) {
      work.classList.add("work");
    } else if(event.target.value == personal) {
        work.classList.add("personal");
    } else if(event.target.value == important) {
        work.classList.add("important");
    } else if(event.target.value == spareTime)  {
        work.classList.add("spareTime");
    };
}
// Cacher le "write a note" en cliquant

document.addEventListener(
    "click",
    function(){
        var input = document.querySelector(".note")
        var selectElement = input.querySelector('input[name="note-title"]');
        var selectedValue = selectElement.value;
        selectedValue.value = "hidden"
    }
)

function addNote(){
    var list = document.querySelector("#list");
    var note = document.querySelector(".note-title").value;
    list.innerHTML += "<li><button>" + "&#9744;" + "</button>"+ note +"</li>";
}


//barrer une 
function deleteNote(){
    var item = document.querySelector("li")
    item.innerHTML += "<li>&#9745;" + note + "</li>"
    item.classList.add("deleted")
}

function deleteAll(){
    var notes = document.querySelector("ul")
    notes.remove()
}

