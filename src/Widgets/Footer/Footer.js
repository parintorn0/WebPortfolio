import './Footer.css';
function Footer() {
    return (
        <footer>
            <div className="copyright">Copyright © All Right Reserved</div>
            <BotNav/>
        </footer>
    )
}

function BotNav() {
    return (
        <nav class="sociallink">
            <a href="https://www.instagram.com/to_parin"><img src="../../images/instagram.png" alt="" className="icon" /></a>
            <a href="https://www.facebook.com/toparinn"><img src="../../images/facebook.png" alt="" className="icon" /></a>
            <a href="https://www.linkedin.com/in/parintorn-thammasitboon-274848290" ><img src="../../images/linkedin.png" alt="" className="icon" /></a>
        </nav>
    )
}

export default Footer;