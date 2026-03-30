import { cn } from '@/lib/utils'

interface SectionPreProps {
  text: string
  className?: string
  centered?: boolean
}

export default function SectionPre({ text, className, centered }: SectionPreProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 mb-[14px]',
        centered && 'justify-center',
        className
      )}
    >
      <span className="w-6 h-[1.5px] bg-cyan flex-shrink-0" />
      <span className="font-mono text-[10px] text-cyan tracking-[2.5px] uppercase">
        {text}
      </span>
      {centered && <span className="w-6 h-[1.5px] bg-cyan flex-shrink-0" />}
    </div>
  )
}
