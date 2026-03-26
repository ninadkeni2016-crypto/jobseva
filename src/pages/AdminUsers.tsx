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

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="clean-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
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
                      <p className="font-medium">{u.name}</p>
                      <p className="text-xs text-muted-foreground">{u.email}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground capitalize">{u.role}</span>
                  </td>
                  <td className="p-4 text-muted-foreground">{u.joined}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${u.profileCompletion}%` }} />
                      </div>
                      <span className="text-xs text-muted-foreground">{u.profileCompletion}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${u.status === "active" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
                      }`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => toggleStatus(u.id)}
                      className={`p-2 rounded-lg transition-colors ${u.status === "active"
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
      </motion.div>
    </div>
  );
}
