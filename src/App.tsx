import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import InfoBox from './components/InfoBox';
import Kpi from './components/Kpi';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        bgcolor: '#f5f7fb',
        p: { xs: 2, lg: 4 },
        gap: { xs: 2, lg: 3 },
        color: '#101828',
      }}
    >
      <Sidebar
        title="mowany"
        sx={{
          bgcolor: '#ffffff',
          borderRadius: { xs: 3, lg: 4 },
          boxShadow: '0 18px 50px rgba(15, 33, 89, 0.08)',
        }}
      >
        <Sidebar.UserBadge
          name="Peter Parker"
          description="Personal Account"
          avatar={
            <Avatar src="https://i.pravatar.cc/100?img=5" alt="Peter Parker" />
          }
          action={
            <IconButton size="small" color="inherit" aria-label="account actions">
              <ChevronRightRoundedIcon fontSize="small" />
            </IconButton>
          }
        />

        <Sidebar.SectionTitle>Menu</Sidebar.SectionTitle>
        <Sidebar.Section>
          <Sidebar.MenuItem icon={<DashboardRoundedIcon />} label="Dashboard" active />
          <Sidebar.MenuItem icon={<InsightsRoundedIcon />} label="AI Financial Insights" />
          <Sidebar.MenuItem icon={<CreditCardRoundedIcon />} label="Transactions" />
          <Sidebar.MenuItem icon={<EmojiObjectsRoundedIcon />} label="Budget & Expense" />
          <Sidebar.MenuItem icon={<SavingsRoundedIcon />} label="Investment" />
          <Sidebar.MenuItem icon={<ReceiptLongRoundedIcon />} label="Invoices" />
          <Sidebar.MenuItem icon={<SavingsRoundedIcon />} label="Goals & Savings" />
        </Sidebar.Section>

        <Box flexGrow={1} />

        <Sidebar.SectionTitle>Others</Sidebar.SectionTitle>
        <Sidebar.Section>
          <Sidebar.MenuItem icon={<HelpOutlineRoundedIcon />} label="Help Center" />
          <Sidebar.MenuItem icon={<SettingsRoundedIcon />} label="Settings" />
          <Sidebar.MenuItem icon={<DarkModeRoundedIcon />} label="Dark Mode" />
          <Sidebar.MenuItem icon={<LogoutRoundedIcon />} label="Logout" variant="danger" />
        </Sidebar.Section>
      </Sidebar>
      <Box
        flexGrow={1}
        display="flex"
        flexDirection="column"
        minHeight={0}
        sx={{
          gap: { xs: 2, lg: 3 },
          maxWidth: 1200,
          width: '100%',
          mx: 'auto',
          color: '#101828',
        }}
      >
        <Box
          component="header"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'stretch', md: 'center' },
            justifyContent: 'space-between',
            gap: { xs: 2, md: 3 },
            px: { xs: 2.5, md: 4 },
            py: { xs: 2.5, md: 3 },
            borderRadius: { xs: 3, md: 4 },
            border: '1px solid',
            borderColor: 'rgba(39, 64, 115, 0.08)',
            boxShadow: '0 20px 40px rgba(15, 33, 89, 0.05)',
            position: 'sticky',
            top: { xs: 16, md: 24 },
            bgcolor: '#ffffff',
            zIndex: (theme) => theme.zIndex.appBar,
          }}
        >
          <Paper
            component="form"
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexGrow: 1,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'rgba(39, 64, 115, 0.1)',
              px: 2,
              py: 1,
              minWidth: { xs: '100%', md: 280 },
              bgcolor: '#f8faff',
              color: '#101828',
            }}
          >
            <SearchRoundedIcon color="action" />
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                color: '#101828',
                '& input::placeholder': {
                  color: 'rgba(16, 24, 40, 0.6)',
                  opacity: 1,
                },
              }}
              placeholder="Search anything..."
              inputProps={{ 'aria-label': 'search anything' }}
            />
            <IconButton size="small" color="inherit" aria-label="open filters">
              <TuneRoundedIcon fontSize="small" />
            </IconButton>
          </Paper>

          <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="flex-end">
            <IconButton
              aria-label="view notifications"
              sx={{
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'rgba(39, 64, 115, 0.1)',
                width: 44,
                height: 44,
                bgcolor: '#f8faff',
              }}
            >
              <Badge color="error" variant="dot" overlap="circular">
                <NotificationsNoneRoundedIcon />
              </Badge>
            </IconButton>
            <Button
              variant="outlined"
              startIcon={<CalendarMonthRoundedIcon />}
              endIcon={<KeyboardArrowDownRoundedIcon />}
              sx={{
                borderRadius: 3,
                textTransform: 'none',
                px: 2.5,
                color: 'text.primary',
                borderColor: 'rgba(39, 64, 115, 0.12)',
                bgcolor: '#f8faff',
                '&:hover': {
                  borderColor: 'rgba(39, 64, 115, 0.2)',
                  bgcolor: '#f0f4ff',
                },
              }}
            >
              <Stack direction="column" spacing={0} alignItems="flex-start">
                <Typography variant="caption" color="text.secondary" lineHeight={1}>
                  Billing period
                </Typography>
                <Typography variant="body2" lineHeight={1.25}>
                  February 2025
                </Typography>
              </Stack>
            </Button>
          </Stack>
        </Box>

        <Box
          component="main"
          flexGrow={1}
          minHeight={0}
          overflow="auto"
          px={{ xs: 2.5, md: 4 }}
          py={{ xs: 2.5, md: 4 }}
          sx={{
            borderRadius: { xs: 3, md: 4 },
            border: '1px solid',
            borderColor: 'rgba(39, 64, 115, 0.08)',
            bgcolor: '#ffffff',
          }}
        >
          <InfoBox
            title={<AttachMoneyRoundedIcon fontSize="large" />}
            action={
              <IconButton size="small" color="inherit" aria-label="income actions">
                <MoreVertRoundedIcon fontSize="small" />
              </IconButton>
            }
          >
            <Kpi title="Income" value="$21.30" />
          </InfoBox>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
