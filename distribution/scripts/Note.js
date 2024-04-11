class Note {
	constructor(notebook, title = 'Title', desc = 'Description') {
		this.notebook = notebook;
		this.title = title;
		this.desc = desc;
		this.editButton = this.createButton('./distribution/img/edit.svg');
		this.removeButton = this.createButton('./distribution/img/trash.svg');
		this.editButton.addEventListener('click', this.edit.bind(this));
		this.removeButton.addEventListener('click', this.remove.bind(this));
	}

	edit() {
		const isEditing = this.titleElement.classList.contains('hidden');

		if (!isEditing) {
			this.inputTitleValue = this.inputTitle
				? this.inputTitle.value
				: this.titleElement.textContent;
			this.inputDescValue = this.inputDesc
				? this.inputDesc.value
				: this.descElement.textContent;
			this.heading.classList.add('f-direction');
			this.titleElement.classList.toggle('hidden');
			this.descElement.classList.toggle('hidden');

			const inputTitle = document.createElement('input');
			inputTitle.setAttribute('type', 'text');
			inputTitle.value = this.titleElement.textContent;

			const inputDesc = document.createElement('textarea');
			inputDesc.value = this.descElement.textContent;

			inputTitle.classList.add('hidden');
			inputDesc.classList.add('hidden');

			this.titleElement.parentElement.append(inputTitle);
			this.descElement.parentElement.append(inputDesc);

			this.inputTitle = inputTitle;
			this.inputDesc = inputDesc;

			inputTitle.addEventListener('input', e => {
				this.inputTitleValue = e.target.value;
			});

			inputDesc.addEventListener('input', e => {
				this.inputDescValue = e.target.value;
			});

			inputTitle.classList.toggle('hidden');
			inputDesc.classList.toggle('hidden');
		} else {
			this.title = this.inputTitleValue;
			this.desc = this.inputDescValue;
			this.titleElement.textContent = this.title;
			this.descElement.textContent = this.desc;

			if (this.inputTitle) {
				this.inputTitle.remove();
			}

			if (this.inputDesc) {
				this.inputDesc.remove();
			}

			this.titleElement.classList.toggle('hidden');
			this.descElement.classList.toggle('hidden');
			this.heading.classList.remove('f-direction');
		}
	}

	remove() {
		this.notebook.removeNote(this);
	}

	render(container) {
		const note = document.createElement('div');
		note.classList.add('note');

		const heading = document.createElement('div');
		heading.classList.add('heading');

		const titleElement = document.createElement('h2');
		titleElement.textContent = this.title;
		titleElement.classList.add('note__title');

		const descElement = document.createElement('p');
		descElement.textContent = this.desc;
		descElement.classList.add('note__desc');

		const iconsBox = document.createElement('div');
		iconsBox.classList.add('icons__box');
		iconsBox.append(this.editButton, this.removeButton);

		heading.append(titleElement, iconsBox);
		note.append(heading, descElement);

		container.append(note);

		this.heading = heading;
		this.titleElement = titleElement;
		this.descElement = descElement;
		this.element = note;
	}

	createButton(iconSrc) {
		const button = document.createElement('div');

		const img = document.createElement('img');
		img.setAttribute('src', iconSrc);

		button.appendChild(img);

		return button;
	}
}
