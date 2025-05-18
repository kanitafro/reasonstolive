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
    text: "Your dog will miss you terribly."
  },
  {
    type: "testimonial",
    content: "I saw a person on the sidewalk stopping to take pictures of the blossomed trees. Made me smile wide. I love seeing people find beauty in nature, I love seeing people appreciate it and not being afraid to stop and appreciate it."
  },
  {
    type: "image",
    img: "https://raw.githubusercontent.com/kanitafro/reasonstolive/main/images/cats-in-a-crate.jpg",
    text: "You haven't pet all the cats yet."
  },
  {
    type: "quote",
    content: "I also have nature and art and poetry, and if that isn't enough, what is?",
    author: "Vincent Van Gogh"
  },
  {
    type: "image",
    img: "https://raw.githubusercontent.com/kanitafro/reasonstolive/main/images/yellow-flower3.jpg",
    text: "Yellow flowers want you to look at them. They are determined to show you joy, let them."
  },
  {
    type: "testimonial",
    content: "I'm not going to lie, I've thought about it. I have. And all of my reactions to these thoughts of mine were “yeah, I agree” and not “you're stupid, don't think about it”. I won't act on it because of the promise I made to you. You wouldn't forgive me in this or the next life if I left. I wouldn't forgive me either if I were you."
  },
  {
    type: "quote",
    content: "As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others",
    author: "Audrey Hepburn"
  },
  {
    type: "image",
    img: "https://raw.githubusercontent.com/kanitafro/reasonstolive/main/images/fire-roses.jpg",
    text: "No matter how hidden, there's fire burning inside you. That spark is waiting to be found."
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