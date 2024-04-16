import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import styles from "./page.module.css"


export default function UserLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <main className={styles.mainflexbox}>
            <Navigation />
            <div className={styles.content}>
              {children}
            </div>
            <Footer />
        </main>
    )
  }
  