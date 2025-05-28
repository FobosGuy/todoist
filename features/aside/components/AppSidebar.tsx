import { cn } from "@/lib/utils";
import React from "react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from "@/components/ui/sidebar";
import { AppSidebarProps } from "../typescript/props";

export const AppSidebar = ({ className, ...props }: AppSidebarProps) => {
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
