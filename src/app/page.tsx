import AboutSelectionProfile from "@/_components/AboutSelectionProfile";
import EventOrganisasi from "@/_components/EventOrganisasi";
import Footer from "@/_components/Footer";
import HeroSelectionProfile from "@/_components/HeroSelectionProfile";
import HistoryKaryaSelectionProfile from "@/_components/HistoryKaryaSelectionProfile";
import NavbarSelection from "@/_components/NavbarSelection";
import SofwareSkillSelectionProfile from "@/_components/SofwareSkillSelectionProfile";
import SosialMedia from "@/_components/SosialMedia";

export default function Home() {
  return (
    <main>
      <NavbarSelection />
      <div>
        <HeroSelectionProfile />
        <AboutSelectionProfile />
        <HistoryKaryaSelectionProfile />
        <EventOrganisasi />
        <SofwareSkillSelectionProfile />
        <SosialMedia />
      </div>
      <Footer />
    </main>
  );
}
