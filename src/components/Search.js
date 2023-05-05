import { Button, Tab, Tabs, TextField, ThemeProvider, createTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import PaginationComp from './custompagination/PaginationComp';
import SingleComponent from './singlecontent/SingleComponent';
function Search(props) {
    const [searchText, setSearchText] = useState('')
    const [type, setType] = useState(0)
    const [page, setPage] = useState(1)
    const [content, setContent] = useState([])
    const [numOfPages, setNumOfPages] = useState();
    const darktheme = createTheme({
        palette: {
            mode: "dark",
            primary: {
                main: "#fff"
            }
        },
    });
    const fetchSearch = async () => {
        try {
          const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
              process.env.REACT_APP_API_KEY
            }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
          );
          setContent(data.results);
          setNumOfPages(data.total_pages);
          // console.log(data);
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
      }, [type, page,searchText]);

    return (
        // <div>
        //     <ThemeProvider theme={darktheme}>
        //         <div style={{ display: "flex" }}>
        //             <TextField
        //                 style={{ flex: 1 }}
        //                 label="Search..."
        //                 variant='filled'
        //                 className='searchbox'
        //                 onChange={(e) => setSearchText(e.target.value)}
        //             />
        //             <Button color="secondary" style={{ marginLeft: "10" }}>   <SearchIcon size={30} /></Button>
        //         </div>

        //     </ThemeProvider>
        //     <Tabs value={type} onChange={(event, newValue) => {
        //         setType(newValue)
        //         setPage(1);
        //     }

        //     }
        //         indicatorColor='primary'
        //         textColor='primary'
        //     >
        //         <Tab style={{ width: "50%" }} label="Movies" />
        //         <Tab style={{ width: "50%" }} label="TV Series" />

        //     </Tabs>
        //     <div>
        //    <span className='pageTitle'>Trending</span> 
        //    <div className='trending'>
        //     {content&&content.map((item)=>{
        //         return <SingleComponent 
        //         key={item.id} 
        //         id={item.id}
        //         poster={item.poster_path}
        //         title={item.title || item.name}
        //         date={item.first_air_date||item.release_date}
        //         media_type={type?"TV":"Movie"}
        //         rating_average={item.vote_average}
        //         />
        //     })}
        //      {searchText &&
        //   !content &&
        //   (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
        //    </div>
          
          
        //    <PaginationComp setPage={setPage}/>
        // </div>
        // </div>
        <div>
      <ThemeProvider theme={darktheme}>
        <div className="search">
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            onClick={fetchSearch}
            variant="contained"
            style={{ marginLeft: 10 }}
          >
            <SearchIcon fontSize="large" />
          </Button>
        </div>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          style={{ paddingBottom: 5 }}
          aria-label="disabled tabs example"
        >
          <Tab style={{ width: "50%" }} label="Search Movies" />
          <Tab style={{ width: "50%" }} label="Search TV Series" />
        </Tabs>
      </ThemeProvider>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleComponent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          content==="" &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <PaginationComp setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
    );
}

export default Search;