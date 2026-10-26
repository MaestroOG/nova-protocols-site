import { ArrowUpRight, TriangleAlert } from 'lucide-react'

export default function AnnouncementBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[1001] flex h-10 items-center justify-center border-b border-red-400/20 bg-[#210d12] px-4 text-[12.5px] text-red-50 max-sm:h-16">
      <div className="flex items-center justify-center gap-4 max-sm:flex-col max-sm:gap-0">
        <div className="flex items-center gap-2 font-medium">
          <TriangleAlert aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-red-400" />
          <span>Experiencing a cyberattack?</span>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center gap-1 rounded-md bg-red-500 px-3 py-[5px] text-[11.5px] font-bold text-white transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300 max-sm:py-[3px]"
        >
          Get Emergency Help Now
          <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
      </a>
      </div>
    </div>
  )
}
