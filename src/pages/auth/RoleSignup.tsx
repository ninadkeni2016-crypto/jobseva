import { useState } from "react";
import { Link, useNavigate, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, User, Building2, Loader2, Users, ArrowLeft } from "lucide-react";
import { useAppContext } from "@/contexts/AppContext";

const roleConfig: Record<string, { label: string; icon: React.ElementType; heading: string; sub: string; badge: string; badgeBg: string }> = {
  user: {
    label: "Job Seeker",
    icon: Users,
    heading: "Create Your Account",
    sub: "Join JobSeva to find your dream job",
    badge: "Job Seeker Signup",
    badgeBg: "bg-primary/10 text-primary",
  },
  company: {
    label: "Company",
    icon: Building2,
    heading: "Register Your Company",
    sub: "Start hiring the best talent today",
    badge: "Company Signup",
    badgeBg: "bg-secondary/10 text-secondary",
  },
};

export default function RoleSignup() {
  const { role } = useParams<{ role: string }>();
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setRole } = useAppContext();

  // Only user and company can sign up — redirect admin
  if (!role || !roleConfig[role]) {
    return <Navigate to="/login" replace />;
  }

  const config = roleConfig[role];
  const RoleIcon = config.icon;

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (role === "company" && !companyName) {
      setError("Please enter your company name.");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setIsLoading(true);
    // Mock signup
    setTimeout(() => {
      setIsLoading(false);
      setRole(role === "user" ? "seeker" : "company");
      navigate(role === "user" ? "/app/explore" : "/app/company/onboarding");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md clean-card p-8 sm:p-10 relative overflow-hidden"
      >
        {/* Gradient top bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-secondary" />

        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-5 logo-hover">
            <img src="/JobSeva.png" alt="JobSeva" className="h-24 sm:h-28 w-auto mx-auto" />
          </Link>

          {/* Role badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-heading font-semibold ${config.badgeBg}`}>
              <RoleIcon className="w-3.5 h-3.5" />
              {config.badge}
            </span>
          </motion.div>

          <h1 className="text-2xl font-heading font-bold text-foreground">{config.heading}</h1>
          <p className="text-sm text-muted-foreground mt-2">{config.sub}</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 rounded-xl bg-destructive/10 text-destructive text-sm font-medium border border-destructive/20 text-center"
            >
              {error}
            </motion.div>
          )}

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-muted/50 focus:bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
              />
            </div>
          </div>

          {role === "company" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="space-y-1.5"
            >
              <label className="text-sm font-medium text-foreground">Company Name</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Acme Corporation"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-muted/50 focus:bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                />
              </div>
            </motion.div>
          )}

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-muted/50 focus:bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-muted/50 focus:bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full relative overflow-hidden rounded-xl px-6 py-3 font-heading font-semibold text-sm transition-all duration-300 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:scale-[1.02] hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Create Account"}
          </button>
        </form>

        {/* Footer links */}
        <div className="mt-8 space-y-3 text-center text-sm text-muted-foreground">
          <p>
            Already have an account?{" "}
            <Link to={`/login/${role}`} className="text-primary font-semibold hover:underline">
              Sign In
            </Link>
          </p>
          <p>
            <Link to="/login" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to role selection
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
