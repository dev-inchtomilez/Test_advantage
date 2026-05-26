/**
 * PR & COMMUNICATIONS SERVICE PAGE
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Megaphone, CheckCircle2, TrendingUp, Users, BarChart3, Target, Zap, Newspaper, Radio, Tv, Award, Eye, Globe, Heart, Sparkles, MessageSquare, FileText, Layers } from 'lucide-react';
import { Section, Container, SectionHeader, GlassCard, IconBadge } from '../../components/primitives';
import { Accordion } from '../../components/Accordion';
import { ScrollReveal, StaggerContainer, staggerItemVariants } from '../../components/ScrollReveal';
import { MagneticButton } from '../../components/MagneticButton';
import { TiltCard } from '../../components/TiltCard';
import { colors, gradients } from '../../../styles/design-tokens';
import { PageBackground } from '../../components/layout';
import { ModernSectionBackground } from '../../components/ModernSectionBackground';

// SEO Components
import { PageSEO } from '../../components/seo';
import { SERVICE_SEO } from '../../utils/seo-config';

const keyServices = [
  { icon: <Newspaper className="w-6 h-6" />, title: 'Media Relations', description: 'Strategic media outreach, press releases, and journalist relationship building.' },
  { icon: <MessageSquare className="w-6 h-6" />, title: 'Thought Leadership', description: 'Executive positioning, byline articles, and industry expert development.' },
  { icon: <Award className="w-6 h-6" />, title: 'Crisis Communication', description: 'Reputation management and crisis response planning and execution.' },
  { icon: <Tv className="w-6 h-6" />, title: 'Broadcast PR', description: 'TV and radio media opportunities, interviews, and broadcast placements.' },
  { icon: <Users className="w-6 h-6" />, title: 'Influencer Relations', description: 'Strategic partnerships and campaigns with industry influencers and advocates.' },
  { icon: <Globe className="w-6 h-6" />, title: 'Corporate Communications', description: 'Internal and external communications, announcements, and stakeholder messaging.' },
];

const processSteps = [
  { id: 'step-1', number: '01', title: 'PR Audit & Planning', description: 'Assess current position and develop strategy', details: ['Current coverage analysis', 'Media landscape mapping', 'Message development', 'Target media identification'] },
  { id: 'step-2', number: '02', title: 'Media Outreach', description: 'Build relationships and secure coverage', details: ['Media list development', 'Pitch creation', 'Press release distribution', 'Follow-up and relationship building'] },
  { id: 'step-3', number: '03', title: 'Content Creation', description: 'Develop compelling PR content', details: ['Press releases', 'Byline articles', 'Executive statements', 'Media kits'] },
  { id: 'step-4', number: '04', title: 'Measurement & Reporting', description: 'Track coverage and demonstrate impact', details: ['Media monitoring', 'Coverage analysis', 'Share of voice tracking', 'Impact reporting'] },
];

const benefits = [
  { icon: <Award className="w-5 h-5" />, title: 'Credibility & Trust', description: 'Third-party validation builds market credibility' },
  { icon: <TrendingUp className="w-5 h-5" />, title: 'Brand Visibility', description: 'Amplify reach through earned media coverage' },
  { icon: <Heart className="w-5 h-5" />, title: 'Reputation Management', description: 'Control narrative and protect brand reputation' },
  { icon: <Zap className="w-5 h-5" />, title: 'Thought Leadership', description: 'Position executives as industry experts' },
];

const deliverables = [
  { id: 'del-1', title: 'PR Strategy & Plan', icon: <Target className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Comprehensive PR strategy including messaging, target media, campaign themes, and measurement framework.' },
  { id: 'del-2', title: 'Media Coverage', icon: <Newspaper className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Secured placements in target publications, broadcast appearances, and ongoing media relationship management.' },
  { id: 'del-3', title: 'PR Content', icon: <FileText className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Press releases, media pitches, byline articles, executive quotes, and all PR content assets.' },
  { id: 'del-4', title: 'Coverage Reports', icon: <BarChart3 className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Monthly coverage analysis, share of voice metrics, sentiment tracking, and ROI measurement.' },
];

const prServices = [
  { id: 'pr-1', title: 'Press Release Distribution', icon: <Newspaper className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Professional press release writing, distribution through major wire services, and targeted media outreach for maximum coverage.' },
  { id: 'pr-2', title: 'Executive Positioning', icon: <Users className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Thought leadership programs, speaking opportunities, interview preparation, and executive profile building across media and events.' },
  { id: 'pr-3', title: 'Crisis Management', icon: <Award className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Crisis communication planning, rapid response protocols, stakeholder communication, and reputation recovery strategies.' },
  { id: 'pr-4', title: 'Event PR', icon: <Sparkles className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Event promotion, media invitations, press conferences, on-site media relations, and post-event coverage maximization.' },
];

const industries = [
  { name: 'Technology', icon: <Zap className="w-4 h-4" /> },
  { name: 'Healthcare', icon: <Heart className="w-4 h-4" /> },
  { name: 'Finance', icon: <BarChart3 className="w-4 h-4" /> },
  { name: 'Professional Services', icon: <Users className="w-4 h-4" /> },
  { name: 'Consumer Brands', icon: <Globe className="w-4 h-4" /> },
  { name: 'Non-Profit', icon: <Heart className="w-4 h-4" /> },
];

const faqs = [
  { id: 'faq-1', title: 'Can you guarantee media coverage?', icon: <Newspaper className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'While we can\'t guarantee specific placements, our track record and media relationships consistently deliver strong coverage for newsworthy stories.' },
  { id: 'faq-2', title: 'How do you measure PR success?', icon: <BarChart3 className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'We track coverage quantity and quality, reach, sentiment, share of voice, website traffic from PR, and business impact metrics.' },
  { id: 'faq-3', title: 'Do you handle crisis situations?', icon: <Award className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Yes. We provide crisis communication planning and rapid response services to protect and restore reputation during challenges.' },
];

export function PRCommunicationsPage() {
  return (
    <PageBackground>
      <PageSEO
        title={SERVICE_SEO.prCommunications.title}
        description={SERVICE_SEO.prCommunications.description}
        keywords={SERVICE_SEO.prCommunications.keywords}
        ogImage={SERVICE_SEO.prCommunications.ogImage}
        path="/services/pr-communications"
        serviceSchema={SERVICE_SEO.prCommunications.schema}
      />
      
      {/* ============================================
          HERO SECTION - Premium Image with Content
          ============================================ */}
      <ModernSectionBackground variant="image-overlay-team" className="relative overflow-hidden py-12 lg:py-16">
        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-4"
              >
                <span className="inline-flex items-center px-3 py-1.5 rounded-full shadow-lg border-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(12px)', borderColor: colors.brand.accent }}>
                  <Megaphone className="w-3.5 h-3.5 mr-2" style={{ color: colors.brand.accent }} />
                  <span className="text-xs font-bold tracking-wide" style={{ color: colors.brand.primary }}>PR & COMMUNICATIONS</span>
                </span>
              </motion.div>

              <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight tracking-tight mb-4" style={{ color: colors.brand.primary }}>
                Strategic Public Relations That Build Credibility
              </h1>

              <div className="space-y-3 mb-5">
                <p className="text-sm font-semibold leading-snug" style={{ color: colors.brand.primary }}>
                  Earn trust and amplify your message through strategic PR.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Media relations, thought leadership, crisis management, and reputation building that positions your brand as an industry leader.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <MagneticButton strength={0.3}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    style={{ background: gradients.primary }}
                  >
                    Build Your Reputation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>

                <MagneticButton strength={0.2}>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all duration-300 hover:shadow-lg hover:bg-white/70 bg-white/50 backdrop-blur-md"
                    style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
                  >
                    All Services
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>

            {/* Right Column - Premium Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1774205884993-e173be870049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjByZWxhdGlvbnMlMjBjb21tdW5pY2F0aW9uJTIwbWVkaWF8ZW58MXx8fHwxNzc0NTY3MjUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Public relations and communications"
                  className="w-full h-[280px] lg:h-[360px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Floating stats badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <GlassCard variant="strong" rounded="xl" padding="base" className="backdrop-blur-md">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-xs font-bold text-gray-700 mb-1">Media Placements</p>
                        <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>850+</span>
                      </div>
                      <div className="border-x border-gray-300/40">
                        <p className="text-xs font-bold text-gray-700 mb-1">Reach (M)</p>
                        <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>125M</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-700 mb-1">Avg. Sentiment</p>
                        <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>94%</span>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </ModernSectionBackground>

      <ModernSectionBackground variant="mesh-gradient-light">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader badge="Our Services" badgeIcon={<Layers className="w-4 h-4" />} title="PR & Communications Services" description="Comprehensive public relations and corporate communications." align="center" maxWidth="md" />
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyServices.map((service, index) => (
                <motion.div key={index} variants={staggerItemVariants}>
                  <GlassCard variant="base" rounded="lg" padding="sm" hover className="h-full">
                    <IconBadge icon={service.icon} size="md" variant="gradient" animated />
                    <h3 className="text-base font-bold mt-6 mb-4 leading-tight" style={{ color: colors.brand.primary }}>{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="gradient-soft">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader badge="Our Process" badgeIcon={<Target className="w-4 h-4" />} title="PR Methodology" description="A strategic 4-step approach to media relations and PR success." align="center" maxWidth="md" />
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-6">
                {processSteps.map((step) => (
                  <TiltCard key={step.id}>
                    <GlassCard variant="base" rounded="xl" padding="base" className="h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg" style={{ background: gradients.primary }}>
                          <span className="text-white font-bold text-lg">{step.number}</span>
                        </div>
                        <div>
                          <h3 className="text-base font-bold mb-1 leading-tight" style={{ color: colors.brand.primary }}>{step.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </TiltCard>
                ))}
              </div>
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="glass-white">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader badge="Benefits" badgeIcon={<Zap className="w-4 h-4" />} title="PR & Communications Benefits" description="The business impact of strategic public relations." align="center" maxWidth="md" />
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={staggerItemVariants}>
                  <GlassCard variant="base" rounded="lg" padding="sm" hover className="h-full text-center">
                    <IconBadge icon={benefit.icon} size="md" variant="gradient" animated className="mx-auto" />
                    <h3 className="text-base font-bold mt-6 mb-3 leading-tight" style={{ color: colors.brand.primary }}>{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="animated-dots">
        <Section spacing="compact" animate background="transparent">
          <Container size="md">
            <SectionHeader badge="Deliverables" badgeIcon={<FileText className="w-4 h-4" />} title="PR Deliverables" description="Comprehensive PR services and measurable results." align="center" maxWidth="md" />
            <ScrollReveal><Accordion items={deliverables} /></ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="mesh-gradient-light">
        <Section spacing="compact" animate background="transparent">
          <Container size="md">
            <SectionHeader badge="Specialized Services" badgeIcon={<Award className="w-4 h-4" />} title="PR Capabilities" description="Specialized PR services tailored to your needs." align="center" maxWidth="md" />
            <ScrollReveal><Accordion items={prServices} /></ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="glass-blur">
        <Section spacing="compact" animate background="transparent">
          <Container size="md">
            <ScrollReveal>
              <GlassCard variant="base" rounded="2xl" padding="base">
                <div className="text-center mb-6">
                  <IconBadge icon={<TrendingUp className="w-8 h-8" />} size="lg" variant="gradient" animated className="mx-auto mb-4" />
                  <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: colors.brand.primary }}>PR Campaign Results</h2>
                  <p className="text-sm text-gray-600">Real outcomes from our PR programs</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 bg-white/60 rounded-xl">
                    <div className="text-2xl font-bold mb-1" style={{ color: colors.brand.primary }}>127</div>
                    <div className="text-sm text-gray-600">Media Placements</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-xl">
                    <div className="text-2xl font-bold mb-1" style={{ color: colors.brand.primary }}>45M</div>
                    <div className="text-sm text-gray-600">Total Reach</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-xl">
                    <div className="text-2xl font-bold mb-1" style={{ color: colors.brand.primary }}>92%</div>
                    <div className="text-sm text-gray-600">Positive Sentiment</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 text-center leading-relaxed">
                  Technology startup achieved category leadership through strategic PR and thought leadership campaign.
                </p>
              </GlassCard>
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="mesh-gradient-warm">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader badge="Industries" badgeIcon={<Globe className="w-4 h-4" />} title="Industries We Serve" description="PR expertise across diverse sectors." align="center" maxWidth="md" />
            <ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {industries.map((industry, index) => (
                  <GlassCard key={index} variant="base" rounded="lg" padding="sm" hover className="text-center">
                    <IconBadge icon={industry.icon} size="sm" variant="gradient" animated className="mx-auto mb-2" />
                    <p className="text-xs font-semibold text-gray-700">{industry.name}</p>
                  </GlassCard>
                ))}
              </div>
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="gradient-soft">
        <Section spacing="compact" animate background="transparent">
          <Container size="md">
            <SectionHeader badge="FAQs" badgeIcon={<Eye className="w-4 h-4" />} title="Frequently Asked Questions" description="Common questions about PR services." align="center" maxWidth="md" />
            <ScrollReveal><Accordion items={faqs} /></ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="glass-white">
        <section className="relative px-4 sm:px-6 lg:px-8 py-12 overflow-hidden bg-transparent">
          <Container size="md">
            <ScrollReveal>
              <GlassCard variant="base" rounded="2xl" padding="base" className="text-center">
                <IconBadge icon={<Megaphone className="w-8 h-8" />} size="lg" variant="gradient" animated className="mx-auto mb-4" />
                <h2 className="text-xl sm:text-2xl font-bold mb-3 leading-tight" style={{ color: colors.brand.primary }}>Ready to Amplify Your Story?</h2>
                <p className="text-sm text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
                  Let's build a PR strategy that elevates your brand and establishes thought leadership.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <MagneticButton strength={0.3}>
                    <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 group" style={{ background: gradients.primary }}>
                      Launch Your PR Program<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </MagneticButton>
                  <MagneticButton strength={0.2}>
                    <Link to="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold border-2 transition-all duration-300 hover:shadow-lg bg-transparent" style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}>
                      View All Services
                    </Link>
                  </MagneticButton>
                </div>
              </GlassCard>
            </ScrollReveal>
          </Container>
        </section>
      </ModernSectionBackground>
    </PageBackground>
  );
}

export default PRCommunicationsPage;