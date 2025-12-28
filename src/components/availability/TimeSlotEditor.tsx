import { Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { TimeSlot } from './types';

interface TimeSlotEditorProps {
  timeSlots: TimeSlot[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, field: 'startTime' | 'endTime', value: string) => void;
}

export function TimeSlotEditor({ timeSlots, onAdd, onRemove, onUpdate }: TimeSlotEditorProps) {
  return (
    <div className="space-y-3">
      {timeSlots.length === 0 ? (
        <p className="text-sm text-muted-foreground italic">Aucune plage horaire définie</p>
      ) : (
        timeSlots.map((slot) => (
          <div key={slot.id} className="flex items-center gap-2">
            <Input
              type="time"
              value={slot.startTime}
              onChange={(e) => onUpdate(slot.id, 'startTime', e.target.value)}
              className="flex-1 text-sm h-10"
            />
            <span className="text-muted-foreground text-sm">à</span>
            <Input
              type="time"
              value={slot.endTime}
              onChange={(e) => onUpdate(slot.id, 'endTime', e.target.value)}
              className="flex-1 text-sm h-10"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onRemove(slot.id)}
              className="h-10 w-10 text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))
      )}
      <Button
        variant="outline"
        size="sm"
        onClick={onAdd}
        className="w-full mt-2 border-dashed"
      >
        <Plus className="h-4 w-4 mr-2" />
        Ajouter une plage horaire
      </Button>
    </div>
  );
}
