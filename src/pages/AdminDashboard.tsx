import { motion } from "framer-motion";
import { mockAdminStats, mockCompanies, mockActivityLog } from "@/lib/mock-data";
import { Users, Building2, Briefcase, Trophy, AlertTriangle, Shield, CheckCircle2, XCircle, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const userGrowth = [
  { month: "Jan", users: 8200 },
  { month: "Feb", users: 9100 },
  { month: "Mar", users: 9800 },
  { month: "Apr", users: 10500 },
  { month: "May", users: 11400 },
  { month: "Jun", users: 12480 },
];

const pieData = [
  { name: "Active", value: 65 },
  { name: "Pending", value: 20 },
  { name: "Suspended", value: 15 },
];
const PIE_COLORS = ["hsl(var(--primary))", "hsl(var(--warning))", "hsl(var(--muted-foreground))"];

const adminStats = [
  { label: "Total Users", value: mockAdminStats.totalUsers.toLocaleString(), icon: Users, variant: "purple" as const },
  { label: "Companies", value: mockAdminStats.totalCompanies.toString(), icon: Building2, variant: "orange" as const },
  { label: "Active Jobs", value: mockAdminStats.activeJobs.toLocaleString(), icon: Briefcase, variant: "aqua" as const },
  { label: "Placements", value: mockAdminStats.placements.toString(), icon: Trophy, variant: "purple" as const },
];

const typeIcons: Record<string, React.ElementType> = {
  info: Clock,
  warning: AlertTriangle,
  success: CheckCircle2,
  danger: XCircle,
};
const typeColors: Record<string, string> = {
  info: "text-muted-foreground bg-muted",
  warning: "text-warning bg-warning/10",
  success: "text-success bg-success/10",
  danger: "text-destructive bg-destructive/10",
};

const tooltipStyle = {
  background: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "12px",
  color: "hsl(var(--foreground))",
};

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl sm:text-3xl font-heading font-bold">
          Admin <span className="text-primary">Control Center</span>
        </h1>
        <p className="text-muted-foreground mt-1">Monitor and manage the entire platform</p>
      </motion.div>

      {mockAdminStats.pendingApprovals > 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="clean-card p-4 relative overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-primary before:to-secondary flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-warning" />
            <p className="text-sm"><span className="font-semibold text-warning">{mockAdminStats.pendingApprovals}</span> companies pending approval</p>
          </div>
          <button className="text-sm text-primary hover:underline flex items-center gap-1">Review <ArrowRight className="w-4 h-4" /></button>
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {adminStats.map((stat, i) => (
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
              </div>
              <div className={`p-2 rounded-xl ${stat.variant === "purple" ? "bg-primary/10 text-primary" :
                stat.variant === "orange" ? "bg-warning/10 text-warning" :
                  "bg-success/10 text-success"
                }`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2 clean-card p-5">
          <h3 className="font-heading font-semibold mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-primary" /> User Growth</h3>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={userGrowth}>
              <defs>
                <linearGradient id="userGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="users" stroke="hsl(var(--primary))" fill="url(#userGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="clean-card p-5">
          <h3 className="font-heading font-semibold mb-4">Company Status</h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={75} dataKey="value" stroke="none">
                {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-2">
            {pieData.map((d, i) => (
              <div key={d.name} className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: PIE_COLORS[i] }} />
                <span className="text-xs text-muted-foreground">{d.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="clean-card p-5">
          <h3 className="font-heading font-semibold mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-warning" /> Pending Approvals</h3>
          <div className="space-y-3">
            {mockCompanies.filter((c) => !c.approved).map((c) => (
              <div key={c.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-primary/5 transition-colors">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-heading font-bold text-sm ${c.logoImg ? "bg-transparent shadow-sm" : "bg-primary/10 text-primary"}`}>
                  {c.logoImg ? (
                    <img src={c.logoImg} alt={c.name} className="max-w-full max-h-full object-contain" />
                  ) : (
                    c.logo
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{c.name}</h4>
                  <p className="text-xs text-muted-foreground">{c.industry} · {c.employees} employees</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-success/10 text-success hover:bg-success/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors">
                    <XCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="clean-card p-5">
          <h3 className="font-heading font-semibold mb-4">Activity Log</h3>
          <div className="space-y-3">
            {mockActivityLog.map((log) => {
              const Icon = typeIcons[log.type];
              return (
                <div key={log.id} className="flex items-start gap-3 p-2 rounded-xl border border-transparent hover:bg-primary/5 transition-colors hover:border-border">
                  <div className={`p-1.5 rounded-lg ${typeColors[log.type]} flex-shrink-0 mt-0.5`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">{log.action}</p>
                    <p className="text-xs text-muted-foreground">{log.detail}</p>
                  </div>
                  <span className="text-xs text-muted-foreground flex-shrink-0">{log.time}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
