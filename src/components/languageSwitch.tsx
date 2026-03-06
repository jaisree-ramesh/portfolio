import { Switch, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const LanguageSwitch = styled(Switch)(({ theme }) => ({
  width: 42,
  height: 22,
  padding: 0,
  display: "flex",
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#666",
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 18,
    height: 18,
    boxShadow: "none",
  },
  "& .MuiSwitch-track": {
    borderRadius: 11,
    backgroundColor: "#333",
    opacity: 1,
  },
}));

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const isDE = i18n.language.toLowerCase() === "de";

  const handleChange = () => {
    i18n.changeLanguage(isDE ? "en" : "de");
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      role="group"
      aria-label="Language toggle"
    >
      <Typography variant="caption" sx={{ color: !isDE ? "white" : "gray" }}>
        EN
      </Typography>

      <LanguageSwitch
        checked={isDE}
        onChange={handleChange}
        aria-label="Toggle language"
      />

      <Typography variant="caption" sx={{ color: isDE ? "white" : "gray" }}>
        DE
      </Typography>
    </Stack>
  );
};

export default LanguageToggle;
