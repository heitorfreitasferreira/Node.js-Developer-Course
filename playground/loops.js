const arrayFamilia = [{
  integrante: 'Heitor',
  idade: 19,
  ocupacao: 'estudante',
  diasTreino: {
    seg: true,
    ter: false,
    qua: true,
    qui: false,
    sex: true,
    sab: false,
    dom: false,
  }
}, {
  integrante: 'Meire',
  idade: 41,
  ocupacao: 'controladora',
  diasTreino: {
    seg: true,
    ter: true,
    qua: true,
    qui: true,
    sex: true,
    sab: false,
    dom: false,
  }
}, {
  integrante: 'Ailson',
  idade: 47,
  ocupacao: 'vendedor',
  diasTreino: {
    seg: false,
    ter: false,
    qua: false,
    qui: false,
    sex: false,
    sab: false,
    dom: false,
  }
}, {
  integrante: 'Bené',
  idade: 72,
  ocupacao: 'pedreiro',
  diasTreino: {
    seg: false,
    ter: false,
    qua: false,
    qui: false,
    sex: false,
    sab: false,
    dom: false,
  }
}, {
  integrante: 'Giovanna',
  idade: 19,
  ocupacao: 'estudante',
  diasTreino: {
    seg: true,
    ter: false,
    qua: true,
    qui: false,
    sex: true,
    sab: false,
    dom: false,
  }
}, {
  integrante: 'Pedro Lucas',
  idade: 19,
  ocupacao: 'estudante',
  diasTreino: {
    seg: false,
    ter: false,
    qua: false,
    qui: false,
    sex: false,
    sab: false,
    dom: false,
  }
}];

// arrayFamilia.forEach((membro) => {
//   console.log(membro.integrante);
// })


// arrayFamilia.push({
//   integrante: 'Maria Clara',
//   idade: 12,
//   ocupacao: 'estudante',
//   diasTreino: {
//     seg: false,
//     ter: false,
//     qua: false,
//     qui: false,
//     sex: false,
//     sab: false,
//     dom: false,
//   }
// })
// arrayFamilia.pop()

arrayFamilia.splice(3, 0, {
  integrante: 'Tereza',
  idade: 65,
  ocupacao: 'aposentada',
  diasTreino: {
    seg: true,
    ter: true,
    qua: false,
    qui: true,
    sex: false,
    sab: false,
    dom: false,

  }
})
const arrayFamiliaFiltered = arrayFamilia.filter(member => member.idade < 20)

const arrayFamilia2021 = arrayFamilia.map(member => member.idade++)
const arrayFamiliaFound = arrayFamilia.find(membro => membro.idade < 30)
const arrayFamiliaEvery = arrayFamilia.every(membro => membro.diasTreino.seg === true)
const arrayFamiliaSome = arrayFamilia.some(membro => membro.diasTreino.seg === true)
console.log(arrayFamiliaEvery);
console.log(arrayFamiliaSome);