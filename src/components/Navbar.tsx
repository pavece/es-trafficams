import { useTranslation } from "react-i18next";
const Navbar = () => {
  const [t, i18n] = useTranslation("global");

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="nav-container">
      <img src="/logo.svg" style={{ width: "calc(10rem + 3vw)" }} alt="" />
      <div className="nav-buttons">
        <a>About</a>
        <select
          name="Lang"
          id=""
          className="lang-selector"
          value={i18n.language}
          onChange={(e) => {
            changeLang(e.target.value);
          }}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
