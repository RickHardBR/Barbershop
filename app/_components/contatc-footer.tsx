import { Smartphone } from "lucide-react"
import { Button } from "./ui/button"

const ContactFooter = () => {
  return (
    <div className="border-t border-solid p-5">
      <h3 className="mb-3">Contato</h3>
      <div className="space-y-4">
        <div className="ml-4 mr-4 flex items-center justify-between">
          <Smartphone />
          <h3>(11) 99999-9999</h3>
          <Button
            variant="secondary"
            className="h-[36px] w-[90px] rounded-[10px]"
          >
            Copiar
          </Button>
        </div>
        <div className="ml-4 mr-4 flex items-center justify-between">
          <Smartphone />
          <h3>(11) 99999-9999</h3>
          <Button
            variant="secondary"
            className="h-[36px] w-[90px] rounded-[10px]"
          >
            Copiar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ContactFooter
