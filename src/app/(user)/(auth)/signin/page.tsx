import { notFound } from "next/navigation"
import { Metadata } from "next";
import SignInComponent from "@/components/auth/SignInComponent";
import styles from "./page.module.scss"


type Props={
    searchParams?: Record<"callBackUrl"|"error", string>;
}

export default function SignInPage(props:Props) {
    
    return <SignInComponent error={props.searchParams?.error} callbackUrl={props.searchParams?.error} className={styles.signin} />;
}