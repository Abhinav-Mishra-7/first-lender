import { SVGIcons } from './SVGIcons';

const SvgIcon = ({ 
  name, 
  className = "w-20 h-20 md:w-30 md:h-23 shrink-0", 
  ...props 
}) => {
  const svgContent = SVGIcons[name];
  
  if (!svgContent) return null;

  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      {...props}
    />
  );
};

export default SvgIcon;