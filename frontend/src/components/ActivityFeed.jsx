import React from 'react';
import { Card } from './ui/card';
import { Bell, CheckCircle2, AlertTriangle, Info } from 'lucide-react';
import { recentActivity } from '../data/mockPortfolio';

const ActivityFeed = () => {
  const iconConfig = {
    success: { icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    warning: { icon: AlertTriangle, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    info: { icon: Info, color: 'text-blue-400', bg: 'bg-blue-500/10' }
  };

  return (
    <Card className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-5 h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600">
          <Bell className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white">Recent Activity</h3>
      </div>

      <div className="space-y-3">
        {recentActivity.map((activity) => {
          const config = iconConfig[activity.type];
          const Icon = config.icon;

          return (
            <div
              key={activity.id}
              className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 hover:border-slate-600/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div className={`p-2 rounded-lg ${config.bg}`}>
                <Icon className={`w-4 h-4 ${config.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white mb-1">{activity.company}</p>
                <p className="text-xs text-slate-400 mb-1">{activity.action}</p>
                <p className="text-[10px] text-slate-500">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-4 py-2 px-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 text-sm font-medium text-slate-300 hover:text-white">
        View All Activity
      </button>
    </Card>
  );
};

export default ActivityFeed;