import ButtonSecondary from "../common/ButtonSecondary";
import styles from './header.module.scss';

const Header: React.FC<{}> = () => {
    return (
    <div className={styles.headerWrapper}>
        <div className={styles.header}>
        <div className={styles.headerText}>suite</div>
        <div className={styles.btnWrapper}><ButtonSecondary /></div>
        </div>
    </div>);
}

export default Header;