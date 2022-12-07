import Link from 'next/link'
import {auth} from "../utils/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Nav() {

    const [user, loading, error] = useAuthState(auth);

    return (
        <nav className="flex justify-between items-center py-10 lg:mt-0 mt-3">
            <Link href="/">
                <button className="font-medium text-lg text-white">Creative Thoughts</button>
            </Link>
            <ul className="flex items-center gap-10">
                {!user && (
                    <Link className="px-4 py-2 text-sm bg-cyan-500 text-white rounded-md" href={"/auth/Login"}>Join now
                {/* <a className="py-2 " href="auth/Login">ef</a> */}
                </Link>
                 )}
                {user && (
                    <div className="flex items-center gap-6">
                        <Link href={"/Post"}>
                            <button className='font-medium text-white bg-cyan-500 py-2 px-4 rounded-lg text-base'>Post</button>
                        </Link>
                        <Link href={"/Dashboard"}>
                            <img className='flex-auto w-11 rounded-full cursor-pointer' src={user.photoURL} />
                            {/* <div className='text-white'>{user.displayName} </div> */}
                        </Link>
                    </div>
                )}
            </ul>
        </nav>
    );
}


