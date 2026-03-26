import { motion } from "framer-motion";
import { mockPlacements } from "@/lib/mock-data";
import { Trophy, CheckCircle2, Clock } from "lucide-react";

export default function AdminPlacements() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl sm:text-3xl font-heading font-bold">
          Placement <span className="text-primary">Tracking</span>
        </h1>
        <p className="text-muted-foreground mt-1">Track successful placements across the platform</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="stat-card stat-card-purple">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary/10 text-primary"><Trophy className="w-5 h-5" /></div>
            <div>
              <p className="text-xs text-muted-foreground">Total Placements</p>
              <p className="text-2xl font-heading font-bold">{mockPlacements.length}</p>
            </div>
          </div>
        </div>
        <div className="stat-card stat-card-aqua">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-success/10 text-success"><CheckCircle2 className="w-5 h-5" /></div>
            <div>
              <p className="text-xs text-muted-foreground">Confirmed</p>
              <p className="text-2xl font-heading font-bold">{mockPlacements.filter((p) => p.status === "confirmed").length}</p>
            </div>
          </div>
        </div>
        <div className="stat-card stat-card-orange">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-warning/10 text-warning"><Clock className="w-5 h-5" /></div>
            <div>
              <p className="text-xs text-muted-foreground">Pending</p>
              <p className="text-2xl font-heading font-bold">{mockPlacements.filter((p) => p.status === "pending").length}</p>
            </div>
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="clean-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Candidate</th>
                <th className="text-left p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Company</th>
                <th className="text-left p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Role</th>
                <th className="text-left p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Salary</th>
                <th className="text-left p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Date</th>
                <th className="text-left p-4 font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockPlacements.map((p) => (
                <tr key={p.id} className="border-b border-border hover:bg-primary/5 transition-colors">
                  <td className="p-4 font-medium">{p.candidate}</td>
                  <td className="p-4 text-muted-foreground">{p.company}</td>
                  <td className="p-4 text-muted-foreground">{p.role}</td>
                  <td className="p-4 text-muted-foreground">{p.salary}</td>
                  <td className="p-4 text-muted-foreground">{p.date}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${p.status === "confirmed" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                      }`}>
                      {p.status}
                    </span>
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
