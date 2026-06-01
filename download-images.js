/**
 * Download all project images to public/img/projetos/
 * Run once from the project root: node download-images.js
 */

const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.join(__dirname, "public", "img", "projetos");

const BASE = "https://wmconsultoria.com/wp-content/uploads";

const projects = [
  {
    slug: "tonino-lamborghini",
    urls: [
      `${BASE}/2022/12/16-T-Lamborghini-Embraed-imagem-1.jpg`,
      `${BASE}/2022/12/16-T-Lamborghini-Embraed-imagem-2.jpg`,
      `${BASE}/2022/12/16-T-Lamborghini-Embraed-imagem-3.jpg`,
    ],
  },
  {
    slug: "solaia",
    urls: [
      `${BASE}/2022/12/15-Solaia-Embraed-imagem-1.jpg`,
      `${BASE}/2022/12/15-Solaia-Embraed-imagem-2.jpg`,
    ],
  },
  {
    slug: "serendipity",
    urls: [
      `${BASE}/2022/12/14-Serendipity-Embraed-imagem-1.jpg`,
      `${BASE}/2022/12/14-Serendipity-Embraed-imagem-2.jpg`,
      `${BASE}/2022/12/14-Serendipity-Embraed-imagem-3.jpg`,
    ],
  },
  {
    slug: "new-york",
    urls: [
      `${BASE}/2022/12/12-New-York-Embraed-imagem-1.jpg`,
      `${BASE}/2022/12/12-New-York-Embraed-imagem-2.jpg`,
      `${BASE}/2022/12/12-New-York-Embraed-imagem-3.jpg`,
      `${BASE}/2022/12/12-New-York-Embraed-imagem-4.jpg`,
      `${BASE}/2022/12/12-New-York-Embraed-imagem-5.jpg`,
    ],
  },
  {
    slug: "latelier",
    urls: [
      `${BASE}/2022/12/11-LAtelier-Embraed-imagem-1.jpg`,
      `${BASE}/2022/12/11-LAtelier-Embraed-imagem-2.jpg`,
      `${BASE}/2022/12/11-LAtelier-Embraed-imagem-3.jpg`,
    ],
  },
  {
    slug: "aurora",
    urls: [
      `${BASE}/2022/12/8-Aurora-Embraed-imagem-1.jpg`,
      `${BASE}/2022/12/8-Aurora-Embraed-imagem-2.jpg`,
      `${BASE}/2022/12/8-Aurora-Embraed-imagem-3.jpg`,
      `${BASE}/2022/12/8-Aurora-Embraed-imagem-4.jpg`,
    ],
  },
  {
    slug: "bueno-brandao",
    urls: [
      `${BASE}/2024/02/11-BUENO-BRANDAO-TEGRA-1-scaled.jpg`,
      `${BASE}/2024/02/11-BUENO-BRANDAO-TEGRA-2-scaled.jpg`,
    ],
  },
  {
    slug: "zahle",
    urls: [
      `${BASE}/2022/12/56-Zahle-Tegra-imagem-1.jpg`,
      `${BASE}/2022/12/56-Zahle-Tegra-imagem-2.jpg`,
      `${BASE}/2022/12/56-Zahle-Tegra-imagem-3.jpg`,
      `${BASE}/2022/12/56-Zahle-Tegra-imagem-4.jpg`,
    ],
  },
  {
    slug: "soma-perdizes",
    urls: [
      `${BASE}/2022/12/55-Soma-Perdizes-Tegra-imagem-1.jpg`,
      `${BASE}/2022/12/55-Soma-Perdizes-Tegra-imagem-2.jpg`,
    ],
  },
  {
    slug: "ode-perdizes",
    urls: [
      `${BASE}/2022/12/49-Ode-Perdizes-Tegra-imagem1.jpg`,
      `${BASE}/2022/12/49-Ode-Perdizes-Tegra-imagem2.jpg`,
      `${BASE}/2022/12/49-Ode-Perdizes-Tegra-imagem3.jpg`,
    ],
  },
  {
    slug: "artesano",
    urls: [
      `${BASE}/2024/02/17-ARTESANO-PLAENGE-1-scaled.jpg`,
      `${BASE}/2024/02/17-ARTESANO-PLAENGE-2-scaled.jpg`,
    ],
  },
  {
    slug: "authentique",
    urls: [`${BASE}/2023/08/Authentique-plaenge-imagem-1.jpg`],
  },
  {
    slug: "piazza",
    urls: [
      `${BASE}/2024/02/10-PIAZZA-QUADRA-1-scaled.jpg`,
      `${BASE}/2024/02/10-PIAZZA-QUADRA-2-scaled.jpg`,
    ],
  },
  {
    slug: "lux-design",
    urls: [
      `${BASE}/2024/02/9-LIVING-CONCEPT-QUADRA-1.jpg`,
      `${BASE}/2024/02/9-LIVING-CONCEPT-QUADRA-2.jpg`,
    ],
  },
  {
    slug: "edificio-art",
    urls: [
      `${BASE}/2024/02/8-ART-QUADRA-1-scaled.jpg`,
      `${BASE}/2024/02/8-ART-QUADRA-2-scaled.jpg`,
    ],
  },
  {
    slug: "life-spa",
    urls: [
      `${BASE}/2022/12/44-Life-Spa-Quadra-imagem-1.jpg`,
      `${BASE}/2022/12/44-Life-Spa-Quadra-imagem-2.jpg`,
    ],
  },
  {
    slug: "il-palagio",
    urls: [
      `${BASE}/2022/12/43-IL-Pallagio-Quadra-imagem-1.jpeg`,
      `${BASE}/2022/12/43-IL-Pallagio-Quadra-imagem-2.jpeg`,
    ],
  },
  {
    slug: "bela-vista",
    urls: [
      `${BASE}/2024/02/16-BELA-VISTA-VITACON-1-scaled.jpg`,
      `${BASE}/2024/02/16-BELA-VISTA-VITACON-2-scaled.jpg`,
    ],
  },
  {
    slug: "boa-vista",
    urls: [
      `${BASE}/2024/02/15-BOA-VISTA-VITACON-1-scaled.jpg`,
      `${BASE}/2024/02/15-BOA-VISTA-VITACON-2-scaled.jpg`,
    ],
  },
  {
    slug: "on-pixel",
    urls: [
      `${BASE}/2024/02/14-ON-PIXEL-VITACON-1-1.png`,
      `${BASE}/2024/02/14-ON-PIXEL-VITACON-2.png`,
    ],
  },
  {
    slug: "brigadeiro",
    urls: [
      `${BASE}/2024/02/13-BRIGADEIRO-VITACON-1-scaled.jpg`,
      `${BASE}/2024/02/13-BRIGADEIRO-VITACON-2-scaled.jpg`,
    ],
  },
  {
    slug: "vista-jardins",
    urls: [`${BASE}/2024/02/12-VISTA-JARDINS-T.-VOKKAN-1.jpg`],
  },
  {
    slug: "trend-24",
    urls: [`${BASE}/2024/02/7-TREND-24-MAIOJAMA-1.jpg`],
  },
  {
    slug: "pinheiros",
    urls: [
      `${BASE}/2024/02/6-PINHEIROS-PASSARELLI-1-scaled.jpg`,
      `${BASE}/2024/02/6-PINHEIROS-PASSARELLI-2-scaled.jpg`,
    ],
  },
  {
    slug: "reserva-golf",
    urls: [`${BASE}/2024/02/4-ALPHA-2-EKKO-1-scaled.jpg`],
  },
  {
    slug: "ekko-alpha",
    urls: [
      `${BASE}/2024/02/4-ALPHA-2-EKKO-2-scaled.jpg`,
      `${BASE}/2024/02/4-ALPHA-2-EKKO-1-scaled.jpg`,
    ],
  },
  {
    slug: "dsense",
    urls: [
      `${BASE}/2024/02/3-DSENSE-DIMAS-1.jpeg`,
      `${BASE}/2024/02/3-DSENSE-DIMAS-2.jpeg`,
    ],
  },
  {
    slug: "brava-ocean",
    urls: [
      `${BASE}/2024/02/2-BRAVA-OCEAN-CN-EMPREENCIMENTOS-1-scaled.jpg`,
      `${BASE}/2024/02/2-BRAVA-OCEAN-CN-EMPREENCIMENTOS-2-scaled.jpg`,
      `${BASE}/2024/02/2-BRAVA-OCEAN-CN-EMPREENCIMENTOS-3-scaled.jpg`,
    ],
  },
  {
    slug: "lumi",
    urls: [
      `${BASE}/2024/02/1-LUMI-CENSI-1.jpg`,
      `${BASE}/2024/02/1-LUMI-CENSI-2.jpg`,
    ],
  },
  {
    slug: "deck-330",
    urls: [
      `${BASE}/2023/08/Deck-330-Tarraf-Imagem-1.jpg`,
      `${BASE}/2023/08/Deck-330-Tarraf-Imagem-2.jpg`,
    ],
  },
  {
    slug: "nature",
    urls: [`${BASE}/2023/08/Nature-Elmo-Imagem-1.jpg`],
  },
  {
    slug: "acqua",
    urls: [
      `${BASE}/2023/08/Acqua-Elmo-Imagem-2.jpg`,
      `${BASE}/2023/08/Acqua-Elmo-Imagem-1.jpg`,
    ],
  },
  {
    slug: "you-180",
    urls: [
      `${BASE}/2023/08/You-180-Vanguard-Imagem-2.jpg`,
      `${BASE}/2023/08/You-180-Vanguard-Imagem-1.jpg`,
    ],
  },
  {
    slug: "mirador",
    urls: [
      `${BASE}/2022/12/61-Mirador-Winter-imagem-1.jpg`,
      `${BASE}/2022/12/61-Mirador-Winter-imagem-2.jpg`,
      `${BASE}/2022/12/61-Mirador-Winter-imagem-3.jpg`,
    ],
  },
  {
    slug: "murano",
    urls: [`${BASE}/2022/12/60-Murano-Winter-imagem-1.jpg`],
  },
  {
    slug: "vesta",
    urls: [
      `${BASE}/2022/12/59-Vesta-VCA-Maggi-imagem-1.jpg`,
      `${BASE}/2022/12/59-Vesta-VCA-Maggi-imagem-2.jpg`,
      `${BASE}/2022/12/59-Vesta-VCA-Maggi-imagem-3.jpg`,
      `${BASE}/2022/12/59-Vesta-VCA-Maggi-imagem-4.jpg`,
    ],
  },
  {
    slug: "reserva-sangiovese",
    urls: [
      `${BASE}/2022/12/58-Reserva-Sangiovese-UNA-imagem-1.jpg`,
      `${BASE}/2022/12/58-Reserva-Sangiovese-UNA-imagem-2.jpg`,
    ],
  },
  {
    slug: "una-business",
    urls: [
      `${BASE}/2022/12/57-Busines-Center-UNA-imagem-1.jpg`,
      `${BASE}/2022/12/57-Busines-Center-UNA-imagem-2.jpg`,
    ],
  },
  {
    slug: "domo",
    urls: [
      `${BASE}/2022/12/47-Domo-Talita-imagem-1.jpeg`,
      `${BASE}/2022/12/47-Domo-Talita-imagem-2.jpeg`,
      `${BASE}/2022/12/47-Domo-Talita-imagem-3.jpeg`,
      `${BASE}/2022/12/47-Domo-Talita-imagem-4.jpeg`,
    ],
  },
  {
    slug: "sunstar",
    urls: [
      `${BASE}/2022/12/46-Sunstar-Sunprime-imagem1.jpg`,
      `${BASE}/2022/12/46-Sunstar-Sunprime-imagem2.jpg`,
      `${BASE}/2022/12/46-Sunstar-Sunprime-imagem3.jpg`,
      `${BASE}/2022/12/46-Sunstar-Sunprime-imagem4.jpg`,
    ],
  },
  {
    slug: "jardins-135",
    urls: [
      `${BASE}/2022/12/45-135-Jardins-Silva-Packer-imagem-1.jpg`,
      `${BASE}/2022/12/45-135-Jardins-Silva-Packer-imagem-2.jpg`,
      `${BASE}/2022/12/45-135-Jardins-Silva-Packer-imagem-3.jpg`,
    ],
  },
  {
    slug: "raiz",
    urls: [
      `${BASE}/2022/12/42-Raiz-Paulo-Mauro-imagem-1.jpg`,
      `${BASE}/2022/12/42-Raiz-Paulo-Mauro-imagem-2.jpg`,
    ],
  },
  {
    slug: "mov-perdizes",
    urls: [
      `${BASE}/2022/12/41-MOV-Perdizes-paulo-Mauro-imagem-1.jpg`,
      `${BASE}/2022/12/41-MOV-Perdizes-paulo-Mauro-imagem-2.jpg`,
    ],
  },
  {
    slug: "manhattan",
    urls: [
      `${BASE}/2022/12/40-Manhattan-N1-imagem-1.jpg`,
      `${BASE}/2022/12/40-Manhattan-N1-imagem-2.jpg`,
    ],
  },
  {
    slug: "torres-brisa",
    urls: [
      `${BASE}/2022/12/39-Torre-Brisa-Lotisa-imagem1.jpg`,
      `${BASE}/2022/12/39-Torre-Brisa-Lotisa-imagem2.jpg`,
    ],
  },
  {
    slug: "vista-mare",
    urls: [
      `${BASE}/2022/12/38-Vista-Mare-Lotisa-imagem-1.jpg`,
      `${BASE}/2022/12/38-Vista-Mare-Lotisa-imagem-2.jpg`,
    ],
  },
  {
    slug: "serenity",
    urls: [
      `${BASE}/2022/12/37-Serenity-Lotisa-imagem-1.jpg`,
      `${BASE}/2022/12/37-Serenity-Lotisa-imagem-2.jpg`,
    ],
  },
  {
    slug: "garden-plaza",
    urls: [`${BASE}/2022/12/36-Garden-Lotisa-imagem-1.png`],
  },
  {
    slug: "germano-70",
    urls: [
      `${BASE}/2022/12/35-Germano70-Kopstein-imagem-1.jpeg`,
      `${BASE}/2022/12/35-Germano70-Kopstein-imagem-2.jpeg`,
    ],
  },
  {
    slug: "praca-nilo",
    urls: [
      `${BASE}/2022/12/34-Praca-nilo-Wolens-imagem-1.jpg`,
      `${BASE}/2022/12/34-Praca-nilo-Wolens-imagem-2.jpg`,
      `${BASE}/2022/12/34-Praca-nilo-Wolens-imagem-3.jpg`,
    ],
  },
  {
    slug: "vertice",
    urls: [
      `${BASE}/2022/12/33-Vertice-Wolens-imagem-1.jpg`,
      `${BASE}/2022/12/33-Vertice-Wolens-imagem-2.jpg`,
      `${BASE}/2022/12/33-Vertice-Wolens-imagem-4.jpg`,
    ],
  },
  {
    slug: "flagship",
    urls: [
      `${BASE}/2022/12/32-Flagship-RottaEly-imagem-2.jpg`,
      `${BASE}/2022/12/32-Flagship-RottaEly-imagem-1.jpg`,
    ],
  },
  {
    slug: "cobalto",
    urls: [
      `${BASE}/2022/12/31-Cobalto-Rottaely-imagem-1.jpg`,
      `${BASE}/2022/12/31-Cobalto-Rottaely-imagem-2.jpg`,
    ],
  },
  {
    slug: "traveza",
    urls: [`${BASE}/2022/12/30-Traveza-Just-imagem-1.jpeg`],
  },
  {
    slug: "cipriano",
    urls: [
      `${BASE}/2022/12/29-Cipriano-Just-imagem-1.jpg`,
      `${BASE}/2022/12/29-Cipriano-Just-imagem-2.jpg`,
      `${BASE}/2022/12/29-Cipriano-Just-imagem-3.jpg`,
    ],
  },
  {
    slug: "urban-tower",
    urls: [`${BASE}/2022/12/28-Urban-Investcorp-imagem-1.jpeg`],
  },
  {
    slug: "opera",
    urls: [
      `${BASE}/2022/12/27-Opera-Investcorp-imagem-1.jpg`,
      `${BASE}/2022/12/27-Opera-Investcorp-imagem-2.jpg`,
      `${BASE}/2022/12/27-Opera-Investcorp-imagem-3.jpg`,
    ],
  },
  {
    slug: "ocean-view",
    urls: [`${BASE}/2022/12/26-Ocean-View-Investcorp-imagem-1.jpg`],
  },
  {
    slug: "morada-gaia",
    urls: [
      `${BASE}/2022/12/25-Morada-de-Gaia-Investcorp-imagem-1.jpg`,
      `${BASE}/2022/12/25-Morada-de-Gaia-Investcorp-imagem-2.jpg`,
      `${BASE}/2022/12/25-Morada-de-Gaia-Investcorp-imagem-3.jpg`,
    ],
  },
  {
    slug: "amaluna",
    urls: [
      `${BASE}/2022/12/24-Amaluna-Investcorp-imagem-1.jpg`,
      `${BASE}/2022/12/24-Amaluna-Investcorp-imagem-2.jpg`,
    ],
  },
  {
    slug: "haus-34",
    urls: [
      `${BASE}/2022/12/23-Haus-34-INTI-imagem-1.jpeg`,
      `${BASE}/2022/12/23-Haus-34-INTI-imagem-2.jpeg`,
    ],
  },
  {
    slug: "grid",
    urls: [
      `${BASE}/2022/12/22-GRID-INTI-imagem-1.jpg`,
      `${BASE}/2022/12/22-GRID-INTI-imagem-2.jpg`,
    ],
  },
  {
    slug: "hausen",
    urls: [
      `${BASE}/2022/12/21-Housen-Incoben-imagem-1.jpg`,
      `${BASE}/2022/12/21-Housen-Incoben-imagem-2.jpg`,
    ],
  },
  {
    slug: "park-house",
    urls: [
      `${BASE}/2022/12/20-Park-House-Incoben-imagem-1.jpg`,
      `${BASE}/2022/12/20-Park-House-Incoben-imagem-2.jpg`,
    ],
  },
  {
    slug: "la-casa",
    urls: [
      `${BASE}/2022/12/19-La-Casa-Incoben-imagem-1.jpg`,
      `${BASE}/2022/12/19-La-Casa-Incoben-imagem-2.jpg`,
    ],
  },
  {
    slug: "alameda-america",
    urls: [
      `${BASE}/2022/12/18-Al-america-Hmarcato-imagem-1.jpg`,
      `${BASE}/2022/12/18-Al-america-Hmarcato-imagem-2.jpg`,
    ],
  },
  {
    slug: "ocean-view-sp",
    urls: [`${BASE}/2022/12/7-Mongagua-Econ-imagem-1.jpeg`],
  },
  {
    slug: "dmys",
    urls: [
      `${BASE}/2022/11/6-DMys-Dimas-imagem-1.jpg`,
      `${BASE}/2022/11/6-DMys-Dimas-imagem-2.jpg`,
      `${BASE}/2022/11/6-DMys-Dimas-imagem-3.jpg`,
    ],
  },
  {
    slug: "dyard",
    urls: [
      `${BASE}/2022/11/5-DYard-Dimas-imagem-1.jpg`,
      `${BASE}/2022/11/5-DYard-Dimas-imagem-2.jpg`,
      `${BASE}/2022/11/5-DYard-Dimas-imagem-3.jpg`,
    ],
  },
  {
    slug: "dspot",
    urls: [
      `${BASE}/2022/11/4-Dspot-Dimas-imagem-1.jpg`,
      `${BASE}/2022/11/4-Dspot-Dimas-imagem-2.jpg`,
      `${BASE}/2022/11/4-Dspot-Dimas-imagem-3.jpg`,
    ],
  },
  {
    slug: "mudra",
    urls: [
      `${BASE}/2022/11/3-Mudra-Cyrela-imagem-1.jpg`,
      `${BASE}/2022/11/3-Mudra-Cyrela-imagem-2.jpg`,
      `${BASE}/2022/11/3-Mudra-Cyrela-imagem-3.jpg`,
    ],
  },
  {
    slug: "atmosfera",
    urls: [
      `${BASE}/2022/11/2-Atmosfera-Cyrela-imagem-1.jpg`,
      `${BASE}/2022/11/2-Atmosfera-Cyrela-imagem-2.jpg`,
    ],
  },
  {
    slug: "voga",
    urls: [
      `${BASE}/2022/11/1-Voga-CFL-imagem-1.jpg`,
      `${BASE}/2022/11/1-Voga-CFL-imagem-2.jpg`,
      `${BASE}/2022/11/1-Voga-CFL-imagem-3.jpg`,
    ],
  },
];

