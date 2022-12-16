const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];


// for (const { url, alt } of images) {
// 	gallery.insertAdjacentHTML(
// 		"beforeend",
// 		`<li> <img src="${url}" alt ="${alt}" width = 200 height = 150> </li>`
// 	);
// }

// const galleryList = ({ url, alt }) => {
// 	return `<li>
// 	<img src='${url} alt='${alt}' width = 200 height = 150></img>
// 	</li>`;
// };
// gallery.insertAdjacentHTML("afterbegin", images.map(galleryList).join(""));

// gallery.style.cssText = `display: flex;
// align-items: center;
// justify-content: center;
// list-style-type: none;
// gap:30px;
// margin:0;
// padding: 0;
// `;

// const galleryEl = document.querySelector(".gallery");

// let galleryList = "";
// for (const image of images) {
//   galleryList += `<li><img alt="${image.alt}" src="${image.url}" width = 200 height = 150> </li>`;
// }


// galleryEl.insertAdjacentHTML("afterbegin", galleryList);



const galleryEL = document.querySelector('.gallery');

const galleryListEl = ({ url, alt } = {}) => {
  return `<li "><img src="${url}" alt="${alt}" width = 200 height = 200></li>`;
};

const galleryLi = images.map(galleryListEl).join('');

galleryEL.insertAdjacentHTML('beforeend', galleryLi);

galleryEL.style.cssText = `display: flex;
align-items: center;
justify-content: center;
list-style-type: none;
gap:30px;
margin:0;
padding: 0;
margin-top: 40px;
`;