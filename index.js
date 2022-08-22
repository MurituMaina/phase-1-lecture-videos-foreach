let books = [
    {
      title: "Eloquent JavaScript",
      price: 16.00,
      inventory: 5
    },
    {
      title: "JavaScript: The Good Parts",
      price: 10.50,
      inventory: 10
    },
    {
      title: 'Learn JavaScript VISUALTYY',
      price: 25.00,
      inventory: 2
    },
    {
      title: 'You don\'t Know JavaScript',
      price: 60.00,
      inventory: 8
    },
    {
      title: 'JavaScript: The Definitive Guide',
      price: 18.95,
      inventory: 7
    },
  ]
//Loop through using a function
  // function loopThrough(inventory, foo){
  //   for(let item of inventory){
  //       foo(item)
  //   }
  // }

  //Lopp through using forEach() Method
  // books.forEach(logTitle)

  // function logTitle(item){
  //   console.log(item.title.toUpperCase())
  // }
  // loopThrough(books, logTitle)

  // forEach() unanonymous Function 

  books.forEach(item => 
    // console.log(item.title.toLowerCase())
    console.log(item.price)

  )