import RoseDay from "@/components/valentine/RoseDay";
import ProposeDay from "@/components/valentine/ProposeDay";
import ChocolateDay from "@/components/valentine/ChocolateDay";
import TeddyDay from "@/components/valentine/TeddyDay";
import PromiseDay from "@/components/valentine/PromiseDay";
import HugDay from "@/components/valentine/HugDay";
import KissDay from "@/components/valentine/KissDay";
import ValentineDay from "@/components/valentine/ValentineDay";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <RoseDay />
      <ProposeDay />
      <ChocolateDay />
      <TeddyDay />
      <PromiseDay />
      <HugDay />
      <KissDay />
      <ValentineDay />
    </main>
  );
};

export default Index;
