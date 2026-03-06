import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Icon } from "@iconify/react";

const Skills = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    lineHeight: "50px",
    backgroundColor: "transparent",
    borderRadius: 25,
    width: "350px",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    // boxShadow: '0 16px 24px 2px rgba(85, 87, 88, 0.555)',
    border: "1px rgba(85, 87, 88, 0.555)",
  }));

  return (
    <Box
      sx={{
        p: 2,
        bgcolor: "transparent",
        display: "grid",
        gridTemplateColumns: { md: "1fr 1fr 1fr" },
        gap: 10,
        margin: 5,
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Item elevation={20} sx={{ p: 2 }}>
        <Typography
          variant="h5"
          component="div"
          color="white"
          sx={{
            fontWeight: "light",
           fontFamily: "Poiret One",
            letterSpacing: 1,
          }}
        >
          Front-End Development <br /> <br />
        </Typography>
        <div className="iconGrid">
          <div className="iconItem">
            <Icon
              icon="akar-icons:react-fill"
              width="40"
              height="40"
              color="white"
              inline={true}
              className="iconImage"
            />
            <div className="iconTitle"> React </div>
          </div>
          <div className="iconItem">
            <Icon
              icon="devicon-plain:zustand"
              width="40"
              height="40"
              color="white"
              inline={true}
              className="iconImage"
            />
            <div className="iconTitle"> Zustand </div>
          </div>
          <div className="iconItem">
            <Icon
              icon="lineicons:vite"
              width="40"
              height="40"
              color="white"
              inline={true}
              className="iconImage"
            />
            <div className="iconTitle"> Vite </div>
          </div>
          <div className="iconItem">
            <Icon
              icon="akar-icons:html-fill"
              width="40"
              height="40"
              color="white"
              inline={true}
              className="iconImage"
            />
            <div className="iconTitle"> HTML </div>
          </div>
          <div className="iconItem">
            <Icon
              icon="akar-icons:javascript-fill"
              width="40"
              height="40"
              color="white"
              className="iconImage"
            />
            <div className="iconTitle"> Javascript</div>
          </div>
          <div className="iconItem">
            <Icon
              icon="akar-icons:typescript-fill"
              width="40"
              height="40"
              color="white"
              className="iconImage"
            />
            <div className="iconTitle"> TypeScript </div>
          </div>
          <div className="iconItem">
            <Icon
              icon="akar-icons:bootstrap-fill"
              width="40"
              height="40"
              color="white"
              className="iconImage"
            />
            <div className="iconTitle"> Bootstrap </div>
          </div>
          <div className="iconItem">
            <Icon
              icon="akar-icons:css-fill"
              width="40"
              height="40"
              color="white"
              inline={true}
              className="iconImage"
            />
            <div className="iconTitle"> CSS </div>
          </div>
          <div className="iconItem">
            <Icon
              icon="akar-icons:sass-fill"
              width="40"
              height="40"
              color="white"
              inline={true}
              className="iconImage"
            />
            <div className="iconTitle"> SASS </div>
          </div>
          <div className="iconItem">
            <Icon
              icon="mdi:tailwind"
              width="40"
              height="40"
              color="white"
              inline={true}
              className="iconImage"
            />
            <div className="iconTitle"> Tailwind </div>
          </div>
          <div className="iconItem">
            <Icon
              icon="simple-icons:antdesign"
              width="40"
              height="40"
              color="white"
              inline={true}
              className="iconImage"
            />
            <div className="iconTitle"> AntD </div>
          </div>
          <div className="iconItem">
            <Icon
              icon="akar-icons:figma-fill"
              width="40"
              height="40"
              color="white"
              className="iconImage"
            />
            <div className="iconTitle"> Figma </div>
          </div>
          <div className="iconItem">
            <Icon
              icon="mdi:material-ui"
              width="40"
              height="40"
              color="white"
              className="iconImage"
            />
            <div className="iconTitle"> MUI </div>
          </div>
        </div>
      </Item>
      <Item elevation={20} sx={{ p: 2 }}>
        <Typography
          variant="h5"
          component="div"
          color="white"
          sx={{
            fontWeight: "light",
             fontFamily: "Poiret One",
            letterSpacing: 1,
          }}
        >
          Back-End Development <br /> <br />
        </Typography>
        <div className="iconGrid">
          <div className="iconItem">
            <Icon
              icon="fa-brands:node-js"
              width="40"
              height="40"
              color="white"
              className="iconImage"
            />
            <div className="iconTitle"> NodeJS </div>
          </div>
          <div className="iconItem">
            <Icon
              icon="ant-design:dot-net-outlined"
              width="40"
              height="40"
              color="white"
              className="iconImage"
            />
            <div className="iconTitle"> .NET </div>
          </div>
          <div className="iconItem">
            <Icon
              icon="devicon-plain:csharp"
              width="40"
              height="40"
              color="white"
              className="iconImage"
            />
            <div className="iconTitle"> C# </div>
          </div>
          <div className="iconItem">
            <Icon
              icon="eos-icons:api"
              width="40"
              height="40"
              color="white"
              className="iconImage"
            />
            <div className="iconTitle"> RESTful API </div>
          </div>
          <div className="iconItem">
            <Icon
              icon="mdi:graphql"
              width="40"
              height="40"
              color="white"
              className="iconImage"
            />
            <div className="iconTitle"> GraphQL </div>
          </div>
          <div className="iconItem">
            <Icon
              icon="simple-icons:express"
              width="40"
              height="40"
              color="white"
              className="iconImage"
            />
            <div className="iconTitle"> Express </div>
          </div>
          <div className="iconItem">
            <Icon
              icon="simple-icons:mongodb"
              color="white"
              width="40"
              height="40"
              className="iconImage"
            />
            <div className="iconTitle"> MongoDB </div>
          </div>
          <div className="iconItem">
            <Icon
              icon="cib:mysql"
              color="white"
              width="40"
              height="40"
              className="iconImage"
            />
            <div className="iconTitle"> MySQL </div>
          </div>
          <div className="iconItem">
            <Icon
              icon="simple-icons:postgresql"
              color="white"
              width="40"
              height="40"
              className="iconImage"
            />
            <div className="iconTitle"> PostgreSQL </div>
          </div>
          <div className="iconItem">
            <Icon
              icon="akar-icons:github-outline-fill"
              color="white"
              width="40"
              height="40"
              className="iconImage"
            />
            <div className="iconTitle"> GitHub </div>
          </div>
        </div>
      </Item>
      <Item elevation={20} sx={{ p: 2 }}>
        <Typography
          variant="h5"
          component="div"
          color="white"
          sx={{  fontFamily: "Poiret One",  letterSpacing: 1 }}
        >
          Project Management <br /> <br />
        </Typography>
        <Typography
          variant="h6"
          component="div"
          color="white"
          sx={{ /* fontFamily: "Poiret One", */ letterSpacing: 1 }}
        >
          Practices: <br />
          Agile methodologies
          <br />
          <br />
        </Typography>
        <Typography
          variant="h6"
          component="div"
          color="white"
          sx={{
            fontWeight: "light",
            // fontFamily: "Poiret One",
            letterSpacing: 1,
          }}
        >
          Tools: <br />
          <br />
          <div className="iconGrid">
            <div className="iconItem">
              <Icon
                icon="arcticons:microsoft-power-apps"
                color="white"
                width="40"
                height="40"
                className="iconImage"
              />
              <div className="iconTitle"> Power Apps </div>
            </div>
            <div className="iconItem">
              <Icon
                icon="mdi:microsoft-sharepoint"
                color="white"
                width="40"
                height="40"
                className="iconImage"
              />
              <div className="iconTitle"> Sharepoint </div>
            </div>
            <div className="iconItem">
              <Icon
                icon="codicon:azure-devops"
                color="white"
                width="40"
                height="40"
                className="iconImage"
              />
              <div className="iconTitle"> Azure Devops </div>
            </div>
            <div className="iconItem">
              <Icon
                icon="ri:trello-line"
                color="white"
                width="40"
                height="40"
                className="iconImage"
              />
              <div className="iconTitle"> Trello </div>
            </div>
            <div className="iconItem">
              <Icon
                icon="cib:notion"
                color="white"
                width="40"
                height="40"
                className="iconImage"
              />
              <div className="iconTitle"> Notion</div>
            </div>
            <div className="iconItem">
              <Icon
                icon="akar-icons:discord-fill"
                color="white"
                width="40"
                height="40"
                className="iconImage"
              />
              <div className="iconTitle"> Discord</div>
            </div>
          </div>
        </Typography>
      </Item>
    </Box>
  );
};

export default Skills;
