import React from 'react';
import { Box } from 'grommet';
import { BorderType } from 'grommet/utils';
import { ArrowDropDown } from '@styled-icons/material';
import { css } from 'styled-components';

const baseSpacing = 24;
const scale = 6;
const baseFontSize = 16;
const fontScale = baseSpacing / scale;

const fontSizing = (factor) => ({
  size: `${baseFontSize + factor * fontScale}px`,
  height: `${baseSpacing + factor * fontScale}px`,
  maxWidth: `${baseSpacing * (baseFontSize + factor * fontScale)}px`,
});

const colors = {
  white: '#fff',
  brand: '#1A237E',
  'background-back': {
    light: '#E1E1E1',
  },
  text: {
    light: '#000',
  },
  placeholder: '#8B8B8B',
  'status-error': '#D32F2F',
  'status-warning': '#D32F2F',
  'status-critical': '#D32F2F',
};

export const getColor = (color: string) => (props) => props.theme.global.colors[color];

export const breakpointStyle = (breakpointString: string, content: string) => (props) => {
  const breakpoint = props.theme.global.breakpoints[breakpointString];

  if (breakpoint) {
    return css`
      @media only screen ${breakpoint.value && `and (max-width: ${breakpoint.value}px)`} {
        ${content};
      }
    `;
  }
};

export default {
  global: {
    font: {
      family: 'Open Sans, sans-serif',
      ...fontSizing(0),
    },
    colors,
    size: {
      modalHeight: '480px',
      modalWidth: '486px',
    },
    input: {
      weight: 500,
    },
    control: {
      border: {
        width: '2px',
        radius: '6px',
        color: 'brand',
      },
      pad: '8px',
    },
    breakpoints: {
      small: {
        value: baseSpacing * 32,
        // borderSize: {
        //   xsmall: '1px',
        //   small: '2px',
        //   medium: `${baseSpacing / 6}px`,
        //   large: `${baseSpacing / 4}px`,
        //   xlarge: `${baseSpacing / 2}px`,
        // },
        // edgeSize: {
        //   none: '0px',
        //   hair: '1px', // for Chart
        //   xxsmall: '2px',
        //   xsmall: `${baseSpacing / 8}px`,
        //   small: `${baseSpacing / 4}px`,
        //   medium: `${baseSpacing / 2}px`,
        //   large: `${baseSpacing}px`,
        //   xlarge: `${baseSpacing * 2}px`,
        // },
        // size: {
        //   xxsmall: `${baseSpacing}px`,
        //   xsmall: `${baseSpacing * 2}px`,
        //   small: `${baseSpacing * 4}px`,
        //   medium: `${baseSpacing * 8}px`,
        //   large: `${baseSpacing * 16}px`,
        //   xlarge: `${baseSpacing * 32}px`,
        //   full: '100%',
        // },
      },
      medium: {
        value: 1200,
      },
      large: {}, // anything above 'medium'
    },
    // Breakpoints used at Server Side Rendering for the initial rendering
    // These values correspond to the theme breakpoints
    deviceBreakpoints: {
      phone: 'small',
      tablet: 'medium',
      computer: 'large',
    },
    edgeSize: {
      // none: '0px',
      // hair: '1px', // for Chart
      // xxsmall: `${baseSpacing / 8}px`, // 3
      // xsmall: `${baseSpacing / 4}px`, // 6
      // small: `${baseSpacing / 2}px`, // 12
      // medium: `${baseSpacing}px`, // 24
      // large: `${baseSpacing * 2}px`, // 48
      // xlarge: `${baseSpacing * 4}px`, // 96
      responsiveBreakpoint: 'phone',
    },
  },

  box: {
    responsiveBreakpoint: 'small', // when we switch rows to columns
    // extend: undefined,
  },

  text: {
    xsmall: { ...fontSizing(-1.5) },
    small: { ...fontSizing(-0.5) },
    medium: { ...fontSizing(0) },
    large: { ...fontSizing(0.5) },
    xlarge: { ...fontSizing(1) },
    xxlarge: { ...fontSizing(3.5) },
  },

  heading: {
    level: {
      3: {
        small: {
          size: '20px',
        },
      },
    },
    weight: 500,
  },

  textInput: {
    extend: `
      padding: 8px;
    `,
  },

  formField: {
    border: {
      color: 'brand',
      size: 'small',
      side: 'all',
    } as BorderType,
    round: 'xsmall',
    label: {
      margin: { vertical: 'small', horizontal: '0' },
      size: '15px',
      weight: 600,
    },
    error: {
      size: 'small',
      margin: { horizontal: '0', bottom: '0' },
    } as any,
    margin: '0',
  },

  button: {
    size: {
      medium: {
        pad: {
          vertical: '6px',
          horizontal: '42px',
        },
      },
    },
    // extend: `
    //   font-size: 18px;
    // `,
    color: { dark: colors.white, light: colors.brand },
  },

  tab: {
    active: {
      color: 'white',
      background: 'brand',
    },
    border: {
      side: 'all',
      size: 'small',
      color: {
        light: 'brand',
      },
      active: {
        color: {
          light: 'brand',
        },
      },
      hover: {
        color: {
          light: 'brand',
        },
      },
    },
    extend: `
      border-radius: inherit;
      border-left-width: 1px;
      border-right-width: 1px;
      border-bottom-width: 0;
    `,
    hover: {
      color: {
        dark: 'white',
        light: 'black',
      },
    },
    margin: {
      vertical: '0',
      horizontal: '0',
    },
    pad: {
      bottom: '10px',
      top: '10px',
      horizontal: 'large',
    },
  },

  tabs: {
    header: {
      extend: `
        & > *:first-child {
          border-top-left-radius: 24px;
        }

        & > *:first-child > * {
          border-left-width: 2px;
        }

        & > *:last-child {
          border-top-right-radius: 24px;
        }

        & > *:last-child > * {
          border-right-width: 2px;
        }
        
      `,
    },
  } as any,

  table: {
    header: {
      pad: { horizontal: 'large', vertical: 'xsmall' },
      background: 'brand',
      extend: css`
        border-left: 18px solid ${colors.brand};
        border-right: 18px solid ${colors.brand};

        & th {
          height: 48px;
          border-bottom: none;
        }
      `,
    },
    body: {
      pad: { horizontal: 'large', vertical: 'xsmall' },
    },
  } as any,

  select: {
    container: {
      extend: `
        border: 2px solid ${colors.brand};
        border-top: none;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
      `,
    },
    control: {
      open: `
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      `,
    },
    icons: {
      margin: { horizontal: '0' },
      down: (
        <Box height="24px" direction="row" align="center" justify="center">
          <ArrowDropDown color={colors.brand} size="48" />
        </Box>
      ),
    },
    options: {
      container: {
        pad: {
          vertical: 'xxsmall',
          horizontal: 'small',
        },
      },
      text: {
        margin: 'none',
      },
    },
  } as any,
};
