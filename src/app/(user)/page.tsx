import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css"
import { getServerSession } from "next-auth";


export default async function Home() {
  const session = await getServerSession()
  return (
    <>
      <h1 className={styles.centeralign}>Obsah domovské stránky stále připravuji.</h1>
      <p>{ session?.user ? "server session gotten" : "no server session"}</p>
    </>
  );
}
