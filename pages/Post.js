import { auth,db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";


export default function Post() {
    //Form state
    const [post, setPost] = useState({ description: "" });
    const [user, loading] = useAuthState(auth);
    const route = useRouter();


    //submit post
    const submitPost = async (e) => {
        e.preventDefault();
        
        //Run CHecks for description
        if (!post.description) {
            toast.error("Description field is empty", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000, 
            });
            return;
        }
        if (post.description.length > 300) {
            toast.error("Description is too long!", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
            });
            return;
        }


        //make a new post
        const collectionRef = collection(db, "posts");
        await addDoc(collectionRef, {
            ...post,
            timestamp: serverTimestamp(),
            user: user.uid,
            avatar: user.photoURL,
            username: user.displayName,
        });
        setPost({ description: "" });
        return route.push('/');
    };

    return (
        <div className="text-white my-20 p-12 bg-[url('../public/MAN_TELECONFERENCE_WITH_TEAM-removebg.png')] bg-contain bg-right  bg-no-repeat  shadow-xl border-red-100 border-t-2 border-b-2 max-w-3xl mx-auto rounded-lg">
            <form onSubmit={submitPost}>
                <h1 className="text-2xl text-[#1D9BF0] font-bold">Create a New Post</h1>
                <div className="py-2">
                    <h3 className="text-lg font-medium py-2">Description:</h3>
                    <textarea
                        value={post.description}   
                        onChange={(e) => setPost({ ...post, description: e.target.value })}    
                        className="bg-gray-300/20 text-white font-semibold h-44 lg:-ml-0 -ml-6 lg:w-full w-72 rounded-lg  p-2 text-xl backdrop-blur-sm hover:backdrop-blur-2xl" 
                    ></textarea> 
                    <p className={`text-cyan-600 font-medium text-sm ${post.description.length > 300 ? "text-red-600" : "" } `}>{ post.description.length }/300</p>
                </div>
                <button type="submit" className=" bg-cyan-600 font-medium p-2 w-28 my-2 rounded-lg mx-auto align-center justify-center">Tweet</button>
            </form>
        </div>
    )
}