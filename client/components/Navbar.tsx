import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="fixed top-0 z-10 w-full flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6 hover:cursor-pointer">
                {/* <img src="https://www.vhv.rs/dpng/d/50-503557_cloud-computing-logo-png-transparent-png.png" alt="Company Icon" className="h-8 w-8 mr-2 rounded-full" /> */}
                <span className="font-semibold text-xl tracking-tight">Homocloud</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3a3 3 0 013-3h14a3 3 0 013 3v2a3 3 0 01-3 3H3a3 3 0 01-3-3V3zm0 8a3 3 0 013-3h14a3 3 0 013 3v2a3 3 0 01-3 3H3a3 3 0 01-3-3v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end">
                <Link href="/Form">
                    <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                        Form
                    </div>
                </Link>
                <Link href="/Reports">
                    <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                        Reports
                    </div>
                </Link>
                <Link href="/Signin">
                    <div className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">Sign In</div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
