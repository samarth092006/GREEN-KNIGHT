import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, allServices } from "@/data/services";
import Breadcrumbs from "@/components/service/Breadcrumbs";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceOverview from "@/components/service/ServiceOverview";
import ServiceFeatures from "@/components/service/ServiceFeatures";
import Benefits from "@/components/service/Benefits";
import TechnologyStack from "@/components/service/TechnologyStack";
import Industries from "@/components/service/Industries";
import WhyChooseUs from "@/components/service/WhyChooseUs";
import ProcessTimeline from "@/components/service/ProcessTimeline";
import CaseStudy from "@/components/service/CaseStudy";
import FAQ from "@/components/service/FAQ";
import RelatedServices from "@/components/service/RelatedServices";
import ContactForm from "@/components/service/ContactForm";
import ServiceSidebar from "@/components/service/ServiceSidebar";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Green Knights",
    };
  }

  return {
    title: service.seo.metaTitle,
    description: service.seo.metaDescription,
    keywords: service.seo.keywords,
    openGraph: {
      title: service.seo.metaTitle,
      description: service.seo.metaDescription,
      url: `https://greenknights.tech/services/${service.slug}`,
      siteName: "Green Knights of Tech & AI Ltd",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: service.seo.metaTitle,
      description: service.seo.metaDescription,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Organization JSON-LD Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Green Knights of Tech & AI Ltd",
    url: "https://greenknights.tech",
    logo: "https://greenknights.tech/logo.png",
    sameAs: [
      "https://linkedin.com/company/greenknights",
      "https://twitter.com/greenknights",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <div className="flex flex-col lg:flex-row gap-10 mt-4">
        {/* Sticky Desktop Navigation Sidebar */}
        <ServiceSidebar currentSlug={service.slug} />

        {/* Main Service Content */}
        <div className="flex-1 min-w-0">
          <ServiceHero service={service} />
          <ServiceOverview service={service} />
          <ServiceFeatures service={service} />
          <Benefits service={service} />
          <TechnologyStack service={service} />
          <Industries service={service} />
          <WhyChooseUs service={service} />
          <ProcessTimeline service={service} />
          <CaseStudy service={service} />
          <FAQ service={service} />
          <RelatedServices relatedSlugs={service.relatedSlugs} />
          <ContactForm serviceTitle={service.title} />
        </div>
      </div>
    </>
  );
}
