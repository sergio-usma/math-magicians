function Header() {
  return (
    <div className="header__container">
      <nav className="header__nav">
        <a href="/" className="">
          <h1>Math Magicians</h1>
        </a>
        <div className="header__links">
          <a href="/">
            Home
          </a>
          <a
            href="/calculator"
          >
            Calculator
          </a>
          <a href="/quotes">
            Quotes
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
