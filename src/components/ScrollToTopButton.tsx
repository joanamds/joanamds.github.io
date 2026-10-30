import React, { useState, useEffect, useContext } from 'react';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import ThemeContext from '../context/ThemeContext';
import { ThemeContextType } from '../types/ContextTypes';

function ScrollToTopButton(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkTheme }: ThemeContextType = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={isVisible}>
      <Fab
        size="small"
        aria-label="scroll back to top"
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          // Cores em Verde
          backgroundColor: 'red', 
          color: 'white',
          '&:hover': {
            backgroundColor: 'darkred', // Verde um pouco mais escuro no hover
          },
          // Opcional: borda sutil se estiver no modo dark para destacar mais
          border: isDarkTheme ? '1px solid rgba(255,255,255,0.1)' : 'none'
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}

export default ScrollToTopButton;