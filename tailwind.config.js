/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0C0C0C',
        surface: '#121214',
        'surface-raised': '#17181B',
        border: 'rgba(215, 226, 234, 0.12)',
        'border-strong': 'rgba(215, 226, 234, 0.24)',
        primary: '#FFFFFF',
        secondary: '#D7E2EA',
        muted: '#7A8896',
        purple: {
          DEFAULT: '#A855F7',
          soft: '#C084FC',
        },
        blue: {
          DEFAULT: '#3B82F6',
          soft: '#60A5FA',
        },
        orange: {
          DEFAULT: '#F97316',
          soft: '#FB923C',
        },
      },
      fontFamily: {
        display: ['Kanit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        sm: '12px',
        md: '20px',
        lg: '32px',
      },
      spacing: {
        'section-mobile': '64px',
        'section-mobile-lg': '96px',
        'section-desktop': '120px',
        'section-desktop-lg': '160px',
      },
      backgroundImage: {
        'gradient-signal': 'linear-gradient(135deg, #A855F7 0%, #3B82F6 100%)',
        'gradient-radar': 'radial-gradient(circle at center, rgba(168,85,247,0.18) 0%, rgba(59,130,246,0.08) 45%, transparent 70%)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        scan: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 40px' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        scan: 'scan 3s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.2s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
};
