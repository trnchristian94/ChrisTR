const white = "#f0feff";
const black = "#282c34";
const gray = "#F8F8F9";

const themeLight = {
  background: white,
  body: black,
  color: black,
  themeDark: false
};

const themeDark = {
  background: black,
  body: white,
  color: white,
  themeDark: true
};

const theme = (mode: string) => (mode === "dark" ? themeDark : themeLight);

export default theme;
