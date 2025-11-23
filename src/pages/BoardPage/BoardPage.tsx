import type { ReactNode } from "react";

import { useParams } from "react-router-dom";

import styles from "./BoardPage.module.css";

export default function BoardPage(): ReactNode {
  const { id } = useParams();

  return <div className={styles["board-page"]}>Board {id}</div>;
}