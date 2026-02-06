import { useState, useRef } from 'react';
import { RetellWebClient } from 'retell-client-js-sdk';
import { Hero } from '@/components/ui/hero-1';
import MobileNavbar from '@/components/MobileNavbar';
import PainSection from '@/components/PainSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import LogoCarouselSection from '@/components/LogoCarouselSection';
import FeaturesDetail from '@/components/ui/features-detail';
import { FloridaPilotSection } from '@/components/FloridaPilotSection';
import { FrameworksSection } from '@/components/FrameworksSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { FloatingCallWidget } from '@/components/ui/FloatingCallWidget';

const AUTOCAREAGENT_ID = 'agent_68d22a69f45a3ee37168684831';

const Index = () => {
  const [painCallStatus, setPainCallStatus] = useState<'idle' | 'calling' | 'connected' | 'ended'>('idle');
  const painClientRef = useRef<RetellWebClient | null>(null);

  const startPainCall = async () => {
    if (painCallStatus !== 'idle') return;
    try {
      setPainCallStatus('calling');
      const apiKey = import.meta.env.VITE_RETELL_API_KEY;
      if (!apiKey) throw new Error('Retell API key is not configured');

      const response = await fetch('https://api.retellai.com/v2/create-web-call', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ agent_id: AUTOCAREAGENT_ID }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to create web call');

      const client = new RetellWebClient();
      client.on('call_started', () => {
        setPainCallStatus('connected');
      });
      client.on('call_ended', () => {
        setPainCallStatus('ended');
        setTimeout(() => {
          setPainCallStatus('idle');
          painClientRef.current = null;
        }, 2000);
      });
      client.on('error', () => {
        setPainCallStatus('idle');
        painClientRef.current = null;
        alert('Call failed. Please try again.');
      });

      await client.startCall({ accessToken: data.access_token });
      painClientRef.current = client;
    } catch (err: any) {
      alert('Error starting call: ' + (err.message || err));
      setPainCallStatus('idle');
    }
  };

  const endPainCall = () => {
    if (!painClientRef.current) return;
    painClientRef.current.stopCall();
    setPainCallStatus('ended');
    setTimeout(() => {
      setPainCallStatus('idle');
      painClientRef.current = null;
    }, 2000);
  };

  return (
    <>
      <div className="relative min-h-screen bg-background">
        {/* Mobile Navbar */}
        <MobileNavbar />

        {/* Main Content */}
        <main className="relative">
          <Hero
            eyebrow="BUILT FOR AUTO REPAIR SHOPS"
            title="Never Miss a Call. Never Miss a Job."
            subtitle="Vextria answers every inbound call for your auto care or repair shop, books appointments instantly, and eliminates lost revenue during busy hours — 24/7."
            ctaLabel="Try It Here"
            ctaHref="#pain"
          />

          {/* Pain / Problem Section */}
          <section id="pain">
            <PainSection
              onCallClick={painCallStatus === 'connected' ? endPainCall : startPainCall}
              callStatus={painCallStatus}
            />
          </section>

          {/* How It Works */}
          <section id="how-it-works">
            <HowItWorksSection />
          </section>

          {/* Logo Carousel */}
          <section id="partners">
            <LogoCarouselSection />
          </section>

          {/* Features Detail with Dashboard */}
          <section id="features">
            <FeaturesDetail />
          </section>

          {/* Florida Pilot Program */}
          <section id="pilot">
            <FloridaPilotSection />
          </section>

          {/* Frameworks/Add-Ons Section */}
          <section id="frameworks">
            <FrameworksSection />
          </section>

          <section id="faq">
            <FAQSection />
          </section>

          <section id="contact">
            <ContactSection />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Floating Call Widget - Outside relative container for proper viewport-fixed positioning */}
      <FloatingCallWidget />
    </>
  );
};

export default Index;
