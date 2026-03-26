import { motion } from "framer-motion";
import { mockCompanies } from "@/lib/mock-data";
import { Building2, CheckCircle2, XCircle, Search, MoreHorizontal } from "lucide-react";
import { useState } from "react";

export default function AdminCompanies() {
  const [companies, setCompanies] = useState(mockCompanies);
  const [search, setSearch] = useState("");

  const filtered = companies.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleApprove = (id: string) => {
    setCompanies((prev) => prev.map((c) => c.id === id ? { ...c, approved: true } : c));
  };

  const handleReject = (id: string) => {
    setCompanies((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl sm:text-3xl font-heading font-bold">
          Company <span className="text-primary">Management</span>
        </h1>
        <p className="text-muted-foreground mt-1">Approve, reject, and manage registered companies</p>
      </motion.div>

      <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border max-w-md">
        <Search className="w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search companies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none flex-1 font-body"
        />
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="clean-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Company</th>
                <th className="text-left p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Industry</th>
                <th className="text-left p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Employees</th>
                <th className="text-left p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Jobs</th>
                <th className="text-left p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Status</th>
                <th className="text-right p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.id} className="border-b border-border hover:bg-primary/5 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center font-heading font-bold text-xs text-primary">
                        {c.logo}
                      </div>
                      <span className="font-medium">{c.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-muted-foreground">{c.industry}</td>
                  <td className="p-4 text-muted-foreground">{c.employees}</td>
                  <td className="p-4 text-muted-foreground">{c.jobs}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${c.approved
                        ? "bg-success/10 text-success"
                        : "bg-warning/10 text-warning"
                      }`}>
                      {c.approved ? "Approved" : "Pending"}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    {!c.approved ? (
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleApprove(c.id)}
                          className="p-2 rounded-lg bg-success/10 text-success hover:bg-success/20 transition-colors"
                          title="Approve"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleReject(c.id)}
                          className="p-2 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors"
                          title="Reject"
                        >
                          <XCircle className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    )}
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
