const getTheTitles = function(books) {
  let names=[]
	for(let i=0;i<books.length;i++)
  {
    names[i]=books[i].title
  }
  return names
};

// Do not edit below this line
module.exports = getTheTitles;