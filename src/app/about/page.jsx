// Importing required components
import AboutComp from "@/components/AboutComp/AboutComp"; // About section component
import FeatureComp from "@/components/FeatureComp/FeatureComp"; // Feature component
import MissionTitleComp from "@/components/MissionTitleComp/MissionTitleComp"; // Mission title component

/**
 * About page component
 *
 * This component represents the about page of the application.
 * It includes the following sections:
 * - AboutComp: Detailed information about the company or organization
 * - MissionTitleComp: Title component for the mission or purpose section
 * - FeatureComp: Feature component showcasing the main features or details
 */
const About = () => {
  return (
    <main>
      <AboutComp />
      <MissionTitleComp />
      <FeatureComp />
    </main>
  );
};

export default About;
