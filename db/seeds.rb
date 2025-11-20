# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

require 'faker'

puts "Clearing existing data..."
Geography.destroy_all
Category.destroy_all
Title.destroy_all
Post.destroy_all
Comment.destroy_all
Subcomment.destroy_all
User.destroy_all

puts "Seeding the database..."

# Define country-specific topics and sub-topics
country_topics = {
  "USA" => {
    "Technology" => ["AI Development", "Silicon Valley Startups", "Cybersecurity", "Tech Policy", "Innovation"],
    "Politics" => ["Elections", "Congress", "Supreme Court", "Foreign Policy", "Immigration"],
    "Sports" => ["NFL", "NBA", "MLB", "College Sports", "Olympics"],
    "Entertainment" => ["Hollywood", "Music Industry", "Streaming Services", "Gaming", "Comedy"],
    "Business" => ["Wall Street", "Startups", "Real Estate", "Trade", "Economy"]
  },
  "UK" => {
    "Politics" => ["Brexit", "Parliament", "Royal Family", "Scottish Independence", "NHS"],
    "Culture" => ["British Literature", "Theatre", "Music Scene", "Art & Museums", "Television"],
    "Sports" => ["Premier League", "Cricket", "Rugby", "Tennis", "Olympics"],
    "Business" => ["London Finance", "Tech Sector", "Retail", "Manufacturing", "Tourism"],
    "Education" => ["Universities", "Schools", "Research", "Student Life", "Exams"]
  },
  "Germany" => {
    "Technology" => ["Automotive Innovation", "Engineering", "Renewable Energy", "AI Research", "Startups"],
    "Politics" => ["EU Leadership", "Bundestag", "Migration Policy", "Climate Policy", "Foreign Relations"],
    "Business" => ["Manufacturing", "Export Industry", "Automotive", "Engineering", "SMEs"],
    "Culture" => ["Music", "Literature", "Art", "Festivals", "Cuisine"],
    "Sports" => ["Bundesliga", "Formula 1", "Winter Sports", "Olympics", "Football"]
  },
  "China" => {
    "Technology" => ["AI Development", "5G Networks", "E-commerce", "Mobile Apps", "Semiconductors"],
    "Business" => ["Manufacturing", "Trade", "Real Estate", "Finance", "E-commerce Giants"],
    "Politics" => ["Government Policy", "International Relations", "Economic Development", "Social Issues", "Reforms"],
    "Culture" => ["Traditional Arts", "Modern Entertainment", "Literature", "Cuisine", "Festivals"],
    "Sports" => ["Olympics", "Basketball", "Table Tennis", "Badminton", "Football"]
  },
  "France" => {
    "Culture" => ["Art & Museums", "Literature", "Cinema", "Fashion", "Cuisine"],
    "Politics" => ["Government", "EU Relations", "Social Policy", "Immigration", "Reforms"],
    "Sports" => ["Football", "Rugby", "Cycling", "Tennis", "Olympics"],
    "Business" => ["Luxury Goods", "Tourism", "Aerospace", "Agriculture", "Technology"],
    "Education" => ["Universities", "Research", "Language", "Student Life", "Exams"]
  },
  "Japan" => {
    "Technology" => ["Robotics", "Electronics", "Gaming", "AI Research", "Innovation"],
    "Culture" => ["Anime & Manga", "Traditional Arts", "Cuisine", "Festivals", "Pop Culture"],
    "Business" => ["Automotive", "Electronics", "Finance", "Manufacturing", "Startups"],
    "Sports" => ["Baseball", "Sumo", "Martial Arts", "Olympics", "Football"],
    "Politics" => ["Government", "Economic Policy", "Foreign Relations", "Social Issues", "Reforms"]
  },
  "Canada" => {
    "Politics" => ["Federal Government", "Provincial Issues", "Immigration", "Indigenous Rights", "Climate Policy"],
    "Business" => ["Natural Resources", "Technology", "Real Estate", "Finance", "Trade"],
    "Sports" => ["Hockey", "Basketball", "Baseball", "Olympics", "Winter Sports"],
    "Culture" => ["Arts", "Music", "Literature", "Film", "Multiculturalism"],
    "Technology" => ["AI Research", "Startups", "Tech Hubs", "Innovation", "Cybersecurity"]
  },
  "India" => {
    "Technology" => ["IT Services", "Startups", "Digital India", "E-commerce", "Innovation"],
    "Business" => ["Manufacturing", "Services", "Agriculture", "Finance", "Real Estate"],
    "Politics" => ["Government", "Elections", "Policy", "States", "International Relations"],
    "Culture" => ["Bollywood", "Music", "Festivals", "Cuisine", "Arts"],
    "Sports" => ["Cricket", "Hockey", "Football", "Badminton", "Olympics"]
  },
  "Australia" => {
    "Sports" => ["Cricket", "Rugby", "AFL", "Tennis", "Olympics"],
    "Business" => ["Mining", "Agriculture", "Real Estate", "Tourism", "Technology"],
    "Politics" => ["Government", "Climate Policy", "Immigration", "Indigenous Affairs", "Foreign Policy"],
    "Culture" => ["Arts", "Music", "Film", "Literature", "Beach Culture"],
    "Environment" => ["Climate Change", "Wildlife", "Conservation", "Renewable Energy", "Natural Disasters"]
  },
  "Brazil" => {
    "Sports" => ["Football", "Volleyball", "Olympics", "Formula 1", "Martial Arts"],
    "Culture" => ["Carnival", "Music", "Dance", "Cuisine", "Arts"],
    "Business" => ["Agriculture", "Energy", "Manufacturing", "Technology", "Finance"],
    "Politics" => ["Government", "Elections", "Social Policy", "Economy", "International Relations"],
    "Environment" => ["Amazon", "Climate", "Conservation", "Renewable Energy", "Wildlife"]
  }
}

