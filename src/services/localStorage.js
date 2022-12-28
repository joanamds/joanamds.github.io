if (!JSON.parse(localStorage.getItem('isDarkTheme'))) {
  localStorage.setItem('isDarkTheme', JSON.stringify(false));
}

export const readTheme = () => JSON.parse(localStorage.getItem('isDarkTheme'));

export const saveTheme = (getTheme) => localStorage
  .setItem('isDarkTheme', JSON.stringify(getTheme));