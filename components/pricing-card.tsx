'use client'

import { useState } from 'react'
import { Tool, PlanType, DurationType, durationLabels } from '@/lib/tools-data'
import { ContactClient } from './contact-client'
import { Check, X, Crown, Home, Sparkles } from 'lucide-react'

interface PricingCardProps {
  tool: Tool
}

const durations: DurationType[] = ['1-month', '3-months', '6-months', 'lifetime']

export function PricingCard({ tool }: PricingCardProps) {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('pro')
  const [selectedDuration, setSelectedDuration] = useState<DurationType>('1-month')

  const currentPrice = tool.pricing[selectedPlan][selectedDuration]
  const planInfo = tool.plans[selectedPlan]
  const isLifetime = selectedDuration === 'lifetime'

  // Calculate monthly equivalent for multi-month plans
  const getMonthlyEquivalent = (duration: DurationType, plan: PlanType) => {
    const price = tool.pricing[plan][duration]
    switch (duration) {
      case '3-months': return price / 3
      case '6-months': return price / 6
      default: return null
    }
  }

  // Calculate savings percentage vs 1-month
  const getSavings = (duration: DurationType, plan: PlanType) => {
    if (duration === '1-month') return null
    const monthlyPrice = tool.pricing[plan]['1-month']
    const totalIfMonthly = duration === '3-months' ? monthlyPrice * 3
      : duration === '6-months' ? monthlyPrice * 6
      : monthlyPrice * 12
    const actualPrice = tool.pricing[plan][duration]
    return Math.round(((totalIfMonthly - actualPrice) / totalIfMonthly) * 100)
  }

  const monthlyEquiv = getMonthlyEquivalent(selectedDuration, selectedPlan)
  const savings = getSavings(selectedDuration, selectedPlan)

  return (
    <div className="space-y-5">
      {/* Plan Toggle */}
      <div className="relative flex rounded-xl bg-muted/50 p-1 border border-muted/30">
        {(['home', 'pro'] as PlanType[]).map((plan) => (
          <button
            key={plan}
            onClick={() => setSelectedPlan(plan)}
            className={`
              relative flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-300
              ${selectedPlan === plan
                ? plan === 'pro'
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25'
                  : 'bg-card text-foreground shadow-md'
                : 'text-muted-foreground hover:text-foreground'
              }
            `}
          >
            {plan === 'home' ? (
              <Home className="w-4 h-4" />
            ) : (
              <Crown className="w-4 h-4" />
            )}
            {plan === 'home' ? 'Home' : 'Pro'}
            {plan === 'pro' && selectedPlan !== 'pro' && (
              <span className="absolute -top-2 -right-1 px-1.5 py-0.5 text-[10px] font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full">
                TỐT NHẤT
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Pricing Card */}
      <div className={`
        relative p-6 rounded-xl border transition-all duration-300 overflow-hidden
        ${selectedPlan === 'pro'
          ? 'bg-gradient-to-br from-card via-card to-violet-950/10 border-violet-500/30 shadow-lg shadow-violet-500/5'
          : 'bg-card border-muted/20'
        }
      `}>
        {/* Pro badge glow effect */}
        {selectedPlan === 'pro' && (
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        )}

        {/* Plan name & description */}
        <div className="relative mb-5">
          <div className="flex items-center gap-2 mb-1">
            {selectedPlan === 'pro' && <Sparkles className="w-4 h-4 text-violet-400" />}
            <h3 className="text-lg font-bold text-foreground">{planInfo.name}</h3>
          </div>
          <p className="text-xs text-muted-foreground">{planInfo.description}</p>
        </div>

        {/* Duration Selector */}
        <div className="relative grid grid-cols-2 gap-2 mb-6">
          {durations.map((duration) => {
            const dSavings = getSavings(duration, selectedPlan)
            return (
              <button
                key={duration}
                onClick={() => setSelectedDuration(duration)}
                className={`
                  relative py-2.5 px-3 rounded-lg text-xs font-medium transition-all duration-200 border
                  ${selectedDuration === duration
                    ? selectedPlan === 'pro'
                      ? 'bg-violet-600/15 border-violet-500/50 text-foreground shadow-sm'
                      : 'bg-primary/10 border-primary/30 text-foreground shadow-sm'
                    : 'bg-transparent border-muted/20 text-muted-foreground hover:border-muted/40 hover:text-foreground'
                  }
                `}
              >
                <span className="block">{durationLabels[duration]}</span>
                {dSavings && dSavings > 0 && (
                  <span className={`
                    block text-[10px] mt-0.5 font-semibold
                    ${selectedDuration === duration
                      ? selectedPlan === 'pro' ? 'text-emerald-400' : 'text-emerald-500'
                      : 'text-emerald-500/70'
                    }
                  `}>
                    Tiết kiệm {dSavings}%
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Price Display */}
        <div className="relative mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-extrabold tracking-tight text-foreground">
              ${currentPrice.toFixed(2)}
            </span>
            {!isLifetime && (
              <span className="text-sm text-muted-foreground">
                /{selectedDuration === '1-month' ? 'tháng' : selectedDuration === '3-months' ? '3 tháng' : '6 tháng'}
              </span>
            )}
          </div>
          {isLifetime && (
            <p className="text-xs text-muted-foreground mt-1">Thanh toán 1 lần • Sở hữu vĩnh viễn</p>
          )}
          {monthlyEquiv && (
            <p className="text-xs text-muted-foreground mt-1">
              ≈ ${monthlyEquiv.toFixed(2)}/tháng
              {savings && <span className="text-emerald-500 font-semibold ml-1">(giảm {savings}%)</span>}
            </p>
          )}
        </div>

        {/* Contact Button */}
        <div className="relative mb-6">
          <ContactClient />
        </div>

        {/* Features List */}
        <div className="relative pt-4 border-t border-muted/20 space-y-2.5">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Bao gồm những gì
          </p>
          {planInfo.features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2.5 text-sm transition-opacity duration-200 ${
                feature.included ? 'text-foreground' : 'text-muted-foreground/50'
              }`}
            >
              {feature.included ? (
                <div className={`
                  flex-shrink-0 w-4.5 h-4.5 rounded-full flex items-center justify-center
                  ${selectedPlan === 'pro' ? 'text-violet-400' : 'text-emerald-500'}
                `}>
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </div>
              ) : (
                <div className="flex-shrink-0 w-4.5 h-4.5 rounded-full flex items-center justify-center text-muted-foreground/30">
                  <X className="w-3.5 h-3.5" strokeWidth={2} />
                </div>
              )}
              <span className={feature.included ? '' : 'line-through'}>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
