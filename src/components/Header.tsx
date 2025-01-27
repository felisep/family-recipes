import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginModal from './LoginModal';
import { useMediaQuery, useTheme, Avatar } from '@mui/material';

interface HeaderProps {
  onLanguageChange: (newLanguage: string) => void;
}

export default function ButtonAppBar({ onLanguageChange }: HeaderProps) {
  const [open, setOpen] = React.useState(false);
  const [language, setLanguage] = React.useState('en');
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
    onLanguageChange(newLanguage);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#0D47A1' }}>
        <Toolbar>
          <Avatar
            alt="F"
            src="../assets/logo192.png" 
            sx={{ mr: 2 }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: isSmallScreen ? '1rem' : '1.25rem' }}
          >
            {language === 'en' ? 'Family Recipes' : 'Recetas Familiares'}
          </Typography>
          <Button color="inherit" onClick={toggleLanguage}>
            {language === 'en' ? 'Spanish' : 'Inglés'}
          </Button>
          <Button color="inherit" onClick={handleClickOpen}>Login</Button>
        </Toolbar>
      </AppBar>
      <LoginModal open={open} onClose={handleClose} />
    </Box>
  );
}