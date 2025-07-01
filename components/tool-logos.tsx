import type React from "react"

interface LogoProps {
  className?: string
}

export const HubSpotLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2.5 13.5h-2v-7h2v7zm5 0h-2v-4.5h2v4.5zm3.5 0h-2v-7h2v7z"
      fill="#FF7A59"
    />
  </svg>
)

export const SalesforceLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2.5 13.5h-2v-7h2v7zm5 0h-2v-4.5h2v4.5zm3.5 0h-2v-7h2v7z"
      fill="#00A1E0"
    />
  </svg>
)

export const GmailLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 4v16h24V4H0zm12 6.5l8-5.5v4.5l-8 5.5-8-5.5v-4.5l8 5.5z" fill="#EA4335" />
  </svg>
)

export const OutlookLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 4v16h24V4H0zm12 6.5l8-5.5v4.5l-8 5.5-8-5.5v-4.5l8 5.5z" fill="#0072C6" />
  </svg>
)

export const WhatsAppLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm6.5 14.5c-.28.28-.73.28-1.01 0l-4.49-4.49-4.49 4.49c-.28.28-.73.28-1.01 0s-.28-.73 0-1.01l4.49-4.49-4.49-4.49c-.28-.28-.28-.73 0-1.01s.73-.28 1.01 0l4.49 4.49 4.49-4.49c.28-.28.73-.28 1.01 0s.28.73 0 1.01l-4.49 4.49 4.49 4.49c.28.28.28.73 0 1.01z"
      fill="#25D366"
    />
  </svg>
)

export const GoogleSheetsLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 4v16h24V4H0zm6 6h12v2H6v-2zm0 4h8v2H6v-2z" fill="#34A853" />
  </svg>
)

export const ExcelLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 4v16h24V4H0zm6 6h12v2H6v-2zm0 4h8v2H6v-2z" fill="#217346" />
  </svg>
)

export const SlackLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm6.5 14.5c-.28.28-.73.28-1.01 0l-4.49-4.49-4.49 4.49c-.28.28-.73.28-1.01 0s-.28-.73 0-1.01l4.49-4.49-4.49-4.49c-.28-.28-.28-.73 0-1.01s.73-.28 1.01 0l4.49 4.49 4.49-4.49c.28-.28.73-.28 1.01 0s.28.73 0 1.01l-4.49 4.49 4.49 4.49c.28.28.28.73 0 1.01z"
      fill="#E01E5A"
    />
  </svg>
)

export const TrelloLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 4v16h24V4H0zm6 6h12v2H6v-2zm0 4h8v2H6v-2z" fill="#0079BF" />
  </svg>
)

export const AsanaLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm6.5 14.5c-.28.28-.73.28-1.01 0l-4.49-4.49-4.49 4.49c-.28.28-.73.28-1.01 0s-.28-.73 0-1.01l4.49-4.49-4.49-4.49c-.28-.28-.28-.73 0-1.01s.73-.28 1.01 0l4.49 4.49 4.49-4.49c.28-.28.73-.28 1.01 0s.28.73 0 1.01l-4.49 4.49 4.49 4.49c.28.28.28.73 0 1.01z"
      fill="#89609E"
    />
  </svg>
)

export const MailchimpLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm6.5 14.5c-.28.28-.73.28-1.01 0l-4.49-4.49-4.49 4.49c-.28.28-.73.28-1.01 0s-.28-.73 0-1.01l4.49-4.49-4.49-4.49c-.28-.28-.28-.73 0-1.01s.73-.28 1.01 0l4.49 4.49 4.49-4.49c.28-.28.73-.28 1.01 0s.28.73 0 1.01l-4.49 4.49 4.49 4.49c.28.28.28.73 0 1.01z"
      fill="#F05542"
    />
  </svg>
)

export const FacebookLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3 8h-1.35c-.59 0-.71.29-.71.74V12.5H15v2.82h-2.4V22H9.42V15.32H7v-2.82h2.4V9.74c0-2.42 1.49-3.75 3.66-3.75H15v2z"
      fill="#1877F2"
    />
  </svg>
)

