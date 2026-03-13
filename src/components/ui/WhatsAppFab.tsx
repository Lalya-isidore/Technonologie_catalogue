'use client';

import { SITE } from '@/lib/constants';

export function WhatsAppFab() {
  return (
    <>
      <a
        href={SITE.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nous contacter sur WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform duration-200"
      >
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-[whatsapp-ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-[whatsapp-ping_2s_cubic-bezier(0,0,0.2,1)_infinite_0.6s]" />

        {/* WhatsApp icon */}
        <svg viewBox="0 0 32 32" className="w-8 h-8 relative z-10" fill="white">
          <path d="M16.004 2.667A13.26 13.26 0 0 0 2.67 15.923a13.16 13.16 0 0 0 1.785 6.631L2.667 29.333l7.014-1.84a13.28 13.28 0 0 0 6.323 1.607h.006c7.32 0 13.323-5.956 13.323-13.277a13.22 13.22 0 0 0-3.9-9.39 13.22 13.22 0 0 0-9.43-3.766zm0 24.307a11.03 11.03 0 0 1-5.625-1.54l-.404-.24-4.183 1.097 1.116-4.076-.263-.418a10.93 10.93 0 0 1-1.677-5.83c0-6.074 4.944-11.018 11.03-11.018a10.95 10.95 0 0 1 7.797 3.231 10.95 10.95 0 0 1 3.228 7.8c-.001 6.08-4.95 11.023-11.019 11.023v-.029zm6.046-8.254c-.332-.166-1.96-.967-2.264-1.078-.305-.11-.527-.166-.748.167-.222.332-.86 1.078-1.054 1.3-.194.22-.388.248-.72.083-.332-.166-1.4-.516-2.667-1.645-.986-.879-1.652-1.964-1.845-2.296-.194-.332-.02-.512.145-.677.15-.149.332-.388.498-.582.166-.194.222-.332.332-.554.111-.222.056-.416-.028-.582-.083-.166-.748-1.802-1.025-2.468-.27-.648-.544-.56-.748-.571l-.637-.01a1.22 1.22 0 0 0-.887.416c-.305.332-1.164 1.137-1.164 2.773s1.192 3.217 1.358 3.44c.166.22 2.346 3.58 5.684 5.021.794.343 1.414.548 1.897.701.797.253 1.523.218 2.096.132.64-.095 1.96-.8 2.237-1.574.277-.773.277-1.435.194-1.573-.083-.139-.305-.222-.637-.388z" />
        </svg>
      </a>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes whatsapp-ping {
          0% { transform: scale(1); opacity: 0.4; }
          70% { transform: scale(1.8); opacity: 0; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}} />
    </>
  );
}
