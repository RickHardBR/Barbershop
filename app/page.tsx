import Image from "next/image"
import Header from "./_components/header"
import { SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import BarberShopitem from "./_components/barbershop-item"
import { db } from "./_lib/prisma"
import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-itens"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  const PopularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
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

        {/* BUSCA RAPIDA */}
        <div className="item-center mt-6 flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button variant={"secondary"} className="gap-2" key={option.title}>
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              <p className="text-xs font-bold uppercase text-gray-400">
                {option.title}
              </p>
            </Button>
          ))}
        </div>

        {/* Banner */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            alt="Banner BarberShop"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* AGENDAMENTOS */}
        <BookingItem />

        {/* Lista de Barbearias */}
        <div className="mb-3 mt-6">
          <h2 className="text=xs font-bold uppercase text-gray-400">
            recomendados
          </h2>
        </div>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((Barbershop) => (
            <BarberShopitem key={Barbershop.id} barbershop={Barbershop} />
          ))}
        </div>

        <div className="mb-3 mt-6">
          <h2 className="text=xs font-bold uppercase text-gray-400">
            Populares
          </h2>
        </div>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {PopularBarbershops.map((Barbershop) => (
            <BarberShopitem key={Barbershop.id} barbershop={Barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
