
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vebmxvpnomqtjigkjolh.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlYm14dnBub21xdGppZ2tqb2xoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4NDIxOTEsImV4cCI6MjAwOTQxODE5MX0.90lvBapXYZ6aVowg-hT6C4mR0ZZDBaJdIXI7la0OFlE"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;