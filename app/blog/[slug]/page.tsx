import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CustomCursor from '@/components/CustomCursor'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionPre from '@/components/ui/SectionPre'
import { blogPosts, getBlogPost } from '@/lib/blogPosts'

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return { title: 'Article Not Found | Nova Protocols' }
  }

  return {
    title: `${post.title} | Nova Protocols`,
    description: post.description,
  }
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) notFound()

  return (
    <>
      <CustomCursor />
      <AnnouncementBar />
      <div className="mt-[104px] max-sm:mt-[128px]">
        <Navbar />
        <main>
          <header className="relative overflow-hidden border-b border-rule bg-ink">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 75% 65% at 50% 5%, rgba(108,54,122,0.12) 0%, transparent 60%)',
              }}
            />
            <div className="relative z-10 max-w-[1000px] mx-auto px-14 py-[96px] max-xl:px-7">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 font-mono text-[10px] text-np-text-dim tracking-[1px] mb-10"
              >
                <Link href="/" className="hover:text-cyan transition-colors">Home</Link>
                <span>›</span>
                <Link href="/blog" className="hover:text-cyan transition-colors">Blog</Link>
                <span>›</span>
                <span className="text-cyan">{post.category}</span>
              </nav>

              <SectionPre text={post.category} />
              <h1
                className="font-head font-black tracking-[-2px] text-white leading-[1.05] mb-6"
                style={{ fontSize: 'clamp(36px,5vw,64px)' }}
              >
                {post.title}
              </h1>
              <p className="text-[17px] text-np-text-muted leading-[1.8] max-w-[760px] mb-8">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-5 font-mono text-[11px] text-np-text-dim">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          <article className="bg-ink-2">
            <div className="max-w-[800px] mx-auto px-14 py-[88px] max-sm:px-7">
              <p className="text-[16px] text-np-text-muted leading-[1.9] mb-12">
                {post.intro}
              </p>

              <div className="space-y-12">
                {post.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="font-head text-[26px] font-bold tracking-[-0.7px] text-white mb-4">
                      {section.heading}
                    </h2>
                    <div className="space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-[15.5px] text-np-text-muted leading-[1.9]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.bullets && (
                      <ul className="mt-5 space-y-3">
                        {section.bullets.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 items-start text-[15px] text-np-text-muted leading-[1.8]"
                          >
                            <span className="text-cyan mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              <div className="mt-16 border-t border-rule pt-8 flex flex-wrap items-center justify-between gap-5">
                <Link
                  href="/blog"
                  className="text-[14px] text-np-text-muted hover:text-cyan transition-colors"
                >
                  ← Back to all articles
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-cyan-border bg-cyan-dim px-5 py-3 text-[13px] font-medium text-cyan transition-colors hover:bg-[rgba(108,54,122,0.18)]"
                >
                  Discuss your agency&apos;s growth
                </Link>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
