import React, { useState } from 'react';
import { Header } from '@/components/Layout/Header';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertCircle,
  User,
  Settings as SettingsIcon,
  Lock,
  Mail,
  Monitor,
  Clock,
  Trash2,
  LogOut,
  Download,
  FileText,
  Shield
} from 'lucide-react';

const SettingsSection: React.FC<{
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, icon, children }) => (
  <div className="bg-black/50 border border-terminal-green/30 rounded-lg p-6 hover:border-terminal-green/60 transition-all duration-300">
    <div className="flex items-center space-x-2 mb-6 text-terminal-green">
      {icon}
      <h2 className="text-lg font-mono">{title}</h2>
    </div>
    <div className="space-y-6">
      {children}
    </div>
  </div>
);

const SettingsRow: React.FC<{
  label: string;
  children: React.ReactNode;
  description?: string;
}> = ({ label, children, description }) => (
  <div className="flex items-center justify-between py-2">
    <div>
      <div className="text-terminal-green font-mono text-sm">{label}</div>
      {description && (
        <div className="text-terminal-grey text-xs mt-1">{description}</div>
      )}
    </div>
    {children}
  </div>
);

// Mock data for active sessions
const activeSessions = [
  {
    device: 'MacBook Pro',
    location: 'New York, USA',
    lastActive: '2 minutes ago',
    ip: '192.168.1.1'
  },
  {
    device: 'iPhone 13',
    location: 'London, UK',
    lastActive: '1 hour ago',
    ip: '192.168.1.2'
  }
];

