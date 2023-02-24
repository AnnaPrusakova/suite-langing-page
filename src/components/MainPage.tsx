import Footer from "./Footer";
import Header from "./Header";
import Review from "./Review";
import Solution from "./Solution";
import styles from './main.module.scss';

const MainPage: React.FC<{}> = () => {
    return (
    <div className={styles.mainWrapper}>
        <Header />
        <Solution />
        <Review />
        <Footer />
    </div>);
}

export default MainPage;