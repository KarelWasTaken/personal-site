"use client";

import { signOut } from "next-auth/react";

type Props = {
    className?: string;
    callbackUrl?: string;
    error?: string;
}
const SignOutComponent = (props: Props) => {
    signOut();
    return <h1>Signed out</h1>
}
export default SignOutComponent;