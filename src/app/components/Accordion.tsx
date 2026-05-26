import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface AccordionItem {
  id: string;
  title: string;
  content: string | ReactNode;
  icon?: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  type?: 'single' | 'multiple';
  className?: string;
}

export function Accordion({ items, type = 'single', className = '' }: AccordionProps) {
  const rootProps = type === 'single' 
    ? {
        type: 'single' as const,
        defaultValue: items[0]?.id,
        collapsible: true,
      }
    : {
        type: 'multiple' as const,
      };

  return (
    <AccordionPrimitive.Root
      {...rootProps}
      className={`space-y-4 ${className}`}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <AccordionPrimitive.Item
            value={item.id}
            className="border border-gray-200/60 rounded-xl overflow-hidden hover:border-gray-900 transition-all"
            style={{
              background: 'rgba(255, 255, 255, 0.55)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <AccordionPrimitive.Header>
              <AccordionPrimitive.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-white/40 transition-colors group">
                <div className="flex items-center gap-4">
                  {item.icon && (
                    <div className="icon-minimal flex-shrink-0">
                      {item.icon}
                    </div>
                  )}
                  <span className="font-bold text-gray-900 text-lg">{item.title}</span>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-600 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
              <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                {item.content}
              </div>
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        </motion.div>
      ))}
    </AccordionPrimitive.Root>
  );
}