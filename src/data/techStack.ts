export interface TechItem {
  name: string;
  displayName: string;
  icon: {
    type: 'simpleicons' | 'skillicons' | 'text' | 'more';
    value?: string;
    color?: string;
  };
  title?: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}

export const techStack: TechCategory[] = [
  {
    title: 'Languages',
    items: [
      { name: 'ruby', displayName: 'Ruby', icon: { type: 'simpleicons', value: 'ruby', color: 'CC342D' }, title: 'Ruby' },
      { name: 'php', displayName: 'PHP', icon: { type: 'simpleicons', value: 'php', color: '777BB4' }, title: 'PHP' },
      { name: 'typescript', displayName: 'TypeScript', icon: { type: 'simpleicons', value: 'typescript', color: '3178C6' }, title: 'TypeScript' },
      { name: 'kotlin', displayName: 'Kotlin', icon: { type: 'simpleicons', value: 'kotlin', color: '7F52FF' }, title: 'Kotlin' },
      { name: 'more', displayName: 'more', icon: { type: 'more' } },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'rails', displayName: 'Rails', icon: { type: 'simpleicons', value: 'rubyonrails', color: 'D30001' }, title: 'Ruby on Rails' },
      { name: 'laravel', displayName: 'Laravel', icon: { type: 'simpleicons', value: 'laravel', color: 'FF2D20' }, title: 'Laravel' },
      { name: 'react', displayName: 'React', icon: { type: 'simpleicons', value: 'react', color: '61DAFB' }, title: 'React' },
      { name: 'vue', displayName: 'Vue', icon: { type: 'simpleicons', value: 'vuedotjs', color: '4FC08D' }, title: 'Vue.js' },
      { name: 'nextjs', displayName: 'Next.js', icon: { type: 'simpleicons', value: 'nextdotjs', color: '000000' }, title: 'Next.js' },
      { name: 'tailwind', displayName: 'Tailwind', icon: { type: 'simpleicons', value: 'tailwindcss', color: '06B6D4' }, title: 'Tailwind CSS' },
      { name: 'more', displayName: 'more', icon: { type: 'more' } },
    ],
  },
  {
    title: 'Infrastructure & Cloud',
    items: [
      { name: 'aws', displayName: 'AWS', icon: { type: 'skillicons', value: 'aws' }, title: 'AWS' },
      { name: 'oci', displayName: 'Oracle Cloud', icon: { type: 'text', value: 'OCI' }, title: 'Oracle Cloud' },
      { name: 'docker', displayName: 'Docker', icon: { type: 'simpleicons', value: 'docker', color: '2496ED' }, title: 'Docker' },
      { name: 'nginx', displayName: 'nginx', icon: { type: 'simpleicons', value: 'nginx', color: '009639' }, title: 'Nginx' },
      { name: 'caddy', displayName: 'Caddy', icon: { type: 'simpleicons', value: 'caddy', color: '1F88C0' }, title: 'Caddy' },
      { name: 'more', displayName: 'more', icon: { type: 'more' } },
    ],
  },
  {
    title: 'Database & Cache',
    items: [
      { name: 'mysql', displayName: 'MySQL', icon: { type: 'simpleicons', value: 'mysql', color: '4479A1' }, title: 'MySQL' },
      { name: 'postgresql', displayName: 'PostgreSQL', icon: { type: 'simpleicons', value: 'postgresql', color: '4169E1' }, title: 'PostgreSQL' },
      { name: 'redis', displayName: 'Redis', icon: { type: 'simpleicons', value: 'redis', color: 'DC382D' }, title: 'Redis' },
      { name: 'more', displayName: 'more', icon: { type: 'more' } },
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      { name: 'git', displayName: 'Git', icon: { type: 'simpleicons', value: 'git', color: 'F05032' }, title: 'Git' },
      { name: 'githubactions', displayName: 'GitHub Actions', icon: { type: 'simpleicons', value: 'githubactions', color: '2088FF' }, title: 'GitHub Actions' },
      { name: 'circleci', displayName: 'CircleCI', icon: { type: 'simpleicons', value: 'circleci', color: '343434' }, title: 'CircleCI' },
      { name: 'sentry', displayName: 'Sentry', icon: { type: 'simpleicons', value: 'sentry', color: '362D59' }, title: 'Sentry' },
      { name: 'cloudwatch', displayName: 'CloudWatch', icon: { type: 'skillicons', value: 'aws' }, title: 'CloudWatch' },
      { name: 'rspec', displayName: 'RSpec', icon: { type: 'simpleicons', value: 'ruby', color: 'CC342D' }, title: 'RSpec' },
      { name: 'more', displayName: 'more', icon: { type: 'more' } },
    ],
  },
];
