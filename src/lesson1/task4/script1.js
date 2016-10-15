function createTable(content) {
  return '<table class="task1_4" style="border-collapse: collapse; table-layout: fixed">$content</table>'
            .replace('$content', content);
}

function createTableRow(content) {
  return '<tr>$content</tr>'.replace('$content', content);
}

function createTableCell(color, args) {
  return '<td style="background-color: $color" width="cSize" height="cSize">$cContent</td>'
            .replace(/\$color/g, color)
            .replace(/\$cSize/g, n === 1 ? args.cSize : 'auto')
            .replace(/\$cContent/g, args.cContent);
}

function renderFractal(n, cSize, forceBlack) {
  var rows = [];
  var cells;
  if (n === 0) {
    return '';
  }
  for (var r = 0; r < 3; r++) {
    cells = [];
    for (var c = 0; c < 3; c++) {
      var isCenterCell = c === 1 && r === 1;
      var color = isCenterCell || forceBlack ? 'black' : 'white';
      cells.push(createTableCell(color, {
        cSize: cSize,
        cContent: renderFractal(n - 1, isCenterCell || forceBlack)
      }));
    }
    rows.push(createTableRow(cells.join('')));
  }
  return createTable(rows.join(''));
}

function main(n) {
  var depth = Math.round(Math.log(n) / Math.log(3));
  return renderFractal(depth, 3);
}

main(3);
