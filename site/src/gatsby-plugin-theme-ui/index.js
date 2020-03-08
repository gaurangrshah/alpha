import { tailwind } from "@theme-ui/presets"

export default {
  ...tailwind,
  initialColorMode: `dark`,
  useCustomProperties: true,
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.orange[4],
    secondary: tailwind.colors.indigo[6],
    text: tailwind.colors.gray[3],
    heading: tailwind.colors.white,
    background: `#141821`,
    divider: tailwind.colors.gray[8],
    textMuted: tailwind.colors.gray[5],
    icon_brightest: tailwind.colors.white,
    icon_darker: tailwind.colors.gray[7],
    icon_darkest: tailwind.colors.gray[8],
    icon_red: tailwind.colors.red[6],
    icon_blue: tailwind.colors.blue[6],
    icon_orange: tailwind.colors.orange[5],
    icon_yellow: tailwind.colors.yellow[5],
    icon_pink: tailwind.colors.pink[5],
    icon_purple: tailwind.colors.purple[6],
    icon_green: tailwind.colors.green[5],
    modes: {
      light: {
        text: tailwind.colors.gray[8],
        heading: tailwind.colors.black,
        primary: tailwind.colors.orange[7],
        background: tailwind.colors.gray[1],
        divider: tailwind.colors.gray[2],
        textMuted: tailwind.colors.gray[6],
        icon_brightest: tailwind.colors.gray[2],
        icon_darker: tailwind.colors.gray[4],
        icon_darkest: tailwind.colors.gray[6],
      },
    },
  },
  breakpoints: [`400px`, `600px`, `900px`, `1200px`, `1600px`],
  sizes: {
    ...tailwind.sizes,
    "1/2": `50%`,
    "1/3": `33.333333%`,
    "2/3": `66.666667%`,
    "1/4": `25%`,
    "2/4": `50%`,
    "3/4": `75%`,
    "1/5": `20%`,
    "2/5": `40%`,
    "3/5": `60%`,
    "4/5": `80%`,
    "1/6": `16.666667%`,
    "2/6": `33.333333%`,
    "3/6": `50%`,
    "4/6": `66.666667%`,
    "5/6": `83.333333%`,
    "1/12": `8.333333%`,
    "2/12": `16.666667%`,
    "3/12": `25%`,
    "4/12": `33.333333%`,
    "5/12": `41.666667%`,
    "6/12": `50%`,
    "7/12": `58.333333%`,
    "8/12": `66.666667%`,
    "9/12": `75%`,
    "10/12": `83.333333%`,
    "11/12": `91.666667%`,
    full: `100%`,
    screen: `100vw`,
  },
  shadows: {
    ...tailwind.shadows,
    new: '0 8px 16px -4px rgba(0,0,0,.1), 0 0 8px -3px rgba(0,0,0,.1)',
    neu: `20px 20px 60px #d5d4d5,
    -20px -20px 60px #ffffff`,
    neuDark: `10px 10px 20px #747474,
    -10px -10px 20px #000000`,
    neuDarkSm: `4px 4px 20px #747474,
    -4px -4px 20px #000000`,
    neuLight: `10px 10px 20px #e9e8e9,
    -10px -10px 20px #ffffff`,
    neuSm: `2px 2px 8px #f1eff0,
    -2px -2px 8px #ffffff;`,
    neuGray: `7px 7px 14px #7b7c7d,
    -7px -7px 14px #858687`,
    insetLight: 'inset 0 0 0 1000px rgba(255,255,255,.2)',
    insetDark: 'inset 0 0 0 1000px rgba(0,0,0,.4)',
    headerShadow: '-2px 5px 5px rgba(87, 87, 87, 0.08)',
    textShadowLight: '-2px 0px 4px rgba(178, 178, 178, 0.25)',
    textShadowDark: '1px 1px 1px rgba(0, 0, 0, 0.25)',
    outlineXl: '0 0 0 6px rgba(66, 153, 225, 0.5)',
  },
  borders: {
    ...tailwind.borders,
    test: '1px solid yellow',
    default: '1px solid purple',
  },
  text: {
    ...tailwind.text,
    large: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    ...tailwind.styles,
    root: {
      ...tailwind.styles.root,
      color: `text`,
      backgroundColor: `background`,
      a: {
        transition: `all 0.3s ease-in-out`,
        "&:hover": {
          color: `green`,
          textDecoration: `none`,
        },
      },
    },
    Footer: {
      textAlign: `center`,
      display: `block`,
      position: `absolute`,
      bottom: 0,
      color: `textMuted`,
      px: [2, 3],
      py: [3, 4],
    },
    Container: {
      maxWidth: `5xl`,
    },
    p: {
      fontSize: [1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      color: `text`,
    },
    blockquote: {
      marginLeft: 0,
      p: {
        fontSize: [2, 3],
        fontWeight: `medium`,
        color: `heading`,
      },
    },
    h1: {
      ...tailwind.styles.h1,
      fontSize: [6, 7, 8],
      mt: 2,
      mb: 4,
      textShadow: `rgba(255, 255, 255, 0.15) 0px 5px 35px`,
      letterSpacing: `wide`,
      color: `heading`,
    },
    h2: {
      ...tailwind.styles.h2,
      fontSize: [4, 5, 6],
      mt: 2,
      color: `heading`,
    },
    h3: {
      ...tailwind.styles.h3,
      fontSize: [3, 4, 5],
      mt: 3,
      color: `heading`,
    },
    h4: {
      ...tailwind.styles.h4,
      fontSize: [2, 3, 4],
      color: `heading`,
    },
    h5: {
      ...tailwind.styles.h5,
      fontSize: [1, 2, 3],
      color: `heading`,
    },
    h6: {
      ...tailwind.styles.h6,
      fontSize: 1,
      mb: 2,
      color: `heading`,
    },
  },
  buttons: {
    toggle: {
      color: `background`,
      border: `none`,
      backgroundColor: `text`,
      cursor: `pointer`,
      alignSelf: `center`,
      px: 3,
      py: 2,
      ml: 3,
    },
  },
  texts: {
    bigger: {
      p: {
        fontSize: [2, 3, 4],
      },
    },
  },
}
