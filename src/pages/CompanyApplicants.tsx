import { motion } from "framer-motion";
import { mockCandidates } from "@/lib/mock-data";
import { useState } from "react";
import { Mail, Star, MoreHorizontal, Eye, Phone } from "lucide-react";

const columns = [
  { key: "applied", label: "Applied", color: "border-muted-foreground/30" },
  { key: "shortlisted", label: "Shortlisted", color: "border-warning/50" },
  { key: "interview", label: "Interview", color: "border-primary/50" },
  { key: "hired", label: "Hired", color: "border-success/50" },
];

export default function CompanyApplicants() {
  const [candidates] = useState(mockCandidates);
  const [selectedCandidate, setSelectedCandidate] = useState<typeof mockCandidates[0] | null>(null);

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl sm:text-3xl font-heading font-bold">
          Applicant <span className="text-primary">Pipeline</span>
        </h1>
        <p className="text-muted-foreground mt-1">Manage candidates through your hiring stages</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {columns.map((col, ci) => {
          const items = candidates.filter((c) => c.status === col.key);
          return (
            <motion.div
              key={col.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ci * 0.1 }}
              className={`kanban-column border-t-2 ${col.color}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-semibold text-sm">{col.label}</h3>
                <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground">{items.length}</span>
              </div>
              <div className="space-y-3">
                {items.map((c, i) => (
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + ci * 0.1 + i * 0.05 }}
                    className="clean-card-hover p-4 cursor-pointer"
                    onClick={() => setSelectedCandidate(c)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-xs font-heading font-bold text-primary">
                          {c.avatar}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">{c.name}</h4>
                          <p className="text-xs text-muted-foreground">{c.role}</p>
                        </div>
                      </div>
                      <button className="p-1 rounded-md hover:bg-muted transition-colors text-muted-foreground">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {c.skills.map((s) => (
                          <span key={s} className="px-1.5 py-0.5 rounded text-[10px] bg-muted text-muted-foreground">{s}</span>
                        ))}
                      </div>
                      <span className="text-xs font-bold text-primary">{c.score}%</span>
                    </div>
                    <div className="flex items-center gap-2 mt-3 pt-2 border-t border-border">
                      <button className="p-1 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                        <Mail className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-warning">
                        <Star className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[10px] text-muted-foreground ml-auto">{c.experience}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {selectedCandidate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 backdrop-blur-sm" onClick={() => setSelectedCandidate(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="clean-card p-6 max-w-md w-full mx-4 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center font-heading font-bold text-lg text-primary">
                {selectedCandidate.avatar}
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">{selectedCandidate.name}</h3>
                <p className="text-sm text-muted-foreground">{selectedCandidate.role} · {selectedCandidate.experience}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> {selectedCandidate.email}</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> {selectedCandidate.phone}</div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Skills</p>
              <div className="flex gap-2">
                {selectedCandidate.skills.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium">{s}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <span className="text-sm">Match Score: <span className="font-bold text-primary">{selectedCandidate.score}%</span></span>
              <div className="flex gap-2">
                <button className="btn-primary px-4 py-2 text-xs">Shortlist</button>
                <button className="px-4 py-2 rounded-xl border border-border text-xs text-muted-foreground hover:text-destructive hover:border-destructive/30 transition-colors">Reject</button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
