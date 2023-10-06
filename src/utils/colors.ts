import chroma from 'chroma-js';

export const getColor = (color: string) => chroma(color);

export const getPalette = (color: string) => {
  const defaultColor = '#ee3c76';
  if (color.length != 4 && color.length != 7) {
    color = defaultColor;
  }
  const colors = chroma.scale(['white', color, 'black']);
  const palette = [];

  // Create 50
  palette.push(colors(0.05).hex());

  // Create 100-900
  for (let i = 0.1; i < 0.9; i += 0.1) {
    palette.push(colors(i).hex());
  }
  return palette;
};

export const isValid = (color: string) => chroma.valid(color);
