import SidebarHeader from "./SidebarHeader";
import NavLinks from "./NavLinks";
import MemberProfile from "./MemberProfile";
function Sidebar() {
  return (
    <div className="px-4 w-80 bg-base-300 py-12 grid grid-rows-[auto,1fr,auto] min-h-full">
      {/* First row */}
      <SidebarHeader />
      {/* Second row */}
      <NavLinks />

      {/* Third row */}
      <MemberProfile />
    </div>
  );
}

export default Sidebar;
