const students = [
  {
    name: 'Jeff',
    age: 16,
    firstNote: 5.5,
    secondNote: 3,
    thirdNote: 7.5,
    idRegistration: 300
  },
  {
    name: 'Isa',
    age: 15,
    firstNote: 6,
    secondNote: 6,
    thirdNote: 10,
    idRegistration: 234
  },
  {
    name: 'Will',
    age: 19,
    firstNote: 7.5,
    secondNote: 9,
    thirdNote: 7.5,
    idRegistration: 456
  },
  {
    name: 'Emily',
    age: 14,
    firstNote: 6.5,
    secondNote: 8,
    thirdNote: 8.5,
    idRegistration: 475
  }
]

function calcMedia(students) {
  const media = ((students.firstNote + students.secondNote + students.thirdNote) / 3).toFixed(2)
  
  return media
}

function result(students) {

  for (var i = 0; i < students.length; i++) {  
    const mediaStudent = calcMedia(students[i]);
  
    if(mediaStudent >= 7) {
    alert(`
      Parabéns ${students[i].name}! Você atingiu a média de ${mediaStudent}
    `)
  }else{
    alert(`
      Estude mais, ${students[i].name}! Sua média foi de ${mediaStudent}
    `)
  }
}

}

result(students)