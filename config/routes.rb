Rails.application.routes.draw do
  root 'root#index'
  get '/get_random_greeting' => 'greetings#get_random_greeting'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
