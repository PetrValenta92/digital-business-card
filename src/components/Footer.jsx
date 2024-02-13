import twitterIcon from '../images/twitter.svg';
import instagramIcon from '../images/instagram.svg';
import githubIcon from '../images/github.svg';

export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://twitter.com/PedroValenta" target="_blank"><img src={ twitterIcon } alt="Twitter icon" /></a>
            <a href="https://www.instagram.com/petr_thedev/" target="_blank"><img src={ instagramIcon } alt="Instagram icon" /></a>
            <a href="https://github.com/PetrValenta92" target="_blank"><img src={ githubIcon } alt="GitHub icon" /></a>
        </footer>
    )
}