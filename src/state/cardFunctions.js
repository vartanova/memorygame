import image1 from "../assets/catHmm.webp";
import image2 from "../assets/catEyes.webp";
import image3 from "../assets/catMouse.jpg";
import image4 from "../assets/catRose.jpg";
import image5 from "../assets/catBoo.webp";
import image6 from "../assets/catHuh.jpg";
import image7 from "../assets/catLoading.webp";
import image8 from "../assets/catCute.png";
import image9 from "../assets/catfu.jpg";
import image10 from "../assets/catWater.jpg";
import image11 from "../assets/dog.jpg";
import image12 from "../assets/humster.jpg";
import image13 from "../assets/mem.jpg";
import image14 from "../assets/monkey.jpg";
import image15 from "../assets/okak.jpg";
import image16 from "../assets/catMem.png";
import image17 from "../assets/dogSmile.jpg";
import image18 from "../assets/cat1.jpg";
import image19 from "../assets/img19.jpg";
import image20 from "../assets/img20.jpg";
import image21 from "../assets/img21.jpg";
import image22 from "../assets/img22.jpg";
import image23 from "../assets/img23.jpg";
import image24 from "../assets/img24.jpg";
import image25 from "../assets/img25.jpg";
import image26 from "../assets/img26.jpg";
import image27 from "../assets/img27.jpg";
import image28 from "../assets/img28.jpg";
import image29 from "../assets/img29.jpg";
import image30 from "../assets/img30.jpg";
import image31 from "../assets/img31.jpg";
import image32 from "../assets/img32.jpg";



const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image1,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
];

export const generateCardSet = (numberOfCards) => {
  const cards = [];
  let id = 1;
  for (let i = 1; i <= numberOfCards; i++) {
    const card1 = {
      id: id,
      image: images[i],
      imageUp: false,
      matched: false,
    };
    id++;
    const card2 = {
      id: id,
      image: images[i],
      imageUp: false,
      matched: false,
    };
    cards.push(card1);
    cards.push(card2);
    id++;
  }

  return cards;
};

export const getCard = (id, cards, numberOfCards) => {
  for (let i = 0; i < 2 * numberOfCards; i++) {
    if (cards[i].id === id) {
      return cards[i];
    }
  }
};

export const cardsHaveIdenticalImages = (id1, id2, cards, numberOfCards) => {
  if ((getCard(id1, cards, numberOfCards).image === getCard(id2, cards, numberOfCards).image) && (getCard(id1, cards, numberOfCards).id !== getCard(id2, cards, numberOfCards).id)) {
    return true;
  } else {
    return false;
  }
};
