const reasons = [
  {
    img: "https://source.unsplash.com/400x300/?nature",
    text: "Because the world is filled with beautiful places waiting for you."
  },
  {
    img: "https://raw.githubusercontent.com/kanitafro/reasonstolive/main/images/hotpink-blossom1.jpg", 
    text: "The blossoms are too pretty."
  },
  {
    img: "https://source.unsplash.com/400x300/?sunrise",
    text: "Because every sunrise is a new beginning."
  },
  {
    testimonial: "I saw a person on the sidewalk stopping to take pictures of the blossomed trees. Made me smile wide. I love seeing people find beauty in nature, I love seeing people appreciate it and not being afraid to stop and appreciate it. This is something I had to learn over the past couple of years or so. Slow down, there's no shame in stopping to appreciate life. My camera roll is full of close-ups of blossoms, colorful weed, and many kinds of flowers – those that I can recognize and those that I'm not able to name in a million years but I appreciate them the same nevertheless. I love these rare moments in which the world feels like a nice place when most of the time it's evil beyond comprehension."
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

  if (reason.testimonial) {
    const bubble = document.createElement("p");
    bubble.className = "speech-bubble";
    bubble.textContent = reason.testimonial;
    card.appendChild(bubble);
  } else {
    const image = document.createElement("img");
    image.src = reason.img;
    image.alt = "Reason to live image";

    const text = document.createElement("p");
    text.textContent = reason.text;

    card.appendChild(image);
    card.appendChild(text);
  }

  gallery.appendChild(card);
});
