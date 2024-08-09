import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarbershopPageProps {
  params: {
    id: string
  }
}
const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  // Chamar meu banco de dados
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  })

  if (!barbershop) {
    return notFound
  }
  return (
    <div>
      {/* IMAGEM */}
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          className="object-cover"
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4"
          asChild
        >
          <MenuIcon />
        </Button>
      </div>
      {/* TEXTO */}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>
        <div className="mb-2 mt-3 flex items-center gap-1">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p className="text-sm">5,0 (889) avaliações</p>
        </div>
      </div>
      {/* DESCRIÇÃO */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="text-sm font-bold text-gray-400">SOBRE NÓS</h2>
        <p className="text-justify indent-8 leading-[20px]">
          {barbershop?.description}
        </p>
      </div>
    </div>
  )
}

export default BarbershopPage
