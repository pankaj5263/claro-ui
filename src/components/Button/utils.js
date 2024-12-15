export const getButtonStyles = (variant) => {
    const styles = {
      primary: {
        background: '#BF4F74',
        color: '#FFFFFF',
        border: 'none',
      },
      secondary: {
        background: '#F5EFFF',
        color: '#1F2937',
        border: '1px solid #C4BFFC',
      },
      danger: {
        background: '#DC2626',
        color: '#FFFFFF',
        border: 'none',
      },
      success: {
        background: '#16A34A',
        color: '#FFFFFF',
        border: 'none',
      },
      default: {
        background: '#FFFFFF',
        color: '#BF4F74',
        border: '2px solid #BF4F74',
      },
    };
  
    return styles[variant] || styles.default;
  };
  
  export const getButtonSize = (size) => {
    const sizes = {
      small: '0.40em 0.7em',
      medium: '0.5em 1em',
      large: '0.75em 1.5em',
    };
  
    return sizes[size] || sizes.medium;
  };