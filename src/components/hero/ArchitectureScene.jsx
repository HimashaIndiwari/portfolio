import {
  SiReact,
  SiHtml5,
  SiJavascript,
  SiAndroid,
  SiSpringboot,
  SiNodedotjs,
  SiJsonwebtokens,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiGithub,
  SiDocker,
  SiGithubactions,
} from "react-icons/si";
import { FaCss3Alt, FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import ArchitectureModule from "./ArchitectureModule";
import DataCables from "./DataCables";
import CenterHub from "./CenterHub";
import SceneEnvironment from "./SceneEnvironment";
import { useParallaxScene } from "../../hooks/useParallaxScene";

function TechTile({ icon: Icon, label, colorClass }) {
  return (
    <span className={`technology-tile tech-tile-${colorClass}`}>
      <Icon />
      {label}
    </span>
  );
}

/**
 * Full 3D architecture dashboard scene with parallax.
 */
export default function ArchitectureScene() {
  const { sceneRef, handlePointerMove, handlePointerLeave } = useParallaxScene();

  return (
    <div
      className="architecture-scene-wrapper"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div ref={sceneRef} className="system-scene">
        <SceneEnvironment />
        <DataCables />

        {/* Frontend — left */}
        <ArchitectureModule
          subtitle="Layer 01"
          title="Frontend Module"
          glow="cyan"
          className="card-frontend scene-layer"
          dataDepth="1.2"
          floatDelay={0.2}
          technologies={
            <>
              <TechTile icon={SiReact} label="React" colorClass="react" />
              <TechTile icon={SiHtml5} label="HTML5" colorClass="html" />
              <TechTile icon={FaCss3Alt} label="CSS3" colorClass="css" />
              <TechTile icon={SiJavascript} label="JavaScript" colorClass="js" />
              <TechTile icon={SiAndroid} label="Android" colorClass="android" />
            </>
          }
        />

        {/* Backend — right */}
        <ArchitectureModule
          subtitle="Layer 02"
          title="Backend Module"
          glow="purple"
          className="card-backend scene-layer"
          dataDepth="1.35"
          floatDelay={0.35}
          technologies={
            <>
              <TechTile icon={SiSpringboot} label="Spring Boot" colorClass="springboot" />
              <TechTile icon={SiNodedotjs} label="Node.js" colorClass="nodejs" />
              <TechTile icon={TbApi} label="REST API" colorClass="api" />
              <TechTile icon={SiJsonwebtokens} label="JWT" colorClass="jwt" />
            </>
          }
        />

        {/* Persistence — bottom */}
        <ArchitectureModule
          subtitle="Layer 03"
          title="Persistence layer"
          glow="hybrid"
          className="card-persistence scene-layer"
          dataDepth="1.5"
          floatDelay={0.5}
          technologies={
            <>
              <TechTile icon={SiMysql} label="MySQL" colorClass="mysql" />
              <TechTile icon={SiMongodb} label="MongoDB" colorClass="mongodb" />
              <TechTile icon={SiFirebase} label="Firebase" colorClass="firebase" />
            </>
          }
        />

        {/* Delivery — top right */}
        <ArchitectureModule
          subtitle="Layer 04"
          title="Delivery layer"
          glow="glass"
          className="card-delivery scene-layer"
          dataDepth="1.1"
          floatDelay={0.65}
          footerText="Deployment & CI/CD"
          technologies={
            <>
              <TechTile icon={SiGithub} label="GitHub" colorClass="github" />
              <TechTile icon={SiDocker} label="Docker" colorClass="docker" />
              <TechTile icon={FaAws} label="AWS" colorClass="aws" />
              <TechTile icon={SiGithubactions} label="CI/CD" colorClass="cicd" />
            </>
          }
        />

        <CenterHub />
      </div>
    </div>
  );
}
