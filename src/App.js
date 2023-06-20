import Button from '@mui/material/Button';
import Navbar from './components/Navbar/Navbar';
import { Typography, Container, Grid } from '@mui/material';
import { Outlet, useLocation } from "react-router-dom"

function App() {
  const { pathname } = useLocation()
  
  return (
      <Grid container>
        <Navbar />
        {pathname === "/" && <Typography component="h2">Home Page</Typography>}
        <Outlet />
      </Grid>
  );
}

export default App;
