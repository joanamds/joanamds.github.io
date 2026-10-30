import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import ThemeContext from '../context/ThemeContext';
import { ThemeContextType } from '../types/ContextTypes';
import '../styles/Home.css';
import '../styles/Title.scss';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

const binaryBg = require('../images/binary_code_background.png');

function Home() {
  const { isDarkTheme }: ThemeContextType = useContext(ThemeContext);

  return (
    <Box 
      id="home"
      sx={{ 
        height: '100vh', 
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Centraliza o bloco todo verticalmente
        alignItems: 'center',     // Centraliza o bloco todo horizontalmente
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: isDarkTheme ? '#121212' : '#ffffff',
      }}
    >
      {/* BACKGROUND BINÁRIO */}
      <Box 
        sx={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${binaryBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: isDarkTheme ? 'invert(1) opacity(0.2)' : 'opacity(0.4)',
          zIndex: 1,
          pointerEvents: 'none',
        }} 
      />

      {/* BLOCO CENTRAL (TEXTO + BOTÃO) */}
      <Box sx={{ 
        zIndex: 2, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        gap: 4 // Espaço perfeito entre o Hello World e a flecha
      }}>
        
        <div className="typewriter">
          <Typography 
            variant="h1" 
            sx={{ 
              fontWeight: 800, 
              color: isDarkTheme ? '#fff' : '#000',
              fontSize: { xs: '3rem', md: '5rem' }, 
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Hello World
          </Typography>
        </div>

        {/* FLECHA VERMELHA (Agora dentro do fluxo, logo abaixo do texto) */}
        <Box 
          sx={{ 
            color: '#ff0000', 
            animation: 'bounce 2s infinite',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.2)',
              color: '#cc0000'
            }
          }}
          onClick={() => {
            document.getElementById('aboutme')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ArrowDropDownCircleIcon sx={{ fontSize: '4rem' }} />
        </Box>
      </Box>

    </Box>
  );
}

export default Home;