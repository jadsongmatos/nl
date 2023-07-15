const svgns = "http://www.w3.org/2000/svg";

let line = document.createElementNS(svgns, 'line');
line.setAttribute('x1', 50);
line.setAttribute('y1', 50);
line.setAttribute('x2', 150);
line.setAttribute('y2', 50);
line.setAttribute('stroke', 'black');
line.setAttribute('stroke-width', '2');
document.getElementById('meuSvg').appendChild(line);

let circle = document.createElementNS(svgns, 'circle');
circle.setAttribute('cx', 150);
circle.setAttribute('cy', 50);
circle.setAttribute('r', 10);
circle.setAttribute('fill', 'red');
document.getElementById('meuSvg').appendChild(circle);