def bubble_sort(a)
    n=a.length
    for i in 0...n-1
     for j in 0...n-i-1
         if a[j]>a[j+1]
             temp=a[j]
             a[j]=a[j+1]
             a[j+1]=temp
         end
     end
    end
    return a
 end