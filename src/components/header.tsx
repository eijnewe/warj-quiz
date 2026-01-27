import { Link } from "@tanstack/react-router";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'



export function Header() {
  return (
    <header className="bg-background text-foreground p-4 flex justify-between items-center shadow text-center gap-2">
      <Link to={"/"}>
        <h1 className="text-xl font-bold ">WARJ</h1>
      </Link>

      <NavigationMenu className="hidden sm:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/quiz">Quiz</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/memory">Memory</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
           <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/dnd">Matcha Varg</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/history">Resultat</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet>
  <SheetTrigger asChild className="sm:hidden ml-auto">
    <Button variant={"ghost"}>
    Meny<Menu data-icon="inline-end"/>
    </Button>
    </SheetTrigger>
  <SheetContent className="sm:hidden">
    <SheetHeader>
      <SheetTitle>Meny</SheetTitle>
    </SheetHeader>
   <menu className="flex flex-col gap-2">  
    <li>
  <SheetClose asChild>
    <Button variant="link" asChild>
      <Link to="/quiz">Quiz</Link>
    </Button>
  </SheetClose>
</li>

<li>
  <SheetClose asChild>
    <Button variant="link" asChild>
      <Link to="/memory">Memory</Link>
    </Button>
  </SheetClose>
</li>

<li>
  <SheetClose asChild>
    <Button variant="link" asChild>
      <Link to="/dnd">Matcha Varg</Link>
    </Button>
  </SheetClose>
</li>

<li>
  <SheetClose asChild>
    <Button variant="link" asChild>
      <Link to="/history">Resultat</Link>
    </Button>
  </SheetClose>
</li>

   </menu>
  </SheetContent>
</Sheet>
      <ModeToggle/>
    </header>
  );
}
