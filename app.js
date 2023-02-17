function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + min)
    }
    let names = ['1', '2', '3', '4', '5', '6', '7']
    let todos = ['налить стакан воды с закрытыми глазами глазами ', 'Подойти обнять', ' Выпейте что-нибудь, приготовленное другим игрокоm', 'Слева от тебя находится человек, сделай ему какой-нибудь подарок']
    // Вывод в консоль ответа
    function generate() {
    console.log(`${names[getRandomNumber(0, names.length)]} будет ${todos[getRandomNumber(0, todos.length)]}`)
    }
