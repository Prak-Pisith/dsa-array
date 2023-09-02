var rainbowColors = [
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Indigo',
    'Violet'
];
var displayRainbow = function (colors) {
    colors.forEach(function (color) {
        console.log("color: ".concat(color));
    });
};
displayRainbow(rainbowColors);
