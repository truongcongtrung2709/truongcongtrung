import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from '@/components/iconify';
import SvgColor from '@/components/svg-color';
import { ISkill } from '@/types/skill';
import TextMaxLine from '@/components/text-max-line';
import Image from '@/components/image';


// ----------------------------------------------------------------------

type Props = {
  skills: ISkill[];
};

export default function HomeSkills({ skills }: Props) {
  return (
    <Container
      id="skill"
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Typography variant="h2" color='primary.main' sx={{ textAlign: 'center' }}>
        My Skills
      </Typography>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          my: { xs: 8, md: 10 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {skills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </Box>


    </Container>
  );
}

// ----------------------------------------------------------------------

type SkillItemProps = {
  skill: ISkill;
};

function SkillItem({ skill }: SkillItemProps) {
  return (
    <Paper
      variant="outlined"
      sx={{
        pt: '100%',
        borderRadius: 2,
        cursor: 'pointer',
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'transparent',
        transition: (theme) => theme.transitions.create('all'),
        '&:hover': {
          bgcolor: 'common.white',
          color: (theme) => theme.palette.grey[800],
          boxShadow: (theme) => theme.customShadows.z24,
          '& .icon': {
            transition: (theme) => theme.transitions.create('all'),
            '& > span': {
              color: 'common.white',
            },
          },
        },
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 1,
          height: 1,
          top: 0,
          position: 'absolute',
        }}
      >
        <Box
          className="icon"
          sx={{
            mb: 2.5,
            width: 72,
            height: 72,
            mx: 'auto',
            display: 'flex',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image src={skill.image} sx={{ width: 48, height: 48 }} />
        </Box>

        <TextMaxLine variant="h6" color="primary.main" line={1}>
          {skill.name}
        </TextMaxLine>

        <Typography variant="body2" sx={{
          color: 'white', mt: 0.5, '&:hover': {
            color: 'gray'
          }
        }}>
          {skill.description}
        </Typography>
      </Stack>
    </Paper>
  );
}
