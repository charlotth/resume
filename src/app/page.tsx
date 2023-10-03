import Experience from '@/components/Experience'
import Header, { HeaderProps } from '@/components/Header'
import { GithubIcon, LocationIcon, MailIcon, PhoneIcon } from '@/components/Icons'
import Page from '@/components/Page'
import SkillGroup from '@/components/SkillGroup'
import Title from '@/components/Title'
import { get, isArray } from 'lodash';

import data from '@/data/fr.json';
import Languages from '@/components/Language'


const regex = /^(experiences|hobbies|languages|skills|trainings)(\[[\d:]+\])?$/i;

interface Resume {
  profile: {
    name: string;
    avatar?: string;
    title: string;
    description?: string;
    email?: string;
    phone?: string;
    location?: string;
    github?: string;
  },
  skills: Array<{ categorie?: string; items: string[] }>;
  experiences: Array<{ title: string; society?: string; date?: string; contact?: string; description?: string; tasks?: string[] }>;
  languages: Array<{ label: string; level: string; }>;
  trainings: Array<{ title: string; society?: string; date?: string; description?: string; }>;
  hobbies: string[];
}

function getData(d: Resume, path: string) {
  const m = regex.exec(path);

  if (m === null) {
    return undefined;
  }

  // get section
  var arr = get(d, m[1]);
  if (arr === undefined) {
    return undefined;
  }
  if (!isArray(arr)) {
    return undefined;
  }

  // get range
  if (!m[2]) {
    return { name: m[1], items: arr };
  }

  const parts = m[2].substring(1, m[2].length - 1).split(':');

  if (parts.length == 1) {
    const index = parseInt(parts[0]);
    return !isNaN(index) ? arr[index] : undefined;
  }

  const from = parseInt(parts[0]);
  const to = parseInt(parts[1]);

  return {
    name: m[1],
    items: arr.slice(isNaN(from) ? undefined : from, isNaN(to) ? undefined : to)
  }
}

const Factory: React.FC<{ source: string; data: Resume }> = ({ source, data }) => {
  const d = getData(data, source);

  switch (d?.name) {
    case 'skills':
      return (
        <>
          <Title icon="https://d.novoresume.com/yna_pub/svg/section/skills/white.svg">Compétences</Title>
          {(d.items as Resume['skills']).map((v, i) => (
            <SkillGroup title={v.categorie} skills={v.items} key={i} />
          ))}
        </>
      );
    case 'experiences':
      return (
        <>
          <Title icon="https://d.novoresume.com/yna_pub/svg/section/work/white.svg">Expériences</Title>
          {(d.items as Resume['experiences']).map((v, i) => (
            <Experience {...v} key={i} />
          ))}
        </>
      )
    case 'trainings':
      return (
        <>
          <Title icon="https://d.novoresume.com/yna_pub/svg/section/edu/white.svg">Formations</Title>
          {(d.items as Resume['trainings']).map((v, i) => (
            <Experience {...v} key={i} />
          ))}
        </>
      )
    case 'hobbies':
      return (
        <>
          <Title icon="https://d.novoresume.com/yna_pub/svg/section/interests/white.svg">Loisirs</Title>
          <SkillGroup skills={d.items as Resume['hobbies']} invert />
        </>
      )

    case 'languages':
      return (
        <>
          <Title icon="https://d.novoresume.com/yna_pub/svg/section/lang/white.svg">Langues</Title>
          <Languages items={d.items as Resume['languages']} />
        </>
      );

    default:
      return null;
  }
}

export default function Home() {
  const { profile, layout } = data;

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
      sider={p.sider.map((s) => (
        <section className="flex flex-col" key={s}>
          <Factory data={data} source={s} />
        </section>
      ))}
    >
      {p.content.map((c) => (
        <Factory data={data} source={c} key={c} />
      ))}
    </Page>
    )
  });
}