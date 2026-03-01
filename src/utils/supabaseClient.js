import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 
"https://rjtninesqqbeluimnvsd.supabase.co"
const supabaseKey = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqdG5pbmVzcXFiZWx1aW1udnNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1NjAxNzIsImV4cCI6MjA4NzEzNjE3Mn0.oi6_kYbbMXuOAHGt7SNl6mNldF3iW2DdFMeEuA57Q3M'


export const supabase = 
createClient(supabaseUrl, supabaseKey)

