export interface TitleProps {
    icon?: string;
}

const Title: React.FC<React.PropsWithChildren<TitleProps>> = ({ icon, children }) => (
    <h2 className="text-lg text-primary-600 uppercase font-bold flex items-center my-4">
        {icon && (<img src={icon} className="rounded flex-none w-8 bg-primary-600 p-1 mr-2" />)}
        {children}
    </h2>
);

export default Title;