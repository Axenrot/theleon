import NextJsIcon from "./icons/NextJsIcon";
import TailwindIcon from "./icons/TailwindIcon";
import ReactIcon from "./icons/ReactIcon";
import ReactNativeIcon from "./icons/ReactNativeIcon";
import TypeScriptIcon from "./icons/TypeScriptIcon";
import ThreeIcon from "./icons/ThreeIcon";
import AWSIcon from "./icons/AWSIcon";
import InsomniaIcon from "./icons/InsomniaIcon";
import PostmanIcon from "./icons/PostmanIcon";
import NodeJsIcon from "./icons/NodeJsIcon";
import GitIcon from "./icons/GitIcon";
import GithubIcon from "./icons/GithubIcon";
import GitLabIcon from "./icons/GitLabIcon";
import { normalizeStr } from "@/util/masks";

interface IconProps {
  name: string;
  size?: number;
}
const IconDisplay = ({ name, size }: IconProps) => {
  const sizeStr = `${size ? size : "100"}px`;
  switch (true) {
    case normalizeStr(name).includes(normalizeStr("Next")):
      return (
        <div className="relative p-1 transition-all duration-200 rounded-md group hover:ring-2 ring-zinc-200">
          <span className="absolute bottom-[110%] group-hover:flex animate-zoom-in-up hidden p-2 border-2 border-white bg-black/90 rounded-md">
            {name}
          </span>
          <NextJsIcon width={sizeStr} height={sizeStr} />
        </div>
      );
    case normalizeStr(name).includes(normalizeStr("Tailwind")):
      return (
        <div className="relative p-1 transition-all duration-200 rounded-md group hover:ring-2 ring-zinc-200">
          <span className="absolute bottom-[110%] group-hover:flex animate-zoom-in-up hidden p-2 border-2 border-white bg-black/90 rounded-md">
            {name}
          </span>
          <TailwindIcon width={sizeStr} height={sizeStr} />
        </div>
      );
    case normalizeStr(name).includes(normalizeStr("React Native")):
      return (
        <div className="relative p-1 transition-all duration-200 rounded-md group hover:ring-2 ring-zinc-200">
          <span className="absolute bottom-[110%] group-hover:flex animate-zoom-in-up hidden p-2 border-2 border-white bg-black/90 rounded-md">
            {name}
          </span>
          <ReactNativeIcon width={sizeStr} height={sizeStr} />
        </div>
      );
    case normalizeStr(name).includes(normalizeStr("React")):
      return (
        <div className="relative p-1 transition-all duration-200 rounded-md group hover:ring-2 ring-zinc-200">
          <span className="absolute bottom-[110%] group-hover:flex animate-zoom-in-up hidden p-2 border-2 border-white bg-black/90 rounded-md">
            {name}
          </span>
          <ReactIcon width={sizeStr} height={sizeStr} />
        </div>
      );
    case normalizeStr(name).includes(normalizeStr("Node")):
      return (
        <div className="relative p-1 transition-all duration-200 rounded-md group hover:ring-2 ring-zinc-200">
          <span className="absolute bottom-[110%] group-hover:flex animate-zoom-in-up hidden p-2 border-2 border-white bg-black/90 rounded-md">
            {name}
          </span>
          <NodeJsIcon width={sizeStr} height={sizeStr} />
        </div>
      );
    case normalizeStr(name).includes(normalizeStr("TypeScript")) ||
      normalizeStr(name).includes(normalizeStr("TS")) ||
      normalizeStr(name).includes(normalizeStr("JavaScript")) ||
      normalizeStr(name).includes(normalizeStr("JS")):
      return (
        <div className="relative p-1 transition-all duration-200 rounded-md group hover:ring-2 ring-zinc-200">
          <span className="absolute bottom-[110%] group-hover:flex animate-zoom-in-up hidden p-2 border-2 border-white bg-black/90 rounded-md">
            {name}
          </span>
          <TypeScriptIcon width={sizeStr} height={sizeStr} />
        </div>
      );
    case normalizeStr(name).includes(normalizeStr("Three")):
      return (
        <div className="relative p-1 transition-all duration-200 rounded-md group hover:ring-2 ring-zinc-200">
          <span className="absolute bottom-[110%] group-hover:flex animate-zoom-in-up hidden p-2 border-2 border-white bg-black/90 rounded-md">
            {name}
          </span>
          <ThreeIcon width={sizeStr} height={sizeStr} />
        </div>
      );
    case normalizeStr(name).includes(normalizeStr("AWS")):
      return (
        <div className="relative p-1 transition-all duration-200 rounded-md group hover:ring-2 ring-zinc-200">
          <span className="absolute bottom-[110%] group-hover:flex animate-zoom-in-up hidden p-2 border-2 border-white bg-black/90 rounded-md">
            {name}
          </span>
          <AWSIcon width={sizeStr} height={sizeStr} />
        </div>
      );
    case normalizeStr(name).includes(normalizeStr("Insomnia")):
      return (
        <div className="relative p-1 transition-all duration-200 rounded-md group hover:ring-2 ring-zinc-200">
          <span className="absolute bottom-[110%] group-hover:flex animate-zoom-in-up hidden p-2 border-2 border-white bg-black/90 rounded-md">
            {name}
          </span>
          <InsomniaIcon width={sizeStr} height={sizeStr} />
        </div>
      );
    case normalizeStr(name).includes(normalizeStr("Postman")):
      return (
        <div className="relative p-1 transition-all duration-200 rounded-md group hover:ring-2 ring-zinc-200">
          <span className="absolute bottom-[110%] group-hover:flex animate-zoom-in-up hidden p-2 border-2 border-white bg-black/90 rounded-md">
            {name}
          </span>
          <PostmanIcon width={sizeStr} height={sizeStr} />
        </div>
      );
    case normalizeStr(name).includes(normalizeStr("GitLab")):
      return (
        <div className="relative p-1 transition-all duration-200 rounded-md group hover:ring-2 ring-zinc-200">
          <span className="absolute bottom-[110%] group-hover:flex animate-zoom-in-up hidden p-2 border-2 border-white bg-black/90 rounded-md">
            {name}
          </span>
          <GitLabIcon width={sizeStr} height={sizeStr} />
        </div>
      );
    case normalizeStr(name).includes(normalizeStr("GitHub")):
      return (
        <div className="relative p-1 transition-all duration-200 rounded-md group hover:ring-2 ring-zinc-200">
          <span className="absolute bottom-[110%] group-hover:flex animate-zoom-in-up hidden p-2 border-2 border-white bg-black/90 rounded-md">
            {name}
          </span>
          <GithubIcon width={sizeStr} height={sizeStr} />
        </div>
      );
    case normalizeStr(name).includes(normalizeStr("Git")):
      return (
        <div className="relative p-1 transition-all duration-200 rounded-md group hover:ring-2 ring-zinc-200">
          <span className="absolute bottom-[110%] group-hover:flex animate-zoom-in-up hidden p-2 border-2 border-white bg-black/90 rounded-md">
            {name}
          </span>
          <GitIcon width={sizeStr} height={sizeStr} />
        </div>
      );
    default:
      return null;
  }
};

export default IconDisplay;
