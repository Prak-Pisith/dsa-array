const rainbowColors: string[] = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Indigo',
  'Violet'
]

const displayRainbow = (colors: string[]): void => {
  colors.forEach(color => {
    console.log(`color: ${color}`);
  })
}

displayRainbow(rainbowColors);