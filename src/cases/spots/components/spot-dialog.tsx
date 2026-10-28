/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MapPin } from "lucide-react"
import { useSpots } from "../hooks/use-hook";

export function SpotDialog() {
    const { data: spots} = useSpots();

    return (
       <Dialog>
  <DialogTrigger className="flex cursor-pointer flex-col items-center justify-center gap-1 rounded-2xl px-6 py-4 text-brand-foreground transition-colors hover:bg-white/10">
    <MapPin className="size-6" />
    Selecionar Mesa
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Selecione sua mesa</DialogTitle>
      <DialogDescription>
        Escolha a mesa que você está para fazer o pedido.
      </DialogDescription>
    </DialogHeader>

    <div className="min-h-0 overflow-y-auto">
        <div className="grid grid-cols-3 gap-3">

        {Array.isArray(spots) && spots.map( spot => (
            <Button
        key={spot.id}
        variant="outline"
        className="h-auto min-h-20 flex-col p-16"
        >
          <MapPin className="size-6" />
          {spot.name}
        </Button>
        ))}
        </div>
    </div>
  </DialogContent>
</Dialog>
    )
}