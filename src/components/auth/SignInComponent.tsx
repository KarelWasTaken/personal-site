"use client";
import { useRef } from "react";
import InputBox from "../others/InputBox";
import { signIn } from "next-auth/react";
import styles from "./SignInComponent.module.scss"

type Props = {
    className?: string;
    callbackUrl?: string;
    error?: string;
}

const SignInComponent = (props: Props) => {
    const userName = useRef("");
    const pass = useRef("");
    const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await signIn("credentials", {
            username: userName.current,
            password: pass.current,
            redirect: true,
            callbackUrl: "http://localhost"
        })
    }
    return(
        <div className={props.className}>

            <form onSubmit={onSubmit} className={styles.form}>
                <h1 className={styles.heading}>Přihlásit se</h1>
                <div className={styles.inputboxparent}>
                    <InputBox
                        name="username"
                        labelText="Uživatelské jméno"
                        onChange={(e) => (userName.current = e.target.value)}
                    />
                    <InputBox
                        name="password"
                        labelText="Heslo"
                        type="password"
                        onChange={(e) => (pass.current = e.target.value)}
                    />
                </div>
                {!!props.error && <p className={styles.chyba}>Chyba autentikace</p>}
                <button type="submit" className={styles.button}>Přihlásit</button>
            </form>

        </div>
        
    )
}

export default SignInComponent;