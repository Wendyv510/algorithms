#!/bin/ruby

=begin
You are given an array of integers of size N. You need to print the sum of the
elements in the array, keeping in mind that some of those integers may be quite
large.
=end

n = gets.strip.to_i
arr = gets.strip
arr = arr.split(' ').map(&:to_i)
sum = 0

arr.each do |a|
  sum += a
end

puts sum