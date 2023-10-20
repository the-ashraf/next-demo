'use client'

import Link from "next/link"
import { MenuIcon, UsersIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {useState} from "react";
import { useRouter } from 'next/navigation'
export default function Sidebar () {
    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter()

    const navigate = (route: string) => {
        router.push(route)
        setIsOpen(false)
    }

    return (
        <nav className="relative">
            <Button  variant="outline" size="icon" onClick={() => setIsOpen(true)}>
                <MenuIcon className="h-4 w-4" />
            </Button>

            {isOpen && <div className="inset-0 fixed bg-black/20 z-10" onClick={() => setIsOpen(false)} />}

            {isOpen && <ul className="w-56 bg-white px-4 py-2 list-inside list-none border-r z-20 h-screen fixed inset-y-0 left-0 space-y-2">
                <li className="flex justify-between mb-6">
                    <span />
                    <Button  variant="outline" size="icon" onClick={() => setIsOpen(false)}>
                        <XIcon className="h-4 w-4" />
                    </Button>
                </li>
                <li>
                    <Button variant="secondary" className='w-full' onClick={() => navigate('/dashboard/users')}>
                        <span className="flex items-center gap-2"><UsersIcon className="mr-2 h-4 w-4" /> Users List</span>
                    </Button>
                </li>
                <li>
                    <Button variant="secondary" className='w-full' onClick={() => navigate('/dashboard/users')}>
                        <span className="flex items-center gap-2"><UsersIcon className="mr-2 h-4 w-4" /> Also Users</span>
                    </Button>
                </li>
            </ul> }
        </nav>
        // <Sheet>
        //     <SheetTrigger>

        //     </SheetTrigger>
        //     <SheetContent side={'left'} className="w-56">
        //         <SheetHeader>
        //             <SheetTitle>Dashboard</SheetTitle>
        //             <SheetDescription>

        //             </SheetDescription>
        //         </SheetHeader>
        //     </SheetContent>
        // </Sheet>
    )
}