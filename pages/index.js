import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Home() {
  const [contacts, setContacts] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [loading, setLoading] = useState(false)

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

  const addContact = async (e) => {
    e.preventDefault()
    setLoading(true)

    const { data, error } = await supabase.from('contacts').insert([
      { name, email, phone, company }
    ])

    if (error) {
      alert('Error adding contact: ' + error.message)
    } else {
      setName('')
      setEmail('')
      setPhone('')
      setCompany('')
      fetchContacts()
    }

    setLoading(false)
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Dancagram CRM - Contacts</h1>

      <form onSubmit={addContact} style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginRight: 10 }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginRight: 10 }}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Add Contact'}
        </button>
      </form>

      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <strong>{contact.name}</strong> - {contact.email} - {contact.phone} - {contact.company}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
