"use client"

import { useRouter } from "next/navigation"
import { Button } from "../_components/ui/button"

interface NoResultsProps {
  search: string
}

const NoResults = ({ search }: NoResultsProps) => {
  const router = useRouter()

  return (
    <div className="flex flex-col justify-between">
      <div className="mt-10 text-center">
        <p className="mb-4 text-gray-500">
          Não existem barbearias com o nome &quot;{search}&quot;.
        </p>
      </div>
      <div className="text-center">
        <Button onClick={() => router.back()}>Voltar</Button>
      </div>
    </div>
  )
}

export default NoResults
