'use client';

import Header, { HeaderProps } from '@/components/Header';
import { GithubIcon, LocationIcon, MailIcon, PhoneIcon } from '@/components/Icons';
import Page from '@/components/Page';
import type { Resume, ResumeGroup } from '@/types';
import { get } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { Factory } from './Factory';
import ColorPicker from '../ColorPicker';
import { getPalette } from '@/utils/colors';


const ResumeDisplay: React.FC<{ resume: Resume }> = ({ resume }) => {
  const { layout, profile } = resume;

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
          <Factory data={resume} source={s} />
        </section>
      ))}
    >
      {p.content.map((c) => (
        <Factory data={resume} source={c} key={c} page={ip} />
      ))}
    </Page>
    )
  })
};

const Group: React.FC<{ resumes: ResumeGroup }> = ({ resumes }) => {
  const [file, setFile] = useState(Object.keys(resumes)[0]);
  const [color, setColor] = useState('#ee3c76');
  useEffect(() => {
    const palette = getPalette(color);
    const root = document.querySelector<HTMLElement>(':root') || document.documentElement;
    [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].forEach((n, i) => {
      root.style.setProperty(`--color-primary-${n}`, palette[i]);
    });
  }, [color]);

  const resume = useMemo(() => {
    return get(resumes, file);
  }, [resumes, file]);
  const presetColors = [
    "#6231af",
    "#ee3C76",
    "#f59e0b",
    "#2dd4bf",
    "#06b6d4",
    "#007f00",
  ]

  return (
    <>
      <div className="print:hidden flex flex-col gap-y-2 fixed top-5 left-5 w-[200px]">
      <div className="w-60">
        <label htmlFor="datas" className="block mb-2 text-sm font-medium text-gray-900">Select datas</label>
        <select name="datas" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => { setFile(e.target.value) }}>
          {Object.keys(resumes).map(k => (<option value={k} key={k}>{k}.json</option>))}
        </select>
      </div>

      <div className="w-[200px] rounded-xl bg-white p-3 text-center flex items-center space-x-4 shadow-xl print:hidden">
        <ColorPicker
          color={color}
          onChange={setColor}
          presetColors={presetColors}
          className='flex-initial w-42'
        />
        <input className="text-sm rounded border border-gray-300 flex-1 w-0 p-1" type='text' value={color} onChange={(e) => { setColor(e.target.value); }} />
      </div>
      </div>

      <ResumeDisplay resume={resume} />
    </>
  );
}

export default Group;
