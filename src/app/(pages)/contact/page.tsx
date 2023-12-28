import ContainerBlock from '../../components/containerBlock';

export default function ContactPage() {
  return (
    <ContainerBlock
      title="Contact | Brett Gill's Portfolio"
      description="Contact me"
    >
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Contact
        </h1>
        <h2 className="text-2xl mt-3">
          This is a work in progress
        </h2>
      </div>
    </ContainerBlock>
  );
}