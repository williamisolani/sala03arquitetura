function carregarDados(index) {
    fetch("../data/projetos.json")
      .then((response) => response.json())
      .then((projetos) => {
        const dados = projetos[index]; // seleciona o primeiro projeto do arquivo JSON, por exemplo

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

        numeroProjeto.innerText = dados.id;
        terreno.innerText = dados.fichaTecnica.terreno;
        area.innerText = dados.fichaTecnica.areaConstruida;
        localizacao.innerText = dados.localizacao;
        nomesEquipe.innerText = dados.equipe;

        fotoDestaque.src = dados.imagens.img1;
        foto2.src = dados.imagens.img2;
        foto3.src = dados.imagens.img3;
        foto4.src = dados.imagens.img4;
      })
      .catch((error) => console.error(error));

}

