fetch("../data/projetos.json")
  .then((response) => response.json())
  .then((projetos) => {
    const dadosCasa2 = projetos[0]; // seleciona o primeiro projeto do arquivo JSON, por exemplo

    // variáveis dos dados da casa
    let numeroProjeto = document.getElementById("numero-projeto");
    let terreno = document.getElementById("terreno");
    let area = document.getElementById("area");
    let localizacao = document.getElementById("localizacao");
    let nomesEquipe = document.getElementById("nomes-equipe");

    // variáveis das imagens da casa
    let fotoDestaque = document.getElementById("foto-destaque");
    let foto2 = document.getElementById("foto-2");
    let foto3 = document.getElementById("foto-3");
    let foto4 = document.getElementById("foto-4");

    
    numeroProjeto.innerText = dadosCasa2.id;
    terreno.innerText = dadosCasa2.fichaTecnica.terreno;
    area.innerText = dadosCasa2.fichaTecnica.areaConstruida;
    localizacao.innerText = dadosCasa2.localizacao;
    nomesEquipe.innerText = dadosCasa2.equipe;

    fotoDestaque.src = dadosCasa2.imagens.img1;
    foto2.src = dadosCasa2.imagens.img2;
    foto3.src = dadosCasa2.imagens.img3;
    foto4.src = dadosCasa2.imagens.img4;
  })
  .catch((error) => console.error(error));
