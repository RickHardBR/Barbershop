import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { StarIcon } from "lucide-react"
import Link from "next/link"

interface BarbershopItemProps {
  barbershop: Barbershop
}

const BarberShopitem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="h-[291px] min-w-[167px] rounded-2xl">
      <CardContent className="p-0 px-1 pt-1">
        {/* IMAGEM */}
        <div className="relative h-[159px] w-full">
          <Image
            alt={`Imagem da Barbearia: ${barbershop.name}`}
            fill
            className="rounded-2xl object-cover"
            src={barbershop.imageUrl}
          />
          <Badge
            className="absolute left-2 top-2 flex h-[28px] min-w-[54px] items-center space-x-2 bg-darkPurple bg-opacity-70"
            variant="secondary"
          >
            <StarIcon className="h-4 w-4 fill-primary text-primary" />
            <p className="text-xs font-semibold leading-none">5,0</p>
          </Badge>
        </div>
        {/* TEXTO */}
        <div className="px-1 py-3">
          <h3 className="truncate text-sm">{barbershop.name}</h3>
          <p className="mt-2 truncate text-[12px] text-gray-400">
            {barbershop.address}
          </p>
          <Button
            variant="secondary"
            className="mt-4 w-full rounded-[10px] text-sm"
            asChild
          >
            <Link href={`/barbershops/${barbershop.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarberShopitem
