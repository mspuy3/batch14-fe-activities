input_prompt = "input: "
puts "Input name to greet! (Input STOP to end)"
print input_prompt

while user_input = gets.chomp
  case user_input
  when "STOP"
    puts "Finally..."
    break
  else
   puts "Hello there #{user_input}!"
   puts "Input name to greet! (Input STOP to end)"
   print input_prompt
  end
end