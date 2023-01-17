function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // while Elemente da sind zum mischen
  while (currentIndex != 0) {
    // wählt das element aus
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // tausche es mit dem aktuellen Element aus
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default shuffle;
