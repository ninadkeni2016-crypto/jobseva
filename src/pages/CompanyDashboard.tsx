import { motion } from "framer-motion";
import { Briefcase, Users, TrendingUp, Eye, ArrowRight, Plus, MapPin, Clock } from "lucide-react";
import { mockJobs, mockCandidates } from "@/lib/mock-data";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { Link } from "react-router-dom";

const chartData = [
  { name: "Mon", applications: 12 },
  { name: "Tue", applications: 19 },
  { name: "Wed", applications: 15 },
  { name: "Thu", applications: 25 },
  { name: "Fri", applications: 22 },
  { name: "Sat", applications: 8 },
  { name: "Sun", applications: 5 },
];

const hiringData = [
  { month: "Jan", hired: 4 },
  { month: "Feb", hired: 6 },
  { month: "Mar", hired: 8 },
  { month: "Apr", hired: 5 },
  { month: "May", hired: 12 },
  { month: "Jun", hired: 9 },
];

const stats = [
  { label: "Active Jobs", value: "8", change: "+2 this month", icon: Briefcase, variant: "purple" as const },
  { label: "Total Applicants", value: "247", change: "+34 this week", icon: Users, variant: "orange" as const },
  { label: "Hire Rate", value: "23%", change: "+5% vs last month", icon: TrendingUp, variant: "aqua" as const },
  { label: "Profile Views", value: "1.2K", change: "+180 this week", icon: Eye, variant: "purple" as const },
];

const tooltipStyle = {
  background: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "12px",
  color: "hsl(var(--foreground))",
};

export default function CompanyDashboard() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-heading font-bold">
            Company <span className="text-primary">Dashboard</span>
          </h1>
          <p className="text-muted-foreground mt-1">Manage your hiring pipeline</p>
        </div>
        <Link to="/app/company/post-job" className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" /> Post New Job
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`stat-card stat-card-${stat.variant}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-heading font-bold mt-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
              </div>
              <div className={`p-2 rounded-xl ${
                stat.variant === "purple" ? "bg-primary/10 text-primary" :
                stat.variant === "orange" ? "bg-warning/10 text-warning" :
                "bg-success/10 text-success"
              }`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="clean-card p-5">
          <h3 className="font-heading font-semibold mb-4">Weekly Applications</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="applications" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="clean-card p-5">
          <h3 className="font-heading font-semibold mb-4">Hiring Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={hiringData}>
              <defs>
                <linearGradient id="hiringGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="hired" stroke="hsl(var(--secondary))" fill="url(#hiringGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading font-semibold text-lg">Recent Candidates</h3>
          <Link to="/app/company/applicants" className="text-sm text-primary hover:underline flex items-center gap-1">View all <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockCandidates.slice(0, 3).map((c, i) => (
            <motion.div key={c.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 + i * 0.1 }} className="clean-card-hover p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-sm font-heading font-bold text-primary">
                  {c.avatar}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm">{c.name}</h4>
                  <p className="text-xs text-muted-foreground">{c.role}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex gap-1">
                  {c.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded-md bg-muted text-xs text-muted-foreground">{s}</span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-primary">{c.score}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
