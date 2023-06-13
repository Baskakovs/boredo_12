# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

geographies = ["USA", "UK", "Germany", "China", "France", "Japan", "EU", "Poland", "Ukraine", "Brazil", "Canada","India", "Russia", "Australia", "Mexico", "South Korea", "Italy", "Spain", "Netherlands", "Switzerland", "Sweden", "Norway", "Argentina", "Turkey", "Saudi Arabia", "United Arab Emirates", "South Africa", "Egypt", "Indonesia", "Singapore", "Thailand", "New Zealand", "Greece", "Belgium", "Austria", "Portugal"]


puts "Clearing existing data..."
puts "Seeding the database..."

Geography.destroy_all
Category.destroy_all
Title.destroy_all
Post.destroy_all


geographies.each do |geography|
    geo = Geography.create(name: geography)
    5.times do
        Category.create(name: Faker::Lorem.words(number: 2).join(' '), geography_id: geo.id)
    end
end

categories = Category.all

categories.each do |category|
  15.times do
    phrase = Faker::Lorem.words(number: 2).join(' ')
    Title.create(name: phrase, geography_id: category.geography_id, category_id: category.id)
  end
end
titles = Title.all

puts "Done seeding!"