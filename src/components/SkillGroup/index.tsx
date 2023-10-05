import cls from 'classnames';

export interface SkillGroupProps {
    title?: string;
    skills: string[];
    invert?: boolean;
    size?: 'small' | 'normal';
}

const SkillGroup: React.FC<SkillGroupProps> = ({ title, skills, invert, size }) => {
    const className = cls(
        `px-2 py-0.5 text-${size === 'small' ? 'xs' : 'sm'} rounded`,
        invert ? "text-gray-600 bg-gray-200" : "bg-primary-600 text-white"
    );

    return (
        <>
            {title && (<h3 className="text-primary-800 font-bold">{title}</h3>)}
            <ul className="flex flex-wrap leading-relaxed gap-2 my-2">
                {skills.map(s => (
                    <li key={s} className={className}>{s}</li>
                ))}
            </ul>
        </>
    );
}

export default SkillGroup;
