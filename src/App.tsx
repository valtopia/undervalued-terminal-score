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
import Crypto from "@/pages/Crypto";
import Alerts from "@/pages/Alerts";
import StockAnalysis from "@/pages/StockAnalysis";
import NotFound from "@/pages/NotFound";
import { ProtectedRoute } from '@/components/Auth/ProtectedRoute';

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
                        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                        <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
                        <Route path="/alerts" element={<Alerts />} />
                        <Route path="/screener" element={<ProtectedRoute><Screener /></ProtectedRoute>} />
                        <Route path="/pricing" element={<ProtectedRoute><Pricing /></ProtectedRoute>} />
                        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
                        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
                        <Route path="/crypto" element={<Crypto />} />
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
