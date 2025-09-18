import Hero from "../components/Hero";
import PainPoints from "../components/PainPoints";
import CoreServices from "../components/CoreServices";
import Industries from "../components/Industries";
import AngleDivider from "../components/AngleDivider";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
  return (
    <main>
      <Hero />
      <AngleDivider  />       {/* next section bg */}
      <PainPoints />
      <AngleDivider flip />       {/* next section bg */}
      <CoreServices />
      <AngleDivider />       {/* next section bg */}
      <Industries />
      <AngleDivider flip />       {/* next section bg */}
      <WhyChoose />
    </main>
  );
}
