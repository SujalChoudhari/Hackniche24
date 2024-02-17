import Image from "next/image";
import { Tabs } from "../ui/tabs";

export default function TabsDemo() {
  const tabs = [
    {
      title: "Code generation",
      value: "Code generation",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900 to-blue-950">
          <p>Idea to code in seconds. Write it out, we'll build it</p>
          <DummyContent imageSrc="/landing/images/1.png" />
        </div>
      ),
    },
    {
      title: "Prompt optimization",
      value: "Prompt optimization",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900 to-blue-950">
          <p>Write like a pro, code like a prompt perfection</p>
          <DummyContent imageSrc="/landing/images/2.png" />
        </div>
      ),
    },
    {
        title: "Structured I/O",
        value: "Structured I/O",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900 to-blue-950">
            <p>Seamless data flow, clear input, perfect outpu</p>
            <DummyContent imageSrc="/landing/images/3.png" />
          </div>
        ),
      },
      {
        title: "Pseudo gen",
        value: "",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900 to-blue-950">
            <p>See the logic before the code</p>
            <DummyContent imageSrc="/landing/images/4.png" />
          </div>
        ),
      },
      {
        title: "Version control",
        value: "chat",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900 to-blue-950">
            <p>Experiment fearlessly, iterate effortlessly</p>
            <DummyContent imageSrc="/landing/images/5.png" />
          </div>
        ),
      },
      {
        title: "Collaboration",
        value: "Collaboration",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900 to-blue-950">
            <p></p>
            <DummyContent imageSrc="/landing/images/6.png" />
          </div>
        ),
      },
      
    // Add more tabs with different image sources as needed
  ];

  return (
    <>
     <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_700px_at_50%_500px,#f9c9ff,transparent)]"></div></div>
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
        
      <Tabs tabs={tabs} />
    </div>
    </>
  );
}

const DummyContent = ({ imageSrc }:{imageSrc:any}) => {
  return (
    <div>
      <Image
        src={imageSrc}
        alt="dummy image"
        width={1000}
        height={1000}
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    </div>
  );
};
