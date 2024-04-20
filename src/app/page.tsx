"use client";
import Hero from "../components/landing-page/hero";
import Navbar from "../components/landing-page/navbar";
import SectionTitle from "../components/landing-page/sectionTitle";
import {
  benefitOne,
  benefitThree,
  benefitTwo,
} from "../components/landing-page/data";
import Video from "../components/landing-page/video";
import Benefits from "../components/landing-page/benefits";
import Footer from "../components/landing-page/footer";
import Testimonials from "../components/landing-page/testimonials";
import Faq from "../components/landing-page/faq";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { TracingBeam } from "@/components/ui/tracing-beam";

const Home = () => {
  return (
    <>
      <TracingBeam className="w-full right-0">
        <FollowerPointerCard>
          <Navbar />
          <Hero />
          <SectionTitle pretitle="Our Services" title=" Why choose us?">
            Choose Social Sphere to simplify content creation, boost efficiency,
            and gain valuable insights with our user-friendly platform and
            powerful analytics tools.
          </SectionTitle>
          <Benefits data={benefitOne} />
          <Benefits imgPos="right" data={benefitTwo} />
          <Benefits data={benefitThree} />
          <SectionTitle
            pretitle="Watch a Demo"
            title="Learn more about our product"
          >
            {/* TODO: Video not visible, work on it */}
            <Video />
          </SectionTitle>
          <SectionTitle
            pretitle="Testimonials"
            title="Here's what our users said"
          ></SectionTitle>
          <Testimonials />
          <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
            Answer your customers possible questions here, it will increase the
            conversion rate as well as support or chat requests.
          </SectionTitle>
          <Faq />
          <Footer />
        </FollowerPointerCard>
      </TracingBeam>
    </>
  );
};

export default Home;
