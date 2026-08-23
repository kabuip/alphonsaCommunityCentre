import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PageHero from '@/components/site/PageHero';

const IMAGES = [
  // Our Children
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/48a795791_IMG_1104.jpg', caption: 'Our children gathered together', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/83df4496f_IMG_1111.jpg', caption: 'Joyful moments', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/e710d96c6_IMG_1114.jpg', caption: 'Bright smiles', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/b907a4755_IMG_1121.jpg', caption: 'Companions in care', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/34571fe9b_IMG_1122.jpg', caption: 'A moment of laughter', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/f30e67ac8_IMG_1123.jpg', caption: 'Quiet presence', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/90441f384_IMG_1128.jpg', caption: 'Together in the day room', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/f5ac46b5a_IMG_1131.jpg', caption: 'A young face of hope', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/e5d56292b_IMG_1138.jpg', caption: 'In thoughtful repose', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/e3d73473c_IMG_1145.jpg', caption: 'Friendship', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/837d41173_IMG_1151.jpg', caption: 'Smiles that light the room', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/1c506309e_IMG_1153.jpg', caption: 'Side by side', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/b784b6075_IMG_1158.jpg', caption: 'In our care', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/35c05ad0a_IMG_1162.jpg', caption: 'Each one cherished', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/7ccecaf1b_IMG_1164.jpg', caption: 'A gentle gaze', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/ed33a4638_IMG_1165.jpg', caption: 'Companionship', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/bbe7e990c_IMG_1169.jpg', caption: 'Looking up in wonder', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/f7efb44b7_IMG_1170.jpg', caption: 'Joy shared', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/e2b3d054d_IMG_1173.jpg', caption: 'A radiant smile', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/6bc342b19_IMG_1178.jpg', caption: 'In quiet contemplation', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/1b4b76790_IMG_1181.jpg', caption: 'Held with love', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/f788a478c_IMG_1185.jpg', caption: 'Resting at home', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/932d7ef95_IMG_1188.jpg', caption: 'Therapy session', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/17d668941_IMG_1190.jpg', caption: 'Together with sister', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/0fa7eddaf_IMG_1191.jpg', caption: 'Engaged and attentive', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/31ccf0a02_IMG_1192.jpg', caption: 'A guiding hand', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/9446759dc_IMG_1194.jpg', caption: 'Care and connection', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/c6cb680fb_IMG_1197.jpg', caption: 'Listening together', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/030f25390_IMG_1199.jpg', caption: 'Engaged in learning', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/7f6ca1b5c_IMG_1200.jpg', caption: 'Friends together', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/b3f1407fe_IMG_1202.jpg', caption: 'Curiosity', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/5cb83ee0f_IMG_1203.jpg', caption: 'Peaceful rest', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/d433a9bea_IMG_1207.jpg', caption: 'A beautiful smile', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/302a6c344_IMG_1209.jpg', caption: 'A bright face', category: 'Our Children' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/56c29495f_IMG_1211.jpg', caption: 'Companions', category: 'Our Children' },

  // Buildings & Grounds
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/d3aef50c8__MG_1427.jpg', caption: 'Our home seen from the fields', category: 'Buildings & Grounds' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/fde1bfda9__MG_1345.jpg', caption: 'St. Monica residence', category: 'Buildings & Grounds' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/39c69285c__MG_1343.jpg', caption: 'A sister at the doorway', category: 'Buildings & Grounds' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/2bf398c10__MG_1332.jpg', caption: 'St. Alphonsa Community Centre', category: 'Buildings & Grounds' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/38b0ac26a__MG_1330.jpg', caption: 'St. Alphonsa, pray for us', category: 'Buildings & Grounds' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/bbfbac5ba__MG_1325.jpg', caption: 'The verandah of our community centre', category: 'Buildings & Grounds' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/ad4cc3a79__MG_1323.jpg', caption: 'The community centre entrance', category: 'Buildings & Grounds' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/550ee5669__MG_1318.jpg', caption: 'Saint Alphonsa watches over us', category: 'Buildings & Grounds' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/b1a2131c2__MG_1316.jpg', caption: 'A quiet walkway', category: 'Buildings & Grounds' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/432883391__MG_1315.jpg', caption: 'Our community grounds', category: 'Buildings & Grounds' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/b1137ed47__MG_1309.jpg', caption: 'Welcome to our home', category: 'Buildings & Grounds' },

  // Farm & Garden
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/a897ff2d2__MG_1342.jpg', caption: 'Our vegetable gardens', category: 'Farm & Garden' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/d60402fa8__MG_1339.jpg', caption: 'Fresh greens for the family', category: 'Farm & Garden' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/6e356505c__MG_1337.jpg', caption: 'Rows of swiss chard', category: 'Farm & Garden' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/e8c38a90a__MG_1334.jpg', caption: 'Healthy greens up close', category: 'Farm & Garden' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/1edd5c04d__MG_1297.jpg', caption: 'Maize growing tall', category: 'Farm & Garden' },
  { src: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/c0733a8af__MG_1294.jpg', caption: 'Tending the gardens', category: 'Farm & Garden' },
];

const CATEGORIES = ['All', 'Our Children', 'Buildings & Grounds', 'Farm & Garden'];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' ? IMAGES : IMAGES.filter((i) => i.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Glimpses of life at Alphonsa Community."
        description="Faces, fields and quiet corners of our home — a window into the daily life we share with the children entrusted to our care."
        image="https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/d3aef50c8__MG_1427.jpg"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 text-xs uppercase tracking-wider font-heading font-bold rounded transition-colors ${
                  filter === cat
                    ? 'bg-primary text-white'
                    : 'bg-secondary/60 text-primary hover:bg-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredImages.map((img, i) => (
              <motion.button
                key={img.src}
                onClick={() => setSelected(img)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 9) * 0.05 }}
                className="group relative overflow-hidden aspect-[4/3] bg-secondary/30"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/0 to-slate-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <p className="text-white text-sm font-light leading-snug">{img.caption}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2"
              aria-label="Close"
            >
              <X className="w-7 h-7" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            >
              <img
                src={selected.src}
                alt={selected.caption}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <p className="text-white/80 text-sm font-light mt-4 text-center">{selected.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}