import { Link } from "react-router";
import { useState } from "react";

export default function CTAButton({ 
  children, 
  to = "/apply", 
  variant = "primary",
  size = "md",
  className = "",
  ...props 
}) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles = "inline-block font-bold uppercase rounded-full transition-all duration-300 border-none w-fit";
  
  const variants = {
    primary: {
      default: {
        background: "linear-gradient(135deg, #f8c740 0%, #e6ad01 100%)",
        color: "#050505",
        boxShadow: "0 6px 16px rgba(248, 199, 64, 0.4), 0 3px 8px rgba(0, 0, 0, 0.15)",
        transform: "translateY(0)",
      },
      hover: {
        background: "linear-gradient(135deg, #ffd966 0%, #f8c740 100%)",
        boxShadow: "0 10px 24px rgba(248, 199, 64, 0.5), 0 6px 14px rgba(0, 0, 0, 0.2)",
        transform: "translateY(-3px) scale(1.02)",
      }
    },
    secondary: {
      default: {
        background: "white",
        color: "#050505",
        border: "2px solid #f8c740",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        transform: "translateY(0)",
      },
      hover: {
        background: "#fffbf0",
        boxShadow: "0 8px 16px rgba(248, 199, 64, 0.3)",
        transform: "translateY(-2px) scale(1.01)",
      }
    },
    ternary: {
        default: {
            background: "linear-gradient(135deg, #f8c740 0%, #e6ad01 100%)",
            color: "white",
            boxShadow: "0 6px 16px rgba(248, 199, 64, 0.4), 0 3px 8px rgba(0, 0, 0, 0.15)",
            transform: "translateY(0)",
          },
        hover: {
            background: "linear-gradient(135deg, #ffd966 0%, #f8c740 100%)",
            boxShadow: "0 10px 24px rgba(248, 199, 64, 0.5), 0 6px 14px rgba(0, 0, 0, 0.2)",
            transform: "translateY(-3px) scale(1.02)",
        }
      },
    dark: {
      default: {
        background: "#050505",
        color: "#ffffff",
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.3)",
        transform: "translateY(0)",
      },
      hover: {
        background: "#1a1a1a",
        boxShadow: "0 10px 24px rgba(0, 0, 0, 0.5)",
        transform: "translateY(-3px) scale(1.02)",
      }
    }
  };

  const sizes = {
    xs: {
        padding: "0.4rem 1rem",
        fontSize: "0.75rem",
        letterSpacing: "0.3px",
    },
    sm: {
      padding: "0.5rem 1.5rem",
      fontSize: "0.875rem",
      letterSpacing: "0.3px",
    },
    md: {
      padding: "0.75rem 2rem",
      fontSize: "1rem",
      letterSpacing: "0.5px",
    },
    lg: {
      padding: "1rem 3rem",
      fontSize: "1.125rem",
      letterSpacing: "0.6px",
    },
  };

  const currentVariant = variants[variant] || variants.primary;
  const currentSize = sizes[size] || sizes.md;
  
  const defaultStyle = {
    ...currentVariant.default,
    ...currentSize,
    fontWeight: 700,
    borderRadius: "50px",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    textTransform: "uppercase",
  };

  const hoverStyle = isHovered ? currentVariant.hover : {};

  return (
    <Link
      to={to}
      className={`${baseStyles} ${className}`}
      style={{
        ...defaultStyle,
        ...hoverStyle,
      }}
      onMouseEnter={(e) => setIsHovered(true)}
      onMouseLeave={(e) => setIsHovered(false)}
      {...props}
    >
      {children}
    </Link>
  );
}
