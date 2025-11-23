import type { ReactNode } from "react";

import { Outlet } from "react-router-dom";

import styles from "./RootLayout.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function RootLayout(): ReactNode {
  return (
    <div className={styles["root-layout"]}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}