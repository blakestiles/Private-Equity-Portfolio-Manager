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
    <Card className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-3 sm:p-4 md:p-5 h-full">
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600">
          <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </div>
        <h3 className="text-base sm:text-lg font-bold text-white">Recent Activity</h3>
      </div>

      <div className="space-y-2 sm:space-y-3">
        {recentActivity.map((activity) => {
          const config = iconConfig[activity.type];
          const Icon = config.icon;

          return (
            <div
              key={activity.id}
              className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 hover:border-slate-600/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div className={`p-1.5 sm:p-2 rounded-lg ${config.bg} flex-shrink-0`}>
                <Icon className={`w-3 h-3 sm:w-4 sm:h-4 ${config.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-white mb-0.5 sm:mb-1 truncate">{activity.company}</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mb-0.5 sm:mb-1 line-clamp-2">{activity.action}</p>
                <p className="text-[9px] sm:text-[10px] text-slate-500">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-3 sm:mt-4 py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 text-xs sm:text-sm font-medium text-slate-300 hover:text-white">
        View All Activity
      </button>
    </Card>
  );
};

export default ActivityFeed;