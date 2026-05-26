import { ReactNode } from 'react';
import { cn } from './utils';
import { Card, StrongCard, AccentCard, CardTitle, CardDescription, CardMeta } from './card-system';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';

export interface BentoCard {
  title: string;
  description: string;
  icon?: ReactNode;
  badge?: string;
  stats?: { label: string; value: string }[];
  cta?: { label: string; onClick: () => void };
  meta?: string;
  variant?: 'default' | 'strong' | 'accent';
}

interface BentoGrid2Props {
  cards: BentoCard[];
  mode?: 'asymmetric' | 'uniform';
  columns?: 2 | 3 | 4 | 5;
  showBadges?: boolean;
  showStats?: boolean;
  showCTA?: boolean;
  ariaLabel?: string;
  className?: string;
}

/**
 * BentoGrid2 - Universal grid system
 * 
 * Asymmetric Mode:
 * - 8-column desktop grid
 * - 6-column tablet grid
 * - Accordion on mobile
 * - 12-card repeating pattern (Wide: 4, Medium: 3, Small: 2)
 * 
 * Uniform Mode:
 * - Equal column grid
 * - Configurable columns (2-5)
 * - Responsive breakpoints
 */
export function BentoGrid2({
  cards,
  mode = 'asymmetric',
  columns = 4,
  showBadges = true,
  showStats = true,
  showCTA = true,
  ariaLabel = 'Content grid',
  className,
}: BentoGrid2Props) {
  if (mode === 'asymmetric') {
    return (
      <>
        {/* Desktop & Tablet - Asymmetric Grid */}
        <div
          className={cn('hidden md:grid gap-2 lg:gap-3', className)}
          style={{
            gridTemplateColumns: 'repeat(8, 1fr)',
          }}
          role="list"
          aria-label={ariaLabel}
        >
          {cards.map((card, index) => {
            // 12-card repeating pattern
            const patternIndex = index % 12;
            let colSpan = 2; // Small by default

            // Pattern: Wide(4), Medium(3), Small(2), Medium(3), Wide(4), Small(2), Small(2), Medium(3), Wide(4), Small(2), Medium(3), Small(2)
            if ([0, 4, 8].includes(patternIndex)) {
              colSpan = 4; // Wide
            } else if ([1, 3, 7, 10].includes(patternIndex)) {
              colSpan = 3; // Medium
            }

            const CardComponent =
              card.variant === 'strong'
                ? StrongCard
                : card.variant === 'accent'
                ? AccentCard
                : Card;

            return (
              <div
                key={index}
                style={{ gridColumn: `span ${colSpan}` }}
                role="listitem"
              >
                <CardComponent
                  spacing={colSpan === 4 ? 'large' : 'default'}
                  className="h-full flex flex-col"
                >
                  {showBadges && card.badge && (
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-small font-medium mb-3 w-fit">
                      {card.badge}
                    </span>
                  )}
                  
                  {card.icon && <div className="mb-4">{card.icon}</div>}
                  
                  <CardTitle className="mb-3">{card.title}</CardTitle>
                  <CardDescription className="flex-1">{card.description}</CardDescription>
                  
                  {showStats && card.stats && card.stats.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200">
                      {card.stats.map((stat, i) => (
                        <div key={i}>
                          <div className="font-semibold text-gray-900">{stat.value}</div>
                          <div className="text-small text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {showCTA && card.cta && (
                    <button
                      onClick={card.cta.onClick}
                      className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg hover:from-blue-700 hover:to-violet-700 transition-all w-full"
                    >
                      {card.cta.label}
                    </button>
                  )}
                  
                  {card.meta && <CardMeta className="mt-3">{card.meta}</CardMeta>}
                </CardComponent>
              </div>
            );
          })}
        </div>

        {/* Mobile - Accordion */}
        <Accordion type="single" collapsible className="md:hidden space-y-3">
          {cards.map((card, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-xl card-padding-default"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 text-left">
                  {card.icon && <div className="flex-shrink-0">{card.icon}</div>}
                  <div className="flex-1">
                    <h4 className="text-gray-900">{card.title}</h4>
                    {showBadges && card.badge && (
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-small font-medium mt-1">
                        {card.badge}
                      </span>
                    )}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3">
                <p className="text-gray-600 mb-3">{card.description}</p>
                
                {showStats && card.stats && card.stats.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 mb-3 p-3 bg-gray-50 rounded-lg">
                    {card.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="font-semibold text-gray-900">{stat.value}</div>
                        <div className="text-small text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                
                {showCTA && card.cta && (
                  <button
                    onClick={card.cta.onClick}
                    className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg hover:from-blue-700 hover:to-violet-700 transition-all"
                  >
                    {card.cta.label}
                  </button>
                )}
                
                {card.meta && <div className="text-small text-gray-500 mt-3">{card.meta}</div>}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </>
    );
  }

  // Uniform Mode
  const gridColsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
    5: 'md:grid-cols-2 lg:grid-cols-5',
  }[columns];

  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-4 md:gap-6 lg:gap-8',
        gridColsClass,
        className
      )}
      role="list"
      aria-label={ariaLabel}
    >
      {cards.map((card, index) => {
        const CardComponent =
          card.variant === 'strong'
            ? StrongCard
            : card.variant === 'accent'
            ? AccentCard
            : Card;

        return (
          <div key={index} role="listitem">
            <CardComponent spacing="default" className="h-full flex flex-col">
              {showBadges && card.badge && (
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-small font-medium mb-3 w-fit">
                  {card.badge}
                </span>
              )}
              
              {card.icon && <div className="mb-4">{card.icon}</div>}
              
              <CardTitle className="mb-3">{card.title}</CardTitle>
              <CardDescription className="flex-1">{card.description}</CardDescription>
              
              {showStats && card.stats && card.stats.length > 0 && (
                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200">
                  {card.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="font-semibold text-gray-900">{stat.value}</div>
                      <div className="text-small text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
              
              {showCTA && card.cta && (
                <button
                  onClick={card.cta.onClick}
                  className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg hover:from-blue-700 hover:to-violet-700 transition-all w-full"
                >
                  {card.cta.label}
                </button>
              )}
              
              {card.meta && <CardMeta className="mt-3">{card.meta}</CardMeta>}
            </CardComponent>
          </div>
        );
      })}
    </div>
  );
}