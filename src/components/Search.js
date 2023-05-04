import { Button, Tab, Tabs, TextField, ThemeProvider, createTheme } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
function Search(props) {
    const [searchText,setSearchText]=useState('')
    const [type,setType]=useState(0)
    const [page,setPage]=useState(0)
    const darktheme = createTheme({
        palette: {
         mode:"dark",
         primary:{
            main:"#fff"
         }
        },
      });
    
    return (
        <div>
        <ThemeProvider theme={darktheme}>
            <div style={{display:"flex"}}>
            <TextField 
        style={{flex:1}}
        label="Search..." 
        variant='filled'
        className='searchbox' 
        onChange={(e)=>setSearchText(e.target.value)}
        />
      <Button color="secondary" style={{marginLeft:"10"}}>   <SearchIcon size={30}/></Button>
            </div>
       
        </ThemeProvider>
        <Tabs value={type} onChange={(event,newValue)=>
       { setType(newValue)
        setPage(1);}
      
    }
        indicatorColor='primary'
        textColor='primary'
        >
       <Tab style={{width:"50%"}} label="Movies" />
        <Tab style={{width:"50%"}} label="TV Series" />
         
        </Tabs>
        </div>
    );
}

export default Search;