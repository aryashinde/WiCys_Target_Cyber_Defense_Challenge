import { useParams, useNavigate } from "react-router-dom";
import { CyberButton } from "@/components/ui/cyber-button";
import { ArrowLeft, Shield, Terminal, Zap } from "lucide-react";

const challengeData = {
  D1: {
    title: "Network Reconnaissance",
    difficulty: "Beginner",
    description: "Learn the basics of network scanning and enumeration techniques.",
    objectives: [
      "Perform network discovery",
      "Identify open ports and services",
      "Extract system information"
    ],
    hints: ["Use nmap for port scanning", "Check common ports first", "Look for banner grabbing opportunities"]
  },
  D2: {
    title: "Web Application Analysis",
    difficulty: "Beginner",
    description: "Analyze web applications for common vulnerabilities.",
    objectives: [
      "Inspect web application structure",
      "Find hidden directories",
      "Identify input validation flaws"
    ],
    hints: ["Check robots.txt", "Use directory brute forcing", "Test for SQL injection"]
  },
  D3: {
    title: "Cryptographic Challenges",
    difficulty: "Intermediate",
    description: "Solve cryptographic puzzles and decode encrypted messages.",
    objectives: [
      "Decrypt encoded messages",
      "Identify cipher types",
      "Break weak encryption"
    ],
    hints: ["Try Caesar cipher first", "Look for frequency analysis patterns", "Check for base64 encoding"]
  },
  D4: {
    title: "Binary Exploitation",
    difficulty: "Advanced",
    description: "Exploit binary vulnerabilities and gain system access.",
    objectives: [
      "Analyze binary structure",
      "Find buffer overflow vulnerabilities",
      "Execute privilege escalation"
    ],
    hints: ["Use GDB for debugging", "Check for stack canaries", "Look for ROP gadgets"]
  },
  D5: {
    title: "Digital Forensics",
    difficulty: "Intermediate",
    description: "Investigate digital evidence and recover hidden data.",
    objectives: [
      "Analyze file systems",
      "Recover deleted files",
      "Extract metadata information"
    ],
    hints: ["Use file carving techniques", "Check file signatures", "Analyze network packets"]
  },
  D6: {
    title: "Reverse Engineering",
    difficulty: "Advanced",
    description: "Reverse engineer software to understand its functionality.",
    objectives: [
      "Disassemble binary code",
      "Understand program flow",
      "Extract hidden algorithms"
    ],
    hints: ["Use IDA Pro or Ghidra", "Look for string references", "Analyze function calls"]
  },
  D7: {
    title: "Social Engineering",
    difficulty: "Beginner",
    description: "Understand social engineering techniques and defense mechanisms.",
    objectives: [
      "Identify phishing attempts",
      "Analyze social media intelligence",
      "Create awareness campaigns"
    ],
    hints: ["Check email headers", "Verify sender identity", "Look for urgency tactics"]
  },
  D8: {
    title: "Wireless Security",
    difficulty: "Intermediate",
    description: "Assess wireless network security and identify vulnerabilities.",
    objectives: [
      "Scan for wireless networks",
      "Analyze wireless protocols",
      "Test encryption strength"
    ],
    hints: ["Use airodump-ng", "Check for WPS vulnerabilities", "Analyze handshake packets"]
  },
  D9: {
    title: "Mobile Security",
    difficulty: "Intermediate",
    description: "Analyze mobile applications and identify security flaws.",
    objectives: [
      "Reverse engineer APK files",
      "Analyze mobile traffic",
      "Find insecure data storage"
    ],
    hints: ["Use jadx for decompilation", "Check AndroidManifest.xml", "Analyze shared preferences"]
  },
  D10: {
    title: "Cloud Security",
    difficulty: "Advanced",
    description: "Assess cloud infrastructure security and misconfigurations.",
    objectives: [
      "Identify cloud misconfigurations",
      "Analyze IAM policies",
      "Test container security"
    ],
    hints: ["Check S3 bucket permissions", "Analyze CloudTrail logs", "Test for SSRF vulnerabilities"]
  },
  D11: {
    title: "Industrial Control Systems",
    difficulty: "Advanced",
    description: "Understand ICS/SCADA security and potential attack vectors.",
    objectives: [
      "Analyze industrial protocols",
      "Identify SCADA vulnerabilities",
      "Assess physical security"
    ],
    hints: ["Study Modbus protocol", "Check for default credentials", "Analyze HMI interfaces"]
  },
  D12: {
    title: "Advanced Persistent Threats",
    difficulty: "Expert",
    description: "Detect and analyze sophisticated attack campaigns.",
    objectives: [
      "Identify APT indicators",
      "Analyze attack patterns",
      "Develop detection strategies"
    ],
    hints: ["Study attack frameworks", "Analyze IOCs", "Use threat intelligence"]
  }
};

const Challenge = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const challenge = id ? challengeData[id as keyof typeof challengeData] : null;

  if (!challenge) {
    return (
      <div className="min-h-screen bg-background cyber-grid flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cyber-glow mb-4">Challenge Not Found</h1>
          <CyberButton variant="back" onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Grid
          </CyberButton>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "text-cyber-glow-secondary";
      case "Intermediate": return "text-cyber-glow";
      case "Advanced": return "text-cyber-accent";
      case "Expert": return "text-red-500";
      default: return "text-cyber-text";
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return <Shield className="h-5 w-5" />;
      case "Intermediate": return <Terminal className="h-5 w-5" />;
      case "Advanced": return <Zap className="h-5 w-5" />;
      case "Expert": return <Zap className="h-5 w-5 text-red-500" />;
      default: return <Shield className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <CyberButton variant="back" onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Grid
          </CyberButton>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="cyber-border bg-cyber-surface rounded-lg p-8 cyber-glow">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-4xl font-bold text-cyber-glow">
                Challenge {id}
              </h1>
              <div className={`flex items-center gap-2 ${getDifficultyColor(challenge.difficulty)}`}>
                {getDifficultyIcon(challenge.difficulty)}
                <span className="font-semibold">{challenge.difficulty}</span>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-cyber-text mb-4">
              {challenge.title}
            </h2>

            <p className="text-cyber-text-dim mb-8 text-lg leading-relaxed">
              {challenge.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-cyber-bg/50 rounded-lg p-6 border border-cyber-border">
                <h3 className="text-xl font-semibold text-cyber-glow mb-4 flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  Objectives
                </h3>
                <ul className="space-y-3">
                  {challenge.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3 text-cyber-text">
                      <span className="text-cyber-glow font-mono text-sm mt-1">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-cyber-bg/50 rounded-lg p-6 border border-cyber-border">
                <h3 className="text-xl font-semibold text-cyber-glow-secondary mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Hints
                </h3>
                <ul className="space-y-3">
                  {challenge.hints.map((hint, index) => (
                    <li key={index} className="flex items-start gap-3 text-cyber-text-dim">
                      <span className="text-cyber-glow-secondary font-mono text-sm mt-1">
                        →
                      </span>
                      {hint}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-cyber-bg/30 rounded-lg border border-cyber-border-bright/30">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-cyber-glow rounded-full animate-pulse-glow"></div>
                <span className="text-cyber-glow font-semibold">Challenge Status: Ready</span>
              </div>
              <p className="text-cyber-text-dim text-sm">
                This challenge environment is ready for deployment. 
                Connect to your assigned instance to begin the challenge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;