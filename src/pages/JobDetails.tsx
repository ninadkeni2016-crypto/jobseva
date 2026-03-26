import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { mockJobs } from "@/lib/mock-data";
import { MapPin, Briefcase, Clock, ArrowLeft, Users, Building2, CheckCircle2, Share2 } from "lucide-react";

export default function JobDetails() {
  const { id } = useParams();
  const job = mockJobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-2xl font-heading font-bold mb-2">Job Not Found</h2>
        <p className="text-muted-foreground mb-4">This job listing may have been removed.</p>
        <Link to="/app/explore" className="btn-primary px-6 py-2">Browse Jobs</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Link to="/app/explore" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Jobs
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2 space-y-6">
          <div className="clean-card p-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center font-heading font-bold text-lg text-primary flex-shrink-0">
                {job.companyLogo}
              </div>
              <div className="flex-1">
                <h1 className="text-xl sm:text-2xl font-heading font-bold">{job.title}</h1>
                <p className="text-muted-foreground mt-1">{job.company}</p>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</span>
                  <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {job.type}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {job.posted}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {job.skills.map((s) => (
                <span key={s} className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium">{s}</span>
              ))}
              {job.remote && (
                <span className="px-3 py-1 rounded-lg bg-success/10 text-success text-xs font-medium">Remote</span>
              )}
            </div>
          </div>

          <div className="clean-card p-6">
            <h2 className="font-heading font-semibold text-lg mb-3">About the Role</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
          </div>

          {job.responsibilities && (
            <div className="clean-card p-6">
              <h2 className="font-heading font-semibold text-lg mb-3">Key Responsibilities</h2>
              <ul className="space-y-2.5">
                {job.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="clean-card p-6">
            <h2 className="font-heading font-semibold text-lg mb-3">Skills Required</h2>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((s) => (
                <span key={s} className="px-4 py-2 rounded-xl bg-muted text-sm text-muted-foreground">{s}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-4">
          <div className="clean-card p-5 lg:sticky lg:top-20 space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Salary</p>
              <p className="text-xl font-heading font-bold mt-1">{job.salary}</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{job.applicants} applicants</span>
            </div>
            <button className="btn-primary w-full py-3 text-center">
              Apply Now
            </button>
            <button className="w-full py-3 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all flex items-center justify-center gap-2">
              <Share2 className="w-4 h-4" /> Share Job
            </button>
          </div>

          <div className="clean-card p-5">
            <h3 className="font-heading font-semibold text-sm mb-3">About Company</h3>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center font-heading font-bold text-sm text-primary">
                {job.companyLogo}
              </div>
              <div>
                <p className="font-heading font-semibold text-sm">{job.company}</p>
                <p className="text-xs text-muted-foreground">Verified Employer</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Building2 className="w-4 h-4" /> IT Services</div>
              <div className="flex items-center gap-2"><Users className="w-4 h-4" /> 500+ employees</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {job.location}</div>
            </div>
          </div>

          <div className="clean-card p-5">
            <h3 className="font-heading font-semibold text-sm mb-3">Your Match Score</h3>
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="28" fill="none" stroke="hsl(var(--muted))" strokeWidth="4" />
                  <circle cx="32" cy="32" r="28" fill="none" stroke="hsl(var(--primary))" strokeWidth="4" strokeDasharray={`${job.matchScore * 1.76} 176`} strokeLinecap="round" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-heading font-bold text-sm">{job.matchScore}%</span>
              </div>
              <div>
                <p className="text-sm font-medium">{job.matchScore >= 80 ? "Great Match!" : job.matchScore >= 60 ? "Good Match" : "Fair Match"}</p>
                <p className="text-xs text-muted-foreground">Based on your profile</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
