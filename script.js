const reasons = [
  {
    img: "https://source.unsplash.com/400x300/?nature",
    text: "Because the world is filled with beautiful places waiting for you."
  },
  {
    img: "https://source.unsplash.com/400x300/?dog",
    text: "Because someone—human or animal—needs your love and care."
  },
  {
    img: "https://source.unsplash.com/400x300/?sunrise",
    text: "Because every sunrise is a new beginning."
  },
  {
    img: "https://source.unsplash.com/400x300/?friends",
    text: "Because your story isn’t finished yet."
  },
  {
    img: "https://source.unsplash.com/400x300/?stars",
    text: "Because the stars still shine for you."
  }
];

const gallery = document.getElementById("gallery");

reasons.forEach((reason) => {
  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("img");
  image.src = reason.img;
  image.alt = "Reason to live image";

  const text = document.createElement("p");
  text.textContent = reason.text;

  card.appendChild(image);
  card.appendChild(text);
  gallery.appendChild(card);
});
