import { Outlet } from "react-router-dom";
import './template.css';

const Template = () => {
    return (
        <>
            <div className="template-container">
                <Outlet />
            </div>
        </>
    )
};

export default Template;