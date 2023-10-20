import Link from "next/link";

export default function Home() {
    return (
        <main className="w-full grid place-items-center">
            <h1>Home</h1>
            <p className="max-w-lg text-justify">
                this an unguarded page, you can visit the
                <Link className="inline-block mx-1 text-blue-600 underline font-bold" href='login'>login page</Link>
                to login and see the protected routes, or while logged in to see the middleware actions.
                You can also visit the
                <Link className="inline-block mx-1 text-blue-600 underline font-bold" href='dashboard/payments'>payments datatable</Link>
                while unauthenticated to see the middleware guards in action
            </p>
        </main>
    )
}