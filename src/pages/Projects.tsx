import React, { useContext, useEffect, useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  MenuItem, 
  FormControl, 
  Select, 
  InputLabel,
  SelectChangeEvent,
  Fade
} from '@mui/material';
import { projectsBack } from '../data/backendProjects';
import { projectsFront, projectsFundamentals, personalProjects } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import ThemeContext from '../context/ThemeContext';
import LanguageContext from '../context/LanguageContext';
import { LanguageContextType, ThemeContextType } from '../types/ContextTypes';
import '../styles/Title.scss';

function Projects(): JSX.Element {
  const { isDarkTheme }: ThemeContextType = useContext(ThemeContext);
  const { isEnglish }: LanguageContextType = useContext(LanguageContext);
  
  const [module, setModule] = useState('fundamentals');
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const projectData: Record<string, any[]> = {
      fundamentals: projectsFundamentals,
      frontend: projectsFront,
      backend: projectsBack,
      personal: personalProjects
    };
    setProjects(projectData[module] || []);
  }, [module]);

  const handleChange = (event: SelectChangeEvent) => {
    setModule(event.target.value as string);
  };

  const activeColor = isDarkTheme ? '#fff' : '#121212';
  const redHighlight = '#ff0000';

  return (
    <Box 
      id="projects" 
      component="section"
      sx={{ 
        py: 10, 
        backgroundColor: isDarkTheme ? '#121212' : '#ffffff',
        minHeight: '100vh',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        {/* TÍTULO E SELETOR */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <div className="typewriter">
            <Typography variant="h3" sx={{ fontWeight: 900, color: activeColor, mb: 1, fontFamily: "'Poppins', sans-serif" }}>
              {isEnglish ? 'Developed projects' : 'Projetos desenvolvidos'}
            </Typography>
          </div>
          <Box sx={{ width: 60, height: 4, bgcolor: redHighlight, mx: 'auto', mb: 5 }} />

          <FormControl 
            variant="standard" 
            sx={{ 
              minWidth: { xs: '100%', sm: 300 }, 
              '& .MuiInput-underline:after': { borderBottomColor: redHighlight },
              '& .MuiInputLabel-root.Mui-focused': { color: redHighlight }
            }}
          >
            <InputLabel id="module-select-label" sx={{ color: isDarkTheme ? '#777' : '#999' }}>
              {isEnglish ? 'Module' : 'Módulo'}
            </InputLabel>
            <Select
              labelId="module-select-label"
              value={module}
              onChange={handleChange}
              sx={{ color: activeColor, '& .MuiSvgIcon-root': { color: redHighlight } }}
            >
              <MenuItem value="fundamentals">{isEnglish ? 'Fundamentals' : 'Fundamentos'}</MenuItem>
              <MenuItem value="frontend">Front End</MenuItem>
              <MenuItem value="backend">Back End</MenuItem>
              <MenuItem value="personal">{isEnglish ? 'Personal projects' : 'Projetos pessoais'}</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* GRADE DOS CARDS CENTRALIZADA */}
        <Box 
          sx={{ 
            display: 'grid',
            // Aqui está a mágica: auto-fit com minmax. 
            // Ele tenta colocar o máximo de cards que couberem de pelo menos 450px
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 550px))',
            gap: 4,
            justifyContent: 'center', // ISSO centraliza a grade toda se tiver só 1 item
            alignItems: 'start'
          }}
        >
          {projects.map((project, index) => (
            <Fade in={true} timeout={400 + index * 150} key={`${module}-${index}`}>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <ProjectCard
                  projectName={project.title}
                  projectImage={project.image}
                  projectPage={project.page}
                  projectRepo={project.repo}
                  projectDescription={isEnglish ? project.descriptionENG : project.description}
                />
              </Box>
            </Fade>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;