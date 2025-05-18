const reasons = [
  {
    type: "image",
    img: "https://raw.githubusercontent.com/kanitafro/reasonstolive/main/images/hotpink-blossom1.jpg", 
    text: "The blossoms want to bloom for you."
  },
  {
    type: "quote",
    title:"To the Young Who Want to Die",
    content: `Sit down. Inhale. Exhale.
The gun will wait. The lake will wait.
The tall gall in the small seductive vial
will wait will wait:
will wait a week: will wait through April

You do not have to die this certain day.
Death will abide, will pamper your postponement
I assure you death will wait. Death has
a lot of time. Death can
attend to you tomorrow. Or next week. Death is
just down the street; is most obliging neighbor;
can meet you any moment.

You need not die today
Stay here - through pout or pain or peskyness.
Stay here. See what the news is going to be tomorrow.

Graves grow no green that you can use.
Remember, green's your color. You are Spring.`,
    author: "Gwendolyn Brooks"
  },
  {
    type: "image",
    img: "https://raw.githubusercontent.com/kanitafro/reasonstolive/main/images/begging-dog1.jpg",
    text: "Because your dog will miss you terribly."
  },
  {
    type: "testimonial",
    content: "I saw a person on the sidewalk stopping to take pictures of the blossomed trees. Made me smile wide. I love seeing people find beauty in nature, I love seeing people appreciate it and not being afraid to stop and appreciate it."
  },
  {
    type: "quote",
    content: "The world breaks everyone, and afterward, some are strong at the broken places.",
    author: "Ernest Hemingway"
  },
  {
    type: "image",
    img: "https://raw.githubusercontent.com/kanitafro/reasonstolive/main/images/yellow-flower1.jpg",
    text: "Because yellow flowers emit joy."
  },
  {
    type: "quote",
    content: "As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others",
    author: "Audrey Hepburn"
  },
  {
    type: "image",
    img: "https://raw.githubusercontent.com/kanitafro/reasonstolive/main/images/yellow-flower2.jpg"
  },
  {
    type: "image",
    img: "https://source.unsplash.com/400x300/?stars",
    text: "Because the stars still shine for you."
  }
];

const gallery = document.getElementById("gallery");

reasons.forEach((reason) => {
  const card = document.createElement("div");
  card.className = "card";

  if (reason.type === "image") {
    const imageContainer = document.createElement("div");
    imageContainer.className = "card-image";
    
    const image = document.createElement("img");
    image.src = reason.img;
    image.alt = "Reason to live image";

    imageContainer.appendChild(image);
    
    if (reason.text) {
      const caption = document.createElement("div");
      caption.className = "card-caption";
      caption.textContent = reason.text;
      imageContainer.appendChild(caption);
    }
    
    card.appendChild(imageContainer);
    
  } else if (reason.type === "testimonial") {
    const testimonial = document.createElement("p");
    testimonial.className = "testimonial";
    testimonial.textContent = reason.content;
    card.appendChild(testimonial);
    
  } // Update the card creation logic (inside forEach loop):
   else if (reason.type === "quote") {
    const quote = document.createElement("div");
    quote.className = "quote";
    
    if (reason.title) {
      const title = document.createElement("h3");
      title.className = "quote-title";
      title.textContent = reason.title;
      quote.appendChild(title);
    }
    
    const content = document.createElement("div");
    content.className = "quote-content";
    content.innerHTML = `"${reason.content}"`;
    quote.appendChild(content);
    
    if (reason.author) {
      const author = document.createElement("div");
      author.className = "quote-author";
      author.textContent = `— ${reason.author}`;
      quote.appendChild(author);
    }
    
    card.appendChild(quote);
}

  gallery.appendChild(card);
});