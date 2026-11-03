import SectionPre from '@/components/ui/SectionPre'
import { ChartSpline, Search, Target } from 'lucide-react'
import Link from 'next/link'
import { blogPosts } from '@/lib/blogPosts'

const posts = {
  main: {
    slug: blogPosts[0].slug,
    emoji: <Search />,
    cat: 'White Label SEO',
    title: 'How to Sell SEO Without Doing the Work Yourself',
    desc: 'A practical guide to packaging, pricing, and delivering white label SEO under your brand. Real numbers, real margins.',
    readTime: '8 min read',
    date: 'March 2025',
  },
  small: [
    {
      slug: blogPosts[1].slug,
      emoji: <ChartSpline />,
      cat: 'Agency Growth',
      title: 'From 10 to 50 Clients: A White Label Playbook',
      desc: 'The exact process three agency owners used to 5x their client count without the headcount.',
      readTime: '12 min',
      date: 'Feb 2025',
      delay: '1',
    },
    {
      slug: blogPosts[2].slug,
      emoji: <Target />,
      cat: 'Paid Ads Strategies',
      title: 'Why Your Agency Should Be Offering Meta Ads in 2025',
      desc: "The paid social opportunity is bigger than ever — and agencies that don't offer it are leaving money behind.",
      readTime: '6 min',
      date: 'Jan 2025',
      delay: '2',
    },
  ],
}

export default function Blog() {
  return (
    <section id="blog" className="py-[120px] bg-ink-2 border-t border-rule">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        {/* Header */}
        <div className="flex justify-between items-end mb-14 flex-wrap gap-4">
          <div>
            <SectionPre text="Blog" className="fu" />
            <h2
              className="font-head font-black tracking-[-2px] text-white leading-[1.05] fu"
              style={{ fontSize: 'clamp(30px,4vw,50px)' }}
              data-d="1"
            >
              Agency growth, decoded.
            </h2>
          </div>

          <a href='/blog' className="text-[14.5px] font-medium py-[14px] px-8 border border-rule-h text-np-text-muted rounded-lg inline-flex items-center gap-2 hover:border-cyan-border hover:text-np-text transition-all">
            View All Posts →
          </a>

        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
          {/* Main featured post */}
          <Link href={`/blog/${posts.main.slug}`} className="bg-main bg-ink-2 border border-rule rounded-[14px] overflow-hidden cursor-pointer hover:border-cyan-border hover:-translate-y-[3px] transition-all duration-300 fu max-xl:col-span-2 max-sm:col-span-1">
            <div className="h-[200px] flex items-center justify-center text-[48px] bg-ink-3 border-b border-rule">
              {posts.main.emoji}
            </div>
            <div className="p-7">
              <div className="font-mono text-[9px] text-cyan tracking-[2px] uppercase mb-[10px]">
                {posts.main.cat}
              </div>
              <h3 className="font-head text-[20px] font-bold text-white mb-[10px] leading-[1.25]">
                {posts.main.title}
              </h3>
              <div className="text-[14px] text-np-text-muted leading-[1.65] mb-4">{posts.main.desc}</div>
              <div className="flex gap-4 font-mono text-[12px] text-np-text-dim">
                <span>{posts.main.readTime}</span>
                <span>{posts.main.date}</span>
              </div>
            </div>
          </Link>

          {/* Small posts */}
          {posts.small.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.title}
              className="bg-sm bg-ink-2 border border-rule rounded-[14px] overflow-hidden cursor-pointer hover:border-cyan-border hover:-translate-y-[3px] transition-all duration-300 flex flex-col fu"
              data-d={post.delay}
            >
              <div className="h-[100px] flex items-center justify-center text-[32px] bg-ink-3 border-b border-rule">
                {post.emoji}
              </div>
              <div className="p-[18px] flex-1">
                <div className="font-mono text-[9px] text-cyan tracking-[2px] uppercase mb-[10px]">
                  {post.cat}
                </div>
                <h3 className="font-head text-[20px] font-bold text-white mb-[10px] leading-[1.25]">
                  {post.title}
                </h3>
                <div className="text-[14px] text-np-text-muted leading-[1.65] mb-3">{post.desc}</div>
                <div className="flex gap-4 font-mono text-[12px] text-np-text-dim mt-3">
                  <span>{post.readTime}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
