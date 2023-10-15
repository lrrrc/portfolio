import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav className="flex justify-center gap-[32rem] p-6 font-varela">
                <Link
                    href='/'
                >
                    <Avatar className="w-16 h-16">
                        <AvatarFallback>L</AvatarFallback>
                        <AvatarImage src="https://github.com/leozvx.png" ></AvatarImage>
                    </Avatar>
                </Link>
                <Link
                    className="h-[1px]"
                    href='/projects'
                >
                    <ul className="text-stone-200 flex gap-4 text-xl">
                        <li className="cursor-pointer relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-zinc-50 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                            Projects
                        </li>
                    </ul>
                </Link>

            </nav>
        </header>
    )
}