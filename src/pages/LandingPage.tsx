import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  Sparkles, Zap, Shield, Clock, ArrowRight,
  Briefcase, ChevronRight, ChevronLeft, Mail, Phone, Globe,
  CheckCircle, Users, Building2, Star, LogIn,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import PublicNavbar from "@/components/PublicNavbar";

const features = [
  { icon: Sparkles, title: "AI Job Matching", desc: "Smart algorithms find your perfect role based on your skills and preferences." },
  { icon: Zap, title: "One-Click Apply", desc: "Apply to jobs instantly with your saved profile and resume." },
  { icon: Clock, title: "Real-time Updates", desc: "Get instant notifications on application status changes." },
  { icon: Shield, title: "Verified Companies", desc: "Every employer is vetted to ensure legitimate opportunities." },
];

const hiringCategories = [
  { title: "MNCs", count: "2.3K+", logos: ["BHS", "ZS", "APP", "XL"] },
  { title: "Internet", count: "245", logos: ["G", "CD", "OQ", "TI"] },
  { title: "Manufacturing", count: "1.1K+", logos: ["S", "L", "AS", "AP"] },
  { title: "Fortune 500", count: "111", logos: ["TK", "V", "SE", "JB"] },
  { title: "Product", count: "1.3K+", logos: ["C", "SK", "AV", "UN"] },
  { title: "Banking & Finance", count: "450", logos: ["DB", "A", "AX", "KO"] },
  { title: "Fintech", count: "148", logos: ["RC", "GS", "AC", "S7"] },
  { title: "Healthcare", count: "320", logos: ["OP", "AM", "PZ", "CI"] },
];

const featuredCompanies = [
  { name: "Amgen Inc", logo: "AM", logoColor: "bg-blue-800", rating: 3.0, reviews: "129", desc: "LIVE. WIN. THRIVE." },
  { name: "Datamatics", logo: "D", logoColor: "bg-red-600", rating: 3.4, reviews: "2.4K+", desc: "Global digital solutions & technology company." },
  { name: "Reliance Retail", logo: "RR", logoColor: "bg-blue-600", rating: 3.9, reviews: "27.2K+", desc: "Building India's largest retail company." },
  { name: "ICICI Bank", logo: "IC", logoColor: "bg-orange-700", rating: 4.0, reviews: "45.5K+", desc: "Leading private sector bank in India." },
  { name: "Cognizant", logo: "C", logoColor: "bg-blue-500", rating: 3.7, reviews: "60.8K+", desc: "Leading ITeS company with global presence." },
  { name: "FIS", logo: "FIS", logoColor: "bg-indigo-700", rating: 3.8, reviews: "6.5K+", desc: "Global leader in financial services technology." },
  { name: "Genpact", logo: "GP", logoColor: "bg-emerald-600", rating: 3.6, reviews: "41.6K+", desc: "Global professional services firm." },
  { name: "Avalara Technologies", logo: "AV", logoColor: "bg-amber-600", rating: 2.9, reviews: "444", desc: "We're transforming tax through tech." },
  { name: "Infosys", logo: "IN", logoColor: "bg-blue-700", rating: 3.6, reviews: "58K+", desc: "Global leader in next-gen digital services." },
  { name: "TCS", logo: "TC", logoColor: "bg-indigo-600", rating: 3.7, reviews: "82K+", desc: "Pioneering innovation in IT services globally." },
  { name: "Amazon", logo: "A", logoColor: "bg-orange-500", rating: 4.1, reviews: "25K+", desc: "World's largest internet company by revenue." },
  { name: "Wipro", logo: "WI", logoColor: "bg-purple-600", rating: 3.5, reviews: "39K+", desc: "Leading global IT & business process services." },
];

const steps = [
  { num: "01", title: "Create Profile", desc: "Set up your profile in minutes with guided onboarding." },
  { num: "02", title: "Get AI Recommendations", desc: "Our algorithm finds jobs matching your skills perfectly." },
  { num: "03", title: "Apply Instantly", desc: "One-click apply with your saved resume." },
  { num: "04", title: "Get Hired", desc: "Track your progress and land your dream job faster." },
];

