import chalk from 'chalk';
import fs from 'fs';

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^\s$.?#].[^\s]*)\)/gm;
  const arrayResultados = [];

  let temp;
  while ((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] });
  }

  return arrayResultados.length === 0
    ? 'Não há links no arquivo'
    : arrayResultados;
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho.'));
}

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';

  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(chalk.blueBright('\nConteúdo do arquivo:\n'));
    console.log(texto);

    const links = extraiLinks(texto);
    console.log(chalk.yellow('\nLinks encontrados:\n'));
    console.log(links);
  } catch (erro) {
    trataErro(erro);
  }
}

// chamada principal
pegaArquivo('./arquivos/texto.md');

