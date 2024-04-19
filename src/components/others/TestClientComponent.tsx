"use client";

import { useSession } from "next-auth/react";


const TestClientComponent = () => {
    const {data: session} = useSession();

    return(
        <>
            <p>{session?.user ? "yep" : "nope"}</p>
        </>
    );
}

export default TestClientComponent;