'use client'

import {FormEvent} from "react";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function Form() {

    const router = useRouter()
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)

        const response = await signIn('credentials', {
            username: formData.get('username'),
            password: formData.get('password'),
            redirect: false
        })

        if (!response?.error) {
            router.push('/')
            router.refresh()
        }
    }
    return (
        <main className="h-full w-full grid place-items-center bg-gray-100">
            <form onSubmit={handleSubmit} className="block p-6 w-full max-w-md">
                <div className="flex flex-col">
                    <p className="text-sm">username: `kminchelle` password: `0lelplR` or any data <a className="text-purple-700 font-medium" href="https://dummyjson.com/users" target="_blank">here</a></p>
                    <input name="username" type="text" className="rounded-t-md bg-white border border-purple-300 py-2 px-3 outline-0 focus:ring focus:ring-purple-200" placeholder="Username" />
                    <input name="password" type="password" className="rounded-b-md bg-white border border-purple-300 py-2 px-3 outline-0 focus:ring focus:ring-purple-200" placeholder="Password" />
                </div>

                <button type="submit" className="bg-purple-500 text-purple-100 rounded-md py-2 block w-full mt-6">Submit</button>
            </form>
        </main>
    )
}