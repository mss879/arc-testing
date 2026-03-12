-- 1. Create the upcoming_launches table
create table if not exists upcoming_launches (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text,
  image_url text not null,
  launch_date timestamp with time zone,
  status text default 'planned', -- planned, development, ready
  display_order integer default 0
);

-- 2. Enable Row Level Security (RLS)
alter table upcoming_launches enable row level security;

-- 3. Create Policy: Allow Public Read Access
create policy "Allow public read access" on upcoming_launches
  for select
  using (true);

-- 4. Create Policy: Allow Authenticated Users (Admins) to Insert/Update/Delete
create policy "Allow authenticated insert" on upcoming_launches
  for insert
  with check (auth.role() = 'authenticated');

create policy "Allow authenticated update" on upcoming_launches
  for update
  using (auth.role() = 'authenticated');

create policy "Allow authenticated delete" on upcoming_launches
  for delete
  using (auth.role() = 'authenticated');

-- 5. Create Storage Bucket for Launches
insert into storage.buckets (id, name, public)
values ('launches', 'launches', true)
on conflict (id) do nothing;

-- 6. Storage Policy: Allow Public Read Access to 'launches' bucket
create policy "Give public access to launches"
on storage.objects for select
using ( bucket_id = 'launches' );

-- 7. Storage Policy: Allow Authenticated Users to Upload/Delete in 'launches' bucket
create policy "Allow authenticated uploads"
on storage.objects for insert
with check ( bucket_id = 'launches' and auth.role() = 'authenticated' );

create policy "Allow authenticated updates"
on storage.objects for update
with check ( bucket_id = 'launches' and auth.role() = 'authenticated' );

create policy "Allow authenticated deletes"
on storage.objects for delete
using ( bucket_id = 'launches' and auth.role() = 'authenticated' );
