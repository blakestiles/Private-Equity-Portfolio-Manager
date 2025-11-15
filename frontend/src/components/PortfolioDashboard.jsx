import React from 'react';
import PortfolioCard from './PortfolioCard';
import { portfolioCompanies, portfolioSummary } from '../data/mockPortfolio';
import { Card } from './ui/card';
import { Briefcase, TrendingUp, DollarSign, Target } from 'lucide-react';

const PortfolioDashboard = () => {
  const SummaryCard = ({ icon: Icon, label, value, gradient }) => (
    <Card className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-5 hover:scale-[1.02] transition-all duration-300 overflow-hidden group">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
      <div className="relative flex items-center gap-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${gradient}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-sm text-slate-400 mb-1">{label}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-1">Portfolio Overview</h1>
              <p className="text-slate-400">Real-time performance monitoring</p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <SummaryCard
            icon={DollarSign}
            label="Total Portfolio Value"
            value={portfolioSummary.totalValue}
            gradient="from-emerald-500 to-teal-600"
          />
          <SummaryCard
            icon={Briefcase}
            label="Total Invested"
            value={portfolioSummary.totalInvested}
            gradient="from-blue-500 to-cyan-600"
          />
          <SummaryCard
            icon={TrendingUp}
            label="Average IRR"
            value={portfolioSummary.averageIRR}
            gradient="from-violet-500 to-purple-600"
          />
          <SummaryCard
            icon={Target}
            label="Portfolio Multiple"
            value={portfolioSummary.portfolioMultiple}
            gradient="from-pink-500 to-rose-600"
          />
        </div>

        {/* Portfolio Companies Grid */}
        <div className="grid grid-cols-3 gap-6">
          {portfolioCompanies.map((company) => (
            <PortfolioCard key={company.id} company={company} />
          ))}
        </div>

        {/* Footer timestamp */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            Last updated: {new Date().toLocaleString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric', 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDashboard;