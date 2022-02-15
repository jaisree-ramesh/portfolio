import React from 'react'
import bespoke from './images/bespokefashion.png'
import space from './images/spacecrew.png'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { Icon } from '@iconify/react';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    backgroundColor: 'transparent',
    borderRadius: 25,
    width:'350px',
    height: '350px',
    marginLeft: 'auto',
    marginRight: 'auto',
}));

function Projects() {

    const projects = [
        {
            name: 'Bespoke Fashion',
            description: 'A website to configure outifts for any occasion.',
            image : bespoke,
            github: 'https://github.com/Francine-Pepe/bespokefashion',
            link : 'https://bespokefashion.netlify.app/'
        },
        {
            name: 'Space crew',
            description: 'Planet populating game',
            image : space,
            github: 'https://github.com/',
            link : 'https://jaisree-ramesh.github.io/thespacecrew/'
        },
        {
            name: 'Space crew',
            description: 'Planet populating game',
            github: 'https://github.com/',
            link : 'https://bespokefashion.netlify.app/'
        },
        {
            name: 'Space crew',
            description: 'Planet populating game',
            github: 'https://github.com/',
            link : 'https://bespokefashion.netlify.app/'
        },
    ];

  return (
    <>
        <Typography  
        variant="h4"
        component="div"
        color="white"
        sx={{  fontFamily: "Poiret One", letterSpacing: 1 }}>
        PROJECTS<br /> <br />
        </Typography>
                <Box
                    sx={{
                    p: 2,
                    bgcolor: 'transparent',
                    display: 'grid',
                    gridTemplateColumns: { md: '1fr 1fr 1fr' },
                    gap:10 ,
                    margin:6 ,
                   
                    }}
                >
                    {projects.map ((projects,id) => 
                        <div>  
                            <Item  elevation = '20' sx={{ p: 2}}>
                                <div className="card">
                                    <div className="side"> 
                                    <Typography  
                                        variant="h5"
                                        component="div"
                                        color="white"
                                        sx={{  fontFamily: "Poiret One", letterSpacing: 1 }}>
                                        {projects.name} <br/> <br/>
                                    </Typography>
                                        <img src={projects.image} alt="Project Image" /> 
                                    </div>
                                    <div className="side back">
                                        <Typography  
                                            variant="h5"
                                            component="div"
                                            color="white"
                                            sx={{  fontFamily: "Poiret One", letterSpacing: 1 }}>
                                            {projects.name} <br/> <br/>
                                        </Typography>
                                        <Typography  
                                            variant="h6"
                                            component="div"
                                            color="white"
                                            sx={{  fontFamily: "Poiret One", letterSpacing: 1 }}>
                                            {projects.description} <br/>
                                            <a href={projects.github} target="_blank" rel="noreferrer noopener" style={{ textDecoration: "none" }}>
                                            Git Repo </a>
                                            <a href={projects.link} target="_blank" rel="noreferrer noopener" style={{ textDecoration: "none" }}>
                                            Website </a> 
                                        </Typography>
                                    </div> 
                                </div>
                            </Item> 
                        </div>
                    )}
                </Box>
    </>
  )
}

export default Projects