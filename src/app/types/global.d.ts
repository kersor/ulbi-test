declare module '*.css';
declare module '*.scss';

declare module '*.module.css';
declare module '*.module.scss';


declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare const __DEV__: boolean