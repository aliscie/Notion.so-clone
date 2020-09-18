import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { thelement } from '../Actions/handlKey'
function Selection({ setShow, mentE, Indexing, element, state, set }) {
      const [selecting, setSel] = useState()
      const [search, setSearch] = useState('')

      const options = [{ name: 'normal', icon: 'InboxIcon' }, { name: 'checkbox', icon: 'InboxIcon' }, { name: 'image', icon: 'InboxIcon' }]
      const FilterSearch = options.filter(option => {
            return option.name.toLowerCase().includes(search.toLowerCase())
      })

      function handlChoose(e) {
            const index = state.findIndex(elem => elem.id == thelement.id)
            setSel(e.target.innerText)
            setShow(false)
      }
      function handlChoose2(e) {
            if (e.key == 'Enter') {
                  setSel(FilterSearch[0].name)
                  setShow(false)
            }
      }
      const index = state.findIndex(elem => elem.id == thelement.id)
      if (selecting === 'normal') {
            state[index].checkBox = null
      }
      if (selecting === 'checkbox') {
            state[index].checkBox = false
      }
      return (
            <div>
                  <input autoFocus style={{ width: '100%', backgroundColor: 'rgba(140, 140, 140, 0.85)', border: 'none', outline: 'none' }} onKeyPress={handlChoose2} onChange={e => setSearch(e.target.value)} placeholder='for examle todo' className='PopSearchINput' />
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
