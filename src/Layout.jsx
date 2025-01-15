import { Link, Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <Link to="home">Home</Link> |
            <Link to="about">About</Link> |
            <Link to="contact">Form</Link>|
            <Link to="about">About</Link>
            <hr />
            <Outlet />
        </>
    );
};
export default Layout;
