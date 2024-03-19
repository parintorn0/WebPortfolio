import './Header.css'

function Header() {
    return (
        <header>
            <a className="name" href="">Parintorn Thammasitboon</a>
            <TopNav />
        </header>);
}

function TopNav() {
    return (
        <nav>
            <a className="link" href="#about">About</a>
            <a className="link" href="#education">Education</a>
            <a className="link" href="#projects">Project</a>
            <a className="link" href="#contact">Contact</a>
        </nav>
        );
}

export default Header;