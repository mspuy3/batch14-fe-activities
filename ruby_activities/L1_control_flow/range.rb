print "Enter a number: "

number = Integer(gets) rescue false

if number == false
  puts "not a number"
else
  if number < 0
    puts "It's less than 0!"
  elsif number.between?(0, 50)
    puts "It's between 0 and 50"
  elsif number.between?(51,100)
  	puts "It's between 51 and 100"
  else
    puts "It's over 100!"
  end
end