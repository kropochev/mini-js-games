const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardChosenIds = []
const cardWon = []

function createBord() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        console.log(card, i)
    }
}

createBord()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardChosenIds[0]
    const optionTwoId = cardChosenIds[1]
    console.log('checkMatch')

    if (optionOneId == optionTwoId) {
        alert ('You have chosen the same card')
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }

    if (cardChosen[0] == cardChosen[1]) {
        // alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardWon.push(cardChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        // alert('Sorry, try again')
    }
    resultDisplay.textContent = cardWon.length
    cardChosen = []
    cardChosenIds = []
    if (cardWon.length == cardArray.length / 2) {
        resultDisplay.textContent = 'You found them all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    console.log(cardArray[cardId].name)
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    console.log('clicked', cardId)
    console.log('cardChosen', cardChosen)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}


console.log(gridDisplay)