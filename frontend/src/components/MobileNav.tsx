import { Separator } from "@radix-ui/react-separator";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import {Menu } from "lucide-react";
import { Button } from "./ui/button";

function MobileNav() {
  return (
  <Sheet>
    <SheetTrigger>
        <Menu/>
    </SheetTrigger>
    <SheetContent className="space-y-3">

            <SheetTitle>
               <span>Welcome to ordering.shop</span>
            </SheetTitle>
            <Separator/>
            <SheetDescription className="flex">
                    <Button className="flex-1 font-bold bg-orange-500">Login in</Button>
                 
             
            </SheetDescription>
    </SheetContent>
  </Sheet>
  )
}
export default MobileNav