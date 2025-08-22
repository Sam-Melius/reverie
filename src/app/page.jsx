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
      <AngleDivider color="dark-grey" height={120} />       {/* next section bg */}
      <PainPoints />
      <AngleDivider color="#000000" height={160} />       {/* next section bg */}
      <CoreServices />
      <AngleDivider color="#0056cc" height={160} />       {/* next section bg */}
      <Industries />
      <AngleDivider color="#0056cc" height={160} />       {/* next section bg */}
      <WhyChoose />
    </main>
  );
}
