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

geographies = Geography.all

geographies.each do |geography|
    Geography.create(name: geography)
end

categories = Category.all

categories.each do |category|
  15.times do
    phrase = Faker::Lorem.words(number: 2).join(' ')
    Title.create(name: phrase, geography_id: category.geography_id, category_id: category.id)
  end
end
titles = Title.all

titles.each do |title|
  Post.create(text: Faker::Lorem.paragraph(sentence_count: 3), title_id: title.id, geography_id: title.geography_id, category_id: title.category_id, user_id: User.all.sample.id)
end

puts "Done seeding!"