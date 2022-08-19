import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import pic from '../asset/images/profile.png'
import { CartContext } from '../Store/CartContext';
const pages = ['Home', 'Shop', 'Contact','Admin'];
const settings = ['Profile', 'Cart', 'Logout'];
const Navbar = () => {
    let { qty } = useContext(CartContext)
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };




    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    let navigate = useNavigate()
    function Logout() {
        localStorage.clear()
        navigate("/Login")


    }



    return (
        <>
            <AppBar position="static" className="bgcol">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component={Link}
                            to="/"
                            className="link"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            EtailCom

                        </Typography>



                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (

                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography
                                            textAlign="center"
                                            component={Link}
                                            className="Link"
                                            to={page === "Home" ? "/" : page === "Shop" ? "Shop/All/All/All" : `/${page}`}
                                        >
                                           {page}

                                        </Typography>
                                    </MenuItem>

                                ))}
                            </Menu>
                        </Box>

                        <Typography
                            variant="h5"
                            noWrap
                            component={Link}
                            to="/"
                            className="link"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >


                            EtailCom
                        </Typography>



                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    component={Link}
                                    to={page === "Home" ? "/" : page === "Shop" ? "Shop/All/All/All" : `/${page}`}
                                    className="link"
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>

                            ))}
                        </Box>

                        {localStorage.getItem("login") ?
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="User" src={pic} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu} >

                                            <Typography

                                                textAlign="center"
                                                onClick={() => {
                                                    if (setting === "Logout")
                                                        Logout()
                                                    else
                                                        navigate(`/${setting}`)
                                                }}
                                            >
                                                {
                                                    setting === "Cart" ?

                                                        <IconButton aria-label="cart">
                                                            <StyledBadge badgeContent={qty} color="secondary">
                                                                <ShoppingCartIcon />
                                                            </StyledBadge>
                                                        </IconButton> :
                                                        setting

                                                }
                                            </Typography>



                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box> : <Button style={{ margin: "0px 10px" }}><Link to="/Login" style={{ color: "white", textDecoration: "none" }}> Login </Link></Button>}
                    </Toolbar>
                </Container>
            </AppBar>



        </>
    );
};
export default Navbar;
