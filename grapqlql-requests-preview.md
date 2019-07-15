{
  expenses {
    value,
    description,
    date
  }
  incomes {
    value,
    description,
    date
  }
}

{
  expenses {
    id
    value
    mainCategory
  }
  categories {
    name
    mainCategory
  }
}