import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ── Ink (background) scale ── */
        ink: {
          DEFAULT: '#080410',  /* near-black with purple depth */
          2:       '#0F0618',
          3:       '#160A1E',
          4:       '#1E0E28',
          5:       '#3C1546',  /* brand dark purple */
        },

        /* ── Primary accent — medium purple ── */
        cyan: {
          DEFAULT: '#6C367A',
          dim:     'rgba(108, 54, 122, 0.18)',
          border:  'rgba(108, 54, 122, 0.40)',
        },

        /* ── Extended purple palette ── */
        violet: {
          light:   '#9B4DAB',   /* hover / brighter purple */
          soft:    '#C4A0D4',   /* lavender — soft highlights */
        },

        /* ── Brand palette from image ── */
        'brand-dark':   '#3C1546',
        'brand-mid':    '#6C367A',
        'brand-white':  '#FFFFFF',
        'brand-black':  '#000000',

        /* ── Complementary accents ── */
        amber: '#C9A227',        /* gold — pairs beautifully with purple */

        /* ── Text scale ── */
        'np-text': {
          DEFAULT: '#F2EAF6',
          muted:   'rgba(242, 234, 246, 0.55)',
          dim:     'rgba(242, 234, 246, 0.28)',
        },

        /* ── Border / rule scale ── */
        rule: {
          DEFAULT: 'rgba(242, 234, 246, 0.07)',
          h:       'rgba(242, 234, 246, 0.14)',
        },
      },

      fontFamily: {
        head: ['var(--font-head)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },

      screens: {
        sm:  '640px',
        md:  '768px',
        lg:  '1024px',
        xl:  '1100px',
        '2xl': '1280px',
      },

      keyframes: {
        'ht-move': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        liveblink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.45' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer-slide': {
          '0%':   { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },

      animation: {
        'ht-move':    'ht-move 20s linear infinite',
        'trust-move': 'ht-move 28s linear infinite',
        liveblink:    'liveblink 2s ease-in-out infinite',
        fadeUp:       'fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both',
      },

      backgroundImage: {
        /* Purple radial glows replacing old cyan ones */
        'hero-radial':
          'radial-gradient(ellipse 70% 60% at 100% 20%, rgba(108,54,122,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 0% 80%, rgba(108,54,122,0.07) 0%, transparent 60%)',
        'partner-radial':
          'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(108,54,122,0.12), transparent)',
        /* Purple gradient for buttons / shimmer */
        'purple-gradient':
          'linear-gradient(135deg, #6C367A 0%, #9B4DAB 100%)',
        'purple-shimmer':
          'linear-gradient(90deg, transparent, rgba(156,77,171,0.15), transparent)',
      },

      transitionTimingFunction: {
        np: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },

      boxShadow: {
        'glow-purple': '0 0 40px rgba(108,54,122,0.45)',
        'glow-sm':     '0 0 20px rgba(108,54,122,0.30)',
      },
    },
  },
  plugins: [],
}

export default config
