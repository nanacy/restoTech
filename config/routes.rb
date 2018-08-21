Rails.application.routes.draw do
  root 'static_pages#home'
  get '/menu', to:'static_pages#menu'
  get '/booking', to:'static_pages#booking'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
