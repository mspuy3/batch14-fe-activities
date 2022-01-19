h = {a:1, b:2, c:3, d:4}

puts "This is the hash h:"
puts h

puts "Get the value of key b:" 
puts h["b"]

h.merge!(e:5)

puts "Add to this hash the key:value pair {e:5}:"
puts h