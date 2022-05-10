module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui", "tw-elements/dist/plugin")
  ],
}