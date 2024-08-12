"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import {
  CalendarDays,
  HomeIcon,
  LogInIcon,
  LogOut,
  MenuIcon,
} from "lucide-react"
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { signIn, signOut, useSession } from "next-auth/react"

const SidebarButton = () => {
  const { data } = useSession()
  const handleLoginWinthGoogleClick = () => signIn("google")
  const handleLogoutWinthGoogleClick = () => signOut()
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

        <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
          {data?.user ? (
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  className="rounded-full border-2 border-solid border-purple-400"
                  src={data?.user?.image ?? ""}
                />
              </Avatar>

              <div className="ml-2">
                <h2 className="mb-1 font-bold">{data.user?.name}</h2>
                <p className="text-xs">{data.user?.email}</p>
              </div>
            </div>
          ) : (
            <>
              <h2 className="font-bold">Olá, faça seu login!</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size={"icon"}>
                    <LogInIcon />
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-[90%]">
                  <DialogHeader>
                    <DialogTitle>Faça seu login na plataforma</DialogTitle>
                    <DialogDescription>
                      Conecte-se usando sua conta Google.
                    </DialogDescription>
                  </DialogHeader>
                  <Button
                    variant="outline"
                    className="gap-2 font-bold"
                    onClick={handleLoginWinthGoogleClick}
                  >
                    <Image
                      alt="Logo do Google"
                      src="/googleicon.svg"
                      width={18}
                      height={18}
                    />
                    Google
                  </Button>
                </DialogContent>
              </Dialog>
            </>
          )}
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
          <Button
            className="justify-start gap-2"
            variant="ghost"
            onClick={handleLogoutWinthGoogleClick}
          >
            <LogOut size={18} />
            <p>Sair da conta</p>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SidebarButton
