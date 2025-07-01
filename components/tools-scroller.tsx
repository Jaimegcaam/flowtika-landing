"use client"

import { AnimatedSection } from "./animated-section"
import Image from "next/image"

const tools = [
  {
    name: "HubSpot",
    logoUrl: "https://logo.clearbit.com/hubspot.com",
    alt: "HubSpot logo",
  },
  {
    name: "Salesforce",
    logoUrl: "https://logo.clearbit.com/salesforce.com",
    alt: "Salesforce logo",
  },
  {
    name: "Slack",
    logoUrl: "https://logo.clearbit.com/slack.com",
    alt: "Slack logo",
  },
  {
    name: "Trello",
    logoUrl: "https://logo.clearbit.com/trello.com",
    alt: "Trello logo",
  },
  {
    name: "Asana",
    logoUrl: "https://logo.clearbit.com/asana.com",
    alt: "Asana logo",
  },
  {
    name: "Mailchimp",
    logoUrl: "https://logo.clearbit.com/mailchimp.com",
    alt: "Mailchimp logo",
  },
  {
    name: "Shopify",
    logoUrl: "https://logo.clearbit.com/shopify.com",
    alt: "Shopify logo",
  },
  {
    name: "Pipedrive",
    logoUrl: "https://logo.clearbit.com/pipedrive.com",
    alt: "Pipedrive logo",
  },
  {
    name: "Calendly",
    logoUrl: "https://logo.clearbit.com/calendly.com",
    alt: "Calendly logo",
  },
  {
    name: "Notion",
    logoUrl: "https://logo.clearbit.com/notion.so",
    alt: "Notion logo",
  },
  {
    name: "Airtable",
    logoUrl: "https://logo.clearbit.com/airtable.com",
    alt: "Airtable logo",
  },
  {
    name: "Zapier",
    logoUrl: "https://logo.clearbit.com/zapier.com",
    alt: "Zapier logo",
  },
  {
    name: "Stripe",
    logoUrl: "https://logo.clearbit.com/stripe.com",
    alt: "Stripe logo",
  },
  {
    name: "Dropbox",
    logoUrl: "https://logo.clearbit.com/dropbox.com",
    alt: "Dropbox logo",
  },
  {
    name: "Monday.com",
    logoUrl: "https://logo.clearbit.com/monday.com",
    alt: "Monday.com logo",
  },
  {
    name: "ClickUp",
    logoUrl: "https://logo.clearbit.com/clickup.com",
    alt: "ClickUp logo",
  },
  {
    name: "Figma",
    logoUrl: "https://logo.clearbit.com/figma.com",
    alt: "Figma logo",
  },
  {
    name: "Canva",
    logoUrl: "https://logo.clearbit.com/canva.com",
    alt: "Canva logo",
  },
  {
    name: "GitHub",
    logoUrl: "https://logo.clearbit.com/github.com",
    alt: "GitHub logo",
  },
  {
    name: "GitLab",
    logoUrl: "https://logo.clearbit.com/gitlab.com",
    alt: "GitLab logo",
  },
  {
    name: "Twilio",
    logoUrl: "https://logo.clearbit.com/twilio.com",
    alt: "Twilio logo",
  },
  {
    name: "SendGrid",
    logoUrl: "https://logo.clearbit.com/sendgrid.com",
    alt: "SendGrid logo",
  },
  {
    name: "Typeform",
    logoUrl: "https://logo.clearbit.com/typeform.com",
    alt: "Typeform logo",
  },
  {
    name: "Intercom",
    logoUrl: "https://logo.clearbit.com/intercom.com",
    alt: "Intercom logo",
  },
  {
    name: "Zendesk",
    logoUrl: "https://logo.clearbit.com/zendesk.com",
    alt: "Zendesk logo",
  },
  {
    name: "Atlassian",
    logoUrl: "https://logo.clearbit.com/atlassian.com",
    alt: "Atlassian logo",
  },
  {
    name: "Basecamp",
    logoUrl: "https://logo.clearbit.com/basecamp.com",
    alt: "Basecamp logo",
  },
  {
    name: "Freshworks",
    logoUrl: "https://logo.clearbit.com/freshworks.com",
    alt: "Freshworks logo",
  },
  {
    name: "ActiveCampaign",
    logoUrl: "https://logo.clearbit.com/activecampaign.com",
    alt: "ActiveCampaign logo",
  },
  {
    name: "ConvertKit",
    logoUrl: "https://logo.clearbit.com/convertkit.com",
    alt: "ConvertKit logo",
  },
  {
    name: "Webflow",
    logoUrl: "https://logo.clearbit.com/webflow.com",
    alt: "Webflow logo",
  },
  {
    name: "Squarespace",
    logoUrl: "https://logo.clearbit.com/squarespace.com",
    alt: "Squarespace logo",
  },
  {
    name: "WordPress",
    logoUrl: "https://logo.clearbit.com/wordpress.com",
    alt: "WordPress logo",
  },
  {
    name: "Wix",
    logoUrl: "https://logo.clearbit.com/wix.com",
    alt: "Wix logo",
  },
  {
    name: "BigCommerce",
    logoUrl: "https://logo.clearbit.com/bigcommerce.com",
    alt: "BigCommerce logo",
  },
  {
    name: "Magento",
    logoUrl: "https://logo.clearbit.com/magento.com",
    alt: "Magento logo",
  },
  {
    name: "PrestaShop",
    logoUrl: "https://logo.clearbit.com/prestashop.com",
    alt: "PrestaShop logo",
  },
  {
    name: "Klaviyo",
    logoUrl: "https://logo.clearbit.com/klaviyo.com",
    alt: "Klaviyo logo",
  },
  {
    name: "Constant Contact",
    logoUrl: "https://logo.clearbit.com/constantcontact.com",
    alt: "Constant Contact logo",
  },
  {
    name: "GetResponse",
    logoUrl: "https://logo.clearbit.com/getresponse.com",
    alt: "GetResponse logo",
  },
  {
    name: "AWeber",
    logoUrl: "https://logo.clearbit.com/aweber.com",
    alt: "AWeber logo",
  },
  {
    name: "Campaign Monitor",
    logoUrl: "https://logo.clearbit.com/campaignmonitor.com",
    alt: "Campaign Monitor logo",
  },
  {
    name: "Pardot",
    logoUrl: "https://logo.clearbit.com/pardot.com",
    alt: "Pardot logo",
  },
  {
    name: "Marketo",
    logoUrl: "https://logo.clearbit.com/marketo.com",
    alt: "Marketo logo",
  },
  {
    name: "Eloqua",
    logoUrl: "https://logo.clearbit.com/eloqua.com",
    alt: "Eloqua logo",
  },
  {
    name: "Unbounce",
    logoUrl: "https://logo.clearbit.com/unbounce.com",
    alt: "Unbounce logo",
  },
  {
    name: "Leadpages",
    logoUrl: "https://logo.clearbit.com/leadpages.net",
    alt: "Leadpages logo",
  },
  {
    name: "Instapage",
    logoUrl: "https://logo.clearbit.com/instapage.com",
    alt: "Instapage logo",
  },
  {
    name: "ClickFunnels",
    logoUrl: "https://logo.clearbit.com/clickfunnels.com",
    alt: "ClickFunnels logo",
  },
  {
    name: "Hotjar",
    logoUrl: "https://logo.clearbit.com/hotjar.com",
    alt: "Hotjar logo",
  },
  {
    name: "Mixpanel",
    logoUrl: "https://logo.clearbit.com/mixpanel.com",
    alt: "Mixpanel logo",
  },
]

