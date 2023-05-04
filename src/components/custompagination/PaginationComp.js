import { PaginationItem } from '@mui/material';
import React,{useState} from 'react';
import Pagination from '@mui/material/Pagination';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
function PaginationComp({setPage,numOfPages=10}) {
    const handlePageChange=(page)=>{
     setPage(page)
    }
    const darktheme = createTheme({
      palette: {
       mode:"dark"
      },
    });
    return (
        <div
        style={{
          width:"100%",
          display:'flex',
          justifyContent:'center',
          marginTop:10
        }}
        >
          <ThemeProvider theme={darktheme}>
          <Pagination count={numOfPages} onChange={(e)=>handlePageChange(e.target.textContent)} 
          hideNextButton
          hidePrevButton
          color='secondary'
          />
            </ThemeProvider>
          
        </div>
    );
}

export default PaginationComp;