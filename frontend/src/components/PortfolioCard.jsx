import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp, TrendingDown, Building2, DollarSign, BarChart3, TrendingUp as GrowthIcon, Target } from 'lucide-react';

const PortfolioCard = ({ company }) => {
  const statusConfig = {
    outperforming: { label: 'Outperforming', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    'on-track': { label: 'On Track', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    attention: { label: 'Needs Attention', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' }
  };

  const MetricItem = ({ icon: Icon, label, value, change, trend }) => (
    <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-slate-700/50">
          <Icon className="w-4 h-4 text-slate-300" />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-medium">{label}</p>
          <p className="text-lg font-bold text-white">{value}</p>
        </div>
      </div>
      <div className={`flex items-center gap-1 px-2 py-1 rounded-md ${
        trend === 'up' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
      }`}>
        {trend === 'up' ? (
          <TrendingUp className="w-3 h-3" />
        ) : (
          <TrendingDown className="w-3 h-3" />
        )}
        <span className="text-xs font-semibold">{Math.abs(change)}%</span>
      </div>
    </div>
  );

  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${company.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}></div>
      
      <Card className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] h-full">
        {/* Top gradient accent */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${company.color}`}></div>
        
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${company.color} shadow-lg`}>
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{company.name}</h3>
                <p className="text-sm text-slate-400">{company.industry}</p>
              </div>
            </div>
            <Badge className={`${statusConfig[company.status].color} border px-3 py-1`}>
              {statusConfig[company.status].label}
            </Badge>
          </div>

          {/* Metrics Grid */}
          <div className="space-y-2.5">
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
              label="Growth Rate"
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

          {/* Valuation Badge at bottom */}
          <div className="mt-4 pt-4 border-t border-slate-700/50">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Valuation Multiple</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">{company.metrics.valuation.value}</span>
                <span className={`text-xs font-semibold ${
                  company.metrics.valuation.trend === 'up' ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {company.metrics.valuation.trend === 'up' ? '+' : ''}{company.metrics.valuation.change}x
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PortfolioCard;