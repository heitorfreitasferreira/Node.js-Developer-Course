const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
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
  handler: function (argv) {
    console.log('Title: ' + argv.title + '\nBody: ' + argv.body);

  }
})
//remove command
yargs.command({
  command: 'remove',
  describe: 'remove a new note',
  handler: function () {
    console.log('Removing new note');

  }
})
//list command
yargs.command({
  command: 'list',
  describe: 'list all the notes',
  handler: function () {
    console.log('Listing...');

  }
})
//read command
yargs.command({
  command: 'read',
  describe: 'read the note',
  handler: function () {
    console.log('Reading...');

  }
})
yargs.parse()
// console.log(yargs.argv);