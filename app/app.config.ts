export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: 'cursor-pointer active:scale-[0.98] transition-transform duration-150'
      },
      defaultVariants: {
        color: 'neutral'
      }
    },
    colors: {
      neutral: 'neutral',
      primary: 'sky'
    },
  },
  seo: {
    title: 'Logspot - Opensource changelog template',
    description:
      'Logspot is an open source change log template made with Nuxt and Tailwind',
    image: 'https://logspot.vercel.app/logspot-banner.jpg',
    url: 'https://logspot.vercel.app'
  }
});
