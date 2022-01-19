print "How old are you? \n"

while user_input = Integer(gets.chomp) rescue ""
  if user_input.is_a? Integer
    puts "In 10 years you will be:"
    puts user_input + 10
    puts "In 20 years you will be:"
    puts user_input + 20
    puts "In 30 years you will be:"
    puts user_input + 30
    puts "In 40 years you will be:"
    puts user_input + 40
    break
  else
    puts "Not an age!"
    break
  end
end