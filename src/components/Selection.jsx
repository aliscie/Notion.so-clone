import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { thelement } from '../Actions/handlKey'
function Selection({ mentE, Indexing, element, state, set }) {

      console.log(thelement.innerText)
      const [search, setSearch] = useState('')

      const options = [{ name: 'xxxxx', icon: 'InboxIcon' }, { name: 'checkbox', icon: 'InboxIcon' }, { name: 'image', icon: 'InboxIcon' }]
      const FilterSearch = options.filter(option => {
            return option.name.toLowerCase().includes(search.toLowerCase())
      })

      function handlChoose(e) {
            // if (e.target.innerText === 'xxxxx') {
            //       console.log(Index)
            // }
            // console.log(mentE)


      }
      function handlChoose2(e) {
            // e.key == 'Enter' && console.log(FilterSearch[0].name)
      }
      return (
            <div>
                  <input onKeyPress={handlChoose2} onChange={e => setSearch(e.target.value)} placeholder='for examle todo' className='PopSearchINput' />
                  <List component="nav" aria-label="main mailbox folders">
                        {FilterSearch.map((Option) => (
                              <ListItem key={Option.name} button>
                                    <ListItemText onClick={handlChoose} primary={Option.name} />
                              </ListItem>
                        ))
                        }
                  </List>
            </div>
      )
}

export default Selection
