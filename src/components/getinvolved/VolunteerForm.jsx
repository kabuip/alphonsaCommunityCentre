import { useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Users, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { isValidEmail } from '@/lib/formValidation';
import HumanCheck from '@/components/site/HumanCheck';

const INTERESTS = [
  { value: 'caregiving', label: 'Caregiving & being with the children' },
  { value: 'teaching', label: 'Teaching & education' },
  { value: 'medical', label: 'Medical / physiotherapy' },
  { value: 'skills', label: 'Professional skills (admin, IT, trades...)' },
  { value: 'prayer', label: 'Prayer & spiritual support' },
  { value: 'other', label: 'Something else' },
];

export default function VolunteerForm() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isHuman, setIsHuman] = useState(false);

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (key === 'email' && emailError && isValidEmail(value)) setEmailError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(form.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    if (!isHuman) {
      toast.error('Please complete the human verification.');
      return;
    }
    setSubmitting(true);
    await base44.entities.Volunteer.create(form);
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="w-14 h-14 mx-auto rounded-full bg-accent/10 text-accent flex items-center justify-center mb-5">
            <Users className="w-6 h-6" />
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">— Volunteer With Us —</div>
          <h2 className="font-heading text-4xl md:text-5xl font-light leading-[1.1] mb-5">
            Lend your <span className="italic">hands and heart</span>.
          </h2>
          <p className="text-muted-foreground font-light text-[17px] max-w-2xl mx-auto leading-relaxed">
            Leave us your details and tell us how you'd like to help. One of our sisters will reach out to you personally.
          </p>
        </motion.div>

        {submitted ? (
          <div className="bg-background border border-border p-12 text-center">
            <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-5" />
            <h3 className="font-heading text-3xl font-light mb-3">Thank you.</h3>
            <p className="text-muted-foreground font-light leading-relaxed max-w-md mx-auto">
              We've received your message and one of our sisters will be in touch soon. May God bless your generous heart.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-background border border-border p-8 md:p-12 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="full_name">Full name *</Label>
                <Input
                  id="full_name"
                  required
                  value={form.full_name}
                  onChange={(e) => update('full_name', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  onBlur={() => {
                    if (form.email && !isValidEmail(form.email)) {
                      setEmailError('Please enter a valid email address.');
                    }
                  }}
                  aria-invalid={!!emailError}
                  className={emailError ? 'border-destructive' : ''}
                />
                {emailError && (
                  <p className="text-xs text-destructive">{emailError}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="interest">How would you like to help? *</Label>
                <Select
                  value={form.interest}
                  onValueChange={(v) => update('interest', v)}
                  required
                >
                  <SelectTrigger id="interest">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {INTERESTS.map((i) => (
                      <SelectItem key={i.value} value={i.value}>
                        {i.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Tell us more (optional)</Label>
              <Textarea
                id="message"
                rows={4}
                placeholder="Share your availability, skills, or anything else you'd like us to know..."
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
              />
            </div>

            <HumanCheck onVerifiedChange={setIsHuman} />

            <Button
              type="submit"
              size="lg"
              disabled={submitting || !form.interest || !isHuman}
              className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground rounded-full h-13 px-10"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
                </>
              ) : (
                'Send My Details'
              )}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}