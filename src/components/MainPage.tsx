import Footer from "./footer/Footer";
import Header from "./header/Header";
import Review from "./review/Review";
import Solution from "./solution/Solution";
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