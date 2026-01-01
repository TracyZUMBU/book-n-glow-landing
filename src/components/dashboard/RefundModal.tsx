import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface RefundModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  maxAmount: number;
  title?: string;
  description?: string;
  submitLabel?: string;
}

export function RefundModal({
  open,
  onOpenChange,
  maxAmount,
  title = 'Demander un remboursement',
  description = 'Indiquez le montant et la raison du remboursement.',
  submitLabel = 'Envoyer la demande',
}: RefundModalProps) {
  const [amount, setAmount] = useState<string>('');
  const [reason, setReason] = useState<string>('');

  const handleSubmit = () => {
    // UI only - no logic
    console.log('Refund request:', { amount, reason });
    onOpenChange(false);
    setAmount('');
    setReason('');
  };

  const handleCancel = () => {
    onOpenChange(false);
    setAmount('');
    setReason('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="refund-amount">Montant (€)</Label>
            <Input
              id="refund-amount"
              type="number"
              placeholder={`Max: ${maxAmount.toFixed(2)} €`}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0"
              max={maxAmount}
              step="0.01"
            />
            <p className="text-xs text-muted-foreground">
              Montant maximum remboursable : {maxAmount.toFixed(2)} €
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="refund-reason">Raison du remboursement</Label>
            <Textarea
              id="refund-reason"
              placeholder="Décrivez la raison de cette demande..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={4}
            />
          </div>
        </div>
        
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={handleCancel}>
            Annuler
          </Button>
          <Button onClick={handleSubmit} disabled={!amount || !reason}>
            {submitLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
