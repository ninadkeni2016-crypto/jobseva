import { motion } from "framer-motion";
import { User, Mail, MapPin, Briefcase, FileText, Edit3, Camera, Plus, Star, Award, Code, Globe } from "lucide-react";

const skills = ["React", "TypeScript", "Node.js", "GraphQL", "Python", "AWS", "Docker", "Figma"];
const experience = [
  { title: "Senior Frontend Engineer", company: "TechCorp", period: "2022 – Present", logo: "T" },
  { title: "Frontend Developer", company: "StartupXYZ", period: "2020 – 2022", logo: "S" },
  { title: "Junior Developer", company: "WebAgency", period: "2018 – 2020", logo: "W" },
];

export default function SeekerProfile() {
  return (
    <div className="space-y-6 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-heading font-bold">My <span className="text-primary">Profile</span></h1>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="clean-card p-6">
        <div className="flex items-start gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-primary flex items-center justify-center text-3xl font-heading font-bold text-primary-foreground">
              JD
            </div>
            <button className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-heading font-bold">John Doe</h2>
                <p className="text-muted-foreground">Senior Frontend Engineer</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> San Francisco, CA</span>
                  <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> john@email.com</span>
                </div>
              </div>
              <button className="btn-primary flex items-center gap-2">
                <Edit3 className="w-4 h-4" /> Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-muted/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Profile Strength</span>
            <span className="text-sm text-primary font-semibold">78%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "78%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full rounded-full bg-primary"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">Add a resume to improve your profile strength</p>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="clean-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading font-semibold flex items-center gap-2"><Code className="w-5 h-5 text-primary" /> Skills</h3>
          <button className="text-sm text-primary hover:underline">Edit</button>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              {skill}
            </span>
          ))}
          <button className="px-3 py-1.5 rounded-xl border border-dashed border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary transition-colors flex items-center gap-1">
            <Plus className="w-3 h-3" /> Add Skill
          </button>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="clean-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading font-semibold flex items-center gap-2"><Briefcase className="w-5 h-5 text-warning" /> Experience</h3>
          <button className="text-sm text-primary hover:underline">Add</button>
        </div>
        <div className="space-y-4">
          {experience.map((exp, i) => (
            <div key={i} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center font-heading font-bold text-sm">
                {exp.logo}
              </div>
              <div>
                <h4 className="font-medium">{exp.title}</h4>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                <p className="text-xs text-muted-foreground">{exp.period}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="clean-card p-6">
        <h3 className="font-heading font-semibold flex items-center gap-2 mb-4"><FileText className="w-5 h-5 text-success" /> Resume</h3>
        <div className="border-2 border-dashed border-border rounded-xl p-8 text-center">
          <FileText className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">Drop your resume here or click to upload</p>
          <p className="text-xs text-muted-foreground mt-1">PDF, DOCX up to 5MB</p>
          <button className="btn-primary mt-4">Upload Resume</button>
        </div>
      </motion.div>
    </div>
  );
}
