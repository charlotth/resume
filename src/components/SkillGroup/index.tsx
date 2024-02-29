import cls from 'classnames';

export interface SkillGroupProps {
    title?: string;
    skills: string[];
    color?: 'primary' | 'gray' | 'dark',
    size?: 'small' | 'normal';
}

const SkillGroup: React.FC<SkillGroupProps> = ({ title, skills, color, size }) => {
    const className = cls(
        `px-2 py-0.5 text-${size === 'small' ? 'xs' : 'sm'} rounded`,
        (color === undefined || color === 'primary') && "bg-primary text-white",
        color === 'gray' && "text-gray-600 bg-gray-200",
        color === 'dark' && "bg-primary-800 text-white"
    );

    return (
        <>
            {title && (<h3 className="text-primary-800 font-bold">{title}</h3>)}
            <ul className={cls("flex flex-wrap leading-relaxed gap-2 mt-2", color === 'gray' ? 'mb-2' : 'mb-6')}>
                {skills.map(s => (
                    <li key={s} className={className}>{s}</li>
                ))}
            </ul>
        </>
    );
}

export default SkillGroup;
