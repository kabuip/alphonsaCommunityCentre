import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '@/components/site/PageHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { base44 } from '@/api/base44Client';
import { isValidEmail } from '@/lib/formValidation';
import HumanCheck from '@/components/site/HumanCheck';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isHuman, setIsHuman] = useState(false);
  const [captchaResetKey, setCaptchaResetKey] = useState(0);

  const handleEmailChange = (value) => {
    setForm({ ...form, email: value });
    if (emailError && isValidEmail(value)) setEmailError('');
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
    setSending(true);
    try {
      await base44.functions.invoke('notifyContactMessage', { data: form });
      setSubmitted(true);
      toast.success('Thank you — your message has reached the sisters.');
      setForm({ name: '', email: '', subject: '', message: '' });
      setCaptchaResetKey((k) => k + 1);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      toast.error('Sorry — your message could not be sent. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We Would Love to Hear From You"
        description="Whether you wish to visit, volunteer, donate or simply share a prayer — our doors and hearts are open."
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="text-xs md:text-sm uppercase tracking-wider font-heading font-bold text-accent mb-3">
                Reach Us
              </div>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-primary leading-tight uppercase tracking-tight">
                Come Visit, Write or Call
              </h2>
              <div className="w-12 h-1 bg-accent mt-5" />
            </div>

            {[
              { icon: MapPin, label: 'Address', value: 'St. Alphonsa Community Centre - Ruai\nRuai, Nairobi, Kenya' },
              { icon: Phone, label: 'Telephone', value: '+254713721425\n+254705798772' },
              { icon: Mail, label: 'Email', value: 'info@saintaphonsacommunitycentre.org' },
              { icon: Clock, label: 'Visiting Hours', value: 'Mon – Sat · 9:00 am – 4:00 pm' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-heading font-bold text-accent mb-1">
                    {item.label}
                  </div>
                  <div className="text-base whitespace-pre-line leading-snug text-foreground/85">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-6 border-t border-border bg-secondary/60 p-6">
              <p className="font-heading font-bold text-lg text-primary leading-snug">
                "Whatever you did for one of these least brothers of mine, you did for me."
              </p>
              <p className="text-xs uppercase tracking-wider font-heading font-bold text-accent mt-2">
                Matthew 25:40
              </p>
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-secondary/60 p-6 md:p-10 space-y-5 shadow-sm border-t-4 border-primary"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs uppercase tracking-wider font-heading font-bold text-accent">
                  Your Name
                </Label>
                <Input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="h-12 bg-white border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs uppercase tracking-wider font-heading font-bold text-accent">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  onBlur={() => {
                    if (form.email && !isValidEmail(form.email)) {
                      setEmailError('Please enter a valid email address.');
                    }
                  }}
                  aria-invalid={!!emailError}
                  className={`h-12 bg-white ${emailError ? 'border-destructive' : 'border-border'}`}
                />
                {emailError && (
                  <p className="text-xs text-destructive mt-1">{emailError}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-xs uppercase tracking-wider font-heading font-bold text-accent">
                Subject
              </Label>
              <Input
                id="subject"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="h-12 bg-white border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-xs uppercase tracking-wider font-heading font-bold text-accent">
                Your Message
              </Label>
              <Textarea
                id="message"
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-white border-border resize-none"
              />
            </div>

            <HumanCheck onVerifiedChange={setIsHuman} resetSignal={captchaResetKey} />

            <Button
              type="submit"
              size="lg"
              disabled={submitted || sending || !isHuman}
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-heading font-black uppercase tracking-wide rounded h-14 px-10"
            >
              {submitted ? (
                <><CheckCircle2 className="w-4 h-4 mr-2" /> Message Sent</>
              ) : sending ? (
                <>Sending...</>
              ) : (
                <>Send Message <Send className="w-4 h-4 ml-2" /></>
              )}
            </Button>
          </motion.form>
        </div>
      </section>
    </>
  );
}