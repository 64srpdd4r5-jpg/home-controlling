import {
  Box,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import type { SxProps, Theme } from '@mui/material/styles';

interface SidebarContextValue {
  collapsed: boolean;
}

const SidebarContext = createContext<SidebarContextValue | undefined>(
  undefined,
);

const useSidebarContext = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('Sidebar subcomponents must be used within Sidebar');
  }

  return context;
};

interface SidebarProps {
  title: string;
  children: ReactNode;
  defaultCollapsed?: boolean;
  onToggle?(collapsed: boolean): void;
  width?: number;
  sx?: SxProps<Theme>;
}

const SidebarRoot = ({
  title,
  children,
  defaultCollapsed = false,
  onToggle,
  width = 280,
  sx,
}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const handleToggle = () => {
    setCollapsed((prev) => {
      const next = !prev;
      onToggle?.(next);
      return next;
    });
  };

  const contextValue = useMemo(() => ({ collapsed }), [collapsed]);

  return (
    <SidebarContext.Provider value={contextValue}>
      <Paper
        elevation={0}
        sx={[
          (theme) => ({
            width: collapsed ? 88 : 280,
            transition: theme.transitions.create(['width', 'padding'], {
              duration: theme.transitions.duration.shorter,
            }),
            backgroundColor: 'background.paper',
            borderRadius: 0.5,
            py: 3,
            px: collapsed ? 1.5 : 3,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            boxSizing: 'border-box',
            gap: collapsed ? 2 : 3,
          }),
          ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
        ]}
      >
        <Stack direction="row" alignItems="end" spacing={collapsed ? 0 : 2}>
          {!collapsed ? (
            <Typography variant="h6" fontWeight={700} noWrap>
              {title}
            </Typography>
          ) : null}
          <IconButton
            size="small"
            onClick={handleToggle}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            sx={{ ml: 'auto' }}
          >
            {collapsed ? (
              <ChevronRightRoundedIcon fontSize="small" />
            ) : (
              <ChevronLeftRoundedIcon fontSize="small" />
            )}
          </IconButton>
        </Stack>
        <Stack spacing={collapsed ? 2 : 3} flexGrow={1} minHeight={0}>
          {children}
        </Stack>
      </Paper>
    </SidebarContext.Provider>
  );
};

interface SidebarUserBadgeProps {
  name: string;
  description?: string;
  avatar?: ReactNode;
  action?: ReactNode;
}

const SidebarUserBadge = ({
  name,
  description,
  avatar,
  action,
}: SidebarUserBadgeProps) => {
  const { collapsed } = useSidebarContext();

  const avatarNode = avatar ?? (
    <Box
      sx={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <PersonRoundedIcon />
    </Box>
  );

  if (collapsed) {
    return (
      <Tooltip title={name} placement="right">
        <Box display="flex" justifyContent="center">
          {avatarNode}
        </Box>
      </Tooltip>
    );
  }

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{
        px: 1,
        py: 1,
        borderRadius: 0.5,
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
      }}
    >
      {avatarNode}
      <Box flexGrow={1} minWidth={0}>
        <Typography variant="subtitle1" fontWeight={600} noWrap>
          {name}
        </Typography>
        {description ? (
          <Typography variant="body2" color="text.secondary" noWrap>
            {description}
          </Typography>
        ) : null}
      </Box>
      {action ? <Box color="text.secondary">{action}</Box> : null}
    </Stack>
  );
};

interface SidebarMenuItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  variant?: 'default' | 'danger';
  onClick?: () => void;
}

const SidebarMenuItem = ({
  icon,
  label,
  active = false,
  variant = 'default',
  onClick,
}: SidebarMenuItemProps) => {
  const { collapsed } = useSidebarContext();

  const content = (
    <ListItemButton
      onClick={onClick}
      sx={(theme) => {
        const paletteColor =
          variant === 'danger' ? theme.palette.error.main : theme.palette.primary.main;
        const baseColor =
          variant === 'danger'
            ? theme.palette.error.main
            : active
            ? theme.palette.primary.main
            : theme.palette.text.primary;

        return {
          borderRadius: 0.5,
          px: collapsed ? 2.5: 2,
          py: collapsed ? 1.25 : 1.2,
          gap: collapsed ? 0 : 1.5,
          color: baseColor,
          backgroundColor:
            active && variant !== 'danger'
              ? alpha(theme.palette.primary.main, 0.12)
              : 'transparent',
          '&:hover': {
            backgroundColor: alpha(paletteColor, 0.12),
          },
          '& .MuiListItemIcon-root': {
            minWidth: collapsed ? 0 : 32,
            color:
              variant === 'danger'
                ? theme.palette.error.main
                : active
                ? theme.palette.primary.main
                : theme.palette.text.secondary,
            justifyContent: 'center',
          },
          '& .MuiListItemText-primary': {
            fontWeight: active ? 600 : 500,
          },
        };
      }}
    >
      <Stack direction="row" alignItems={collapsed ? 'center' : 'start'}>
        <ListItemIcon>{icon}</ListItemIcon>
        {!collapsed ? (
        <ListItemText
          primary={label}
          primaryTypographyProps={{
            variant: 'body2',
            color: 'inherit',
          }}
        />
      ) : null}
      </Stack>
    </ListItemButton>
  );

  if (collapsed) {
    return (
      <Tooltip title={label} placement="right">
        <Box>{content}</Box>
      </Tooltip>
    );
  }

  return content;
};

interface SidebarSectionTitleProps {
  children: ReactNode;
}

const SidebarSectionTitle = ({ children }: SidebarSectionTitleProps) => {
  const { collapsed } = useSidebarContext();

  if (collapsed) {
    return null;
  }

  return (
    <Typography
      variant="overline"
      color="text.secondary"
      sx={{
        letterSpacing: 1,
        fontWeight: 700,
        px: 1,
      }}
    >
      {children}
    </Typography>
  );
};

interface SidebarSectionProps {
  children: ReactNode;
  spacing?: number;
}

const SidebarSection = ({ children, spacing = 0.5 }: SidebarSectionProps) => {
  const { collapsed } = useSidebarContext();

  return (
    <Stack spacing={collapsed ? 1.5 : spacing} alignItems="stretch">
      {children}
    </Stack>
  );
};

const Sidebar = Object.assign(SidebarRoot, {
  UserBadge: SidebarUserBadge,
  MenuItem: SidebarMenuItem,
  SectionTitle: SidebarSectionTitle,
  Section: SidebarSection,
});

export default Sidebar;
export { SidebarMenuItem, SidebarSection, SidebarSectionTitle, SidebarUserBadge };
