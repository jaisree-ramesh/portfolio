import { useState } from "react";
import { Icon } from "@iconify/react";
import EN from "../images/EN.pdf";
import DE from "../images/DE.pdf";
import logo from "../images/logo.png";
import LanguageToggle from "./languageSwitch";
import { IconButton, Tooltip } from "@mui/material";
import ContactDialog from "./contactDialog";
 import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [contactOpen, setContactOpen] = useState(false);
 const {t} = useTranslation();

  return (
    <nav className="navigation" aria-label={t("navbar.title")}>
      <div className="navigationS">
        {/* Logo */}
        <button
          className="logoBtn"
          aria-label={t("navbar.topScroll")}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={logo} alt="Personal logo" className="logoCon" />
        </button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginRight: "40px",
          }}
        >
          {/* GitHub */}
          <Tooltip title="GitHub" placement="bottom">
            <a
              href="https://github.com/jaisree-ramesh"
              target="_blank"
              rel="noreferrer noopener"
              style={{ display: "block", padding: "8px 16px" }}
              aria-label={t("navbar.github")}
            >
              <Icon icon="akar-icons:github-fill" color="white" height="20" />
            </a>
          </Tooltip>

          {/* LinkedIn */}
          <Tooltip title="LinkedIn" placement="bottom">
            <a
              href="https://www.linkedin.com/in/jaisree-ramesh/"
              target="_blank"
              rel="noreferrer noopener"
              style={{ display: "block", padding: "8px 16px" }}
              aria-label={t("navbar.linkedin")}
            >
              <Icon
                icon="akar-icons:linkedin-box-fill"
                color="white"
                height="20"
              />
            </a>
          </Tooltip>

          {/* Resume DE */}

          <Tooltip title="Resume (DE)" placement="bottom">
            <IconButton
              component="a"
              href={DE}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("navbar.resumeDe")}
              sx={{ color: "white" }}
            >
              <Icon icon="mdi:file-document-outline" width="22" />
              <span style={{ fontSize: "12px", marginLeft: "6px" }}>DE</span>
            </IconButton>
          </Tooltip>

          {/* Resume EN */}
          <Tooltip title="Resume (EN)" placement="bottom">
            <IconButton
              component="a"
              href={EN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("navbar.resumeEn")}
              sx={{ color: "white" }}
            >
              <Icon icon="mdi:file-document-outline" width="22" />
              <span style={{ fontSize: "12px", marginLeft: "6px" }}>EN</span>
            </IconButton>
          </Tooltip>

          {/* Contact */}
          <Tooltip title={t("navbar.contact")} placement="bottom">
            <IconButton
              aria-label={t("navbar.contactForm")}
              onClick={() => {
                setContactOpen(true);
              }}
              sx={{ color: "white" }}
            >
              <Icon icon="mdi:email-outline" width="22" />
            </IconButton>
          </Tooltip>

          {/* Language Toggle */}
          <LanguageToggle />
        </div>
        <ContactDialog
          open={contactOpen}
          onClose={() => setContactOpen(false)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