# Create users first
puts "Creating users..."
users = []
10.times do |i|
  user = User.new(
    name: Faker::Name.name,
    email: "user#{i + 1}@example.com",
    password: "Password123!",
    password_confirmation: "Password123!",
    date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 65),
    google: false
  )
  user.skip_password_validation = true
  user.save!(validate: false)
  users << user
end

puts "Created #{users.count} users"

# Create geographies, categories, and titles
geographies = {}
categories = {}
titles = {}

country_topics.each do |country_name, topics_hash|
  puts "Creating #{country_name}..."
  
  # Create geography
  geography = Geography.create!(name: country_name)
  geographies[country_name] = geography
  
  # Create categories (topics) for this country
  topics_hash.each do |topic_name, subtopics|
    category = Category.create!(
      name: topic_name,
      geography_id: geography.id
    )
    categories["#{country_name}_#{topic_name}"] = category
    
    # Create titles (sub-topics) for this category
    subtopics.each do |subtopic_name|
      title = Title.create!(
        name: subtopic_name,
        geography_id: geography.id,
        category_id: category.id
      )
      titles["#{country_name}_#{topic_name}_#{subtopic_name}"] = title
    end
  end
end

puts "Created #{Geography.count} geographies"
puts "Created #{Category.count} categories"
puts "Created #{Title.count} titles"

# Create realistic posts
puts "Creating posts..."

post_templates = {
  "Technology" => {
    "AI Development" => [
      "The latest breakthroughs in machine learning are revolutionizing how we approach problem-solving. What are your thoughts on the ethical implications?",
      "I've been working on a new AI project that could help with healthcare diagnostics. Anyone else in this space?",
      "The debate around AI regulation is heating up. Where do you stand on government oversight?"
    ],
    "Silicon Valley Startups" => [
      "Just raised our Series A! The startup ecosystem here is incredible. Any other founders want to connect?",
      "The competition for talent in the Valley is insane. How are you all handling recruitment?",
      "Venture capital trends are shifting. What sectors are getting the most attention right now?"
    ],
    "Cybersecurity" => [
      "Another major data breach in the news. When will companies take security seriously?",
      "The rise of ransomware attacks is concerning. What's your company doing to protect against them?",
      "Zero-trust architecture is becoming essential. Has anyone implemented it successfully?"
    ]
  },
  "Politics" => {
    "Elections" => [
      "The upcoming election cycle is going to be intense. What issues matter most to you?",
      "Voter turnout has been increasing. Do you think this trend will continue?",
      "Campaign finance reform is long overdue. What changes would you like to see?"
    ],
    "Congress" => [
      "The latest bill passed with bipartisan support. This is a positive sign for cooperation.",
      "Gridlock in Congress is frustrating. How can we encourage more collaboration?",
      "Term limits for Congress - yes or no? What do you think?"
    ]
  },
  "Sports" => {
    "NFL" => [
      "What a game last night! That final play was incredible. Who else was watching?",
      "The playoff race is heating up. Which teams are you rooting for?",
      "Injury concerns are mounting this season. How do you think teams should handle player safety?"
    ],
    "Premier League" => [
      "The title race is wide open this season. Who do you think will come out on top?",
      "Transfer window was interesting. Which signing surprised you the most?",
      "VAR decisions continue to be controversial. Is the technology helping or hurting the game?"
    ]
  },
  "Culture" => [
    "The latest exhibition at the museum is stunning. Highly recommend checking it out!",
    "This new book I'm reading is incredible. Anyone else into [genre] literature?",
    "The music scene here is thriving. What venues are your favorites?"
  ],
  "Business" => [
    "Market trends are shifting. How is your industry adapting?",
    "Remote work is here to stay. What's your company's approach?",
    "Sustainability in business is no longer optional. What initiatives are you seeing?"
  ]
}

