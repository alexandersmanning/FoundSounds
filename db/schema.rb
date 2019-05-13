# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2017_01_24_233959) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artists", force: :cascade do |t|
    t.string "name", null: false
    t.string "img_url"
    t.integer "api_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["api_id"], name: "index_artists_on_api_id", unique: true
    t.index ["name"], name: "index_artists_on_name"
  end

  create_table "show_artists", force: :cascade do |t|
    t.integer "show_id", null: false
    t.integer "artist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "billing_index"
    t.index ["artist_id"], name: "index_show_artists_on_artist_id"
    t.index ["show_id"], name: "index_show_artists_on_show_id"
  end

  create_table "shows", force: :cascade do |t|
    t.datetime "date", null: false
    t.string "url"
    t.integer "api_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "venue_id", null: false
    t.index ["api_id"], name: "index_shows_on_api_id", unique: true
    t.index ["date"], name: "index_shows_on_date"
  end

  create_table "user_shows", force: :cascade do |t|
    t.integer "show_id", null: false
    t.integer "user_id", null: false
    t.integer "attending", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["show_id"], name: "index_user_shows_on_show_id"
    t.index ["user_id"], name: "index_user_shows_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  create_table "venues", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.integer "zip_code", null: false
    t.string "url"
    t.decimal "latitude", null: false
    t.decimal "longitude", null: false
    t.integer "api_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
    t.index ["api_id"], name: "index_venues_on_api_id", unique: true
    t.index ["name", "city"], name: "by_name_city", unique: true
  end

end
