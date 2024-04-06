import Head from 'next/head';
import Link from 'next/link';
import Movie from "@/app/components/Movie";

export default function Home() {
    return (
        <div>
            <Head>
                <title>IMR - Home</title>
                <meta name="description" content="Welcome to Internet Movies Rental Company" />
            </Head>
            <section className="bg-gray-800 text-white text-center py-20">
                <h1 className="text-5xl font-bold">Welcome to IMR</h1>
                <p className="text-xl mt-4">Your ultimate destination for movie rentals</p>
                <Link href="/movies" className="mt-8 inline-block bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition duration-200">
                    Browse Movie
                </Link>
            </section>
            <section className="py-20 px-4 text-center">
                <h2 className="text-4xl font-bold">About Us</h2>
                <p className="mt-4 text-lg">
                    At IMR, we offer an extensive collection of movies for rent. Explore classics, new releases, and everything in between.
                </p>
            </section>
            <section className="py-20 px-4">
                <h2 className="text-4xl font-bold text-center">Featured Movies</h2>
                <div className="flex flex-wrap justify-center gap-8 mt-8">
                    <Movie/>
                </div>
            </section>
        </div>
    );
}
