// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://miwllayzcvlttpteqxpm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pd2xsYXl6Y3ZsdHRwdGVxeHBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2MjY1ODAsImV4cCI6MjA2NzIwMjU4MH0.HONdY2DUaz2sKjLgnNbYQlgeyu51XS9HPgEPT4Nmfvk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

