import { ReactNode } from "react";
import AppSidebar from "@/components/AppSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";
import ThemeToggle from "@/components/ThemeToggle";
import { useAppContext } from "@/contexts/AppContext";
import { Bell, Search } from "lucide-react";

export default function AppLayout({ children }: { children: ReactNode }) {
  const { notifications, sidebarCollapsed } = useAppContext();

  return (
    <div className="min-h-screen flex bg-background">
      <div className="hidden md:block">
        <AppSidebar />
      </div>

      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'md:ml-[72px]' : 'md:ml-[260px]'}`}>
        <header className="sticky top-0 z-30 h-14 sm:h-16 flex items-center justify-between px-4 sm:px-8 bg-card border-b border-border">
          <div className="flex items-center gap-3 flex-1 max-w-md">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-muted border border-border flex-1">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none flex-1 font-body"
              />
              <kbd className="hidden sm:inline text-[10px] text-muted-foreground bg-background px-1.5 py-0.5 rounded font-mono border border-border">⌘K</kbd>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            <button className="relative p-2 rounded-xl hover:bg-muted hover:scale-105 active:scale-95 transition-all">
              <Bell className="w-5 h-5 text-muted-foreground" />
              {notifications > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-destructive" />
              )}
            </button>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground text-xs sm:text-sm font-heading font-bold hover:scale-105 hover:shadow-md cursor-pointer transition-all">
              RS
            </div>
          </div>
        </header>
        <main className="p-4 sm:p-8 mobile-content-padding">{children}</main>
      </div>

      <MobileBottomNav />
    </div>
  );
}
