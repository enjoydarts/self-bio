import { OGImageRoute } from 'astro-og-canvas';
import { siteConfig } from '../data/siteConfig';

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',

  pages: {
    'og': {
      title: siteConfig.name,
      description: `${siteConfig.subtitle}\nRuby, PHP, TypeScript\n\n● Available for Work`,
    },
  },

  getImageOptions: async (_, page) => {
    return {
      title: page.title,
      description: page.description,
      logo: {
        path: './public/images/avatar.png',
        size: [200],
      },
      bgGradient: [[26, 26, 26]],
      border: { color: [0, 212, 255], width: 20 },
      padding: 80,
      font: {
        title: {
          size: 64,
          families: [
            'Inter',
            'Noto Sans JP',
          ],
          weight: 'SemiBold',
          color: [255, 255, 255],
        },
        description: {
          size: 32,
          families: [
            'Inter',
            'Noto Sans JP',
          ],
          weight: 'Normal',
          color: [176, 176, 176],
        },
      },
      fonts: [
        'https://api.fontsource.org/v1/fonts/inter/latin-400-normal.ttf',
        'https://api.fontsource.org/v1/fonts/inter/latin-600-normal.ttf',
        'https://api.fontsource.org/v1/fonts/noto-sans-jp/japanese-400-normal.ttf',
        'https://api.fontsource.org/v1/fonts/noto-sans-jp/japanese-600-normal.ttf',
      ],
    };
  },
});
