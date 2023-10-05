import Experience from "@/components/Experience";
import Languages from "@/components/Language";
import SkillGroup from "@/components/SkillGroup";
import Title from "@/components/Title";
import { Resume } from "@/types";
import { get, isArray } from "lodash";

const regex = /^(experiences|hobbies|languages|skills|trainings)(\[[\d:]+\])?$/i;


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

export const Factory: React.FC<{ source: string; data: Resume }> = ({ source, data }) => {
    const d = getData(data, source);

    switch (d?.name) {
        case 'skills':
            return (
                <>
                    <Title>Compétences</Title>
                    {(d.items as Resume['skills']).map((v, i) => (
                        <SkillGroup title={v.categorie} skills={v.items} key={i} />
                    ))}
                </>
            );
        case 'experiences':
            return (
                <>
                    <Title>Expériences</Title>
                    {(d.items as Resume['experiences']).map((v, i) => (
                        <Experience {...v} key={i} />
                    ))}
                </>
            )
        case 'trainings':
            return (
                <>
                    <Title>Formations</Title>
                    {(d.items as Resume['trainings']).map((v, i) => (
                        <Experience {...v} key={i} />
                    ))}
                </>
            )
        case 'hobbies':
            return (
                <>
                    <Title>Loisirs</Title>
                    <SkillGroup skills={d.items as Resume['hobbies']} />
                </>
            )

        case 'languages':
            return (
                <>
                    <Title>Langues</Title>
                    <Languages items={d.items as Resume['languages']} />
                </>
            );

        default:
            return null;
    }
}
