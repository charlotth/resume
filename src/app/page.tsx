import Experience from '@/components/Experience'
import Header, { HeaderProps } from '@/components/Header'
import { GithubIcon, LocationIcon, MailIcon, PhoneIcon } from '@/components/Icons'
import Page from '@/components/Page'
import SkillGroup from '@/components/SkillGroup'
import Title from '@/components/Title'

import data from '@/data/fr.json';


const SiderFactory: React.FC<{ data: typeof data, type: string }> = ({ data, type }) => {
  // allowed sections
  switch ((type || '').toLowerCase()) {
    case 'skills': 
      <Title icon="https://d.novoresume.com/yna_pub/svg/section/skills/white.svg">Compétences</Title>
      <SkillGroup title='Langages' skills={['Go', 'C#', 'Typescript', 'Javascript (ES6+)', 'Shell', 'Java', 'Python']} />
      <SkillGroup title='Frameworks & Librairies' skills={['.NET', 'React', 'Next.js', 'Mobx', 'Antd', 'Mui', 'Tailwind']} />
      <SkillGroup title='Base de données' skills={['Oracle', 'Postgres', 'SQL Server', 'Elasticsearch', 'Redis', 'MongoDB', 'Hive']} />
      <SkillGroup title='Cloud' skills={['Docker', 'Swarm', 'Kubernetes', 'Azure', 'GCP', 'IaC', 'Nats.io', 'RabbitMQ', 'Keycloak']} />
      <SkillGroup title='Pratiques' skills={['Software craftsmanship', 'Agilité', 'CI/CD', 'Micro service', 'OAuth', 'Design patterns', 'Clean architecture', 'CQRS', 'DDD', 'TDD']} />
      <SkillGroup title='Médias' skills={['Photoshop', 'Premiere', 'After Effect', 'Soundbooth', 'Image Magick']} />


    default: 
      return null;
  }
  
  
  return types.map((t) => (
    <section className="flex flex-col" key={t}>
      {

      }
    </section>
  ));
};


export default function Home() {
  const { profile, skills, experiences, trainings, hobbies, layout } = data;

  return layout.pages.map((p, ip) => {
    // calc header
    const hp: HeaderProps = {
      name: profile.name,
      title: profile.title,
    };

    if (ip === 0) {
      hp.avatar = profile.avatar;
      hp.description = profile.description;
      hp.items = [];

      if (!!profile.email) {
        hp.items.push({ icon: (<MailIcon />), label: profile.email });
      }
      if (!!profile.phone) {
        hp.items.push({ icon: (<PhoneIcon />), label: profile.phone });
      }
      if (!!profile.location) {
        hp.items.push({ icon: (<LocationIcon />), label: profile.location });
      }
      if (!!profile.github) {
        hp.items.push({ icon: (<GithubIcon />), label: profile.github });
      }
    }

    // calc position
    return (<Page
      key={ip}
      header={<Header {...hp} />}
      sider={}
    >
      lol
    </Page>
    )
  });
}