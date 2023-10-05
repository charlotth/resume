export interface LanguagesProps {
    items: Array<{ label: string; level: string }>;
}

const Languages: React.FC<LanguagesProps> = ({ items }) => (
    <ul className="flex flex-col gap-4 text-md leading-relaxed -mr-2 mb-2">
        {items.map((item, i) => (
            <li className="flex flex-col" key={i}>{item.label}<span className="italic text-sm">{item.level}</span></li>

        ))}
    </ul>
);

export default Languages;