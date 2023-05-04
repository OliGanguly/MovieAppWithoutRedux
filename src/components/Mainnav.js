import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import { useNavigate } from 'react-router-dom';
export default function Mainnav() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

 React.useEffect(()=>{
 if(value===0)
    navigate('/');
    else if(value===1)
    navigate("/movies");
    else if(value===2)
    navigate('/series');
    else
    navigate('/search')
 }
 ,[value])
  return (
    <Box sx={{ 
        width: "100%",
        position:"fixed",
        bottom:0,
        backgroundColor:"#2d313a",
        zIndex:100
        }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Popular" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction label="TV Series" icon={<LiveTvIcon />} />
        <BottomNavigationAction label="Search" icon={<ScreenSearchDesktopIcon />} />
      </BottomNavigation>
    </Box>
  );
}