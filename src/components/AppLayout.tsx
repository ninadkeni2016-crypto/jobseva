import { ReactNode, useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import AppSidebar from "@/components/AppSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";
import ThemeToggle from "@/components/ThemeToggle";
import { useAppContext } from "@/contexts/AppContext";
import { Bell, Search, LogOut, Settings as SettingsIcon, User, CheckCircle, Zap } from "lucide-react";

export default function AppLayout({ children }: { children: ReactNode }) {
  const { notifications, sidebarCollapsed } = useAppContext();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const notificationRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    // Mock logout logic
    localStorage.removeItem("user_session");
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const mockNotifications = [
    { id: 1, title: "Application Viewed", desc: "Google viewed your Senior Dev application.", time: "2h ago", icon: CheckCircle, color: "text-emerald-500" },
    { id: 2, title: "New Job Match", desc: "A new Lead Designer role matches your profile.", time: "5h ago", icon: Zap, color: "text-amber-500" },
    { id: 3, title: "Shortlisted!", desc: "You've been shortlisted by Microsoft.", time: "1d ago", icon: User, color: "text-primary" },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      <div className="hidden md:block">
        <AppSidebar />
      </div>

      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'md:ml-[72px]' : 'md:ml-[260px]'}`}>
        <header className="sticky top-0 z-30 bg-card border-b border-border">
          {/* Top Bar: Logo (mobile only) + Icons */}
          <div className="h-20 sm:h-24 flex items-center justify-between px-4 sm:px-8">
            <div className="flex items-center gap-3">
              {/* Mobile Logo */}
              <div className="md:hidden flex items-center logo-hover">
                <img src="/JobSeva.png" alt="Logo" className="h-14 sm:h-16 w-auto object-contain" />
              </div>
              {/* Desktop search (moved to below for mobile) */}
              <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-muted border border-border w-80 lg:w-96">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search jobs, companies..."
                  className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none flex-1 font-body"
                />
                <kbd className="text-[10px] text-muted-foreground bg-background px-1.5 py-0.5 rounded font-mono border border-border">⌘K</kbd>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <ThemeToggle />

              {/* Notifications Dropdown */}
              <div className="relative" ref={notificationRef}>
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className={`relative p-2 rounded-xl transition-all ${notificationsOpen ? 'bg-primary/10 text-primary' : 'hover:bg-muted text-muted-foreground'}`}
                >
                  <Bell className="w-5 h-5" />
                  {notifications > 0 && (
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-destructive border-2 border-card" />
                  )}
                </button>

                {notificationsOpen && (
                  <div className="absolute right-0 mt-3 w-80 bg-card border border-border rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="p-3 border-b border-border flex items-center justify-between">
                      <h4 className="font-heading font-bold text-sm">Notifications</h4>
                      <span className="text-[10px] text-primary font-medium cursor-pointer hover:underline">Mark all as read</span>
                    </div>
                    <div className="max-h-[350px] overflow-y-auto py-2">
                      {mockNotifications.map((n) => (
                        <div key={n.id} className="p-3 hover:bg-muted/50 rounded-xl transition-colors cursor-pointer group">
                          <div className="flex gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${n.color}`}>
                              <n.icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold group-hover:text-primary transition-colors">{n.title}</p>
                              <p className="text-[11px] text-muted-foreground line-clamp-2 mt-0.5">{n.desc}</p>
                              <p className="text-[10px] text-muted-foreground/60 mt-1">{n.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-2 border-t border-border text-center">
                      <button className="text-xs text-muted-foreground hover:text-primary font-medium py-1 w-full">View all notifications</button>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Dropdown */}
              <div className="relative" ref={profileRef}>
                <div
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-xs sm:text-sm font-heading font-bold hover:scale-105 hover:shadow-lg cursor-pointer transition-all border-2 border-transparent hover:border-primary/20"
                >
                  RS
                </div>

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-card border border-border rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="p-3 border-b border-border mb-1">
                      <p className="text-xs font-bold font-heading">Rohan Sharma</p>
                      <p className="text-[10px] text-muted-foreground">rohan@example.com</p>
                    </div>
                    <Link
                      to="/app/profile"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-all"
                    >
                      <User className="w-4 h-4" /> My Profile
                    </Link>
                    <Link
                      to="/app/settings"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-all"
                    >
                      <SettingsIcon className="w-4 h-4" /> Settings
                    </Link>
                    <div className="h-[1px] bg-border my-1" />
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-destructive/5 text-sm text-destructive hover:text-destructive transition-all"
                    >
                      <LogOut className="w-4 h-4" /> Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Search Bar (Below top bar) */}
          <div className="md:hidden px-4 pb-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-muted border border-border">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none flex-1 font-body"
              />
            </div>
          </div>
        </header>
        <main className="p-4 sm:p-8 mobile-content-padding">{children}</main>
      </div>

      <MobileBottomNav />
    </div>
  );
}
