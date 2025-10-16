import { Container, IconButton, Stack } from '@mui/material';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import InfoBox from './components/InfoBox';
import Kpi from './components/Kpi';

function App() {
  return (
    <Container sx={{ py: 6 }}>
      <Stack direction="row" justifyContent="center">
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
