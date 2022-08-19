import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Products from './Products'
import { useParams ,Link} from 'react-router-dom';
export default function Shop() {
  let {mc,sc,brand}=useParams()
  return (
    <>
      <div className="container-fluid mt-2">

        <Grid container spacing={2}>

          <Grid item md={2} xs={12} >

            <h5 className="bgcol textcol text-center p-2">Menu</h5>
            <Box sx={{ width: '100%', maxWidth: "100%", bgcolor: 'background.paper' }}>
              <nav aria-label="secondary mailbox folders">
                <h5 className="textcol text-center bgcol p-1">Main Category</h5>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to={`/Shop/All/${sc}/${brand}`}>
                      <ListItemText primary="All" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to={`/Shop/Male/${sc}/${brand}`}>
                      <ListItemText primary="Male" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={Link}  to={`/Shop/Female/${sc}/${brand}`}>
                      <ListItemText primary="Female" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to={`/Shop/Kids/${sc}/${brand}`}>
                      <ListItemText primary="Kids" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>

              <nav aria-label="secondary mailbox folders">
                <h5 className="textcol text-center bgcol p-1">Sub Category</h5>
                <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to={`/Shop/${mc}/All/${brand}`}>
                      <ListItemText primary="All" />
                    </ListItemButton>
                    </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to={`/Shop/${mc}/Jeans/${brand}`}>
                      <ListItemText primary="Jeans" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to={`/Shop/${mc}/Tshirt/${brand}`}>
                      <ListItemText primary="T-shirt" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to={`/Shop/${mc}/Shirt/${brand}`}>
                      <ListItemText primary="Shirt" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to={`/Shop/${mc}/Trouser/${brand}`}>
                      <ListItemText primary="Trouser" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>

              <nav aria-label="secondary mailbox folders">
                <h5 className="textcol text-center bgcol p-1">Brands</h5>
                <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to={`/Shop/${mc}/${sc}/All`} >
                      <ListItemText primary="All" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to={`/Shop/${mc}/${sc}/Adidas`} >
                      <ListItemText primary="Adidas" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to={`/Shop/${mc}/${sc}/Mufti`}>
                      <ListItemText primary="Mufti" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to={`/Shop/${mc}/${sc}/Nike`}>
                      <ListItemText primary="Nike" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to={`/Shop/${mc}/${sc}/Polo`}>
                      <ListItemText primary="Polo" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to={`/Shop/${mc}/${sc}/HRX`}>
                      <ListItemText primary="HRX" />
                    </ListItemButton>
                  </ListItem>


                </List>
              </nav>

            </Box>
          </Grid>
          <Grid item md={10} xs={12} >
            <h5 className="bgcol textcol text-center p-2">Shop Section</h5>
            <Products mc={mc} sc={sc} Brand={brand} />
          </Grid>

        </Grid>



      </div>



    </>
  )
}
