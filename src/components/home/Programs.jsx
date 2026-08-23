import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HandHeart, GraduationCap, Stethoscope, Sprout, Home, HeartHandshake } from 'lucide-react';

const PROGRAMS = [
  {
    icon: HandHeart,
    title: 'Special Needs Care',
    description: 'Round-the-clock care for children with cerebral palsy and severe disabilities — feeding, hygiene, mobility and love.',
  },
  {
    icon: Stethoscope,
    title: 'Physiotherapy',
    description: 'Daily physiotherapy and occupational therapy sessions to improve mobility, strength and independence.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Adapted learning programs so every child — regardless of ability — has the dignity of an education.',
  },
  {
    icon: Home,
    title: 'Shelter & Nutrition',
    description: 'A warm home, three nourishing meals a day, clothing and the simple joys of family life.',
  },
  {
    icon: Sprout,
    title: 'Self-Sustenance',
    description: 'Gardens, fish-farming and small-scale agriculture help sustain the community and teach life skills.',
  },
  {
    icon: HeartHandshake,
    title: 'Spiritual Care',
    description: 'Prayer, sacraments and formation — nurturing the soul alongside the body and mind.',
  },
];

export default function Programs() {
  return (
    <section className="py-20 md:py-28 bg-secondary/70">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs md:text-sm uppercase tracking-wider font-heading font-bold text-accent mb-4">
            What We Do
          </div>
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-primary leading-tight tracking-tight uppercase">
            The Many Faces of Care
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-6" />
          <p className="mt-6 text-base md:text-lg text-foreground/75 leading-relaxed">
            Ours is a ministry of presence — expressed through daily acts that restore
            dignity, health and hope to the children entrusted to us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
                <program.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-xl text-primary mb-3 uppercase tracking-tight">
                {program.title}
              </h3>
              <p className="text-foreground/75 leading-relaxed">{program.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 font-heading font-bold uppercase tracking-wide text-accent hover:gap-3 transition-all"
          >
            Explore Our Work →
          </Link>
        </div>
      </div>
    </section>
  );
}