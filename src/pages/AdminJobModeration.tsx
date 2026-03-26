import { motion } from "framer-motion";
import { mockJobs } from "@/lib/mock-data";
import { Search, CheckCircle2, XCircle, AlertTriangle, Eye } from "lucide-react";
import { useState } from "react";

export default function AdminJobModeration() {
  const [jobs, setJobs] = useState(mockJobs.map((j) => ({ ...j, modStatus: "active" as "active" | "flagged" | "removed" })));
  const [search, setSearch] = useState("");

  if (jobs[0].modStatus === "active" && jobs.length > 1) {
    jobs[1].modStatus = "flagged";
  }

  const filtered = jobs.filter((j) =>
    j.title.toLowerCase().includes(search.toLowerCase()) || j.company.toLowerCase().includes(search.toLowerCase())
  );

  const handleRemove = (id: string) => {
    setJobs((prev) => prev.map((j) => j.id === id ? { ...j, modStatus: "removed" as const } : j));
  };

  const handleApprove = (id: string) => {
    setJobs((prev) => prev.map((j) => j.id === id ? { ...j, modStatus: "active" as const } : j));
  };

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl sm:text-3xl font-heading font-bold">
          Job <span className="text-primary">Moderation</span>
        </h1>
        <p className="text-muted-foreground mt-1">Review and moderate job listings</p>
      </motion.div>

      <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border max-w-md">
        <Search className="w-4 h-4 text-muted-foreground" />
        <input type="text" placeholder="Search jobs..." value={search} onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none flex-1 font-body"
        />
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="clean-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Job</th>
                <th className="text-left p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Company</th>
                <th className="text-left p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Salary</th>
                <th className="text-left p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Applicants</th>
                <th className="text-left p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Status</th>
                <th className="text-right p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((j) => (
                <tr key={j.id} className="border-b border-border hover:bg-primary/5 transition-colors">
                  <td className="p-4 font-medium">{j.title}</td>
                  <td className="p-4 text-muted-foreground">{j.company}</td>
                  <td className="p-4 text-muted-foreground">{j.salary}</td>
                  <td className="p-4 text-muted-foreground">{j.applicants}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold inline-flex items-center gap-1 ${j.modStatus === "active" ? "bg-success/10 text-success" :
                        j.modStatus === "flagged" ? "bg-warning/10 text-warning" :
                          "bg-destructive/10 text-destructive"
                      }`}>
                      {j.modStatus === "flagged" && <AlertTriangle className="w-3 h-3" />}
                      {j.modStatus}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground" title="View">
                        <Eye className="w-4 h-4" />
                      </button>
                      {j.modStatus !== "active" && (
                        <button onClick={() => handleApprove(j.id)} className="p-2 rounded-lg bg-success/10 text-success hover:bg-success/20 transition-colors" title="Approve">
                          <CheckCircle2 className="w-4 h-4" />
                        </button>
                      )}
                      {j.modStatus !== "removed" && (
                        <button onClick={() => handleRemove(j.id)} className="p-2 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors" title="Remove">
                          <XCircle className="w-4 h-4" />
                        </button>
                      )}
                    </div>
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
