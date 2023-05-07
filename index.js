function TrocarImagem() {
    var imagem = document.getElementById("MinhaImagem");
    if (imagem.src.match("genio.webp")) {
        imagem.src = "genio2.jpg";

    } else {
        imagem.src = "genio.webp";
    }
}