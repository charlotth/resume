import cls from "classnames";
import SkillGroup from "../SkillGroup";

export interface ExperienceProps {
    title: string;
    society?: string;
    date?: string;
    contact?: string;
    description?: string;
    tools?: string[];
    tasks?: string[];
    className?: string;
}

const Experience: React.FC<ExperienceProps> = ({ title, society, date, contact, description, tools, tasks, className }) => (
    <section className={cls("px-4", "mb-4", className)}>
        <h3 className="text-lg font-bold">{title}
            {society && (<span className="text-primary-600 ml-1">@ {society}</span>)}
        </h3>
        <h4 className="text-gray-600 text-sm italic">{date}
            {contact && (<span className="text-gray-400 ml-2">&lt;{contact}&gt;</span>)}
        </h4>
        { !!tools && (<SkillGroup skills={tools} size="small" invert /> )}
        <p className="text-sm">{description}</p>
        { !!tasks && (
            <ul className="list-disc ml-8 text-sm">
            {tasks.map((t, i) => (<li key={i}>{t}</li>))}
        </ul>
        )}
    </section>
);

export default Experience;
