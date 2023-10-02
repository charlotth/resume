export interface HeaderProps {
    name: string;
    title: string;
    description?: string;
    avatar?: string;
    items?: Array<{ icon?: React.ReactNode, label: string }>
}

const Header: React.FC<HeaderProps> = ({ name, title, description, avatar, items }) => (
    <header>
        <div className="bg-primary-600 px-4 py-3 flex flew-row justify-between">
            <div className="flex flex-col justify-center">
                <h1 className="text-white text-xl">{name}</h1>
                <h2 className="text-white text-xl uppercase">{title}</h2>
                {description && (
                    <p className="text-white text-xs italic pr-4">{description}</p>
                )}
            </div>
            { avatar && (<img src={avatar} className="rounded-full flex-none w-28 border-4 border-primary-800" alt="Picture" />)}
        </div>
        {
            !!items && (
                <div className="bg-primary-800 flex flew-row items-center justify-center px-4 gap-8">
                    {items.map((item, idx) => (
                        <span className="text-white text-sm flex items-center" key={idx}>
                            {item.icon}
                            {item.label}
                        </span>
                    ))}
                </div>
            )
        }
    </header>

);

export default Header;