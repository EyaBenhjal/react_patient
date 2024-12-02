import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { menusexpert } from "./../data"; // Use menusexpert
import { cn } from "@/lib/utils";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";

export default function NavMenu() {
  const [offset, setOffset] = React.useState(null);
  const [list, setList] = React.useState(null);
  const [value, setValue] = React.useState("");

  const onNodeUpdate = (trigger, itemValue) => {
    if (trigger && list && value === itemValue) {
      const triggerOffsetLeft = trigger.offsetLeft + trigger.offsetWidth / 2;
      setOffset(Math.round(triggerOffsetLeft));
    } else if (value === "") {
      setOffset(null);
    }
    return trigger;
  };

  return (
    <div>
      <NavigationMenu.Root
        onValueChange={setValue}
        className="relative justify-start group z-[9999]"
      >
        {/* Conteneur flex pour aligner le bouton de recherche avec le menu */}
        <div className="flex items-center gap-4 mb-4">
          {/* Bouton de recherche */}
          <button
            className="inline-flex gap-2 items-center text-white text-sm border p-2 rounded"
            onClick={() => setValue("")} // Cette fonction pourrait être remplacée par une fonctionnalité de recherche
          >
            <Search className="h-4 w-4" />
            <span className="md:block hidden">Search...</span>
          </button>

          <NavigationMenu.List
            ref={setList}
            className="group flex list-none gap-2"
          >
            {/* Mapping à travers menusexpert */}
            {menusexpert.map((item, index) =>
              item.child ? (
                <NavigationMenu.Item key={`item-${index}`} value={item.title}>
                  <NavigationMenu.Trigger
                    ref={(node) => onNodeUpdate(node, item.title)}
                    asChild
                  >
                    <div className="flex items-center py-4 cursor-pointer group text-white data-[state=open]:text-primary">
                      <span className="text-base font-medium">
                        {item.title}
                      </span>
                      <ChevronDown
                        className="relative top-[1px] ml-1 h-4 w-4 transition duration-90 group-data-[state=open]:rotate-180"
                        aria-hidden="true"
                      />
                    </div>
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content
                    className={cn(
                      "w-full rounded-md border bg-popover text-popover-foreground shadow-lg"
                    )}
                  >
                    {item.child && (
                      <div className="grid grid-cols-2 gap-4 min-w-[300px] p-4">
                        {item.child.map((childItem, idx) => (
                          <ListItem
                            className="text-base font-medium text-black" // Couleur pour les sous-catégories
                            key={`child-${idx}`}
                            title={childItem.title}
                            href={childItem.href}
                            target="_blank"
                          />
                        ))}
                      </div>
                    )}
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
              ) : (
                <NavigationMenu.Item key={`item-${index}`}>
                  <NavigationMenu.Link href={item.href}>
                    <div className="flex items-center px-2 py-4 cursor-pointer group text-white">
                      <span className="text-base font-medium hover:text-primary">
                        {item.title}
                      </span>
                    </div>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              )
            )}
          </NavigationMenu.List>
        </div>

        <div className="absolute top-full">
          <NavigationMenu.Viewport
            style={{
              display: !offset ? "none" : undefined,
              transform: `translateX(${offset}px)`,
              top: "100%",
              transition: "all 0.5s ease",
            }}
          />
        </div>
      </NavigationMenu.Root>
    </div>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, ...props }, forwardedRef) => (
    <NavigationMenu.Link asChild>
      <Link
        className={cn("select-none", className)}
        {...props}
      >
        {title}
      </Link>
    </NavigationMenu.Link>
  )
);
