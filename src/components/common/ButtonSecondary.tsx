import styles from './button.module.scss';

const ButtonSecondary: React.FC<{}> = () => {
    return(
        <button className={styles.btnSecondaryWrapper}>
            <div>Request Beta Access</div>
        </button>
    )
}

export default ButtonSecondary;