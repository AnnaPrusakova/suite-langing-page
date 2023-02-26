import styles from './footer.module.scss';
import Facebook from '../../assets/icon-facebook.svg';
import Twitter from '../../assets/icon-twitter.svg';
import Instagram from '../../assets/icon-instagram.svg';

const Footer: React.FC<{}> = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerLogo}>suite</div>
            <div className={styles.footerText}>Copyright - Suite</div>
            <div className={styles.socials}>
                <img className={styles.social} src={Facebook} />
                <img className={styles.social} src={Twitter} />
                <img className={styles.social} src={Instagram} />
            </div>
        </div>
    );
}

export default Footer;