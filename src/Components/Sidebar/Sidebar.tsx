import SidebarItem from "./SidebarItem";

interface Props {
  items: { to: string; label: string }[];
}

const Sidebar = ({ items }: Props) => {
  return (
    <div className="flex flex-col h-full w-64 bg-gray-800 text-white shadow-lg">
      <div className="p-4 text-lg font-bold">My App</div>
      <nav className="flex-1">
        <ul className="space-y-2 p-4">
          {items.map((item, index) => (
            <SidebarItem key={index} to={item.to} label={item.label} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
