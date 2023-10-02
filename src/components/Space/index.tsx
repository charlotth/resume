const Space: React.FC<React.PropsWithChildren> = ({ children }) => (
    <div className="flex flex-wrap text-md leading-relaxed -mr-2 my-2">{children}</div>
);

export default Space;