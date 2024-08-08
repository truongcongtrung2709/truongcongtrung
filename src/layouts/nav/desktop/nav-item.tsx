import { forwardRef } from 'react';

import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import { NavItemProps, NavItemStateProps } from '../type';
import { RouterLink } from '@/routes/components';




// ----------------------------------------------------------------------

const NavItem = forwardRef<HTMLDivElement, NavItemProps>(
  ({ title, path, active, ...other }, ref) => {
    const handleScroll = (event: any) => {
      event.preventDefault();
      const targetId = path.substring(1); // Remove the '#' from the path
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const renderContent = (
      <StyledNavItem
        disableRipple
        disableTouchRipple
        ref={ref}
        active={active}
        {...other}
      >
        {title}
      </StyledNavItem>
    );


    return (
      <Link component={RouterLink} href={path} color="inherit" underline="none" onClick={handleScroll}>
        {renderContent}
      </Link>
    );
  }
);

export default NavItem;

// ----------------------------------------------------------------------

const StyledNavItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'subItem',
})<NavItemStateProps>(({ active, theme }) => {

  const dotStyles = {
    content: '""',
    borderRadius: '50%',
    position: 'absolute',
    width: 6,
    height: 6,
    left: -12,
    opacity: 1,
    backgroundColor: theme.palette.primary.main,
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.shortest,
    }),
  };

  return {
    // Root item
    ...({
      ...theme.typography.body1,
      padding: 0,
      fontSize: 15,
      minHeight: '100%',
      fontWeight: theme.typography.fontWeightMedium,
      fontFamily: theme.typography.fontSecondaryFamily,
      transition: theme.transitions.create('all', {
        duration: theme.transitions.duration.shorter,
      }),
      '&:hover': {
        backgroundColor: 'transparent',
        color: theme.palette.primary.main,
        '&:before': {
          ...dotStyles,
          opacity: 0.64,
        },
      },
      ...(active && {
        fontWeight: theme.typography.fontWeightSemiBold,
        '&:before': dotStyles,
      }),
    }),
  };
});
