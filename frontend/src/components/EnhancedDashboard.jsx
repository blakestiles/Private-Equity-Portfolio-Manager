import React, { useState } from 'react';
import EnhancedPortfolioCard from './EnhancedPortfolioCard';
import ActivityFeed from './ActivityFeed';
import { portfolioCompanies, portfolioSummary } from '../data/mockPortfolio';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, TrendingUp, DollarSign, Target, Search, Filter, Calendar, Users, BarChart3, LineChart, ArrowUpRight } from 'lucide-react';
import { Input } from './ui/input';

const EnhancedDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [timePeriod, setTimePeriod] = useState('YTD');

  const SummaryCard = ({ icon: Icon, label, value, gradient, subtitle, trend }) => (
    <Card className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-3 sm:p-4 md:p-5 hover:scale-[1.02] transition-all duration-300 overflow-hidden group cursor-pointer">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
      <div className={`absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br ${gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`}></div>
      
      <div className="relative flex items-start justify-between">
        <div className="flex items-start gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
          <div className={`p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] sm:text-xs text-slate-400 mb-0.5 sm:mb-1 uppercase tracking-wider font-medium truncate">{label}</p>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1 truncate">{value}</p>
            {subtitle && (
              <p className="text-[10px] sm:text-xs text-slate-500 hidden sm:block">{subtitle}</p>
            )}
          </div>
        </div>
        {trend && (
          <div className="flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-emerald-500/10 text-emerald-400 flex-shrink-0">
            <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            <span className="text-[10px] sm:text-xs font-bold">{trend}</span>
          </div>
        )}
      </div>
    </Card>
  );

  const QuickStat = ({ label, value, change, icon: Icon }) => (
    <div className="flex items-center justify-between p-3 bg-slate-800/40 rounded-lg border border-slate-700/50">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-slate-700/50">
          <Icon className="w-4 h-4 text-slate-300" />
        </div>
        <div>
          <p className="text-xs text-slate-400">{label}</p>
          <p className="text-lg font-bold text-white">{value}</p>
        </div>
      </div>
      {change && (
        <span className={`text-xs font-semibold ${
          change > 0 ? 'text-emerald-400' : 'text-red-400'
        }`}>
          {change > 0 ? '+' : ''}{change}%
        </span>
      )}
    </div>
  );

  const filteredCompanies = portfolioCompanies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.industry.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || company.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statusCounts = {
    all: portfolioCompanies.length,
    outperforming: portfolioCompanies.filter(c => c.status === 'outperforming').length,
    'on-track': portfolioCompanies.filter(c => c.status === 'on-track').length,
    attention: portfolioCompanies.filter(c => c.status === 'attention').length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-3 sm:p-4 md:p-6">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 sm:mb-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">Portfolio Dashboard</h1>
                <p className="text-xs sm:text-sm text-slate-400">Real-time performance monitoring & analytics</p>
              </div>
            </div>
            
            {/* Time Period Selector */}
            <div className="flex items-center gap-1 sm:gap-2 bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-lg p-1 w-full sm:w-auto">
              {['YTD', '1Y', '3Y', 'All'].map((period) => (
                <button
                  key={period}
                  onClick={() => setTimePeriod(period)}
                  className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    timePeriod === period
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-6">
          <SummaryCard
            icon={DollarSign}
            label="Total Portfolio Value"
            value={portfolioSummary.totalValue}
            subtitle="Across 6 active investments"
            gradient="from-emerald-500 to-teal-600"
            trend="+28.4%"
          />
          <SummaryCard
            icon={Briefcase}
            label="Total Invested"
            value={portfolioSummary.totalInvested}
            subtitle="Capital deployed"
            gradient="from-blue-500 to-cyan-600"
          />
          <SummaryCard
            icon={TrendingUp}
            label="Average IRR"
            value={portfolioSummary.averageIRR}
            subtitle="Weighted average return"
            gradient="from-violet-500 to-purple-600"
            trend="+3.2%"
          />
          <SummaryCard
            icon={Target}
            label="Portfolio Multiple"
            value={portfolioSummary.portfolioMultiple}
            subtitle="Current valuation"
            gradient="from-pink-500 to-rose-600"
            trend="+0.4x"
          />
        </div>

        {/* Quick Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
          <QuickStat label="Active Deals" value={portfolioSummary.activeDeals} icon={BarChart3} />
          <QuickStat label="Total Team" value={portfolioSummary.totalTeamSize} icon={Users} />
          <QuickStat label="Avg Growth" value="26.3%" change={4.2} icon={LineChart} />
          <QuickStat label="Exit Ready" value="2" icon={Target} />
          <QuickStat label="YTD Return" value="+31.2%" change={8.5} icon={TrendingUp} />
          <QuickStat label="New Deals" value="3" icon={Briefcase} />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Left Column - Portfolio Companies (spans 3 columns on desktop) */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="mb-4 sm:mb-6">
              <Card className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-3 sm:p-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  {/* Search */}
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      type="text"
                      placeholder="Search companies..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-emerald-500/50 text-sm"
                    />
                  </div>

                  {/* Status Filter */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
                    <Filter className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <div className="flex gap-2 flex-nowrap sm:flex-wrap">
                      {Object.entries(statusCounts).map(([status, count]) => (
                        <Badge
                          key={status}
                          onClick={() => setStatusFilter(status)}
                          className={`cursor-pointer transition-all duration-300 text-xs whitespace-nowrap ${
                            statusFilter === status
                              ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                              : 'bg-slate-800/50 text-slate-400 border-slate-700/50 hover:bg-slate-700/50'
                          }`}
                        >
                          {status === 'all' ? 'All' : 
                           status === 'outperforming' ? 'Top' :
                           status === 'on-track' ? 'Track' : 'Watch'} ({count})
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Portfolio Companies Grid */}
            {filteredCompanies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                {filteredCompanies.map((company) => (
                  <EnhancedPortfolioCard key={company.id} company={company} />
                ))}
              </div>
            ) : (
              <Card className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-8 sm:p-12 text-center">
                <p className="text-slate-400 text-sm sm:text-base">No companies found matching your criteria</p>
              </Card>
            )}
          </div>

          {/* Right Column - Activity Feed (hidden on mobile by default, can be toggled) */}
          <div className="lg:col-span-1 lg:block">
            <ActivityFeed />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs sm:text-sm text-slate-500">
            Last updated: {new Date().toLocaleString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric', 
              hour: '2-digit', 
              minute: '2-digit' 
            })} • {timePeriod} performance
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedDashboard;