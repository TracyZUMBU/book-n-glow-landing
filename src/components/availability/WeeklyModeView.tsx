import { useState } from 'react';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { TimeSlotEditor } from './TimeSlotEditor';
import { DAYS_OF_WEEK, type TimeSlot } from './types';

interface WeeklyModeViewProps {
  weeklySlots: Record<number, TimeSlot[]>;
  onUpdateSlots: (dayId: number, slots: TimeSlot[]) => void;
}

export function WeeklyModeView({ weeklySlots, onUpdateSlots }: WeeklyModeViewProps) {
  const [openDays, setOpenDays] = useState<number[]>([1]); // Monday open by default

  const toggleDay = (dayId: number) => {
    setOpenDays(prev => 
      prev.includes(dayId) 
        ? prev.filter(id => id !== dayId)
        : [...prev, dayId]
    );
  };

  const handleAddSlot = (dayId: number) => {
    const currentSlots = weeklySlots[dayId] || [];
    const newSlot: TimeSlot = {
      id: `slot-${Date.now()}`,
      startTime: '09:00',
      endTime: '17:00',
    };
    onUpdateSlots(dayId, [...currentSlots, newSlot]);
  };

  const handleRemoveSlot = (dayId: number, slotId: string) => {
    const currentSlots = weeklySlots[dayId] || [];
    onUpdateSlots(dayId, currentSlots.filter(s => s.id !== slotId));
  };

  const handleUpdateSlot = (dayId: number, slotId: string, field: 'startTime' | 'endTime', value: string) => {
    const currentSlots = weeklySlots[dayId] || [];
    onUpdateSlots(dayId, currentSlots.map(s => 
      s.id === slotId ? { ...s, [field]: value } : s
    ));
  };

  return (
    <div className="space-y-4">
      <Alert className="bg-accent/10 border-accent/30">
        <Info className="h-4 w-4 text-accent" />
        <AlertDescription className="text-sm text-foreground/80">
          Ces horaires seront appliqués à tous les jours correspondants du mois.
          Vous pourrez modifier des jours spécifiques ultérieurement.
        </AlertDescription>
      </Alert>

      <div className="space-y-2">
        {DAYS_OF_WEEK.map((day) => {
          const slots = weeklySlots[day.id] || [];
          const isOpen = openDays.includes(day.id);
          const hasSlots = slots.length > 0;

          return (
            <Card key={day.id} className="overflow-hidden">
              <Collapsible open={isOpen} onOpenChange={() => toggleDay(day.id)}>
                <CollapsibleTrigger asChild>
                  <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-foreground">{day.name}</span>
                      {hasSlots && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          {slots.length} plage{slots.length > 1 ? 's' : ''}
                        </span>
                      )}
                    </div>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0 pb-4 border-t">
                    <TimeSlotEditor
                      timeSlots={slots}
                      onAdd={() => handleAddSlot(day.id)}
                      onRemove={(slotId) => handleRemoveSlot(day.id, slotId)}
                      onUpdate={(slotId, field, value) => handleUpdateSlot(day.id, slotId, field, value)}
                    />
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
