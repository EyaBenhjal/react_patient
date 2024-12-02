import React, { useState } from "react";
import { useSidebar, useThemeStore } from "@/store";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { SiteLogo } from "@/components/svg";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-query";

const MenuBar = ({ collapsed, setCollapsed }) => {
  return (
    <button
      className="relative group disabled:cursor-not-allowed opacity-50"
      onClick={() => setCollapsed(!collapsed)}
    >
      <div>
        <div
          className={cn(
            "flex flex-col justify-between w-[20px] h-[16px] transform transition-all duration-300 origin-center overflow-hidden",
            {
              "-translate-x-1.5 rotate-180": collapsed,
            }
          )}
        >
          <div
            className={cn(
              "bg-card-foreground h-[2px] transform transition-all duration-300 origin-left delay-150",
              {
                "rotate-[42deg] w-[11px]": collapsed,
                "w-7": !collapsed,
              }
            )}
          ></div>
          <div
            className={cn(
              "bg-card-foreground h-[2px] w-7 rounded transform transition-all duration-300",
              {
                "translate-x-10": collapsed,
              }
            )}
          ></div>
          <div
            className={cn(
              "bg-card-foreground h-[2px] transform transition-all duration-300 origin-left delay-150",
              {
                "-rotate-[43deg] w-[11px]": collapsed,
                "w-7": !collapsed,
              }
            )}
          ></div>
        </div>
      </div>
    </button>
  );
};

const VerticalHeader = ({ handleOpenSearch }) => {
  const { collapsed, setCollapsed, subMenu, sidebarType } = useSidebar();
  const { layout } = useThemeStore();
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const isMobile = useMediaQuery("(min-width: 768px)");
  const [categoriesVisible, setCategoriesVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Categories");

  const toggleCategories = () => {
    setCategoriesVisible(!categoriesVisible);
  };

  const selectCategory = (category, href) => {
    setSelectedCategory(category);
    setCategoriesVisible(false);
  };

  const MainLogo = (
    <Link href="/dashboard" className="text-primary">
      <SiteLogo className="h-7 w-7" />
    </Link>
  );

  const SearchButton = (
    <div>
      <button
        className="inline-flex gap-2 items-center text-default-600 text-sm"
        onClick={handleOpenSearch}
      >
        <span>
          <Search className="h-4 w-4" />
        </span>
        <span className="md:block hidden"> Recherche...</span>
      </button>
    </div>
  );
  const CategoriesMenu = (
    <div className="relative">
      <button onClick={toggleCategories} className="text-default-600 text-sm">
        {selectedCategory}
      </button>
      {categoriesVisible && (
        <div className="absolute bg-white shadow-md rounded mt-2 z-10 flex">
          <ul className="list-none p-0 m-0 mr-2">
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <Link href="/ecommerce">
                <a onClick={() => selectCategory("Comptabilité", "/ecommerce")}>Comptabilité</a>
              </Link>
            </li>
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <Link href="/dashboard">
                <a onClick={() => selectCategory("Addiction", "/dashboard")}>Addiction</a>
              </Link>
            </li>
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <Link href="/index-3">
                <a onClick={() => selectCategory("Conseil", "/Ecommerce")}>Conseil</a>
              </Link>
            </li>
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <Link href="/index-3">
                <a onClick={() => selectCategory("IA", "/index-3")}>IA</a>
              </Link>
            </li>
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <Link href="/index-3">
                <a onClick={() => selectCategory("Formation Animalière", "/index-3")}>Formation Animalière</a>
              </Link>
            </li>
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <Link href="/index-3">
                <a onClick={() => selectCategory("Anti-Âge", "/index-3")}>Anti-Âge</a>
              </Link>
            </li>
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <Link href="/index-3">
                <a onClick={() => selectCategory("Technologie Aquacole", "/index-3")}>Technologie Aquacole</a>
              </Link>
            </li>
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <Link href="/index-3">
                <a onClick={() => selectCategory("Architecture", "/index-3")}>Architecture</a>
              </Link>
            </li>
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <Link href="/index-3">
                <a onClick={() => selectCategory("Art", "/index-3")}>Art</a>
              </Link>
            </li>
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <Link href="/index-3">
                <a onClick={() => selectCategory("Vie Assistée", "/index-3")}>Vie Assistée</a>
              </Link>
            </li>
          </ul>
          <ul className="list-none p-0 m-0">
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <Link href="/index-3">
                <a onClick={() => selectCategory("Apprentissage Automatique", "/index-3")}>Apprentissage Automatique</a>
              </Link>
            </li>
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <Link href="/index-3">
                <a onClick={() => selectCategory("Fabrication", "/index-3")}>Fabrication</a>
              </Link>
            </li>
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <Link href="/index-3">
                <a onClick={() => selectCategory("Artisanat Maritime", "/index-3")}>Artisanat Maritime</a>
              </Link>
            </li>
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <Link href="/index-3">
                <a onClick={() => selectCategory("Marketing", "/index-3")}>Marketing</a>
              </Link>
            </li>
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <Link href="/index-3">
                <a onClick={() => selectCategory("Mécanique", "/index-3")}>Mécanique</a>
              </Link>
            </li>
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <Link href="/index-3">
                <a onClick={() => selectCategory("Ingénierie Mécanique", "/index-3")}>Ingénierie Mécanique</a>
              </Link>
            </li>
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <Link href="/index-3">
                <a onClick={() => selectCategory("Médias", "/index-3")}>Médias</a>
              </Link>
            </li>
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <Link href="/index-3">
                <a onClick={() => selectCategory("Méditation", "/index-3")}>Méditation</a>
              </Link>
            </li>
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <Link href="/index-3">
                <a onClick={() => selectCategory("Santé Mentale", "/index-3")}>Santé Mentale</a>
              </Link>
            </li>
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <Link href="/index-3">
                <a onClick={() => selectCategory("Militaire", "/index-3")}>Militaire</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
  
  let LogoContent = null;
  let menuBarContent = null;
  let searchButtonContent = null;

  if (layout === "semibox" && !isDesktop) {
    LogoContent = MainLogo;
  }
  if (
    layout === "vertical" &&
    !isDesktop &&
    isMobile &&
    sidebarType === "module"
  ) {
    LogoContent = MainLogo;
  }
  if (layout === "vertical" && !isDesktop && sidebarType !== "module") {
    LogoContent = MainLogo;
  }

  if (isDesktop && sidebarType !== "module") {
    menuBarContent = (
      <MenuBar collapsed={collapsed} setCollapsed={setCollapsed} />
    );
  }
  if (sidebarType === "module") {
    menuBarContent = (
      <MenuBar collapsed={collapsed} setCollapsed={setCollapsed} />
    );
  }
  if (sidebarType === "classic") {
    menuBarContent = null;
  }
  if (subMenu && isDesktop) {
    menuBarContent = null;
  }
  if (sidebarType === "module" && isMobile) {
    searchButtonContent = SearchButton;
  }
  if (sidebarType === "classic" || sidebarType === "popover") {
    searchButtonContent = SearchButton;
  }

  return (
    <div className="flex items-center md:gap-6 gap-3">
      {LogoContent}
      {menuBarContent}
      {searchButtonContent}
      {CategoriesMenu}
    </div>
  );
};

export default VerticalHeader;
