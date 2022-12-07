// import { Children } from "react/cjs/react.production.min";

export default function Message({children , avatar,username, description}){
    return (
        <div className="text-white p-8  border-b-2 rounded-lg mt-4">
            <div className="flex items-center gap-2 ">
                <img className="w-12 rounded-full " src={avatar}></img>
                <h2 className="">{username}</h2>
            </div>
            <div className="py-4 font-medium">
                <p>{description}</p>
            </div>
            {children}
       </div>
   )
}