import clsx from "clsx"
import { ArrowRight } from "phosphor-react"
import { ReactNode } from "react"

interface LinkItemProps {
  title: string
  description: ReactNode
  link?: string
  disabled?: boolean
  download?: boolean
}

export const LinkItem = ({ title, description, link, disabled, download }: LinkItemProps) => {
  return (
    <a download={download} rel="noopener noreferrer" slot="div" href={link && !disabled ? link : ''} className={clsx(
      "block border-theme-border border-t-[1px] last:border-b-[1px]",
      disabled && "opacity-50 cursor-not-allowed",
    )}>
      <div className="my-1 px-2 py-6 flex gap-4 items-center justify-between rounded-xl hover:bg-zinc-400/10">
        <div className="flex-1">
          <h4 className="text-theme-primary font-inter font-semibold text-2xl text-zinc-900 uppercase">{title}</h4>
          <span className="text-crossover font-inter text-lg">{description}</span>
        </div>

        <div className="flex items-center justify-center bg-theme-primary w-8 h-8 rounded-full">
          <ArrowRight className="text-black w-4 h-4" />
        </div>
      </div>
    </a>
  )
}