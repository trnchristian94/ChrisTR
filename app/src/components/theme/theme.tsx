const themeLight = {
  themeDark: false
};

const themeDark = {
  themeDark: true
};

const theme = (mode: string) => (mode === "dark" ? themeDark : themeLight);

export default theme;
