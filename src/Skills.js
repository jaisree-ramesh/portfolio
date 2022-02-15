import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { Icon } from '@iconify/react';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    lineHeight: '50px',
    backgroundColor: 'transparent',
    borderRadius: 25,
    width:'350px',
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',

}));


export default function Elevation() {
    return (
                    <Box
                        sx={{
                        p: 2,
                        bgcolor: 'transparent',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr 1fr' },
                        gap:10 ,
                        margin: 5,
                        
                        }}
                    >
                        <Item elevation = '20' sx={{ p: 2}}> 
                            <Typography  
                                variant="h5"
                                component="div"
                                color="white"
                                sx={{ fontWeight: 'light', fontFamily: "Poiret One", letterSpacing: 1 }}>
                                    Front-End Development <br /> <br />
                            </Typography>
                                <div className="iconGrid">
                                    <div className="iconItem">
                                        <Icon icon="akar-icons:html-fill" width="60" height="60" color="white"  inline={true} className="iconImage" />
                                        <div className="iconTitle"> HTML </div>
                                    </div>
                                    <div className="iconItem">
                                        <Icon icon="akar-icons:css-fill" width="60" height="60"  height="60" color="white"  inline={true} className="iconImage"  />
                                        <div className="iconTitle"> CSS </div>
                                    </div>
                                    <div className="iconItem">
                                        <Icon icon="akar-icons:javascript-fill" width="60" height="60"   color="white" className="iconImage" />
                                        <div className="iconTitle"> Javascript </div>
                                    </div>
                                    <div className="iconItem">
                                        <Icon icon="akar-icons:react-fill" width="60" height="60"  color="white" className="iconImage" />
                                        <div className="iconTitle"> React JS </div>
                                    </div>
                                    <div className="iconItem">
                                        <Icon icon="akar-icons:bootstrap-fill" width="60" height="60" color="white" className="iconImage"  />
                                        <div className="iconTitle"> Bootstrap </div>
                                    </div>
                                    <div className="iconItem">
                                        <Icon icon="akar-icons:figma-fill" width="60" height="60"  color="white" className="iconImage" />
                                        <div className="iconTitle"> Figma </div>
                                    </div>
                                    <div className="iconItem">
                                        <Icon icon="mdi:material-ui" width="60" height="60"  color="white" className="iconImage"  />
                                        <div className="iconTitle"> MUI </div>
                                    </div>
                                </div>
                        </Item>
                        <Item elevation = '20'  sx={{ p: 2}}> 
                            <Typography  
                                variant="h5"
                                component="div"
                                color="white"
                                sx={{ fontWeight: 'light', fontFamily: "Poiret One", letterSpacing: 1 }}>
                                    Back-End Development <br /> <br />
                            </Typography>
                            <div className="iconGrid"> 
                                <div className="iconItem"> 
                                    <Icon icon="fa-brands:node-js" width="60" color="white" className="iconImage"/>
                                    <div className="iconTitle"> Node JS </div>
                                </div>
                                <div className="iconItem"> 
                                    <Icon icon="simple-icons:express" height="60"  color="white"  className="iconImage"/>
                                    <div className="iconTitle"> Express </div>
                                </div>
                                <div className="iconItem"> 
                                    <Icon icon="simple-icons:mongodb" color="white" width="60"  className="iconImage" />
                                    <div className="iconTitle"> MongoDB </div>
                                </div>
                                <div className="iconItem"> 
                                    <Icon icon="cib:mysql" color="white" width="80"  className="iconImage" />
                                    <div className="iconTitle"> MySQL </div>
                                </div>
                                <div className="iconItem"> 
                                    <Icon icon="simple-icons:postgresql" color="white" width="60"  className="iconImage"/>
                                    <div className="iconTitle"> PostgreSQL </div>
                                </div>
                                    <div className="iconItem"> 
                                    <Icon icon="akar-icons:github-outline-fill" color="white" width="60"  className="iconImage"/>  
                                    <div className="iconTitle"> GitHub </div>
                                </div>
                            </div>                 
                        </Item>
                        <Item elevation = '20'  sx={{ p: 2}}> 
                            <Typography  
                                variant="h5"
                                component="div"
                                color="white"
                                sx={{  fontFamily:"Poiret One", letterSpacing: 1 }}>
                                    Project Management <br /> <br />
                            </Typography>
                            <Typography  
                                variant="h6"
                                component="div"
                                color="white"
                                sx={{ fontFamily: "Poiret One", letterSpacing: 1 }}>
                                    Practices: <br />
                                    Agile methodologies<br /><br />
                            </Typography>
                            <Typography  
                                variant="h6"
                                component="div"
                                color="white"
                                sx={{ fontWeight: 'light', fontFamily: "Poiret One", letterSpacing: 1 }}>
                                    Tools:  <br/>
                                    <br/>
                            <div className="iconGrid"> 
                                <div className="iconItem"> 
                                    <Icon icon="ri:trello-line" color="white" width="60"  className="iconImage"/>
                                    <div className="iconTitle"> Trello </div>
                                </div>
                                <div className="iconItem"> 
                                    <Icon icon="cib:notion" color="white" width="60" className="iconImage"/>
                                    <div className="iconTitle"> Notion</div>
                                </div>
                                <div className="iconItem"> 
                                    <Icon icon="akar-icons:discord-fill" color="white" width="60" className="iconImage"/>
                                    <div className="iconTitle"> Discord</div>
                                </div>
                            </div>
                            </Typography>
                        </Item>
                    </Box>
    );
}
