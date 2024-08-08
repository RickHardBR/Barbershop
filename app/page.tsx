import Image from "next/image"
import Header from "./_components/header"
import { SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"

const Home = () => {
  return (
    <div>
      {/*header*/}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Ricardo</h2>
        <p>Segunda-feira, 08 de agosto</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Buscar" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            alt="Banner BarberShop"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
