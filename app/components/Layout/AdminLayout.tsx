import ContainerLandingPage from "../LandingPage/ContainerLandingPage";

import NavbarAdmin from "../Admin/NavbarAdmin";
import SidebarAdmin from "../Admin/SidebarAdmin";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarAdmin />
      <SidebarAdmin />
      {children}
    </>
  );
}
