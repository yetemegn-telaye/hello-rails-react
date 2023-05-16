class GreetingsController < ApplicationController
  def get_random_greeting
    @random_greeting = Greeting.all.find_by(id: rand(1..Greeting.all.length))
    render json: @random_greeting
  end
end
