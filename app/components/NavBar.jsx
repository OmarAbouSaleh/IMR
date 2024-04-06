import Link from 'next/link';
const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">
                    <Link href="/" className="hover:text-gray-300">IMR
                    </Link>
                </div>
                <ul className="flex space-x-4">
                    <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
                    <li><Link href="/movies" className="hover:text-gray-300">Movies</Link></li>
                    <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
