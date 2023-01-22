import Navbar from "../components/ui/Navbar";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const About = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <Helmet>
        <title>Spanish traffic cams - About</title>
      </Helmet>
      <Navbar />
      <div className="about">
        <div className="about-page-container">
          <h1 className="about-header">About</h1>
          <div className="about-section">
            <div>
              <h1>{t("aboutPage.data-objective-header")}</h1>
            </div>
            <div>
              <p>{t("aboutPage.data-objective-1p")}</p>
              <a href="https://infocar.dgt.es/datex2/">
                https://infocar.dgt.es/datex2/
              </a>
              <p>{t("aboutPage.data-objective-2p")}</p>
              <p>{t("aboutPage.data-objective-3p")}</p>
              <p>{t("aboutPage.data-objective-4p")}</p>
            </div>
          </div>
          <div className="about-section">
            <div>
              <h1>{t("aboutPage.open-source-header")}</h1>
            </div>
            <div>
              <p>{t("aboutPage.open-source-1p")}</p>
              <a href="https://github.com/pavece/es-trafficams">
                https://github.com/pavece/es-trafficams
              </a>
              <p>
                {t("aboutPage.cc")}
                <a href="https://pavece.com">Pavece</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
