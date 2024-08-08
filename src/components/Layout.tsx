import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import axios from 'axios';
import { DashboardProvider, useDashboard } from '../DashboardContext';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';

const drawerWidth = 240;
const pages = [
  { name: 'Embed SDK', path: '/embed-sdk' },
  { name: 'Compose SDK', path: '/compose-sdk' },
  { name: 'Self Service', path: '/self-service' }
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ThemeContext = React.createContext({ toggleTheme: () => {} });

const useThemeMode = () => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { setDashboardID } = useDashboard();
  const [dashboards, setDashboards] = React.useState<{ oid: string; title: string }[]>([]);
  const theme = useTheme();
  const { toggleTheme } = React.useContext(ThemeContext);

  React.useEffect(() => {
    const fetchDashboards = async () => {
      try {
        const token = localStorage.getItem('sisenseToken'); // Get the token from localStorage
        if (!token) {
          throw new Error('No token found');
        }

        const response = await axios.get('https://csdklivedemo.sisensepoc.com/api/v1/dashboards', {
          headers: {
            Authorization: `Bearer ${token}`, // Use the token in the Authorization header
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
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {pages.map((page, index) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton component={Link} to={page.path}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Dashboards" />
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {dashboards.map(dashboard => (
                <ListItemButton key={dashboard.oid} onClick={() => handleDashboardSelect(dashboard.oid)}>
                  <ListItemText primary={dashboard.title} />
                </ListItemButton>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      </List>
      <Divider />
      <List>
        {settings.map((setting, index) => (
          <ListItem key={setting} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={setting} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: '' }}>
              <Box
                component="img"
                src="/logo.png"
                alt="Logo"
                sx={{
                  height: 40, // Adjust height as needed
                  width: 'auto',
                  display: 'block',
                  mx: 'auto' // Center the logo horizontally
                }}
              />
            </Box>
            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
              <Tooltip title="Toggle theme">
                <Switch onChange={toggleTheme} />
              </Tooltip>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="User Avatar" src="" />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useThemeMode();

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <DashboardProvider>
          <Layout>{children}</Layout>
        </DashboardProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
