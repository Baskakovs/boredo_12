README - Boredo
==============

Description
-----------

Boredo is a social media platform that allows users to actively take part in deciding what to view on their screens. Users can filter content by country, topic, and sub-topic, creating a personalized browsing experience.

Technical Description
---------------------

The front end of the application is built using React.js. React makes CRUD actions, including getting the user API and updating payment information, to a Rails API server (see information below on how to set up). When a fetch request is made, *application_controller.rb* uses models that are relationally mapped to the ActiveRecord tables to carry out requested actions.

Dependencies & Versions
------------------------

### Backend (Rails API)

**Ruby Version:** 2.7.4

**Key Gems:**
- Rails: ~> 6.1.3, >= 6.1.3.2
- PostgreSQL (pg): ~> 1.1
- Puma: ~> 5.0
- bcrypt: ~> 3.1.7
- active_model_serializers: ~> 0.10.12
- faker: ~> 2.18.0
- googleauth: latest
- random-password: ~> 0.1.2
- bootsnap: >= 1.4.4
- listen: ~> 3.3
- spring: latest
- rspec-rails: ~> 5.0.0
- rspec-json_expectations: latest
- shoulda-matchers: ~> 4.0
- byebug: latest (development/test)
- tzinfo-data: latest (Windows)

### Frontend (React)

**Node Version:** >=16.x

**Key Dependencies:**
- React: ^17.0.2
- React DOM: ^17.0.2
- React Router DOM: ^5.2.0
- React Redux: ^8.0.5
- Redux Toolkit: ^1.9.5
- React Scripts: ^5.0.1
- Styled Components: ^6.0.0
- Material-UI (@mui/material): ^5.3.0
- @emotion/react: ^11.11.0
- @emotion/styled: ^11.11.0
- @testing-library/react: ^11.2.7
- @testing-library/jest-dom: ^5.13.0
- @testing-library/user-event: ^12.8.3
- web-vitals: ^1.1.2

Setting-up
----------

### Backend Setup

In the terminal, navigate to the project root, and:

1. Install Ruby dependencies:
   ```bash
   bundle install
   ```

2. Set up the database:
   ```bash
   bundle exec rake db:migrate
   bundle exec rake db:seed
   ```

3. Start the Rails server:
   ```bash
   bundle exec rake server
   ```
   Or use:
   ```bash
   bundle exec rails s
   ```

### Frontend Setup

Navigate to the `client` directory, and:

1. Install Node dependencies:
   ```bash
   npm install
   ```

2. Start the React development server:
   ```bash
   npm start
   ```

The React app will run on `http://localhost:4000` and the Rails API on `http://localhost:3000`.

### Running Both Servers

Alternatively, you can use the `start` rake task to run both servers simultaneously:
```bash
bundle exec rake start
```

This uses `heroku local -f Procfile.dev` to run both the Rails API and React client.

Database Schema
---------------

The application uses PostgreSQL with the following main models:
- **Users**: User accounts with authentication
- **Geographies**: Countries/regions for content filtering
- **Categories**: Topics within each geography
- **Titles**: Sub-topics within each category
- **Posts**: User-generated content linked to geography, category, and title
- **Comments**: Comments on posts
- **Subcomments**: Replies to comments

Features
--------

- User authentication (email/password and Google OAuth)
- Content filtering by country, topic, and sub-topic
- Post creation, editing, and deletion
- Commenting and replying to comments
- User profile management
- Personalized post feed
