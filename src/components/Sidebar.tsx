import React, { useState } from "react";
import router from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCircleChevronLeft,
  faCircleChevronRight,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { ItemsSidebar } from "../@core/interfaces/Sidebar";

interface Props {
  /** Nome de usuário para exibição no sidebar. */
  username: string;

  /** Tipo de perfil do usuário para exibição no sidebar. */
  profile: string;

  /** Itens de navegação a serem exibidos no sidebar. */
  itemsSidebar: ItemsSidebar[];
}

export default function SideBar(props: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (link: string) => {
    router.push(link);
  };

  return (
    <article className="h-screen">
      <button
        className={
          "sm:hidden flex items-center justify-center top-5 w-6 h-6 p-1 mt-4 left-1/2 fixed z-50"
        }
        onClick={toggleSidebar}
        title={isSidebarOpen ? "Fechar barra lateral" : "Abrir barra lateral"}
        aria-expanded={isSidebarOpen}
      >
        <FontAwesomeIcon icon={faBars} className="text-primary text-3xl" />
      </button>
      <div
        className={`fixed flex flex-col items-center gap-4 bg-neutral-50 min-w-16 min-h-screen shadow-sm transition-all duration-500 shadow-white p-3 ${isSidebarOpen ? "sm:w-44 w-full" : "sm:w-16 sm:flex hidden"}`}
      >
        <button
          className={
            "sm:flex hidden items-center justify-center w-6 h-6 p-1 mt-4"
          }
          onClick={toggleSidebar}
          aria-expanded={isSidebarOpen}
          title={isSidebarOpen ? "Fechar barra lateral" : "Abrir barra lateral"}
        >
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={isSidebarOpen ? faCircleChevronLeft : faCircleChevronRight}
              className="text-neutral-400 text-2xl"
            />
          </div>
        </button>
        <div className="flex w-full items-center justify-center gap-2 sm:mt-0 mt-20">
          <div
            className={`bg-primary rounded-md w-10 h-10 flex justify-center items-center transition-all duration-500`}
          >
            <FontAwesomeIcon icon={faUser} className="text-white text-xl" />
          </div>
          {isSidebarOpen && (
            <div className="flex flex-col leading-5 text-neutral-800">
              <span className="font-semibold">{props.username}</span>
              <span className="font-light">{props.profile}</span>
            </div>
          )}
        </div>
        {props.itemsSidebar.map((item, index) => (
          <div
            key={index}
            className="flex w-full gap-2 justify-center items-center text-neutral-800 hover:bg-primary hover:text-white transition-all duration-500 p-2 rounded-md cursor-pointer"
            onClick={() => handleNavigation(item.link)} 
          >
            <FontAwesomeIcon icon={faChartLine} className="text-xl" />
            {isSidebarOpen && <span className="text-md">{item.name}</span>}
          </div>
        ))}
      </div>
    </article>
  );
}
