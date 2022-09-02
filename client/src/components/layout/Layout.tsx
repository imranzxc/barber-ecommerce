import { FC, ReactNode, useEffect, useRef } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Layout.module.scss';

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollTo(0, 0);
  }, [children]);

  return (
    <>
      <div className={styles.layout}>
        <Header />
        <div ref={ref} className={styles.center}>
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout
