import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import SidebarButton from "./sidebar-button"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src="/logo.png" alt="Logo BarberShop" width={120} height={18} />
        <SidebarButton />
      </CardContent>
    </Card>
  )
}

export default Header
