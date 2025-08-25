let cards = document.querySelectorAll('.test-box');
let loadMoreBtn = document.getElementById('loadMoreBtn');

let visibleCards = 5; // Pehle 5 cards show karega

for (let i = 0; i < visibleCards && i < cards.length; i++) {
  cards[i].style.display = 'flex';
}

loadMoreBtn.addEventListener('click', function () {
  let count = 0;
  for (let i = visibleCards; i < visibleCards + 5 && i < cards.length; i++) {
    cards[i].style.display = 'flex';
    count++;
  }
  visibleCards += count;

  if (visibleCards >= cards.length) {
    loadMoreBtn.style.display = 'none';
  }
});
