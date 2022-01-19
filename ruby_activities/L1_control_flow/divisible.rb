arr = [6,3,1,8,4,2,10,65,102]

arr_2 = []

arr.each do |a|
   if a % 2 != 1
      arr_2.push(a)
   end
end

print arr_2
      