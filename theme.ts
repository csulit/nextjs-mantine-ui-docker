'use client';

import { createTheme, CSSVariablesResolver } from '@mantine/core';
import { Karla, Barlow } from 'next/font/google';

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
  display: 'swap',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const theme = createTheme({
  fontFamily: karla.style.fontFamily,
  headings: { fontFamily: barlow.style.fontFamily, fontWeight: '700'},
  other: {
    pumpkin: '#FF7200',
    navy: '#001738',
    richBlack: '#111622',
    info: '#2463BC',
    success: '#16A679',
    error: '#C5280C',
    neutral: '#ABB1BA',
  },
  /* Put your mantine theme override here */
});

export const cssResolver: CSSVariablesResolver = (config) => ({
  variables: {
  },
  light: {
    '--mantine-color-pumpkin': config.other.pumpkin,
    '--mantine-color-navy': config.other.navy,
    '--mantine-color-rich-black': config.other.richBlack,
    '--mantine-color-info': config.other.info,
    '--mantine-color-success': config.other.success,
    '--mantine-color-neutral': config.other.neutral,
  },
  dark: {
    '--mantine-color-pumpkin': config.other.pumpkin,
    '--mantine-color-navy': config.other.navy,
    '--mantine-color-rich-black': config.other.richBlack,
    '--mantine-color-info': config.other.info,
    '--mantine-color-success': config.other.success,
    '--mantine-color-neutral': config.other.neutral,
  },
});
