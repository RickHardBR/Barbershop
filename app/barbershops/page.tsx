import BarbershopItem from "../_components/barbershop-item"
import Header from "../_components/header"
import Search from "../_components/search"
import NoResults from "../_components/noresults"
import { db } from "../_lib/prisma"

interface BarbershopsPageProps {
  searchParams: {
    search?: string
    title?: string
    service?: string
  }
}

const BarbershopsPage = async ({ searchParams }: BarbershopsPageProps) => {
  const barbershops = await db.barbershop.findMany({
    where: {
      OR: [
        searchParams?.search
          ? {
              name: {
                contains: searchParams?.search,
                mode: "insensitive",
              },
            }
          : {},
        searchParams?.search
          ? {
              services: {
                some: {
                  name: {
                    contains: searchParams?.search,
                    mode: "insensitive",
                  },
                },
              },
            }
          : {},
        searchParams?.title
          ? {
              name: {
                contains: searchParams?.title,
                mode: "insensitive",
              },
            }
          : {},
        searchParams?.service
          ? {
              services: {
                some: {
                  name: {
                    contains: searchParams?.service,
                    mode: "insensitive",
                  },
                },
              },
            }
          : {},
      ],
    },
  })

  const searchQuery =
    searchParams?.search || searchParams?.title || searchParams?.service

  return (
    <div>
      <Header />
      <div className="my-6 px-5">
        <Search />
      </div>
      <div className="px-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">
          Resultados para &quot;{searchQuery}&quot;
        </h2>
        {barbershops.length > 0 ? (
          <div className="mb-3 grid grid-cols-2 gap-4">
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        ) : (
          <NoResults search={searchQuery || ""} />
        )}
      </div>
    </div>
  )
}

export default BarbershopsPage
