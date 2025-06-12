import { SidebarProvider } from "@/components/ui/sidebar";

import { StudioNavbar } from "../components/studio-navbar";
import { StudioSidebar } from "../components/studio-sidebar";

interface StudioLayoutProps{
    children : React.ReactNode;
}

export const StudioLayout = ({ children }:
StudioLayoutProps) => {
    return (
        <SidebarProvider>
            <div className="w-full">
            <StudioNavbar />

            {/* home navbar의 높이만큼 전체 컨텐츠를 내리는것 pt-[4rem] */}
            <div className="flex min-h-screen pt-[4rem]">
                <StudioSidebar />
                <main className="flex-1 overflow-y-auto">
                {children}
                </main>
            </div>
        </div> 
        </SidebarProvider>
    );
} 
