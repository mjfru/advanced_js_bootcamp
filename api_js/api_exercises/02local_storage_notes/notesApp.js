const textArea = document.querySelector('#noteInput');
const saveButton = document.querySelector('#saveNote');
const container = document.querySelector('#notesContainer');

// const notes = ["Walk the dog", "Remember to take the trash out"]
// localStorage.setItem('notes', JSON.stringify(notes));

const loadNotes = () => {
  // If the left is null, use the right side! Nullish coalescing
  const notes = JSON.parse(localStorage.getItem("notes")) ?? [];
  // Let's avoid reusing code, move this to the createNoteElement function & replace the for loop with a .forEach
  notes.forEach(createNoteElement);
  // for (let note of notes) {
    // const noteElement = document.createElement('li');
    // noteElement.textContent = note;
    // container.appendChild(noteElement);
  // }
};

const createNoteElement = (content) => {
  const noteElement = document.createElement('li');
  noteElement.textContent = content;
  container.appendChild(noteElement);
}

saveButton.addEventListener('click', () => {
  const noteContent = textArea.value.trim();
  createNoteElement(noteContent);
  // const noteElement = document.createElement('li');
  // noteElement.textContent = noteContent;
  // container.appendChild(noteElement);
  textArea.value = "";
  const notes = JSON.parse(localStorage.getItem("notes")) ?? [];
  notes.push(noteContent);
  localStorage.setItem('notes', JSON.stringify(notes));
});

loadNotes();