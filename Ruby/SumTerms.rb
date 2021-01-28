def sum_terms(n)
    arr = create_series(n)
      arr.reduce(0, :+)
  end
  
  def create_series(n)
      series =[]
      1.upto(n) do |i|
          series.push(i**2 + 1)
      end 
      series
  end 