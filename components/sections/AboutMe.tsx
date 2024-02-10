import Buildings from "../Buildings";

const AboutMe = () => {
  return (
    <div className="relative flex flex-col w-full px-3 animate-fade-in-up bg-gradient-to-b to-black/90 from-black sm:px-6 md:px-12 lg:px-36 p-36">
      <Buildings className="left-0 h-24" />
      <span
        // style={{ backgroundSize: "0% 100%" }}
        className="flex flex-col p-6 text-white bg-no-repeat contentbox"
      >
        <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl">
          WEB ARTIST SINCE 2020
        </h1>
        <p className="text-xl font-light md:text-2xl lg:text-3xl">
          • 𝘌𝘹𝘱𝘦𝘳𝘵𝘪𝘴𝘦 𝘸𝘪𝘵𝘩 𝘧𝘳𝘢𝘮𝘦𝘸𝘰𝘳𝘬𝘴 𝘢𝘯𝘥 𝘱𝘢𝘨𝘦 𝘥𝘦𝘴𝘪𝘨𝘯 • 𝘊𝘭𝘦𝘢𝘯 𝘢𝘯𝘥 𝘳𝘦𝘴𝘱𝘰𝘯𝘴𝘪𝘷𝘦,
          𝘶𝘴𝘦𝘳-𝘧𝘰𝘤𝘶𝘴𝘦𝘥 𝘪𝘯𝘵𝘦𝘳𝘧𝘢𝘤𝘦𝘴 • 𝘏𝘪𝘨𝘩 𝘴𝘵𝘢𝘯𝘥𝘢𝘳𝘥𝘴 𝘰𝘧 𝘴𝘦𝘤𝘶𝘳𝘦 𝘤𝘰𝘥𝘪𝘯𝘨 • 𝘗𝘳𝘰 𝘪𝘯
          𝘭𝘦𝘢𝘳𝘯𝘪𝘯𝘨 𝘯𝘦𝘸 𝘵𝘦𝘤𝘩𝘯𝘰𝘭𝘰𝘨𝘪𝘦𝘴 𝘢𝘯𝘥 𝘤𝘰𝘯𝘤𝘦𝘱𝘵𝘴 • 𝘌𝘹𝘵𝘳𝘰𝘷𝘦𝘳𝘵 𝘢𝘯𝘥 𝘤𝘰𝘮𝘮𝘶𝘯𝘪𝘤𝘢𝘵𝘪𝘷𝘦
        </p>
      </span>
    </div>
  );
};

export default AboutMe;
