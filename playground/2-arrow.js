// const sqr = (number) => number * number
// console.log(sqr(5));

//FUNCIONA (PADRÃO)

// const event = {
//   name: `Heitor's party`,
//   printGuestList: function () {
//     console.log('Guest list for ' + this.name);
//   },
// }

//NÃO FUNCIONA (ARROW FUNCTION NÃO CONSEGUE USAR O "this")

// const event = {
//   name: `Heitor's party`,
//   printGuestList: () => {
//     console.log('Guest list for ' + this.name);
//   },
// }

//FUNCIONA (ES6)

const event = {
  name: `Heitor's party`,
  guestList: ['Heitor', 'Ana', 'Pedro', 'Clara'],
  printGuestList() {
    console.log('Guest list for ' + this.name);
    this.guestList.forEach((guest) => {
      console.log(guest + ' will be on ' + this.name);
    })
    //SE NÃO FOSSE ARROW NÃO DARIA PRA ACESSAR O this
  },
}
event.printGuestList()