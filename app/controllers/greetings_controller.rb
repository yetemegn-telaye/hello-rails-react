class GreetingsController < ApplicationController
  def random_greeting
    @random_greeting = Greeting.all.find_by(id: rand(1..Greeting.all.length))
    render json: @random_greeting
  end
end
