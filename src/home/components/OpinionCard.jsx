import PropTypes from 'prop-types';
import { Box, Card, CardContent, Typography } from '@mui/material';

export const OpinionCard = ({ opinion, userName, userSocialName, city, state }) => {
  return (
    <Box width="80%" className="m-5">
        <Card>
            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                    { opinion }
                </Typography>
                <Typography variant='h5' component='h5'>
                    { userName }
                </Typography>
                <Typography variant='h5' component='h5'>
                    { city }
                </Typography>
                <Typography variant='h5' component='h5'>
                    { state }
                </Typography>
                <Typography variant='h5' component='h5'>
                    { userSocialName }
                </Typography>
            </CardContent>
        </Card>
    </Box>
  )
}

OpinionCard.propTypes = {
    opinion: PropTypes.string,
    userName: PropTypes.string,
    userSocialName: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
}
