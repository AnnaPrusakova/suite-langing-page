import ButtonDefault from '../common/ButtonDefault';
import styles from './solution.module.scss';
import Line  from '../../assets/pattern-curved-line-1.svg';
import Hero from '../../assets/image-hero-portrait.png';

const Solution: React.FC<{}> = () => {
    return (
        <div className={styles.solutionWrapper}>
             <img className={styles.curveLine} src={Line} alt="curve-line"/>
            <div className={styles.fistBlock}>
                <span className={styles.title}>A <span className={styles.boldTitle}>super solution</span> for your <span  className={styles.boldTitle}>business.</span></span>
                <div className={styles.supText}>Our marketing and sales automations help you scale your outreach to get more leads for your company.</div>
                <div className={styles.btn}><ButtonDefault /></div>
            </div>
            <img className={styles.imgHero} src={Hero} alt="hero"/>
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
        </div>
    );
}

export default Solution;