import twitter_icon from '../images/twitter_icon.svg';
import instagram_icon from '../images/instagram_icon.svg';
import github_icon from '../images/github_icon.svg';

export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://twitter.com/PedroValenta" target="_blank"><img src={ twitter_icon } alt="Twitter icon" /></a>
            <a href="https://www.instagram.com/petr_thedev/" target="_blank"><img src={ instagram_icon } alt="Instagram icon" /></a>
            <a href="https://github.com/PetrValenta92" target="_blank"><img src={ github_icon } alt="GitHub icon" /></a>
        </footer>
    )
}