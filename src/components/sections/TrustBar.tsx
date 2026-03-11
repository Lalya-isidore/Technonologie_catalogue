import { useTranslations } from 'next-intl';
import { Shield, Thermometer, Award, Headphones, Factory, BadgeCheck } from 'lucide-react';

const ITEMS = [
  { key: 'ip40', Icon: Shield },
  { key: 'temperature', Icon: Thermometer },
  { key: 'warranty', Icon: Award },
  { key: 'support', Icon: Headphones },
  { key: 'capacity', Icon: Factory },
  { key: 'certifications', Icon: BadgeCheck },
] as const;

export function TrustBar() {
  const t = useTranslations('trustBar');

  return (
    <section className="bg-primary-500 text-white py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-6 overflow-x-auto scrollbar-hide">
          {ITEMS.map(({ key, Icon }) => (
            <div key={key} className="flex items-center gap-2 shrink-0">
              <Icon size={20} className="text-secondary-400" />
              <span className="text-sm font-medium whitespace-nowrap">{t(key)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
