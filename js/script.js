 const movie = {
    title: "Harry Potter",
    url: "http://caminho.com/imagem",
};

const listBanner = document.querySelector(".list-banners");
const figure = document.createElement("figure"); //<figure></figure>
const img = document.createElement("img"); //<img>
const title = document.createElement("figcaption"); //<figcaption></figcaption>

figure.classList.add("wrapper-banner"); //<figure class="wrapper-banner"></figure>

img.classList.add("main-banner"); //<img class="main-banner">
img.src = "./img/image 1.png"; //<img img class="main-banner" src="./img/image 1.png">
img.alt = "Banner of the movie"; //<img img class="main-banner" src="./img/image 1.png" alt="Banner of the movie">

title.classList.add("main-caption"); //<figcaption class="main-caption"></figcaption>
title.textContent = "Nome do Filme"; //<figcaption class="main-caption">Nome do Filme</figcaption>

/*
<figure class="wrapper-banner">
    <img img class="main-banner" src="./img/image 1.png" alt="Banner of the movie">
    figcaption class="main-caption">Nome do Filme</figcaption>
</figure>
*/
figure.insertAdjacentElement("beforeend", img);
figure.insertAdjacentElement("beforeend", title);

/*
<section>
    <figure class="wrapper-banner">
        <img img class="main-banner" src="./img/image 1.png" alt="Banner of the movie">
        <figcaption class="main-caption">Nome do Filme</figcaption>
    </figure>
</section>   
*/
listBanner.insertAdjacentElement("beforeend", figure)