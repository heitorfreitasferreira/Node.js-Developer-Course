const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')
//add,remove,read,list 
//costumize yargs version
yargs.version('1.0.1')

//add command
yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    // console.log('Title: ' + argv.title + '\nBody: ' + argv.body);
    notes.addNote(argv.title, argv.body)
  }
})
//remove command
yargs.command({
  command: 'remove',
  describe: 'remove a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    // console.log('Removing new note');
    notes.removeNote(argv.title)
  }
})
//list command
yargs.command({
  command: 'list',
  describe: 'list all the notes',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    }
  },
  handler() {
    notes.listNotes()
  }
})
//read command
yargs.command({
  command: 'read',
  describe: 'read the note',
  handler(argv) {
    // console.log('Reading...');
    notes.readNotes(argv.title)
  }
})
yargs.parse()
// console.log(yargs.argv);