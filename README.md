README - Owing
==============

Description
-----------

Boredo is a social media that allows users to actively take part in deciding what to view on their screens

Technical Description
---------------------

The front end of the application is built using React.js. React makes CRUD actions, including getting the user API and updating payment information, to a Sinatra local server (see information below on how to set up). When a fetch request is made *application_controller.rb* uses models that are relationally mapped to the ActiveRecord tables to carry out requested actions.

Setting-up
----------

In the terminal, navigate to the *owing-server* repository, and:
1. bundle install
2. bundle exec rake server
3. bundle exec rake db:migrate
4. bundle exec rake db:seed

Then launch the React app by navigating to the *owing-client* repository, and:
1. npm install
2. npm start
