export interface PageProps {
    header: React.ReactNode;
    sider: React.ReactNode;
}

const Page: React.FC<React.PropsWithChildren<PageProps>> = ({ header, sider, children }) => (
    <main className="m-4 h-[297mm] w-[210mm] overflow-hidden bg-white p-0 shadow-lg print:m-0 print:h-screen print:w-screen print:shadow-none">
        {header}
        <div className="grid grid-cols-3 h-full">
            <div className="bg-primary-100 border-r-2 border-primary-800 h-full px-4 py-2">
                {sider}
            </div>
            <div className="col-span-2 px-4 py-2">
                {children}
            </div>
        </div>
    </main>
);

export default Page;