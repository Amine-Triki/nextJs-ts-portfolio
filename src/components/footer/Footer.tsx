import Link from "next/link"

let year = new Date().getFullYear() ;
function Footer() {
  return (
    <footer className="bg-blue-500 p-2  shadow  dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-100 sm:text-center dark:text-gray-400">© {year} Amine Triki || All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-100 dark:text-gray-400 sm:mt-0">
        <li>
            <Link href="/" className="hover:underline me-4 md:me-6">Home</Link>
        </li>
        <li>
            <Link href="/blog" className="hover:underline me-4 md:me-6">Blog</Link>
        </li>
        <li>
            <Link href="/contact" className="hover:underline">Contact</Link>
        </li>
    </ul>
    </div>
</footer>
  )
}

export default Footer