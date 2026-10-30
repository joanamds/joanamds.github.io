import React, { useContext } from 'react';
import { 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  ListItemButton, 
  Typography, 
  Snackbar, 
  Alert 
} from '@mui/material';
import copy from 'clipboard-copy';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageContext from '../context/LanguageContext';
import { LanguageContextType } from '../types/ContextTypes';
import ThemeContext from '../context/ThemeContext';

function Contact(): JSX.Element {
  const { isEnglish }: LanguageContextType = useContext(LanguageContext);
  const { isDarkTheme } = useContext(ThemeContext);
  const [open, setOpen] = React.useState(false);

  const emailClick = () => {
    copy('joanamdsantos1@gmail.com');
    setOpen(true); // Em vez de alert, vamos usar um Snackbar chique do MUI
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <List>
        {/* EMAIL */}
        <ListItem disablePadding>
          <ListItemButton onClick={emailClick}>
            <ListItemIcon>
              <EmailIcon sx={{ color: '#F14133' }} />
            </ListItemIcon>
            <ListItemText 
              primary="joanamdsantos1@gmail.com" 
              primaryTypographyProps={{ 
                variant: 'body2', 
                sx: { color: isDarkTheme ? 'white' : 'black', textDecoration: 'underline' } 
              }} 
            />
          </ListItemButton>
        </ListItem>

        {/* LINKEDIN */}
        <ListItem disablePadding>
          <ListItemButton 
            component="a" 
            href="https://www.linkedin.com/in/dev-joanamds/" 
            target="_blank"
          >
            <ListItemIcon>
              <LinkedInIcon sx={{ color: '#0078B8' }} />
            </ListItemIcon>
            <ListItemText 
              primary="Linkedin" 
              primaryTypographyProps={{ sx: { color: isDarkTheme ? 'white' : 'black' } }} 
            />
          </ListItemButton>
        </ListItem>

        {/* GITHUB */}
        <ListItem disablePadding>
          <ListItemButton 
            component="a" 
            href="https://github.com/joanamds" 
            target="_blank"
          >
            <ListItemIcon>
              <GitHubIcon sx={{ color: isDarkTheme ? 'white' : 'black' }} />
            </ListItemIcon>
            <ListItemText 
              primary="Github" 
              primaryTypographyProps={{ sx: { color: isDarkTheme ? 'white' : 'black' } }} 
            />
          </ListItemButton>
        </ListItem>
      </List>

      {/* Notificação de Copiado (Snackbar) */}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {isEnglish ? 'Email copied to clipboard!' : 'Email copiado para a área de transferência!'}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Contact;