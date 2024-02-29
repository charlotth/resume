import cls from "classnames";
import SkillGroup from "../SkillGroup";
import { get, isArray, isString } from "lodash";

export interface ExperienceProps {
    title: string;
    society?: string;
    date?: string;
    contact?: string;
    description?: string;
    tools?: string[];
    tasks?: Array<string | { name: string, tasks: string[] }>;
    className?: string;
    isSub?: boolean;
    isLast?: boolean
}

const Tasker: React.FC<{ tasks?: Array<string | { name: string, tasks: string[] }>, isSub?: boolean }> = ({ tasks, isSub }) => {
  if (!tasks) {
    return null;
  }

  return (
    <ul className={cls("ml-6 text-sm", isSub ? "list-[circle]" : "list-disc")}>
       {tasks.map((t, i) => (
              <li key={i}>
                {isString(t) ? t : (
                  <>
                    {t.name}
                    <Tasker tasks={t.tasks} isSub />
                  </>
                )}
              </li>
            ))}
    </ul>
  );
}

const Experience: React.FC<ExperienceProps> = ({ title, society, date, contact, description, tools, tasks, className, isSub, isLast }) => (
    <section className={cls("px-4",
          className,
          !isSub ? "mb-4 main-exp" : "ml-6 border-l border-gray-400 border-dashed sub-exp mb-4 pb-0",
    )}>
        <h3 className="text-lg font-bold">{title}
            {society && (<span className="text-primary ml-1">@ {society}</span>)}
        </h3>
        <h4 className="text-gray-600 text-sm italic">{date}
            {contact && (<span className="text-gray-400 ml-2">&lt;{contact}&gt;</span>)}
        </h4>
        { !!tools && (<SkillGroup skills={tools} size="small" color="gray" /> )}
        <p className="text-sm">{description}</p>
        <Tasker tasks={tasks} />
    </section>
);

export default Experience;