// Duplicamos el array para el efecto de scroll infinito
const duplicatedTools = [...tools, ...tools]

export function ToolsScroller() {
  return (
    <section className="py-20 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <AnimatedSection animation="fade-in-up">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Conecta con más de 200 herramientas</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-up" delay="animate-delay-200">
            <p className="text-lg text-slate-300">Integra fácilmente las aplicaciones que ya usas en tu negocio</p>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-in-up" delay="animate-delay-300">
          <div className="relative">
            {/* Gradientes mejorados para el efecto de fade en los bordes */}
            <div className="absolute left-0 top-0 z-20 h-full w-80 bg-gradient-to-r from-slate-900 from-30% via-slate-900/98 via-50% via-slate-900/90 via-70% via-slate-900/70 via-85% to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 z-20 h-full w-80 bg-gradient-to-l from-slate-900 from-30% via-slate-900/98 via-50% via-slate-900/90 via-70% via-slate-900/70 via-85% to-transparent pointer-events-none"></div>

            {/* Contenedor del scroll */}
            <div className="flex space-x-10 animate-scroll-slow">
              {duplicatedTools.map((tool, index) => (
                <div key={`${tool.name}-${index}`} className="flex-shrink-0 group">
                  <div className="flex items-center justify-center p-8 bg-white/10 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 hover:bg-white/20 transition-all duration-300 w-40 h-28">
                    <Image
                      src={tool.logoUrl || "/placeholder.svg"}
                      alt={tool.alt}
                      width={120}
                      height={48}
                      className="max-w-[120px] max-h-[48px] object-contain group-hover:scale-105 transition-transform duration-300 rounded-lg"
                      onError={(e) => {
                        // Fallback en caso de que la imagen no cargue
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-28 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                              <span class="text-white font-bold text-base">${tool.name.charAt(0)}</span>
                            </div>
                          `
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
