import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, MapPin, DollarSign, Plus, X, Lightbulb, Wand2 } from "lucide-react";

const suggestedSkills = ["MS Office", "Excel", "Tally", "Communication", "Data Entry", "SQL", "Python", "HR", "Typing", "Filing"];

export default function PostJob() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["MS Office", "Communication"]);
  const [title, setTitle] = useState("");

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl sm:text-3xl font-heading font-bold">
          Post a <span className="text-primary">New Job</span>
        </h1>
        <p className="text-muted-foreground mt-1">Create a job listing with AI-powered suggestions</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="clean-card p-6 space-y-6">
        <div>
          <label className="text-sm font-heading font-medium mb-2 block">Job Title</label>
          <div className="relative">
            <input
              type="text"
              placeholder="e.g. Back Office Executive"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors" title="AI Suggest">
              <Wand2 className="w-4 h-4" />
            </button>
          </div>
          {title.length > 3 && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-2 p-3 rounded-lg bg-primary/5 border border-primary/20 flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground">
                <span className="text-primary font-medium">AI Tip:</span> Consider adding seniority level and team context for 40% more qualified applicants
              </p>
            </motion.div>
          )}
        </div>

        <div>
          <label className="text-sm font-heading font-medium mb-2 block">Description</label>
          <textarea
            rows={5}
            placeholder="Describe the role, responsibilities, and what you're looking for..."
            className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body resize-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-heading font-medium mb-2 block">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="text" placeholder="City, State or Remote"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-all font-body"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-heading font-medium mb-2 block">Salary Range</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="text" placeholder="e.g. ₹4L – ₹7L"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-all font-body"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-warning" /> Market average: ₹3.5L – ₹6L
            </p>
          </div>
        </div>

        <div>
          <label className="text-sm font-heading font-medium mb-2 block">Job Type</label>
          <div className="flex gap-2 flex-wrap">
            {["Full-time", "Part-time", "Contract", "Freelance"].map((type) => (
              <button key={type}
                className="px-4 py-2 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/5 transition-all first:bg-primary/10 first:text-primary first:border-primary/30"
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-heading font-medium mb-2 block">Required Skills</label>
          <div className="flex flex-wrap gap-2">
            {suggestedSkills.map((skill) => (
              <button key={skill} onClick={() => toggleSkill(skill)}
                className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${
                  selectedSkills.includes(skill)
                    ? "bg-primary/10 text-primary border border-primary/30"
                    : "bg-muted text-muted-foreground border border-border hover:text-foreground"
                }`}
              >
                {selectedSkills.includes(skill) ? <X className="w-3 h-3 inline mr-1" /> : <Plus className="w-3 h-3 inline mr-1" />}
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button className="btn-primary flex-1 py-3 text-center">Publish Job</button>
          <button className="px-6 py-3 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground transition-colors">Save Draft</button>
        </div>
      </motion.div>
    </div>
  );
}
