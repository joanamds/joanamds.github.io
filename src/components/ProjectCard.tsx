import React, { useContext } from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button, 
  CardActions, 
  Box 
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import LanguageContext from '../context/LanguageContext';
import ThemeContext from '../context/ThemeContext';
import { LanguageContextType, ThemeContextType } from '../types/ContextTypes';

// Tipagem das props para o TypeScript não reclamar
interface ProjectCardProps {
  projectName: string;
  projectImage: string;
  projectPage?: string | null;
  projectRepo: string;
  projectDescription: string;
}

function ProjectCard({ 
  projectName, 
  projectImage, 
  projectPage, 
  projectRepo, 
  projectDescription 
}: ProjectCardProps): JSX.Element {
  const { isEnglish }: LanguageContextType = useContext(LanguageContext);
  const { isDarkTheme }: ThemeContextType = useContext(ThemeContext);

  const redHighlight = '#ff0000';

  return (
    <Card 
      sx={{ 
        maxWidth: 600, // Ajustado de 45rem para ser mais responsivo
        width: '100%',
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: 4,
        overflow: 'hidden',
        backgroundColor: isDarkTheme ? 'rgba(255,255,255,0.03)' : '#fff',
        border: `1px solid ${isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: isDarkTheme 
            ? `0 12px 20px rgba(255, 0, 0, 0.15)` 
            : `0 12px 20px rgba(0, 0, 0, 0.1)`,
        }
      }}
    >
      {/* IMAGEM DO PROJETO */}
      <CardMedia
        component="img"
        height="240"
        image={projectImage}
        alt={projectName}
        sx={{ 
          filter: isDarkTheme ? 'brightness(0.8)' : 'none',
          transition: 'filter 0.3s ease'
        }}
      />

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography 
          gutterBottom 
          variant="h5" 
          component="div" 
          sx={{ fontWeight: 800, color: isDarkTheme ? '#fff' : '#121212' }}
        >
          {projectName}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: isDarkTheme ? '#aaa' : '#555',
            lineHeight: 1.6,
            minHeight: '3em' // Mantém o alinhamento se as descrições tiverem tamanhos diferentes
          }}
        >
          {projectDescription}
        </Typography>
      </CardContent>

      <CardActions sx={{ p: 3, pt: 0, gap: 1 }}>
        {/* BOTÃO DO REPOSITÓRIO */}
        <Button 
          variant="outlined" 
          size="small"
          startIcon={<GitHubIcon />}
          href={projectRepo}
          target="_blank"
          sx={{ 
            color: isDarkTheme ? '#fff' : '#121212',
            borderColor: isDarkTheme ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)',
            fontWeight: 700,
            '&:hover': {
              borderColor: redHighlight,
              color: redHighlight,
              backgroundColor: 'transparent'
            }
          }}
        >
          {isEnglish ? 'Repo' : 'Repositório'}
        </Button>

        {/* BOTÃO DA PÁGINA (SÓ APARECE SE EXISTIR) */}
        {projectPage && (
          <Button 
            variant="contained" 
            size="small"
            startIcon={<LaunchIcon />}
            href={projectPage}
            target="_blank"
            sx={{ 
              backgroundColor: redHighlight,
              color: '#fff',
              fontWeight: 700,
              '&:hover': {
                backgroundColor: '#b30000',
              }
            }}
          >
            {isEnglish ? 'Live Demo' : 'Demonstração'}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;