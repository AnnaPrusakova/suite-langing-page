import styles from './button.module.scss';

const ButtonDefault: React.FC<{}> = () => {
    return(
        <button className={styles.btnDefault}>
            <div>Request Beta Access</div>
        </button>
    );
};

export default ButtonDefault;