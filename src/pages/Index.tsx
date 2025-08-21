import { useNavigate } from "react-router-dom";
import { CyberButton } from "@/components/ui/cyber-button";
import { Terminal, Shield, Cpu } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const challenges = Array.from({ length: 12 }, (_, i) => ({
    id: `D${i + 1}`,
    number: i + 1,
  }));

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Terminal className="h-12 w-12 text-cyber-glow animate-pulse-glow" />
            <h1 className="text-5xl font-bold text-cyber-glow">
              CTF <span className="text-cyber-glow-secondary">Grid</span>
            </h1>
            <Cpu className="h-12 w-12 text-cyber-accent animate-float" />
          </div>
          <p className="text-xl text-cyber-text-dim max-w-2xl mx-auto">
            Welcome to the Cyber Security Challenge Grid. 
            Select a challenge to test your skills in various cybersecurity domains.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Shield className="h-5 w-5 text-cyber-glow-secondary" />
            <span className="text-cyber-text-dim text-sm">
              12 Challenges Available • Progressive Difficulty
            </span>
          </div>
        </div>

        {/* Challenge Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {challenges.map((challenge) => (
              <CyberButton
                key={challenge.id}
                variant="challenge"
                size="challenge"
                onClick={() => navigate(`/challenge/${challenge.id}`)}
                className="group relative"
              >
                <span className="relative z-10 text-2xl font-bold">
                  {challenge.id}
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-glow/10 to-cyber-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CyberButton>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-16">
          <div className="cyber-border bg-cyber-surface/50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-cyber-glow mb-3">
              Challenge Categories
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-cyber-text-dim">
              <div className="flex flex-col items-center gap-2">
                <Shield className="h-6 w-6 text-cyber-glow-secondary" />
                <span>Network Security</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Terminal className="h-6 w-6 text-cyber-glow" />
                <span>Web Applications</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Cpu className="h-6 w-6 text-cyber-accent" />
                <span>Cryptography</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
