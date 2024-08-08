import { memo } from 'react';
import { m } from 'framer-motion';

import { useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';


import Image from '@/components/image';
import Character from './patern/character';
import Label from './patern/label';
import Icon from './patern/icon';
import Pattern01 from './patern/pattern-01';
import Pattern02 from './patern/pattern-02';
import SvgColor from '@/components/svg-color';
import { useHoverParallax } from '@/hooks/use-hover-parallax';
import { Typography } from '@mui/material';


// ----------------------------------------------------------------------

const stylesIcon = {
  width: 40,
  height: 40,
  color: 'common.black',
};

// ----------------------------------------------------------------------

function CareerHeroIllustration({ sx, ...other }: BoxProps) {
  const theme = useTheme();

  const { offsetX, offsetY, onMouseMoveHandler, onMouseLeaveHandler } = useHoverParallax();

  const BLUE = theme.palette.info.main;

  const YELLOW = theme.palette.warning.main;

  const RED = theme.palette.error.main;


  return (
    <Box
      component={m.div}
      onMouseMove={onMouseMoveHandler}
      onMouseLeave={onMouseLeaveHandler}
      sx={{
        width: 564,
        height: 564,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        ...sx,
      }}
      {...other}
    >
      <>
        <Image alt="reactjs"
          src="/assets/illutrations/man-in-glasses.png"
          sx={{ position: 'absolute', bottom: 40, zIndex: 6, width: 300 }} />
        {/* ReactJS */}
        <Box
          sx={{
            top: 170,
            zIndex: 9,
            position: 'absolute',
            transform: 'translateX(-125px) rotate(-15deg)',
          }}
        >
          <m.div style={{ y: offsetY(-50) }}>
            <Label
              text="ReactJS"
              icon={
                <Image
                  alt="reactjs"
                  src="/assets/icons/ic_react_logo.svg"
                  sx={{ width: 48, height: 48 }}
                />
              }
            />
          </m.div>
        </Box>
      </>

      {/* Nextjs */}
      <Box
        sx={{
          position: 'absolute',
          transform: 'translate(175px, 90px) rotate(15deg)',
        }}
      >
        <m.div style={{ x: offsetX(80), y: offsetY(80) }}>
          <Label
            text="NextJS"
            icon={
              <Image
                alt="nextjs"
                src="/assets/icons/ic_next_logo.svg"
                sx={{ width: 48, height: 48 }}
              />
            }
          />
        </m.div>
      </Box>

      {/* Material UI */}
      <Box
        sx={{
          position: 'absolute',
          transform: 'translate(170px, -110px) rotate(15deg)',
        }}
      >
        <m.div style={{ y: offsetY(80) }}>
          <Label
            text="Material UI"
            icon={
              <Image
                alt="mui"
                src="/assets/icons/ic_mui_logo.svg"
                sx={{ width: 48, height: 48 }}
              />
            }
          />
        </m.div>
      </Box>

      {/* Tailwind CSS */}
      <Box
        sx={{
          zIndex: 10,
          bottom: 160,
          position: 'absolute',
          transform: 'translateX(-110px)',
        }}
      >
        <m.div style={{ y: offsetY(-60) }}>
          <Label
            text="Tailwind CSS"
            icon={
              <Image
                alt="tailwind"
                src="/assets/icons/ic_tailwind_logo.svg"
                sx={{ width: 48, height: 48 }}
              />
            }
          />
        </m.div>

      </Box>

      {/* Icon */}
      <Box sx={{ position: 'absolute', top: 16, transform: 'translateX(20px)' }}>
        <m.div style={{ x: offsetX(50), y: offsetY(50) }}>
          <Icon
            color={YELLOW}
            content={<SvgColor src="/assets/icons/ic_js_logo.svg" sx={{ ...stylesIcon }} />}
          />
        </m.div>
      </Box>

      {/* Icon */}
      <Box sx={{ position: 'absolute', bottom: 16, transform: 'translateX(40px)', zIndex: 8 }}>
        <m.div style={{ x: offsetX(-60), y: offsetY(60) }}>
          <Icon
            color={RED}
            content={
              <SvgColor src="/assets/icons/ic_html_logo.svg" sx={{ ...stylesIcon }} />
            }
          />
        </m.div>
      </Box>

      {/* Icon */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 220,
          transform: 'translateX(-220px)',
        }}
      >
        <m.div style={{ x: offsetX(70), y: offsetY(70) }}>
          <Icon
            color={BLUE}
            content={
              <SvgColor src="/assets/icons/ic_css_logo.svg" sx={{ ...stylesIcon }} />
            }
          />
        </m.div>
      </Box>

      {/* Icon */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 220,
          transform: 'translateX(220px)',
        }}
      >
        <m.div style={{ x: offsetX(-70), y: offsetY(-70) }}>
          <Icon
            color={BLUE}
            content={
              <Typography variant='h4' sx={{ ...stylesIcon, fontFamily: 'monospace', ml: 3, mt: 2 }} >TS</Typography>
            }
          />
        </m.div>
      </Box>

      <Pattern01 />

      <Pattern02 />
    </Box>
  );
}

export default memo(CareerHeroIllustration);
