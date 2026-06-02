/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#0B0F19',
          card: 'rgba(17, 24, 39, 0.7)',
          cardGlow: 'rgba(30, 27, 75, 0.4)',
          indigo: '#4F46E5',
          indigoLight: '#6366F1',
          indigoGlow: 'rgba(79, 70, 229, 0.15)',
          blue: '#3B82F6',
          emerald: '#10B981',
          amber: '#F59E0B',
          red: '#EF4444',
          borderGlass: 'rgba(255, 255, 255, 0.08)',
          borderGlow: 'rgba(99, 102, 241, 0.2)'
        }
      },
      fontFamily: {
        head: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      animation: {
        'marker-pulse': 'markerPulse 2s infinite',
        'line-dash': 'dash 10s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      },
      keyframes: {
        markerPulse: {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 8px rgba(16, 185, 129, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(16, 185, 129, 0)' }
        },
        dash: {
          to: { strokeDashoffset: '-100' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
}
