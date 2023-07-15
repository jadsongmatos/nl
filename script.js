const svgns = "http://www.w3.org/2000/svg";

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  let angleInRadians = (-angleInDegrees * Math.PI) / 180.0;
  return [
    centerX + radius * Math.cos(angleInRadians),
    centerY + radius * Math.sin(angleInRadians),
  ];
}

// Definimos o espaçamento entre as linhas do grid (em pixels)
const gridSpacing = 20;

// Criamos as linhas horizontais
for (var i = 0; i <= 500; i += gridSpacing) {
  var line = document.createElementNS(svgns, "line");
  line.setAttribute("x1", "0");
  line.setAttribute("y1", i.toString());
  line.setAttribute("x2", "500");
  line.setAttribute("y2", i.toString());
  line.setAttribute("style", "stroke:rgb(99,99,99);stroke-width:1");
  document.getElementById("meuSvg").appendChild(line);
}

// Criamos as linhas verticais
for (var j = 0; j <= 500; j += gridSpacing) {
  var line = document.createElementNS(svgns, "line");
  line.setAttribute("x1", j.toString());
  line.setAttribute("y1", "0");
  line.setAttribute("x2", j.toString());
  line.setAttribute("y2", "500");
  line.setAttribute("style", "stroke:rgb(99,99,99);stroke-width:1");
  document.getElementById("meuSvg").appendChild(line);
}

function draw_line(x1, y1, x2, y2) {
  let line = document.createElementNS(svgns, "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", "black");
  line.setAttribute("stroke-width", "2");
  document.getElementById("meuSvg").appendChild(line);
}

function draw_circle(x, y) {
  let circle = document.createElementNS(svgns, "circle");
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", 10);
  circle.setAttribute("fill", "#f00a");
  document.getElementById("meuSvg").appendChild(circle);
}

function draw_char(char, x, y, size, theta) {
  let i_c = 0;
  switch (char) {
    case "0":
      i_c = 1;
      break;
    case "1":
      i_c = 2;
      break;
    case "2":
      i_c = 3;
      break;
    case "3":
      i_c = 4;
      break;
    case "4":
      i_c = 5;
      break;
    case "5":
      i_c = 6;
      break;
    case "6":
      i_c = 7;
      break;
    case "7":
      i_c = 8;
      break;
    case "8":
      i_c = 9;
      break;
    case "9":
      i_c = 10;
      break;
    case "a":
      i_c = 11;
      break;
    case "b":
      i_c = 12;
      break;
    case "c":
      i_c = 13;
      break;
    case "d":
      i_c = 14;
      break;
    case "e":
      i_c = 15;
      break;
    case "f":
      i_c = 16;
      break;
    case "g":
      i_c = 17;
      break;
    case "h":
      i_c = 18;
      break;
    case "i":
      i_c = 19;
      break;
    case "j":
      i_c = 20;
      break;
    case "k":
      i_c = 21;
      break;
    case "l":
      i_c = 22;
      break;
    case "m":
      i_c = 23;
      break;
    case "n":
      i_c = 24;
      break;
    case "o":
      i_c = 25;
      break;
    case "p":
      i_c = 26;
      break;
    case "q":
      i_c = 27;
      break;
    case "r":
      i_c = 28;
      break;
    case "s":
      i_c = 29;
      break;
    case "t":
      i_c = 30;
      break;
    case "u":
      i_c = 31;
      break;
    case "v":
      i_c = 32;
      break;
    case "w":
      i_c = 33;
      break;
    case "x":
      i_c = 34;
      break;
    case "y":
      i_c = 35;
      break;
    case "z":
      i_c = 36;
      break;
    default:
      console.log("Invalid character");
  }

  if (i_c == 0) {
    return false;
  }

  let shift = Math.round((i_c - 1) / 2);

  if (i_c % 2 == 0) {
    shift = shift - 1;
    console.log("par,circle", i_c, shift);
    const startPoint = polarToCartesian(
      x,
      y,
      shift * (size + 5),
      theta
    );
    const endPoint = polarToCartesian(
      startPoint[0],
      startPoint[1],
      size,
      theta
    );
    draw_circle(endPoint[0], endPoint[1]);
  } else {
    console.log("impar,line", i_c, shift);
    const startPoint = polarToCartesian(
      x,
      y,
      shift * (size + 5),
      theta
    );
    const endPoint = polarToCartesian(
      startPoint[0],
      startPoint[1],
      size,
      theta
    );
    draw_line(startPoint[0], startPoint[1], endPoint[0], endPoint[1]);
  }
}

const size = 50;

draw_char("0", 100, 300, size, 90);
draw_char("1", 100, 300, size, 45);
draw_char("2", 100, 300, size, 45);
draw_char("3", 100, 300, size, 45);
draw_char("4", 100, 300, size, 90);
