import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-10 pb-6 px-3">
      <h1
        className={`flex flex-col text-3xl text-black leading-normal tracking-wider`}
      >
        <span>Hello,</span>
        <span>I&apos;m ChillWay</span>
      </h1>
      <div className="mt-6 text-gray-900 space-y-1.5">
        <p>🧑‍💻 前端开发者 / Front-end Developer</p>
        <p>🤩 正在做一些有趣的事 / Working on something interesting</p>
        <p>
          🥰 <span className="mx-1">·</span>
          <a
            href="https://kee.so/peter"
            target="_blank"
            className="hover:underline"
          >
            desc
          </a>
        </p>
      </div>
    </div>
  );
}
