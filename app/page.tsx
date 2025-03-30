import About2 from "@/components/About2";
import Cards1 from "@/components/Cards1";
import HeroOneImg from "@/components/HeroOneImg";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import Usluge from "@/components/Usluge";
import { cards1Data } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <HeroOneImg />
      <About2 />
      <PozoviteNasOdmah />
      <Usluge />
      <Cards1 title={"Zašto Odabrati Drulovka Niš?"} data={cards1Data} />
    </div>
  );
}
