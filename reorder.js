const fs = require('fs');
const code = fs.readFileSync('src/app/projetos/page.tsx', 'utf-8');

const startMarker = 'const todosOsProjetos = [\n';
const endMarker = '\n];\n\nconst EXCLUDED_CLIENTS';
const startIdx = code.indexOf(startMarker) + startMarker.length;
const endIdx = code.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
  console.log("Could not find markers!");
  process.exit(1);
}

const arrayStr = code.substring(startIdx, endIdx);

// Matches each object
const regex = /  \{\n    title: [\s\S]*?\n  \}/g;
const items = arrayStr.match(regex);

const getMeta = (str) => {
  const m = str.match(/meta: "(.*?)"/);
  return m ? m[1] : '';
};

const priorityList = [
  "Embraed Empreendimentos",
  "Plaenge Empreendimentos",
  "Quadra Engenharia",
  "Tegra Incorporadora",
  "Cyrela Empreendimentos",
  "Vitacon",
  "Dimas Construções",
  "Lotisa Empreendimentos",
  "Halsten Incorporadora",
  "Calper",
  "Leal Moreira",
  "CBA",
  "Construtora Just",
  "Capital",
  "Gessele",
  "Macam",
  "Vokkan",
  "Torresani e Vokkan",
  "Paulo Mauro Construtora",
  "RFM",
  "Rocontec",
  "Elmo Engenharia",
  "INTI Empreendimentos",
  "Progetti",
  "Sunprime Empreendimentos",
  "Construtora Passarelli",
  "Melnick",
  "All Wert",
  "Fibra Experts",
  "Tarraf",
  "Sinco"
];

const getPriority = (str) => {
  const meta = getMeta(str);
  const idx = priorityList.indexOf(meta);
  return idx !== -1 ? idx : 999;
};

items.sort((a, b) => {
  const pA = getPriority(a);
  const pB = getPriority(b);
  if (pA !== pB) return pA - pB;
  return 0; // maintain original relative order for ties
});

const newArrayStr = items.join(',\n');
const newCode = code.substring(0, startIdx) + newArrayStr + code.substring(endIdx);
fs.writeFileSync('src/app/projetos/page.tsx', newCode);
console.log("Reordered", items.length, "items.");
