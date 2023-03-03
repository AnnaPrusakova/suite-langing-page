import ButtonSecondary from '../common/ButtonSecondary'
import styles from './header.module.scss'
import Logo from '../../assets/logo.svg'

const Header: React.FC<{}> = () => {
    return (
        <header className={styles.headerWrapper}>
            <img className={styles.headerText} src={Logo} alt={'logo'} />
            <div className={styles.btnWrapper}>
                <ButtonSecondary />
            </div>
        </header>
    )
}

export default Header
