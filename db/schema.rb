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

ActiveRecord::Schema.define(version: 20171109204839) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "interests", force: :cascade do |t|
    t.bigint "user_id"
    t.string "interestable_type"
    t.bigint "interestable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["interestable_type", "interestable_id"], name: "index_interests_on_interestable_type_and_interestable_id"
    t.index ["user_id"], name: "index_interests_on_user_id"
  end

  create_table "movies", force: :cascade do |t|
    t.string "movie_name"
    t.string "movie_date"
    t.string "movie_image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "news_outlets", force: :cascade do |t|
    t.string "outlet_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "podcasts", force: :cascade do |t|
    t.string "podcast_name"
    t.string "podcast_embed"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sports", force: :cascade do |t|
    t.string "sport_name"
    t.string "team_name"
    t.string "league_name"
    t.string "division_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tvshows", force: :cascade do |t|
    t.string "show_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "interests", "users"
end
