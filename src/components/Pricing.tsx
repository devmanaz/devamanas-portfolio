import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, AlertCircle } from 'lucide-react';

const periods = [
  { label: '1 Month', value: 1, discount: 0 },
  { label: '3 Months', value: 3, discount: 0.10, badge: '-10%' },
  { label: '6 Months', value: 6, discount: 0.20, badge: '-20%' },
  { label: '12 Months', value: 12, discount: 0.35, badge: '-35%' },
];

const formatINR = (n: number) => n.toLocaleString('en-IN');

interface Feature {
  text: string;
  bold?: string;
  included: boolean;
  warn?: boolean;
}

interface PricingPlan {
  name: string;
  subtitle: string;
  basePrice: number;
  isPro?: boolean;
  isStatic?: boolean;
  staticLabel?: string;
  features: Feature[];
  cta: string;
}

const plans: PricingPlan[] = [
  {
    name: 'Basic Growth',
    subtitle: 'Social Media Content',
    basePrice: 8500,
    features: [
      { text: 'every Week', bold: '4 Posters', included: true },
      { text: 'every Week', bold: '1 Reel/Video', included: true },
      { text: 'High-Quality Visuals', included: true },
      { text: 'Festival & Event Posts', included: true },
      { text: 'Self-Managed Posting', included: false },
    ],
    cta: 'Choose Basic',
  },
  {
    name: 'Pro Management',
    subtitle: 'Complete Social Media Handling',
    basePrice: 12500,
    isPro: true,
    features: [
      { text: 'every Week', bold: '4 Posters', included: true },
      { text: 'every Week', bold: '1 Reel/Video', included: true },
      { text: '(LinkedIn, Facebook, Instagram)', bold: 'Full Handling', included: true },
      { text: 'Caption & Hashtag Strategy', included: true },
      { text: 'Dedicated Account Management', included: true },
    ],
    cta: 'Choose Pro',
  },
  {
    name: 'Website Dev',
    subtitle: 'IT Services',
    basePrice: 8000,
    isStatic: true,
    staticLabel: 'Basic Plan',
    features: [
      { text: 'Timeline (Max)', bold: '1 Month', included: true },
      { text: 'Responsive Design', included: true },
      { text: 'SEO Friendly Structure', included: true },
      { text: 'Contact Form Integration', included: true },
      { text: 'Advanced Features Extra', included: true, warn: true },
    ],
    cta: 'Start Web Project',
  },
];

const Pricing = () => {
  const [activePeriod, setActivePeriod] = useState(1);

  const getPrice = (plan: PricingPlan) => {
    if (plan.isStatic) return plan.basePrice;
    const period = periods.find(p => p.value === activePeriod);
    const discount = period?.discount || 0;
    return Math.round(plan.basePrice * (1 - discount));
  };

  const getBilledText = (plan: PricingPlan) => {
    if (plan.isStatic) return '+ 18% GST';
    const price = getPrice(plan);
    if (activePeriod === 1) {
      return `Billed ₹${formatINR(plan.basePrice)} + 18% GST`;
    }
    const total = price * activePeriod;
    return `Total for ${activePeriod} Month(s): ₹${formatINR(total)} + 18% GST`;
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-accent uppercase tracking-wider mb-2"
          >
            Pricing
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Transparent Pricing
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg"
          >
            No hidden fees. Choose the plan that fits your growth stage.
          </motion.p>
        </div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1.5">
            {periods.map((period) => (
              <button
                key={period.value}
                onClick={() => setActivePeriod(period.value)}
                className={`relative px-4 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${activePeriod === period.value
                    ? 'bg-white text-black font-bold shadow-lg'
                    : 'text-white/60 hover:text-white/80'
                  }`}
              >
                {period.label}
                {period.badge && (
                  <span className="absolute -top-3 -right-1 bg-emerald-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {period.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`glass-panel relative rounded-3xl p-6 sm:p-8 flex flex-col ${plan.isPro
                  ? '!bg-gradient-to-b !from-[rgba(139,92,246,0.1)] !to-transparent !border-2 !border-accent/30 shadow-[0_10px_40px_rgba(139,92,246,0.2)]'
                  : ''
                }`}
            >
              {/* Recommended Badge */}
              {plan.isPro && (
                <span className="absolute top-5 right-5 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Recommended
                </span>
              )}

              {/* Plan Name & Subtitle */}
              <h4 className="text-xl sm:text-2xl font-bold text-white">{plan.name}</h4>
              <p className="text-white/50 text-sm mt-1">{plan.subtitle}</p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mt-6">
                <span className="text-white/60 text-xl font-semibold">₹</span>
                <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  {formatINR(getPrice(plan))}
                </span>
                <span className="text-white/40 text-sm ml-1">
                  {plan.isStatic ? plan.staticLabel : '/month'}
                </span>
              </div>

              {/* Billed Text */}
              <p className="text-emerald-400 text-xs font-medium mt-2 mb-6">
                {getBilledText(plan)}
              </p>

              {/* Features */}
              <ul className="space-y-3 flex-grow mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    {feature.warn ? (
                      <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    ) : feature.included ? (
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-white/20 mt-0.5 flex-shrink-0" />
                    )}
                    <span className={feature.included ? 'text-white/70' : 'text-white/30'}>
                      {feature.bold && (
                        <span className="font-semibold text-white">{feature.bold} </span>
                      )}
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`w-full py-3.5 rounded-full text-center font-semibold text-sm transition-all duration-300 block ${plan.isPro
                    ? 'bg-white text-black hover:shadow-lg hover:shadow-white/10 hover:-translate-y-0.5'
                    : 'border border-white/20 text-white hover:bg-white/10 hover:border-white/40'
                  }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
