import { Trans, useTranslation } from "react-i18next";
import pic from "../images/pic.jpg";

const Info = () => {
  const { t } = useTranslation();
  return (
    <div className="infoContainer" id="about">
      <div>
        <img src={pic} alt="photo" className="infoPic" />
      </div>
      <div className="infoText">
        <p>
          {t("info.greeting")} <br /> <br />
          <Trans i18nKey="info.text" />
        </p>
      </div>
    </div>
  );
};

export default Info;
