import { auth,db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot, query,where } from "firebase/firestore";
import Message from "../components/Message";
import { BsTrash2Fill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import { async } from "@firebase/util";

export default function Dashboard() {
    
    const route = useRouter(); 
    const [user, loading] = useAuthState(auth);
    const [posts, setPosts] = useState([]);
    //see if user is logged
    const getData = async () => {
        if (loading) return;
        if (!user) return route.push('/auth/Login');
       
        const collectionRef = collection(db, "posts");
        const q = query(collectionRef, where("user", "==", user.uid));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        });
        return unsubscribe;
        
        // useEffect(() => {
        //     getData();
        // }, [user, loading]);
    }; 
    //delete posts
    const deletePost = async (id) => {
        const docRef = doc(db, 'posts', id,)
        await deleteDoc(docRef);
    }
    

    //get data from user
    useEffect(() => {
        getData();
    }, [user, loading]);
    

    return (    
        <div className="">
            <h1 className="text-white">Your Posts</h1>
            <div className="">
                {posts.map((post) => {
                    return (
                        <Message {...post} key={post.id}>
                            <div className="flex gap-6">
                                <button onClick={()=> deletePost(post.id)} className="text-red-600 font-medium flex items-center justify-center gap-2 py-2 text-sm">
                                    <BsTrash2Fill className="text-2xl"/>
                                    Delete
                                </button>
                                <button className="text-teal-600 font-medium flex items-center justify-center gap-2 py-2 text-sm">
                                    <AiFillEdit className="text-2xl" />
                                    Edit
                                </button>
                            </div>
                        </Message>
                    );
                })}
            </div>
            <button className="text-white my-12 bg-cyan-600 p-2 rounded-lg" onClick={() => auth.signOut()}>Sign out</button>
        </div>
    )
}