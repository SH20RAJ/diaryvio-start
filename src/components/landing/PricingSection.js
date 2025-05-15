'use client';

import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

export default function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for trying out our service',
      features: [
        '5 AI thumbnails per month',
        'Basic customization',
        'Standard quality exports',
        'Community support'
      ]
    },
    {
      name: 'Pro',
      price: '$19',
      period: '/month',
      popular: true,
      description: 'Best for content creators',
      features: [
        'Unlimited AI thumbnails',
        'Advanced customization',
        'HD quality exports',
        'Priority support',
        'Custom branding',
        'Analytics dashboard'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large teams and businesses',
      features: [
        'Everything in Pro',
        'Custom API access',
        'Dedicated support',
        'Team collaboration',
        'Advanced analytics',
        'Custom integrations'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-indigo-400 text-transparent bg-clip-text">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl ${plan.popular ? 'bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border-violet-500/50' : 'bg-white/5 border-white/10'} backdrop-blur-lg border transform hover:scale-105 transition-all duration-300`}
            >
              {plan.popular && (
                <span className="px-3 py-1 text-sm bg-violet-500 text-white rounded-full mb-4 inline-block">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.period && (
                  <span className="text-slate-400 ml-1">{plan.period}</span>
                )}
              </div>
              <p className="text-slate-300 mb-6">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-slate-300">
                    <FiCheck className="w-5 h-5 text-violet-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${plan.popular ? 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-lg shadow-violet-500/30' : 'bg-white/10 hover:bg-white/20 text-white'}`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
