'use client';

import { createTheme, CSSVariablesResolver, Input } from '@mantine/core';
import { Karla, Barlow } from 'next/font/google';
import classes from './styles/Global.module.css';

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

interface Colors {
  [key: string]: string;
}

const colors : Colors = {
  navy: '#001738',
  richBlack: '#111622',
  blue50: '#F0F5FD',
  blue100: '#E8F0FD',
  blue200: '#BBD4F7',
  blue300: '#93BAF1',
  blue400: '#6699A1',
  blue500: '#3E7DD5',
  blue600: '#2463BC',
  blue700: '#144995',
  blue800: '#0E356C',
  blue900: '#10294C',
  green50: '#F0FDF8',
  green100: '#E0F8EE',
  green200: '#C0F2DD',
  green300: '#A1EDD0',
  green400: '#50DCA9',
  green500: '#23C48C',
  green600: '#16A679',
  green700: '#007A5C',
  green800: '#125443',
  green900: '#0C3B2F',
  yellow50: '#FEF8EC',
  yellow100: '#FCF0D4',
  yellow200: '#FAE5b2',
  yellow300: '#F8D990',
  yellow400: '#F5C452',
  yellow500: '#F2B322',
  yellow600: '#D89B0D',
  yellow700: '#B77E0B',
  yellow800: '#875C08',
  yellow900: '#4D2E05',
  red50: '#FEF3F1',
  red100: '#FDE2DD',
  red200: '#FBC5BC',
  red300: '#F79482',
  red400: '#F56B52',
  red500: '#F24122',
  red600: '#C5280C',
  red700: '#9F200A',
  red800: '#731807',
  red900: '#430E04',
  orange50: '#FFF9EC',
  orange100: '#FFF2D3',
  orange200: '#FFE0A5',
  orange300: '#FFC96D',
  orange400: '#FFA632',
  orange500: '#FF8B0A',
  orange600: '#FF7200',
  orange700: '#CC5202',
  orange800: '#A1400B',
  orange900: '#82360C',
  neutral50: '#FFFFFF',
  neutral100: '#F9FAFB',
  neutral200: '#F1F2F4',
  neutral300: '#EBECEF',
  neutral400: '#DDE0E4',
  neutral500: '#CACED3',
  neutral600: '#ABB1BA',
  neutral700: '#87909B',
  neutral800: '#616A75',
  neutral900: '#1F2124',
};

export const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  },
  fontFamily: karla.style.fontFamily,
  headings: { fontFamily: barlow.style.fontFamily, fontWeight: '700' },
  other: {
    ...colors,
  },
  /* Put your mantine theme override here */
});

export const cssResolver: CSSVariablesResolver = (config) => ({
  variables: {
  },
  light: {
    ...Object.keys(colors).map((key) => ({ [`--mantine-color-${key}`]: config.other[key] })),
  },
  dark: {
    ...Object.keys(colors).map((key) => ({ [`--mantine-color-${key}`]: config.other[key] })),
  },
});
