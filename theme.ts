'use client';

import { colorsTuple, createTheme } from '@mantine/core';
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
  primaryColor: 'orange',
  fontFamily: karla.style.fontFamily,
  headings: { fontFamily: barlow.style.fontFamily, fontWeight: '700' },
  black: '#111622',
  primaryShade: 6,
  colors: {
    orange: [
      '#FFF9EC',
      '#FFF2D3',
      '#FFE0A5',
      '#FFC96D',
      '#FFA632',
      '#FF8B0A',
      '#FF7200',
      '#CC5202',
      '#A1400B',
      '#82360C',
    ],
    yellow: [
      '#FEF8EC',
      '#FCF0D4',
      '#FAE5b2',
      '#F8D990',
      '#F5C452',
      '#F2B322',
      '#D89B0D',
      '#B77E0B',
      '#875C08',
      '#4D2E05',
    ],
    red: [
      '#FEF3F1',
      '#FDE2DD',
      '#FBC5BC',
      '#F79482',
      '#F56B52',
      '#F24122',
      '#C5280C',
      '#9F200A',
      '#731807',
      '#430E04',
    ],
    green: [
      '#F0FDF8',
      '#E0F8EE',
      '#C0F2DD',
      '#A1EDD0',
      '#50DCA9',
      '#23C48C',
      '#16A679',
      '#007A5C',
      '#125443',
      '#0C3B2F',
    ],
    blue: [
      '#F0F5FD',
      '#E8F0FD',
      '#BBD4F7',
      '#93BAF1',
      '#6699A1',
      '#3E7DD5',
      '#2463BC',
      '#144995',
      '#0E356C',
      '#10294C',
    ],
    neutral: [
      '#FFFFFF',
      '#F9FAFB',
      '#F1F2F4',
      '#EBECEF',
      '#DDE0E4',
      '#CACED3',
      '#ABB1BA',
      '#87909B',
      '#616A75',
      '#1F2124',
    ],
    navy: colorsTuple('#001738'),
  },
});
