import { Box } from "@mui/material"
import Header from "./header"
import { HEADER } from "./config-layout"
import { bgGradient } from "@/theme/css"
import { alpha, useTheme } from '@mui/material/styles';

type Props = {
  children: React.ReactNode
}
export default function MainLayout({ children }: Props) {
  const theme = useTheme()
  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/background/overlay_2.jpg',
        }),
        pt: 15,
        overflow: 'hidden',
        backgroundAttachment: 'fixed',
        alignItems: 'center',
        justifyContent: 'center',
        pb: { xs: 10, md: 15 },
        display: { md: 'flex' },
        minHeight: { md: '100vh' },
      }}
    >
      <Header />

      <Box component='main' sx={{
        flexGrow: 1
      }}>
        {children}

      </Box>
    </Box>
  )
}