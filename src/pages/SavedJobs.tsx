import { motion } from "framer-motion";
import { mockJobs } from "@/lib/mock-data";
import { Bookmark, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function SavedJobs() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-heading font-bold">Saved <span className="text-primary">Jobs</span></h1>
        <p className="text-muted-foreground mt-1">Jobs you've bookmarked for later</p>
      </motion.div>

      <div className="space-y-3">
        {mockJobs.slice(0, 3).map((job, i) => (
          <motion.div key={job.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
            <Link to={`/app/job/${job.id}`} className="clean-card-hover p-5 cursor-pointer block">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center font-heading font-bold text-primary">{job.companyLogo}</div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">{job.company} · {job.location}</p>
                  <p className="text-sm text-muted-foreground mt-1">{job.salary}</p>
                </div>
                <button className="p-2 rounded-lg text-warning" onClick={(e) => e.preventDefault()}><Bookmark className="w-5 h-5 fill-current" /></button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {mockJobs.length === 0 && (
        <div className="clean-card p-12 text-center">
          <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground">No saved jobs yet. Start exploring!</p>
        </div>
      )}
    </div>
  );
}
