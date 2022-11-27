import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useRouter } from 'next/router';
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export default function Login() {

    //sign in with google
    const route = useRouter();
    const [user,loading] = useAuthState(auth);
    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            route.push("/");
        }   
        catch (error) {
            console.log(error);
        }
    };
 
    useEffect(() => { 
        if (user) {
            route.push("/")
        }
        else {
            console.log("login");
        }
    },[user]);

    return (
        <div className="backdrop-blur-2xl shadow-xl shadow-[#06B6D4]/40 border-red-100 border-t-2  mt-32 p-10 text-gray-700 rounded-lg">
            <h2 className="text-2xl font-medium text-[#C1C1C2]">Join Today</h2>
            <div className="py-4">
                <h3 className="py-4 text-[#06B6D4]">
                    Sign in with providers</h3>
                <button onClick={GoogleLogin} className="text-white bg-gray-700 w-full font-medium rounded-lg flex align-middle p-4 gap-2">
                    <FcGoogle className="text-2xl" />
                    Sign-In with Google
                </button>
            </div>
        </div>
    )
}