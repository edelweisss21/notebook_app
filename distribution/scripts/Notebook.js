class Notebook {
	constructor() {
		this.notes = [];
		this.addButton = document.getElementById('button-add');
		this.noteContainer = document.querySelector('.note__container');
		this.addButton.addEventListener('click', this.addNote.bind(this));
	}

	addNote() {
		const note = new Note(this);
		note.render(this.noteContainer);
		this.notes.push(note);
	}

	removeNote(note) {
		const index = this.notes.indexOf(note);
		if (index !== -1) {
			note.element.parentElement.removeChild(note.element);
			this.notes.splice(index, 1);
		}
	}
}
