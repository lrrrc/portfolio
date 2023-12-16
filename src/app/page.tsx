import { Github, Linkedin } from "lucide-react";
import Header from "./components/header";
import Link from "next/link";
import Footer from "./components/footer";


export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex flex-col font-space text-zinc-50 justify-center mt-[8%] mr-[40%] ml-[20%] gap-3">
        <h1 className="text-4xl font-bold">Hey 😁</h1>
        <p className="text-2xl font-semibold">
          My name is Leonardo Cardoso
        </p>
        <p className="text-lg font-normal">
          I am a full stack developer. I currently study and work  as a intern at <a href='https://www.fiap.com.br/' target="_blank" className="border-b-2 text-left cursor-pointer">FIAP</a>.
        </p>
        <div className="flex flex-row gap-2">
          <Link
          href='https://github.com/leozvx'
          target="_blank"
          >
          <Github
            size={24}
            className="cursor-pointer" />
          </Link>
          <Link
          href='https://www.linkedin.com/in/leonardo-cardoso-133b78232/'
          target="_blank"
          >
          <Linkedin
            size={24}
            className="cursor-pointer" />
          </Link>
          
        </div>
      </div>
      <Footer/>
    </main>
  )
}
