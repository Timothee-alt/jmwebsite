import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Elvis Brand Colors
        'elvis-red': '#C8102E',
        'elvis-gold': '#D4AF37',
        'elvis-black': '#000000',
        'elvis-white': '#FFFFFF',
        'elvis-pink': '#FFB6C1',
        'elvis-blue': '#00BFFF',
        
        // Shadcn compatibility
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      fontFamily: {
        'playbill': ['Playbill', 'serif'],
        'broadway': ['Broadway', 'serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'elvis-gradient': 'linear-gradient(135deg, #F7DC6F 0%, #D4AF37 100%)',
        'neon-gradient': 'linear-gradient(90deg, #C8102E, #D4AF37, #00BFFF)',
        'vegas-lights': 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.3) 0%, rgba(0, 0, 0, 0.9) 70%)',
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'lightning-flash': 'lightning-flash 0.3s ease-in-out',
        'scintillant': 'scintillant 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
      },
      keyframes: {
        'neon-pulse': {
          '0%, 100%': { 
            textShadow: '0 0 5px #00BFFF, 0 0 10px #00BFFF, 0 0 15px #00BFFF',
            transform: 'scale(1)'
          },
          '50%': { 
            textShadow: '0 0 10px #00BFFF, 0 0 20px #00BFFF, 0 0 30px #00BFFF',
            transform: 'scale(1.02)'
          },
        },
        'lightning-flash': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.1)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'scintillant': {
          '0%, 100%': { 
            boxShadow: '0 0 5px #D4AF37, inset 0 0 5px #D4AF37',
            borderColor: '#D4AF37'
          },
          '50%': { 
            boxShadow: '0 0 20px #D4AF37, inset 0 0 10px #D4AF37',
            borderColor: '#FFD700'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'neon-red': '0 0 10px #C8102E, 0 0 20px #C8102E, 0 0 30px #C8102E',
        'neon-gold': '0 0 10px #D4AF37, 0 0 20px #D4AF37, 0 0 30px #D4AF37',
        'neon-blue': '0 0 10px #00BFFF, 0 0 20px #00BFFF, 0 0 30px #00BFFF',
        'vegas-glow': '0 4px 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(200, 16, 46, 0.2)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;