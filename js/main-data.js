import { setElementBg } from "./bg-elements.js";

function getGenresElement(genreList) {
    const genreElement = document.createElement("ul");
    genreList.forEach(genre => {
        const item = document.createElement("li");
        item.innerText = `${genre}`;
        genreElement.appendChild(item);
    });
    return genreElement;
}

function getProductItemTextElement({ genres, title }) {
    const itemText = document.createElement("div");
    itemText.classList.add("product__item__text");
    const genresElement = getGenresElement(genres);

    const titleElement = document.createElement("h5");
    titleElement.innerHTML = `<a href="/anime-details.html">${title}</a>`;

    itemText.appendChild(genresElement);
    itemText.appendChild(titleElement);

    return itemText;
}

function getElementPic({ url, views, rating }) {
    const elementPic = document.createElement("div");
    elementPic.classList.add("product__item__pic");
    elementPic.style.backgroundImage = `url(${url})`;
    elementPic.innerHTML = `
        <div class="ep">${rating}</div>
        <div class="view"><i class="fa fa-eye"></i> ${views}</div>
    `;
    return elementPic;
}

const renderTopAnime = (animes) => {
    const container = document.querySelector(".filter__gallery");
    container.innerHTML = "";

    animes.forEach(anime => {
        container.insertAdjacentHTML("afterbegin", `
            <div class="product__sidebar__view__item set-bg mix"
                data-setbg="${anime.image}">
                <div class="ep">${anime.rating} / 10</div>
                <div class="view"><i class="fa fa-eye"></i>${anime.views}</div>
                <h5><a href="/anime-details.html">${anime.title}</a></h5>
            </div>
        `);
    })
}

const renderAnimeList = (animeList, genres) => {

}

const mainData = async () => {
    const url = "https://glo--anime-site-default-rtdb.europe-west1.firebasedatabase.app/anime.json";

    await fetch(url).then((response) => {
        console.log(response)
        return response.json();
    }).then((animeList) => {

        const topAnimes = animeList.sort((a1, a2) => a2.views - a1.views).slice(0, 5);
        renderTopAnime(topAnimes);

        const genres = animeList.reduce((acc, anime) => {
            acc.add(anime.ganre);
            return acc;
        }, new Set());
        renderAnimeList(animeList, genres);


        const parent = document.querySelector(".trending__product .row:nth-child(2)");
        animeList.forEach((anime) => {
            const element = document.createElement('div');
            element.classList.add("col-lg-4", "col-md-6", "col-sm-8");

            const item = document.createElement("div");
            item.classList.add("product__item");
            item.title = `${anime.description}`;

            const itemPic = getElementPic(
                {
                    url: anime.image,
                    views: anime.views,
                    rating: anime.rating,
                }
            );

            const itemText = getProductItemTextElement({ genres: anime.tags, title: anime.title });

            item.appendChild(itemPic);
            item.appendChild(itemText);

            element.appendChild(item);
            parent.appendChild(element);
        });

    }).catch((err) => {
        console.error("Ошибка получения аниме");
        throw err;
    });



};

export default mainData;