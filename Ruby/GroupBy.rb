def group_by_marks(marks, pass_marks)
    marks.group_by{|name,mark| mark >= pass_marks ? 'Passed':'Failed'}
  end