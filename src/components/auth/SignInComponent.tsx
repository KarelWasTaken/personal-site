"use client";
import { useRef } from "react";
import InputBox from "../others/InputBox";
import { signIn } from "next-auth/react";

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
            <form onSubmit={onSubmit}>
                {!!props.error && <p>Chyba autentikace</p>}
                <InputBox
                    name="username"
                    labelText="user name"
                    onChange={(e) => (userName.current = e.target.value)}
                />
                <InputBox
                    name="password"
                    labelText="pass word"
                    onChange={(e) => (pass.current = e.target.value)}
                />
                <button type="submit">SignIn</button>
            </form>
        </div>
        
    )
}

export default SignInComponent;