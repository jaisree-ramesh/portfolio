import bespoke from "../images/bespokefashion.png";
import task from "../images/clipboard.png";
import memeCreator from "../images/memeCreator.png";
import rps from "../images/rps.png";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    backgroundColor: "transparent",
    borderRadius: 25,
    width: "350px",
    height: "400px",
    marginLeft: "auto",
    marginRight: "auto",
  }));

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
      name: "UpNext",
      description:
        "A website to configure, create and buy outifts for any occasion.",
      // image :,
      tech: [
        "React TS",
        "Vite",
        "Zustand",
        "Zustand Persist",
        "shadcn/ui",
        "Tailwind CSS",
        "Magic UI ",
        "i18next",
        " Tmbd (for API) ",
      ],
      githubFE: "https://github.com/jaisree-ramesh/upNext",
      link: "https://jaisree-ramesh.github.io/upNext/",
    },

    {
      name: "Trackwise",
      description: <Trans i18nKey="projects.trackwiseDesc" />,
      // image: timora,
      tech: [
        "React TS",
        "Vite",
        "Zustand",
        "Zustand Persist",
        "shadcn/ui",
        "Tailwind CSS",
        "Recharts",
        "i18next",
      ],
      githubFE: "https://github.com/jaisree-ramesh/timora",
      link: "https://jaisree-ramesh.github.io/timora/",
    },

    {
      name: "Timora",
      description: <Trans i18nKey="projects.timoraDesc" />,
      // image: timora,
      tech: [
        "React TS",
        "Vite",
        "Zustand",
        "shadcn/ui",
        "Tailwind CSS",
        "Recharts",
        "i18next",
      ],
      githubFE: "https://github.com/jaisree-ramesh/timora",
      link: "https://jaisree-ramesh.github.io/timora/",
    },
    {
      name: "Bespoke Fashion",
      description: <Trans i18nKey="projects.bespokeDesc" />,
      image: bespoke,
      tech: ["React JS", "React Bootstrap", "Node JS", "Express", "Mongo DB"],
      githubFE: "https://github.com/Francine-Pepe/bespokefashion",
      githubBE: "https://github.com/jaisree-ramesh/fashionBE",
      link: "https://bespokefashion.netlify.app/",
    },
    {
      name: "Rock Paper Scissors",
      description: <Trans i18nKey="projects.rpsDesc" />,
      image: rps,
      tech: ["React JS", "CSS"],
      githubFE: "https://github.com/jaisree-ramesh/rock-paper-scissors",
      link: "https://jaisree-ramesh.github.io/rock-paper-scissors/",
    },
    {
      name: "Tasks to do",
      description: <Trans i18nKey="projects.todoDesc" />,
      image: task,
      tech: ["React TS", "CSS"],
      githubFE: "https://github.com/jaisree-ramesh/todo",
      link: "https://jaisree-ramesh.github.io/todo/",
    },
    {
      name: "Meme Creator",
      description: <Trans i18nKey="projects.memeDesc" />,
      image: memeCreator,
      tech: ["React JS", "React Bootstrap"],
      githubFE: "https://github.com/jaisree-ramesh/memecreator",
      link: "https://jaisree-ramesh.github.io/memecreator/",
    },
  ];

  return (
    <>
      <Typography
        variant="h4"
        component="div"
        color="white"
        id="projects"
        sx={{ letterSpacing: 1 }}
      >
        {t("projects.title")}
        <br />
      </Typography>
      <Box
        sx={{
          p: 2,
          bgcolor: "transparent",
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr 1fr" },
          gap: 10,
          margin: 6,
          justifyContent: "center",
        }}
      >
        {projects.map((projects, id) => (
          <div key={id}>
            <Item elevation={20} sx={{ p: 2 }}>
              <div className="card">
                <div className="side">
                  <Typography
                    variant="h5"
                    component="div"
                    color="white"
                    sx={{ fontFamily: "Poiret One", letterSpacing: 1 }}
                  >
                    {projects.name} <br /> <br />
                  </Typography>

                  <Typography
                    component="div"
                    color="white"
                    align="left"
                    sx={{
                      fontFamily: "Unna ",
                      letterSpacing: 1,
                      marginLeft: 2,
                      marginRight: 2,
                      fontSize: 19,
                    }}
                  >
                    {projects.description}
                  </Typography>
                </div>
                <div className="side back">
                  <Typography
                    variant="h5"
                    component="div"
                    color="white"
                    sx={{ fontFamily: "Poiret One", letterSpacing: 1 }}
                  >
                    {projects.name} <br /> <br />
                  </Typography>
                  <Typography
                    variant="h6"
                    component="div"
                    color="white"
                    sx={{ fontFamily: "Poiret One", letterSpacing: 1 }}
                  >
                    {/* images  */}
                    {/* <img src={projects.image} alt="Project Image" width={100}/> <br /> */}
                    <br />
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                    >
                      {projects.tech.map((techItem, index) => (
                        <span key={index}>
                          {techItem}
                          {index < projects.tech.length - 1 && (
                            <span
                              style={{
                                marginLeft: "20px",
                                marginRight: "20px",
                              }}
                            >
                              |
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                    <br />
                    <br />

                    <div className="linksDiv">
                      <div
                        style={{
                          display: projects.githubFE ? "block" : "none",
                        }}
                        className="divLink"
                      >
                        <a
                          href={projects.githubFE}
                          target="_blank"
                          rel="noreferrer noopener"
                          style={{ textDecoration: "none" }}
                        >
                          {t("projects.feCode")}
                        </a>
                      </div>
                      <div
                        style={{
                          display: projects.githubBE ? "block" : "none",
                        }}
                        className="divLink"
                      >
                        <a
                          href={projects.githubBE}
                          target="_blank"
                          rel="noreferrer noopener"
                          style={{ textDecoration: "none" }}
                        >
                          {t("projects.beCode")}
                        </a>
                      </div>
                      <div
                        style={{ display: projects.link ? "block" : "none" }}
                        className="divLink"
                      >
                        <a
                          href={projects.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          style={{ textDecoration: "none" }}
                        >
                          {t("projects.demo")}
                        </a>
                      </div>
                    </div>
                  </Typography>
                </div>
              </div>
            </Item>
          </div>
        ))}
      </Box>
    </>
  );
};

export default Projects;
