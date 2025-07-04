// pages/index.js
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Home() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    const { data, error } = await supabase.from('contacts').select('*')
    if (error) {
      console.error('Error fetching contacts:', error)
    } else {
      setContacts(data)
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Dancagram CRM - Contacts</h1>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <strong>{contact.name}</strong> - {contact.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