const Settings = () => {
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [browserNotifs, setBrowserNotifs] = useState(true);
  const [animations, setAnimations] = useState(true);
  const [fullNames, setFullNames] = useState(false);
  const [uvScoreThreshold, setUvScoreThreshold] = useState([7]);

  return (
    <div className="min-h-screen bg-black text-terminal-green scanline">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar 
            isExpanded={true}
            onToggle={() => {}}
            isMobile={false}
          />
          <SidebarInset className="flex-1">
            <Header isMobile={false} />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              {/* Title Section */}
              <div className="text-center mb-16">
                <h1 className="text-4xl font-mono font-bold terminal-glow mb-4">
                  VALTOPIA SETTINGS
                </h1>
                <p className="text-terminal-grey text-lg font-mono">
                  Tune Your Terminal
                </p>
              </div>

              {/* System Info Bar */}
              <div className="mb-12 flex justify-between text-xs text-terminal-grey font-mono bg-black/30 p-4 rounded-lg border border-terminal-green/20">
                <span className="terminal-glow">SETTINGS MODULE v1.0.0</span>
                <span>LAST UPDATE: {new Date().toLocaleTimeString()}</span>
              </div>

              {/* Settings Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Alerts Section */}
                <SettingsSection title="ALERTS" icon={<AlertCircle className="h-5 w-5" />}>
                  <SettingsRow 
                    label="Email Notifications"
                    description="Receive alerts in your email"
                  >
                    <Switch
                      checked={emailNotifs}
                      onCheckedChange={setEmailNotifs}
                      className="terminal-switch"
                    />
                  </SettingsRow>

                  <SettingsRow
                    label="Browser Notifications"
                    description="Push notifications in your browser"
                  >
                    <Switch
                      checked={browserNotifs}
                      onCheckedChange={setBrowserNotifs}
                      className="terminal-switch"
                    />
                  </SettingsRow>

                  <SettingsRow label="Check Frequency">
                    <Select defaultValue="4h">
                      <SelectTrigger className="w-32 terminal-select">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1h">1 hour</SelectItem>
                        <SelectItem value="4h">4 hours</SelectItem>
                        <SelectItem value="12h">12 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </SettingsRow>

                  <SettingsRow
                    label="Minimum UV Score"
                    description="Minimum score to receive alerts"
                  >
                    <div className="w-48">
                      <Slider
                        value={uvScoreThreshold}
                        onValueChange={setUvScoreThreshold}
                        max={10}
                        min={5}
                        step={0.1}
                        className="terminal-slider"
                      />
                      <div className="text-right mt-1 text-terminal-grey text-xs">
                        {uvScoreThreshold[0]}
                      </div>
                    </div>
                  </SettingsRow>
                </SettingsSection>

                {/* Account Section */}
                <SettingsSection title="ACCOUNT" icon={<User className="h-5 w-5" />}>
                  <SettingsRow label="Email Address">
                    <div className="flex items-center space-x-2">
                      <input
                        type="email"
                        value="user@valtopia.com"
                        className="bg-black border border-terminal-green/30 rounded px-3 py-1 text-sm font-mono text-terminal-green focus:border-terminal-green focus:outline-none"
                      />
                      <button className="terminal-button">
                        <Mail className="h-4 w-4" />
                      </button>
                    </div>
                  </SettingsRow>

                  <SettingsRow label="Change Password">
                    <button className="terminal-button">
                      CHANGE
                    </button>
                  </SettingsRow>

                  <SettingsRow label="Account Type">
                    <span className="text-terminal-amber font-mono">PRO</span>
                  </SettingsRow>

                  <SettingsRow
                    label="Delete Account"
                    description="This action cannot be undone"
                  >
                    <button className="terminal-button text-terminal-red border-terminal-red/30 hover:border-terminal-red">
                      <Trash2 className="h-4 w-4 mr-2" />
                      DELETE
                    </button>
                  </SettingsRow>
                </SettingsSection>

                {/* Preferences Section */}
                <SettingsSection title="PREFERENCES" icon={<SettingsIcon className="h-5 w-5" />}>
                  <SettingsRow label="Terminal Font">
                    <Select defaultValue="fira">
                      <SelectTrigger className="w-40 terminal-select">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="courier">Courier</SelectItem>
                        <SelectItem value="fira">Fira Code</SelectItem>
                        <SelectItem value="jetbrains">JetBrains Mono</SelectItem>
                      </SelectContent>
                    </Select>
                  </SettingsRow>

                  <SettingsRow
                    label="Glow Animations"
                    description="Glow effects on interactive elements"
                  >
                    <Switch
                      checked={animations}
                      onCheckedChange={setAnimations}
                      className="terminal-switch"
                    />
                  </SettingsRow>

                  <SettingsRow
                    label="Show Full Names"
                    description="Full names vs ticker symbols"
                  >
                    <Switch
                      checked={fullNames}
                      onCheckedChange={setFullNames}
                      className="terminal-switch"
                    />
                  </SettingsRow>

                  <SettingsRow label="Default Screener Order">
                    <Select defaultValue="uvscore">
                      <SelectTrigger className="w-40 terminal-select">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="uvscore">UV Score</SelectItem>
                        <SelectItem value="sector">Sector</SelectItem>
                        <SelectItem value="price">Price</SelectItem>
                      </SelectContent>
                    </Select>
                  </SettingsRow>
                </SettingsSection>

                {/* Security Section */}
                <SettingsSection title="SECURITY" icon={<Lock className="h-5 w-5" />}>
                  <div className="space-y-4 mb-6">
                    <div className="text-sm text-terminal-grey mb-2">Active Sessions</div>
                    {activeSessions.map((session, index) => (
                      <div
                        key={index}
                        className="border border-terminal-green/20 rounded p-3 text-xs"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Monitor className="h-4 w-4 text-terminal-green" />
                            <span className="text-terminal-green">{session.device}</span>
                          </div>
                          <span className="text-terminal-grey">{session.ip}</span>
                        </div>
                        <div className="flex items-center justify-between text-terminal-grey">
                          <span>{session.location}</span>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{session.lastActive}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <button className="terminal-button w-full">
                      <LogOut className="h-4 w-4 mr-2" />
                      SIGN OUT OTHER SESSIONS
                    </button>

                    <button className="terminal-button w-full">
                      <Download className="h-4 w-4 mr-2" />
                      EXPORT DATA (.JSON)
                    </button>

                    <div className="flex justify-between text-xs text-terminal-grey pt-4">
                      <button className="flex items-center hover:text-terminal-green">
                        <FileText className="h-4 w-4 mr-1" />
                        Terms of Service
                      </button>
                      <button className="flex items-center hover:text-terminal-green">
                        <Shield className="h-4 w-4 mr-1" />
                        Privacy Policy
                      </button>
                    </div>
                  </div>
                </SettingsSection>
              </div>

              {/* Footer Status */}
              <div className="mt-16 pt-4 border-t border-terminal-green/30 text-xs text-terminal-grey font-mono">
                <div className="flex justify-between items-center">
                  <div>
                    Settings Engine v1.0.1 • All Systems Operational
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>CACHE: 128KB</span>
                    <span className="text-terminal-green">READY</span>
                  </div>
                </div>
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Settings; 