import Resumes from '@/components/Resume';
import type { Resume, ResumeGroup } from "@/types";
import fs from 'fs/promises';
import Head from 'next/head';
import path from 'path';

export async function getResumes(): Promise<ResumeGroup> {
  const dir = path.join(process.cwd(), 'src', 'data');
  const json: ResumeGroup = {};
  let files: string[];
  try {
    files = await fs.readdir(dir);
    await Promise.all(files.map(async (f) => {
      try {
        const contents = await fs.readFile(path.join(dir, f), 'utf8');
        json[path.basename(f, '.json')] = JSON.parse(contents.toString()) as Resume;
      } catch (err) {
        console.error("Reading file", f, err);
      }
    }));
  } catch (err) {
    console.error("reading dir", dir)
  }
  return json;
}

export default async function Home() {
  const datas = await getResumes();
  return (
    <>
      <Head>
        <title>BATARD</title>
        <style>:root {`{--color-primary-h: ${340}; --color-primary-s: ${84}; --color-primary-l: ${58}}`}</style>
      </Head>
      <Resumes resumes={datas} />
    </>
  );
}