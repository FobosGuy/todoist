import { cn } from "@/lib/utils";
import React from "react";
import { IAppSidebarProps } from "../typescript/props";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from "@/components/ui/sidebar";

export const AppSidebar = ({ className, ...props }: IAppSidebarProps) => {
  return (
    <Sidebar>
      <SidebarHeader><div>aboba</div></SidebarHeader>
      <SidebarContent>
        aoijfoijsoiahoisfho
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};
