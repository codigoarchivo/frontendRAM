import { FC, ReactNode } from "react";
import Head from "next/head";
import styles from "@/styles/Layouts.module.css";

interface Props {
  children: ReactNode;
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const Layouts: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <p>
                <span className="material-symbols-outlined">menu</span>
                <span>Rick And Morty</span>
              </p>
            </li>
          </ul>
        </nav>
      </header>
      <main className="fadeIn">{children}</main>
      <footer className={styles.footer}>
        <p>
          Copyright {new Date().getFullYear()} Rick And Morty. All Rights Reserved
        </p>
      </footer>
    </>
  );
};
