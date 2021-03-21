class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
    // HINT🤩 this.element = this.createElement(title);
  }
  
  createElement(title){
    let newNote = document.createElement('li'); //create a <li> node
    newNote.addEventListener('click', this.remove.bind(newNote)); //makes a delete link
    newNote.innerHTML = title;
    // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));
    return newNote;
  }
  
  add(){
    document.getElementById("taskList").appendChild(this.element);
    // HINT🤩
    // this function should append the note to the screen somehow
  }

  remove(){
    let taskList = document.getElementById("taskList");

    let childToDelete = [...taskList.children].indexOf(this);
    let noteList = JSON.parse(localStorage.getItem("noteList"));
    noteList.splice(childToDelete, 1);
    localStorage.setItem("noteList", JSON.stringify(noteList));

    taskList.removeChild(this); 
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      // .removeChild(this)
      // remove the item from screen and from localstorage
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
}

class App {
  constructor() {
    this.txtTodo = document.getElementById("taskInput");
    this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
    this.loadNotesFromStorage();
    console.log("👊🏼 The Constructor!");
    
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
    let noteList = localStorage.getItem("noteList");
    noteList = JSON.parse(noteList);
    if (noteList != null) {
      for (let i = 0; i < noteList.length; i++) {
        let note = new Note(noteList[i]);
        note.add(); //add to screen
      }
    }
  }
   
  createNote(e){
     // this function should create a new note by using the Note() class
    // HINT🤩
    // note.add();
    // note.saveToStorage();
    // clear the text field with .reset in this class
    // if (e.key === "Enter")
    if ((e.key === "Enter") && (this.txtTodo.value != "")) {
      let note = new Note(this.txtTodo.value);
      note.add();
      note.saveToStorage();

      this.reset();
      e.preventDefault();
    }
  }
  
  reset(){
      // this function should reset the form / clear the text field
      this.txtTodo.value = "";
  }
  
}

let app = new App();