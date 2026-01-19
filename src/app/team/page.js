import TeamSection from '@/components/team/TeamSection';

export const metadata = {
  title: 'Our Team | BD Stack Solutions',
  description: 'Meet the talented professionals behind BD Stack Solutions. Our expert team delivers innovative solutions in web development, AI, and mobile applications.',
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <TeamSection />
    </div>
  );
}