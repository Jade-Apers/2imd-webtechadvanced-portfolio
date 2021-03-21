class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
    // HINT🤩 this.element = this.createElement(title);
  }
  
  createElement(title){
    let newNote = document.createElement('li'); //create a <li> node
    newNote.addEventListener('click', this.remove.bind(newNote)); //makes a delete link
    // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));
    return newNote;
  }
  
  add(){
    document.getElementById("taskList").appendChild(this.element);
    // HINT🤩
    // this function should append the note to the screen somehow
  }

  remove(){
    document.getElementById("tasklist").removeChild(this.element);
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
   // in this function, 'this' will refer to the current note element
 } 
  
  saveToStorage(){
  
    if (localStorage.getItem("noteList") === null) {
      localStorage.setItem("noteList", JSON.stringify([this.title]));
    } 
    else {
      let notes = JSON.parse(localStorage.getItem("noteList"));
      notes.push(this.title);
      localStorage.setItem("noteList", JSON.stringify(notes));
      console.log(notes);
    }
  }
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  
    removeFromStorage(){
    if (localStorage.getItem("noteList") != null) {
      localStorage.removeItem("noteList", JSON.stringify(this.title));
    } 
  }
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
    this.txtTodo = document.getElementById("taskInput");
    this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
    this.loadNotesFromStorage();
    
    // HINT🤩
    // pressing the enter key in the text field triggers the createNote function
    // this.txtTodo = ???
    // this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
    // read up on .bind() -> we need to pass the current meaning of this to the eventListener
    // when the app loads, we can show previously saved noted from localstorage
    // this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    let savedNotes = localStorage.getItem("savedNotes");
    savedNotes = JSON.parse(savedNotes);
    if (savedNotes != null) {
      for (let i = 0; i < savedNotes.length; i++) {
        let note = new Note(savedNotes[i]);
        note.add();
      }
    }
  }
   
  createNote(e){
    // this function should create a new note by using the Note() class
    
    // HINT🤩
    // note.add();
    // note.saveToStorage();
    // this.reset();
  }
  
  reset(){
    // this function should reset the form 
  }
  
}

let app = new App();