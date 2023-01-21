const Navbar = () => {
  return (
    <nav className="nav-container">
      <img src="/logo.svg" style={{ width: "calc(10rem + 3vw)" }} alt="" />
      <div className="nav-buttons">
        <a>About</a>
        <select name="Lang" id="" className="lang-selector">
          <option value="en-Us">English</option>
          <option value="es-Es">Español</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
