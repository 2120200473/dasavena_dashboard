import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';

const user = {
  city: 'Guadalajara, Jalisco',
  country: 'Mexico',
  jobTitle: 'Senior Developer',
  name: 'Dasavena Campos',
  timezone: 'GTM-7'
};

export const AccountProfile = () => (
  <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        
        <Typography
          gutterBottom
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {user.city} {user.country}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {user.timezone}
        </Typography>
      </Box>
    </CardContent>

    
  </Card>
);
