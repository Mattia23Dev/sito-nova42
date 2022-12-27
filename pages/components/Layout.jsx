

import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { addPath } from "./../../redux/historySlice";
import { useEffect } from 'react';

const Layout = ({bg, children, altStyle, hideNavBar, path, isLight}) =>{


    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(addPath({path}));
    },[]);

    return(
        <div className={`d-flex justify-center ${bg}`}>
            <div className="w-100">
                {
                    !hideNavBar && (<Navbar isLight={isLight} altStyle={altStyle}/>)
                }
                {children}
            </div>
        </div>
    )


}

export default Layout