import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp, TrendingDown, Building2, DollarSign, BarChart3, TrendingUp as GrowthIcon, Target, Calendar, Users, Shield, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import MiniSparkline from './MiniSparkline';
import CircularProgress from './CircularProgress';

const EnhancedPortfolioCard = ({ company }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusConfig = {
    outperforming: { label: 'Outperforming', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    'on-track': { label: 'On Track', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    attention: { label: 'Needs Attention', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' }
  };

  const riskConfig = {
    low: { label: 'Low Risk', color: '#10b981' },
    medium: { label: 'Medium Risk', color: '#f59e0b' },
    high: { label: 'High Risk', color: '#ef4444' }
  };

  const sparklineColor = company.status === 'outperforming' ? '#10b981' : 
                         company.status === 'on-track' ? '#3b82f6' : '#f59e0b';

  const MetricItem = ({ icon: Icon, label, value, change, trend }) => (
    <div className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.02] group">
      <div className="flex items-center gap-2.5">
        <div className="p-1.5 rounded-lg bg-slate-700/50 group-hover:scale-110 transition-transform">
          <Icon className="w-3.5 h-3.5 text-slate-300" />
        </div>
        <div>
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{label}</p>
          <p className="text-base font-bold text-white">{value}</p>
        </div>
      </div>
      <div className={`flex items-center gap-1 px-2 py-0.5 rounded-md ${
        trend === 'up' ? 'bg-emerald-500/10 text-emerald-400' : 
        trend === 'down' ? 'bg-red-500/10 text-red-400' : 'bg-slate-500/10 text-slate-400'
      }`}>
        {trend === 'up' ? (
          <TrendingUp className="w-3 h-3" />
        ) : trend === 'down' ? (
          <TrendingDown className="w-3 h-3" />
        ) : (
          <span className="w-3 h-0.5 bg-slate-400 rounded"></span>
        )}
        <span className="text-xs font-semibold">{Math.abs(change)}%</span>
      </div>
    </div>
  );

  const returnPercentage = ((parseFloat(company.currentValue.replace(/[$M]/g, '')) / 
                            parseFloat(company.investmentAmount.replace(/[$M]/g, '')) - 1) * 100).toFixed(1);

  return (
    <div className="group relative">
      {/* Enhanced glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${company.color} rounded-2xl opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-700`}></div>
      
      <Card className="relative bg-gradient-to-br from-slate-900/90 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] h-full">
        {/* Animated top gradient accent */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${company.color} group-hover:h-2 transition-all duration-300`}></div>
        
        {/* Decorative corner element */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${company.color} opacity-5 blur-3xl`}></div>
        
        <div className="p-5">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${company.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-0.5">{company.name}</h3>
                <p className="text-xs text-slate-400">{company.industry}</p>
              </div>
            </div>
            <Badge className={`${statusConfig[company.status].color} border px-2.5 py-0.5 text-xs`}>
              {statusConfig[company.status].label}
            </Badge>
          </div>

          {/* Investment Details */}
          <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-slate-800/30 rounded-lg border border-slate-700/30">
            <div>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Invested</p>
              <p className="text-sm font-bold text-white">{company.investmentAmount}</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Current Value</p>
              <p className="text-sm font-bold text-emerald-400">{company.currentValue}</p>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-3 h-3 text-slate-400" />
              <div>
                <p className="text-[10px] text-slate-400">Acquired</p>
                <p className="text-xs font-semibold text-white">{company.acquisitionDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-slate-400" />
              <div>
                <p className="text-[10px] text-slate-400">Holding</p>
                <p className="text-xs font-semibold text-white">{company.holdingPeriod}</p>
              </div>
            </div>
          </div>

          {/* Performance Chart */}
          <div className="mb-4 p-3 bg-slate-800/30 rounded-lg border border-slate-700/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-400 font-medium">Revenue Trend (12M)</span>
              <span className={`text-xs font-bold ${
                company.metrics.revenue.trend === 'up' ? 'text-emerald-400' : 'text-red-400'
              }`}>
                {company.metrics.revenue.trend === 'up' ? '+' : ''}{company.metrics.revenue.change}%
              </span>
            </div>
            <MiniSparkline data={company.sparklineData} color={sparklineColor} width={260} height={50} />
          </div>

          {/* Core Metrics Grid */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <MetricItem
              icon={DollarSign}
              label="Revenue"
              value={company.metrics.revenue.value}
              change={company.metrics.revenue.change}
              trend={company.metrics.revenue.trend}
            />
            <MetricItem
              icon={BarChart3}
              label="EBITDA"
              value={company.metrics.ebitda.value}
              change={company.metrics.ebitda.change}
              trend={company.metrics.ebitda.trend}
            />
            <MetricItem
              icon={GrowthIcon}
              label="Growth"
              value={company.metrics.growthRate.value}
              change={company.metrics.growthRate.change}
              trend={company.metrics.growthRate.trend}
            />
            <MetricItem
              icon={Target}
              label="IRR"
              value={company.metrics.irr.value}
              change={company.metrics.irr.change}
              trend={company.metrics.irr.trend}
            />
          </div>

          {/* Expandable Section */}
          {isExpanded && (
            <div className="mb-3 space-y-2 animate-in slide-in-from-top-2 duration-300">
              <div className="grid grid-cols-2 gap-2">
                <MetricItem
                  icon={BarChart3}
                  label="Margin"
                  value={company.metrics.margin.value}
                  change={company.metrics.margin.change}
                  trend={company.metrics.margin.trend}
                />
                <MetricItem
                  icon={Clock}
                  label="Runway"
                  value={company.metrics.runway.value}
                  change={company.metrics.runway.change}
                  trend={company.metrics.runway.trend}
                />
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-3 gap-2 p-3 bg-slate-800/30 rounded-lg border border-slate-700/30">
                <div className="text-center">
                  <Users className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                  <p className="text-xs font-bold text-white">{company.teamSize}</p>
                  <p className="text-[9px] text-slate-400">Team</p>
                </div>
                <div className="text-center">
                  <Shield className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                  <p className="text-xs font-bold text-white">{company.stage}</p>
                  <p className="text-[9px] text-slate-400">Stage</p>
                </div>
                <div className="text-center">
                  <CircularProgress 
                    percentage={Math.min(parseFloat(returnPercentage), 100)} 
                    size={40} 
                    strokeWidth={4}
                    color={riskConfig[company.riskLevel].color}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Footer with Valuation and Expand Button */}
          <div className="pt-3 border-t border-slate-700/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-400">Valuation Multiple</span>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">{company.metrics.valuation.value}</span>
                <span className={`text-xs font-semibold ${
                  company.metrics.valuation.trend === 'up' ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {company.metrics.valuation.trend === 'up' ? '+' : ''}{company.metrics.valuation.change}x
                </span>
              </div>
            </div>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group/btn"
            >
              <span className="text-xs font-medium text-slate-300 group-hover/btn:text-white transition-colors">
                {isExpanded ? 'Show Less' : 'Show More Details'}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-slate-400 group-hover/btn:text-white transition-colors" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover/btn:text-white transition-colors" />
              )}
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EnhancedPortfolioCard;