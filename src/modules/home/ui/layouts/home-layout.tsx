import { SidebarProvider } from "@/components/ui/sidebar";

import { HomeNavbar } from "../components/home-navbar";
import { HomeSidebar } from "../components/home-sidebar";

interface HomeLayoutProps{
    children : React.ReactNode;
}

export const HomeLayout = ({ children }:
HomeLayoutProps) => {
    return (
        <SidebarProvider>
            <div className="w-full">
            <HomeNavbar />

            {/* home navbar의 높이만큼 전체 컨텐츠를 내리는것 pt-[4rem] */}
            <div className="flex min-h-screen pt-[4rem]">
                <HomeSidebar />
                <main className="flex-1 overflow-y-auto">
                {children}
                </main>
            </div>
        </div> 
        </SidebarProvider>
    );
} 
