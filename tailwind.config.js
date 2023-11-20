/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "black-panther": "url('/images/black-panther.jpg')",
        "iron-man": "url('/images/iron-man.jpg')",
        spiderman: "url('/images/spiderman.jpg')",
        thor: "url('/images/thor.jpg')",
        flash: "url('/images/flash.jpg')",
        "black-widow": "url('/images/black-widow.jpg')",
        "scarlet-witch": "url('/images/scarlet-witch.jpg')",
        "star-lord": "url('/images/star-lord.jpg')",
        groot: "url('/images/groot.jpg')",
        "green-arrow": "url('/images/green-arrow.jpg')",
        "batman": "url('/images/batman.jpg')",
        "superman": "url('/images/superman.jpg')",
        "joker": "url('/images/joker.jpg')",
        "wonder-woman": "url('/images/wonder-woman.jpg')",
        "harley-quinn": "url('/images/harley-quinn.jpg')",
        "supergirl": "url('/images/supergirl.jpg')",
        "doctor-strange": "url('/images/doctor-strange.jpg')",
        "hawkeye": "url('/images/hawkeye.jpg')",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
