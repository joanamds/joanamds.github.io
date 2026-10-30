import React, { useContext } from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
// Ícones do MUI
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import GitHubIcon from '@mui/icons-material/GitHub';
import GroupsIcon from '@mui/icons-material/Groups'; // Ícone acadêmico

import LanguageContext from '../context/LanguageContext';
import ThemeContext from '../context/ThemeContext';
import { LanguageContextType, ThemeContextType } from '../types/ContextTypes';

function Tools(): JSX.Element {
  const { isEnglish }: LanguageContextType = useContext(LanguageContext);
  const { isDarkTheme }: ThemeContextType = useContext(ThemeContext);

  const activeColor = isDarkTheme ? '#fff' : '#121212';
  const redHighlight = '#ff0000'; 

 const tools = [
    { 
      name: 'Frontend', 
      icon: <CodeIcon />, 
      desc: 'React & MUI' 
    },
    { 
      name: 'JavaScript', 
      icon: <JavascriptIcon />, 
      desc: 'ES6+' 
    },
    { 
      name: 'Backend', 
      icon: <TerminalIcon />, 
      desc: 'Python & Node' 
    },
    { 
      name: 'Database', 
      icon: <StorageIcon />, 
      desc: 'SQL & NoSQL', 
    },
    { 
      name: 'HTML5', 
      icon: <HtmlIcon />, 
      desc: isEnglish ? 'Structure' : 'Estrutura' 
    },
    { 
      name: 'CSS3', 
      icon: <CssIcon />, 
      desc: isEnglish ? 'Styling' : 'Estilização' 
    },
    { 
      name: 'Git/GitHub', 
      icon: <GitHubIcon />, 
      desc: isEnglish ? 'Version Control' : 'Versionamento' 
    },
    { 
      name: isEnglish ? 'Soft Skills' : 'Comunicação', 
      icon: <GroupsIcon />, 
      desc: isEnglish ? 'Collaboration & Teamwork' : 'Colaboração e Equipe' 
    },
  ];

  return (
    <Box 
      component="section" 
      id="tools" 
      sx={{ 
        py: 10, 
        backgroundColor: isDarkTheme ? '#121212' : '#fafafa',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 900, color: activeColor, mb: 1, fontFamily: "'Poppins', sans-serif" }}>
            {isEnglish ? 'Skills' : 'Habilidades'}
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: redHighlight, mx: 'auto' }} />
        </Box>

        <Box 
          sx={{ 
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(4, 1fr)'
            }
          }}
        >
          {tools.map((tool, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: 4,
                bgcolor: isDarkTheme ? 'rgba(255,255,255,0.03)' : '#fff',
                border: `1px solid ${isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  borderColor: redHighlight,
                  boxShadow: `0 10px 30px ${isDarkTheme ? 'rgba(255,0,0,0.2)' : 'rgba(0,0,0,0.08)'}`,
                  '& .icon-mui': { color: redHighlight }
                }
              }}
            >
              <Box 
                className="icon-mui"
                sx={{ 
                  fontSize: '3.5rem', 
                  color: isDarkTheme ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                  transition: 'color 0.3s ease',
                  mb: 2,
                  display: 'flex'
                }}
              >
                {tool.icon}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: activeColor, fontSize: '1rem', mb: 0.5 }}>
                {tool.name}
              </Typography>
              <Typography variant="body2" sx={{ color: isDarkTheme ? '#777' : '#999', fontSize: '0.8rem', lineHeight: 1.2 }}>
                {tool.desc}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Tools;