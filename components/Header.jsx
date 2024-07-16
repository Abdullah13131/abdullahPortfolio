import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl: py-12 text-white">
            <div className="container max-auto flex justify-between items-centre">
                { /* LOGO */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">ABDULLAH
                        <span className="text-accent">!</span></h1></Link>

                { /* DESKTOP NAV */}
                <div className="hidden xl:flex items-centre gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>
                            Hire Me
                        </Button></Link>
                </div>

                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}
export default Header;