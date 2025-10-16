import { Avatar, Box, Container, IconButton, Stack } from '@mui/material';
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
import InfoBox from './components/InfoBox';
import Kpi from './components/Kpi';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center">
        <Sidebar title="mowany">
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
      </Stack>
    </Container>
  );
}

export default App;
