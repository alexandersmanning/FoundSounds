Rails.application.routes.draw do
  root to: "static_page#index"
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :shows, only: [:index, :show]
    resources :venues, only: [:show]
    resources :user_shows, only: [:index, :create, :update, :destroy]
  end
end
