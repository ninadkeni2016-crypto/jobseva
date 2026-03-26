import { motion } from "framer-motion";
import { Send, Paperclip, Search } from "lucide-react";

const conversations = [
  { id: "1", name: "Quantum Labs", lastMessage: "Thanks for applying! We'd love to schedule an interview.", time: "2m ago", unread: 2, avatar: "Q" },
  { id: "2", name: "NovaTech HR", lastMessage: "Your application has been reviewed.", time: "1h ago", unread: 0, avatar: "N" },
  { id: "3", name: "DeepMind Labs", lastMessage: "Congratulations! You've been selected.", time: "3h ago", unread: 1, avatar: "D" },
];

const messages = [
  { id: "1", sender: "them", text: "Hi John! Thanks for applying to the Senior Frontend Engineer role.", time: "10:30 AM" },
  { id: "2", sender: "them", text: "We were impressed by your portfolio and would love to schedule a technical interview.", time: "10:31 AM" },
  { id: "3", sender: "me", text: "Thank you! I'm very excited about this opportunity. When would work best?", time: "10:45 AM" },
  { id: "4", sender: "them", text: "How about Thursday at 2 PM PST? We'll do a 45-minute technical discussion.", time: "11:00 AM" },
  { id: "5", sender: "me", text: "Thursday at 2 PM works perfectly for me!", time: "11:05 AM" },
];

export default function Messages() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-heading font-bold">
          <span className="text-primary">Messages</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[calc(100vh-220px)]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="clean-card p-4 overflow-y-auto">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-muted mb-4">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Search messages..." className="bg-transparent text-sm outline-none flex-1 text-foreground placeholder:text-muted-foreground font-body" />
          </div>
          <div className="space-y-1">
            {conversations.map((c, i) => (
              <button
                key={c.id}
                className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                  i === 0 ? "bg-primary/10 border border-primary/20" : "hover:bg-muted"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center font-heading font-bold text-sm text-primary flex-shrink-0">
                  {c.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium truncate">{c.name}</h4>
                    <span className="text-[10px] text-muted-foreground">{c.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{c.lastMessage}</p>
                </div>
                {c.unread > 0 && (
                  <span className="w-5 h-5 rounded-full bg-primary text-[10px] font-bold flex items-center justify-center text-primary-foreground flex-shrink-0">
                    {c.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="lg:col-span-2 clean-card flex flex-col">
          <div className="p-4 border-b border-border flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center font-heading font-bold text-sm text-primary">Q</div>
            <div>
              <h4 className="font-heading font-semibold text-sm">Quantum Labs</h4>
              <p className="text-xs text-success">Online</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
                  msg.sender === "me"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-muted text-foreground rounded-bl-md"
                }`}>
                  <p>{msg.text}</p>
                  <p className={`text-[10px] mt-1 ${msg.sender === "me" ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-xl hover:bg-muted transition-colors text-muted-foreground">
                <Paperclip className="w-5 h-5" />
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-all font-body"
              />
              <button className="p-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
