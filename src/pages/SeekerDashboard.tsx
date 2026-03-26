import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Eye, CheckCircle2, Sparkles, MapPin, Clock, ArrowRight, Bookmark } from "lucide-react";
import { mockJobs, mockApplications } from "@/lib/mock-data";
import { Link } from "react-router-dom";
import LiveActivityFeed from "@/components/LiveActivityFeed";

const statCards = [
  { label: "Applications", value: "24", change: "+3 this week", icon: Briefcase, variant: "purple" as const },
  { label: "Profile Views", value: "142", change: "+18% vs last week", icon: Eye, variant: "orange" as const },
  { label: "Interviews", value: "5", change: "2 upcoming", icon: CheckCircle2, variant: "aqua" as const },
  { label: "Match Score", value: "92%", change: "Top 5% of seekers", icon: TrendingUp, variant: "purple" as const },
];

const statusColors: Record<string, string> = {
  applied: "bg-muted text-muted-foreground",
  shortlisted: "bg-warning/10 text-warning",
  interview: "bg-primary/10 text-primary",
  hired: "bg-success/10 text-success",
};

export default function SeekerDashboard() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-2xl sm:text-3xl font-heading font-bold">
          Welcome back, <span className="text-primary">Rahul</span> 👋
        </h1>
        <p className="text-muted-foreground mt-1 text-sm sm:text-base">Here's what's happening with your job search</p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {statCards.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`stat-card stat-card-${stat.variant}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-xl sm:text-2xl font-heading font-bold mt-1">{stat.value}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 hidden sm:block">{stat.change}</p>
              </div>
              <div className={`p-1.5 sm:p-2 rounded-xl ${
                stat.variant === "purple" ? "bg-primary/10 text-primary" :
                stat.variant === "orange" ? "bg-warning/10 text-warning" :
                "bg-success/10 text-success"
              }`}>
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <h2 className="text-base sm:text-lg font-heading font-semibold">AI Recommended Jobs</h2>
            </div>
            <Link to="/app/explore" className="text-sm text-primary hover:underline flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-3">
            {mockJobs.slice(0, 4).map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              >
                <Link to={`/app/job/${job.id}`} className="clean-card-hover p-4 sm:p-5 cursor-pointer block">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-heading font-bold flex-shrink-0 text-sm sm:text-base">
                      {job.companyLogo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="font-heading font-semibold text-sm sm:text-base text-foreground truncate">{job.title}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground">{job.company}</p>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                          <span className="px-2 py-1 rounded-lg bg-primary/10 text-primary text-[10px] sm:text-xs font-semibold">
                            {job.matchScore}%
                          </span>
                          <button className="p-1 sm:p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground" onClick={(e) => e.preventDefault()}>
                            <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 sm:gap-4 mt-2 text-[10px] sm:text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                        <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {job.salary}</span>
                        <span className="hidden sm:flex items-center gap-1"><Clock className="w-3 h-3" /> {job.posted}</span>
                      </div>
                      <div className="flex gap-1.5 sm:gap-2 mt-2 sm:mt-3 flex-wrap">
                        {job.skills.map((skill) => (
                          <span key={skill} className="px-1.5 sm:px-2 py-0.5 rounded-md bg-muted text-[10px] sm:text-xs text-muted-foreground">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <LiveActivityFeed />
          <div>
            <h2 className="text-base sm:text-lg font-heading font-semibold mb-3">Application Timeline</h2>
            <div className="clean-card p-4 sm:p-5 space-y-3 sm:space-y-4">
              {mockApplications.map((app, i) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 pb-3 sm:pb-4 border-b border-border last:border-0 last:pb-0"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-muted flex items-center justify-center text-xs sm:text-sm font-heading font-bold">
                    {app.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium truncate">{app.jobTitle}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{app.company}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-lg text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider ${statusColors[app.status]}`}>
                    {app.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="clean-card p-4 sm:p-5">
            <h3 className="text-sm font-heading font-semibold mb-3">Profile Strength</h3>
            <div className="relative w-full h-3 rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "78%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full rounded-full bg-primary"
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-muted-foreground">78% complete</span>
              <button className="text-xs text-primary hover:underline">Improve</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
