var COMMANDS = [
  'Спартак',
  'Зенит',
  'Реал Мадрид',
  'ЦСКА',
  'Манчестер Юнайтед',
  'Барселона',
  'Арсенал',
  'Челси',
  'Ливерпуль',
  'Локомотив',
  'Ювентус',
  'Милан',
  'Бавария',
  'Динамо Москва',
  'Боруссия Дортмунд',
  'Рубин'
];

var games = {};

function selectCommand() {
  var halfCommand = COMMANDS.length / 2;
  return Math.ceil(Math.random() * halfCommand) - 1;
}

function selectFromBeginning() {
  return selectCommand();
}

function selectFromEnd() {
  return selectCommand();
}

function generateGame() {
  var command1 = selectCommand();
  var command2 = selectCommand();
  if (!Array.isArray(games[command1])) {
    games[command1] = [];
  } else {
    while (games[command1].length !== COMMANDS.length - 1) {
      command1 = selectCommand();
    }
  }
  while (games[command1].indexOf(command2) === -1) {
    command2 = selectCommand();
  }

}

function generateSearch() {

}

function main() {
  var COUNT_OF_GAMES = 150;
  for (var i = 0; i < COUNT_OF_GAMES; i++) {
    games.push(generateGame());
  }
}
