import TeamSection from '@/components/team/TeamSection';

export const metadata = {
  title: 'Our Team | SoftStack Agency',
  description: 'Meet the talented professionals behind SoftStack Agency. Our expert team delivers innovative solutions in web development, AI, and mobile applications.',
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <TeamSection />
    </div>
  );
}