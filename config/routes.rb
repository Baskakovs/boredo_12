Rails.application.routes.draw do
  get '/me', to: 'users#show' 
  resources :sessions
  resources :subcomments
  resources :comments
  post '/users' , to: 'users#create'
  patch '/users/update_password', to: 'users#update_password'
  resources :users
  post '/users/google', to: 'users#google_oauth'
  resources :users, only: [:create, :show] do
    resources :posts, only: [:index]
  end
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show' 
  resources :posts
  get '/posts_first', to: 'posts#first'
  get '/posts/country/:id', to: 'posts#country'
  get '/posts/category/:id', to: 'posts#category'
  get 'posts/title/:id', to: 'posts#title'

  resources :titles, only: [:index, :show]

  resources :geographies, only: [:index, :show] do
    resources :categories, only: [:index] do
      resources :titles, only: [:index]
    end
  end 

  get '/geographies', to: 'geographies#index'
  # get '/geographies/:id', to: 'categories#index_by_country'
  resources :categories, only: [:index]
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
