export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img
          src="/assets/itzfizz_newlogo-e1722418257825.webp"
          alt="ITZFIZZ Logo"
        />
      </div>

      <nav className="nav-links">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </header>
  );
}