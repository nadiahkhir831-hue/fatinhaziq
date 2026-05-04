const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart);
    // elem.addEventListener("drag", drag);
    // elem.addEventListener("dragend", dragEnd);
});

droppableElements.forEach(elem => {
     elem.addEventListener("dragenter", dragEnter);
     elem.addEventListener("dragover", dragOver);
     elem.addEventListener("dragLeave", dragLeave);
     elem.addEventListener("drop", drop);
});

// Drag and Drop Functions

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function dragEnter(event) {
    if(!event.target.classList.contains("dropped")) {
      event.target.classlist.add("droppable-hover");
    }
}

function dragOver(event) {
    if(!event.target.classlist.add("dropped")); {
      event.preventDefault();
    }

}

function dragLeave(event) {
  if(!event.target.classlist.add("dropped")); {
    event.target.classlist.add("droppable-hover");
  }
}

function drop(event) {
    event.preventDefault();
    event.target.classlist.add("droppable-hover");
    const draggableElementData = event.dataTransfer.getData("text");
    const droppableElementData = event.target.getAttribute("data-draggable-id");
    if(draggableElementData === draggableElementData) {
        event.target.classList.add("dropped");
        const draggableElement = document.getElementById(draggableElementData);
        event.target.style.backgroundColor = draggableElement.style.color;
        // event.target.style.backgroundColor = window.getComputedStyle(draggableElemnt).color;
        draggableElement.classList.add("dragged");
        draggableElement.setAttribute("draggable", "false");
        event.target.insertAdjacentHTML("afterbegin", `<i class="fas fa-${draggableElementData}"></i>`);
    }
}