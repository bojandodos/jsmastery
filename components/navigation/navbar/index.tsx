import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex-between background-light900 w-full fixed z-50 p-6 shadow-light-300 sm:px-12">
    <Link href="/" className="flex-center gap-2">
        <Image src="/crome-logo.svg" alt="Logo" width={50} height={50} />
         <p className="h2-bold font-space-grotesk text-dark-100 max-sm:hidden">Dev<span className="text-primary-500">Flow</span></p>
    </Link>
    <p>Global search</p>
    <div className="flex-between gap-5">
        Theme
    </div>
    </nav>
   );
}
