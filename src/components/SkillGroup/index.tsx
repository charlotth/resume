import cls from 'classnames';

export interface SkillGroupProps {
    title?: string;
    skills: string[];
    invert?: boolean;
}

const SkillGroup: React.FC<SkillGroupProps> = ({ title, skills, invert }) => {
    const className = cls(
        "px-2 mr-2 mb-2 text-sm rounded",
        invert ? "text-primary-600 bg-white" : "bg-primary-600 text-white"
    );

    return (
        <>
            {title && (<h3 className="text-primary-800 font-bold">{title}</h3>)}
            <ul className="flex flex-wrap text-md leading-relaxed -mr-2 my-2">
                {skills.map(s => (
                    <li key={s} className={className}>{s}</li>
                ))}
            </ul>
        </>
    );
}

export default SkillGroup;