import React from "react";
import { ItemsSidebar } from "../@core/interfaces/Sidebar";
interface Props {
    /** Nome de usuário para exibição no sidebar. */
    username: string;
    /** Tipo de perfil do usuário para exibição no sidebar. */
    profile: string;
    /** Itens de navegação a serem exibidos no sidebar. */
    itemsSidebar: ItemsSidebar[];
}
export default function SideBar(props: Props): React.JSX.Element;
export {};
