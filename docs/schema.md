# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## artists
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
artist_name          | string    | not null, indexed, unique
jambase_id           | integer   | not null, indexed, unique

## venue
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
venue_name      | string    | not null, indexed, unique
address         | string    | not null
city						| string    | not null
state_code			| string    | not null
country 				| string    | not null
country_code    | string    | not null
zip_code        | integer   | not null
url  	          | string    | not null
latitude        | integer   | not null
longitude       | integer   | not null
jambase_id      | integer   | not null, indexed, unique

## show
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
venue_id        | integer   | not null, indexed
date            | date      | not null
url							| string		|
jambase_id      | integer   | not null, indexed, unique

## show_artists
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
show_id         | integer   | not null, indexed
artist_id       | integer   | not null, indexed

## user_shows
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
show_id         | integer   | not null, indexed
user_id         | integer   | not null, indexed
attending       | integer   | not null

## Associations
- A venue has many shows, a show belongs to a venue
- An Artist has many shows through show_artists
- A show has many artists through show_artists
- A User has many shows through user_shows
- A Show has many users (attending) through user_shows

## Why are there so many tables
JamBase currently limits me to 2 calls per second, 50 calls per day, meaning that I need to reduce the number of calls I can make. Since a person's current concerts and previous shows would require at least one call each, it would not only quickly burn through my call count, I also would have a very slow interface, since a person with more than 2 concerts will need to wait at least 1 second. If I am seeing 5 shows in a month, it will take 2 seconds of waiting.

I will use the jambase_id in the venue, artist, and show table for quick look up and comparison against my current database (which will tell me if I have to add any one of the three)

