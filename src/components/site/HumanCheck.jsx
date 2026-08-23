import { useEffect, useState, useCallback } from 'react';
import { RefreshCw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Simple human verification: user solves a small math sum.
// Parent owns the "verified" state via `onVerifiedChange(bool)`.
export default function HumanCheck({ onVerifiedChange, resetSignal }) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [answer, setAnswer] = useState('');

  const regenerate = useCallback(() => {
    setA(Math.floor(Math.random() * 8) + 2); // 2..9
    setB(Math.floor(Math.random() * 8) + 1); // 1..8
    setAnswer('');
  }, []);

  useEffect(() => {
    regenerate();
  }, [regenerate, resetSignal]);

  useEffect(() => {
    const ok = answer.trim() !== '' && Number(answer) === a + b;
    onVerifiedChange?.(ok);
  }, [answer, a, b, onVerifiedChange]);

  return (
    <div className="space-y-2">
      <Label htmlFor="human-check" className="text-xs uppercase tracking-wider font-heading font-bold text-accent">
        Human verification
      </Label>
      <div className="flex items-center gap-3">
        <div className="px-4 h-12 flex items-center bg-white border border-border font-heading font-bold text-primary select-none">
          {a} + {b} = ?
        </div>
        <Input
          id="human-check"
          type="text"
          inputMode="numeric"
          required
          value={answer}
          onChange={(e) => setAnswer(e.target.value.replace(/[^0-9-]/g, ''))}
          placeholder="Your answer"
          className="h-12 bg-white border-border max-w-[180px]"
          aria-label="Human verification answer"
        />
        <button
          type="button"
          onClick={regenerate}
          className="w-12 h-12 flex items-center justify-center bg-white border border-border text-primary hover:bg-secondary transition-colors"
          aria-label="Get a new question"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>
      <p className="text-xs text-muted-foreground">
        Please solve the sum above so we know you're human.
      </p>
    </div>
  );
}