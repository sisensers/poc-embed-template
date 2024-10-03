import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import { DashboardProvider, useDashboard } from '../DashboardContext';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAuth } from '../AuthContext'; // Import the custom AuthContext

const drawerWidth = 300;
const pages = [
  { name: 'Embed SDK', path: '/embed-sdk', icon: <DashboardIcon /> },
  { name: 'Compose SDK', path: '/compose-sdk', icon: <SettingsIcon /> },
  { name: 'Self Service', path: '/self-service', icon: <PersonIcon /> }
];
const lightLogo = '/logo.png'; 
const sisenseLogo = '/sisenseLogo.png';

function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { setDashboardID } = useDashboard();
  const [dashboards, setDashboards] = React.useState<{ oid: string; title: string }[]>([]);
  const [selectedDashboard, setSelectedDashboard] = React.useState<string | null>(null);
  const theme = useTheme();
  const location = useLocation();
  const { logout } = useAuth(); 

  const logo = lightLogo; 

  const sisenseUrl = process.env.REACT_APP_SISENSE_URL || '';

  React.useEffect(() => {
    const fetchDashboards = async () => {
      try {
        const token = localStorage.getItem('sisenseToken'); 
        if (!token) {
          throw new Error('No token found');
        }

        const response = await axios.get(`${sisenseUrl}/api/v1/dashboards`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDashboards(response.data);
      } catch (error) {
        console.error('Error fetching dashboards:', error);
      }
    };

    fetchDashboards();
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDashboardSelect = (oid: string) => {
    setDashboardID(oid);
    setSelectedDashboard(oid);
  };

  const drawer = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#ffffff' }}>
      <Toolbar>
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            height: 80,
            width: '100%',
            objectFit: 'contain',
          }}
        />
      </Toolbar>
      <Divider />
      <Accordion sx={{ background: 'inherit', color: '#1976d2' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#1976d2' }} />}>
          <ListItemIcon><DashboardIcon sx={{ color: '#1976d2' }} /></ListItemIcon>
          <ListItemText primary="Select a Dashboard" />
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {dashboards.map(dashboard => (
              <ListItemButton
                key={dashboard.oid}
                onClick={() => handleDashboardSelect(dashboard.oid)}
                sx={{
                  backgroundColor: selectedDashboard === dashboard.oid ? '#e3f2fd' : 'inherit',
                  '&:hover': {
                    backgroundColor: '#e3f2fd',
                  },
                }}
              >
                <ListItemText primary={dashboard.title} sx={{ color: '#1976d2' }} />
              </ListItemButton>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ flexGrow: 1 }}>
        <List>
          {pages.map((page) => {
            const isActive = location.pathname === page.path;
            return (
              <ListItem key={page.name} disablePadding>
                <ListItemButton
                  component={Link}
                  to={page.path}
                  sx={{
                    backgroundColor: isActive ? '#e3f2fd' : 'inherit',
                    '&:hover': {
                      backgroundColor: '#bbdefb',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: isActive ? '#1976d2' : 'inherit' }}>
                    {page.icon}
                  </ListItemIcon>
                  <ListItemText primary={page.name} sx={{ color: isActive ? '#1976d2' : 'inherit' }} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Box p={2}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#1976d2',
            color: 'white',
            width: '100%',
            textTransform: 'none',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
          href="https://sisense.dev/guides/"
          target="_blank"
        >
          Documentation
        </Button>
        <Divider sx={{ my: 2 }} />
        <Box
          component="img"
          src={sisenseLogo}
          alt="Sisense Logo"
          sx={{
            height: 80,
            width: '100%',
            objectFit: 'contain',
          }}
        />
        <Divider sx={{ my: 2 }} />
        {/* Logout Button */}
        <Button
          variant="outlined"
          sx={{
            borderColor: '#1976d2',
            color: '#1976d2',
            width: '100%',
            textTransform: 'none',
            fontWeight: 'bold',
            backgroundColor: '#ffffff',
            '&:hover': {
              backgroundColor: '#e3f2fd',
              borderColor: '#1565c0',
              color: '#1565c0',
            },
          }}
          onClick={logout}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: '#1976d2', 
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', 
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" noWrap component="div">
              Your Application
            </Typography>
          </Box>
          <Tooltip title="Open settings">
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="User Avatar" src="" />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#ffffff',
              boxShadow: '2px 0px 8px rgba(0, 0, 0, 0.1)', 
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#ffffff',
              boxShadow: '2px 0px 8px rgba(0, 0, 0, 0.1)', 
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: '#ffffff',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'light',
          primary: {
            main: '#1976d2', 
          },
          background: {
            default: '#ffffff',
            paper: '#f5f5f5', 
          },
        },
      }),
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <DashboardProvider>
        <Layout>{children}</Layout>
      </DashboardProvider>
    </ThemeProvider>
  );
}
