export interface TitleProps {
    icon?: string;
}

const Title: React.FC<React.PropsWithChildren<TitleProps>> = ({ icon, children }) => (
    <h2 className="text-lg text-primary uppercase font-bold flex items-center my-4 border-b-2 border-primary">
        {icon && (<img src={icon} className="rounded-full flex-none w-8 bg-primary p-1 mr-2" />)}
        {children}
    </h2>
);

export default Title;
