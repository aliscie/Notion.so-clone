import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
      button: {
            display: 'block',
            marginTop: theme.spacing(2),
      },
      formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
      },
}));
function Selection() {
      const [search, setSearch] = useState('')
      const classes = useStyles();
      const [age, setAge] = React.useState('');
      const [open, setOpen] = React.useState(false);
      const handleChange = (event) => {
            setAge(event.target.value);
      };

      const handleClose = () => {
            setOpen(false);
      };

      const handleOpen = () => {
            setOpen(true);
      };
      const options = [{ name: 'xxxxx', icon: 'InboxIcon' }, { name: 'checkbox', icon: 'InboxIcon' }, { name: 'image', icon: 'InboxIcon' }]
      const FilterSearch = options.filter(option => {
            return option.name.toLowerCase().includes(search.toLowerCase())
      })
      console.log(...FilterSearch)
      return (
            <div>
                  <input onChange={e => setSearch(e.target.value)} placeholder='for examle todo' className='PopSearchINput' />
                  {FilterSearch.map((Option) => (
                        <List component="nav" aria-label="main mailbox folders">
                              <ListItem button>
                                    <ListItemIcon>
                                          <Option.icon />
                                    </ListItemIcon>
                                    <ListItemText primary={Option.name} />
                              </ListItem>
                        </List>
                  ))
                  }
            </div>
      )
}

export default Selection
