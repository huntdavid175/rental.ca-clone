interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full md:max-w-[1120px] 3xl:max-w-[1300px] m-auto p-2 ">
      {children}
    </div>
  );
};

export default Layout;
