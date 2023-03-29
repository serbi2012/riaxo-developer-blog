import { ReactNode } from "react";
import styles from "./MainLayout.module.scss";
import Header from "../../atoms/Header/Header";
import Navigation from "../../molecules/Navigation/Navigation";
import Footer from "../../atoms/Footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Navigation />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
