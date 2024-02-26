import NavbarLandingPage from "../LandingPage/NavbarLandingPage";
import ContainerLandingPage from "../LandingPage/ContainerLandingPage";
import FooterLandingPage from "../LandingPage/FooterLandingPage";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContainerLandingPage>
      <NavbarLandingPage />
      {children}
      <FooterLandingPage />
    </ContainerLandingPage>
  );
}
