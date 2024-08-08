import Image from "next/image"
import Header from "./_components/header"
import { SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import BarberShopitem from "./_components/barbershop-item"
import { db } from "./_lib/prisma"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
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

        <div className="mb-3 mt-6">
          <h2 className="text=xs font-bold uppercase text-gray-400">
            AGENDAMENTOS
          </h2>
        </div>

        <Card>
          <CardContent className="flex justify-between p-0">
            {/* esqueda */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge variant="default">Confirmado</Badge>
              <h3>Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/ellipse4.png" />
                </Avatar>
                <p>vintage barber</p>
              </div>
            </div>
            {/* Direita */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl font-bold">08</p>
              <p className="text-sm">12:05</p>
            </div>
          </CardContent>
        </Card>
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
      </div>
    </div>
  )
}

export default Home
