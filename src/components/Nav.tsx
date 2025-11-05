import Link from 'next/link'

export const Nav = () => {
  return (
    <div className="flex w-full items-center justify-center px-6 pt-20">
      <header className="w-full max-w-2xl">
        <h1 className="text-lg font-medium">
          <Link
            className="add-focus-text"
            href={'/'}
            aria-label="Navigate home"
          >
            Platforma 
          </Link>
        </h1>
        <h2 className="text-base-soft">Product and Engineering Innovation</h2>
      </header>
    </div>
  )
}
