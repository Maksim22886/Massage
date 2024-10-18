import { FunctionComponent, SVGProps } from 'react';
import React from 'react';

type NetworkProps = {
  title: string;
  img: FunctionComponent<SVGProps<SVGSVGElement>>;
  link: string;
};

export const Network: React.FC<NetworkProps> = ({ title, img, link }) => {
  return (
    <a href={link} target="_blank" className="no-underline">
      <div className="iconText">
        <img className="telegramPhoto" src={String(img)} alt="" />
        <p className="textHref">{title}</p>
      </div>
    </a>
  );
};
