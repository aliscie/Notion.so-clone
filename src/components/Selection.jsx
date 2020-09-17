import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Selection() {
      const [search, setSearch] = useState('')


      const options = [{ name: 'xxxxx', icon: 'InboxIcon' }, { name: 'checkbox', icon: 'InboxIcon' }, { name: 'image', icon: 'InboxIcon' }]
      const FilterSearch = options.filter(option => {
            return option.name.toLowerCase().includes(search.toLowerCase())
      })

      return (
            <div>
                  <input onChange={e => setSearch(e.target.value)} placeholder='for examle todo' className='PopSearchINput' />
                  <List component="nav" aria-label="main mailbox folders">
                        {FilterSearch.map((Option) => (
                              <ListItem key={Option.name} button>
                                    <ListItemText primary={Option.name} />
                              </ListItem>
                        ))
                        }
                  </List>
            </div>
      )
}

export default Selection
