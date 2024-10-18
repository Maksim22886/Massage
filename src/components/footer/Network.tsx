import { FunctionComponent, SVGProps } from 'react';

type NetworkProps = {
  title: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  link: string;
};

export const Network: React.FC<NetworkProps> = ({ title, icon: Icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="no-underline">
      <div className="iconText">
        <Icon />
        <p className="textHref">{title}</p>
      </div>
    </a>
  );
};