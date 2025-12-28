import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { MONTHS } from './types';

interface MonthTabsProps {
  selectedMonth: number;
  selectedYear: number;
  onSelectMonth: (month: number, year: number) => void;
}

export function MonthTabs({ selectedMonth, selectedYear, onSelectMonth }: MonthTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  // Generate next 6 months
  const months = Array.from({ length: 6 }, (_, i) => {
    const date = new Date(currentYear, currentMonth + i);
    return {
      month: date.getMonth(),
      year: date.getFullYear(),
      label: MONTHS[date.getMonth()],
    };
  });

  // Scroll to selected month on mount
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const selectedIndex = months.findIndex(
        m => m.month === selectedMonth && m.year === selectedYear
      );
      if (selectedIndex > 0) {
        const scrollAmount = selectedIndex * 100; // Approximate width per tab
        container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div 
      ref={scrollRef}
      className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
    >
      {months.map(({ month, year, label }) => {
        const isSelected = month === selectedMonth && year === selectedYear;
        const isCurrent = month === currentMonth && year === currentYear;

        return (
          <button
            key={`${month}-${year}`}
            onClick={() => onSelectMonth(month, year)}
            className={cn(
              "flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              isSelected
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted hover:bg-muted/80 text-foreground",
              isCurrent && !isSelected && "ring-1 ring-accent"
            )}
          >
            {label}
            {year !== currentYear && (
              <span className="ml-1 text-xs opacity-70">{year}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
