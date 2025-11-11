import image1 from "../assets/catHmm.webp"
import image2 from "../assets/catEyes.webp"
import image3 from "../assets/catMouse.jpg"
import image4 from "../assets/catRose.jpg"
import image5 from "../assets/catBoo.webp"
import image6 from "../assets/catHuh.jpg"
import image7 from "../assets/catLoading.webp"
import image8 from "../assets/catCute.png"

export const NUM_IMAGES = 8;

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image1]

export const generateCardSet = () => {
    const cards = [];
    let id = 1;
    for (let i = 1; i <= NUM_IMAGES; i++) {
        const card1 = {
            id: id,
            image: images[i],
            imageUp: false,
            matched: false
        };
        id++;
        const card2 = {
            id: id,
            image: images[i],
            imageUp: false,
            matched: false
        };
        cards.push(card1);
        cards.push(card2);
        id++;
    }

    return cards;
};

export const getCard = (id, cards) => {
    for (let i = 0; i < 2 * NUM_IMAGES; i++) {
        if (cards[i].id === id) {
            return cards[i];
        }
    };
}

export const cardsHaveIdenticalImages = (id1, id2, cards) => {
    if (getCard(id1, cards).image === getCard(id2, cards).image) {
        return true;
    } else {
        return false;
    }
}