export const InstagramLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5 2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      fill="#E4405F"
    />
    <path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5 2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      fill="url(#paint0_linear_101_101)"
    />
    <defs>
      <linearGradient id="paint0_linear_101_101" x1="18.5" y1="7.5" x2="18.5" y2="10.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FEDA77" />
        <stop offset="1" stopColor="#F58529" />
      </linearGradient>
    </defs>
  </svg>
)

export const LinkedInLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 13h-2v-6h2v6zm-1-7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4 7.5h-2v-3.5c0-.86-.5-1.5-1.14-1.5-.64 0-1.14.64-1.14 1.5V15h-2v-6h2v1c.33-.5 1.14-1.14 2.14-1.14 2.36 0 4.14 1.5 4.14 4.64V15z"
      fill="#0A66C2"
    />
  </svg>
)

export const ShopifyLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5 2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      fill="#95BF47"
    />
  </svg>
)

export const ZoomLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5 2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      fill="#2D8CFF"
    />
  </svg>
)

export const NotionLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5 2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      fill="#000000"
    />
  </svg>
)

export const StripeLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5 2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      fill="#6772E5"
    />
  </svg>
)

export const PayPalLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5 2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      fill="#0070BA"
    />
  </svg>
)

export const PipedriveLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 9.5c0 3.038-2.462 5.5-5.5 5.5S6.5 12.538 6.5 9.5 8.962 4 12 4s5.5 2.462 5.5 5.5z"
      fill="#28C840"
    />
    <circle cx="12" cy="9.5" r="3" fill="white" />
  </svg>
)

export const CalendlyLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#006BFF" />
    <path d="M7 8h10v2H7V8zm0 4h10v2H7v-2zm0 4h6v2H7v-2z" fill="white" />
  </svg>
)

export const AirtableLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L2 5v14l10 5 10-5V5L12 0zm6 16l-6 3-6-3V8l6-3 6 3v8z" fill="#FCB400" />
    <path d="M12 5L8 7v6l4 2 4-2V7l-4-2z" fill="#FFCC02" />
  </svg>
)

export const ZapierLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 13h-5l3 3-1 1-4-4v5h-2v-5l-4 4-1-1 3-3H6v-2h5l-3-3 1-1 4 4V6h2v5l4-4 1 1-3 3h5v2z"
      fill="#FF4A00"
    />
  </svg>
)

export const WooCommerceLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.5 14.5c-.28.28-.73.28-1.01 0L12 12.01 7.51 16.5c-.28.28-.73.28-1.01 0s-.28-.73 0-1.01L11 11 6.5 6.51c-.28-.28-.28-.73 0-1.01s.73-.28 1.01 0L12 9.99 16.49 5.5c.28-.28.73-.28 1.01 0s.28.73 0 1.01L13 11l4.5 4.49c.28.28.28.73 0 1.01z"
      fill="#96588A"
    />
  </svg>
)

const logoMap: { [key: string]: React.ComponentType<LogoProps> } = {
  HubSpot: HubSpotLogo,
  Salesforce: SalesforceLogo,
  Gmail: GmailLogo,
  Outlook: OutlookLogo,
  "WhatsApp Business": WhatsAppLogo,
  "Google Sheets": GoogleSheetsLogo,
  Excel: ExcelLogo,
  Slack: SlackLogo,
  Trello: TrelloLogo,
  Asana: AsanaLogo,
  Mailchimp: MailchimpLogo,
  Facebook: FacebookLogo,
  Instagram: InstagramLogo,
  LinkedIn: LinkedInLogo,
  Shopify: ShopifyLogo,
  WooCommerce: WooCommerceLogo,
  Pipedrive: PipedriveLogo,
  Zoom: ZoomLogo,
  Calendly: CalendlyLogo,
  Notion: NotionLogo,
  Airtable: AirtableLogo,
  Zapier: ZapierLogo,
  Stripe: StripeLogo,
  PayPal: PayPalLogo,
}

export const getToolLogo = (toolName: string): React.ComponentType<LogoProps> | undefined => {
  return logoMap[toolName]
}
