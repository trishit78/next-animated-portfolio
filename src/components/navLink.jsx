"use client"

import Link from "next/link" 

import { usePathname } from "next/navigation"
function NavLink({link}) {
  
    const pathName = usePathname();
    console.log(pathName);

    return (
    <div>
        <Link className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`} href={link.url}>
            {link.title}
        </Link>
    </div>
  )
}

export default NavLink
