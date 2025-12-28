import { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isSameDay, addDays, startOfWeek } from 'date-fns';
import { fr } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { DayEditorPanel } from './DayEditorPanel';
import type { TimeSlot, MockReservation } from './types';

interface CalendarModeViewProps {
  currentMonth: Date;
  calendarSlots: Record<string, TimeSlot[]>;
  onUpdateSlots: (dateKey: string, slots: TimeSlot[]) => void;
  onDuplicateToWeekdays: (sourceDate: string, weekdays: number[]) => void;
  mockReservations: Record<string, MockReservation[]>;
}

const WEEKDAY_HEADERS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

export function CalendarModeView({ 
  currentMonth, 
  calendarSlots, 
  onUpdateSlots,
  onDuplicateToWeekdays,
  mockReservations
}: CalendarModeViewProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Get the first day of the week for the month start (Monday-based)
  const firstDayOfWeek = startOfWeek(monthStart, { weekStartsOn: 1 });
  const startPadding = Math.floor((monthStart.getTime() - firstDayOfWeek.getTime()) / (1000 * 60 * 60 * 24));

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleClosePanel = () => {
    setSelectedDate(null);
  };

  const getDateKey = (date: Date) => format(date, 'yyyy-MM-dd');

  return (
    <div className="space-y-4">
      {/* Calendar Grid */}
      <div className="bg-card rounded-lg border overflow-hidden">
        {/* Weekday headers */}
        <div className="grid grid-cols-7 bg-muted/50">
          {WEEKDAY_HEADERS.map((day) => (
            <div key={day} className="p-2 text-center text-xs font-medium text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7">
          {/* Empty cells for padding */}
          {Array.from({ length: startPadding }).map((_, i) => (
            <div key={`pad-${i}`} className="aspect-square border-t border-r last:border-r-0" />
          ))}

          {/* Actual days */}
          {daysInMonth.map((date) => {
            const dateKey = getDateKey(date);
            const slots = calendarSlots[dateKey] || [];
            const hasSlots = slots.length > 0;
            const reservations = mockReservations[dateKey] || [];
            const hasReservations = reservations.length > 0;
            const isSelected = selectedDate && isSameDay(date, selectedDate);
            const isToday = isSameDay(date, new Date());

            return (
              <button
                key={dateKey}
                onClick={() => handleDayClick(date)}
                className={cn(
                  "aspect-square border-t border-r last:border-r-0 p-1 sm:p-2 flex flex-col items-center justify-start transition-colors relative",
                  "hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset",
                  isSelected && "bg-primary/10 ring-2 ring-primary ring-inset",
                  isToday && "bg-accent/10"
                )}
              >
                <span className={cn(
                  "text-xs sm:text-sm font-medium",
                  isToday && "text-accent font-bold",
                  isSelected && "text-primary"
                )}>
                  {format(date, 'd')}
                </span>
                <div className="flex gap-0.5 mt-1">
                  {hasSlots && (
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary" />
                  )}
                  {hasReservations && (
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-highlight" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span>Disponibilité définie</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-highlight" />
          <span>Réservations existantes</span>
        </div>
      </div>

      {/* Day Editor Panel */}
      {selectedDate && (
        <DayEditorPanel
          date={selectedDate}
          timeSlots={calendarSlots[getDateKey(selectedDate)] || []}
          reservations={mockReservations[getDateKey(selectedDate)] || []}
          onUpdateSlots={(slots) => onUpdateSlots(getDateKey(selectedDate), slots)}
          onDuplicateToWeekdays={(weekdays) => onDuplicateToWeekdays(getDateKey(selectedDate), weekdays)}
          onClose={handleClosePanel}
          currentMonth={currentMonth}
        />
      )}
    </div>
  );
}
