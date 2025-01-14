import getServerEnv from '@/utils/env/server';
import Image from 'next/image';

function Illustration({
  src,
  label,
  alt,
  className
}: {
  src: string;
  label?: string;
  alt: string;
  className?:string;
}) {
  return (
    <div className="flex flex-col gap-4 items-center w-full h-full">
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          className={className}
          fill
        />
      </div>
      {!!label && <p className="text-5xl text-muted-foreground">{label}</p>}
    </div>
  );
}

export const WelcomeIllustration = () => {
  return (
    <div className="h-64 w-full">
      <Illustration
        src={`${getServerEnv('BASE_PATH')}/welcome.svg`}
        alt="welcome"
      />
    </div>
  );
};
export const TenmhubIllustration = () => {
  return (
    <div className="h-fit w-[90%] p-7">
      <Image
        src={`${getServerEnv('BASE_PATH')}/tmh_logo_label.svg`}
        alt="TenM Hub"
        priority={true}
sizes={"10vw"}
        style={{
          width: '100%',
          height: 'auto',
        }}
        width={500}
        height={300}
      />
    </div>
  );
};