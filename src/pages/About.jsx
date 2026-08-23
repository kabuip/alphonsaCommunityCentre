import { motion } from 'framer-motion';
import PageHero from '@/components/site/PageHero';
import { Flower2, Cross, HeartHandshake, Sparkles } from 'lucide-react';

const VALUES = [
  { icon: Cross, title: 'Humility', text: 'We bend low to serve — finding greatness in the smallest acts of love.' },
  { icon: HeartHandshake, title: 'Compassion', text: 'To feel with those who suffer, and to bring them gentle relief.' },
  { icon: Flower2, title: 'Dignity', text: 'Every specially abled child bears the image of God.' },
  { icon: Sparkles, title: 'Joy', text: 'Laughter, song and gratitude as our daily prayer.' },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Small Community With a Vast Heart"
        description="We are the FRANCISCAN CLARIST SISTERS of Alphonsa Community — consecrated to the service of the most vulnerable children of God."
        image="https://media.base44.com/images/public/user_69b3d0e247c41e851133a1a2/278b266b0_IMG_1422.jpg"
      />

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="text-xs md:text-sm uppercase tracking-wider font-heading font-bold text-accent mb-3">
              Our Story
            </div>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-primary leading-tight uppercase tracking-tight">
              Born of Mercy
            </h2>
            <div className="w-12 h-1 bg-accent mt-5" />
          </div>
          <div className="lg:col-span-3 space-y-4 text-base md:text-lg leading-relaxed text-foreground/80">
            <p>
              The Alphonsa Community began as the quiet response of a few sisters to a great
              need — specially abled children forgotten by society, abandoned at clinics, or
              hidden away at home because of their disabilities.
            </p>
            <p>
              What started with one child, one mattress and one prayer has grown into a
              thriving home where these children of God are welcomed, healed, educated and
              raised — not as charity cases, but as treasured members of a family.
            </p>
            <p>
              Inspired by Saint Francis and Saint Clare of Assisi, we live a simple,
              consecrated life of humility, poverty and joy — devoting our days and nights
              to the children in our care.
            </p>
          </div>
        </div>
      </section>

      {/* Franciscan Inspiration */}
      <section className="py-20 md:py-28 bg-secondary/70">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="aspect-[4/5] overflow-hidden rounded"
          >
            <img
              src="https://media.base44.com/images/public/user_69b3d0e247c41e851133a1a2/cbba4fc11_IMG_1406.jpg"
              alt="Marian grotto"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div>
            <div className="text-xs md:text-sm uppercase tracking-wider font-heading font-bold text-accent mb-3">
              Our Inspiration
            </div>
            <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-primary leading-tight mb-6 uppercase tracking-tight">
              In the Footsteps of Francis &amp; Clare
            </h2>
            <div className="w-12 h-1 bg-accent mb-6" />
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground/80">
              <p>
                Saint Francis of Assisi embraced the leper the world feared, and called him
                brother. Saint Clare gathered her sisters in radical poverty and joy — a
                sanctuary of healing prayer.
              </p>
              <p>
                Like Francis, we kneel before the wounded; like Clare, we keep watch in
                adoration so that our service may flow from contemplation. The children in
                our care are for us the living face of Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-primary text-white p-10 md:p-12 shadow-md">
            <div className="text-xs md:text-sm uppercase tracking-wider font-heading font-bold text-gold mb-3">
              Our Mission
            </div>
            <h3 className="font-heading font-black text-2xl md:text-3xl leading-tight mb-4 uppercase tracking-tight">
              To Serve With Humility, Compassion and Joy
            </h3>
            <div className="w-10 h-1 bg-gold mb-5" />
            <p className="text-white/85 leading-relaxed mb-4">
              Inspired by Saint Francis and Saint Clare, we serve specially abled children
              — providing rehabilitation, education, protection and spiritual nourishment.
            </p>
            <p className="text-white/85 leading-relaxed">
              Ours is a ministry of presence. Through therapy and learning, safe shelter
              and the sacraments, we walk with each child so body, mind and soul may flourish.
            </p>
          </div>
          <div className="bg-accent text-white p-10 md:p-12 shadow-md">
            <div className="text-xs md:text-sm uppercase tracking-wider font-heading font-bold text-white mb-3">
              Our Vision
            </div>
            <h3 className="font-heading font-black text-2xl md:text-3xl leading-tight mb-4 uppercase tracking-tight">
              To Reveal God's Love and Hope
            </h3>
            <div className="w-10 h-1 bg-white mb-5" />
            <p className="text-white/90 leading-relaxed mb-4">
              To reveal God's love and hope to specially abled children through a nurturing
              community of healing, acceptance and empowerment.
            </p>
            <p className="text-white/90 leading-relaxed">
              We dream of a world where every specially abled child is seen, celebrated and
              empowered to live the fullness of the life God has given them.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-secondary/70">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs md:text-sm uppercase tracking-wider font-heading font-bold text-accent mb-3">
              Our Values
            </div>
            <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-primary uppercase tracking-tight">
              The Spirit That Moves Us
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 text-center shadow-sm border-t-4 border-accent"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-accent/10 text-accent flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-black text-lg text-primary mb-3 uppercase tracking-tight">
                  {v.title}
                </h4>
                <p className="text-foreground/75 text-[15px] leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}