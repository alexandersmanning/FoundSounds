Rails.application.routes.draw do

  namespace :api do
  get 'venues/show'
  end

  root to: "static_page#index"
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :shows, only: [:index, :show]
    resources :venues, only: [:show]
  end
end
