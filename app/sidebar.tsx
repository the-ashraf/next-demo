'use client'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { Mail } from "lucide-react"
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
export default function Sidebar () {
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="outline" size="icon">
                    <MenuIcon className="h-4 w-4" />
                </Button>
            </SheetTrigger>
            <SheetContent side={'left'} className="w-56">
                <SheetHeader>
                    <SheetTitle>Dashboard</SheetTitle>
                    <SheetDescription>
                        <Button asChild variant="secondary" className='w-full'>
                            <Link href={'/login'}><Mail className="mr-2 h-4 w-4" /> Login with Email</Link>
                        </Button>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}