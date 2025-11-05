import { EmailButton } from '@/components/EmailButton'
import { TextLink } from '@/components/TextLink'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex w-full items-center justify-center px-6 py-10">
      <div className="text-base-soft flex w-full max-w-2xl flex-wrap-reverse items-center justify-between text-sm">
        <p className="select-none">© {currentYear}</p>
        <nav className="-mr-3 flex gap-0.5">
          <TextLink
            className="px-3 py-1.5"
            external
            href="https://x.com/Platforma_AI"
            title="X"
          />
          <TextLink
            className="px-3 py-1.5"
            external
            href="https://linkedin.com/company/platforma-rs/"
            title="Linkedin"
          />
          <EmailButton />
        </nav>
      </div>
    </footer>
  )
}
