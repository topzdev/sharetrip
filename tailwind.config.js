/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-merriweather)', ...fontFamily.serif],
        sans: ['var(--font-work-sans)', ...fontFamily.sans],
      },

      colors: {
        primary: {
          DEFAULT: '#249696',
          '50': '#8EE4E4',
          '100': '#7DE0E0',
          '200': '#5CD8D8',
          '300': '#3CD0D0',
          '400': '#2CB7B7',
          '500': '#249696',
          '600': '#196969',
          '700': '#0E3C3C',
          '800': '#030E0E',
          '900': '#000000'
        }
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
}
