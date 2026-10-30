import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ThemeContextType, LanguageContextType} from '../types/ContextTypes';
import { useContext, useEffect, useState } from 'react';
import { readTheme, saveTheme } from '../services/localStorage';
import ThemeContext from '../context/ThemeContext';
import LanguageContext from '../context/LanguageContext';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import Brightness4Icon from '@mui/icons-material/Brightness4'; 
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TranslateIcon from '@mui/icons-material/Translate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Contact from '../components/ContactModal'; 


const UK = require('../images/united-kingdom-flag-icon.svg').default;
const Bra = require('../images/brazil-flag-icon.svg').default;

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { isDarkTheme, setIsDarkTheme }: ThemeContextType =  useContext(ThemeContext);
  const { isEnglish, setIsEnglish }: LanguageContextType = useContext(LanguageContext);

  const [isShow, invokeModal] = useState(false)

  const initModal = () => {
    if (isShow) {
      return invokeModal(false)
    }
    return invokeModal(true);
  }

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme); 
    saveTheme(!isDarkTheme);
  }

  useEffect(() => {
    console.log(isEnglish);
    const currentTheme = readTheme();
    setIsDarkTheme(currentTheme);
  }, []);

 const menuItems = [
  { label: isEnglish ? 'ABOUT ME' : 'SOBRE MIM', href: '#aboutme' },
  { label: isEnglish ? 'SKILLS' : 'HABILIDADES', href: '#tools' },
  { label: isEnglish ? 'PROJECTS' : 'PROJETOS', href: '#projects' },
  { label: isEnglish ? "GET IN TOUCH" : "FALE COMIGO", href: '#contact' }, 
];

  const activeColor = isDarkTheme ? 'white' : 'black';

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FavoriteIcon 
  sx={{ 
    display: { xs: 'none', md: 'flex' }, 
    mr: 1, 
    color: 'red' // O mesmo verde do seu botão de scroll!
  }} 
/>
<Typography
  variant="h6"
  noWrap
  component="a"
  href="#app-bar-with-responsive-menu"
  sx={{
    mr: 2,
    display: { xs: 'none', md: 'flex' },
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: activeColor, // O texto continua respeitando o tema
    textDecoration: 'none',
  }}
>
  Portfolio Joana
</Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
    size="large"
    onClick={handleOpenNavMenu}
    // Mude o sx aqui para controlar a cor do ícone de menu
    sx={{ color: activeColor }} 
  >
    <MenuIcon />
  </IconButton>
            <Menu
              id="menu-appbar"
              key={isEnglish ? 'menu-en' : 'menu-pt'}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {menuItems.map((item) => (
    <Button
      key={item.href}
      // Se for contato, não usa href (para não rolar a página), caso contrário usa o href
      href={item.href === '#contact' ? undefined : item.href} 
      onClick={(e) => {
        if (item.href === '#contact') {
          e.preventDefault(); // Impede o link de agir
          initModal();        // Abre o seu Modal de Contato
        }
        handleCloseNavMenu();
      }}
      sx={{ 
        my: 2, 
        color: activeColor, 
        display: 'block',
        textTransform: 'none',
        fontWeight: 700
      }}
    >
      {item.label}
    </Button>
  ))}
            </Menu>
          </Box>
          <FavoriteIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'red'}} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: isDarkTheme ? 'white' : 'black',
              textDecoration: 'none',
            }}
          >
            portfolio
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
  {menuItems.map((item) => (
  <MenuItem 
    key={item.href} 
    onClick={(e) => {
      if (item.href === '#contact') {
        e.preventDefault();
        initModal();
      }
      handleCloseNavMenu();
    }}
    component="a" 
    href={item.href === '#contact' ? undefined : item.href}
  >
    <Typography sx={{ textAlign: 'center', color: activeColor }}>{item.label}</Typography>
  </MenuItem>
))}
</Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={isEnglish ? "Toggle light/dark theme" : "Alternar tema claro/escuro"}>
            <IconButton 
  onClick={toggleTheme} 
  color="inherit" 
  sx={{ 
    ml: 1, 
    color: isDarkTheme ? 'yellow' : 'black' 
  }}
>
  {isDarkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
</IconButton>
</Tooltip>
          <Tooltip title={isEnglish? "Select Language" : "Selecionar idioma"}>
              <IconButton
              onClick={handleOpenUserMenu}
              sx={{ 
      p: 0, 
      // Condicional de cor aqui:
      color: isDarkTheme ? 'white' : 'black' 
    }}
              >
                <TranslateIcon />
              </IconButton>
            </Tooltip>
            <Menu
  sx={{ mt: '45px' }}
  id="menu-appbar"
  anchorEl={anchorElUser}
  open={Boolean(anchorElUser)}
  onClose={handleCloseUserMenu}
>
  <MenuItem onClick={() => { setIsEnglish(false); handleCloseUserMenu(); }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <img src={Bra} alt="Brazil" width="20" style={{ borderRadius: '2px' }} />
      <Typography>Português</Typography>
    </Box>
  </MenuItem>

  {/* Opção Inglês */}
  <MenuItem onClick={() => { setIsEnglish(true); handleCloseUserMenu(); }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <img src={UK} alt="UK" width="20" style={{ borderRadius: '2px' }} />
      <Typography>English</Typography>
    </Box>
  </MenuItem>
</Menu>
          </Box>
        </Toolbar>
        <Dialog 
          open={isShow} 
          onClose={initModal}
          fullWidth
          maxWidth="xs" // Deixa o modal num tamanho legal para contactos
          PaperProps={{
            sx: { 
              backgroundColor: isDarkTheme ? '#1e1e1e' : 'white',
              borderRadius: '15px' 
            }
          }}
        >
          <DialogTitle sx={{ color: activeColor, fontWeight: 'bold', textAlign: 'center' }}>
            {isEnglish ? 'Reach Out' : 'Contatos'}
          </DialogTitle>
          
          <DialogContent>
            <Contact /> {/* O seu componente de contactos que MUIificamos */}
          </DialogContent>

          <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
            <Button 
              onClick={initModal} 
              variant="outlined" 
              color="error" 
              sx={{ textTransform: 'none' }}
            >
              {isEnglish ? 'Close' : 'Fechar'}
            </Button>
          </Box>
        </Dialog>
      </Container>
    </AppBar>
  );
}
export default Header;
