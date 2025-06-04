import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Landing from "@/pages/Landing";
import Dashboard from "@/pages/Dashboard";
import Analytics from "@/pages/Analytics";
import Screener from "@/pages/Screener";
import Pricing from "@/pages/Pricing";
import Settings from "@/pages/Settings";
import About from "@/pages/About";
import Portfolio from "@/pages/Portfolio";
import Alerts from "@/pages/Alerts";
import StockAnalysis from "@/pages/StockAnalysis";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <SidebarProvider>
          <Toaster />
          <Sonner />
          <Router>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route
                path="/*"
                element={
                  <div className="flex">
                    <AppSidebar />
                    <main className="flex-1">
                      <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/alerts" element={<Alerts />} />
                        <Route path="/screener" element={<Screener />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/stock/:symbol" element={<StockAnalysis />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </main>
                  </div>
                }
              />
            </Routes>
          </Router>
        </SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
