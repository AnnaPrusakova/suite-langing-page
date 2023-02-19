import Footer from "./Footer";
import Header from "./Header";
import Review from "./Review";
import Solution from "./Solution";

const MainPage: React.FC<{}> = () => {
    return (
    <div>
        <Header />
        <Solution />
        <Review />
        <Footer />
    </div>);
}

export default MainPage;