import React, { useContext } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Avatar,
  Divider 
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LanguageContext from '../context/LanguageContext';
import ThemeContext from '../context/ThemeContext';
import { LanguageContextType, ThemeContextType } from '../types/ContextTypes';
const profilePic = require('../images/joana_maria.jpg');

function AboutMe(): JSX.Element {
  const { isEnglish }: LanguageContextType = useContext(LanguageContext);
  const { isDarkTheme }: ThemeContextType = useContext(ThemeContext);

  const activeColor = isDarkTheme ? 'white' : 'black';
  const greenHighlight = 'red';

  return (
    <Box 
      component="section" 
      id="aboutme" 
      sx={{ 
        py: { xs: 4, md: 8 }, 
        display: 'flex', 
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="md">
        <Paper 
          elevation={0} 
          sx={{ 
            p: { xs: 3, md: 5 }, 
            backgroundColor: isDarkTheme ? 'rgba(255, 255, 255, 0.03)' : '#fff',
            borderRadius: 6,
            border: `1px solid ${isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
            boxShadow: isDarkTheme ? 'none' : '0px 15px 35px rgba(0,0,0,0.05)'
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 }, 
            alignItems: 'center' 
          }}>
            
            {/* FOTO - Agora fica menor e mais harmoniosa */}
            <Box sx={{ flexShrink: 0 }}>
              <Box sx={{ position: 'relative' }}>
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    top: 10, 
                    left: 10, 
                    width: '100%', 
                    height: '100%', 
                    border: `2px solid ${greenHighlight}`, 
                    borderRadius: 4,
                    zIndex: 0
                  }} 
                />
                <Avatar
                  src={ profilePic }
                  alt="Joana Maria"
                  variant="rounded"
                  sx={{ 
                    width: { xs: 200, md: 240 }, 
                    height: { xs: 250, md: 300 }, 
                    borderRadius: 4,
                    zIndex: 1,
                    boxShadow: '0px 10px 20px rgba(0,0,0,0.2)'
                  }}
                />
              </Box>
            </Box>

            <Box>
              <Typography 
                variant="overline" 
                sx={{ color: greenHighlight, fontWeight: 800, letterSpacing: 1.5 }}
              >
                {isEnglish ? 'ABOUT ME' : 'SOBRE MIM'}
              </Typography>
              
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 800, 
                  mb: 2, 
                  color: activeColor,
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                Joana Maria dos Santos
              </Typography>

              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: '1rem', 
                  lineHeight: 1.6, 
                  color: isDarkTheme ? '#bbb' : '#555', 
                  mb: 3,
                  textAlign: 'left'
                }}
              >
                {isEnglish
                  ? `I am a professional teacher with a deep passion for the world of technology. My journey led me to master Full Stack Web Development at Trybe, where I learned to translate logic into real-world solutions. Currently, I seek to bridge my classroom experience with technical expertise, exploring this intersection through my Master's in Education and Communication. My goal is to work where technology and learning meet, creating tools that don't just work, but also communicate and educate.`
                  : `Sou professora de formação e apaixonada pelas infinitas possibilidades do mundo da tecnologia. Minha jornada me levou a mergulhar no Desenvolvimento Web Full Stack na Trybe, onde aprendi a transformar lógica em soluções reais. Atualmente, busco unir minha experiência em sala de aula com o domínio técnico, explorando essa intersecção através do meu Mestrado em Educação e Comunicação. Meu objetivo é atuar onde a tecnologia e o aprendizado se encontram, criando ferramentas que não apenas funcionam, mas que também comunicam e ensinam.`
                }
              </Typography>

              <Divider sx={{ mb: 3 }} />

              <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1.5, color: activeColor, display: 'flex', alignItems: 'center', gap: 1 }}>
                <SchoolIcon fontSize="small" sx={{ color: greenHighlight }} /> {isEnglish ? 'Education' : 'Formação'}
              </Typography>

              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
                gap: 2 
              }}>
                {[
                  { title: isEnglish ? 'Pedagogy' : 'Pedagogia', local: 'UDESC' },
                  { title: isEnglish ? 'Web Dev' : 'Dev Web', local: 'Trybe' },
                  { title: isEnglish ? 'Master’s' : 'Mestrado', local: 'UFSC' },
                ].map((edu, index) => (
                  <Box key={index}>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: activeColor }}>{edu.title}</Typography>
                    <Typography variant="caption" sx={{ color: isDarkTheme ? '#888' : '#777', display: 'block' }}>
                      {edu.local}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default AboutMe;