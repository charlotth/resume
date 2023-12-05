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
    isSub?: boolean;
    isLast?: boolean
}

const Experience: React.FC<ExperienceProps> = ({ title, society, date, contact, description, tools, tasks, className, isSub, isLast }) => (
    <section className={cls("px-4 mb-4",
          className,
          isSub && "ml-8 border-l border-gray-400 border-dashed",
          isLast ? "mb-4 pb-0" : "pb-4 mb-0"
    )}>
        <h3 className="text-lg font-bold">{title}
            {society && (<span className="text-primary ml-1">@ {society}</span>)}
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
