'use client';

import { Container } from "postcss";
import Containers from "../Containers";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
    return(
       <div className = 'fixed w-full bg-white z-10 shadox-sm'>
           <div className = "py-4 border-b-[1px]">
           <Containers>
            <div
            className = "flex flex-row items-center justify-between gap-3 mp:gap0">
            <Logo />
            <Search />
            <UserMenu />
            </div>
           </Containers>
           </div>
       </div>
    );
}

export default Navbar;