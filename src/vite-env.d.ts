/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_TEMPLATE_ID: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
  readonly VITE_GITHUB_URL: string
  readonly VITE_LINKEDIN_URL: string
  readonly VITE_WHATSAPP_NUMBER: string
  readonly VITE_EMAIL: string
  readonly GEMINI_API_KEY: string
  readonly APP_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}