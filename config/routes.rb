Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_page#index"
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :shows, only: [:index, :show]
    resources :venues, only: [:show]
    resources :user_shows, only: [:index, :create, :update, :destroy]
    resources :artists, only: [:index, :show]
  end
end
