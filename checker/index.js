var COMMANDS = [
  'Спартак',
  'Зенит',
  'Реал',
  'ЦСКА',
  'Манчестер',
  'Барселона',
  'Арсенал',
  'Челси',
  'Ливерпуль',
  'Локомотив',
  'Ювентус',
  'Милан',
  'Бавария',
  'Динамо',
  'Боруссия',
  'Рубин'
];

function createTable(content) {
  return '<table style="border-collapse: collapse; table-layout: fixed">$content</table>'
            .replace('$content', content);
}

function createTableRow(content) {
  return '<tr>$content</tr>'.replace('$content', content);
}

function createTableCell(args) {
  return '<td style="background-color: $color;border: 1px solid black" width="auto" height="auto">$cContent</td>'
            .replace(/\$color/g, args.color || 'white')
            .replace(/\$cContent/g, args.cContent);
}

var games = {};
var checkings = [];

function selectCommand() {
  return Math.floor(Math.random() * COMMANDS.length);
}

function generateGame() {
  return [selectCommand(), selectCommand()];
}

function checkPlay(c1, c2) {
  return (games[c1] || []).indexOf(c2) !== -1;
}

function displayCheck(c1, c2) {
  return '<div>'+ COMMANDS[c1] + ' vs ' + COMMANDS[c2] + ': ' + checkPlay(c1, c2) + '</div>';
}

function displayResults() {
  var rows = [];
  var cells = [createTableCell({
    cContent: ''
  })];
  for (var i = 0; i < COMMANDS.length; i++) {
    cells.push(createTableCell({
      cContent: COMMANDS[i]
    }));
  }
  rows.push(createTableRow(cells.join('')));
  for (var i = 0; i < COMMANDS.length; i++) {
    var cells = [createTableCell({
      cContent: COMMANDS[i]
    })];
    for (var j = 0; j < COMMANDS.length; j++) {
      cells.push(createTableCell({
        color: i === j ? 'black' : 'white',
        cContent: checkPlay(i, j) ? '+' : '-'
      }));
    }
    rows.push(createTableRow(cells.join('')));
  }
  return createTable(rows.join(''));
}

function main() {
  var COUNT_OF_GAMES = 150;
  var game, c1, c2;
  for (var i = 0; i < COUNT_OF_GAMES; i++) {
    game = generateGame();
    c1 = game[0];
    c2 = game[1];
    if (!Array.isArray(games[c1])) {
      games[c1] = [];
    }
    if (!Array.isArray(games[c2])) {
      games[c2] = [];
    }
    if (games[c1].indexOf(c2) === -1) {
      games[c1].push(c2);
      games[c2].push(c1);
    }
    checkings.push(displayCheck(selectCommand(), selectCommand()));
  }
  return [displayResults(), checkings.slice(-10).join('')].join('');
}

main();
