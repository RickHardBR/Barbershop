import Image from "next/image"
import { Button } from "./ui/button"
import { CalendarDays, HomeIcon, LogOut, MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

const SidebarButton = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>

        {/* CABEÇALHO */}
        <div className="flex items-center gap-3 border-b border-solid py-5">
          <Avatar>
            <AvatarImage
              className="h-12 w-12 rounded-3xl border-2 border-solid border-purple-400"
              src="https://s3-alpha-sig.figma.com/img/0253/a980/873ac68aebe436f0d55d07b08c2901da?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OQIQN6LbpPBvz3xRBPgwRFpK0jx2H3h-FddZBT4AgnE3hxbayoXmA8WPLnGqP1GjaCEVmBFFnhh7UtMI7p326snSVhc1291UzfJax1RgRjxabwKwnhu4fAeOTnnWJbrFslhrfTsDhQlsQ-WYxeBPzjBhbZbbyM~GfE~uvwSF-0jP0GZLZgijm1MOlPAmC1NQs~D05~XuqFpDNkqW7PmS8oJrI3sRihDYlJhmvEvueov2MjHcmcdIIzxyrmtkqLaMJYxckKZIJIFiH0TsF0UU0fpr~YlxmX-RY175DrchCN6ko8d3C1fK7pZislA7RPq0KGuAAUY7P2OO5USmkDjgYA__ "
            />
          </Avatar>

          <div className="ml-2">
            <h2 className="mb-1 font-bold">Ricardo Ribeiro</h2>
            <p className="text-xs">rickhard@bol.com.br</p>
          </div>
        </div>

        {/* INICIO */}
        <div className="flex flex-col gap-2 border-b border-solid py-5">
          <SheetClose asChild>
            <Button className="justify-start gap-2" variant="ghost" asChild>
              <Link href="/">
                <HomeIcon size={18} />
                Inicio
              </Link>
            </Button>
          </SheetClose>
          <Button className="justify-start gap-2" variant="ghost">
            <CalendarDays size={18} />
            Agendamentos
          </Button>
        </div>

        {/* SERVIÇOS */}
        <div className="flex flex-col gap-2 border-b border-solid py-5">
          {quickSearchOptions.map((option) => (
            <Button
              className="justify-start gap-2"
              key={option.title}
              variant="ghost"
            >
              <Image
                src={option.imageUrl}
                width={18}
                height={18}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
        </div>

        {/* SAIR DA CONTA */}
        <div className="flex gap-4 border-b border-solid py-5">
          <Button className="justify-start gap-2" variant="ghost">
            <LogOut size={18} />
            <p>Sair da conta</p>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SidebarButton
