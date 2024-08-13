import BarberShopitem from "../_components/barbershop-item"
import Header from "../_components/header"
import NoResults from "../_components/noresults"
import Search from "../_components/search"
import { db } from "../_lib/prisma"

interface BarbershopsPageProps {
  searchParams: {
    search?: string
  }
}

const BarbershopsPage = async ({ searchParams }: BarbershopsPageProps) => {
  const barbershops = await db.barbershop.findMany({
    where: {
      name: {
        contains: searchParams?.search,
        mode: "insensitive",
      },
    },
  })

  return (
    <div>
      <Header />
      <div className="my-6 px-5">
        <Search />
      </div>
      <div className="px-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">
          Resultados para &quot;{searchParams?.search}&quot;
        </h2>
        {barbershops.length > 0 ? (
          <div className="mb-3 grid grid-cols-2 gap-4">
            {barbershops.map((barbershop) => (
              <BarberShopitem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        ) : (
          <NoResults search={searchParams?.search || ""} />
        )}
      </div>
    </div>
  )
}

export default BarbershopsPage
