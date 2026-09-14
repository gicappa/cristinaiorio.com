import colors from 'tailwindcss/colors';

/**
 * Semantic colour tokens alias Tailwind's own palette objects rather than
 * hand-copied hex values, so `text-brand` compiles to exactly the `red-700`
 * the site used before the migration off the Play CDN.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  content: [
    './index.html',
    './*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  future: {
    // Compile `hover:` inside `@media (hover: hover)`. Without this, tapping on a
    // phone leaves the hover state stuck on the last element touched, which the
    // expanding Servizi cards would show as a card that never closes again.
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: colors.red[700],
          hover: colors.red[800],
          light: colors.red[600],
          soft: colors.red[50],
        },
        accent: {
          DEFAULT: colors.amber[600],
          soft: colors.amber[50],
          strong: colors.amber[800],
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // 'Brush Script MT' stays first so desktops that have it locally look
        // unchanged; Dancing Script is the web fallback for phones, which ship
        // no brush face at all and would otherwise render generic cursive.
        script: ['Brush Script MT', 'Brush Script Std', 'Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
};
