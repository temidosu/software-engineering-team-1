/**
 * Author:          Kassi Bertrand
 * Filename:        AppBar.jsx
 * Date:            10-02-2022
 * Description:     This component is the application bar
 *                  of the admin page
 */

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';


function ApplicationBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <DashboardTwoToneIcon sx={{ mr: 4 }} />
                    <Typography
                        variant="h6"
                        noWrao
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Dashboard
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size='large'
                            aria-label="show 17 new noticatifications"
                            color='inherit'
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size='large'
                            edge='end'
                            aria-label='account of current user'
                            //aria-controls={}
                            aria-haspopup='true'
                            //</Box>onClick={ }
                            color='inherit'>
                            <AdminPanelSettingsTwoToneIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default ApplicationBar;