// ─── helpers ────────────────────────────────────────────────────────────────

function download(url, destPath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(destPath)) {
      console.log(`  skip (exists): ${path.basename(destPath)}`);
      return resolve();
    }
    const client = url.startsWith("https") ? https : http;
    const file = fs.createWriteStream(destPath);
    client
      .get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          fs.unlinkSync(destPath);
          return download(res.headers.location, destPath).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          file.close();
          fs.unlinkSync(destPath);
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log(`  ✓ ${path.basename(destPath)}`);
          resolve();
        });
      })
      .on("error", (err) => {
        fs.existsSync(destPath) && fs.unlinkSync(destPath);
        reject(err);
      });
  });
}

async function run() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created: ${OUTPUT_DIR}`);
  }

  let total = 0;
  let done = 0;
  let errors = 0;

  for (const proj of projects) {
    console.log(`\n[${proj.slug}]`);
    for (let i = 0; i < proj.urls.length; i++) {
      const url = proj.urls[i];
      const ext = path.extname(new URL(url).pathname);
      const filename = `${proj.slug}-${i + 1}${ext}`;
      const destPath = path.join(OUTPUT_DIR, filename);
      total++;
      try {
        await download(url, destPath);
        done++;
      } catch (err) {
        console.error(`  ✗ ${filename}: ${err.message}`);
        errors++;
      }
    }
  }

  console.log(`\n─────────────────────────────────────`);
  console.log(`Done: ${done}/${total} images downloaded. Errors: ${errors}`);
}

run();
