const reasons = [
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
    img: "https://raw.githubusercontent.com/kanitafro/reasonstolive/main/images/hotpink-blossom1.jpg", 
    text: "The blossoms want to bloom for you."
  },
  {
    type: "image",
    img: "https://raw.githubusercontent.com/kanitafro/reasonstolive/main/images/begging-dog1.jpg",
    text: "Your dog will miss you terribly."
  },
  {
    type: "quote",
    content: `Like two and two make four 
    I know that life is worth living
    Even though bread is expensive
    And the freedom is teeny`,
    author: "Ferreira Gullar"
  },
  {
    type: "image",
    img: "https://raw.githubusercontent.com/kanitafro/reasonstolive/main/images/german-notes.jpg",
    text: "There are so many languages left to learn"
  },
  {
    type: "image",
    img: "https://raw.githubusercontent.com/kanitafro/reasonstolive/main/images/fire-roses.jpg",
    text: "No matter how hidden, there's fire burning inside you. That spark is waiting to be found."
  },
  {
    type: "testimonial",
    content: "I saw a person on the sidewalk stopping to take pictures of the blossomed trees. Made me smile wide. I love seeing people find beauty in nature, I love seeing people appreciate it and not being afraid to stop and appreciate it.",
    author: "Kanita"
  },
  {
    type: "image",
    img: "https://raw.githubusercontent.com/kanitafro/reasonstolive/main/images/cats-in-a-crate.jpg",
    text: "You haven't pet all the cats yet."
  },
  {
    type: "quote",
    content: `It's been too hard living
    But I'm afraid to die
    'Cause I don't know what's up there
    Beyond the sky

    It's been a long
    A long time coming, but I know
    A change gon' come
    Oh yes, it will`,
    author: "Sam Cooke - A change is gonna come"
  },   
  {
    type: "quote",
    content: "I also have nature and art and poetry, and if that isn't enough, what is?",
    author: "Vincent Van Gogh"
  },
  {
    type: "testimonial",
    content: "I'm not going to lie, I've thought about it. I have. And all of my reactions to these thoughts of mine were “yeah, I agree” and not “you're stupid, don't think about it”. I won't act on it because of the promise I made to you. You wouldn't forgive me in this or the next life if I left. I wouldn't forgive me either if I were you.",
    author: "Kanita"
  },
  {
    type: "image",
    img: "https://raw.githubusercontent.com/kanitafro/reasonstolive/main/images/yellow-flower3.jpg",
    text: "Yellow flowers want you to look at them. They are determined to show you joy, let them. Even the tiniest bits of joy are powerful."
  },
  {
    type: "testimonial",
    content: `To live. Live for non-existent British summers. Live for the first crispy sip of a Diet Coke. Live for the heartbreak of another email that starts with “we loved your interview, but on this occasion..”. Live for a good book to ride a thunder storm. Live for tears, live for happiness, live to feel. Some of us are so afraid from allowing ourselves to be in the moment that we miss out on how wonderful we truly are; how wonderful life is that it continues to give us the highs along with the lows.`,
    author: "Maryam Clark"
  },
  {
    type: "image",
    img: "https://raw.githubusercontent.com/kanitafro/reasonstolive/main/images/yarn-colorful.jpg",
    text: "There are so many things that haven't been created yet and they're waiting for you to create them."
  },
  {
    type: "quote",
    content: "The sun is fooding into my room as I write and I have spent the afternoon buying oranges and cheese and honey and being very happy after having for two weeks been very ill, because can see every now and then how one must live in this world even if one's true full soul is not with one.",
    author: "Sylvia Plath"
  },
  {
    type: "image",
    img: "https://raw.githubusercontent.com/kanitafro/reasonstolive/main/images/burgundy-flower.jpg",
    text: "Being brave, even in tiny ways, even if no one else notices it but you."
  },
  {
    type: "quote",
    content: "As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others",
    author: "Audrey Hepburn"
  },
  {
    type: "image",
    img: "https://raw.githubusercontent.com/kanitafro/reasonstolive/main/images/hotpink-blossom-2-bloomed.jpg",
    text: "You're someone's favourite memory."
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
    const testimonial = document.createElement("div");
    testimonial.className = "testimonial";
    
    const content = document.createElement("p");
    content.textContent = reason.content;
    testimonial.appendChild(content);
    
    if (reason.author) {
      const author = document.createElement("div");
      author.className = "testimonial-author";
      author.textContent = `~ ${reason.author}`;
      testimonial.appendChild(author);
    }
    
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

document.getElementById('type').addEventListener('change', function() {
  const type = this.value;
  const authorField = document.getElementById('authorField');
  const imageNotice = document.getElementById('imageNotice');
  const contentLabel = document.querySelector('#contentField label');

  // Show/hide fields based on selection
  authorField.style.display = (type === 'quote' || type === 'testimonial') ? 'block' : 'none';
  imageNotice.style.display = (type === 'image') ? 'block' : 'none';
  
  // Update content label
  contentLabel.textContent = (type === 'image') 
    ? "Image Description:" 
    : "Content:";
});
/*
document.getElementById('reasonForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const type = document.getElementById('type').value;
  const content = document.getElementById('content').value;
  
  if (type === 'image') {
    // Open GitHub submission instructions
    window.open('https://github.com/kanitafro/reasonstolive/blob/main/SUBMISSIONS.md', '_blank');
  } else {
    const author = document.getElementById('author').value || 'Anonymous';
    
    // Here you would normally send data to a server
    console.log('Submission:', { type, author, content });
    
    // For now, just show a confirmation
    alert('Thank you for your submission! It will be reviewed.');
    this.reset();
  }
});*/
