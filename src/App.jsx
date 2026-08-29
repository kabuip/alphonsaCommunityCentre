import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import Layout from '@/components/site/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import OurWork from '@/pages/OurWork';
import Gallery from '@/pages/Gallery';
import GetInvolved from '@/pages/GetInvolved';
import Contact from '@/pages/Contact';

const SiteRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};


function App() {

  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <SiteRoutes />
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App