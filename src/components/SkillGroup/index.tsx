export interface SkillGroupProps {
    title: string;
    skills: string[];
}

const SkillGroup : React.FC<SkillGroupProps> = ({ title, skills }) => (
    <>
        <h3 className="text-primary-800 font-bold">{title}</h3>
        <ul className="flex flex-wrap text-md leading-relaxed -mr-2 my-2">
            {skills.map(s => (
                <li key={s} className="px-2 mr-2 mb-2 text-sm text-gray-750 bg-primary-600 text-white rounded">{s}</li>
            ))}
        </ul>
    </>
);

export default SkillGroup;