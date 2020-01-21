import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

import { injectGLobal } from 'styled-components';
import styledComponentsRhythm from '@ceteio/styled-components-rhythm';

Wordpress2016.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  };
};

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

export const myrhythm = styledComponentsRhythm({
  baseFontSize: 1, // 1rem. Browser default makes this 16px
  baseLineHeight: 1.2, // unitless line-height, see: https://css-tricks.com/almanac/properties/l/line-height/#comment-1587658
  rhythmHeight: 0.75, // rem units. With browser default, this is 16px * 0.75rem == 12px
  capHeights: {
    // Calculated with https://codepen.io/sebdesign/pen/EKmbGL?editors=0011
    Lato: 0.72,
  },
  debug: true,
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
