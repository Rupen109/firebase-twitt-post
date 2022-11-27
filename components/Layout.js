import Nav from "./Nav";
import SideNavbar from "./SideNavbar";
import Elon from "./Elon";

export default function Layout({ children }) {
    return (
        <div className="mx-6 md:max-w-2xl md:mx-auto">
            <SideNavbar />
            <Nav />
            <Elon />
            <main>{ children }</main>
        </div>
    )
}