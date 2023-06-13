Rails.application.routes.draw do
  resources :subcomments
  resources :comments
  resources :posts
  resources :titles
  resources :categories
  resources :geographies
  resources :users
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
