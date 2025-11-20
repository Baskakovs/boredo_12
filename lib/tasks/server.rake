desc 'Start the Rails server'
task server: :environment do
  exec 'bundle exec rails s'
end