# Create posts for each country/topic/subtopic combination
country_topics.each do |country_name, topics_hash|
  geography = geographies[country_name]
  
  topics_hash.each do |topic_name, subtopics|
    category = categories["#{country_name}_#{topic_name}"]
    
    subtopics.each do |subtopic_name|
      title = titles["#{country_name}_#{topic_name}_#{subtopic_name}"]
      
      # Create 2-4 posts per subtopic
      rand(2..4).times do
        # Get relevant post text or generate one
        post_text = if post_templates[topic_name].is_a?(Hash) && post_templates[topic_name][subtopic_name]
          post_templates[topic_name][subtopic_name].sample
        elsif post_templates[topic_name].is_a?(Array)
          post_templates[topic_name].sample
        else
          case topic_name
          when "Technology"
            "Exciting developments in #{subtopic_name} are happening. What are your thoughts on the latest innovations?"
          when "Politics"
            "The #{subtopic_name} situation is evolving. How do you see this playing out?"
          when "Sports"
            "Great performance in #{subtopic_name} this week! Who else is following this?"
          when "Culture"
            "The #{subtopic_name} scene in #{country_name} is amazing. What are your favorite aspects?"
          when "Business"
            "#{subtopic_name} in #{country_name} is growing. What opportunities do you see?"
          else
            "Interesting discussion about #{subtopic_name} in #{country_name}. What are your thoughts?"
          end
        end
        
        Post.create!(
          user: users.sample,
          geography: geography,
          category: category,
          title: title,
          text: post_text,
          published: true
        )
      end
    end
  end
end

puts "Created #{Post.count} posts"

# Create some comments on posts
puts "Creating comments..."
Post.all.sample(Post.count / 2).each do |post|
  rand(1..3).times do
    Comment.create!(
      user_id: users.sample.id,
      post_id: post.id,
      text: [
        "Great point! I completely agree.",
        "Interesting perspective. I hadn't thought of it that way.",
        "This is a complex issue. What about [related topic]?",
        "Thanks for sharing this. Very informative!",
        "I have a different view on this. What do others think?",
        "This resonates with me. Thanks for posting!",
        "Could you elaborate on [specific point]?",
        "I've had similar experiences. It's good to know I'm not alone."
      ].sample
    )
  end
end

puts "Created #{Comment.count} comments"

# Create some subcomments
puts "Creating subcomments..."
Comment.all.sample(Comment.count / 3).each do |comment|
  rand(1..2).times do
    Subcomment.create!(
      user_id: users.sample.id,
      comment_id: comment.id,
      post_id: comment.post_id,
      text: [
        "Exactly!",
        "I second that.",
        "Well said.",
        "Couldn't agree more.",
        "That's a good point.",
        "I see what you mean."
      ].sample
    )
  end
end

puts "Created #{Subcomment.count} subcomments"

puts "Done seeding!"
puts "Summary:"
puts "  - #{Geography.count} countries"
puts "  - #{Category.count} topics"
puts "  - #{Title.count} sub-topics"
puts "  - #{User.count} users"
puts "  - #{Post.count} posts"
puts "  - #{Comment.count} comments"
puts "  - #{Subcomment.count} subcomments"
