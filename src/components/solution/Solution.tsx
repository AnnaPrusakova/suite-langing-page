import ButtonDefault from '../common/ButtonDefault';
import styles from './solution.module.scss';
import HeroPortrait from '../../assets/image-hero-portrait.png';
import HeroLandscape from '../../assets/image-hero-landscape.png';

const Solution: React.FC<{}> = () => {
    return (
        <main className={styles.solutionWrapper}>
            <div className={styles.firstBlock}>
                <div className={styles.titleBlock}>
                    <div className={styles.title}>A <strong>super</strong> <span className={styles.solution}>solution</span> for your <strong>business.</strong></div>
                    <p className={styles.supText}>Our marketing and sales automations help you scale your outreach to get more leads for your company.</p>
                    <div className={styles.btn}><ButtonDefault /></div>
                </div>
                <div><img className={styles.imgHeroLandscape} src={HeroLandscape} alt="hero"/></div>
                <div><img className={styles.imgHero} src={HeroPortrait} alt="hero"/></div>
            </div>
            <div className={styles.secondBlock}>
                <div className={styles.infoWrapper}>
                    <div className={styles.boldNumber}>2K+</div>
                    <div className={styles.numberInfo}>COMPANIES</div>
                </div>
                <div className={styles.infoWrapper}>
                    <div className={styles.boldNumber}>8</div>
                    <div>LANGUAGE</div>
                </div>
                <div className={styles.infoWrapper}>
                    <div className={styles.boldNumber}>1.2M</div>
                    <div>LEADS</div>
                </div>
            </div>
        </main>
    );
}

export default Solution;