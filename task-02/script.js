const images = [
  {
    url: "<https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260>",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "<https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260>",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "<https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260>",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

gallery.classList.add("gallery");
const allImages = images
  .map(({ url, alt }) => {
    const cleanedUrl = url.slice(1, -1);
    return `<li class="gallery-item" > 
    <img class="gallery-image" src="${cleanedUrl}" alt="${alt}"> </li>
      `;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", allImages);