const testimonials = [
  { name: "Anita Verma", role: "Data Analyst at Wipro", avatar: "AV", text: "JobSeva helped me find the perfect data analyst role in just 2 weeks. The match score was incredibly accurate!" },
  { name: "Rajesh Kumar", role: "HR Manager at Infosys", avatar: "RK", text: "We reduced our hiring time by 50% using JobSeva. The applicant pipeline is a game-changer for recruiters." },
  { name: "Meera Patel", role: "Office Assistant", avatar: "MP", text: "Best job platform I've used. The real-time updates kept me informed throughout the entire process." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

function TopCompaniesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border">
      <div className="max-w-6xl mx-auto">
        {/* Top companies hiring now */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8"
        >
          Top companies <span className="text-primary">hiring now</span>
        </motion.h2>

        {/* Category cards - scrollable row */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-12 scrollbar-hide -mx-2 px-2">
          {hiringCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="clean-card p-4 min-w-[200px] flex-shrink-0 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-1 mb-1.5">
                <h4 className="font-heading font-semibold text-sm group-hover:text-primary transition-colors">{cat.title}</h4>
                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
              </div>
              <p className="text-[11px] text-muted-foreground mb-3">{cat.count} are actively hiring</p>
              <div className="flex gap-1.5">
                {cat.logos.map((logo) => (
                  <div key={logo} className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-[9px] font-heading font-bold text-muted-foreground">
                    {logo}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured companies actively hiring */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8"
        >
          Featured companies <span className="text-primary">actively hiring</span>
        </motion.h2>

        {/* Scrollable company cards with arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all hidden sm:flex"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all hidden sm:flex"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2 snap-x"
          >
            {featuredCompanies.map((company, i) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="clean-card-hover w-[220px] flex-shrink-0 snap-start flex flex-col overflow-hidden"
              >
                {/* Logo area */}
                <div className="h-24 flex items-center justify-center bg-muted/30 border-b border-border">
                  <div className={`w-14 h-14 rounded-xl ${company.logoColor} flex items-center justify-center text-white font-heading font-bold text-base`}>
                    {company.logo}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 flex-1 flex flex-col">
                  {/* Rating bar */}
                  <div className="bg-muted/60 rounded-lg px-3 py-2 mb-3">
                    <p className="font-heading font-semibold text-xs truncate mb-1">{company.name}</p>
                    <div className="flex items-center gap-1.5">
                      <Star className="w-3 h-3 text-warning fill-warning" />
                      <span className="text-[11px] font-medium">{company.rating}</span>
                      <span className="text-[10px] text-muted-foreground">{company.reviews} reviews</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-muted-foreground text-center leading-relaxed mb-4 flex-1">
                    {company.desc}
                  </p>

                  <Link
                    to="/login/user"
                    className="w-full text-center py-2 rounded-lg border border-primary/30 text-primary text-xs font-heading font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    View jobs
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View all companies */}
        <div className="text-center mt-8">
          <Link
            to="/companies"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-primary/30 text-primary text-sm font-heading font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            View all companies
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-16 sm:pt-20">
      <PublicNavbar />
      
      {/* Hero - Premium CTA */}
      <section className="relative pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated gradient blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -left-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, hsl(210 100% 45% / 0.6), transparent 70%)" }}
          />
          <motion.div
            animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-10 -right-20 w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, hsl(195 90% 50% / 0.5), transparent 70%)" }}
          />
          <motion.div
            animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-10 left-1/4 w-64 h-64 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, hsl(210 100% 70% / 0.6), transparent 70%)" }}
          />
        </div>

        {/* Floating blurred job cards - background visual */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute top-36 left-8 xl:left-16"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-52 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 p-4 shadow-lg rotate-[-6deg]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">IN</div>
                <div>
                  <div className="h-2.5 w-24 bg-muted rounded-full" />
                  <div className="h-2 w-16 bg-muted rounded-full mt-1" />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="h-2 w-full bg-muted rounded-full" />
                <div className="h-2 w-3/4 bg-muted rounded-full" />
              </div>
              <div className="flex gap-1.5 mt-2.5">
                <div className="h-5 w-12 bg-primary/10 rounded-md" />
                <div className="h-5 w-14 bg-primary/10 rounded-md" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute top-48 right-8 xl:right-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="w-52 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 p-4 shadow-lg rotate-[5deg]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center text-[10px] font-bold text-secondary">TC</div>
                <div>
                  <div className="h-2.5 w-20 bg-muted rounded-full" />
                  <div className="h-2 w-14 bg-muted rounded-full mt-1" />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="h-2 w-full bg-muted rounded-full" />
                <div className="h-2 w-2/3 bg-muted rounded-full" />
              </div>
              <div className="flex gap-1.5 mt-2.5">
                <div className="h-5 w-14 bg-secondary/10 rounded-md" />
                <div className="h-5 w-10 bg-secondary/10 rounded-md" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-20 left-16 xl:left-28"
          >
            <motion.div
              animate={{ y: [0, 6, 0], rotate: [-3, -1, -3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="w-44 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 p-3 shadow-md rotate-[-3deg]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center text-[9px] font-bold text-accent">AM</div>
                <div className="h-2.5 w-20 bg-muted rounded-full" />
              </div>
              <div className="h-2 w-full bg-muted rounded-full" />
              <div className="h-2 w-1/2 bg-muted rounded-full mt-1" />
            </motion.div>
          </motion.div>
        </div>

        {/* Main CTA Content */}
        <div className="max-w-3xl mx-auto text-center relative z-10">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-10 sm:mt-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4" /> AI-Powered Job Matching
            </span>
          </motion.div>

          {/* Main Hero Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold leading-[1.1] tracking-tight mb-6"
          >
            Find the Right Job,{" "}
            <br className="hidden sm:block" />
            <span className="text-primary hover-glow">Faster</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
          >
            Connecting talent with real opportunities through smart matching and verified companies.
          </motion.p>

          {/* Glassmorphism CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-12 max-w-xl mx-auto"
          >
            <div
              className="relative rounded-3xl p-8 sm:p-10 border border-border/50 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(var(--card) / 0.8), hsl(var(--card) / 0.6))",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: "0 8px 32px hsl(var(--primary) / 0.08), 0 2px 8px hsl(0 0% 0% / 0.04)",
              }}
            >
              {/* Inner glow */}

              {/* Inner glow */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-40 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, hsl(var(--primary)), transparent 70%)" }}
              />

              {/* Inside Heading */}
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl sm:text-3xl font-heading font-bold mb-3"
              >
                Ready to <span className="gradient-text">Get Started</span>?
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 max-w-sm mx-auto"
              >
                Join thousands of professionals already using JobSeva to find their next opportunity.
              </motion.p>

              {/* Lock badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-5 flex justify-center"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-heading font-semibold border border-primary/15">
                  <Shield className="w-3.5 h-3.5" /> Login required to explore jobs
                </span>
              </motion.div>

              <p className="text-sm text-muted-foreground mb-7 leading-relaxed max-w-sm mx-auto">
                Login to start exploring jobs, apply instantly, and track your applications in real-time.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/login"
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl font-heading font-semibold text-sm transition-all duration-300 text-white overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, hsl(210 100% 45%), hsl(195 90% 50%))",
                    boxShadow: "0 4px 20px hsl(210 100% 45% / 0.35)",
                  }}
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <LogIn className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Login to Explore Jobs</span>
                </Link>

                <Link
                  to="/signup/user"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-heading font-semibold text-sm border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 bg-card/50 hover:bg-primary/5"
                >
                  <Users className="w-4 h-4" />
                  Create Free Account
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Trust Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-14"
          >
            {[
              { value: "12K+", label: "Active Jobs", icon: Briefcase },
              { value: "8K+", label: "Companies", icon: Building2 },
              { value: "50K+", label: "Candidates", icon: Users },
              { value: "95%", label: "Success Rate", icon: CheckCircle },
            ].map((stat) => (
              <div key={stat.label} className="text-center group cursor-default p-4 rounded-2xl hover:bg-primary/5 transition-colors">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon className="w-4 h-4 text-primary/60 group-hover:text-primary group-hover:scale-125 transition-all duration-300 group-hover:-translate-y-1" />
                  <p className="text-2xl sm:text-3xl font-heading font-bold text-primary group-hover:-translate-y-1 transition-transform duration-300">{stat.value}</p>
                </div>
                <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-heading font-bold">
              Why <span className="text-primary">JobSeva</span>?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Everything you need to supercharge your job search or hiring process.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="clean-card-hover p-6 text-center group"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                  <f.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Companies Hiring Now */}
      <TopCompaniesSection />


      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-heading font-bold">
              How It <span className="text-primary">Works</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center relative group cursor-default"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 shadow-sm group-hover:shadow-md">
                  <span className="font-heading font-bold text-xl text-primary">{step.num}</span>
                </div>
                <h3 className="font-heading font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {i < steps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute top-8 -right-4 w-6 h-6 text-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-3xl sm:text-4xl font-heading font-bold text-center mb-16"
          >
            What People <span className="text-primary">Say</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="clean-card-hover p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-warning fill-warning" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-heading font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-heading font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-border py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
            <div className="max-w-xs">
              <div className="mb-3 logo-hover inline-block">
                <img src="/JobSeva.png" alt="JobSeva" className="h-24 sm:h-28 w-auto" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">Connecting talent with real opportunities. Your next career move starts here.</p>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-sm mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary inline-block hover:translate-x-1 transition-all duration-300">Features</a></li>
                <li><a href="#jobs" className="hover:text-primary inline-block hover:translate-x-1 transition-all duration-300">Browse Jobs</a></li>
                <li><a href="#how-it-works" className="hover:text-primary inline-block hover:translate-x-1 transition-all duration-300">How It Works</a></li>
                <li><Link to="/app" className="hover:text-primary inline-block hover:translate-x-1 transition-all duration-300">Dashboard</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-sm mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@jobseva.com</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 9967267280</li>
                <li className="flex items-center gap-2"><Globe className="w-4 h-4" /> www.jobseva.com</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">© 2026 JobSeva. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
