const fs = require('fs')
const chalk = require('chalk')

function getNotes() {
  console.log('notas');

}

function addNote(title, body) {
  const notes = loadNotes()
  const duplicatedNotes = notes.filter((note) => note.title === title)


  if (duplicatedNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added'));
  } else {
    console.log(chalk.red.inverse('There is another note with this title!'))
  }
}
/////////////////////////////////////////////////////////
function removeNote(title) {
  // console.log('removed:' + title);
  const notes = loadNotes()
  const updatedNotes = notes.filter(note => note.title !== title)
  var colored = null
  var logMessage = null
  if (notes.length === updatedNotes.length) {
    colored = chalk.red.inverse
    logMessage = 'No notes were found with title = ' + title
  } else {
    colored = chalk.green.inverse
    const removedNotesQuantity = notes.length - updatedNotes.length
    logMessage = 'Removed ' + removedNotesQuantity + ' notes, with title = ' + title
  }
  console.log(colored(logMessage));

  saveNotes(updatedNotes)
}
/////////////////////////////////////////////////////////
function listNotes() {
  const notes = loadNotes()
  console.log(chalk.inverse('Your notes:'));

  notes.forEach(note => {
    console.log(note.title);

  });
}
/////////////////////////////////////////////////////////
function readNotes(title) {
  const notes = loadNotes()

  const requiredNote = notes.find((note) => note.title === title)
  if (requiredNote) {
    console.log(chalk.inverse.gray.underline(requiredNote.title));
    console.log(requiredNote.body);
  } else {
    console.log(chalk.inverse.red(`This aren't the notes you're looking for`));

  }
}
/////////////////////////////////////////////////////////
function saveNotes(notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

function loadNotes() {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }

}
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
}