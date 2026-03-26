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

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
        {/* Desktop Table */}
        <div className="hidden sm:block clean-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="border-b border-border bg-muted/30">
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
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-heading font-bold text-xs ${c.logoImg ? "bg-transparent shadow-sm" : "bg-primary/10 text-primary"}`}>
                          {c.logoImg ? (
                            <img src={c.logoImg} alt={c.name} className="max-w-full max-h-full object-contain" />
                          ) : (
                            c.logo
                          )}
                        </div>
                        <span className="font-semibold">{c.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">{c.industry}</td>
                    <td className="p-4 text-muted-foreground">{c.employees}</td>
                    <td className="p-4 text-muted-foreground font-medium">{c.jobs}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${c.approved
                        ? "bg-success/10 text-success border border-success/20"
                        : "bg-warning/10 text-warning border border-warning/20"
                        }`}>
                        {c.approved ? "Approved" : "Pending"}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      {!c.approved ? (
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleApprove(c.id)}
                            className="p-2 rounded-lg bg-success/10 text-success hover:bg-success/20 transition-all active:scale-95"
                            title="Approve"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleReject(c.id)}
                            className="p-2 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-all active:scale-95"
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
        </div>

        {/* Mobile Cards */}
        <div className="sm:hidden space-y-4">
          {filtered.map((c) => (
            <div key={c.id} className="clean-card p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-heading font-bold text-sm ${c.logoImg ? "bg-transparent shadow-sm" : "bg-primary/10 text-primary"}`}>
                    {c.logoImg ? (
                      <img src={c.logoImg} alt={c.name} className="max-w-full max-h-full object-contain" />
                    ) : (
                      c.logo
                    )}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm">{c.name}</h3>
                    <p className="text-xs text-muted-foreground">{c.industry}</p>
                  </div>
                </div>
                <span className={`px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider ${c.approved
                  ? "bg-success/10 text-success border border-success/20"
                  : "bg-warning/10 text-warning border border-warning/20"
                  }`}>
                  {c.approved ? "Approved" : "Pending"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 py-3 border-y border-border/50 text-xs">
                <div>
                  <p className="text-muted-foreground mb-1">Employees</p>
                  <p className="font-semibold">{c.employees}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Live Jobs</p>
                  <p className="font-semibold text-primary">{c.jobs}</p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-1">
                {!c.approved ? (
                  <>
                    <button
                      onClick={() => handleApprove(c.id)}
                      className="flex-1 py-2 rounded-xl bg-success/10 text-success font-heading font-bold text-xs flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" /> Approve
                    </button>
                    <button
                      onClick={() => handleReject(c.id)}
                      className="flex-1 py-2 rounded-xl bg-destructive/10 text-destructive font-heading font-bold text-xs flex items-center justify-center gap-2"
                    >
                      <XCircle className="w-3.5 h-3.5" /> Reject
                    </button>
                  </>
                ) : (
                  <button className="w-full py-2 rounded-xl bg-muted text-muted-foreground font-heading font-semibold text-xs transition-colors">
                    Manage Company
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
