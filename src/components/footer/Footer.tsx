import styles from './footer.module.scss';
import Facebook from '../../assets/icon-facebook.svg';
import Twitter from '../../assets/icon-twitter.svg';
import Instagram from '../../assets/icon-instagram.svg';
import Jeremy from '../../assets/image-jeremy-large.png';
import Line from '../../assets/pattern-curved-line-2.svg';
import Logo from '../../assets/logo.svg';


const Footer: React.FC<{}> = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.backgroundWrapper}>
            <div className={styles.reviewWrapper}>
            <div className={styles.jeremyImg}>
                <img src={Jeremy} alt={'jeremy'} />
            </div>
                <img className={styles.line} src={Line} alt={'line'}/>
            <div className={styles.review}>
                <div className={styles.title}>It just <strong>works.</strong></div>
                <div className={styles.text}>“I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.”</div>
                <div className={styles.authorReview}>
                    <div className={styles.author}>JEREMY ROBINSON</div>
                    <div className={styles.position}>CMO, FYLO</div>
                </div>
            </div>
        </div>
        <div className={styles.footerWrapper}>
        <img className={styles.headerText} src={Logo} alt={'logo'}/>
            <div className={styles.footerText}>Copyright - Suite</div>
            <div className={styles.socials}>
                <img className={styles.social} src={Facebook} />
                <img className={styles.social} src={Twitter} />
                <img className={styles.social} src={Instagram} />
            </div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;