import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Header from "../components/Header";

function RootLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
            <Cart/>
        </div>
    );
}

export default RootLayout;
