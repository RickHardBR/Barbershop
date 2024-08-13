import Image from "next/image"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import BarberShopitem from "./_components/barbershop-item"
import { db } from "./_lib/prisma"
import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-itens"
import Search from "./_components/search"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]/route"
import Link from "next/link"

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }
  return new Intl.DateTimeFormat("pt-BR", options).format(date)
}
export default async function Home() {
  // Obtendo a sessão do usuário
  const session = await getServerSession(authOptions)

  // Obtendo dados da barbearia
  const barbershops = await db.barbershop.findMany({})
  const PopularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
  // Obtenha a data atual
  const today = new Date()
  const formattedDate = formatDate(today)
  return (
    <div>
      {/*header*/}
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">
          Olá, {session?.user?.name ?? "Visitante"}
        </h2>
        <p>{formattedDate}</p>
        <div className="mt-6">
          <Search />
        </div>

        {/* BUSCA RAPIDA */}
        <div className="item-center mt-6 flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              variant={"secondary"}
              className="gap-2"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.title}
                />
                <p className="text-xs font-bold uppercase text-gray-400">
                  {option.title}
                </p>
              </Link>
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
