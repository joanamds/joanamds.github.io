// Defina os tipos para os dados do localStorage
type ThemeData = boolean | null;

// Verifique se o valor no localStorage é nulo ou não
if (localStorage.getItem('isDarkTheme') === null) {
  localStorage.setItem('isDarkTheme', JSON.stringify(false));
}

// Função para ler o tema
export const readTheme = (): ThemeData => {
  const themeData = localStorage.getItem('isDarkTheme');
  return themeData ? JSON.parse(themeData) : null;
};

// Função para salvar o tema
export const saveTheme = (getTheme: ThemeData) => {
  localStorage.setItem('isDarkTheme', JSON.stringify(getTheme));
};
