export interface PageProps {
  header: React.ReactNode;
  sider?: React.ReactNode;
}

const Page: React.FC<React.PropsWithChildren<PageProps>> = ({ header, sider, children }) => (
  <main className="m-4 h-[297mm] w-[210mm] overflow-hidden bg-white p-0 shadow-lg print:m-0 print:h-screen print:w-screen print:shadow-none">
    {header}

    {!!sider ? (
      <div className="grid grid-cols-4 h-full">
        <div className="bg-primary-100 border-r-2 border-primary-800 h-full px-4 py-2">
          {sider}
        </div>
        <div className="col-span-3 px-2 py-2">
          {children}
        </div>
      </div>
    ) : (
      <div className="px-2 py-2">
        {children}
      </div>
    )}
  </main>
);

export default Page;
