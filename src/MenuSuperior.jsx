import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const pages = [
    { label: 'Página Principal', path: '/' }, // Defina os rótulos e os caminhos dos links
    { label: 'Sobre Mim', path: '/sobre-mim' },
];

function ResponsiveAppBar() {

  
    return (
        <div >
            <AppBar style={{backgroundColor: "#e6e7e7"}}  position="absolute">
                <Container >
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', } }}>
                        {pages.map((page) => (
                            <Link key={page.label} to={page.path} style={{ textDecoration: 'none' }}>
                                <Button
                                    sx={{ my: 2, color: '#10c75c', }}
                                >
                                    {page.label}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Container>
            </AppBar>
        </div>
    );
}
export default ResponsiveAppBar;


















// import * as React from "react";
// import { Link } from "react-router-dom";
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';



// const MenuSuperior = () => {

//     return (
//         <div style={{fontSize: "45px", display: "flex", justifyContent: "center", color: "blue", position: "absolute", top: 0, left: "0%", width: "100%" }}>
//             <Tabs >
//                 <Link to={"/"}>
//                     <Tab style={{fontSize: "20px"}} label="Página Principal" />
//                 </Link>
//                 <Link to={"/sobre-mim"}>
//                     <Tab style={{fontSize: "20px"}} label="Página Sobre Mim" />
//                 </Link>
//             </Tabs>
//         </div>
//     );
// }

// export default MenuSuperior;