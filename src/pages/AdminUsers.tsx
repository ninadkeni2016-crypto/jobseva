import { motion } from "framer-motion";
import { mockUsers } from "@/lib/mock-data";
import { Search, MoreHorizontal, Ban, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function AdminUsers() {
  const [users, setUsers] = useState(mockUsers);
  const [search, setSearch] = useState("");

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())
  );

  const toggleStatus = (id: string) => {
    setUsers((prev) => prev.map((u) => u.id === id ? { ...u, status: u.status === "active" ? "suspended" : "active" } : u));
  };

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl sm:text-3xl font-heading font-bold">
          User <span className="text-primary">Management</span>
        </h1>
        <p className="text-muted-foreground mt-1">Monitor and manage platform users</p>
      </motion.div>

      <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border max-w-md">
        <Search className="w-4 h-4 text-muted-foreground" />
        <input type="text" placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none flex-1 font-body"
        />
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
        {/* Desktop Table View */}
        <div className="hidden sm:block clean-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">User</th>
                  <th className="text-left p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Role</th>
                  <th className="text-left p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Joined</th>
                  <th className="text-left p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Profile</th>
                  <th className="text-left p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Status</th>
                  <th className="text-right p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((u) => (
                  <tr key={u.id} className="border-b border-border hover:bg-primary/5 transition-colors">
                    <td className="p-4">
                      <div>
                        <p className="font-semibold text-foreground">{u.name}</p>
                        <p className="text-xs text-muted-foreground">{u.email}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-lg bg-muted text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{u.role}</span>
                    </td>
                    <td className="p-4 text-muted-foreground text-xs">{u.joined}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
                          <div className="h-full rounded-full bg-primary" style={{ width: `${u.profileCompletion}%` }} />
                        </div>
                        <span className="text-[10px] font-bold text-muted-foreground">{u.profileCompletion}%</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${u.status === "active"
                        ? "bg-success/10 text-success border border-success/20"
                        : "bg-destructive/10 text-destructive border border-destructive/20"
                        }`}>
                        {u.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => toggleStatus(u.id)}
                        className={`p-2 rounded-lg transition-all active:scale-95 ${u.status === "active"
                          ? "bg-destructive/10 text-destructive hover:bg-destructive/20"
                          : "bg-success/10 text-success hover:bg-success/20"
                          }`}
                        title={u.status === "active" ? "Suspend" : "Activate"}
                      >
                        {u.status === "active" ? <Ban className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards View */}
        <div className="sm:hidden space-y-4">
          {filtered.map((u) => (
            <div key={u.id} className="clean-card p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-heading font-bold text-sm text-primary uppercase">
                    {u.name.substring(0, 2)}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm tracking-tight">{u.name}</h3>
                    <p className="text-[10px] text-muted-foreground font-medium">{u.email}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="px-2 py-0.5 rounded-lg bg-muted text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                    {u.role}
                  </span>
                  <span className={`px-2 py-0.5 rounded-lg text-[9px] font-bold uppercase tracking-widest ${u.status === "active"
                    ? "bg-success/10 text-success border border-success/20"
                    : "bg-destructive/10 text-destructive border border-destructive/20"
                    }`}>
                    {u.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 py-3 border-y border-border/50 text-[10px]">
                <div>
                  <p className="text-muted-foreground mb-1 uppercase tracking-wider font-bold">Joined</p>
                  <p className="font-semibold">{u.joined}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1 uppercase tracking-wider font-bold">Profile Strength</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${u.profileCompletion}%` }} />
                    </div>
                    <span className="font-bold text-primary">{u.profileCompletion}%</span>
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <button
                  onClick={() => toggleStatus(u.id)}
                  className={`w-full py-2.5 rounded-xl font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 ${u.status === "active"
                    ? "bg-destructive/10 text-destructive border border-destructive/20"
                    : "bg-success/10 text-success border border-success/20"
                    }`}
                >
                  {u.status === "active" ? (
                    <><Ban className="w-3.5 h-3.5" /> Suspend Account</>
                  ) : (
                    <><CheckCircle2 className="w-3.5 h-3.5" /> Activate Account</>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
