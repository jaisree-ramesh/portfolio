import React from 'react'
import bespoke from './images/bespokefashion.png'
import space from './images/spacecrew.png'
import news from './images/hackerNews.png'
import ip from './images/ipFinder.png'
import cal from './images/calculator.png'
import memeCreator from './images/memeCreator.png'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    backgroundColor: 'transparent',
    borderRadius: 25,
    width:'350px',
    height: '400px',
    marginLeft: 'auto',
    marginRight: 'auto',
}));

function Projects() {

    const projects = [
        // {
        //     name: ,
        //     description: 'A website to configure, create and buy outifts for any occasion.',
        //     image :,
        //     tech: 'React JS | React Bootstrap | Node JS | Express | Mongo DB',
        //     githubFE: ,
        //     githubBE: 'https://github.com/jaisree-ramesh/',
        //     link : ''
        // },
        {
                name: 'Meme Creator',
                description: 'A website to create or generate a new meme.',
                image : memeCreator,
                tech: 'React JS | React Bootstrap ',
                githubFE: 'https://github.com/jaisree-ramesh/memecreator',
                link : 'https://jaisree-ramesh.github.io/memecreator/'
            },
        {
            name: 'Bespoke Fashion',
            description: 'A website to configure, create and buy outifts for any occasion.',
            image : bespoke,
            tech: 'React JS | React Bootstrap | Node JS | Express | Mongo DB',
            githubFE: 'https://github.com/Francine-Pepe/bespokefashion',
            githubBE: 'https://github.com/jaisree-ramesh/fashionBE',
            link : 'https://bespokefashion.netlify.app/'
        },
        {
            name: 'Space Crew',
            description: 'A game where you the captain must decide how to populate alien planets save it from extinction.',
            image : space,
            tech: 'React JS | React Bootstrap | Node JS | Express | Mongo DB',
            githubFE: 'https://github.com/jaisree-ramesh/thespacecrew',
            link : 'https://jaisree-ramesh.github.io/thespacecrew/'
        },
        {
            name: 'Hacker News',
            description: 'A hacker news blog that fetchs news from an API with a search function.',
            image : news,
            tech: 'React JS | API ',
            githubFE: 'https://github.com/jaisree-ramesh/api-project',
            
        },
        {
            name: 'Found Your IP',
            description: 'A website that displays your IP and location with help on an API.',
            image : ip,
            tech: 'React JS | API ',
            githubFE: 'https://github.com/jaisree-ramesh/find-my-ip',
        },
        {
            name: 'Calculator',
            description: 'A react Calculator',
            image : cal,
            tech: 'React JS  ',
            githubFE: 'https://github.com/jaisree-ramesh/calculator',
        },
    ];

  return (
    <>
        <Typography  
        variant="h4"
        component="div"
        color="white"
        id='projects'
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
                    justifyContent: 'center' 
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
                                            {projects.description} <br/> <br/> 
                                            {projects.tech} <br/>
                                            <div className="linksDiv">
                                                <div style={{ display :  projects.githubFE ? 'block' : "none" }} className="divLink"> 
                                                    <a href={projects.githubFE} target="_blank" rel="noreferrer noopener" style={{ textDecoration: "none"}}>
                                                    Frontend Repo</a>
                                                </div>
                                                <div style={{ display :  projects.githubBE ? 'block' : "none" }}  className="divLink"> 
                                                    <a href={projects.githubBE} target="_blank" rel="noreferrer noopener" style={{ textDecoration: "none"}}>
                                                    Backend Repo</a>
                                                </div>
                                                <div style={{ display :  projects.link ? 'block' : "none" }}  className="divLink"> 
                                                    <a href={projects.link} target="_blank" rel="noreferrer noopener" style={{ textDecoration: "none" }}>Website </a>
                                                </div>
                                            </div>
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