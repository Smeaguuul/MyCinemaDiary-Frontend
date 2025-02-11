import { Link } from "react-router-dom";

interface Props {
  to: string;
  label: string;
}

const SidebarItem = ({ to, label }: Props) => {
  return (
    <li>
      <Link
        to={to}
        className="block p-2 rounded hover:bg-gray-700 transition duration-200"
      >
        {label}
      </Link>
    </li>
  );
};

export default SidebarItem;
