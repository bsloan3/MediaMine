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

ActiveRecord::Schema.define(version: 20171109191556) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "movies", force: :cascade do |t|
    t.string "movie_name"
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

  create_table "user_movies", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "movie_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["movie_id"], name: "index_user_movies_on_movie_id"
    t.index ["user_id"], name: "index_user_movies_on_user_id"
  end

  create_table "user_news_outlets", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "news_outlet_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["news_outlet_id"], name: "index_user_news_outlets_on_news_outlet_id"
    t.index ["user_id"], name: "index_user_news_outlets_on_user_id"
  end

  create_table "user_podcasts", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "podcast_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["podcast_id"], name: "index_user_podcasts_on_podcast_id"
    t.index ["user_id"], name: "index_user_podcasts_on_user_id"
  end

  create_table "user_sports", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "sport_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["sport_id"], name: "index_user_sports_on_sport_id"
    t.index ["user_id"], name: "index_user_sports_on_user_id"
  end

  create_table "user_tvshows", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "tvshow_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tvshow_id"], name: "index_user_tvshows_on_tvshow_id"
    t.index ["user_id"], name: "index_user_tvshows_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "user_movies", "movies"
  add_foreign_key "user_movies", "users"
  add_foreign_key "user_news_outlets", "news_outlets"
  add_foreign_key "user_news_outlets", "users"
  add_foreign_key "user_podcasts", "podcasts"
  add_foreign_key "user_podcasts", "users"
  add_foreign_key "user_sports", "sports"
  add_foreign_key "user_sports", "users"
  add_foreign_key "user_tvshows", "tvshows"
  add_foreign_key "user_tvshows", "users"
end
