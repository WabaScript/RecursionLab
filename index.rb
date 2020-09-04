# Code your solution here!
# Write a recursive function to print out all of the characters in a string.

def printString(n)
    puts n[0]
    if n.length > 1
      substring = n[1..n.length]
      printString(substring)
    else 
      return
    end
end
printString('tacotuesday');


# Once we've verified that our solution works, let's move it over to our `index.js` file and start 
# attacking the remaining challenges in this lab.

# Additional string challenges

#  1. Write out a recursive function to reverse a string.
def reverseString(string)
    return string if string.length <= 1  
    rev = reverseString(string[1..-1])
    rev += string[0]
end
puts reverseString('big cow party here!!!!')

#  2. Write out a recursive function to see if a word is a palindrome.
def checkPalindrome(str)
    len = str.length
    return true if len <= 1
    return false if str[0] != str[len - 1]
    checkPalindrome(str[1..-2])
end
puts checkPalindrome('racecar')

#  Array challenges

# Arrays are another type of recursion-happy data structure. This is because, similar to 
# the string–substring relationship, the properties of an array can be thought of as 
# a series of sub-arrays or, in the context of our `printString()` code above, 
# a combination of sub-arrays and a final element.

# 1. Given an array and an index, write a recursive function to add up the elements of an array.
def addUpTo(arr, index)
    if (index <= 0)
      return arr[0]
    end
    return addUpTo(arr, index - 1) + arr[index];
end
p addUpTo([3,5,9,0,3,4], 4)

# 2. Write a recursive function to find the largest integer in an array.
def maxOf(arr)
    max = arr[arr.length - 1]
    if arr.length == 1
      return max
    end
    if max > arr[arr.length - 2]
      arr.slice!(arr.length - 2, 1)
    else
      arr.slice!(arr.length - 1, 1)
    end
    return maxOf(arr)
end

# 3. Write out a function to see if an array includes a given element.
def includesNumber(arr, n)
    if arr.length == 1 and arr[0] != n
      puts "Element not found"
      return false
    end
    if arr[-1] == n
      puts "Element found"
      return true
    else
      arr.pop
    return includesNumber(arr, n)
    end
end
  