export default {
  plugins: {
    'postcss-import': {},
    'tailwind/nesting': 'postcss-nesting',
    autoprefixer: {},
    tailwindcss: {},
    'postcss-preset-env': {
      features: {'nesting-rules': false}
    }
  }
}
