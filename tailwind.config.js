module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backdropGrayscale: {
                50: '.5',
            },
            backgroundImage: {
                ananas: "url('./assets/ananas.jpg')",
                kiwi: "url('./assets/kiwi.jpg')",
                peach: "url('./assets/peach.jpg')",
                watermelon: "url('./assets/watermelon.jpg')",
            },
        },
    },
    plugins: [],
}
