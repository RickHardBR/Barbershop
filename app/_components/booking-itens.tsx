import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"

const BookingItem = () => {
  return (
    <>
      <div className="mb-3 mt-6">
        <h2 className="text=xs font-bold uppercase text-gray-400">
          AGENDAMENTOS
        </h2>
      </div>

      <Card>
        <CardContent className="flex justify-between p-0">
          {/* esqueda */}
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit">Confirmado</Badge>
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
    </>
  )
}

export default BookingItem
