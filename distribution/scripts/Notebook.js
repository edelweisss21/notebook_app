class Notebook {
	constructor() {
		this.notes = [];
	}

	addNote() {
		const button = document.getElementById('button-add');
		const noteContainer = document.querySelector('.note__container');
		const addNote = () => {
			const note = new Note();
			note.render(noteContainer);
			this.notes.push(note);
		};

		button.addEventListener('click', addNote);
	}
}
