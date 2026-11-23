# JavaScript Task Manager

A small browser application for creating, editing and deleting tasks, with persistence in localStorage. Developed as a university exercise in JavaScript and DOM manipulation.

## Technologies

JavaScript (ES classes), HTML5, CSS3 and the browser localStorage API. No framework, backend or package installation.

## Features

- Add named tasks and reject blank input.
- Edit tasks; cancelling the dialog keeps the original name.
- Delete tasks and restore the list after reloading.
- Render task names as text rather than HTML.

## Run locally

```bash
git clone https://github.com/Angel0208ia/javascript-task-manager.git
cd javascript-task-manager
python -m http.server 8000 --bind 127.0.0.1
```

Visit http://localhost:8000. Python is only used as a local static server; a comparable static server works too.

## Structure

- `app.js`: task model, persistence and DOM event handlers.
- `index.html`: page structure.
- `styles.css`: application styling.

## Scope and verification

Beginner academic application. Data stays in the browser and is not synchronized between devices. The model includes a completion field, but the UI does not implement completion toggling. Browser storage is not suitable for sensitive information.

Check add, edit, cancel, delete and page reload. No screenshots were present in the original repository.
