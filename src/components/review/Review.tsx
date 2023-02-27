import styles from './review.module.scss';
import Jeremy from '../../assets/image-jeremy-large.png';
import Blur from '../../assets/pattern-blur.svg';
import Line from '../../assets/pattern-curved-line-2.svg';

const Review: React.FC<{}> = () => {
    return (
        <div className={styles.reviewWrapper}>
            <div>
                <img className={styles.jeremyImg} src={Jeremy} alt={'jeremy'} />
                <img className={styles.blur} src={Blur} alt={'blur'} />
            </div>
                <img className={styles.line} src={Line} alt={'line'}/>
            <div className={styles.review}>
                <div className={styles.title}>It just <span className={styles.boldTitle}>works.</span></div>
                <div className={styles.text}>“I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.”</div>
                <div className={styles.authorReview}>
                    <div className={styles.author}>JEREMY ROBINSON</div>
                    <div className={styles.position}>CMO, FYLO</div>
                </div>
            </div>
        </div>
    );
}

export default Review;