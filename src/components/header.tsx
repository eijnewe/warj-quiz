import { Link } from "@tanstack/react-router";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="bg-background text-foreground p-2 flex justify-between items-center shadow text-center">
      <Link to={"/"}>
        <h1 className="text-xl font-bold ">WARJ</h1>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to={"/"}>Hem</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
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
              <Link to="/quiz/history">Resultat</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle></ModeToggle>
    </header>
  );
}
